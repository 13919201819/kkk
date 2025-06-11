'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock job data (replace with real data from an API or CMS)
const jobs = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    description: 'Join our team to develop cutting-edge AI solutions for various industries including Defense, E-commerce, and Medical.',
    location: 'Remote',
    slug: 'senior-ai-engineer',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    description: 'Design next-gen interfaces for our SaaS products with a focus on user experience and innovation.',
    location: 'New York, USA',
    slug: 'ui-ux-designer',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    description: 'Build scalable web applications for our diverse portfolio of projects across multiple sectors.',
    location: 'Bangalore, India',
    slug: 'full-stack-developer',
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    description: 'Lead digital marketing campaigns to promote our AI-driven solutions and SaaS products.',
    location: 'London, UK',
    slug: 'digital-marketing-specialist',
  },
];

// Default export to make this file a module
export default function Careers() {
  return (
    <section className="py-20 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Careers at CLUMOSS</h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Join our team to work on transformative AI and SaaS solutions across industries like Sales, Defense, Fashion, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            className="glassmorphism p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-sm mb-2 text-gray-300">{job.description}</p>
            <p className="text-sm mb-4 text-gray-400">Location: {job.location}</p>
            <Link href={`/careers/${job.slug}`} className="text-blue-400 hover:underline">
              Apply Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}