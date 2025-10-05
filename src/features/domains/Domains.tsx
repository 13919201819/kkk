"use client";

import styles from "./domains.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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

const domainIcons = [
  <FaHeartbeat size={40} key="healthcare" />,
  <FaShieldAlt size={40} key="defense" />,
  <FaIndustry size={40} key="manufacturing" />,
  <FaHome size={40} key="realestate" />,
  <FaBuilding size={40} key="government" />,
  <FaShoppingCart size={40} key="ecommerce" />,
  <FaSeedling size={40} key="agriculture" />,
  <FaGraduationCap size={40} key="education" />,
  <FaPassport size={40} key="immigration" />,
  <FaRunning size={40} key="sports" />,
  <FaCreditCard size={40} key="fintech" />,
  <FaUniversity size={40} key="banking" />,
  <FaChartLine size={40} key="sales" />,
  <FaMusic size={40} key="music" />,
  <FaGavel size={40} key="law" />,
];

export default function Domains() {
  const { t } = useTranslation();
  const domainsData = t('domains.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    button: string;
  }>;

  const domains = domainsData.map((domain, index) => ({
    ...domain,
    icon: domainIcons[index],
  }));

  // Split domains into two groups for the marquee rows
  const firstRowDomains = domains.slice(0, 8);  // First 8 domains
  const secondRowDomains = domains.slice(8);    // Remaining 7 domains

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('domains.title')}</h2>

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
                {/* <button className={styles.learnMore}>{domain.button}</button> */}
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
                {/* <button className={styles.learnMore}>{domain.button}</button> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}