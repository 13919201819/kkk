// // components/SolutionCard.tsx
// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";
// import styles from "./solutions.module.css";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   icon: ReactNode;
//   index: number;
//   variant?: "default" | "services";
// }

// export default function SolutionCard({
//   title,
//   description,
//   bulletPoints,
//   icon,
//   index,
//   variant = "default"
// }: SolutionCardProps) {
//   const isServicesVariant = variant === "services";

//   return (
//     <motion.div
//       className={
//         isServicesVariant
//           ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//           : styles.card
//       }
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Card glow effect - only for services variant */}
//       {isServicesVariant && (
//         <div 
//           className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//           }}
//         />
//       )}
      
//       <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
//         {icon}
//       </div>
      
//       <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
//         {title}
//       </h3>
      
//       <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
//         {description}
//       </p>
      
//       <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
//         {bulletPoints.map((point, pointIdx) => (
//           <li 
//             key={pointIdx} 
//             className={
//               isServicesVariant 
//                 ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
//                 : styles.bulletPoint
//             }
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
      
//       <button 
//         className={
//           isServicesVariant
//             ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
//             : styles.learnMore
//         }
//       >
//         Learn More
//       </button>
//     </motion.div>
//   );
// }


// // components/SolutionCard.tsx
// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./solutions.module.css";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   icon: ReactNode;
//   index: number;
//   variant?: "default" | "services";
// }

// export default function SolutionCard({
//   title,
//   description,
//   bulletPoints,
//   icon,
//   index,
//   variant = "default"
// }: SolutionCardProps) {
//   const isServicesVariant = variant === "services";
//   const router = useRouter();

//   // Convert title to URL-friendly slug
//   const createSlug = (title: string) => {
//     return title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
//       .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens
//   };

//   const handleLearnMoreClick = () => {
//     const slug = createSlug(title);
//     router.push(`/solutions/${slug}`);
//   };

//   return (
//     <motion.div
//       className={
//         isServicesVariant
//           ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//           : styles.card
//       }
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Card glow effect - only for services variant */}
//       {isServicesVariant && (
//         <div 
//           className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//           }}
//         />
//       )}
      
//       <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
//         {icon}
//       </div>
      
//       <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
//         {title}
//       </h3>
      
//       <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
//         {description}
//       </p>
      
//       <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
//         {bulletPoints.map((point, pointIdx) => (
//           <li 
//             key={pointIdx} 
//             className={
//               isServicesVariant 
//                 ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
//                 : styles.bulletPoint
//             }
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
      
//       <button 
//         onClick={handleLearnMoreClick}
//         className={
//           isServicesVariant
//             ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
//             : styles.learnMore
//         }
//       >
//         Learn More
//       </button>
//     </motion.div>
//   );
// }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// components/SolutionCard.tsx
// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./solutions.module.css";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   icon: ReactNode;
//   index: number;
//   variant?: "default" | "services";
// }

// export default function SolutionCard({
//   title,
//   description,
//   bulletPoints,
//   icon,
//   index,
//   variant = "default"
// }: SolutionCardProps) {
//   const isServicesVariant = variant === "services";
//   const router = useRouter();

//   // Map titles to existing folder names
//   const getRoutePath = (title: string) => {
//     const routeMap: { [key: string]: string } = {
//       "Agentic AI": "agentic-ai",
//       "Data Analytics & Machine Learning": "data-analytics-ml",
//       "Data Protection & Security": "data-security",
//       "Enterprise Web Development": "enterprise-web-dev",
//       "Fine-Tuned LLM Solutions": "fine-tuned-llm",
//       "Full-Stack Generative AI Development": "generative-ai-development",
//       "MCP-Powered AI Agents & Orchestration": "mcp-ai-orchestration",
//       "Next-Gen UI/UX Design": "ui-ux-design",
//       "Conversational Voice Agents": "voice-agents",
//       "Workflow Automation": "workflow-automation"
//     };
    
//     return routeMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//   };

//   const handleLearnMoreClick = () => {
//     const routePath = getRoutePath(title);
//     router.push(`/solutions/${routePath}`);
//   };

//   return (
//     <motion.div
//       className={
//         isServicesVariant
//           ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//           : styles.card
//       }
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Card glow effect - only for services variant */}
//       {isServicesVariant && (
//         <div 
//           className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//           }}
//         />
//       )}
      
//       <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
//         {icon}
//       </div>
      
//       <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
//         {title}
//       </h3>
      
//       <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
//         {description}
//       </p>
      
//       <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
//         {bulletPoints.map((point, pointIdx) => (
//           <li 
//             key={pointIdx} 
//             className={
//               isServicesVariant 
//                 ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
//                 : styles.bulletPoint
//             }
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
      
//       <button 
//         onClick={handleLearnMoreClick}
//         className={
//           isServicesVariant
//             ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
//             : styles.learnMore
//         }
//       >
//         Learn More
//       </button>
//     </motion.div>
//   );
// }







// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./solutions.module.css";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   icon: ReactNode;
//   index: number;
//   variant?: "default" | "services";
// }

// export default function SolutionCard({
//   title,
//   description,
//   bulletPoints,
//   icon,
//   index,
//   variant = "default"
// }: SolutionCardProps) {
//   const isServicesVariant = variant === "services";
//   const router = useRouter();

//   // Map titles to existing folder names - updated to match your actual folder structure
//   const getRoutePath = (title: string) => {
//     const routeMap: { [key: string]: string } = {
//       "Agentic AI": "agentic-ai",
//       "Data Analytics & Machine Learning": "data-analytics-ml", 
//       "Data Protection & Security": "data-security",
//       "Enterprise Web Development": "enterprise-web-dev",
//       "Fine-Tuned LLM Solutions": "fine-tuned-llm",
//       "Full-Stack Generative AI Development": "generative-ai-development",
//       "MCP-Powered AI Agents & Orchestration": "mcp-ai-orchestration", 
//       "Next-Gen UI/UX Design": "ui-ux-design",
//       "Conversational Voice Agents": "voice-agents",
//       "Workflow Automation": "workflow-automation"
//     };
    
//     return routeMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//   };

//   const handleLearnMoreClick = () => {
//     const routePath = getRoutePath(title);
//     console.log(`Navigating to: /solutions/${routePath}`); // Debug log
    
//     // Use router.push with proper error handling
//     try {
//       router.push(`/solutions/${routePath}`);
//     } catch (error) {
//       console.error("Navigation error:", error);
//       // Fallback: try direct window navigation
//       window.location.href = `/solutions/${routePath}`;
//     }
//   };

//   return (
//     <motion.div
//       className={
//         isServicesVariant
//           ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//           : styles.card
//       }
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Card glow effect - only for services variant */}
//       {isServicesVariant && (
//         <div 
//           className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//           }}
//         />
//       )}
      
//       <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
//         {icon}
//       </div>
      
//       <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
//         {title}
//       </h3>
      
//       <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
//         {description}
//       </p>
      
//       <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
//         {bulletPoints.map((point, pointIdx) => (
//           <li 
//             key={pointIdx} 
//             className={
//               isServicesVariant 
//                 ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
//                 : styles.bulletPoint
//             }
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
      
//       <button 
//         onClick={handleLearnMoreClick}
//         className={
//           isServicesVariant
//             ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
//             : styles.learnMore
//         }
//       >
//         Learn More
//       </button>
//     </motion.div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./solutions.module.css";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   icon: ReactNode;
//   index: number;
//   variant?: "default" | "services";
// }

// export default function SolutionCard({
//   title,
//   description,
//   bulletPoints,
//   icon,
//   index,
//   variant = "default"
// }: SolutionCardProps) {
//   const isServicesVariant = variant === "services";
//   const router = useRouter();

//   // Map titles to existing folder names - updated to match your actual folder structure
//   const getRoutePath = (title: string) => {
//     const routeMap: { [key: string]: string } = {
//       "Agentic AI": "agentic-ai",
//       "Data Analytics & Machine Learning": "data-analytics-ml", 
//       "Data Protection & Security": "data-security",
//       "Enterprise Web Development": "enterprise-web-dev",
//       "Fine-Tuned LLM Solutions": "fine-tuned-llm",
//       "Full-Stack Generative AI Development": "generative-ai-development",
//       "MCP-Powered AI Agents & Orchestration": "mcp-ai-orchestration", 
//       "Next-Gen UI/UX Design": "ui-ux-design",
//       "Conversational Voice Agents": "voice-agents",
//       "Workflow Automation": "workflow-automation"
//     };
    
//     return routeMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//   };

//   const handleLearnMoreClick = () => {
//     const routePath = getRoutePath(title);
//     console.log(`Title: "${title}"`);
//     console.log(`Route path: "${routePath}"`); 
//     console.log(`Full URL: /solutions/${routePath}`);
    
//     // Try multiple navigation methods
//     try {
//       console.log("Attempting router.push...");
//       router.push(`/solutions/${routePath}`);
//     } catch (error) {
//       console.error("Router.push failed:", error);
//       console.log("Trying window.location...");
//       window.location.href = `/solutions/${routePath}`;
//     }
//   };

//   return (
//     <motion.div
//       className={
//         isServicesVariant
//           ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//           : styles.card
//       }
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Card glow effect - only for services variant */}
//       {isServicesVariant && (
//         <div 
//           className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//           }}
//         />
//       )}
      
//       <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
//         {icon}
//       </div>
      
//       <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
//         {title}
//       </h3>
      
//       <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
//         {description}
//       </p>
      
//       <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
//         {bulletPoints.map((point, pointIdx) => (
//           <li 
//             key={pointIdx} 
//             className={
//               isServicesVariant 
//                 ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
//                 : styles.bulletPoint
//             }
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
      
