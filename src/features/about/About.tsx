import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.section} relative`}>
      {/* Indigo Cosmos Background */}
      <div className="absolute inset-0 z-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }} />

      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex items-center justify-center">
        <div className={styles.content}>
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            About CLUMOSS
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              CLUMOSS is India&apos;s leading technology conglomerate specializing in advanced artificial intelligence solutions. We architect and deploy comprehensive AI ecosystems that transform how businesses operate, innovate, and scale in the digital economy.
            </p>

            <p className="text-lg leading-relaxed">
              Our expertise spans the full spectrum of intelligent technologies—from machine learning and deep learning frameworks to cutting-edge generative AI, voice recognition systems, and autonomous agent orchestration. We combine these capabilities with enterprise-grade security and cloud-native architecture to deliver solutions that are both powerful and practical.
            </p>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Innovation Ecosystem</h2>
              
              <div className={styles.subsidiaryGrid}>
                <div className={styles.subsidiaryCard}>
                  <h3 className={styles.subsidiaryTitle}>MistrAI</h3>
                  <p className={styles.subsidiaryDescription}>
                    Our product development arm focuses on creating sophisticated SaaS platforms and AI-powered applications. MistrAI transforms complex business challenges into intuitive, scalable solutions that drive measurable results across industries.
                  </p>
                  <button className={styles.subsidiaryLearnMore}>Learn More</button>
                </div>

                <div className={styles.subsidiaryCard}>
                  <h3 className={styles.subsidiaryTitle}>NeuroForgeAI</h3>
                  <p className={styles.subsidiaryDescription}>
                    Dedicated to physical AI implementation, NeuroForgeAI develops the intelligent backbone for robotics, autonomous systems, and IoT ecosystems. We engineer the cognitive infrastructure that brings intelligence to the physical world.
                  </p>
                  <div className={styles.subsidiarySlogan}>
                    &quot;We deliver what Physical AI needs&quot;
                  </div>
                  <button className={styles.subsidiaryLearnMore}>Learn More</button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className={styles.subsidiaryCard}>
                <h3 className={styles.subsidiaryTitle}>Our Approach</h3>
                <p className={styles.subsidiaryDescription}>
                  Every project at CLUMOSS begins with understanding your unique challenges and objectives. We design custom AI solutions that integrate seamlessly with your existing infrastructure while ensuring scalability, reliability, and profitability. Our cloud-native approach guarantees that your solutions grow with your business, backed by robust security frameworks and continuous optimization.
                </p>
              </div>
            </div>

            <p className="text-lg mt-8 leading-relaxed text-center">
              From concept to deployment, CLUMOSS delivers intelligent solutions that don&apos;t just meet today&apos;s requirements—they anticipate tomorrow&apos;s opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}