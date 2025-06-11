import { motion } from 'framer-motion';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      className="glassmorphism p-6 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      <p className="text-sm mb-4">{service.description}</p>
      <a href="/services" className="text-blue-400 hover:underline">
        Learn More
      </a>
    </motion.div>
  );
}