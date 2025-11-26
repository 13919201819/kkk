// 'use client';

// import { useState, useRef, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Mic, X, Send, Sparkles, Volume2, VolumeX, Phone, Mail, Calendar } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// export default function AIAssistant() {
//   const { t, i18n } = useTranslation();

//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<any[]>([]);
//   const [isListening, setIsListening] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isVoiceMode, setIsVoiceMode] = useState(false);
//   const [hasGreeted, setHasGreeted] = useState(false);
//   const [inactivityTimer, setInactivityTimer] = useState<NodeJS.Timeout | null>(null);

//   const recognitionRef = useRef<any>(null);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
//   const abortControllerRef = useRef<AbortController | null>(null);
//   const voiceLoopTimerRef = useRef<NodeJS.Timeout | null>(null);
//   const messageIdCounter = useRef(0);

//   // === PRELOAD ALL INSTANT RESPONSES ONCE ===
//   const instantResponsesRef = useRef<Map<string, any>>(new Map());

//   useEffect(() => {
//     const responses = t('chatbot.instantResponses', { returnObjects: true });
//     const map = new Map<string, any>();

//     Object.entries(responses).forEach(([key, value]: [string, any]) => {
//       if (value.question) {
//         const questions = value.question
//           .toLowerCase()
//           .split(',')
//           .map((q: string) => q.trim().replace(/[?.,!]/g, ''))
//           .filter((q: string) => q);
//         questions.forEach((q: string) => map.set(q, { key, ...value }));
//       }
//       // Also store by key for follow-ups
//       map.set(key, { key, ...value });
//     });

//     instantResponsesRef.current = map;
//   }, [t]);

//   const solutions = t('chatbot.solutions', { returnObjects: true }) ?? [];
//   const industries = t('chatbot.industries', { returnObjects: true }) ?? [];

//   // === NORMALIZE TEXT ===
//   const normalize = (text: string): string => {
//     return text
//       .toLowerCase()
//       .replace(/[?.,!;:]/g, '')
//       .replace(/\s+/g, ' ')
//       .trim();
//   };

//   // === FIND INSTANT RESPONSE (O(1) lookup) ===
//   const findInstantResponse = (input: string): any | null => {
//     const normalized = normalize(input);
//     return instantResponsesRef.current.get(normalized) || null;
//   };

//   // === SCROLL TO BOTTOM ===
//   const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   useEffect(() => scrollToBottom(), [messages]);

//   // === VOICE SYNTHESIS ===
//   const stopSpeaking = () => {
//     if (speechSynthesis.speaking) speechSynthesis.cancel();
//     setIsSpeaking(false);
//     currentUtteranceRef.current = null;
//   };

//   const cleanForSpeech = (txt: string) =>
//     txt
//       .replace(/\*\*/g, '')
//       .replace(/\*/g, '')
//       .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
//       .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
//       .replace(/\n{3,}/g, '\n\n')
//       .trim();

//   const speak = (text: string) => {
//     stopSpeaking();
//     if (!text) return;

//     const utter = new SpeechSynthesisUtterance(cleanForSpeech(text));
//     const voices = speechSynthesis.getVoices();
//     const lang = i18n.language.split('-')[0];
//     const voice = voices.find(v => v.lang.startsWith(lang) && /female|samantha|karen/i.test(v.name)) ||
//                   voices.find(v => v.lang.startsWith(lang));

//     if (voice) utter.voice = voice;
//     utter.rate = 1.15;
//     utter.pitch = 1.3;
//     utter.volume = 1.0;

//     utter.onstart = () => setIsSpeaking(true);
//     utter.onend = () => {
//       setIsSpeaking(false);
//       if (isVoiceMode && !isTyping) setTimeout(startVoiceLoop, 600);
//     };

//     currentUtteranceRef.current = utter;
//     speechSynthesis.speak(utter);
//   };

//   // === VOICE RECOGNITION ===
//   useEffect(() => {
//     if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) return;

//     const SR = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
//     recognitionRef.current = new SR();
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = false;
//     recognitionRef.current.lang = i18n.language;

//     recognitionRef.current.onresult = (e: any) => {
//       const transcript = e.results[0][0].transcript.trim();
//       if (transcript) {
//         setMessage(transcript);
//         stopVoiceLoop();
//         setTimeout(() => handleSend(transcript, true), 100);
//       }
//     };

//     recognitionRef.current.onerror = () => {
//       setIsListening(false);
//       if (isVoiceMode) setTimeout(startVoiceLoop, 1000);
//     };

//     recognitionRef.current.onend = () => {
//       setIsListening(false);
//       if (isVoiceMode && !isTyping && !isSpeaking) setTimeout(startVoiceLoop, 300);
//     };

//     return () => {
//       stopVoiceLoop();
//       stopSpeaking();
//     };
//   }, [isVoiceMode, i18n.language]);

//   const startVoiceLoop = useCallback(() => {
//     if (!recognitionRef.current || !isVoiceMode) return;
//     clearTimeout(voiceLoopTimerRef.current!);
//     try {
//       recognitionRef.current.start();
//       setIsListening(true);
//     } catch {
//       voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
//     }
//   }, [isVoiceMode]);

//   const stopVoiceLoop = useCallback(() => {
//     clearTimeout(voiceLoopTimerRef.current!);
//     recognitionRef.current?.stop();
//     setIsListening(false);
//   }, []);

//   const toggleVoiceMode = () => {
//     if (isListening || isVoiceMode) {
//       stopVoiceLoop();
//       setIsVoiceMode(false);
//       stopSpeaking();
//     } else {
//       stopSpeaking();
//       setIsVoiceMode(true);
//       startVoiceLoop();
//     }
//   };

//   // === GREETING & REMINDER (VOICE) ===
//   useEffect(() => {
//     if (!isOpen || hasGreeted) return;

//     const greet = () => {
//       const greeting = {
//         type: 'bot',
//         text: t('chatbot.greeting'),
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: t('chatbot.instantResponses.greetingHi.followUps', { returnObjects: true }) ?? [],
//       };
//       setMessages([greeting]);
//       setHasGreeted(true);
//       speak(greeting.text);
//       resetInactivity();
//     };

//     const timer = setTimeout(greet, 500);
//     return () => clearTimeout(timer);
//   }, [isOpen, hasGreeted, t]);

//   const resetInactivity = () => {
//     if (inactivityTimer) clearTimeout(inactivityTimer);
//     const tId = setTimeout(() => {
//       if (messages.length <= 1 && !isSpeaking && !isListening) {
//         const reminder = {
//           type: 'bot',
//           text: t('chatbot.reminder'),
//           id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//           followUps: t('chatbot.instantResponses.greetingHi.followUps', { returnObjects: true }) ?? [],
//         };
//         setMessages(m => [...m, reminder]);
//         speak(reminder.text);
//       }
//     }, 10000);
//     setInactivityTimer(tId);
//   };

//   // === API CALL (ONLY IF NOT IN JSON) ===
//   const callAPI = async (query: string) => {
//     if (abortControllerRef.current) abortControllerRef.current.abort();
//     abortControllerRef.current = new AbortController();

//     try {
//       const res = await fetch('https://contat-email-backend.vercel.app/api/ask', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query }),
//         signal: abortControllerRef.current.signal,
//       });
//       const data = await res.json();
//       return { text: data.response || "Sorry, I couldn't process that.", followUps: [] };
//     } catch (e: any) {
//       if (e.name === 'AbortError') return null;
//       return { text: "Connection issue. Try again.", followUps: [] };
//     }
//   };

//   // === MAIN SEND HANDLER ===
//   const handleSend = async (text: string, fromVoice = false) => {
//     if (!text.trim()) return;
//     resetInactivity();
//     stopVoiceLoop();
//     stopSpeaking();

//     const userMsg = {
//       type: 'user',
//       text,
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//       isVoice: fromVoice,
//     };
//     setMessages(m => [...m, userMsg]);
//     setMessage('');

