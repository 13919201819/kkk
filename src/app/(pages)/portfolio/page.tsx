'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock portfolio data (replace with real data from an API or CMS)
const portfolioItems = [
  {
    id: 1,
    title: 'Mistr AI',
    description: 'Developed cutting-edge AI-driven solutions for automation and SaaS products across multiple industries.',
    slug: 'mistr-ai',
  },
  {
    id: 2,
    title: 'HighClass',
    description: 'Launched the world’s first AI-generated luxurious men’s clothing brand with customizable designs and 3D mockups.',
    slug: 'highclass',
  },
  {
    id: 3,
    title: 'Agrani',
    description: 'Created next-gen solutions for the defense sector, enabling real-time suspicious activity detection using AI and Computer Vision.',
    slug: 'agrani',
  },
  {
    id: 4,
    title: 'Peveleon',
    description: 'Simplified studying abroad decisions with AI-driven, user-specific data and affordable solutions.',
    slug: 'peveleon',
  },
  {
    id: 5,
    title: 'Automata AI',
    description: 'Built an AI-driven SaaS product for supply chain management and network marketing, optimizing sales and commissions.',
    slug: 'automata-ai',
  },
  {
    id: 6,
    title: 'How Money Works',
    description: 'Hosted podcasts with world-class founders and investors, sharing real-world financial insights.',
    slug: 'how-money-works',
  },
];

// Default export to make this file a module
export default function Portfolio() {
  return (
    <section className="py-20 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
      <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        Explore the transformative projects and solutions we’ve delivered across industries like Defense, Fashion, Education, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="glassmorphism p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-sm mb-4 text-gray-300">{item.description}</p>
            <Link href={`/portfolio/${item.slug}`} className="text-blue-400 hover:underline">
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}