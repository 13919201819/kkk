// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { ArrowLeft } from "lucide-react";
// import Button from "@/components/ui/Button";

// // Solution data embedded here
// const solutions = [
//   {
//     title: "Agentic AI",
//     description: "Transform your business with intelligent AI agents that can think, plan, and execute complex tasks autonomously.",
//     bulletPoints: [
//       "Autonomous decision making",
//       "Multi-step task execution", 
//       "Real-time adaptation",
//       "Integration with existing systems"
//     ],
//     keywords: ["cognitive computing", "robotic process automation", "intelligent automation", "neural networks", "enterprise AI"],
//     icon: "🤖",
//     businessImpact: [
//       { metric: "Process Efficiency", description: "Streamline manual workflows and eliminate repetitive tasks with intelligent automation that adapts to your business needs" },
//       { metric: "Faster Decisions", description: "Make critical business decisions in real-time with AI-powered insights and automated decision support systems" },
//       { metric: "Cost Optimization", description: "Reduce operational costs by up to 40% through intelligent resource allocation and process optimization" },
//       { metric: "Always Available", description: "Ensure 24/7 business continuity with AI agents that never sleep, providing constant operational support" }
//     ]
//   },
//   {
//     title: "Data Analytics & Machine Learning",
//     description: "Unlock insights from your data with advanced analytics and custom machine learning models.",
//     bulletPoints: [
//       "Predictive modeling",
//       "Real-time analytics",
//       "Custom dashboards",
//       "Automated insights"
//     ],
//     keywords: ["statistical modeling", "data visualization", "pattern recognition", "algorithmic insights", "quantitative analysis"],
//     icon: "📊",
//     businessImpact: [
//       { metric: "Revenue Growth", description: "Unlock new revenue streams and optimize pricing strategies using predictive analytics and market intelligence" },
//       { metric: "Informed Decisions", description: "Transform raw data into actionable insights with real-time analytics dashboards and automated reporting" },
//       { metric: "Predictive Accuracy", description: "Forecast market trends and customer behavior with 95% accuracy using advanced machine learning models" },
//       { metric: "Risk Mitigation", description: "Identify and prevent potential business risks before they impact operations through predictive modeling" }
//     ]
//   },
//   {
//     title: "Data Protection & Security",
//     description: "Secure your digital assets with comprehensive data protection and cybersecurity solutions.",
//     bulletPoints: [
//       "End-to-end encryption",
//       "Compliance management",
//       "Threat detection",
//       "Access control"
//     ],
//     keywords: ["information security", "risk management", "digital forensics", "vulnerability assessment", "security protocols"],
//     icon: "🔒",
//     businessImpact: [
//       { metric: "Enhanced Protection", description: "Safeguard sensitive data and prevent cyber threats with enterprise-grade security protocols and monitoring" },
//       { metric: "Regulatory Compliance", description: "Meet industry standards and regulations with automated compliance tracking and audit-ready documentation" },
//       { metric: "Rapid Response", description: "Detect and neutralize security threats within minutes using AI-powered threat intelligence systems" },
//       { metric: "Business Continuity", description: "Maintain uninterrupted operations with robust backup systems and disaster recovery protocols" }
//     ]
//   },
//   {
//     title: "Enterprise Web Development",
//     description: "Build scalable, high-performance web applications tailored for enterprise needs.",
//     bulletPoints: [
//       "Scalable architecture",
//       "Modern frameworks",
//       "Performance optimization",
//       "Security first approach"
//     ],
//     keywords: ["full-stack development", "responsive design", "cloud computing", "software engineering", "API development"],
//     icon: "🌐",
//     businessImpact: [
//       { metric: "Optimized Performance", description: "Deliver lightning-fast loading speeds and seamless user interactions that keep visitors engaged longer" },
//       { metric: "Higher Engagement", description: "Boost customer satisfaction and retention with intuitive interfaces and smooth user experiences" },
//       { metric: "Reliable Uptime", description: "Ensure consistent website availability with robust architecture that minimizes downtime and outages" },
//       { metric: "Reduced Maintenance", description: "Lower long-term operational costs with clean, scalable code that requires minimal ongoing maintenance" }
//     ]
//   },
//   {
//     title: "Fine-Tuned LLM Solutions",
//     description: "Custom language models fine-tuned for your specific business domain and requirements.",
//     bulletPoints: [
//       "Domain-specific training",
//       "Custom model deployment",
//       "Performance optimization",
//       "Continuous learning"
//     ],
//     keywords: ["neural language models", "text processing", "computational linguistics", "semantic understanding", "language modeling"],
//     icon: "🧠",
//     businessImpact: [
//       { metric: "Domain Expertise", description: "Achieve specialized task performance that understands your industry's unique language and requirements" },
//       { metric: "Content Efficiency", description: "Accelerate content creation by 10x while maintaining quality and brand consistency across all materials" },
//       { metric: "Processing Speed", description: "Handle thousands of documents instantly with rapid text analysis and intelligent content generation" },
//       { metric: "Resource Optimization", description: "Maximize team productivity by automating repetitive writing tasks and content management workflows" }
//     ]
//   },
//   {
//     title: "Full-Stack Generative AI Development",
//     description: "End-to-end generative AI solutions from concept to deployment.",
//     bulletPoints: [
//       "Custom AI applications",
//       "Multi-modal capabilities",
//       "Scalable deployment",
//       "User-friendly interfaces"
//     ],
//     keywords: ["synthetic media", "computer vision", "deep learning", "creative algorithms", "artificial creativity"],
//     icon: "⚡",
//     businessImpact: [
//       { metric: "Accelerated Innovation", description: "Bring new products to market 3x faster with rapid AI-powered prototyping and development cycles" },
//       { metric: "Creative Output", description: "Generate unlimited creative assets and content variations that enhance your marketing and product capabilities" },
//       { metric: "Content Automation", description: "Streamline content generation across all channels with AI that maintains your brand voice and quality standards" },
//       { metric: "Strong ROI", description: "Achieve measurable returns on investment with solutions that pay for themselves within 6-12 months" }
//     ]
//   },
//   {
//     title: "MCP-Powered AI Agents & Orchestration",
//     description: "Advanced AI agent orchestration using Model Context Protocol for seamless integration.",
//     bulletPoints: [
//       "Agent coordination",
//       "Protocol integration",
//       "Workflow automation",
//       "Scalable orchestration"
//     ],
//     keywords: ["distributed systems", "microservices", "event-driven architecture", "system integration", "process orchestration"],
//     icon: "🔄",
//     businessImpact: [
//       { metric: "Enhanced Efficiency", description: "Optimize complex workflows by coordinating multiple AI agents that work together seamlessly" },
//       { metric: "Agent Collaboration", description: "Enable seamless multi-agent coordination that handles sophisticated tasks requiring diverse expertise" },
//       { metric: "Scalable Solutions", description: "Deploy flexible agent networks that grow with your business needs and handle increasing workloads" },
//       { metric: "Reliable Workflows", description: "Ensure consistent process execution with robust orchestration that maintains quality across all operations" }
//     ]
//   },
//   {
//     title: "Next-Gen UI/UX Design",
//     description: "Innovative user interface and experience design for modern applications.",
//     bulletPoints: [
//       "User-centered design",
//       "Interactive prototypes",
//       "Accessibility focus",
//       "Modern aesthetics"
//     ],
//     keywords: ["human-computer interaction", "visual design", "usability testing", "interaction design", "design thinking"],
//     icon: "🎨",
//     businessImpact: [
//       { metric: "User Engagement", description: "Create captivating interfaces that increase user interaction time and encourage repeat visits" },
//       { metric: "Conversion Growth", description: "Boost business performance with designs optimized for higher conversion rates and customer acquisition" },
//       { metric: "User Satisfaction", description: "Achieve high satisfaction scores through intuitive, accessible designs that delight every user" },
//       { metric: "Support Efficiency", description: "Reduce customer support tickets with self-explanatory interfaces that minimize user confusion" }
//     ]
//   },
//   {
//     title: "Conversational Voice Agents",
//     description: "Intelligent voice-powered assistants for enhanced customer engagement.",
//     bulletPoints: [
//       "Natural language processing",
//       "Voice synthesis",
//       "Multi-language support",
//       "Context awareness"
//     ],
//     keywords: ["speech recognition", "voice synthesis", "audio processing", "conversational design", "speech technology"],
//     icon: "🎤",
//     businessImpact: [
//       { metric: "24/7 Support", description: "Provide round-the-clock customer service availability that never misses a call or inquiry" },
//       { metric: "Cost Efficiency", description: "Optimize support operations and achieve significant cost savings while maintaining service quality" },
//       { metric: "Customer Satisfaction", description: "Deliver enhanced user experiences with natural, helpful voice interactions that feel truly human" },
//       { metric: "Quick Resolution", description: "Handle customer queries faster with intelligent voice agents that provide instant, accurate responses" }
//     ]
//   },
//   {
//     title: "Workflow Automation",
//     description: "Streamline your business processes with intelligent workflow automation.",
//     bulletPoints: [
//       "Process optimization",
//       "Task automation",
//       "Integration capabilities",
//       "Performance monitoring"
//     ],
//     keywords: ["business process management", "digital transformation", "process mining", "robotic automation", "efficiency optimization"],
//     icon: "⚙️",
//     businessImpact: [
//       { metric: "Process Automation", description: "Achieve operational excellence by reducing manual intervention and eliminating human error in routine tasks" },
//       { metric: "Workflow Speed", description: "Accelerate completion times and boost overall efficiency with intelligent process optimization" },
//       { metric: "Process Accuracy", description: "Ensure consistent, high-quality execution of automated processes that maintain professional standards" },
//       { metric: "Operational Savings", description: "Maximize cost management through optimized resource utilization and reduced operational overhead" }
//     ]
//   }
// ];