//     // === INSTANT MATCH FROM JSON ===
//     const instant = findInstantResponse(text);
//     if (instant) {
//       const botMsg = {
//         type: 'bot',
//         text: instant.text,
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: instant.followUps ?? [],
//         showSolutions: instant.showSolutions,
//         showIndustries: instant.showIndustries,
//         showContactButtons: instant.showContactButtons,
//         showContactRedirect: instant.showContactRedirect,
//         showScheduleButton: instant.showScheduleButton,
//         autoRedirect: instant.autoRedirect,
//       };
//       setMessages(m => [...m, botMsg]);
//       if (fromVoice) speak(botMsg.text);
//       if (botMsg.autoRedirect) setTimeout(() => redirect(botMsg.autoRedirect), 1500);
//       return;
//     }

//     // === FALLBACK TO API ===
//     setIsTyping(true);
//     const apiRes = await callAPI(text);
//     setIsTyping(false);
//     if (apiRes) {
//       const botMsg = {
//         type: 'bot',
//         text: apiRes.text,
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: apiRes.followUps,
//       };
//       setMessages(m => [...m, botMsg]);
//       if (fromVoice) speak(botMsg.text);
//     }
//   };

//   const handleFollowUp = (suggestion: any) => {
//     setIsVoiceMode(false);
//     const text = typeof suggestion === 'string' ? suggestion : suggestion.text;
//     handleSend(text, false);
//   };

//   // === REDIRECT & SCHEDULING ===
//   const redirect = (type: string) => {
//     const map: Record<string, string> = {
//       contact: '/contact',
//       solutions: '/services',
//       services: '/services',
//       domains: '/technologies',
//     };
//     const url = map[type];
//     if (!url) return;

//     const msg = {
//       type: 'bot',
//       text: `Redirecting you to the ${type} page...`,
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//     };
//     setMessages(m => [...m, msg]);
//     speak(msg.text);
//     setTimeout(() => window.open(url, '_blank'), 1500);
//   };

//   const schedule = () => {
//     const msg = {
//       type: 'bot',
//       text: "Redirecting you to schedule a consultation...",
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//     };
//     setMessages(m => [...m, msg]);
//     speak(msg.text);
//     setTimeout(() => window.open('/scheduler', '_blank'), 1500);
//   };

//   // === RENDER ===
//   return (
//     <>
//       {/* FAB - Original Design */}
//       <motion.div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
//         initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
//         <motion.button onClick={() => setIsOpen(true)}
//           className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden"
//           whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//           style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4)' }}
//           aria-label="Open AI Assistant">
//           <motion.div className="absolute inset-0 rounded-full opacity-60"
//             style={{ background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)' }}
//             animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
//           <motion.div className="absolute inset-[-20%]"
//             animate={{ boxShadow: ['0 0 60px 20px rgba(59, 130, 246, 0.8), 0 0 80px 30px rgba(59, 130, 246, 0.4)', '0 0 70px 25px rgba(139, 92, 246, 0.9), 0 0 90px 35px rgba(139, 92, 246, 0.5)', '0 0 65px 22px rgba(236, 72, 153, 0.8), 0 0 85px 32px rgba(236, 72, 153, 0.4)', '0 0 60px 20px rgba(59, 130, 246, 0.8), 0 0 80px 30px rgba(59, 130, 246, 0.4)'] }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
//           <motion.div className="absolute inset-[-10%] rounded-full"
//             animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//             style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%)' }} />
//           <div className="absolute inset-1.5 rounded-full flex items-center justify-center"
//             style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}>
//             <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-white relative z-10" strokeWidth={2.5} />
//           </div>
//         </motion.button>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}>
//             <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 40, 60, 0.96), rgba(10, 15, 25, 0.99))', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }} />
//             <motion.div className="relative w-full max-w-4xl h-[85vh] md:h-[700px] rounded-3xl shadow-2xl overflow-hidden"
//               initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={e => e.stopPropagation()}
//               style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4)' }}>

//               {/* Header */}
//               <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-white border-opacity-15"
//                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>
//                 <div className="flex items-center gap-2 md:gap-3">
//                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//                     <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <h2 className="text-lg md:text-2xl font-bold text-white">{t('chatbot.title')}</h2>
//                     <p className="text-[10px] md:text-xs text-gray-400">{t('chatbot.subtitle')}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-1 md:gap-2">
//                   {isSpeaking && (
//                     <motion.button onClick={stopSpeaking}
//                       className="p-2 md:p-2.5 rounded-xl border border-red-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                       style={{ background: 'rgba(239, 68, 68, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                       whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
//                     </motion.button>
//                   )}
//                   <motion.button onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}
//                     className="p-2 md:p-2.5 rounded-xl border border-white border-opacity-20 hover:border-opacity-30 transition-colors"
//                     style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Messages */}
//               <div className="relative z-10 h-[calc(85vh-160px)] md:h-[500px] overflow-y-auto px-4 md:px-8 py-4 md:py-6 space-y-4 md:space-y-5">
//                 {messages.map(msg => (
//                   <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//                     className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
//                     <div className={`flex flex-col gap-2 md:gap-3 max-w-[85%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
//                       <div className={`flex items-start gap-2 md:gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} w-full`}>
//                         <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-gray-700 to-gray-600'}`}>
//                           {msg.type === 'user' ? <span className="text-white text-xs md:text-sm font-semibold">Y</span> : <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />}
//                         </div>
//                         <div className={`px-4 md:px-5 py-2 md:py-3 rounded-2xl flex-1 ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border border-white border-opacity-15 text-gray-100'}`}
//                           style={msg.type === 'bot' ? { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}}
//                           dangerouslySetInnerHTML={{ __html: msg.type === 'bot' ? msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : msg.text }} />
//                       </div>

//                       {msg.type === 'bot' && (
//                         <div className="w-full pl-9 md:pl-11 space-y-2">
//                           {msg.showSolutions && (
//                             <div className="grid grid-cols-2 gap-2">
//                               {solutions.map((sol: any, i: number) => (
//                                 <motion.button key={i} onClick={() => window.open(sol.url, '_blank')}
//                                   className="px-3 py-2 rounded-lg text-white text-[10px] md:text-xs border border-purple-500 border-opacity-30 hover:border-opacity-50 transition-colors text-left flex items-center gap-2"
//                                   style={{ background: 'rgba(168, 85, 247, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                   whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                   <span>{sol.icon}</span> {sol.text}
//                                 </motion.button>
//                               ))}
//                             </div>
//                           )}

//                           {msg.showIndustries && (
//                             <div className="grid grid-cols-2 gap-2">
//                               {industries.map((ind: any, i: number) => (
//                                 <motion.button key={i} onClick={() => window.open(ind.url, '_blank')}
//                                   className="px-3 py-2 rounded-lg text-white text-[10px] md:text-xs border border-blue-500 border-opacity-30 hover:border-opacity-50 transition-colors text-left flex items-center gap-2"
//                                   style={{ background: 'rgba(59, 130, 246, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                   whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                   <span>{ind.icon}</span> {ind.text}
//                                 </motion.button>
//                               ))}
//                             </div>
//                           )}

//                           {msg.showContactButtons && (
//                             <div className="flex flex-wrap gap-2">
//                               <motion.button onClick={() => location.href = 'tel:+917622817924'}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-green-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                                 style={{ background: 'rgba(34, 197, 94, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <Phone className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.callUs')}
//                               </motion.button>
//                               <motion.button onClick={() => location.href = 'mailto:info@clumoss.com'}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-blue-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                                 style={{ background: 'rgba(59, 130, 246, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <Mail className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.emailUs')}
//                               </motion.button>
//                             </div>
//                           )}

//                           {msg.showScheduleButton && (
//                             <motion.button onClick={schedule}
//                               className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-green-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                               style={{ background: 'rgba(34, 197, 94, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                               whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                               <Calendar className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.bookNow')}
//                             </motion.button>
//                           )}

