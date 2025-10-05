'use client';

import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
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
            {t('privacy.title')}
          </h1>
          
          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.ourCommitmentToPrivacy.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.ourCommitmentToPrivacy.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.ourCommitmentToPrivacy.content.1')}
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.informationWeCollect.title')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {t('privacy.sections.informationWeCollect.personalData.title')}
                  </h3>
                  <p className="text-lg leading-relaxed mb-4">
                    {t('privacy.sections.informationWeCollect.personalData.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {t('privacy.sections.informationWeCollect.usageData.title')}
                  </h3>
                  <p className="text-lg leading-relaxed mb-4">
                    {t('privacy.sections.informationWeCollect.usageData.content')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {t('privacy.sections.informationWeCollect.aiInteractionData.title')}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {t('privacy.sections.informationWeCollect.aiInteractionData.content')}
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.howWeUseYourInformation.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.howWeUseYourInformation.content.0')}
              </p>
              <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                {(t('privacy.sections.howWeUseYourInformation.content.1.list', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Data Sharing & Disclosure */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.dataSharingAndDisclosure.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.dataSharingAndDisclosure.content.0')}
              </p>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.dataSharingAndDisclosure.content.1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.dataSharingAndDisclosure.content.2')}
              </p>
            </section>

            {/* Data Security */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.dataSecurityMeasures.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.dataSecurityMeasures.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.dataSecurityMeasures.content.1')}
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.internationalDataTransfers.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.internationalDataTransfers.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.internationalDataTransfers.content.1')}
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.yourPrivacyRights.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.yourPrivacyRights.content.0')}
              </p>
              <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                {(t('privacy.sections.yourPrivacyRights.content.1.list', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.cookiesAndTrackingTechnologies.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.cookiesAndTrackingTechnologies.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.cookiesAndTrackingTechnologies.content.1')}
              </p>
            </section>

            {/* AI and Machine Learning Data Processing */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.aiAndMachineLearningDataProcessing.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.aiAndMachineLearningDataProcessing.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.aiAndMachineLearningDataProcessing.content.1')}
              </p>
            </section>

            {/* Policy Updates */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.policyUpdatesAndChanges.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.policyUpdatesAndChanges.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.policyUpdatesAndChanges.content.1')}
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.contactInformation.title')}
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                {t('privacy.sections.contactInformation.content.0')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.contactInformation.content.1')}
              </p>
            </section>

            {/* Compliance Statement */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {t('privacy.sections.regulatoryCompliance.title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('privacy.sections.regulatoryCompliance.content')}
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
                {t('privacy.sections.lastUpdated.content')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}