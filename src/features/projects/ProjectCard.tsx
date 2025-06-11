// // import { motion } from 'framer-motion';
// // import { Project } from '@/types';

// // interface ProjectCardProps {
// //   project: Project;
// // }

// // export default function ProjectCard({ project }: ProjectCardProps) {
// //   return (
// //     <motion.div
// //       className="glassmorphism p-6 rounded-lg"
// //       whileHover={{ scale: 1.05 }}
// //       transition={{ duration: 0.3 }}
// //     >
// //       <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
// //       <p className="text-sm mb-4">{project.description}</p>
// //       <a href="/projects" className="text-blue-400 hover:underline">
// //         Learn More
// //       </a>
// //     </motion.div>
// //   );
// // }


// import { motion } from 'framer-motion'; // Already using named import
// import { Project } from '@/types';

// interface ProjectCardProps {
//   project: Project;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <motion.div
//       className="glassmorphism p-6 rounded-lg"
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//       <p className="text-sm mb-4">{project.description}</p>
//       <a href="/projects" className="text-blue-400 hover:underline">
//         Learn More
//       </a>
//     </motion.div>
//   );
// }



'use client';

import { motion } from 'framer-motion'; // Ensure named import is used
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="glassmorphism p-6 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-sm mb-4">{project.description}</p>
      <a href="/projects" className="text-blue-400 hover:underline">
        Learn More
      </a>
    </motion.div>
  );
}