//                           {msg.followUps?.length > 0 && (
//                             <div className="flex flex-col gap-2 mt-3">
//                               <p className="text-[10px] md:text-xs text-gray-400">Would you like to know about:</p>
//                               <div className="flex flex-wrap gap-1.5 md:gap-2">
//                                 {msg.followUps.map((s: any, i: number) => (
//                                   <motion.button key={i} onClick={() => handleFollowUp(s)}
//                                     className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-gray-200 text-[10px] md:text-xs border border-gray-600 border-opacity-40 hover:border-opacity-60 transition-colors flex items-center gap-2"
//                                     style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                      {s.text || s}
//                                   </motion.button>
//                                 ))}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}

//                 {isTyping && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
//                     <div className="flex items-start gap-2 md:gap-3">
//                       <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600">
//                         <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />
//                       </div>
//                       <div className="px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-white border-opacity-15"
//                         style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
//                         <div className="flex items-center gap-2 md:gap-3">
//                           <div className="flex gap-1">
//                             {[0, 0.2, 0.4].map(d => (
//                               <motion.div key={d} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full"
//                                 animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} />
//                             ))}
//                           </div>
//                           <span className="text-[10px] md:text-xs text-gray-400">{t('chatbot.thinking')}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input */}
//               <div className="relative z-10 px-4 md:px-8 pb-4 md:pb-6 border-t border-white border-opacity-15 pt-4 md:pt-5"
//                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>
//                 <div className="flex items-center gap-2 md:gap-3 rounded-2xl p-2 md:p-3 border border-white border-opacity-15"
//                   style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
//                   <input type="text" value={message} onChange={e => setMessage(e.target.value)}
//                     onKeyPress={e => e.key === 'Enter' && !e.shiftKey && handleSend(message, false)}
//                     placeholder={t('chatbot.placeholder')} className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm md:text-base"
//                     disabled={isTyping} />
//                   <motion.button onClick={toggleVoiceMode}
//                     className={`p-2 md:p-2.5 rounded-xl transition-all border ${isListening ? 'bg-red-600 border-red-500' : 'border-white border-opacity-20 hover:border-opacity-30'}`}
//                     style={!isListening ? { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' } : {}}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isTyping}>
//                     <Mic className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                   </motion.button>
//                   <motion.button onClick={isTyping ? () => abortControllerRef.current?.abort() : () => handleSend(message, false)}
//                     className={`p-2 md:p-2.5 rounded-xl transition-all ${isTyping ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} disabled:opacity-50 disabled:cursor-not-allowed`}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={!message.trim() && !isTyping}>
//                     {isTyping ? <X className="w-4 h-4 md:w-5 md:h-5 text-white" /> : <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />}
//                   </motion.button>
//                 </div>
//                 {(isSpeaking || isListening) && (
//                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
//                     className="flex items-center gap-2 mt-2 md:mt-3 text-xs md:text-sm text-blue-400">
//                     {isSpeaking ? <Volume2 className="w-3 h-3 md:w-4 md:h-4 animate-pulse" /> : <Mic className="w-3 h-3 md:w-4 md:h-4" />}
//                     <span>{isSpeaking ? t('chatbot.speaking') : t('chatbot.listening')}</span>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// 'use client';

// import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Mic, X, Send, Sparkles, Volume2, VolumeX, Phone, Mail, Calendar } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// // --- Type Definitions for better safety and readability ---
// interface Message {
//   type: 'user' | 'bot';
//   text: string;
//   id: string;
//   isVoice?: boolean;
//   followUps?: any[];
//   showSolutions?: boolean;
//   showIndustries?: boolean;
//   showContactButtons?: boolean;
//   showContactRedirect?: string;
//   showScheduleButton?: boolean;
//   autoRedirect?: string;
// }

// interface InstantResponse {
//   key: string;
//   question?: string; // Original question for mapping
//   text: string;
//   followUps?: any[];
//   showSolutions?: boolean;
//   showIndustries?: boolean;
//   showContactButtons?: boolean;
//   showContactRedirect?: string;
//   showScheduleButton?: boolean;
//   autoRedirect?: string;
// }

// // --- Component Start ---
// export default function AIAssistant() {
//   const { t, i18n } = useTranslation();

//   // --- State ---
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isListening, setIsListening] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isVoiceMode, setIsVoiceMode] = useState(false);
//   const [hasGreeted, setHasGreeted] = useState(false);

//   // --- Refs for non-render data and external APIs ---
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const recognitionRef = useRef<any>(null);
//   const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
//   const abortControllerRef = useRef<AbortController | null>(null);
//   const voiceLoopTimerRef = useRef<NodeJS.Timeout | null>(null);
//   const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
//   const messageIdCounter = useRef(0);

//   // --- Constants (Memoized lookups and API URL) ---
//   const API_URL = 'https://contat-email-backend.vercel.app/api/ask';

//   // === 1. Preload and Memoize Instant Responses (O(1) lookup map) ===
//   const instantResponsesMap = useMemo(() => {
//     const responses = t('chatbot.instantResponses', { returnObjects: true }) as Record<string, InstantResponse>;
//     const map = new Map<string, InstantResponse>();

//     Object.entries(responses).forEach(([key, value]) => {
//       // 1. Store by key for internal/follow-up lookups
//       map.set(key, { key, ...value });
      
//       // 2. Store by normalized question strings
//       if (value.question) {
//         const questions = value.question
//           .toLowerCase()
//           .split(',')
//           .map((q: string) => q.trim().replace(/[?.,!]/g, ''))
//           .filter((q: string) => q);
//         questions.forEach((q: string) => map.set(q, { key, ...value }));
//       }
//     });
//     return map;
//   }, [t]);

//   const solutions = useMemo(() => t('chatbot.solutions', { returnObjects: true }) ?? [], [t]);
//   const industries = useMemo(() => t('chatbot.industries', { returnObjects: true }) ?? [], [t]);

//   // === 2. Utility Functions ===
//   const normalize = (text: string): string => {
//     return text.toLowerCase().replace(/[?.,!;:]/g, '').replace(/\s+/g, ' ').trim();
//   };

//   const findInstantResponse = (input: string): InstantResponse | null => {
//     const normalized = normalize(input);
//     return instantResponsesMap.get(normalized) || null;
//   };

//   const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   useEffect(() => scrollToBottom(), [messages]); // Auto-scroll on new message

//   // === 3. Voice Synthesis (Speak) Logic ===
//   const stopSpeaking = useCallback(() => {
//     if (speechSynthesis.speaking) speechSynthesis.cancel();
//     setIsSpeaking(false);
//     currentUtteranceRef.current = null;
//   }, []);

//   const cleanForSpeech = (txt: string) =>
//     txt.replace(/\*\*/g, '').replace(/\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[\u{1F300}-\u{1F9FF}]/gu, '').replace(/\n{3,}/g, '\n\n').trim();

//   const speak = useCallback((text: string) => {
//     stopSpeaking();
//     if (!text) return;

//     const utter = new SpeechSynthesisUtterance(cleanForSpeech(text));
//     const voices = speechSynthesis.getVoices();
//     const lang = i18n.language.split('-')[0];

//     const voice = voices.find(v => v.lang.startsWith(lang) && /female|samantha|karen|helena/i.test(v.name)) ||
//       voices.find(v => v.lang.startsWith(lang)) || null;

//     if (voice) utter.voice = voice;
//     utter.rate = 1.15;
//     utter.pitch = 1.3;
//     utter.volume = 1.0;

//     utter.onstart = () => setIsSpeaking(true);
//     utter.onend = () => {
//       setIsSpeaking(false);
//       // Restart the loop if in voice mode after speaking, and not currently typing
//       if (isVoiceMode && !isTyping) {
//         voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 600);
//       }
//     };

//     currentUtteranceRef.current = utter;
//     speechSynthesis.speak(utter);
//   }, [i18n.language, stopSpeaking, isVoiceMode, isTyping]); // Added dependencies

