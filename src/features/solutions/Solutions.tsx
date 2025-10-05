"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next';
import styles from "./solutions.module.css";
import Button from "@/components/ui/Button";
import SolutionCard from "./SolutionCard";
import React from "react";
import { 
  FaRobot, FaChartLine, FaCogs, FaCode, FaNetworkWired, 
  FaPaintBrush, FaBrain, FaShieldAlt, FaLaptopCode, FaMicrophone
} from "react-icons/fa";

// Map icons by SLUG, not title
const iconMap: { [key: string]: React.ReactNode } = {
  "agentic-ai": React.createElement(FaRobot, { size: 40 }),
  "data-analytics-ml": React.createElement(FaChartLine, { size: 40 }),
  "workflow-automation": React.createElement(FaCogs, { size: 40 }),
  "generative-ai-development": React.createElement(FaCode, { size: 40 }),
  "mcp-ai-orchestration": React.createElement(FaNetworkWired, { size: 40 }),
  "ui-ux-design": React.createElement(FaPaintBrush, { size: 40 }),
  "fine-tuned-llm": React.createElement(FaBrain, { size: 40 }),
  "data-security": React.createElement(FaShieldAlt, { size: 40 }),
  "enterprise-web-dev": React.createElement(FaLaptopCode, { size: 40 }),
  "voice-agents": React.createElement(FaMicrophone, { size: 40 }),
};

export default function Solutions() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleMoreClick = () => {
    router.push('/services');
  };

  const solutions = t('solutions', { returnObjects: true }) as Array<{
    slug: string;
    title: string;
    description: string;
    bulletPoints: string[];
  }>;

  const displayedSolutions = solutions.slice(0, 6);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{t('solutionsHeading')}</h2>
      <div className={styles.grid}>
        {displayedSolutions.map((sol, idx) => (
          <SolutionCard
            key={idx}
            title={sol.title}
            description={sol.description}
            bulletPoints={sol.bulletPoints}
            icon={iconMap[sol.slug]}
            index={idx}
            variant="default"
            slug={sol.slug}
          />
        ))}
      </div>

      <div className={styles.moreButtonWrapper}>
        <Button text={t('moreButton')} onClick={handleMoreClick} />
      </div>
    </section>
  );
}