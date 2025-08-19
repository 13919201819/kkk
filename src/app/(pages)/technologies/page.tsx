// import Domains from '../../../features/domains/Domains';


// // Default export to make this file a module
// export default function TechnologiesPage() {
//   return (
//     <div className="min-h-screen">
//       <Domains />
//     </div>
//   );
// }

// import Services from '@/features/solutions/Solutions';

// // Default export to make this file a module
// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen">
//       <Services />
//     </div>
//   );
// }


// import Services from '@/features/solutions/Solutions';

// // Default export to make this file a module
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
//         <Services />
//       </div>
//     </div>
//   );
// }



"use client";

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

const solutions = [

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
            Industries We Serve
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white/[0.02] rounded-3xl p-8 min-h-[450px] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.08] overflow-hidden flex flex-col justify-start text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Card glow effect */}
                <div 
                  className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
                  }}
                />
                
                <div className="text-4xl mb-4 relative z-10">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{sol.title}</h3>
                <p className="text-base text-white/80 mb-6 relative z-10">{sol.description}</p>
                {/* <ul className="list-none p-0 m-0 mb-6 flex-grow relative z-10">
      
                </ul> */}
                <button className="bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}