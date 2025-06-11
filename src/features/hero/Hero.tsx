// // // import styles from './hero.module.css';

// // // export default function Hero() {
// // //   return (
// // //     <section id="home" className={styles.section}>
// // //       <div className="container mx-auto text-center">
// // //         <h2 className="text-5xl font-bold mb-4">Clusters of Multi-Organizations for Support and Services</h2>
// // //         <p className="text-xl mb-6">Transforming industries with innovative AI-driven SaaS solutions</p>
// // //         <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition">
// // //           Explore Projects
// // //         </a>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // import { motion } from 'framer-motion';
// // import styles from './hero.module.css';

// // export default function Hero() {
// //   return (
// //     <section className={`${styles.hero} min-h-screen flex items-center justify-center text-center px-6`}>
// //       <motion.div
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //       >
// //         <h1 className="text-5xl md:text-7xl font-bold mb-4">
// //           Transform Industries with CLUMOSS
// //         </h1>
// //         <p className="text-lg md:text-xl mb-6">
// //           Cutting-edge AI and SaaS solutions for Sales, Defense, E-commerce, Medical, and more.
// //         </p>
// //         <a
// //           href="/contact"
// //           className="glassmorphism inline-block px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors"
// //         >
// //           Get Started
// //         </a>
// //       </motion.div>
// //     </section>
// //   );
// // }




// import { motion } from 'framer-motion'; // Already using named import
// import styles from './hero.module.css';

// export default function Hero() {
//   return (
//     <section className={`${styles.hero} min-h-screen flex items-center justify-center text-center px-6`}>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl md:text-7xl font-bold mb-4">
//           Transform Industries with CLUMOSS
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           Cutting-edge AI and SaaS solutions for Sales, Defense, E-commerce, Medical, and more.
//         </p>
//         <a
//           href="/contact"
//           className="glassmorphism inline-block px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors"
//         >
//           Get Started
//         </a>
//       </motion.div>
//     </section>
//   );
// }


import { motion } from 'framer-motion'; // Already using named import
import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} min-h-screen flex items-center justify-center text-center px-6`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Transform Industries with CLUMOSS
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Cutting-edge AI and SaaS solutions for Sales, Defense, E-commerce, Medical, and more.
        </p>
        <a
          href="/contact"
          className="glassmorphism inline-block px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition-colors"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}