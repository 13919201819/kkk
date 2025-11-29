'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Send, Sparkles, Volume2, VolumeX, Phone, Mail, Calendar, ExternalLink, ArrowRight } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';

// --- Type Definitions for Speech API to satisfy ESLint ---

interface WindowWithWebkit extends Window {
  webkitSpeechRecognition: new () => SpeechRecognition;
}

interface SpeechEvent extends Event {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

// --- Standard Type Definitions ---
type RedirectTarget = 'contact' | 'services' | 'domains' | 'schedule';

interface FollowUp {
  text: string;
  key?: string;
  target?: string;
}

interface Message {
  type: 'user' | 'bot';
  text: string;
  id: string;
  isVoice?: boolean;
  followUps?: FollowUp[];
  showSolutions?: boolean;
  showIndustries?: boolean;
  showContactButtons?: boolean;
  showScheduleButton?: boolean;
  autoRedirect?: RedirectTarget;
  showRedirectConfirmation?: RedirectTarget; 
}

interface InstantResponse {
  key: string;
  question?: string | string[]; 
  text: string;
  followUps?: FollowUp[];
  showSolutions?: boolean;
  showIndustries?: boolean;
  showContactButtons?: boolean;
  showScheduleButton?: boolean; 
  autoRedirect?: RedirectTarget;
  redirectTarget?: RedirectTarget;
}

interface Solution {
  text: string;
  url: string;
}

interface Industry {
  text: string;
  url?: string;
}

interface InstantResponseSource {
  question?: string | string[];
  text: string;
  followUps?: FollowUp[];
  showSolutions?: boolean;
  showIndustries?: boolean;
  showContactButtons?: boolean;
  showScheduleButton?: boolean; 
}

export default function AIAssistant() {
  const { t, i18n } = useTranslation();

  // --- State ---
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);

