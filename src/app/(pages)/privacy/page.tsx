import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | CLUMOSS',
  description: 'Learn about our privacy practices and how we protect your data in compliance with international regulations including GDPR and CCPA.',
  openGraph: {
    title: 'Privacy Policy | CLUMOSS',
    description: 'Learn about our privacy practices and how we protect your data in compliance with international regulations.',
  }
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Commitment to Privacy</h2>
              <p className="text-lg leading-relaxed mb-4">
                At <strong>CLUMOSS</strong> and its subsidiaries (MistrAI and NeuroForgeAI), we value and respect your privacy. This Privacy Policy outlines how we collect, use, store, and protect your information when you engage with our services, products, websites, and applications.
              </p>
              <p className="text-lg leading-relaxed">
                Our practices are aligned with international data protection regulations, including the <strong>GDPR (Europe)</strong>, <strong>CCPA (California)</strong>, and other global privacy standards.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Personal Data</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Name, email address, phone number, billing information, or other identifiers provided when registering or using our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Usage Data</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Device information, IP addresses, browser type, access times, and pages viewed to improve our services and ensure security.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">AI Interaction Data</h3>
                  <p className="text-lg leading-relaxed">
                    Prompts, inputs, and outputs generated through our AI and LLM-powered services. This data is collected only to improve quality and ensure compliance with our service standards.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use the collected data to deliver exceptional AI-driven solutions and maintain the highest standards of service. Specifically, we use your information for:
              </p>
              <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                <li>Delivering and improving our AI-driven services and solutions</li>
                <li>Personalizing user experiences and optimizing system performance</li>
                <li>Ensuring system security, fraud prevention, and compliance with applicable laws</li>
                <li>Providing customer support and service updates</li>
                <li>Conducting research and development to enhance our AI capabilities</li>
              </ul>
            </section>

            {/* Data Sharing & Disclosure */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing & Disclosure</h2>
              <p className="text-lg leading-relaxed mb-4">
                <strong>We do not sell or rent your personal data to third parties.</strong> Your privacy is paramount to our business operations and ethical standards.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Data may be shared with trusted service providers, strictly for operational, security, or compliance purposes under contractual obligations to protect your information.
              </p>
              <p className="text-lg leading-relaxed">
                AI models may process your inputs to provide services, but data is not shared for advertising or unrelated commercial activities without explicit consent.
              </p>
            </section>

            {/* Data Security */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security Measures</h2>
              <p className="text-lg leading-relaxed mb-4">
                We implement <strong>industry-standard encryption, access controls, and continuous monitoring</strong> to safeguard your information. Our security infrastructure includes advanced threat detection, regular security audits, and compliance with international security frameworks.
              </p>
              <p className="text-lg leading-relaxed">
                While we employ comprehensive security measures to protect your data, no system is completely immune to risks. We continuously update our security protocols to address emerging threats and maintain the highest level of data protection.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">International Data Transfers</h2>
              <p className="text-lg leading-relaxed mb-4">
                Your data may be processed and stored in regions outside your country of residence to provide our global AI services. We ensure all international transfers comply with <strong>GDPR, CCPA, and other applicable regulations</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Appropriate safeguards, including standard contractual clauses and adequacy decisions, are implemented to protect your data during international transfers.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-lg leading-relaxed mb-4">
                Depending on your jurisdiction, you may have comprehensive rights regarding your personal data:
              </p>
              <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                <li><strong>Access Rights:</strong> Request access to and copies of your personal data</li>
                <li><strong>Correction Rights:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion Rights:</strong> Request deletion of your personal data under certain circumstances</li>
                <li><strong>Processing Restrictions:</strong> Object to or restrict certain data processing activities</li>
                <li><strong>Data Portability:</strong> Request transfer of your data in a machine-readable format</li>
                <li><strong>Consent Withdrawal:</strong> Withdraw consent for data processing at any time</li>
              </ul>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies & Tracking Technologies</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our website and services use cookies and similar technologies to enhance functionality, improve performance, and personalize content. These technologies help us understand user behavior and optimize our AI solutions.
              </p>
              <p className="text-lg leading-relaxed">
                You can manage cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of our services.
              </p>
            </section>

            {/* AI and Machine Learning Data Processing */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">AI and Machine Learning Data Processing</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our AI systems process data to provide intelligent solutions, predictive analytics, and automated decision-making capabilities. We implement privacy-by-design principles in our AI development processes.
              </p>
              <p className="text-lg leading-relaxed">
                Data used for training and improving our AI models is anonymized and aggregated where possible. Individual user data is protected through advanced privacy-preserving techniques.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Policy Updates and Changes</h2>
              <p className="text-lg leading-relaxed mb-4">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or business operations. Material changes will be communicated through appropriate channels.
              </p>
              <p className="text-lg leading-relaxed">
                Continued use of our services after policy updates constitutes acceptance of the revised terms. We encourage regular review of this policy to stay informed about our privacy practices.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you have questions about this Privacy Policy, wish to exercise your data rights, or need assistance with privacy-related matters, please contact our dedicated privacy team.
              </p>
              <p className="text-lg leading-relaxed">
                For formal privacy requests or concerns, please use our official communication channels. We are committed to responding promptly and addressing all privacy-related inquiries with the utmost care and attention.
              </p>
            </section>

            {/* Compliance Statement */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Compliance</h2>
              <p className="text-lg leading-relaxed">
                CLUMOSS maintains compliance with international privacy regulations including GDPR (EU), CCPA (California), PIPEDA (Canada), and applicable Indian data protection laws. Our privacy practices are regularly audited and updated to meet evolving regulatory requirements.
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
                CLUMOSS - India&apos;s Leading AI Technology Conglomerate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}