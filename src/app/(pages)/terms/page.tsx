import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | CLUMOSS',
  description: 'Terms and conditions governing the use of CLUMOSS services and products. Learn about your rights and obligations when using our AI solutions.',
  openGraph: {
    title: 'Terms and Conditions | CLUMOSS',
    description: 'Terms and conditions governing the use of CLUMOSS services and products.',
  }
}

export default function TermsConditionsPage() {
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
            Terms & Conditions
          </h1>
          
          <div className="space-y-8 text-gray-300">
            {/* Introduction */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">Welcome to CLUMOSS</h2>
              <p className="text-lg leading-relaxed mb-4">
                By accessing, browsing, or using our website, products, and services provided by CLUMOSS and its subsidiaries (MistrAI and NeuroForgeAI), you agree to be bound by the following Terms and Conditions.
              </p>
              <p className="text-lg leading-relaxed">
                Please read them carefully. If you do not agree with these terms, kindly discontinue use of our services immediately.
              </p>
            </section>

            {/* Use of Services */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Use of Services</h2>
              <p className="text-lg leading-relaxed mb-4">
                You agree to use our AI-powered services, machine learning solutions, and technology platforms only for lawful purposes and in compliance with all applicable international, federal, state, and local laws.
              </p>
              <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside mb-4">
                <li>Unauthorized use of our services, including but not limited to hacking, reverse engineering, or misusing data is strictly prohibited</li>
                <li>You may not exploit or misuse our intellectual property, trademarks, or proprietary AI algorithms without prior written consent</li>
                <li>Commercial use of our services must comply with the specific terms outlined in your service agreement</li>
              </ul>
            </section>

            {/* Intellectual Property Rights */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
              <p className="text-lg leading-relaxed mb-4">
                All content, software, AI models, algorithms, trademarks, and materials provided on our platform are owned by CLUMOSS, its subsidiaries, or licensed third-party providers.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                You are granted a limited, non-exclusive, non-transferable license to use the services for personal or authorized business use, subject to these Terms and any additional service agreements.
              </p>
              <p className="text-lg leading-relaxed">
                Our proprietary AI technologies, machine learning models, and data processing methodologies remain the exclusive intellectual property of CLUMOSS.
              </p>
            </section>

            {/* User Responsibilities */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-lg leading-relaxed mb-4">
                As a user of CLUMOSS services, you bear certain responsibilities to ensure proper and lawful use of our AI solutions:
              </p>
              <ul className="space-y-2 text-lg leading-relaxed list-disc list-inside">
                <li>You are responsible for maintaining the confidentiality and security of your account credentials</li>
                <li>Any activities performed under your account will be considered your responsibility</li>
                <li>You must not upload or distribute harmful content, including malware, offensive material, or copyrighted works without proper authorization</li>
                <li>You agree to use our AI services responsibly and ethically, avoiding any applications that could cause harm or violate applicable laws</li>
                <li>You must comply with data protection regulations when processing personal or sensitive data through our services</li>
              </ul>
            </section>

            {/* Privacy & Data Protection */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Privacy & Data Protection</h2>
              <p className="text-lg leading-relaxed mb-4">
                Your privacy and data security are fundamental to our operations. We handle your data in accordance with our comprehensive Privacy Policy and applicable data protection regulations.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                By using our services, you consent to the collection, processing, and storage of your information as outlined in our Privacy Policy, which complies with GDPR, CCPA, and other relevant privacy laws.
              </p>
              <p className="text-lg leading-relaxed">
                We implement advanced security measures and privacy-by-design principles in all our AI solutions to protect your data throughout the processing lifecycle.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-lg leading-relaxed mb-4">
                We make every effort to ensure accuracy, reliability, and availability of our AI services and technology solutions, but we do not guarantee uninterrupted or error-free operation.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                CLUMOSS, MistrAI, NeuroForgeAI, and their affiliates will not be held liable for direct, indirect, incidental, consequential, or punitive damages arising from the use of our services.
              </p>
              <p className="text-lg leading-relaxed">
                Our total liability for any claims shall not exceed the amount paid by you for the specific service in question during the preceding twelve months.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Services & Integrations</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our AI solutions may integrate with or contain links to third-party websites, APIs, cloud services, or external platforms to enhance functionality and provide comprehensive solutions.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We are not responsible for the content, policies, practices, availability, or security of such external platforms. Your interactions with third-party services are governed by their respective terms and conditions.
              </p>
              <p className="text-lg leading-relaxed">
                We recommend reviewing the terms and privacy policies of any third-party services you access through our platform.
              </p>
            </section>

            {/* Service Availability & Performance */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Service Availability & Performance</h2>
              <p className="text-lg leading-relaxed mb-4">
                While we strive to maintain high availability and performance standards for our AI services, we do not guarantee 100% uptime or specific performance metrics unless explicitly stated in your service level agreement.
              </p>
              <p className="text-lg leading-relaxed">
                Scheduled maintenance, updates, and unforeseen technical issues may temporarily affect service availability. We will make reasonable efforts to minimize disruptions and provide advance notice when possible.
              </p>
            </section>

            {/* Termination */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
              <p className="text-lg leading-relaxed mb-4">
                We reserve the right to suspend or terminate access to our services at any time, with or without prior notice, if these Terms are violated or if we determine that continued service provision is not feasible.
              </p>
              <p className="text-lg leading-relaxed">
                Upon termination, your access to our services will cease, and you must discontinue all use of our proprietary technologies and return or delete any confidential information in your possession.
              </p>
            </section>

            {/* Governing Law */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Governing Law & Jurisdiction</h2>
              <p className="text-lg leading-relaxed mb-4">
                These Terms will be governed and interpreted in accordance with the laws of India and applicable international regulations governing AI and technology services.
              </p>
              <p className="text-lg leading-relaxed">
                Any disputes arising from these Terms or the use of our services shall be resolved under the exclusive jurisdiction of courts located in India, specifically in the jurisdiction where CLUMOSS maintains its principal operations.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-lg leading-relaxed mb-4">
                We reserve the right to update, modify, or revise these Terms & Conditions at any time to reflect changes in our services, legal requirements, or business practices.
              </p>
              <p className="text-lg leading-relaxed">
                Continued use of our services after changes are made signifies your acceptance of the updated Terms. We will provide reasonable notice of material changes through appropriate communication channels.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-900/40 p-8 rounded-lg border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you have any questions regarding these Terms & Conditions, need clarification about our services, or require legal assistance, please contact our legal and compliance team.
              </p>
              <p className="text-lg leading-relaxed">
                For formal legal notices or contract-related inquiries, please use our official communication channels. We are committed to addressing all inquiries promptly and professionally.
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