'use client';

import { useTranslation } from 'react-i18next';
import styles from './about.module.css';

export default function About() {
  const { t } = useTranslation();
  const subsidiaries = t('about.innovationEcosystem.subsidiaries', { returnObjects: true }) as Array<{
    name: string;
    description: string;
    button?: string;
    slogan?: string;
  }>;

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
            {t('about.title')}
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
              {t('about.description.0')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('about.description.1')}
            </p>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                {t('about.innovationEcosystem.title')}
              </h2>
              
              <div className={styles.subsidiaryGrid}>
                <div className={styles.subsidiaryCard}>
                  <h3 className={styles.subsidiaryTitle}>{subsidiaries[0]?.name}</h3>
                  <p className={styles.subsidiaryDescription}>
                    {subsidiaries[0]?.description}
                  </p>
                  <button className={styles.subsidiaryLearnMore}>
                    {subsidiaries[0]?.button}
                  </button>
                </div>

                <div className={styles.subsidiaryCard}>
                  <h3 className={styles.subsidiaryTitle}>{subsidiaries[1]?.name}</h3>
                  <p className={styles.subsidiaryDescription}>
                    {subsidiaries[1]?.description}
                  </p>
                  <div className={styles.subsidiarySlogan}>
                    &quot;{subsidiaries[1]?.slogan}&quot;
                  </div>
                  <button className={styles.subsidiaryLearnMore}>
                    {subsidiaries[1]?.button}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className={styles.subsidiaryCard}>
                <h3 className={styles.subsidiaryTitle}>
                  {t('about.approach.title')}
                </h3>
                <p className={styles.subsidiaryDescription}>
                  {t('about.approach.description')}
                </p>
              </div>
            </div>

            <p className="text-lg mt-8 leading-relaxed text-center">
              {t('about.closing')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}