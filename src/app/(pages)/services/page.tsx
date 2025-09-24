// // import Services from '@/features/solutions/Solutions';

// // // Default export to make this file a module
// // export default function ServicesPage() {
// //   return (
// //     <div className="min-h-screen">
// //       <Services />
// //     </div>
// //   );
// // }


// // import Services from '@/features/solutions/Solutions';

// // // Default export to make this file a module
// // export default function ServicesPage() {
// //   return (
// //     <div className="min-h-screen w-full relative bg-black">
// //       {/* Indigo Cosmos Background with Top Glow */}
// //       <div
// //         className="absolute inset-0 z-0"
// //         style={{
// //           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
// //         }}
// //       />
    
// //       {/* Content with proper spacing from header */}
// //       <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
// //         <Services />
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import { motion } from "framer-motion";
// import { 
//   FaRobot, 
//   FaChartLine, 
//   FaCogs, 
//   FaCode, 
//   FaNetworkWired, 
//   FaPaintBrush, 
//   FaBrain, 
//   FaShieldAlt,
//   FaLaptopCode,
//   FaMicrophone
// } from "react-icons/fa";

// const solutions = [
//   {
//     title: "Agentic AI",
//     description:
//       "AI agents that work like digital employees to automate tasks and make smart decisions.",
//     bulletPoints: [
//       "Smart decision-making with AI reasoning",
//       "Automates repetitive and complex tasks",
//       "Connects with tools, APIs, and workflows"
//     ],
//     icon: <FaRobot size={40} />,
//   },
//   {
//     title: "Data Analytics & Machine Learning",
//     description:
//       "Turn your data into insights that help you grow faster and smarter.",
//     bulletPoints: [
//       "Predicts trends and business outcomes",
//       "Automated machine learning models (MLOps)",
//       "Real-time dashboards and reports"
//     ],
//     icon: <FaChartLine size={40} />,
//   },
//   {
//     title: "Workflow Automation",
//     description:
//       "Save time and cut costs by automating daily business processes.",
//     bulletPoints: [
//       "Robotic Process Automation (RPA)",
//       "AI-based approvals and task management",
//       "Works with ERP, CRM, and other apps"
//     ],
//     icon: <FaCogs size={40} />,
//   },
//   {
//     title: "Full-Stack Generative AI Development",
//     description:
//       "End-to-end development of AI-powered applications for your business.",
//     bulletPoints: [
//       "AI chatbots, copilots, and custom apps",
//       "Multi-modal AI (text, image, voice, video)",
//       "Cloud-based deployment for scalability"
//     ],
//     icon: <FaCode size={40} />,
//   },
//   {
//     title: "MCP-Powered AI Agents & Orchestration",
//     description:
//       "Advanced orchestration using Model Context Protocol (MCP).",
//     bulletPoints: [
//       "Multi-agent collaboration at scale",
//       "Secure integration with tools and data",
//       "Flexible and scalable AI workflows"
//     ],
//     icon: <FaNetworkWired size={40} />,
//   },
//   {
//     title: "Next-Gen UI/UX Design",
//     description:
//       "Modern, attractive, and user-friendly digital experiences.",
//     bulletPoints: [
//       "AI-assisted design and prototyping",
//       "Interactive AR/VR experiences",
//       "Responsive and adaptive layouts"
//     ],
//     icon: <FaPaintBrush size={40} />,
//   },
//   {
//     title: "Fine-Tuned LLM Solutions",
//     description:
//       "Custom AI models trained for your industry needs.",
//     bulletPoints: [
//       "Tailored models for finance, healthcare, legal, etc.",
//       "Secure knowledge base integration",
//       "Optimized for fast, cost-efficient results"
//     ],
//     icon: <FaBrain size={40} />,
//   },
//   {
//     title: "Data Protection & Security",
//     description:
//       "Keep your business data safe with enterprise-grade security.",
//     bulletPoints: [
//       "AI-powered cyber threat detection",
//       "Zero-trust access and identity management",
//       "Compliance with GDPR, HIPAA, ISO standards"
//     ],
//     icon: <FaShieldAlt size={40} />,
//   },
//   {
//     title: "Enterprise Web Development",
//     description:
//       "Build powerful, secure, and scalable business applications.",
//     bulletPoints: [
//       "Full-stack cloud-ready development",
//       "API-first and microservices architecture",
//       "Enterprise-level performance and security"
//     ],
//     icon: <FaLaptopCode size={40} />,
//   },
//   {
//     title: "Conversational Voice Agents",
//     description:
//       "AI voice bots that talk naturally with your customers.",
//     bulletPoints: [
//       "Real-time speech recognition & response",
//       "Supports multiple languages",
//       "Integrates with call centers and apps"
//     ],
//     icon: <FaMicrophone size={40} />,
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen w-full relative bg-black">
//       {/* Indigo Cosmos Background with Top Glow */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
//         }}
//       />
    
//       {/* Content with proper spacing from header */}
//       <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
//         <section className="py-16 px-8 bg-transparent">
//           <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white">
//             Our Complete Range of Services
//           </h2>
//           <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//             {solutions.map((sol, idx) => (
//               <motion.div
//                 key={idx}
//                 className="relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.15 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {/* Card glow effect */}
//                 <div 
//                   className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//                   style={{
//                     background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//                   }}
//                 />
                
//                 <div className="text-4xl mb-4 relative z-10">{sol.icon}</div>
//                 <h3 className="text-xl font-bold mb-4 relative z-10">{sol.title}</h3>
//                 <p className="text-base text-white/80 mb-6 relative z-10">{sol.description}</p>
//                 <ul className="list-none p-0 m-0 mb-6 flex-grow relative z-10">
//                   {sol.bulletPoints.map((point, pointIdx) => (
//                     <li key={pointIdx} className="text-sm text-white/70 mb-2 pl-4 relative leading-relaxed before:content-['•'] before:text-purple-400/80 before:absolute before:left-0 before:font-bold">
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto">
//                   Learn More
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

// import SolutionCard from "@/components/SolutionCard";
import SolutionCard from "@/features/solutions/SolutionCard";
// import { solutions } from "@/data/solutionsData";
import { solutions } from "@/features/solutions/solutionData";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />
    
      {/* Content with proper spacing from header */}
      <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
        <section className="py-16 px-8 bg-transparent">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white">
            Our Complete Range of Services
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {solutions.map((sol, idx) => (
              <SolutionCard
                key={idx}
                title={sol.title}
                description={sol.description}
                bulletPoints={sol.bulletPoints}
                icon={sol.icon}
                index={idx}
                variant="services"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}