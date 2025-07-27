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


// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>
//           <span>sters of </span>
//           <span className={styles.accent}>M</span>
//           <span>ulti-</span>
//           <span className={styles.accent}>O</span>
//           <span>rganizations</span>
//           <br />
//           <span className={styles.accent}>S</span>
//           <span>upport & </span>
//           <span className={styles.accent}>S</span>
//           <span>ervices</span>
//         </h1>

//         <p className={styles.subtitle}>
//           Transforming industries through next-gen AI SaaS products,
//           <br />
//           solutions and platforms that redefine automation.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>
//           <span>sters of </span>
//           <span className={styles.accent}>M</span>
//           <span>ulti-</span>
//           <span className={styles.accent}>O</span>
//           <span>rganizations</span>
//           <br />
//           <span className={styles.accent}>S</span>
//           <span>upport & </span>
//           <span className={styles.accent}>S</span>
//           <span>ervices</span>
//         </h1>

//         <p className={styles.subtitle}>
//           Transforming industries through next-gen AI SaaS products,
//           <br />
//           solutions and platforms that redefine automation.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       {/* ✨ Particle container */}
//       <div className={styles.particles}>
//         {Array.from({ length: 40 }).map((_, i) => (
//           <span key={i} className={styles.particle}></span>
//         ))}
//       </div>

//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>
//           <span>sters of </span>
//           <span className={styles.accent}>M</span>
//           <span>ulti-</span>
//           <span className={styles.accent}>O</span>
//           <span>rganizations</span>
//           <br />
//           <span className={styles.accent}>S</span>
//           <span>upport & </span>
//           <span className={styles.accent}>S</span>
//           <span>ervices</span>
//         </h1>

//         <p className={styles.subtitle}>
//           Transforming industries through next-gen AI SaaS products,
//           <br />
//           solutions and platforms that redefine automation.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       {/* ✨ Particle layer */}
//       <div className={styles.particles}>
//         {Array.from({ length: 60 }).map((_, i) => (
//           <span key={i} className={styles.particle}></span>
//         ))}
//       </div>

//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>
//           <span>sters of </span>
//           <span className={styles.accent}>M</span>
//           <span>ulti-</span>
//           <span className={styles.accent}>O</span>
//           <span>rganizations</span>
//           <br />
//           <span className={styles.accent}>S</span>
//           <span>upport & </span>
//           <span className={styles.accent}>S</span>
//           <span>ervices</span>
//         </h1>

//         <p className={styles.subtitle}>
//           Transforming industries through next-gen AI SaaS products,
//           <br />
//           solutions and platforms that redefine automation.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
// import { useEffect } from 'react';

// export default function Hero() {
//   useEffect(() => {
//     const particles = document.querySelectorAll(`.${styles.particle}`);
//     const handleMouseMove = (e: MouseEvent) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;
//       const offsetX = e.clientX - centerX;
//       const offsetY = e.clientY - centerY;

//       particles.forEach((particle, index) => {
//         const speed = (index % 5 + 1) * 0.02;
//         const x = offsetX * speed;
//         const y = offsetY * speed;
//         (particle as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <section className={styles.heroContainer}>
//       {/* ✨ Particle layer */}
//       <div className={styles.particles}>
//         {Array.from({ length: 40 }).map((_, i) => (
//           <span key={i} className={styles.particle}></span>
//         ))}
//       </div>

//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>
//           <span>sters of </span>
//           <span className={styles.accent}>M</span>
//           <span>ulti-</span>
//           <span className={styles.accent}>O</span>
//           <span>rganizations</span>
//           <br />
//           <span className={styles.accent}>S</span>
//           <span>upport & </span>
//           <span className={styles.accent}>S</span>
//           <span>ervices</span>
//         </h1>

//         <p className={styles.subtitle}>
//           Transforming industries through next-gen AI SaaS products,
//           <br />
//           solutions and platforms that redefine automation.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }







// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
// import { useEffect } from 'react';

// export default function Hero() {
//   useEffect(() => {
//     const particles = document.querySelectorAll(`.${styles.particle}`);
//     particles.forEach((particle) => {
//       const angle = Math.random() * 2 * Math.PI;
//       const radius = Math.random() * 100;
//       (particle as HTMLElement).style.setProperty('--x', `${Math.cos(angle)}`);
//       (particle as HTMLElement).style.setProperty('--y', `${Math.sin(angle)}`);
//     });
//   }, []);

//   return (
//     <section className={styles.heroContainer}>
//       {/* ✨ Particle layer */}
//       <div className={styles.particles}>
//         {Array.from({ length: 60 }).map((_, i) => (
//           <span key={i} className={styles.particle}></span>
//         ))}
//       </div>