//       <button 
//         onClick={handleLearnMoreClick}
//         className={
//           isServicesVariant
//             ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
//             : styles.learnMore
//         }
//       >
//         Learn More
//       </button>
//     </motion.div>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import styles from "./solutions.module.css";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   bulletPoints: string[];
//   icon: ReactNode;
//   index: number;
//   variant?: "default" | "services";
// }

// export default function SolutionCard({
//   title,
//   description,
//   bulletPoints,
//   icon,
//   index,
//   variant = "default"
// }: SolutionCardProps) {
//   const isServicesVariant = variant === "services";
//   const router = useRouter();

//   // Map titles to existing folder names
//   const getRoutePath = (title: string) => {
//     const routeMap: { [key: string]: string } = {
//       "Agentic AI": "agentic-ai",
//       "Data Analytics & Machine Learning": "data-analytics-ml",
//       "Data Protection & Security": "data-security",
//       "Enterprise Web Development": "enterprise-web-dev",
//       "Fine-Tuned LLM Solutions": "fine-tuned-llm",
//       "Full-Stack Generative AI Development": "generative-ai-development",
//       "MCP-Powered AI Agents & Orchestration": "mcp-ai-orchestration",
//       "Next-Gen UI/UX Design": "ui-ux-design",
//       "Conversational Voice Agents": "voice-agents",
//       "Workflow Automation": "workflow-automation"
//     };
    
//     return routeMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
//   };

//   const handleLearnMoreClick = () => {
//     const routePath = getRoutePath(title);
//     router.push(`/solutions/${routePath}`);
//   };

//   return (
//     <motion.div
//       className={
//         isServicesVariant
//           ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//           : styles.card
//       }
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.15 }}
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {/* Card glow effect - only for services variant */}
//       {isServicesVariant && (
//         <div 
//           className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//           style={{
//             background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//           }}
//         />
//       )}
      
//       <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
//         {icon}
//       </div>
      
//       <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
//         {title}
//       </h3>
      
//       <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
//         {description}
//       </p>
      
//       <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
//         {bulletPoints.map((point, pointIdx) => (
//           <li 
//             key={pointIdx} 
//             className={
//               isServicesVariant 
//                 ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
//                 : styles.bulletPoint
//             }
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
      
//       <button 
//         onClick={handleLearnMoreClick}
//         className={
//           isServicesVariant
//             ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
//             : styles.learnMore
//         }
//       >
//         Learn More
//       </button>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "./solutions.module.css";

interface SolutionCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: ReactNode;
  index: number;
  variant?: "default" | "services";
}

export default function SolutionCard({
  title,
  description,
  bulletPoints,
  icon,
  index,
  variant = "default"
}: SolutionCardProps) {
  const isServicesVariant = variant === "services";
  const router = useRouter();

  // Map titles to existing folder names
  const getRoutePath = (title: string) => {
    const routeMap: { [key: string]: string } = {
      "Agentic AI": "agentic-ai",
      "Data Analytics & Machine Learning": "data-analytics-ml",
      "Data Protection & Security": "data-security",
      "Enterprise Web Development": "enterprise-web-dev",
      "Fine-Tuned LLM Solutions": "fine-tuned-llm",
      "Full-Stack Generative AI Development": "generative-ai-development",
      "MCP-Powered AI Agents & Orchestration": "mcp-ai-orchestration",
      "Next-Gen UI/UX Design": "ui-ux-design",
      "Conversational Voice Agents": "voice-agents",
      "Workflow Automation": "workflow-automation"
    };
    
    return routeMap[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  const handleLearnMoreClick = () => {
    const routePath = getRoutePath(title);
    router.push(`/services/${routePath}`);
  };

  return (
    <motion.div
      className={
        isServicesVariant
          ? "relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          : styles.card
      }
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Card glow effect - only for services variant */}
      {isServicesVariant && (
        <div 
          className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
          }}
        />
      )}
      
      <div className={isServicesVariant ? "text-4xl mb-4 relative z-10" : styles.icon}>
        {icon}
      </div>
      
      <h3 className={isServicesVariant ? "text-xl font-bold mb-4 relative z-10" : styles.title}>
        {title}
      </h3>
      
      <p className={isServicesVariant ? "text-base text-white/80 mb-6 relative z-10" : styles.description}>
        {description}
      </p>
      
      <ul className={isServicesVariant ? "list-none p-0 m-0 mb-6 flex-grow relative z-10" : styles.bulletPoints}>
        {bulletPoints.map((point, pointIdx) => (
          <li 
            key={pointIdx} 
            className={
              isServicesVariant 
                ? "text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold"
                : styles.bulletPoint
            }
          >
            {point}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={handleLearnMoreClick}
        className={
          isServicesVariant
            ? "bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto"
            : styles.learnMore
        }
      >
        Learn More
      </button>
    </motion.div>
  );
}