//   // === 4. Voice Recognition (Listen) Logic ===

//   const stopVoiceLoop = useCallback(() => {
//     clearTimeout(voiceLoopTimerRef.current!);
//     recognitionRef.current?.stop();
//     setIsListening(false);
//   }, []);

//   const startVoiceLoop = useCallback(() => {
//     if (!recognitionRef.current || !isVoiceMode || isListening) return; // Prevent multiple starts
//     clearTimeout(voiceLoopTimerRef.current!);
//     try {
//       recognitionRef.current.start();
//       setIsListening(true);
//     } catch (e) {
//       // Re-attempt start if the API is busy
//       voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
//     }
//   }, [isVoiceMode, isListening]); // Added isListening as dependency

//   const toggleVoiceMode = () => {
//     stopSpeaking(); // Always stop speaking when toggling
//     if (isVoiceMode) {
//       stopVoiceLoop();
//       setIsVoiceMode(false);
//     } else {
//       setIsVoiceMode(true);
//       startVoiceLoop(); // Start the loop immediately
//     }
//   };

//   // === 5. Voice/Recognition Setup Effect ===
//   useEffect(() => {
//     if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) return;

//     const SR = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
//     recognitionRef.current = new SR();
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = false;

//     // Use a single effect for setting up the SpeechRecognition object
//     recognitionRef.current.onresult = (e: any) => {
//       const transcript = e.results[0][0].transcript.trim();
//       if (transcript) {
//         setMessage(transcript);
//         stopVoiceLoop(); // Stop listening immediately upon result
//         setTimeout(() => handleSend(transcript, true), 100);
//       }
//     };

//     recognitionRef.current.onerror = () => {
//       setIsListening(false);
//       // Only restart the loop if still in voice mode
//       if (isVoiceMode) voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
//     };

//     recognitionRef.current.onend = () => {
//       setIsListening(false);
//       // Restart the loop only if in voice mode and not currently busy
//       if (isVoiceMode && !isTyping && !isSpeaking) voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 300);
//     };

//     // Cleanup function for unmount
//     return () => {
//       stopVoiceLoop();
//       stopSpeaking();
//       clearTimeout(inactivityTimerRef.current!);
//     };
//   }, [isVoiceMode, i18n.language, startVoiceLoop, stopVoiceLoop, stopSpeaking, isTyping, isSpeaking]);

//   // === 6. Inactivity and Greeting Logic ===
//   const resetInactivity = useCallback(() => {
//     if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    
//     // Set a new timer
//     const tId = setTimeout(() => {
//       if (messages.length <= 1 && !isSpeaking && !isListening && isOpen) {
//         const reminder: Message = {
//           type: 'bot',
//           text: t('chatbot.reminder'),
//           id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//           followUps: t('chatbot.instantResponses.greetingHi.followUps', { returnObjects: true }) ?? [],
//         };
//         setMessages(m => [...m, reminder]);
//         speak(reminder.text);
//       }
//     }, 10000); // 10 seconds reminder
//     inactivityTimerRef.current = tId;
//   }, [messages.length, isSpeaking, isListening, isOpen, t, speak]);

//   // Greeting Effect (Runs once when opened)
//   useEffect(() => {
//     if (!isOpen || hasGreeted) return;

//     const greet = () => {
//       const greeting: Message = {
//         type: 'bot',
//         text: t('chatbot.greeting'),
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: t('chatbot.instantResponses.greetingHi.followUps', { returnObjects: true }) ?? [],
//       };
//       setMessages([greeting]);
//       setHasGreeted(true);
//       speak(greeting.text);
//       resetInactivity();
//     };

//     const timer = setTimeout(greet, 500);
//     return () => clearTimeout(timer);
//   }, [isOpen, hasGreeted, t, speak, resetInactivity]);

//   // === 7. API Call Handler (Abstracted) ===
//   const callAPI = async (query: string): Promise<{ text: string, followUps: any[] } | null> => {
//     if (abortControllerRef.current) abortControllerRef.current.abort();
//     abortControllerRef.current = new AbortController();

//     try {
//       const res = await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query }),
//         signal: abortControllerRef.current.signal,
//       });
      
//       const data = await res.json();
//       return { text: data.response || t('chatbot.apiError'), followUps: [] };
//     } catch (e: any) {
//       if (e.name === 'AbortError') return null;
//       console.error('API Error:', e);
//       return { text: t('chatbot.connectionError'), followUps: [] };
//     }
//   };

//   // === 8. Main Send Handler ===
//   const handleSend = async (text: string, fromVoice = false) => {
//     if (!text.trim() || isTyping) return; // Prevent sending while waiting for API

//     resetInactivity();
//     stopVoiceLoop();
//     stopSpeaking();

//     const userMsg: Message = {
//       type: 'user',
//       text,
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//       isVoice: fromVoice,
//     };
    
//     // Optimistic UI update for user message
//     setMessages(m => [...m, userMsg]);
//     setMessage('');

//     // --- 8a. Instant Match from JSON ---
//     const instant = findInstantResponse(text);
//     if (instant) {
//       const botMsg: Message = {
//         type: 'bot',
//         text: instant.text,
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: instant.followUps ?? [],
//         showSolutions: instant.showSolutions,
//         showIndustries: instant.showIndustries,
//         showContactButtons: instant.showContactButtons,
//         showScheduleButton: instant.showScheduleButton,
//         autoRedirect: instant.autoRedirect,
//       };
//       setMessages(m => [...m, botMsg]);
//       if (fromVoice) speak(botMsg.text);
//       if (botMsg.autoRedirect) setTimeout(() => redirect(botMsg.autoRedirect!), 1500);
//       return;
//     }

//     // --- 8b. Fallback to API ---
//     setIsTyping(true);
//     const apiRes = await callAPI(text);
//     setIsTyping(false);
    
//     if (apiRes) {
//       const botMsg: Message = {
//         type: 'bot',
//         text: apiRes.text,
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: apiRes.followUps,
//       };
//       setMessages(m => [...m, botMsg]);
//       if (fromVoice) speak(botMsg.text);
//     }
//   };

//   const handleFollowUp = (suggestion: any) => {
//     setIsVoiceMode(false); // Stop voice mode on text interaction
//     const text = typeof suggestion === 'string' ? suggestion : suggestion.text;
//     handleSend(text, false);
//   };

//   // === 9. Redirect & Scheduling Handlers (Simplified) ===
//   const redirect = (type: string) => {
//     const map: Record<string, string> = {
//       contact: '/contact',
//       solutions: '/services',
//       services: '/services',
//       domains: '/technologies',
//     };
//     const url = map[type];
//     if (!url) return;

//     const msg: Message = {
//       type: 'bot',
//       text: t('chatbot.redirecting', { page: type }),
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//     };
//     setMessages(m => [...m, msg]);
//     speak(msg.text);
//     setTimeout(() => window.open(url, '_blank'), 1500);
//   };

//   const schedule = () => {
//     const msg: Message = {
//       type: 'bot',
//       text: t('chatbot.redirectingSchedule'),
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//     };
//     setMessages(m => [...m, msg]);
//     speak(msg.text);
//     setTimeout(() => window.open('/scheduler', '_blank'), 1500);
//   };

//   // --- RENDER ---
//   return (
//     <>
//       {/* FAB - Retain original glassmorphism and motion effects */}
//       <motion.div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
//         initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
//         <motion.button onClick={() => { setIsOpen(true); resetInactivity(); }}
//           className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden"
//           whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//           style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4)' }}
//           aria-label="Open AI Assistant">
//           {/* Internal animations/styling omitted for brevity but remain in original code */}
//           <div className="absolute inset-1.5 rounded-full flex items-center justify-center"
//             style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}>
//             <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-white relative z-10" strokeWidth={2.5} />
//           </div>
//         </motion.button>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}>
            
