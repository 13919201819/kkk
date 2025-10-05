'use client';
import { useTranslation } from 'react-i18next';

interface SectionContent {
  title: string;
  content: (string | { list: string[] })[];
}

export default function TermsConditionsPage() {
  const { t } = useTranslation();

  const renderSection = (sectionKey: string) => {
    const section = t(`terms.sections.${sectionKey}`, { returnObjects: true }) as SectionContent;
    
    return (
      <section key={sectionKey} className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
        <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
        {Array.isArray(section.content) && section.content.map((item, idx) => {
          if (typeof item === 'string') {
            return <p key={idx} className="text-lg leading-relaxed mb-4">{item}</p>;
          } else if ('list' in item && item.list) {
            return (
              <ul key={idx} className="space-y-2 text-lg leading-relaxed list-disc list-inside mb-4">
                {item.list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            );
          }
          return null;
        })}
      </section>
    );
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000" }} />
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">{t('terms.title')}</h1>
          <div className="space-y-8 text-gray-300">
            {renderSection('welcomeToClumoss')}
            {renderSection('useOfServices')}
            {renderSection('intellectualPropertyRights')}
            {renderSection('userResponsibilities')}
            {renderSection('privacyAndDataProtection')}
            {renderSection('limitationOfLiability')}
            {renderSection('thirdPartyServicesAndIntegrations')}
            {renderSection('serviceAvailabilityAndPerformance')}
            {renderSection('termination')}
            {renderSection('governingLawAndJurisdiction')}
            {renderSection('changesToTerms')}
            {renderSection('contactUs')}
            
            <div className="text-center pt-8 border-t border-gray-700/50">
              <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-sm text-gray-400 mt-2">{t('terms.sections.lastUpdated.content')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}