// export default function ServiceDetailPage() {
//   const params = useParams();
//   const router = useRouter();
//   const slug = params.slug as string;

//   // Map slug to title
//   const routeMap: { [key: string]: string } = {
//     "agentic-ai": "Agentic AI",
//     "data-analytics-ml": "Data Analytics & Machine Learning",
//     "data-security": "Data Protection & Security", 
//     "enterprise-web-dev": "Enterprise Web Development",
//     "fine-tuned-llm": "Fine-Tuned LLM Solutions",
//     "generative-ai-development": "Full-Stack Generative AI Development",
//     "mcp-ai-orchestration": "MCP-Powered AI Agents & Orchestration",
//     "ui-ux-design": "Next-Gen UI/UX Design",
//     "voice-agents": "Conversational Voice Agents",
//     "workflow-automation": "Workflow Automation"
//   };

//   const solutionTitle = routeMap[slug];
//   const solution = solutions.find(s => s.title === solutionTitle);

//   if (!solution) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl mb-4">Service not found</h1>
//           <Button 
//             text="Back to Services"
//             onClick={() => router.push('/services')}
//           />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full relative bg-black">
//       <div className="absolute inset-0 z-0" style={{
//         background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
//       }} />
      
//       <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
//         <div className="max-w-6xl mx-auto px-8 py-16">
//           {/* Back button - left aligned */}
//           <button
//             onClick={() => router.back()}
//             className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
//           >
//             <ArrowLeft size={20} />
//             Back to Services
//           </button>

