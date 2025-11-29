"use client";

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

interface Domain {
  title: string;
  description: string;
  button: string;
}

export default function ServicesPage() {
  const { t } = useTranslation();
  
  const domainsData = t('domains.items', { returnObjects: true }) as Domain[];
  const solutions = domainsData.map((domain, index) => ({
    ...domain,
    icon: domainIcons[index],
  }));

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
            {t('domains.title')}
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
                <div 
                  className="absolute bottom-[-40%] left-1/2 transform -translate-x-1/2 w-[140%] h-[60%] blur-[60px] z-0"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 80%)"
                  }}
                />
                
                <div className="text-4xl mb-4 relative z-10">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{sol.title}</h3>
                <p className="text-base text-white/80 mb-6 relative z-10">{sol.description}</p>
                {/* <button className="bg-white/10 text-white py-2 px-5 rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-white/20 relative z-10 mt-auto">
                  {sol.button}
                </button> */}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}