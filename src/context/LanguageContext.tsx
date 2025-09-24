'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Translation interface
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Default translations
export const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.solutions': 'Solutions',
    'nav.whoWeServe': 'Who We Serve',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'CLUSTERS OF MULTI-ORGANIZATIONS',
    'hero.subtitle': 'FOR SUPPORT & SERVICES',
    'hero.description': 'Empowering industries with next-gen AI SaaS solutions through scalable platforms, innovation, and support.',
    'hero.exploreProducts': 'Explore Products',
    'hero.contactUs': 'Contact Us',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'के बारे में',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.solutions': 'समाधान',
    'nav.whoWeServe': 'हम किसकी सेवा करते हैं',
    'nav.contact': 'संपर्क',
    
    // Hero Section
    'hero.title': 'बहु-संगठनों के समूह',
    'hero.subtitle': 'सहायता और सेवाओं के लिए',
    'hero.description': 'स्केलेबल प्लेटफॉर्म, नवाचार और सहायता के माध्यम से अगली पीढ़ी के AI SaaS समाधानों के साथ उद्योगों को सशक्त बनाना।',
    'hero.exploreProducts': 'उत्पाद देखें',
    'hero.contactUs': 'संपर्क करें',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.projects': '项目',
    'nav.solutions': '解决方案',
    'nav.whoWeServe': '服务对象',
    'nav.contact': '联系',
    
    // Hero Section
    'hero.title': '多组织集群',
    'hero.subtitle': '支持与服务',
    'hero.description': '通过可扩展平台、创新和支持，为行业提供下一代AI SaaS解决方案。',
    'hero.exploreProducts': '探索产品',
    'hero.contactUs': '联系我们',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.solutions': 'Solutions',
    'nav.whoWeServe': 'Qui nous servons',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'CLUSTERS DE MULTI-ORGANISATIONS',
    'hero.subtitle': 'POUR LE SOUTIEN ET LES SERVICES',
    'hero.description': 'Autonomiser les industries avec des solutions AI SaaS de nouvelle génération grâce à des plateformes évolutives, l\'innovation et le support.',
    'hero.exploreProducts': 'Explorer les produits',
    'hero.contactUs': 'Nous contacter',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.solutions': 'Soluciones',
    'nav.whoWeServe': 'A quién servimos',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'CLUSTERS DE MULTI-ORGANIZACIONES',
    'hero.subtitle': 'PARA SOPORTE Y SERVICIOS',
    'hero.description': 'Empoderando industrias con soluciones AI SaaS de próxima generación a través de plataformas escalables, innovación y soporte.',
    'hero.exploreProducts': 'Explorar productos',
    'hero.contactUs': 'Contáctanos',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.projects': 'Projekte',
    'nav.solutions': 'Lösungen',
    'nav.whoWeServe': 'Wen wir bedienen',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'CLUSTER VON MULTI-ORGANISATIONEN',
    'hero.subtitle': 'FÜR UNTERSTÜTZUNG UND DIENSTLEISTUNGEN',
    'hero.description': 'Stärkung von Industrien mit AI SaaS-Lösungen der nächsten Generation durch skalierbare Plattformen, Innovation und Support.',
    'hero.exploreProducts': 'Produkte erkunden',
    'hero.contactUs': 'Kontaktiere uns',
  },
};

// Language Context
interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string, fallback?: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// RTL languages list
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur'];

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  // Load language from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language');
      if (savedLanguage && translations[savedLanguage]) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, []);

  // Save language to localStorage when it changes (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', currentLanguage);
      // Set HTML lang attribute
      document.documentElement.lang = currentLanguage;
      // Set direction for RTL languages
      document.documentElement.dir = RTL_LANGUAGES.includes(currentLanguage) ? 'rtl' : 'ltr';
    }
  }, [currentLanguage]);

  const setLanguage = (language: string) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  // Translation function
  const t = (key: string, fallback?: string): string => {
    const translation = translations[currentLanguage]?.[key] || translations.en[key] || fallback || key;
    return translation;
  };

  const isRTL = RTL_LANGUAGES.includes(currentLanguage);

  const contextValue: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};