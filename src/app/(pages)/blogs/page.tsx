// 'use client';

// import { motion } from 'framer-motion'; // Already using named import
// import Link from 'next/link';

// // Mock blog data (you can replace this with real data from an API or CMS)
// const blogs = [
//   {
//     id: 1,
//     title: 'The Future of AI in E-commerce',
//     excerpt: 'Discover how AI is transforming the e-commerce industry with personalized recommendations and efficient supply chain management.',
//     slug: 'future-of-ai-in-ecommerce',
//   },
//   {
//     id: 2,
//     title: 'Innovations in Defense Technology',
//     excerpt: 'Learn about CLUMOSS’s Agrani project and how it’s revolutionizing defense with real-time suspicious activity detection.',
//     slug: 'innovations-in-defense-technology',
//   },
//   {
//     id: 3,
//     title: 'How Money Works: Insights from Top Founders',
//     excerpt: 'A recap of our latest podcast episode featuring world-class founders sharing their journey and financial wisdom.',
//     slug: 'how-money-works-insights',
//   },
//   {
//     id: 4,
//     title: 'AI-Driven Fashion: The HighClass Story',
//     excerpt: 'Explore how HighClass is redefining men’s luxury fashion with AI-generated designs and 3D mockups.',
//     slug: 'ai-driven-fashion-highclass',
//   },
// ];

// export default function Blogs() {
//   return (
//     <section className="py-20 px-6 min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-12">CLUMOSS Blogs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {blogs.map((blog) => (
//           <motion.div
//             key={blog.id}
//             className="glassmorphism p-6 rounded-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//             <p className="text-sm mb-4 text-gray-300">{blog.excerpt}</p>
//             <Link href={`/blogs/${blog.slug}`} className="text-blue-400 hover:underline">
//               Read More
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { PenTool, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Blogs() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
       {/* Optional: Add your Cosmos background here if you want it consistent with Partner page */}
      
      <div className="max-w-2xl w-full mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">CLUMOSS Blogs</h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism p-10 rounded-2xl flex flex-col items-center text-center border border-white/10 bg-white/5 backdrop-blur-lg"
        >
          <div className="bg-indigo-500/20 p-4 rounded-full mb-6">
            <PenTool size={48} className="text-indigo-400" />
          </div>
          
          <h2 className="text-2xl font-semibold text-white mb-3">
            Content is Brewing
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Our experts are currently writing deep dives into AI, Defense Tech, and FinTech. Check back soon for industry-shaping insights.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}