export default function Disclaimer() {
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
            Disclaimer
          </h1>
          
          <div className="space-y-8 text-gray-300">
            {/* General Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">General Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                The information provided by CLUMOSS and its subsidiaries (MistrAI and NeuroForgeAI) on this website and through our services is for general informational and educational purposes only. All content is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site or our services.
              </p>
            </section>

            {/* Professional Services */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Professional Services</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our AI, machine learning, and technology solutions are provided based on current industry standards and best practices. However, technology evolves rapidly, and outcomes may vary depending on implementation, usage, and environmental factors. CLUMOSS does not guarantee specific results or performance metrics from our solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Clients are advised to conduct their own due diligence and consult with qualified professionals before making business decisions based on our recommendations or implementations.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p className="text-lg leading-relaxed mb-4">
                Under no circumstance shall CLUMOSS, MistrAI, NeuroForgeAI, or their directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, punitive, special, or consequential damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services or website.
              </p>
              <p className="text-lg leading-relaxed">
                Our total liability for any claims arising from or related to our services shall not exceed the amount paid by the client for the specific service in question.
              </p>
            </section>

            {/* Data and AI Systems */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">AI Systems and Data Processing</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our AI and machine learning systems are designed to provide intelligent solutions based on available data and algorithms. However, AI systems may produce unexpected results, and we cannot guarantee 100% accuracy in all scenarios. Users should implement appropriate validation and oversight mechanisms when deploying AI solutions in production environments.
              </p>
              <p className="text-lg leading-relaxed">
                Data processing results and AI-generated insights should be reviewed by qualified personnel before making critical business decisions.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Integration</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our solutions may integrate with third-party services, APIs, or platforms. CLUMOSS is not responsible for the availability, accuracy, or reliability of third-party services. Changes to third-party systems may affect the functionality of our solutions.
              </p>
              <p className="text-lg leading-relaxed">
                We recommend maintaining backup systems and contingency plans when relying on integrated solutions.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p className="text-lg leading-relaxed mb-4">
                All proprietary technologies, methodologies, and intellectual property developed by CLUMOSS remain our exclusive property. Client-specific customizations and data remain the property of the respective clients, subject to our service agreements.
              </p>
            </section>

            {/* Compliance and Regulations */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Compliance</h2>
              <p className="text-lg leading-relaxed mb-4">
                While we strive to ensure our solutions comply with applicable regulations and industry standards, clients are responsible for ensuring that their use of our services complies with all relevant laws, regulations, and industry requirements in their jurisdiction.
              </p>
              <p className="text-lg leading-relaxed">
                Regulatory requirements may change, and clients should regularly review compliance requirements for their specific use cases.
              </p>
            </section>

            {/* Updates and Changes */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Updates and Modifications</h2>
              <p className="text-lg leading-relaxed mb-4">
                CLUMOSS reserves the right to update, modify, or discontinue any aspect of our services or this disclaimer at any time without prior notice. Continued use of our services after such changes constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p className="text-lg leading-relaxed">
                For questions regarding this disclaimer or our services, please contact our legal and compliance team through our official communication channels. All formal notices should be submitted in writing through our designated contact procedures.
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
  );
}