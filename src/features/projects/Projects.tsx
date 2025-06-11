import ProjectCard from './ProjectCard';
import { projects } from './data';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <section className={`${styles.projects} py-20 px-6`}>
      <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}