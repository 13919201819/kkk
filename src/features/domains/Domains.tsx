// "use client";

// import styles from "./domains.module.css";
// import { motion } from "framer-motion";
// import { FaBuilding, FaHeartbeat, FaUniversity, FaShoppingCart, FaShieldAlt, FaHome } from "react-icons/fa";

// const domains = [
//   {
//     title: "Defense & Security",
//     description: "AI-driven solutions for surveillance, threat detection, and real-time security insights.",
//     icon: <FaShieldAlt size={40} />,
//   },
//   {
//     title: "Finance & Banking",
//     description: "Smart automation, fraud detection, and predictive analytics to empower financial institutions.",
//     icon: <FaUniversity size={40} />,
//   },
//   {
//     title: "Healthcare",
//     description: "AI-powered diagnostics, patient monitoring, and operational efficiency in hospitals and clinics.",
//     icon: <FaHeartbeat size={40} />,
//   },
//   {
//     title: "E-Commerce & Retail",
//     description: "Personalized recommendations, customer insights, and supply chain optimization.",
//     icon: <FaShoppingCart size={40} />,
//   },
//   {
//     title: "Government",
//     description: "Secure digital transformation for public records, identity verification, and automation.",
//     icon: <FaBuilding size={40} />,
//   },
//   {
//     title: "Real Estate",
//     description: "Smart property analytics, AI valuation models, and predictive market insights.",
//     icon: <FaHome size={40} />,
//   },
// ];

// export default function Domains() {
//   return (
//     <section className={styles.section}>
//       <h2 className={styles.heading}>Domains We Serve</h2>

//       {/* Top Row → Right to Left */}
//       <div className={`${styles.marqueeRow} ${styles.rightToLeft}`}>
//         <div className={styles.marqueeTrack}>
//           {domains.concat(domains).map((domain, i) => (
//             <motion.div
//               key={`top-${i}`}
//               className={styles.card}
//               whileHover={{ scale: 1.03 }}
//             >
//               <div className={styles.icon}>{domain.icon}</div>
//               <h3 className={styles.title}>{domain.title}</h3>
//               <p className={styles.description}>{domain.description}</p>
//               <button className={styles.learnMore}>Explore</button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Row → Left to Right */}
//       <div className={`${styles.marqueeRow} ${styles.leftToRight}`}>
//         <div className={styles.marqueeTrack}>
//           {domains.concat(domains).map((domain, i) => (
//             <motion.div
//               key={`bottom-${i}`}
//               className={styles.card}
//               whileHover={{ scale: 1.03 }}
//             >
//               <div className={styles.icon}>{domain.icon}</div>
//               <h3 className={styles.title}>{domain.title}</h3>
//               <p className={styles.description}>{domain.description}</p>
//               <button className={styles.learnMore}>Explore</button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import styles from "./domains.module.css";
import { motion } from "framer-motion";
import { FaBuilding, FaHeartbeat, FaUniversity, FaShoppingCart, FaShieldAlt, FaHome } from "react-icons/fa";

const domains = [
  {
    title: "Defense & Security",
    description: "AI-driven solutions for surveillance, threat detection, and real-time security insights.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Finance & Banking",
    description: "Smart automation, fraud detection, and predictive analytics to empower financial institutions.",
    icon: <FaUniversity size={40} />,
  },
  {
    title: "Healthcare",
    description: "AI-powered diagnostics, patient monitoring, and operational efficiency in hospitals and clinics.",
    icon: <FaHeartbeat size={40} />,
  },
  {
    title: "E-Commerce & Retail",
    description: "Personalized recommendations, customer insights, and supply chain optimization.",
    icon: <FaShoppingCart size={40} />,
  },
  {
    title: "Government",
    description: "Secure digital transformation for public records, identity verification, and automation.",
    icon: <FaBuilding size={40} />,
  },
  {
    title: "Real Estate",
    description: "Smart property analytics, AI valuation models, and predictive market insights.",
    icon: <FaHome size={40} />,
  },
];

export default function Domains() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Domains We Serve</h2>

        {/* Top Row → Right to Left */}
        <div className={`${styles.marqueeRow} ${styles.rightToLeft}`}>
          <div className={styles.marqueeTrack}>
            {domains.concat(domains).map((domain, i) => (
              <motion.div
                key={`top-${i}`}
                className={styles.card}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles.icon}>{domain.icon}</div>
                <h3 className={styles.title}>{domain.title}</h3>
                <p className={styles.description}>{domain.description}</p>
                <button className={styles.learnMore}>Explore</button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Row → Left to Right */}
        <div className={`${styles.marqueeRow} ${styles.leftToRight}`}>
          <div className={styles.marqueeTrack}>
            {domains.concat(domains).map((domain, i) => (
              <motion.div
                key={`bottom-${i}`}
                className={styles.card}
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles.icon}>{domain.icon}</div>
                <h3 className={styles.title}>{domain.title}</h3>
                <p className={styles.description}>{domain.description}</p>
                <button className={styles.learnMore}>Explore</button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}