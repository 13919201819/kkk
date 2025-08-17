// import styles from './about.module.css';

// export default function About() {
//   return (
//     <section id="about" className={styles.section}>
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
//         <div className={styles.content}>
//           <p className="text-lg">
//             CLUMOSS is a pioneering organization dedicated to transforming industries through innovative AI-driven SaaS solutions. We bring together clusters of multi-organizations to provide support and services that empower businesses to thrive in a digital world.
//           </p>
//           <p className="text-lg mt-4">
//             Our mission is to deliver cutting-edge technology that drives efficiency, scalability, and growth for our clients across various sectors.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import styles from './about.module.css';

export default function About() {
  return (
    <section id="about" className={`${styles.section} relative`}>
      {/* Indigo Cosmos Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Us
        </h2>
        <div className={styles.content}>
          <p className="text-lg">
            CLUMOSS is a pioneering organization dedicated to transforming industries
            through innovative AI-driven SaaS solutions. We bring together clusters of
            multi-organizations to provide support and services that empower businesses
            to thrive in a digital world.
          </p>
          <p className="text-lg mt-4">
            Our mission is to deliver cutting-edge technology that drives efficiency,
            scalability, and growth for our clients across various sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
