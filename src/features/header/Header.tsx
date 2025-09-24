// 'use client';

// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import styles from './header.module.css';

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Projects', href: '/projects' },
//   { name: 'Solutions', href: '/services' },
//   { name: 'Who We Serve', href: '/technologies' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <>
//       <motion.header
//         className={`${styles.header} cylindrical-header fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-4 sm:px-6 py-3 w-11/12 max-w-6xl mx-auto`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Link href="/" className="text-xl sm:text-2xl font-bold">
//           CLUMOSS
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-lg hover:text-blue-400 transition-colors"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
//           aria-label="Toggle menu"
//         >
//           <motion.span
//             className="w-6 h-0.5 bg-white block"
//             animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.span
//             className="w-6 h-0.5 bg-white block"
//             animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.span
//             className="w-6 h-0.5 bg-white block"
//             animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//         </button>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleMenu}
//             />
            
//             {/* Mobile Menu */}
//             <motion.div
//               className={`${styles.mobileMenu} fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-sm mx-auto lg:hidden`}
//               initial={{ opacity: 0, y: -20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//             >
//               <nav className="flex flex-col space-y-4 p-6">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       href={item.href}
//                       className="text-lg hover:text-blue-400 transition-colors block py-2"
//                       onClick={toggleMenu}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// 'use client';

// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import LanguageSelector from '../../components/LanguageSelector';
// import styles from './header.module.css';

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Projects', href: '/projects' },
//   { name: 'Solutions', href: '/services' },
//   { name: 'Who We Serve', href: '/technologies' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentLanguage, setCurrentLanguage] = useState('en');

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleLanguageChange = (languageCode: string) => {
//     setCurrentLanguage(languageCode);
//     // Add your language change logic here
//     console.log('Language changed to:', languageCode);
//   };

//   return (
//     <>
//       <motion.header
//         className={`${styles.header} cylindrical-header fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-4 sm:px-6 py-3 w-11/12 max-w-6xl mx-auto`}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Link href="/" className="text-xl sm:text-2xl font-bold">
//           CLUMOSS
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-lg hover:text-blue-400 transition-colors"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop Language Selector and Mobile Menu Button Container */}
//         <div className="flex items-center space-x-4">
//           {/* Language Selector - visible on desktop */}
//           <div className="hidden lg:block">
//             <LanguageSelector
//               currentLanguage={currentLanguage}
//               onLanguageChange={handleLanguageChange}
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
//             aria-label="Toggle menu"
//           >
//             <motion.span
//               className="w-6 h-0.5 bg-white block"
//               animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//             <motion.span
//               className="w-6 h-0.5 bg-white block"
//               animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             <motion.span
//               className="w-6 h-0.5 bg-white block"
//               animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </button>
//         </div>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={toggleMenu}
//             />
            
//             {/* Mobile Menu */}
//             <motion.div
//               className={`${styles.mobileMenu} fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-sm mx-auto lg:hidden`}
//               initial={{ opacity: 0, y: -20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//             >
//               <nav className="flex flex-col space-y-4 p-6">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       href={item.href}
//                       className="text-lg hover:text-blue-400 transition-colors block py-2"
//                       onClick={toggleMenu}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 {/* Mobile Language Selector */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: navItems.length * 0.1 }}
//                   className="pt-4 border-t border-gray-600"
//                 >
//                   <LanguageSelector
//                     currentLanguage={currentLanguage}
//                     onLanguageChange={handleLanguageChange}
//                   />
//                 </motion.div>
//               </nav>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LanguageSelector from '../../components/LanguageSelector';
import styles from './header.module.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Solutions', href: '/services' },
  { name: 'Who We Serve', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    // Add your language change logic here
    console.log('Language changed to:', languageCode);
  };

  return (
    <>
      {/* Container for Header and LanguageSelector */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 w-11/12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          className={`${styles.header} cylindrical-header flex items-center justify-between px-4 sm:px-6 py-3 flex-1`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            CLUMOSS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.header>

        {/* Language Selector - Outside and to the right of header */}
        <motion.div
          className="flex-shrink-0"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className={`${styles.mobileMenu} fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-sm mx-auto lg:hidden`}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4 p-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg hover:text-blue-400 transition-colors block py-2"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}