  // --- Refs ---
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null); 
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const voiceLoopTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const messageIdCounter = useRef(0);

  const API_URL = 'https://contat-email-backend.vercel.app/api/ask';

  // === Preload and Memoize Data ===
  const { instantResponsesMap, solutions, industries } = useMemo(() => {
    const responses = t('chatbot.instantResponses', { returnObjects: true }) as Record<string, InstantResponseSource>;
    const map = new Map<string, InstantResponse>();

    Object.entries(responses).forEach(([key, value]) => {
      let target: RedirectTarget | undefined;
      if (key.includes('redirectSolutions') || key.includes('redirectServices')) target = 'services';
      if (key.includes('redirectContact')) target = 'contact';
      if (key.includes('bookConsultation')) target = 'schedule';
      if (key.includes('industries')) target = 'domains';
      
      const instantValue: InstantResponse = { 
        key, 
        redirectTarget: target, 
        ...value 
      } as InstantResponse;
      
      map.set(key, instantValue);
      
      if (value.question) {
        const questionString = Array.isArray(value.question) ? value.question.join(',') : value.question;
        const questions = questionString
          .toLowerCase()
          .split(',')
          .map((q: string) => q.trim().replace(/[?.,!]/g, ''))
          .filter((q: string) => q);
        questions.forEach((q: string) => map.set(q, instantValue));
      }
    });

    return {
      instantResponsesMap: map,
      solutions: (t('chatbot.solutions', { returnObjects: true }) as Solution[] | undefined) ?? [], 
      industries: (t('chatbot.industries', { returnObjects: true }) as Industry[] | undefined) ?? [], 
    };
  }, [t]);

  // === Utility Functions ===
  const normalize = (text: string): string => {
    return text.toLowerCase().replace(/[?.,!;:]/g, '').replace(/\s+/g, ' ').trim();
  };

  const findInstantResponse = (input: string): InstantResponse | null => {
    const normalized = normalize(input);
    const exactMatch = instantResponsesMap.get(normalized);
    if (exactMatch) return exactMatch;

    let instantResponse: InstantResponse | undefined;

    if (normalized.includes('consultation') || normalized.includes('book') || normalized.includes('schedule')) {
      instantResponse = instantResponsesMap.get('bookConsultation');
      if (instantResponse) return { ...instantResponse, showScheduleButton: true, redirectTarget: 'schedule' };
    }

    if (normalized.includes('service') || normalized.includes('solution') || normalized.includes('what do you do')) {
      instantResponse = instantResponsesMap.get('solutions');
      if (instantResponse) return { ...instantResponse, showSolutions: true, redirectTarget: 'services' };
    }
    
    if (normalized.includes('industry') || normalized.includes('domain') || normalized.includes('sector')) {
      instantResponse = instantResponsesMap.get('industries');
      if (instantResponse) return { ...instantResponse, showIndustries: true, redirectTarget: 'domains' };
    }

    if (normalized.includes('contact') || normalized.includes('talk to human') || normalized.includes('phone') || normalized.includes('email')) {
      instantResponse = instantResponsesMap.get('contactClumoss');
      if (instantResponse) return { ...instantResponse, showContactButtons: true, redirectTarget: 'contact' };
    }
    
    return null;
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => scrollToBottom(), [messages]);

  // === Voice Synthesis (Speak) Logic ===
  const stopSpeaking = useCallback(() => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();
    setIsSpeaking(false);
    currentUtteranceRef.current = null;
  }, []);

  const cleanForSpeech = (txt: string) =>
    txt.replace(/\*\*/g, '').replace(/\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[\u{1F300}-\u{1F9FF}]/gu, '').replace(/\n{3,}/g, '\n\n').trim();

  const speak = useCallback((text: string) => {
    stopSpeaking();
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(cleanForSpeech(text));
    const voices = speechSynthesis.getVoices();
    const lang = i18n.language.split('-')[0];

    const voice = voices.find(v => v.lang.startsWith(lang) && /female|samantha|karen|helena/i.test(v.name)) ||
      voices.find(v => v.lang.startsWith(lang)) || null;

    if (voice) utter.voice = voice;
    utter.rate = 1.15;
    utter.pitch = 1.3;
    utter.volume = 1.0;

    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => {
      setIsSpeaking(false);
      if (isVoiceMode && !isTyping) {
        voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 600);
      }
    };

    currentUtteranceRef.current = utter;
    speechSynthesis.speak(utter);
  }, [i18n.language, stopSpeaking, isVoiceMode, isTyping]);

  // === Voice Recognition (Listen) Logic ===
  const stopVoiceLoop = useCallback(() => {
    clearTimeout(voiceLoopTimerRef.current!);
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const startVoiceLoop = useCallback(() => {
    if (!recognitionRef.current || !isVoiceMode || isListening) return;
    clearTimeout(voiceLoopTimerRef.current!);
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch (e) { 
      void e; 
      voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
    }
  }, [isVoiceMode, isListening]);

  const toggleVoiceMode = () => {
    stopSpeaking();
    if (isVoiceMode) {
      stopVoiceLoop();
      setIsVoiceMode(false);
    } else {
      setIsVoiceMode(true);
      startVoiceLoop();
    }
  };

  useEffect(() => {
    const win = window as unknown as WindowWithWebkit;
    if (!('SpeechRecognition' in win || 'webkitSpeechRecognition' in win)) return;
    const SR = win.SpeechRecognition || win.webkitSpeechRecognition;
    
    if (SR) recognitionRef.current = new SR(); 
    
    if (recognitionRef.current) {
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = i18n.language;

        recognitionRef.current.onresult = (e: SpeechEvent) => { 
          const transcript = e.results[0][0].transcript.trim();
          if (transcript) {
            setMessage(transcript);
            stopVoiceLoop();
            setTimeout(() => handleSend(transcript, true), 100);
          }
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
          if (isVoiceMode) voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
          if (isVoiceMode && !isTyping && !isSpeaking) voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 300);
        };
    }

    return () => {
      stopVoiceLoop();
      stopSpeaking();
      clearTimeout(inactivityTimerRef.current!);
    };
  }, [isVoiceMode, i18n.language, startVoiceLoop, stopVoiceLoop, stopSpeaking, isTyping, isSpeaking]);


  // === Inactivity and Greeting Logic ===
  const resetInactivity = useCallback(() => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    const tId = setTimeout(() => {
      if (messages.length <= 1 && !isSpeaking && !isListening && isOpen) {
        const reminder: Message = {
          type: 'bot',
          text: t('chatbot.reminder'),
          id: `msg-${Date.now()}-${messageIdCounter.current++}`,
          followUps: instantResponsesMap.get('greetingHi')?.followUps ?? [], 
        };
        setMessages(m => [...m, reminder]);
        speak(reminder.text);
      }
    }, 10000);
    inactivityTimerRef.current = tId;
  }, [messages.length, isSpeaking, isListening, isOpen, t, speak, instantResponsesMap]);

  useEffect(() => {
    if (!isOpen || hasGreeted) return;
    const greet = () => {
      const greeting: Message = {
        type: 'bot',
        text: t('chatbot.greeting'),
        id: `msg-${Date.now()}-${messageIdCounter.current++}`,
        followUps: instantResponsesMap.get('greetingHi')?.followUps ?? [],
      };
      setMessages([greeting]);
      setHasGreeted(true);
      speak(greeting.text);
      resetInactivity();
    };
    const timer = setTimeout(greet, 500);
    return () => clearTimeout(timer);
  }, [isOpen, hasGreeted, t, speak, resetInactivity, instantResponsesMap]);

  // === API Call Handler ===
  const callAPI = async (query: string): Promise<{ text: string, followUps: FollowUp[] } | null> => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        signal: abortControllerRef.current.signal,
      });
      const data = await res.json();
      return { text: data.response || t('chatbot.apiError'), followUps: [] };
    } catch (e: unknown) { 
      if (e instanceof Error && e.name === 'AbortError') return null;
      console.error('API Error:', e);
      return { text: t('chatbot.connectionError'), followUps: [] };
    }
  };

  // --- Redirect Handlers ---
  const executeRedirect = (type: RedirectTarget) => {
    const map: Record<RedirectTarget, string> = {
      contact: '/contact',
      services: '/services',
      domains: '/technologies',
      schedule: '/scheduler', 
    };
    const url = map[type];
    const msg: Message = {
      type: 'bot',
      text: t('chatbot.redirecting', { page: type }),
      id: `msg-${Date.now()}-${messageIdCounter.current++}`,
    };
    setMessages(m => [...m, msg]);
    speak(msg.text);
    setTimeout(() => window.open(url, '_blank'), 1500);
  };

  const handleActionRedirect = (type: RedirectTarget) => {
    const confirmationMsg: Message = {
      type: 'bot',
      text: t('chatbot.confirmRedirectQuestion', { page: type.toUpperCase() }),
      id: `msg-${Date.now()}-${messageIdCounter.current++}`,
      showRedirectConfirmation: type,
      followUps: [], 
      showSolutions: false,
      showIndustries: false,
      showContactButtons: false,
      showScheduleButton: false,
    };
    setMessages(m => [...m, confirmationMsg]);
  };

  const handleRedirectConfirmation = (target: RedirectTarget, confirmed: boolean) => {
    if (confirmed) {
      executeRedirect(target);
    } else {
      const followUpMsg: Message = {
        type: 'bot',
        text: t('chatbot.redirectCanceled'),
        id: `msg-${Date.now()}-${messageIdCounter.current++}`,
        followUps: instantResponsesMap.get('greetingHi')?.followUps ?? [], 
      };
      setMessages(m => [...m, followUpMsg]);
    }
  };

  // === Main Send Handler ===
  const handleSend = async (text: string, fromVoice = false) => {
    if (!text.trim() || isTyping) return;
    resetInactivity();
    stopVoiceLoop();
    stopSpeaking();

    const userMsg: Message = {
      type: 'user',
      text,
      id: `msg-${Date.now()}-${messageIdCounter.current++}`,
      isVoice: fromVoice,
    };
    setMessages(m => [...m, userMsg]);
    setMessage('');

    const instant = findInstantResponse(text);
    if (instant) {
      const botMsg: Message = {
        type: 'bot',
        text: instant.text,
        id: `msg-${Date.now()}-${messageIdCounter.current++}`,
        followUps: instant.followUps ?? [],
        showSolutions: instant.showSolutions,
        showIndustries: instant.showIndustries,
        showContactButtons: instant.showContactButtons,
        showScheduleButton: instant.showScheduleButton,
        autoRedirect: instant.autoRedirect, 
      };

      if (instant.redirectTarget) {
        if (instant.key && instant.key.startsWith('redirect')) {
          botMsg.showRedirectConfirmation = instant.redirectTarget;
          botMsg.followUps = []; 
          botMsg.showSolutions = false;
          botMsg.showIndustries = false;
          botMsg.showContactButtons = false;
          botMsg.showScheduleButton = false;
        } 
      }
      setMessages(m => [...m, botMsg]);
      if (fromVoice) speak(botMsg.text);
      if (botMsg.autoRedirect) executeRedirect(botMsg.autoRedirect);
      return;
    }

    setIsTyping(true);
    const apiRes = await callAPI(text);
    setIsTyping(false);
    
    if (apiRes) {
      const botMsg: Message = {
        type: 'bot',
        text: apiRes.text,
        id: `msg-${Date.now()}-${messageIdCounter.current++}`,
        followUps: [
          { text: t('chatbot.buttons.viewServices'), key: 'solutions' }, 
          { text: t('chatbot.buttons.contactUs'), key: 'contactClumoss' },
        ],
      };
      setMessages(m => [...m, botMsg]);
      if (fromVoice) speak(botMsg.text);
    }
  };

  const handleFollowUp = (suggestion: FollowUp) => {
    setIsVoiceMode(false);
    const text = suggestion.text;
    const key = suggestion.key || suggestion.target; 
    if (key) {
      const instant = instantResponsesMap.get(key);
      const questionString = instant?.question;
      const triggerText = (questionString ? (Array.isArray(questionString) ? questionString[0] : questionString.split(',')[0]).trim() : instant?.text?.split('\n')[0].trim()) || text;
      handleSend(triggerText, false); 
      return;
    }
    handleSend(text, false);
  };

  // --- RENDER ---
  return (
    <>
      {/* FAB: Hidden when isOpen is true */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60]"
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <motion.button onClick={() => { setIsOpen(true); resetInactivity(); }}
              className="relative w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden touch-manipulation shadow-lg"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              aria-label="Open AI Assistant">
              <motion.div className="absolute inset-0 rounded-full opacity-60"
                style={{ background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)' }}
                animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
              <div className="absolute inset-1.5 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}>
                <Sparkles className="w-6 h-6 md:w-9 md:h-9 text-white relative z-10" strokeWidth={2.5} />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          // Fixed container: centered on desktop, full screen on mobile
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}>
            
            <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 25, 0.8)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }} />
            
            {/* Modal: Full width/height on mobile (rounded-none), card on desktop (rounded-3xl) */}
            <motion.div className="relative w-full h-[100dvh] md:w-full md:max-w-4xl md:h-[700px] flex flex-col bg-slate-900 rounded-none md:rounded-3xl shadow-2xl overflow-hidden will-change-transform"
              initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={e => e.stopPropagation()}
              style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>

              {/* Header */}
              <div className="shrink-0 relative z-10 flex items-center justify-between px-4 md:px-8 py-3 md:py-5 border-b border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-inner">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-base md:text-xl font-bold text-white leading-tight">{t('chatbot.title')}</h2>
                    <p className="text-[10px] md:text-xs text-gray-400">{t('chatbot.subtitle')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isSpeaking && (
                    <motion.button onClick={stopSpeaking}
                      className="p-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors touch-manipulation"
                      whileTap={{ scale: 0.9 }}>
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.button>
                  )}
                  <motion.button onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}
                    className="p-2 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:bg-white/20 transition-colors touch-manipulation"
                    whileTap={{ scale: 0.9 }}>
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Messages Area - Flexible Height */}
              <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 space-y-4 scroll-smooth overscroll-contain">
                {messages.map(msg => (
                  <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    
                    <div className={`flex flex-col gap-2 max-w-[90%] md:max-w-[80%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`flex items-start gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} w-full`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-gray-700 to-gray-600'}`}>
                          {msg.type === 'user' ? <span className="text-white text-xs font-bold">Y</span> : <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />}
                        </div>
                        <div className={`px-4 py-2.5 rounded-2xl text-sm md:text-base leading-relaxed ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md' : 'bg-white/10 border border-white/10 text-gray-100'}`}
                          dangerouslySetInnerHTML={{ __html: msg.type === 'bot' ? msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : msg.text }} />
                      </div>

                      {msg.type === 'bot' && (
                        <div className="w-full pl-10 pr-2 space-y-3">
                          
                          {/* Solutions Grid */}
                          {msg.showSolutions && (
                            <div className="mt-1">
                              <p className="text-xs font-semibold text-gray-400 mb-2">Core AI Solutions:</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {solutions.map((sol: Solution, i: number) => (
                                  <motion.button key={`sol-${i}`} onClick={() => window.open(sol.url, '_blank')}
                                    className="px-3 py-2.5 rounded-lg text-white text-xs md:text-sm bg-purple-900/40 border border-purple-500/40 hover:bg-purple-800/50 transition-colors text-left truncate touch-manipulation"
                                    whileTap={{ scale: 0.98 }}>
                                    {sol.text}
                                  </motion.button>
                                ))}
                                <motion.button onClick={() => handleActionRedirect('services')}
                                  className="col-span-1 sm:col-span-2 px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-blue-600/20 border border-blue-500/30 flex items-center justify-center gap-2 hover:bg-blue-600/30 transition-colors touch-manipulation"
                                  whileTap={{ scale: 0.98 }}>
                                  <ArrowRight className="w-3 h-3" /> Go to Full Solutions Page
                                </motion.button>
                              </div>
                            </div>
                          )}

                          {/* Industries Grid */}
                          {msg.showIndustries && (
                            <div className="mt-1">
                              <p className="text-xs font-semibold text-gray-400 mb-1">Domains We Serve:</p>
                              <p className="text-xs md:text-sm text-gray-300 mb-3 leading-relaxed">
                                {industries.map((i: Industry) => i.text).join(' • ')}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <motion.button onClick={() => handleActionRedirect('domains')}
                                  className="px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 transition-colors touch-manipulation"
                                  whileTap={{ scale: 0.95 }}>
                                  <ArrowRight className="w-3 h-3 inline mr-1" /> {t('chatbot.buttons.viewTechnologies')}
                                </motion.button>
                                <motion.button onClick={() => handleRedirectConfirmation('domains', false)}
                                  className="px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-gray-600/20 border border-gray-500/30 hover:bg-gray-600/30 transition-colors touch-manipulation"
                                  whileTap={{ scale: 0.95 }}>
                                  {t('chatbot.buttons.notNow')}
                                </motion.button>
                              </div>
                            </div>
                          )}

                          {/* Contact Buttons */}
                          {msg.showContactButtons && (
                            <div className="flex flex-wrap gap-2 mt-1">
                              <motion.button onClick={() => location.href = 'tel:+917622817924'}
                                className="flex items-center px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors touch-manipulation"
                                whileTap={{ scale: 0.95 }}>
                                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2" /> {t('chatbot.buttons.callUs')}
                              </motion.button>
                              <motion.button onClick={() => location.href = 'mailto:info@clumoss.com'}
                                className="flex items-center px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 transition-colors touch-manipulation"
                                whileTap={{ scale: 0.95 }}>
                                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2" /> {t('chatbot.buttons.emailUs')}
                              </motion.button>
                               <motion.button onClick={() => handleActionRedirect('contact')}
                                 className="flex items-center px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 transition-colors touch-manipulation"
                                 whileTap={{ scale: 0.95 }}>
                                 <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" /> View Contact Page
                               </motion.button>
                            </div>
                          )}

                          {msg.showScheduleButton && (
                            <motion.button onClick={() => handleActionRedirect('schedule')}
                              className="w-full sm:w-auto mt-1 flex items-center justify-center px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r from-green-600 to-teal-600 border border-white/10 hover:shadow-lg transition-all touch-manipulation"
                              whileTap={{ scale: 0.95 }}>
                              <Calendar className="w-4 h-4 mr-2" /> {t('chatbot.buttons.bookNow')}
                            </motion.button>
                          )}

                          {/* Confirm Redirect */}
                          {msg.showRedirectConfirmation && (
                            <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10">
                              <p className="text-xs md:text-sm font-medium text-gray-200 mb-3">
                                  {t('chatbot.confirmRedirect', { page: msg.showRedirectConfirmation.toUpperCase() }) || `Confirm redirection to the ${msg.showRedirectConfirmation.toUpperCase()} page?`}
                              </p>
                              <div className="flex gap-2">
                                  <motion.button 
                                      onClick={() => handleRedirectConfirmation(msg.showRedirectConfirmation!, true)}
                                      className="flex-1 px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 touch-manipulation"
                                      whileTap={{ scale: 0.95 }}>
                                      {t('chatbot.buttons.yesRedirect')}
                                  </motion.button>
                                  <motion.button 
                                      onClick={() => handleRedirectConfirmation(msg.showRedirectConfirmation!, false)}
                                      className="flex-1 px-3 py-2 rounded-lg text-white text-xs md:text-sm bg-red-600/20 border border-red-500/30 hover:bg-red-600/30 touch-manipulation"
                                      whileTap={{ scale: 0.95 }}>
                                      {t('chatbot.buttons.notNow')}
                                  </motion.button>
                              </div>
                            </div>
                          )}

                          {/* Follow-up Chips */}
                          {msg.followUps && msg.followUps.length > 0 && !msg.showRedirectConfirmation && (
                            <div className="mt-2">
                              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-2 pl-1">Related Topics</p>
                              <div className="flex flex-wrap gap-2">
                                {msg.followUps.map((s: FollowUp, i: number) => ( 
                                  <motion.button key={`fup-${i}`} onClick={() => handleFollowUp(s)}
                                    className="px-3 py-1.5 rounded-full text-gray-200 text-xs border border-white/10 bg-white/5 hover:bg-white/10 transition-colors touch-manipulation"
                                    whileTap={{ scale: 0.95 }}>
                                    {s.text} 
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                    <div className="flex items-center gap-2 pl-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
                         <div className="flex gap-1">
                            {[0, 0.2, 0.4].map(d => (
                              <motion.div key={d} className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 font-medium">{t('chatbot.thinking')}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="shrink-0 p-4 border-t border-white/10 bg-white/5 backdrop-blur-xl pb-6 md:pb-4">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500/50 transition-colors">
                  
                  <input type="text" value={message} onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && !e.shiftKey && handleSend(message, false)}
                    placeholder={t('chatbot.placeholder')} 
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm md:text-base px-2"
                    disabled={isTyping} />
                  
                  <div className="flex items-center gap-1">
                    <motion.button onClick={toggleVoiceMode}
                      className={`p-2 rounded-lg transition-all ${isListening ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-gray-400 hover:text-white hover:bg-white/10'} touch-manipulation`}
                      whileTap={{ scale: 0.9 }} disabled={isTyping} aria-label="Toggle Voice Mode">
                      <Mic className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button onClick={isTyping ? () => abortControllerRef.current?.abort() : () => handleSend(message, false)}
                      className={`p-2 rounded-lg transition-all ${message.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-400 hover:text-white hover:bg-white/10'} disabled:opacity-50 touch-manipulation`}
                      whileTap={{ scale: 0.9 }} disabled={!message.trim() && isTyping} aria-label="Send">
                      {isTyping ? <X className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </div>
                
                {(isSpeaking || isListening) && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2 mt-2 text-xs font-medium text-blue-400">
                    {isSpeaking ? <Volume2 className="w-3 h-3 animate-pulse" /> : <Mic className="w-3 h-3" />}
                    <span>{isSpeaking ? t('chatbot.speaking') : t('chatbot.listening')}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}