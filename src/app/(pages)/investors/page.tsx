'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function Investors() {
  const router = useRouter();

  return (
    <section 
      id="investors"
      // Layout & Spacing:
      // min-h-screen: Ensures full height
      // pt-32 md:pt-40: Clears the fixed header (more space on desktop)
      // pb-12: Adds breathing room at the bottom
      // px-4: Prevents content touching edges on mobile
      className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-12 px-4 sm:px-6 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(37, 99, 235, 0.15), transparent 70%), #000000",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // Card Styling:
          // p-6: Compact padding for mobile
          // md:p-14: Luxurious padding for desktop
          className="glassmorphism p-6 sm:p-10 md:p-14 rounded-3xl border border-white/10 flex flex-col items-center text-center backdrop-blur-xl bg-white/5"
        >
          {/* Icon Wrapper */}
          <div className="bg-blue-500/20 p-4 md:p-5 rounded-full mb-6 md:mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <TrendingUp className="text-blue-400 w-10 h-10 md:w-12 md:h-12" />
          </div>

          {/* Heading - Responsive Text Sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Invest in the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Future of Intelligence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-xl">
            CLUMOSS is building the infrastructure for the next generation of AI, Defense, and FinTech solutions. Join us as we scale from concept to reality.
          </p>

          {/* Action Area */}
          <div className="flex flex-col items-center w-full gap-4">
            <Button 
              text="Request Pitch Deck" 
              icon={<ArrowRight size={20} />}
              onClick={() => router.push('/contact')}
              // Button spans full width on mobile, fixed width on desktop
              className="!w-full sm:!w-[280px]" 
            />
            
            <p className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-4 px-4">
              Serious inquiries only. Institutional and Angel investors welcome.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}