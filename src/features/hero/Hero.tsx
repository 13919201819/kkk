'use client';
import Galaxy from '@/features/particles/Galaxy';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaPhone } from "react-icons/fa"; 
import SplashCursor from '@/features/cursor/SplashCursor';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  
  // Check if current language is English
  const isEnglish = i18n.language === 'en';

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Galaxy background */}
      <SplashCursor />
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.0}
          glowIntensity={0.1}
          saturation={0}
          hueShift={240}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

          {isEnglish ? (
            // Original English version with gradient styling
            <h2 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              <span className="gradient-text">CLU</span>STERS OF <span className="gradient-text">M</span>ULTI-
              <span className="gradient-text">O</span>RGANIZATIONS<br />
              FOR <span className="gradient-text">S</span>UPPORT & <span className="gradient-text">S</span>ERVICES
            </h2>
          ) : (
            // Translated version for other languages
            <h2 className="text-3xl md:text-5xl font-bold leading-snug tracking-wide">
              {t('hero.title')}
            </h2>
          )}

          {isEnglish ? (
            // Original English description
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              Empowering industries with next-gen AI SaaS solutions<br />
              through scalable platforms, innovation, and support.
            </p>
          ) : (
            // Translated description
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>
          )}

        
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          {isEnglish ? (
            <>
              <Button icon={<FaArrowRight />} text="Explore Products" />
              <Button icon={<FaPhone />} text="Contact Us" />
            </>
          ) : (
            <>
              <Button icon={<FaArrowRight />} text={t('hero.buttons.0.text')} />
              <Button icon={<FaPhone />} text={t('hero.buttons.1.text')} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;