//             {/* Background Blur Overlay (Glassmorphism effect) */}
//             <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 40, 60, 0.96), rgba(10, 15, 25, 0.99))', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }} />
            
//             <motion.div className="relative w-full max-w-4xl h-[85vh] md:h-[700px] rounded-3xl shadow-2xl overflow-hidden"
//               initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={e => e.stopPropagation()}
//               style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4)' }}>

//               {/* Header */}
//               <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-white border-opacity-15"
//                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>
                
//                 <div className="flex items-center gap-2 md:gap-3">
//                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//                     <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <h2 className="text-lg md:text-2xl font-bold text-white">{t('chatbot.title')}</h2>
//                     <p className="text-[10px] md:text-xs text-gray-400">{t('chatbot.subtitle')}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-1 md:gap-2">
//                   {/* Stop Speaking Button */}
//                   {isSpeaking && (
//                     <motion.button onClick={stopSpeaking}
//                       className="p-2 md:p-2.5 rounded-xl border border-red-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                       style={{ background: 'rgba(239, 68, 68, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                       whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Stop Speaking">
//                       <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
//                     </motion.button>
//                   )}
//                   {/* Close Button */}
//                   <motion.button onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}
//                     className="p-2 md:p-2.5 rounded-xl border border-white border-opacity-20 hover:border-opacity-30 transition-colors"
//                     style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Close Assistant">
//                     <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Messages Area */}
//               <div className="relative z-10 h-[calc(85vh-160px)] md:h-[500px] overflow-y-auto px-4 md:px-8 py-4 md:py-6 space-y-4 md:space-y-5">
//                 {messages.map(msg => (
//                   <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//                     className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    
//                     <div className={`flex flex-col gap-2 md:gap-3 max-w-[85%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
//                       {/* Message Bubble */}
//                       <div className={`flex items-start gap-2 md:gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} w-full`}>
//                         <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-gray-700 to-gray-600'}`}>
//                           {msg.type === 'user' ? <span className="text-white text-xs md:text-sm font-semibold">Y</span> : <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />}
//                         </div>
//                         <div className={`px-4 md:px-5 py-2 md:py-3 rounded-2xl flex-1 ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border border-white border-opacity-15 text-gray-100'}`}
//                           style={msg.type === 'bot' ? { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}}
//                           dangerouslySetInnerHTML={{ __html: msg.type === 'bot' ? msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : msg.text }} />
//                       </div>

//                       {/* Bot Message Follow-ups/Actions */}
//                       {msg.type === 'bot' && (
//                         <div className="w-full pl-9 md:pl-11 space-y-2">
                          
//                           {/* Solutions/Industries (combined logic for brevity) */}
//                           {(msg.showSolutions || msg.showIndustries) && (
//                             <div className="grid grid-cols-2 gap-2">
//                               {msg.showSolutions && solutions.map((sol: any, i: number) => (
//                                 <motion.button key={`sol-${i}`} onClick={() => window.open(sol.url, '_blank')}
//                                   className="px-3 py-2 rounded-lg text-white text-[10px] md:text-xs border border-purple-500 border-opacity-30 hover:border-opacity-50 transition-colors text-left flex items-center gap-2"
//                                   style={{ background: 'rgba(168, 85, 247, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                   whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                   <span>{sol.icon}</span> {sol.text}
//                                 </motion.button>
//                               ))}
//                               {msg.showIndustries && industries.map((ind: any, i: number) => (
//                                 <motion.button key={`ind-${i}`} onClick={() => window.open(ind.url, '_blank')}
//                                   className="px-3 py-2 rounded-lg text-white text-[10px] md:text-xs border border-blue-500 border-opacity-30 hover:border-opacity-50 transition-colors text-left flex items-center gap-2"
//                                   style={{ background: 'rgba(59, 130, 246, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                   whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                   <span>{ind.icon}</span> {ind.text}
//                                 </motion.button>
//                               ))}
//                             </div>
//                           )}

//                           {/* Contact Buttons */}
//                           {msg.showContactButtons && (
//                             <div className="flex flex-wrap gap-2">
//                               {/* Call Us */}
//                               <motion.button onClick={() => location.href = 'tel:+917622817924'}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-green-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                                 style={{ background: 'rgba(34, 197, 94, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <Phone className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.callUs')}
//                               </motion.button>
//                               {/* Email Us */}
//                               <motion.button onClick={() => location.href = 'mailto:info@clumoss.com'}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-blue-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                                 style={{ background: 'rgba(59, 130, 246, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <Mail className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.emailUs')}
//                               </motion.button>
//                             </div>
//                           )}

//                           {/* Schedule Button */}
//                           {msg.showScheduleButton && (
//                             <motion.button onClick={schedule}
//                               className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-green-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                               style={{ background: 'rgba(34, 197, 94, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                               whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                               <Calendar className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.bookNow')}
//                             </motion.button>
//                           )}

//                           {/* Follow-up Suggestions */}
//                           {msg.followUps && msg.followUps.length > 0 && (
//                             <div className="flex flex-col gap-2 mt-3">
//                               <p className="text-[10px] md:text-xs text-gray-400">Would you like to know about:</p>
//                               <div className="flex flex-wrap gap-1.5 md:gap-2">
//                                 {msg.followUps.map((s: any, i: number) => (
//                                   <motion.button key={`fup-${i}`} onClick={() => handleFollowUp(s)}
//                                     className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-gray-200 text-[10px] md:text-xs border border-gray-600 border-opacity-40 hover:border-opacity-60 transition-colors flex items-center gap-2"
//                                     style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                     {s.text || s}
//                                   </motion.button>
//                                 ))}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}

//                 {/* Typing Indicator */}
//                 {isTyping && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
//                     <div className="flex items-start gap-2 md:gap-3">
//                       <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600">
//                         <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />
//                       </div>
//                       <div className="px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-white border-opacity-15 text-gray-100"
//                         style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
//                         <div className="flex items-center gap-2 md:gap-3">
//                           <div className="flex gap-1">
//                             {[0, 0.2, 0.4].map(d => (
//                               <motion.div key={d} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full"
//                                 animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} />
//                             ))}
//                           </div>
//                           <span className="text-[10px] md:text-xs text-gray-400">{t('chatbot.thinking')}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input Area */}
//               <div className="relative z-10 px-4 md:px-8 pb-4 md:pb-6 border-t border-white border-opacity-15 pt-4 md:pt-5"
//                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>
//                 <div className="flex items-center gap-2 md:gap-3 rounded-2xl p-2 md:p-3 border border-white border-opacity-15"
//                   style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                  
//                   {/* Text Input */}
//                   <input type="text" value={message} onChange={e => setMessage(e.target.value)}
//                     onKeyPress={e => e.key === 'Enter' && !e.shiftKey && handleSend(message, false)}
//                     placeholder={t('chatbot.placeholder')} className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm md:text-base"
//                     disabled={isTyping} />
                  
//                   {/* Voice Button */}
//                   <motion.button onClick={toggleVoiceMode}
//                     className={`p-2 md:p-2.5 rounded-xl transition-all border ${isListening ? 'bg-red-600 border-red-500' : 'border-white border-opacity-20 hover:border-opacity-30'}`}
//                     style={!isListening ? { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' } : {}}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isTyping} aria-label="Toggle Voice Mode">
//                     <Mic className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                   </motion.button>
                  
//                   {/* Send/Stop Button */}
//                   <motion.button onClick={isTyping ? () => abortControllerRef.current?.abort() : () => handleSend(message, false)}
//                     className={`p-2 md:p-2.5 rounded-xl transition-all ${isTyping ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} disabled:opacity-50 disabled:cursor-not-allowed`}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={!message.trim() && !isTyping} aria-label={isTyping ? 'Stop Response' : 'Send Message'}>
//                     {isTyping ? <X className="w-4 h-4 md:w-5 md:h-5 text-white" /> : <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />}
//                   </motion.button>
//                 </div>
                
