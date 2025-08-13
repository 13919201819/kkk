// "use client";

// import { motion } from "framer-motion";
// import styles from "./solutions.module.css";
// import { FaRobot, FaChartLine, FaShieldAlt } from "react-icons/fa";

// const solutions = [
//   {
//     title: "AI Agents",
//     description:
//       "Autonomous AI agents tailored to your industry needs, increasing efficiency and reducing human effort.",
//     icon: <FaRobot size={40} />,
//   },
//   {
//     title: "Analytics",
//     description:
//       "Powerful data analytics solutions that turn your raw data into strategic insights for your business.",
//     icon: <FaChartLine size={40} />,
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Protect your business with advanced AI-powered threat detection and real-time protection.",
//     icon: <FaShieldAlt size={40} />,
//   },
// ];

// export default function Solutions() {
//   return (
//     <section>
//       <h2 className={styles.heading}>Solutions we offer</h2>
//       <div className={styles.grid}>
//         {solutions.map((sol, idx) => (
//           <motion.div
//             key={idx}
//             className={styles.cardWrapper}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: idx * 0.15 }}
//             viewport={{ once: true }}
//           >
//             <div className={styles.card}>
//               <div className={styles.vignette}></div>
//               <div className={styles.icon}>{sol.icon}</div>
//               <div className={styles.cardContent}>
//                 <h3 className={styles.title}>{sol.title}</h3>
//                 <p className={styles.description}>{sol.description}</p>
//                 <button className={styles.learnMore}>Learn More</button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import styles from "./solutions.module.css";
import { FaRobot, FaChartLine, FaShieldAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";

const solutions = [
  {
    title: "AI Agents",
    description:
      "Autonomous AI agents tailored to your industry needs, increasing efficiency and reducing human effort.",
    icon: <FaRobot size={40} />,
  },
  {
    title: "Analytics",
    description:
      "Powerful data analytics solutions that turn your raw data into strategic insights for your business.",
    icon: <FaChartLine size={40} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with advanced AI-powered threat detection and real-time protection.",
    icon: <FaShieldAlt size={40} />,
  },

  {
    title: "AI Agents",
    description:
      "Autonomous AI agents tailored to your industry needs, increasing efficiency and reducing human effort.",
    icon: <FaRobot size={40} />,
  },
  {
    title: "Analytics",
    description:
      "Powerful data analytics solutions that turn your raw data into strategic insights for your business.",
    icon: <FaChartLine size={40} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with advanced AI-powered threat detection and real-time protection.",
    icon: <FaShieldAlt size={40} />,
  },
];

export default function Solutions() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Solutions we offer</h2>
      <div className={styles.grid}>
        {solutions.map((sol, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.icon}>{sol.icon}</div>
            <h3 className={styles.title}>{sol.title}</h3>
            <p className={styles.description}>{sol.description}</p>
            <button className={styles.learnMore}>Learn More</button>
          </motion.div>
        ))}
      </div>

      {/* More button */}
      <div className={styles.moreButtonWrapper}>
        <Button text="More" />
      </div>
    </section>
  );
}
