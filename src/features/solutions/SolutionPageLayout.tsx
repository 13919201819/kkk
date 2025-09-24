// // solutions/SolutionPageLayout.tsx
// "use client";

// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import styles from "./solutionPageLayout.module.css";
// import { FaArrowLeft, FaCheckCircle, FaIndustry, FaDollarSign, FaClock, FaStar } from "react-icons/fa";

// interface SolutionPageLayoutProps {
//   title: string;
//   seoTitle: string;
//   fullDescription: string;
//   bulletPoints: string[];
//   impactOnIndustry: string;
//   profitabilityForBusinesses: string;
//   timeEfficiency: string;
//   brandValue: string;
//   icon: React.ReactNode;
// }

// export default function SolutionPageLayout({
//   title,
//   seoTitle,
//   fullDescription,
//   bulletPoints,
//   impactOnIndustry,
//   profitabilityForBusinesses,
//   timeEfficiency,
//   brandValue,
//   icon
// }: SolutionPageLayoutProps) {
//   const router = useRouter();

//   const handleBackClick = () => {
//     router.back();
//   };

//   const handleContactClick = () => {
//     router.push("/contact");
//   };

//   return (
//     <div className={styles.container}>
//       {/* Header Section */}
//       <motion.div 
//         className={styles.header}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <button onClick={handleBackClick} className={styles.backButton}>
//           <FaArrowLeft /> Back
//         </button>
//         <h1 className={styles.seoTitle}>{seoTitle}</h1>
//       </motion.div>

//       {/* Hero Section */}
//       <motion.section 
//         className={styles.hero}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className={styles.heroContent}>
//           <div className={styles.heroIcon}>
//             {icon}
//           </div>
//           <h1 className={styles.title}>{title}</h1>
//           <p className={styles.description}>{fullDescription}</p>
//           <button onClick={handleContactClick} className={styles.ctaButton}>
//             Get Started Today
//           </button>
//         </div>
//       </motion.section>

//       {/* Key Features Section */}
//       <motion.section 
//         className={styles.features}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className={styles.sectionTitle}>Key Features & Capabilities</h2>
//         <div className={styles.bulletGrid}>
//           {bulletPoints.map((point, index) => (
//             <motion.div
//               key={index}
//               className={styles.bulletCard}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <FaCheckCircle className={styles.checkIcon} />
//               <span>{point}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Benefits Section */}
//       <motion.section 
//         className={styles.benefits}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className={styles.sectionTitle}>Why Choose This Solution?</h2>
//         <div className={styles.benefitsGrid}>
//           <motion.div 
//             className={styles.benefitCard}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.benefitIcon}>
//               <FaIndustry />
//             </div>
//             <h3>Industry Impact</h3>
//             <p>{impactOnIndustry}</p>
//           </motion.div>

//           <motion.div 
//             className={styles.benefitCard}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.benefitIcon}>
//               <FaDollarSign />
//             </div>
//             <h3>Profitability</h3>
//             <p>{profitabilityForBusinesses}</p>
//           </motion.div>

//           <motion.div 
//             className={styles.benefitCard}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.benefitIcon}>
//               <FaClock />
//             </div>
//             <h3>Time Efficiency</h3>
//             <p>{timeEfficiency}</p>
//           </motion.div>

//           <motion.div 
//             className={styles.benefitCard}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.benefitIcon}>
//               <FaStar />
//             </div>
//             <h3>Brand Value</h3>
//             <p>{brandValue}</p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section 
//         className={styles.cta}
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className={styles.ctaContent}>
//           <h2>Ready to Transform Your Business?</h2>
//           <p>Let&apos;s discuss how {title.toLowerCase()} can revolutionize your operations and drive growth.</p>
//           <div className={styles.ctaButtons}>
//             <button onClick={handleContactClick} className={styles.primaryCta}>
//               Contact Us Now
//             </button>
//             <button onClick={() => router.push('/services')} className={styles.secondaryCta}>
//               View All Solutions
//             </button>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }






// components/SolutionsPageLayout.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SolutionsPageLayoutProps {
  children?: ReactNode;
  solutionTitle: string;
  solutionDescription: string;
  solutionIcon?: ReactNode;
}

export default function SolutionsPageLayout({
  children,
  solutionTitle,
  solutionDescription,
  solutionIcon
}: SolutionsPageLayoutProps) {
  const handleScheduleCall = () => {
    // Add your scheduling logic here
    // Could be a modal, external link, or navigation to contact page
    console.log("Schedule call clicked");
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Solution Icon and Title */}
          <div className="text-center mb-8">
            {solutionIcon && (
              <motion.div
                className="flex justify-center mb-6 text-6xl text-indigo-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {solutionIcon}
              </motion.div>
            )}
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {solutionTitle}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {solutionDescription}
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          className="container mx-auto px-6 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {children}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Let&apos;s discuss how <span className="text-indigo-400">{solutionTitle}</span> can help you grow your business
            </h2>
            
            <motion.button
              onClick={handleScheduleCall}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Optional: Additional background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
    </div>
  );
}