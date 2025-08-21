"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./solutions.module.css";
import { 
  FaRobot, 
  FaChartLine, 
  FaCogs, 
  FaCode, 
  FaNetworkWired, 
  FaPaintBrush, 
  FaBrain, 
  FaShieldAlt,
  FaLaptopCode,
  FaMicrophone
} from "react-icons/fa";
import Button from "@/components/ui/Button";

const solutions = [
  {
    title: "Agentic AI",
    description:
      "AI agents that work like digital employees to automate tasks and make smart decisions.",
    bulletPoints: [
      "Smart decision-making with AI reasoning",
      "Automates repetitive and complex tasks",
      "Connects with tools, APIs, and workflows"
    ],
    icon: <FaRobot size={40} />,
  },
  {
    title: "Data Analytics & Machine Learning",
    description:
      "Turn your data into insights that help you grow faster and smarter.",
    bulletPoints: [
      "Predicts trends and business outcomes",
      "Automated machine learning models (MLOps)",
      "Real-time dashboards and reports"
    ],
    icon: <FaChartLine size={40} />,
  },
  {
    title: "Workflow Automation",
    description:
      "Save time and cut costs by automating daily business processes.",
    bulletPoints: [
      "Robotic Process Automation (RPA)",
      "AI-based approvals and task management",
      "Works with ERP, CRM, and other apps"
    ],
    icon: <FaCogs size={40} />,
  },
  {
    title: "Full-Stack Generative AI Development",
    description:
      "End-to-end development of AI-powered applications for your business.",
    bulletPoints: [
      "AI chatbots, copilots, and custom apps",
      "Multi-modal AI (text, image, voice, video)",
      "Cloud-based deployment for scalability"
    ],
    icon: <FaCode size={40} />,
  },
  {
    title: "MCP-Powered AI Agents & Orchestration",
    description:
      "Advanced orchestration using Model Context Protocol (MCP).",
    bulletPoints: [
      "Multi-agent collaboration at scale",
      "Secure integration with tools and data",
      "Flexible and scalable AI workflows"
    ],
    icon: <FaNetworkWired size={40} />,
  },
  {
    title: "Next-Gen UI/UX Design",
    description:
      "Modern, attractive, and user-friendly digital experiences.",
    bulletPoints: [
      "AI-assisted design and prototyping",
      "Interactive AR/VR experiences",
      "Responsive and adaptive layouts"
    ],
    icon: <FaPaintBrush size={40} />,
  },
  {
    title: "Fine-Tuned LLM Solutions",
    description:
      "Custom AI models trained for your industry needs.",
    bulletPoints: [
      "Tailored models for finance, healthcare, legal, etc.",
      "Secure knowledge base integration",
      "Optimized for fast, cost-efficient results"
    ],
    icon: <FaBrain size={40} />,
  },
  {
    title: "Data Protection & Security",
    description:
      "Keep your business data safe with enterprise-grade security.",
    bulletPoints: [
      "AI-powered cyber threat detection",
      "Zero-trust access and identity management",
      "Compliance with GDPR, HIPAA, ISO standards"
    ],
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Enterprise Web Development",
    description:
      "Build powerful, secure, and scalable business applications.",
    bulletPoints: [
      "Full-stack cloud-ready development",
      "API-first and microservices architecture",
      "Enterprise-level performance and security"
    ],
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "Conversational Voice Agents",
    description:
      "AI voice bots that talk naturally with your customers.",
    bulletPoints: [
      "Real-time speech recognition & response",
      "Supports multiple languages",
      "Integrates with call centers and apps"
    ],
    icon: <FaMicrophone size={40} />,
  },
];

export default function Solutions() {
  const router = useRouter();

  const handleMoreClick = () => {
    router.push('/services');
  };

  // Show only first 6 solutions for homepage
  const displayedSolutions = solutions.slice(0, 6);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Solutions we offer</h2>
      <div className={styles.grid}>
        {displayedSolutions.map((sol, idx) => (
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
            <ul className={styles.bulletPoints}>
              {sol.bulletPoints.map((point, pointIdx) => (
                <li key={pointIdx} className={styles.bulletPoint}>
                  {point}
                </li>
              ))}
            </ul>
            <button className={styles.learnMore}>Learn More</button>
          </motion.div>
        ))}
      </div>

      {/* More button */}
      <div className={styles.moreButtonWrapper}>
        <Button text="More" onClick={handleMoreClick} />
      </div>
    </section>
  );
}