//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: 'easeOut' }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>
//           <span>sters of </span>
//           <span className={styles.accent}>M</span>
//           <span>ulti-</span>
//           <span className={styles.accent}>O</span>
//           <span>rganizations</span>
//           <br />
//           <span className={styles.accent}>S</span>
//           <span>upport & </span>
//           <span className={styles.accent}>S</span>
//           <span>ervices</span>
//         </h1>

//         <p className={styles.subtitle}>
//           Pioneering the next generation of AI-driven platforms,<br />
//           empowering businesses through intelligence, automation, and clarity.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaCubes, FaPuzzlePiece, FaEnvelope } from 'react-icons/fa';
// import ParticlesBackground from '../particles/ParticlesBackground'; // ✅ Correct path

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       <ParticlesBackground /> {/* ⭐ Subtle Particle Background */}

//       <motion.div
//         className={styles.content}
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: 'easeOut' }}
//       >
//         <h1 className={styles.title}>
//           <span className={styles.accent}>CLU</span>sters of <span className={styles.accent}>M</span>ulti-
//           <span className={styles.accent}>O</span>rganizations
//           <br />
//           <span className={styles.accent}>S</span>upport & <span className={styles.accent}>S</span>ervices
//         </h1>

//         <p className={styles.subtitle}>
//           Pioneering the next generation of AI-driven platforms,
//           <br />
//           empowering businesses through intelligence, automation, and clarity.
//         </p>

//         <div className={styles.buttonGroup}>
//           <Link href="/products" className={styles.glassButton}>
//             <FaCubes className={styles.icon} /> Products
//           </Link>
//           <Link href="/solutions" className={styles.glassButton}>
//             <FaPuzzlePiece className={styles.icon} /> Solutions
//           </Link>
//           <Link href="/contact" className={styles.glassButton}>
//             <FaEnvelope className={styles.icon} /> Contact Us
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// 'use client';

// import styles from './hero.module.css';
// import { motion } from 'framer-motion';
// import ParticlesBackground from '@/features/particles/ParticlesBackground';
// import CTAButtons from '@/components/UI/CTAButtons';
// import ScrollIndicator from '@/components/UI/ScrollIndicator';
// import Globe from '@/components/animations/Globe';

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <ParticlesBackground />
//       <div className={styles.overlay}>
//         <div className={styles.contentContainer}>
//           {/* Left Content */}
//           <motion.div 
//             className={styles.textZone}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h1 className={styles.title}>
//               <span className={styles.letterGlow}>C</span>
//               <span>L</span>
//               <span className={styles.letterGlow}>U</span>
//               <span>M</span>
//               <span className={styles.letterGlow}>O</span>
//               <span>S</span>
//               <span className={styles.letterGlow}>S</span><br />
//               Igniting the Future of Intelligence
//             </h1>
//             <p className={styles.subheadline}>
//               Empowering industries with next-gen AI, innovation, and human-centric design.
//             </p>
//             <CTAButtons />
//           </motion.div>

//           {/* Right Visual */}
//           <motion.div 
//             className={styles.visualZone}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <Globe />
//           </motion.div>
//         </div>
//         <ScrollIndicator />
//       </div>
//     </section>
//   );
// }



// 'use client';

// import ParticlesBackground from '../particles/ParticlesBackground';
// import styles from './hero.module.css';

// export default function Hero() {
//   return (
//     <section className={styles.heroSection}>
//       <ParticlesBackground />
//       <div className={styles.contentWrapper}>
//         <h1 className={styles.title}>
//           <span className={styles.acronym}>CLUMOSS</span>
//           <span className={styles.fullForm}>
//             <br />Cognitive Learning Unified Model Of Strategic Systems
//           </span>
//         </h1>

//         <p className={styles.description}>
//           Empowering intelligence through unified systems for tomorrow’s industries.
//         </p>

//         <div className={styles.buttonGroup}>
//           <button className={`${styles.heroButton} ${styles.primary}`}>Explore Our Ecosystem</button>
//           <button className={`${styles.heroButton} ${styles.secondary}`}>Talk to Our AI</button>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';
import Galaxy from '@/features/particles/Galaxy'; // Update the path if needed

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Galaxy with custom props */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.0}
          glowIntensity={0.1}
          saturation={0}
          hueShift={240}
        />
      </div>

      {/* Hero content layered above Galaxy */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">CLUMOSS</h1>
        <p className="mt-4 text-lg md:text-xl">Providing cutting edge AI SaaS products</p>
      </div>
    </div>
  );
};

export default Hero;