//                 {/* Status Indicator */}
//                 {(isSpeaking || isListening) && (
//                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
//                     className="flex items-center gap-2 mt-2 md:mt-3 text-xs md:text-sm text-blue-400">
//                     {isSpeaking ? <Volume2 className="w-3 h-3 md:w-4 md:h-4 animate-pulse" /> : <Mic className="w-3 h-3 md:w-4 md:h-4" />}
//                     <span>{isSpeaking ? t('chatbot.speaking') : t('chatbot.listening')}</span>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// 'use client';

// import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Mic, X, Send, Sparkles, Volume2, VolumeX, Phone, Mail, Calendar, ExternalLink } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// // --- Type Definitions for consistency ---
// interface FollowUp {
//   text: string; // The translated text displayed on the button
//   key?: string; // The internal key used for routing (e.g., 'services', 'contact')
// }

// interface Message {
//   type: 'user' | 'bot';
//   text: string;
//   id: string;
//   isVoice?: boolean;
//   followUps?: FollowUp[]; // Ensure this is an array of FollowUp objects
//   showSolutions?: boolean;
//   showIndustries?: boolean;
//   showContactButtons?: boolean;
//   showScheduleButton?: boolean;
//   autoRedirect?: string;
// }

// interface InstantResponse {
//   key: string;
//   question?: string; 
//   text: string;
//   followUps?: FollowUp[];
//   showSolutions?: boolean;
//   showIndustries?: boolean;
//   showContactButtons?: boolean;
//   showScheduleButton?: boolean; 
//   autoRedirect?: string;
// }

// export default function AIAssistant() {
//   const { t, i18n } = useTranslation();

//   // --- State ---
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<Message[]>([]); // Use typed array
//   const [isListening, setIsListening] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [isVoiceMode, setIsVoiceMode] = useState(false);
//   const [hasGreeted, setHasGreeted] = useState(false);
//   const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

//   // --- Refs ---
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const recognitionRef = useRef<any>(null);
//   const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
//   const abortControllerRef = useRef<AbortController | null>(null);
//   const voiceLoopTimerRef = useRef<NodeJS.Timeout | null>(null);
//   const messageIdCounter = useRef(0);

//   const API_URL = 'https://contat-email-backend.vercel.app/api/ask';

//   // === Preload and Memoize Data ===
//   const { instantResponsesMap, solutions, industries } = useMemo(() => {
//     const responses = t('chatbot.instantResponses', { returnObjects: true }) as Record<string, InstantResponse>;
//     const map = new Map<string, InstantResponse>();

//     Object.entries(responses).forEach(([key, value]) => {
//       map.set(key, { key, ...value });
      
//       if (value.question) {
//         const questions = value.question
//           .toLowerCase()
//           .split(',')
//           .map((q: string) => q.trim().replace(/[?.,!]/g, ''))
//           .filter((q: string) => q);
//         questions.forEach((q: string) => map.set(q, { key, ...value }));
//       }
//     });

//     return {
//       instantResponsesMap: map,
//       solutions: t('chatbot.solutions', { returnObjects: true }) ?? [],
//       industries: t('chatbot.industries', { returnObjects: true }) ?? [],
//     };
//   }, [t]);
  
//   // === Centralized Follow-up Generation ===
//   const getFollowUps = useCallback((): FollowUp[] => {
//       // Ensure these buttons are always fully translated objects
//       return [
//           { text: t('chatbot.buttons.viewServices'), key: 'services' }, 
//           { text: t('chatbot.buttons.contactUs'), key: 'contact' },
//           { text: t('chatbot.buttons.bookNow'), key: 'consultation' } 
//       ];
//   }, [t]);


//   // === Utility Functions ===
//   const normalize = (text: string): string => {
//     return text.toLowerCase().replace(/[?.,!;:]/g, '').replace(/\s+/g, ' ').trim();
//   };

//   const findInstantResponse = (input: string): InstantResponse | null => {
//     const normalized = normalize(input);
//     const exactMatch = instantResponsesMap.get(normalized);
//     if (exactMatch) return exactMatch;

//     // --- Auto-trigger Logic ---
//     let response: InstantResponse | null = null;

//     if (normalized.includes('consultation') || normalized.includes('book') || normalized.includes('schedule')) {
//         response = instantResponsesMap.get('consultation');
//         if (response) return { ...response, showScheduleButton: true, followUps: response.followUps ?? getFollowUps() };
//     }

//     if (normalized.includes('service') || normalized.includes('solution') || normalized.includes('what do you do')) {
//         response = instantResponsesMap.get('services');
//         // Ensure service response shows solutions and provides standard follow-ups
//         if (response) return { ...response, showSolutions: true, followUps: response.followUps ?? getFollowUps() }; 
//     }

//     if (normalized.includes('contact') || normalized.includes('talk to human') || normalized.includes('phone')) {
//         response = instantResponsesMap.get('contact');
//         if (response) return { ...response, showContactButtons: true, followUps: response.followUps ?? getFollowUps() };
//     }
    
//     return response || null;
//   };

//   const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   useEffect(() => scrollToBottom(), [messages]);

//   // === Voice Synthesis (Speak) Logic ===
//   const stopSpeaking = useCallback(() => {
//     if (speechSynthesis.speaking) speechSynthesis.cancel();
//     setIsSpeaking(false);
//     currentUtteranceRef.current = null;
//   }, []);

//   const cleanForSpeech = (txt: string) =>
//     txt.replace(/\*\*/g, '').replace(/\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[\u{1F300}-\u{1F9FF}]/gu, '').replace(/\n{3,}/g, '\n\n').trim();

//   const speak = useCallback((text: string) => {
//     stopSpeaking();
//     if (!text) return;

//     const utter = new SpeechSynthesisUtterance(cleanForSpeech(text));
//     const voices = speechSynthesis.getVoices();
//     const lang = i18n.language.split('-')[0];

//     const voice = voices.find(v => v.lang.startsWith(lang) && /female|samantha|karen|helena/i.test(v.name)) ||
//       voices.find(v => v.lang.startsWith(lang)) || null;

//     if (voice) utter.voice = voice;
//     utter.rate = 1.15;
//     utter.pitch = 1.3;
//     utter.volume = 1.0;

//     utter.onstart = () => setIsSpeaking(true);
//     utter.onend = () => {
//       setIsSpeaking(false);
//       if (isVoiceMode && !isTyping) {
//         voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 600);
//       }
//     };

//     currentUtteranceRef.current = utter;
//     speechSynthesis.speak(utter);
//   }, [i18n.language, stopSpeaking, isVoiceMode, isTyping]);

//   // === Voice Recognition (Listen) Logic ===
//   const stopVoiceLoop = useCallback(() => {
//     clearTimeout(voiceLoopTimerRef.current!);
//     recognitionRef.current?.stop();
//     setIsListening(false);
//   }, []);

//   const startVoiceLoop = useCallback(() => {
//     if (!recognitionRef.current || !isVoiceMode || isListening) return;
//     clearTimeout(voiceLoopTimerRef.current!);
//     try {
//       recognitionRef.current.start();
//       setIsListening(true);
//     } catch (e) {
//       voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
//     }
//   }, [isVoiceMode, isListening]);

//   const toggleVoiceMode = () => {
//     stopSpeaking();
//     if (isVoiceMode) {
//       stopVoiceLoop();
//       setIsVoiceMode(false);
//     } else {
//       setIsVoiceMode(true);
//       startVoiceLoop();
//     }
//   };

//   useEffect(() => {
//     if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) return;

//     const SR = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
//     recognitionRef.current = new SR();
//     recognitionRef.current.continuous = false;
//     recognitionRef.current.interimResults = false;
//     recognitionRef.current.lang = i18n.language;

//     recognitionRef.current.onresult = (e: any) => {
//       const transcript = e.results[0][0].transcript.trim();
//       if (transcript) {
//         setMessage(transcript);
//         stopVoiceLoop();
//         setTimeout(() => handleSend(transcript, true), 100);
//       }
//     };

