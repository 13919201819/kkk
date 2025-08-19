"use client";

import styles from "./domains.module.css";
import { motion } from "framer-motion";
import { 
  FaBuilding, 
  FaHeartbeat, 
  FaUniversity, 
  FaShoppingCart, 
  FaShieldAlt, 
  FaHome,
  FaIndustry,
  FaSeedling,
  FaGraduationCap,
  FaPassport,
  FaRunning,
  FaCreditCard,
  FaChartLine,
  FaMusic,
  FaGavel
} from "react-icons/fa";

const domains = [
  {
    title: "Healthcare",
    description: "AI-powered healthcare solutions for diagnostics, telemedicine, and secure patient data management.",
    icon: <FaHeartbeat size={40} />,
  },
  {
    title: "Defense",
    description: "Advanced AI and security systems for threat detection, surveillance, and defense intelligence.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Manufacturing",
    description: "Smart manufacturing with predictive maintenance, robotics, and AI-driven process automation.",
    icon: <FaIndustry size={40} />,
  },
  {
    title: "Real Estate",
    description: "AI solutions for property valuation, virtual tours, and automated real estate transactions.",
    icon: <FaHome size={40} />,
  },
  {
    title: "Government",
    description: "Secure AI platforms for citizen services, workflow automation, and policy planning.",
    icon: <FaBuilding size={40} />,
  },
  {
    title: "E-commerce & Retail",
    description: "Personalized shopping with AI recommendations, chatbots, and dynamic pricing.",
    icon: <FaShoppingCart size={40} />,
  },
  {
    title: "Agriculture",
    description: "AI-powered farming with crop prediction, drone monitoring, and supply chain optimization.",
    icon: <FaSeedling size={40} />,
  },
  {
    title: "Education",
    description: "Smart learning with AI tutors, predictive analytics, and digital education platforms.",
    icon: <FaGraduationCap size={40} />,
  },
  {
    title: "Immigration",
    description: "AI-driven immigration support with document verification, case automation, and guidance bots.",
    icon: <FaPassport size={40} />,
  },
  {
    title: "Sports & Fitness",
    description: "AI solutions for performance tracking, virtual coaching, and personalized fitness.",
    icon: <FaRunning size={40} />,
  },
  {
    title: "FinTech",
    description: "AI in finance with credit scoring, fraud detection, and secure digital payments.",
    icon: <FaCreditCard size={40} />,
  },
  {
    title: "Banking & Finance",
    description: "AI-driven fraud prevention, LLM-powered insights, and enterprise data security.",
    icon: <FaUniversity size={40} />,
  },
  {
    title: "Sales",
    description: "Smarter sales with AI agents, predictive lead scoring, and CRM automation.",
    icon: <FaChartLine size={40} />,
  },
  {
    title: "Music & Entertainment",
    description: "AI in entertainment for music generation, recommendations, and audience engagement.",
    icon: <FaMusic size={40} />,
  },
  {
    title: "Law",
    description: "Legal AI for contract automation, research assistants, and secure compliance.",
    icon: <FaGavel size={40} />,
  },
];

// Split domains into two groups for the marquee rows
const firstRowDomains = domains.slice(0, 8);  // First 8 domains
const secondRowDomains = domains.slice(8);    // Remaining 7 domains

export default function Domains() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Domains We Serve</h2>

        {/* Top Row → Right to Left */}
        <div className={`${styles.marqueeRow} ${styles.rightToLeft}`}>
          <div className={styles.marqueeTrack}>
            {firstRowDomains.concat(firstRowDomains).map((domain, i) => (
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
            {secondRowDomains.concat(secondRowDomains).map((domain, i) => (
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