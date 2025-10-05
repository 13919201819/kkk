'use client';

import styles from "./partner.module.css";
import Button from "@/components/ui/Button";
import { Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Partner() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section
      id="partner"
      className={`${styles.section} relative flex items-center justify-center`}
    >
      {/* Indigo Cosmos Background (same as About section) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {isEnglish ? (
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-snug">
            Accelerate your journey <br /> through CLUMOSS
          </h2>
        ) : (
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-snug">
            {t('partner.title')}
          </h2>
        )}
        
        <Button 
          text={isEnglish ? "Let's Partner Up" : t('partner.button')} 
          icon={<Handshake size={20} />} 
        />
      </div>
    </section>
  );
}