//     recognitionRef.current.onerror = () => {
//       setIsListening(false);
//       if (isVoiceMode) voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 1000);
//     };

//     recognitionRef.current.onend = () => {
//       setIsListening(false);
//       if (isVoiceMode && !isTyping && !isSpeaking) voiceLoopTimerRef.current = setTimeout(startVoiceLoop, 300);
//     };

//     return () => {
//       stopVoiceLoop();
//       stopSpeaking();
//       clearTimeout(inactivityTimerRef.current!);
//     };
//   }, [isVoiceMode, i18n.language, startVoiceLoop, stopVoiceLoop, stopSpeaking, isTyping, isSpeaking]);

//   // === Inactivity and Greeting Logic ===
//   const resetInactivity = useCallback(() => {
//     if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    
//     const tId = setTimeout(() => {
//       if (messages.length <= 1 && !isSpeaking && !isListening && isOpen) {
//         const reminder: Message = {
//           type: 'bot',
//           text: t('chatbot.reminder'),
//           id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//           followUps: instantResponsesMap.get('greetingHi')?.followUps ?? getFollowUps(),
//         };
//         setMessages(m => [...m, reminder]);
//         speak(reminder.text);
//       }
//     }, 10000);
//     inactivityTimerRef.current = tId;
//   }, [messages.length, isSpeaking, isListening, isOpen, t, speak, instantResponsesMap, getFollowUps]);

//   useEffect(() => {
//     if (!isOpen || hasGreeted) return;

//     const greet = () => {
//       const greeting: Message = {
//         type: 'bot',
//         text: t('chatbot.greeting'),
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         followUps: instantResponsesMap.get('greetingHi')?.followUps ?? getFollowUps(),
//       };
//       setMessages([greeting]);
//       setHasGreeted(true);
//       speak(greeting.text);
//       resetInactivity();
//     };

//     const timer = setTimeout(greet, 500);
//     return () => clearTimeout(timer);
//   }, [isOpen, hasGreeted, t, speak, resetInactivity, instantResponsesMap, getFollowUps]);


//   // === API Call Handler ===
//   const callAPI = async (query: string): Promise<{ text: string, followUps: FollowUp[] } | null> => {
//     if (abortControllerRef.current) abortControllerRef.current.abort();
//     abortControllerRef.current = new AbortController();

//     try {
//       const res = await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query }),
//         signal: abortControllerRef.current.signal,
//       });
      
//       const data = await res.json();
//       return { text: data.response || t('chatbot.apiError'), followUps: [] };
//     } catch (e: any) {
//       if (e.name === 'AbortError') return null;
//       console.error('API Error:', e);
//       return { text: t('chatbot.connectionError'), followUps: [] };
//     }
//   };

//   // === Main Send Handler ===
//   const handleSend = async (text: string, fromVoice = false) => {
//     if (!text.trim() || isTyping) return;

//     resetInactivity();
//     stopVoiceLoop();
//     stopSpeaking();

//     const userMsg: Message = {
//       type: 'user',
//       text,
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//       isVoice: fromVoice,
//     };
    
//     setMessages(m => [...m, userMsg]);
//     setMessage('');

//     // --- Instant Match ---
//     const instant = findInstantResponse(text);
//     if (instant) {
//       const botMsg: Message = {
//         type: 'bot',
//         text: instant.text,
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         // Use followUps from the instant response, falling back to the default set
//         followUps: instant.followUps ?? getFollowUps(), 
//         showSolutions: instant.showSolutions,
//         showIndustries: instant.showIndustries,
//         showContactButtons: instant.showContactButtons,
//         showScheduleButton: instant.showScheduleButton,
//         autoRedirect: instant.autoRedirect,
//       };
//       setMessages(m => [...m, botMsg]);
      
//       if (fromVoice) speak(botMsg.text);
      
//       if (botMsg.autoRedirect) setTimeout(() => redirect(botMsg.autoRedirect!), 1500);
//       return;
//     }

//     // --- Fallback to API ---
//     setIsTyping(true);
//     const apiRes = await callAPI(text);
//     setIsTyping(false);
    
//     if (apiRes) {
//       const botMsg: Message = {
//         type: 'bot',
//         text: apiRes.text,
//         id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//         // CRITICAL FIX: Use the standardized, translated follow-ups
//         followUps: getFollowUps(),
//       };
//       setMessages(m => [...m, botMsg]);
      
//       if (fromVoice) speak(botMsg.text);
//     }
//   };

//   const handleFollowUp = (suggestion: FollowUp | string) => {
//     setIsVoiceMode(false);
    
//     const text = typeof suggestion === 'string' ? suggestion : suggestion.text;
//     const key = typeof suggestion !== 'string' ? suggestion.key : undefined;
    
//     // CRITICAL FIX: When a key is present, use the question text from the instant response
//     // to trigger the routing logic in handleSend.
//     if (key) {
//         const instant = instantResponsesMap.get(key);
//         // Use the first question text, or the main text, as the input for handleSend
//         const inputToResend = instant?.question?.split(',')[0].trim() || instant?.text || text;
//         handleSend(inputToResend, false); 
//         return;
//     }
    
//     handleSend(text, false);
//   };

//   // === REDIRECT & SCHEDULING ===
//   const redirect = (type: string) => {
//     const map: Record<string, string> = {
//       contact: '/contact',
//       solutions: '/services',
//       services: '/services',
//       domains: '/technologies',
//       schedule: '/scheduler',
//       consultation: '/scheduler', // Added mapping for consultation key
//     };
//     const url = map[type];
//     if (!url) return;

//     const msg: Message = {
//       type: 'bot',
//       text: `Redirecting you to the ${type} page...`,
//       id: `msg-${Date.now()}-${messageIdCounter.current++}`,
//     };
//     setMessages(m => [...m, msg]);
//     speak(msg.text);
//     setTimeout(() => window.open(url, '_blank'), 1500);
//   };

//   const schedule = () => {
//     // This is called when the dedicated 'Book Now' button is clicked
//     redirect('schedule');
//   };

//   // === RENDER ===
//   return (
//     <>
//       {/* FAB - Original Design */}
//       <motion.div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
//         initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
//         <motion.button onClick={() => setIsOpen(true)}
//           className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden"
//           whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//           style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4)' }}
//           aria-label="Open AI Assistant">
//           <motion.div className="absolute inset-0 rounded-full opacity-60"
//             style={{ background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)' }}
//             animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
//           <div className="absolute inset-1.5 rounded-full flex items-center justify-center"
//             style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}>
//             <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-white relative z-10" strokeWidth={2.5} />
//           </div>
//         </motion.button>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}>
//             <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(30, 40, 60, 0.96), rgba(10, 15, 25, 0.99))', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }} />
//             <motion.div className="relative w-full max-w-4xl h-[85vh] md:h-[700px] rounded-3xl shadow-2xl overflow-hidden"
//               initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }}
//               transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={e => e.stopPropagation()}
//               style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.4)' }}>

//               {/* Header */}
//               <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-white border-opacity-15"
//                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>
//                 <div className="flex items-center gap-2 md:gap-3">
//                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//                     <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
//                   </div>
//                   <div>
//                     <h2 className="text-lg md:text-2xl font-bold text-white">{t('chatbot.title')}</h2>
//                     <p className="text-[10px] md:text-xs text-gray-400">{t('chatbot.subtitle')}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-1 md:gap-2">
//                   {isSpeaking && (
//                     <motion.button onClick={stopSpeaking}
//                       className="p-2 md:p-2.5 rounded-xl border border-red-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                       style={{ background: 'rgba(239, 68, 68, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                       whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
//                     </motion.button>
//                   )}
//                   <motion.button onClick={() => { stopVoiceLoop(); stopSpeaking(); setIsOpen(false); }}
//                     className="p-2 md:p-2.5 rounded-xl border border-white border-opacity-20 hover:border-opacity-30 transition-colors"
//                     style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <X className="w-4 h-4 md:w-5 md:h-5 text-gray-300" />
//                   </motion.button>
//                 </div>
//               </div>

