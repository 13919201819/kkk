'use client';

import { useTranslation } from 'react-i18next';

export default function Disclaimer() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Indigo Cosmos Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            {t('disclaimer.title')}
          </h1>
          
          <div className="space-y-8 text-gray-300">
            {/* General Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.generalInformation.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.generalInformation.content')}
              </p>
            </section>

            {/* Professional Services */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.professionalServices.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.professionalServices.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('disclaimer.sections.professionalServices.content.1')}
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.limitationOfLiability.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.limitationOfLiability.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('disclaimer.sections.limitationOfLiability.content.1')}
              </p>
            </section>

            {/* Data and AI Systems */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.aiSystemsAndDataProcessing.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.aiSystemsAndDataProcessing.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('disclaimer.sections.aiSystemsAndDataProcessing.content.1')}
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.thirdPartyIntegration.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.thirdPartyIntegration.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('disclaimer.sections.thirdPartyIntegration.content.1')}
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.intellectualProperty.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.intellectualProperty.content')}
              </p>
            </section>

            {/* Compliance and Regulations */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.regulatoryCompliance.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.regulatoryCompliance.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('disclaimer.sections.regulatoryCompliance.content.1')}
              </p>
            </section>

            {/* Updates and Changes */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.updatesAndModifications.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('disclaimer.sections.updatesAndModifications.content')}
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('disclaimer.sections.contactInformation.title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('disclaimer.sections.contactInformation.content')}
              </p>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-700/50">
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {t('disclaimer.sections.lastUpdated.content')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}