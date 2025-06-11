import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className={styles.content}>
          <p className="text-lg">
            CLUMOSS is a pioneering organization dedicated to transforming industries through innovative AI-driven SaaS solutions. We bring together clusters of multi-organizations to provide support and services that empower businesses to thrive in a digital world.
          </p>
          <p className="text-lg mt-4">
            Our mission is to deliver cutting-edge technology that drives efficiency, scalability, and growth for our clients across various sectors.
          </p>
        </div>
      </div>
    </section>
  );
}