//           {/* Header section - center aligned */}
//           <div className="mb-20 text-center">
//             <div className="mb-8">
//               <div className="text-6xl mb-6">{solution.icon}</div>
//               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//                 {solution.title}
//               </h1>
//             </div>
//             <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
//               {solution.description}
//             </p>
//           </div>

//           {/* Business Impact & ROI section - 2x2 grid layout */}
//           <div className="mb-20 text-center">
//             <h2 className="text-3xl font-bold text-white mb-12">Business Impact & ROI</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//               {solution.businessImpact.map((impact, idx) => (
//                 <div 
//                   key={idx} 
//                   className="relative bg-white/[0.02] rounded-3xl p-16 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[300px] flex flex-col justify-center"
//                 >
//                   {/* Card glow effect */}
//                   <div 
//                     className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//                     style={{
//                       background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//                     }}
//                   />
                  
//                   <div className="relative z-10 text-center">
//                     {/* Main metric title */}
//                     <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
//                       {impact.metric}
//                     </h3>
                    
//                     {/* Concise description */}
//                     <p className="text-white/80 leading-relaxed text-base md:text-lg">
//                       {impact.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Key Features section - wider cards */}
//           <div className="mb-20 text-center">
//             <h2 className="text-2xl font-bold text-white mb-12">Key Features</h2>
//             <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
//               {solution.bulletPoints.map((point, idx) => (
//                 <div 
//                   key={idx} 
//                   className="relative bg-white/[0.02] rounded-3xl p-12 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[140px] flex items-center justify-center"
//                 >
//                   {/* Card glow effect */}
//                   <div 
//                     className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
//                     style={{
//                       background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//                     }}
//                   />
//                   <p className="text-white/90 relative z-10 text-center text-lg leading-relaxed">{point}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Keywords section - wider container */}
//           <div className="mb-20 text-center">
//             <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
//               {solution.keywords.map((keyword, idx) => (
//                 <span 
//                   key={idx}
//                   className="px-8 py-4 bg-white/[0.05] rounded-full text-white/70 text-base border border-white/[0.1] backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
//                 >
//                   {keyword}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA section - wider container */}
//           <div className="relative bg-white/[0.02] rounded-3xl p-16 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden text-center max-w-7xl mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
//             {/* Card glow effect */}
//             <div 
//               className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60%] z-0"
//               style={{
//                 background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
//               }}
//             />
            
