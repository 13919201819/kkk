"use client";

import { useTranslation } from 'react-i18next';
import SolutionCard from "@/features/solutions/SolutionCard";
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

export default function ServicesPage() {
  const { t } = useTranslation();

  const solutions = t('solutions', { returnObjects: true }) as Array<{
    slug: string;
    title: string;
    description: string;
    bulletPoints: string[];
  }>;

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />
    
      <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
        <section className="py-16 px-8 bg-transparent">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white">
            {t('servicesPageHeading')}
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {solutions.map((sol, idx) => (
              <SolutionCard
                key={idx}
                title={sol.title}
                description={sol.description}
                bulletPoints={sol.bulletPoints}
                icon={iconMap[sol.slug]}
                index={idx}
                variant="services"
                slug={sol.slug}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}