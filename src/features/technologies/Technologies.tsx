import { technologies } from './data';
import styles from './technologies.module.css';

export default function Technologies() {
  return (
    <section id="technologies" className={styles.section}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techItem}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}