//             <div className="relative z-10">
//               <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Business Today</h3>
              
//               <div className="mb-10">
//                 <p className="text-xl text-white/80 mb-4 leading-relaxed">
//                   Join companies that have already revolutionized their operations with {solution.title.toLowerCase()}.
//                 </p>
//                 <p className="text-lg text-white/70 leading-relaxed">
//                   Get a free consultation and discover how we can deliver measurable value for your business.
//                 </p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <Button 
//                   text="Get Free Consultation"
//                   onClick={() => router.push('/contact')}
//                 />
//                 <button 
//                   onClick={() => router.push('/case-studies')}
//                   className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
//                 >
//                   View Case Studies
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

// Solution data embedded here
const solutions = [
  {
    title: "Agentic AI",
    description: "Transform your business with intelligent AI agents that can think, plan, and execute complex tasks autonomously.",
    bulletPoints: [
      "Autonomous decision making",
      "Multi-step task execution", 
      "Real-time adaptation",
      "Integration with existing systems"
    ],
    keywords: ["cognitive computing", "robotic process automation", "intelligent automation", "neural networks", "enterprise AI"],
    icon: "🤖",
    businessImpact: [
      { metric: "Process Efficiency", description: "Streamline manual workflows and eliminate repetitive tasks with intelligent automation that adapts to your business needs" },
      { metric: "Faster Decisions", description: "Make critical business decisions in real-time with AI-powered insights and automated decision support systems" },
      { metric: "Cost Optimization", description: "Reduce operational costs by up to 40% through intelligent resource allocation and process optimization" },
      { metric: "Always Available", description: "Ensure 24/7 business continuity with AI agents that never sleep, providing constant operational support" }
    ]
  },
  {
    title: "Data Analytics & Machine Learning",
    description: "Unlock insights from your data with advanced analytics and custom machine learning models.",
    bulletPoints: [
      "Predictive modeling",
      "Real-time analytics",
      "Custom dashboards",
      "Automated insights"
    ],
    keywords: ["statistical modeling", "data visualization", "pattern recognition", "algorithmic insights", "quantitative analysis"],
    icon: "📊",
    businessImpact: [
      { metric: "Revenue Growth", description: "Unlock new revenue streams and optimize pricing strategies using predictive analytics and market intelligence" },
      { metric: "Informed Decisions", description: "Transform raw data into actionable insights with real-time analytics dashboards and automated reporting" },
      { metric: "Predictive Accuracy", description: "Forecast market trends and customer behavior with 95% accuracy using advanced machine learning models" },
      { metric: "Risk Mitigation", description: "Identify and prevent potential business risks before they impact operations through predictive modeling" }
    ]
  },
  {
    title: "Data Protection & Security",
    description: "Secure your digital assets with comprehensive data protection and cybersecurity solutions.",
    bulletPoints: [
      "End-to-end encryption",
      "Compliance management",
      "Threat detection",
      "Access control"
    ],
    keywords: ["information security", "risk management", "digital forensics", "vulnerability assessment", "security protocols"],
    icon: "🔒",
    businessImpact: [
      { metric: "Enhanced Protection", description: "Safeguard sensitive data and prevent cyber threats with enterprise-grade security protocols and monitoring" },
      { metric: "Regulatory Compliance", description: "Meet industry standards and regulations with automated compliance tracking and audit-ready documentation" },
      { metric: "Rapid Response", description: "Detect and neutralize security threats within minutes using AI-powered threat intelligence systems" },
      { metric: "Business Continuity", description: "Maintain uninterrupted operations with robust backup systems and disaster recovery protocols" }
    ]
  },
  {
    title: "Enterprise Web Development",
    description: "Build scalable, high-performance web applications tailored for enterprise needs.",
    bulletPoints: [
      "Scalable architecture",
      "Modern frameworks",
      "Performance optimization",
      "Security first approach"
    ],
    keywords: ["full-stack development", "responsive design", "cloud computing", "software engineering", "API development"],
    icon: "🌐",
    businessImpact: [
      { metric: "Optimized Performance", description: "Deliver lightning-fast loading speeds and seamless user interactions that keep visitors engaged longer" },
      { metric: "Higher Engagement", description: "Boost customer satisfaction and retention with intuitive interfaces and smooth user experiences" },
      { metric: "Reliable Uptime", description: "Ensure consistent website availability with robust architecture that minimizes downtime and outages" },
      { metric: "Reduced Maintenance", description: "Lower long-term operational costs with clean, scalable code that requires minimal ongoing maintenance" }
    ]
  },
  {
    title: "Fine-Tuned LLM Solutions",
    description: "Custom language models fine-tuned for your specific business domain and requirements.",
    bulletPoints: [
      "Domain-specific training",
      "Custom model deployment",
      "Performance optimization",
      "Continuous learning"
    ],
    keywords: ["neural language models", "text processing", "computational linguistics", "semantic understanding", "language modeling"],
    icon: "🧠",
    businessImpact: [
      { metric: "Domain Expertise", description: "Achieve specialized task performance that understands your industry's unique language and requirements" },
      { metric: "Content Efficiency", description: "Accelerate content creation by 10x while maintaining quality and brand consistency across all materials" },
      { metric: "Processing Speed", description: "Handle thousands of documents instantly with rapid text analysis and intelligent content generation" },
      { metric: "Resource Optimization", description: "Maximize team productivity by automating repetitive writing tasks and content management workflows" }
    ]
  },
  {
    title: "Full-Stack Generative AI Development",
    description: "End-to-end generative AI solutions from concept to deployment.",
    bulletPoints: [
      "Custom AI applications",
      "Multi-modal capabilities",
      "Scalable deployment",
      "User-friendly interfaces"
    ],
    keywords: ["synthetic media", "computer vision", "deep learning", "creative algorithms", "artificial creativity"],
    icon: "⚡",
    businessImpact: [
      { metric: "Accelerated Innovation", description: "Bring new products to market 3x faster with rapid AI-powered prototyping and development cycles" },
      { metric: "Creative Output", description: "Generate unlimited creative assets and content variations that enhance your marketing and product capabilities" },
      { metric: "Content Automation", description: "Streamline content generation across all channels with AI that maintains your brand voice and quality standards" },
      { metric: "Strong ROI", description: "Achieve measurable returns on investment with solutions that pay for themselves within 6-12 months" }
    ]
  },
  {
    title: "MCP-Powered AI Agents & Orchestration",
    description: "Advanced AI agent orchestration using Model Context Protocol for seamless integration.",
    bulletPoints: [
      "Agent coordination",
      "Protocol integration",
      "Workflow automation",
      "Scalable orchestration"
    ],
    keywords: ["distributed systems", "microservices", "event-driven architecture", "system integration", "process orchestration"],
    icon: "🔄",
    businessImpact: [
      { metric: "Enhanced Efficiency", description: "Optimize complex workflows by coordinating multiple AI agents that work together seamlessly" },
      { metric: "Agent Collaboration", description: "Enable seamless multi-agent coordination that handles sophisticated tasks requiring diverse expertise" },
      { metric: "Scalable Solutions", description: "Deploy flexible agent networks that grow with your business needs and handle increasing workloads" },
      { metric: "Reliable Workflows", description: "Ensure consistent process execution with robust orchestration that maintains quality across all operations" }
    ]
  },
  {
    title: "Next-Gen UI/UX Design",
    description: "Innovative user interface and experience design for modern applications.",
    bulletPoints: [
      "User-centered design",
      "Interactive prototypes",
      "Accessibility focus",
      "Modern aesthetics"
    ],
    keywords: ["human-computer interaction", "visual design", "usability testing", "interaction design", "design thinking"],
    icon: "🎨",
    businessImpact: [
      { metric: "User Engagement", description: "Create captivating interfaces that increase user interaction time and encourage repeat visits" },
      { metric: "Conversion Growth", description: "Boost business performance with designs optimized for higher conversion rates and customer acquisition" },
      { metric: "User Satisfaction", description: "Achieve high satisfaction scores through intuitive, accessible designs that delight every user" },
      { metric: "Support Efficiency", description: "Reduce customer support tickets with self-explanatory interfaces that minimize user confusion" }
    ]
  },
  {
    title: "Conversational Voice Agents",
    description: "Intelligent voice-powered assistants for enhanced customer engagement.",
    bulletPoints: [
      "Natural language processing",
      "Voice synthesis",
      "Multi-language support",
      "Context awareness"
    ],
    keywords: ["speech recognition", "voice synthesis", "audio processing", "conversational design", "speech technology"],
    icon: "🎤",
    businessImpact: [
      { metric: "24/7 Support", description: "Provide round-the-clock customer service availability that never misses a call or inquiry" },
      { metric: "Cost Efficiency", description: "Optimize support operations and achieve significant cost savings while maintaining service quality" },
      { metric: "Customer Satisfaction", description: "Deliver enhanced user experiences with natural, helpful voice interactions that feel truly human" },
      { metric: "Quick Resolution", description: "Handle customer queries faster with intelligent voice agents that provide instant, accurate responses" }
    ]
  },
  {
    title: "Workflow Automation",
    description: "Streamline your business processes with intelligent workflow automation.",
    bulletPoints: [
      "Process optimization",
      "Task automation",
      "Integration capabilities",
      "Performance monitoring"
    ],
    keywords: ["business process management", "digital transformation", "process mining", "robotic automation", "efficiency optimization"],
    icon: "⚙️",
    businessImpact: [
      { metric: "Process Automation", description: "Achieve operational excellence by reducing manual intervention and eliminating human error in routine tasks" },
      { metric: "Workflow Speed", description: "Accelerate completion times and boost overall efficiency with intelligent process optimization" },
      { metric: "Process Accuracy", description: "Ensure consistent, high-quality execution of automated processes that maintain professional standards" },
      { metric: "Operational Savings", description: "Maximize cost management through optimized resource utilization and reduced operational overhead" }
    ]
  }
];

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Map slug to title
  const routeMap: { [key: string]: string } = {
    "agentic-ai": "Agentic AI",
    "data-analytics-ml": "Data Analytics & Machine Learning",
    "data-security": "Data Protection & Security", 
    "enterprise-web-dev": "Enterprise Web Development",
    "fine-tuned-llm": "Fine-Tuned LLM Solutions",
    "generative-ai-development": "Full-Stack Generative AI Development",
    "mcp-ai-orchestration": "MCP-Powered AI Agents & Orchestration",
    "ui-ux-design": "Next-Gen UI/UX Design",
    "voice-agents": "Conversational Voice Agents",
    "workflow-automation": "Workflow Automation"
  };

  const solutionTitle = routeMap[slug];
  const solution = solutions.find(s => s.title === solutionTitle);

  if (!solution) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Service not found</h1>
          <Button 
            text="Back to Services"
            onClick={() => router.push('/services')}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }} />
      
      <div className="relative z-10 pt-20 md:pt-24 lg:pt-28">
        <div className="max-w-6xl mx-auto px-8 py-16">
          {/* Back button - left aligned */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </button>

          {/* Header section - center aligned */}
          <div className="mb-20 text-center">
            <div className="mb-8">
              <div className="text-6xl mb-6">{solution.icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {solution.title}
              </h1>
            </div>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              {solution.description}
            </p>
          </div>

          {/* Business Impact & ROI section - 2x2 grid layout */}
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Business Impact & ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solution.businessImpact.map((impact, idx) => (
                <div 
                  key={idx} 
                  className="relative bg-white/[0.02] rounded-3xl p-16 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[300px] flex flex-col justify-center"
                >
                  {/* Card glow effect */}
                  <div 
                    className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    {/* Main metric title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                      {impact.metric}
                    </h3>
                    
                    {/* Concise description */}
                    <p className="text-white/80 leading-relaxed text-base md:text-lg">
                      {impact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features section - wider cards */}
          <div className="mb-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {solution.bulletPoints.map((point, idx) => (
                <div 
                  key={idx} 
                  className="relative bg-white/[0.02] rounded-3xl p-12 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[140px] flex items-center justify-center"
                >
                  {/* Card glow effect */}
                  <div 
                    className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
                    }}
                  />
                  <p className="text-white/90 relative z-10 text-center text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords section - wider container */}
          <div className="mb-20 text-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
              {solution.keywords.map((keyword, idx) => (
                <span 
                  key={idx}
                  className="px-8 py-4 bg-white/[0.05] rounded-full text-white/70 text-base border border-white/[0.1] backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* CTA section - wider container */}
          <div className="relative bg-white/[0.02] rounded-3xl p-16 backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden text-center max-w-7xl mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            {/* Card glow effect */}
            <div 
              className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60%] z-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Business Today</h3>
              
              <div className="mb-10">
                <p className="text-xl text-white/80 leading-relaxed">
                  Ready to unlock the full potential of {solution.title.toLowerCase()}? Schedule a personalized consultation and discover how our proven solutions can drive measurable growth and efficiency for your business within the next 30 days.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  text="Schedule Free Consultation"
                  onClick={() => router.push('/contact')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}