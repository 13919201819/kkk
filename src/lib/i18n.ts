import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import enTranslations from '@/locales/en/translation.json';
import arTranslations from '@/locales/ar/translation.json';
import zhTranslations from '@/locales/zh/translation.json';
import frTranslations from '@/locales/fr/translation.json';
import deTranslations from '@/locales/de/translation.json';
import hiTranslations from '@/locales/hi/translation.json';
import jaTranslations from '@/locales/ja/translation.json';
import ruTranslations from '@/locales/ru/translation.json';
import esTranslations from '@/locales/es/translation.json';

const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
  zh: { translation: zhTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  hi: { translation: hiTranslations },
  ja: { translation: jaTranslations },
  ru: { translation: ruTranslations },
  es: { translation: esTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // ALWAYS start with English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;