//               {/* Messages */}
//               <div className="relative z-10 h-[calc(85vh-160px)] md:h-[500px] overflow-y-auto px-4 md:px-8 py-4 md:py-6 space-y-4 md:space-y-5">
//                 {messages.map(msg => (
//                   <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//                     className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    
//                     <div className={`flex flex-col gap-2 md:gap-3 max-w-[85%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
//                       {/* Message Bubble */}
//                       <div className={`flex items-start gap-2 md:gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} w-full`}>
//                         <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-gray-700 to-gray-600'}`}>
//                           {msg.type === 'user' ? <span className="text-white text-xs md:text-sm font-semibold">Y</span> : <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />}
//                         </div>
//                         <div className={`px-4 md:px-5 py-2 md:py-3 rounded-2xl flex-1 ${msg.type === 'user' ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border border-white border-opacity-15 text-gray-100'}`}
//                           style={msg.type === 'bot' ? { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}}
//                           dangerouslySetInnerHTML={{ __html: msg.type === 'bot' ? msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : msg.text }} />
//                       </div>

//                       {/* Bot Message Follow-ups/Actions */}
//                       {msg.type === 'bot' && (
//                         <div className="w-full pl-9 md:pl-11 space-y-2">
                          
//                           {/* Solution Buttons with View All button */}
//                           {msg.showSolutions && (
//                             <div className="grid grid-cols-2 gap-2">
//                                 {/* View All Solutions Button */}
//                                 <motion.button onClick={() => redirect('services')}
//                                     className="col-span-2 px-3 py-2 rounded-lg text-white text-xs border border-blue-500 border-opacity-30 hover:border-opacity-50 transition-colors text-center flex items-center justify-center gap-2 bg-blue-600/30"
//                                     whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                     <ExternalLink className="w-3 h-3" /> View All Solutions
//                                 </motion.button>
                                
//                                 {/* Individual Solution Buttons */}
//                               {solutions.map((sol: any, i: number) => (
//                                 <motion.button key={i} onClick={() => window.open(sol.url, '_blank')}
//                                   className="px-3 py-2 rounded-lg text-white text-[10px] md:text-xs border border-purple-500 border-opacity-30 hover:border-opacity-50 transition-colors text-left flex items-center justify-between gap-2"
//                                   style={{ background: 'rgba(168, 85, 247, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                   whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                                   <span className="flex items-center gap-2">
//                                       <span>{sol.icon}</span> {sol.text}
//                                   </span>
//                                   <ExternalLink className="w-3 h-3 text-purple-300" />
//                                 </motion.button>
//                               ))}
//                             </div>
//                           )}

//                           {/* Contact Buttons */}
//                           {msg.showContactButtons && (
//                             <div className="flex flex-wrap gap-2">
//                               <motion.button onClick={() => location.href = 'tel:+917622817924'}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-green-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                                 style={{ background: 'rgba(34, 197, 94, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <Phone className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.callUs')}
//                               </motion.button>
//                               <motion.button onClick={() => location.href = 'mailto:info@clumoss.com'}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-blue-500 border-opacity-30 hover:border-opacity-50 transition-colors"
//                                 style={{ background: 'rgba(59, 130, 246, 0.15)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <Mail className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.emailUs')}
//                               </motion.button>
//                                {/* Redirect to Contact Page */}
//                                <motion.button onClick={() => redirect('contact')}
//                                 className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-purple-500 border-opacity-30 hover:border-opacity-50 transition-colors bg-purple-600/30"
//                                 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                 <ExternalLink className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> View Contact Page
//                               </motion.button>
//                             </div>
//                           )}

//                           {/* Schedule Button */}
//                           {msg.showScheduleButton && (
//                             <motion.button onClick={schedule}
//                               className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white text-xs md:text-sm border border-green-500 border-opacity-30 hover:border-opacity-50 transition-colors bg-gradient-to-r from-green-500 to-teal-500"
//                               style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                               whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                               <Calendar className="w-3 h-3 md:w-4 md:h-4 inline mr-1" /> {t('chatbot.buttons.bookNow')}
//                             </motion.button>
//                           )}

//                           {/* Follow-up Suggestions (CRITICAL FIX HERE) */}
//                           {msg.followUps?.length > 0 && (
//                             <div className="flex flex-col gap-2 mt-3">
//                               <p className="text-[10px] md:text-xs text-gray-400">Would you like to know about:</p>
//                               <div className="flex flex-wrap gap-1.5 md:gap-2">
//                                 {msg.followUps.map((s: FollowUp, i: number) => ( // Ensure type is FollowUp
//                                   <motion.button key={i} onClick={() => handleFollowUp(s)}
//                                     className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-gray-200 text-[10px] md:text-xs border border-gray-600 border-opacity-40 hover:border-opacity-60 transition-colors flex items-center gap-2"
//                                     style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
//                                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                                     {/* Must use s.text, which is now guaranteed to be the translated string */}
//                                     {s.text}
//                                   </motion.button>
//                                 ))}
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}

//                 {/* Typing Indicator */}
//                 {isTyping && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
//                     <div className="flex items-start gap-2 md:gap-3">
//                       <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-600">
//                         <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" strokeWidth={2.5} />
//                       </div>
//                       <div className="px-4 md:px-5 py-2 md:py-3 rounded-2xl border border-white border-opacity-15"
//                         style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
//                         <div className="flex items-center gap-2 md:gap-3">
//                           <div className="flex gap-1">
//                             {[0, 0.2, 0.4].map(d => (
//                               <motion.div key={d} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full"
//                                 animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} />
//                             ))}
//                           </div>
//                           <span className="text-[10px] md:text-xs text-gray-400">{t('chatbot.thinking')}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Input */}
//               <div className="relative z-10 px-4 md:px-8 pb-4 md:pb-6 border-t border-white border-opacity-15 pt-4 md:pt-5"
//                 style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)' }}>
//                 <div className="flex items-center gap-2 md:gap-3 rounded-2xl p-2 md:p-3 border border-white border-opacity-15"
//                   style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
//                   <input type="text" value={message} onChange={e => setMessage(e.target.value)}
//                     onKeyPress={e => e.key === 'Enter' && !e.shiftKey && handleSend(message, false)}
//                     placeholder={t('chatbot.placeholder')} className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm md:text-base"
//                     disabled={isTyping} />
//                   <motion.button onClick={toggleVoiceMode}
//                     className={`p-2 md:p-2.5 rounded-xl transition-all border ${isListening ? 'bg-red-600 border-red-500' : 'border-white border-opacity-20 hover:border-opacity-30'}`}
//                     style={!isListening ? { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' } : {}}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={isTyping}>
//                     <Mic className="w-4 h-4 md:w-5 md:h-5 text-white" />
//                   </motion.button>
//                   <motion.button onClick={isTyping ? () => abortControllerRef.current?.abort() : () => handleSend(message, false)}
//                     className={`p-2 md:p-2.5 rounded-xl transition-all ${isTyping ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} disabled:opacity-50 disabled:cursor-not-allowed`}
//                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={!message.trim() && !isTyping}>
//                     {isTyping ? <X className="w-4 h-4 md:w-5 md:h-5 text-white" /> : <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />}
//                   </motion.button>
//                 </div>
//                 {(isSpeaking || isListening) && (
//                   <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
//                     className="flex items-center gap-2 mt-2 md:mt-3 text-xs md:text-sm text-blue-400">
//                     {isSpeaking ? <Volume2 className="w-3 h-3 md:w-4 md:h-4 animate-pulse" /> : <Mic className="w-3 h-3 md:w-4 md:h-4" />}
//                     <span>{isSpeaking ? t('chatbot.speaking') : t('chatbot.listening')}</span>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }