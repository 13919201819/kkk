// import ProjectCard from './ProjectCard';
// import { projects } from './data';
// import styles from './projects.module.css';

// export default function Projects() {
//   return (
//     <section className={`${styles.projects} py-20 px-6`}>
//       <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }



// import ProjectCard from './ProjectCard';
// import { projects } from './data';
// import styles from './projects.module.css';

// export default function Projects() {
//   return (
//     <section className={`${styles.projects} py-20 px-6`}>
//       <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }'


"use client";

import styles from "./projects.module.css";

export default function Project() {
  return (
    <section className={styles.projectWrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our Premium Projects</h2>
        <p className={styles.description}>
          Explore the futuristic designs we’ve been working on. Each project
          blends innovation with premium aesthetics.
        </p>
      </div>

      {/* 🔥 Scroll timeline integrated here */}
     
    </section>
  );
}
