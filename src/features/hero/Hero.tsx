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



// 'use client';

// import styles from './hero.module.css';
// import Spline  from '@splinetool/react-spline';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       <div className={styles.splineWrapper}>
//         <Spline scene="https://prod.spline.design/your-spline-scene-url/scene.splinecode" />
//       </div>

//       <motion.div 
//         className={styles.content}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.clu}>CLU</span>
//           <span className={styles.moss}>MOSS</span>
//         </h1>
//         <p className={styles.fullform}>
//           Clusters of Multi Organizations for Support & Services
//         </p>
//         <p className={styles.subtitle}>
//           Transforming industries through AI SaaS applications
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/projects" className={styles.glassButton}>Projects</Link>
//           <Link href="/services" className={styles.glassButton}>Services</Link>
//         </div>
//       </motion.div>

//       <video autoPlay loop muted className={styles.bgVideo}>
//         <source src="/hero-bg.mp4" type="video/mp4" />
//       </video>
//     </section>
//   );
// }


// 'use client';

// import styles from './hero.module.css';
// import Spline from '@splinetool/react-spline/next';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       <div className={styles.splineWrapper}>
//         <Spline scene="https://prod.spline.design/2gKk90xaCEtznLHR/scene.splinecode" />
//       </div>

//       <motion.div 
//         className={styles.content}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.clu}>CLU</span>
//           <span className={styles.moss}>MOSS</span>
//         </h1>
//         <p className={styles.fullform}>
//           Clusters of Multi Organizations for Support & Services
//         </p>
//         <p className={styles.subtitle}>
//           Transforming industries through AI SaaS applications
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/projects" className={styles.glassButton}>Projects</Link>
//           <Link href="/services" className={styles.glassButton}>Services</Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }





// 'use client';

// import Script from 'next/script';
// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <>
//       {/* Load the Spline viewer in browser only */}
//       <Script
//         src="https://unpkg.com/@splinetool/viewer@1.0.39/build/spline-viewer.js"
//         strategy="afterInteractive"
//       />

//       <section className={styles.heroContainer}>
//         <div className={styles.splineWrapper}>
//           <spline-viewer url="https://prod.spline.design/NuH4Vw84-nb90Lsz/scene.splinecode"></spline-viewer>
//         </div>

//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <h1 className={styles.title}>
//             <span className={styles.highlight}>CLU</span>
//             <span className={styles.rest}>MOSS</span>
//           </h1>

//           <p className={styles.subtitle}>
//             Clusters of Multi Organizations for Support & Services
//           </p>

//           <p className={styles.tagline}>
//             Transforming industries through AI SaaS applications
//           </p>

//           <div className={styles.buttonGroup}>
//             <Link href="/projects" className={styles.glassButton}>
//               Projects
//             </Link>
//             <Link href="/services" className={styles.glassButton}>
//               Services
//             </Link>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }


// 'use client';

// import Script from 'next/script';
// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';

// export default function Hero() {
//   return (
//     <>
//       <Script
//         src="https://unpkg.com/@splinetool/viewer@1.0.39/build/spline-viewer.js"
//         strategy="afterInteractive"
//       />

//       <section className={styles.heroContainer}>
//         <div className={styles.splineWrapper}>
//           <spline-viewer url="https://prod.spline.design/NuH4Vw84-nb90Lsz/scene.splinecode"></spline-viewer>
//         </div>

//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           <h1 className={styles.title}>
//             <span className={styles.accent}>CLU</span>
//             <span>sters of </span>
//             <span className={styles.accent}>M</span>
//             <span>ulti-</span>
//             <br />
//             <span className={styles.accent}>O</span>
//             <span>rganizations for </span>
//             <span className={styles.accent}>S</span>
//             <span>upport & </span>
//             <span className={styles.accent}>S</span>
//             <span>ervices</span>
//           </h1>

//           <p className={styles.subtitle}>
//             Transforming industries through next-gen AI SaaS products,
//             <br />
//             solutions and platforms that redefine automation.
//           </p>

//           <div className={styles.buttonGroup}>
//             <Link href="/products" className={styles.glassButton}>
//               <FaCubes className={styles.icon} /> Products
//             </Link>
//             <Link href="/solutions" className={styles.glassButton}>
//               <FaPuzzlePiece className={styles.icon} /> Solutions
//             </Link>
//             <Link href="/contact" className={styles.glassButton}>
//               <FaEnvelope className={styles.icon} /> Contact Us
//             </Link>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }


'use client';

import styles from './hero.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className={styles.title}>
          <span className={styles.accent}>CLU</span>
          <span>sters of </span>
          <span className={styles.accent}>M</span>
          <span>ulti-</span>
          <span className={styles.accent}>O</span>
          <span>rganizations</span>
          <br />
          <span className={styles.accent}>S</span>
          <span>upport & </span>
          <span className={styles.accent}>S</span>
          <span>ervices</span>
        </h1>

        <p className={styles.subtitle}>
          Transforming industries through next-gen AI SaaS products,
          <br />
          solutions and platforms that redefine automation.
        </p>

        <div className={styles.buttonGroup}>
          <Link href="/products" className={styles.glassButton}>
            <FaCubes className={styles.icon} /> Products
          </Link>
          <Link href="/solutions" className={styles.glassButton}>
            <FaPuzzlePiece className={styles.icon} /> Solutions
          </Link>
          <Link href="/contact" className={styles.glassButton}>
            <FaEnvelope className={styles.icon} /> Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
