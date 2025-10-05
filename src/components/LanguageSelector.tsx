// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaGlobe, FaChevronDown } from 'react-icons/fa';
// import styles from './languageSelector.module.css';

// export interface Language {
//   code: string;
//   name: string;
//   nativeName: string;
//   flag: string;
// }

// const languages: Language[] = [
//   { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
//   { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
//   { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
//   { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
//   { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
//   { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
//   { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
//   { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
//   { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
// ];

// interface LanguageSelectorProps {
//   currentLanguage: string;
//   onLanguageChange: (languageCode: string) => void;
// }

// const LanguageSelector: React.FC<LanguageSelectorProps> = ({
//   currentLanguage,
//   onLanguageChange,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleLanguageSelect = (languageCode: string) => {
//     onLanguageChange(languageCode);
//     setIsOpen(false);
//   };

//   return (
//     <div className={styles.languageSelector} ref={dropdownRef}>
//       <motion.button
//         className={styles.languageButton}
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <FaGlobe className={styles.globeIcon} />
//         <span className={styles.currentLanguage}>
//           {currentLang.flag} {currentLang.code.toUpperCase()}
//         </span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.2 }}
//         >
//           <FaChevronDown className={styles.chevronIcon} />
//         </motion.div>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className={styles.dropdown}
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//           >
//             {languages.map((language) => (
//               <motion.button
//                 key={language.code}
//                 className={`${styles.languageOption} ${
//                   language.code === currentLanguage ? styles.active : ''
//                 }`}
//                 onClick={() => handleLanguageSelect(language.code)}
//                 whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span className={styles.flag}>{language.flag}</span>
//                 <div className={styles.languageInfo}>
//                   <span className={styles.languageName}>{language.name}</span>
//                   <span className={styles.nativeName}>{language.nativeName}</span>
//                 </div>
//                 {language.code === currentLanguage && (
//                   <motion.div
//                     className={styles.checkmark}
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     ✓
//                   </motion.div>
//                 )}
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LanguageSelector;


import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styles from './languageSelector.module.css';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[2]; // Default to English

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferredLanguage', languageCode);
      } catch (error) {
        console.error('Failed to save language preference:', error);
      }
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <motion.button
        className={styles.languageButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGlobe className={styles.globeIcon} />
        <span className={styles.currentLanguage}>
          {currentLang.flag} {currentLang.code.toUpperCase()}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className={styles.chevronIcon} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.dropdown}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                className={`${styles.languageOption} ${
                  language.code === i18n.language ? styles.active : ''
                }`}
                onClick={() => handleLanguageSelect(language.code)}
                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.flag}>{language.flag}</span>
                <div className={styles.languageInfo}>
                  <span className={styles.languageName}>{language.name}</span>
                  <span className={styles.nativeName}>{language.nativeName}</span>
                </div>
                {language.code === i18n.language && (
                  <motion.div
                    className={styles.checkmark}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;