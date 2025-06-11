// // 'use client';

// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import styles from './header.module.css';

// // const navItems = [
// //   { name: 'Home', href: '/' },
// //   { name: 'About', href: '/about' },
// //   { name: 'Projects', href: '/projects' },
// //   { name: 'Services', href: '/services' },
// //   { name: 'Technologies', href: '/technologies' },
// //   { name: 'Contact', href: '/contact' },
// // ];

// // export default function Header() {
// //   return (
// //     <motion.header
// //       className={`${styles.header} cylindrical-header fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-11/12 max-w-6xl mx-auto`}
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       <Link href="/" className="text-2xl font-bold">
// //         CLUMOSS
// //       </Link>
// //       <nav className="space-x-6">
// //         {navItems.map((item) => (
// //           <Link
// //             key={item.name}
// //             href={item.href}
// //             className="text-lg hover:text-blue-400 transition-colors"
// //           >
// //             {item.name}
// //           </Link>
// //         ))}
// //       </nav>
// //     </motion.header>
// //   );
// // }




// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion'; // Already using named import
// import styles from './header.module.css';

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Projects', href: '/projects' },
//   { name: 'Services', href: '/services' },
//   { name: 'Technologies', href: '/technologies' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//   return (
//     <motion.header
//       className={`${styles.header} cylindrical-header fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-11/12 max-w-6xl mx-auto`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Link href="/" className="text-2xl font-bold">
//         CLUMOSS
//       </Link>
//       <nav className="space-x-6">
//         {navItems.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className="text-lg hover:text-blue-400 transition-colors"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </motion.header>
//   );
// }


'use client';

import Link from 'next/link';
import { motion } from 'framer-motion'; // Already using named import
import styles from './header.module.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <motion.header
      className={`${styles.header} cylindrical-header fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 w-11/12 max-w-6xl mx-auto`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-2xl font-bold">
        CLUMOSS
      </Link>
      <nav className="space-x-6">
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
    </motion.header>
  );
}