import ServiceCard from './ServiceCard';
import { services } from './data';
import styles from './services.module.css';

export default function Services() {
  return (
    <section className={`${styles.services} py-20 px-6`}>
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}