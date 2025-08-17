// import Link from 'next/link';
// import styles from './footer.module.css';

// const footerSections = {
//   Company: [
//     { name: 'About Us', href: '/about' },
//     { name: 'Careers', href: '/careers' },
//     { name: 'Portfolio', href: '/portfolio' },
//     { name: 'Blogs', href: '/blogs' },
//   ],
//   Legal: [
//     { name: 'Disclaimer', href: '/disclaimer' },
//     { name: 'Privacy Policy', href: '/privacy' },
//     { name: 'Terms & Conditions', href: '/terms' },
//   ],
//   Social: [
//     { name: 'LinkedIn', href: '#' },
//     { name: 'Twitter', href: '#' },
//     { name: 'Instagram', href: '#' },
//   ],
// };

// export default function Footer() {
//   return (
//     <footer className={`${styles.footer} glassmorphism py-10 px-6 mt-20`}>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div>
//           <h3 className="text-xl font-bold mb-4">CLUMOSS</h3>
//           <p className="text-sm">
//             Clusters of Multi-Organizations for Support and Services.
//           </p>
//         </div>
//         {Object.entries(footerSections).map(([section, links]) => (
//           <div key={section}>
//             <h3 className="text-lg font-semibold mb-4">{section}</h3>
//             <ul className="space-y-2">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-sm hover:text-blue-400 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-8 text-sm">
//         © {new Date().getFullYear()} CLUMOSS. All rights reserved.
//       </div>
//     </footer>
//   );
// }



// import Link from "next/link";
// import {  Linkedin, Twitter, Instagram } from "lucide-react";
// import styles from "./footer.module.css";

// const footerSections = {
//   Company: [
//     { name: "About Us", href: "/about" },
//     { name: "Careers", href: "/careers" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Blogs", href: "/blogs" },
//   ],
//   Legal: [
//     { name: "Disclaimer", href: "/disclaimer" },
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Terms & Conditions", href: "/terms" },
//   ],
// };

// const socialLinks = [
//   { name: "LinkedIn", href: "#", icon: Linkedin },
//   { name: "Twitter", href: "#", icon: Twitter },
//   { name: "Instagram", href: "#", icon: Instagram },
// ];

// export default function Footer() {
//   return (
//     <footer className={`${styles.footer} py-14 px-6`}>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             CLUMOSS
//           </h3>
//           <p className="text-sm text-gray-300 leading-relaxed">
//             Clusters of Multi-Organizations for Support and Services — shaping
//             the future with innovation, AI, and global impact.
//           </p>
//         </div>

//         {/* Company & Legal */}
//         {Object.entries(footerSections).map(([section, links]) => (
//           <div key={section}>
//             <h3 className="text-lg font-semibold mb-4">{section}</h3>
//             <ul className="space-y-2">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
//           <p className="text-sm text-gray-300 mb-4">
//             Subscribe to get the latest updates, insights, and news.
//           </p>
//           <form className="flex gap-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
//         {/* Socials */}
//         <div className="flex gap-5">
//           {socialLinks.map(({ name, href, icon: Icon }) => (
//             <Link
//               key={name}
//               href={href}
//               aria-label={name}
//               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//             >
//               <Icon className="w-5 h-5" />
//             </Link>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div className="text-sm text-gray-400 text-center">
//           © {new Date().getFullYear()} CLUMOSS. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }







// import Link from "next/link";
// import { Linkedin, Twitter, Instagram } from "lucide-react";
// import styles from "./footer.module.css";

// const footerSections = {
//   Company: [
//     { name: "About Us", href: "/about" },
//     { name: "Careers", href: "/careers" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Blogs", href: "/blogs" },
//   ],
//   Legal: [
//     { name: "Disclaimer", href: "/disclaimer" },
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Terms & Conditions", href: "/terms" },
//   ],
// };

// const socialLinks = [
//   { name: "LinkedIn", href: "#", icon: Linkedin },
//   { name: "Twitter", href: "#", icon: Twitter },
//   { name: "Instagram", href: "#", icon: Instagram },
// ];

// export default function Footer() {
//   return (
//     <footer className={`${styles.footer} py-14 px-6`}>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             CLUMOSS
//           </h3>
//           <p className="text-sm text-gray-300 leading-relaxed">
//             Clusters of Multi-Organizations for Support and Services — shaping
//             the future with innovation, AI, and global impact.
//           </p>
//         </div>

//         {/* Company & Legal */}
//         {Object.entries(footerSections).map(([section, links]) => (
//           <div key={section}>
//             <h3 className="text-lg font-semibold mb-4">{section}</h3>
//             <ul className="space-y-2">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-white/10 mt-10 pt-6 relative flex flex-col items-center">
//         {/* Center Text */}
//         <p className="text-sm text-gray-400 text-center">
//           Designed, Developed and Maintained by{" "}
//           <span className="font-semibold text-white">CLUMOSS</span>
//         </p>

//         {/* Socials Bottom Right */}
//         <div className="absolute right-6 bottom-6 flex gap-5">
//           {socialLinks.map(({ name, href, icon: Icon }) => (
//             <Link
//               key={name}
//               href={href}
//               aria-label={name}
//               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//             >
//               <Icon className="w-5 h-5" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }


// import Link from "next/link";
// import { Linkedin, Twitter, Instagram } from "lucide-react";
// import styles from "./footer.module.css";

// const footerSections = {
//   Company: [
//     { name: "About Us", href: "/about" },
//     { name: "Careers", href: "/careers" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Blogs", href: "/blogs" },
//   ],
//   Legal: [
//     { name: "Disclaimer", href: "/disclaimer" },
//     { name: "Privacy Policy", href: "/privacy" },
//     { name: "Terms & Conditions", href: "/terms" },
//   ],
// };

// const socialLinks = [
//   { name: "LinkedIn", href: "#", icon: Linkedin },
//   { name: "Twitter", href: "#", icon: Twitter },
//   { name: "Instagram", href: "#", icon: Instagram },
// ];

// export default function Footer() {
//   return (
//     <footer className={`${styles.footer} px-4 py-12 md:px-6`}>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
//         {/* Brand/About Section */}
//         <div className="md:col-span-2 lg:col-span-1">
//           <h3 className="text-3xl font-extrabold mb-4 text-white">
//             CLUMOSS
//           </h3>
//           <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
//             Clusters of Multi-Organizations for Support and Services — shaping
//             the future with innovation, AI, and global impact.
//           </p>
//         </div>

//         {/* Dynamic Link Sections */}
//         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 md:col-span-1 lg:col-span-3">
//           {Object.entries(footerSections).map(([section, links]) => (
//             <div key={section}>
//               <h3 className="text-lg font-semibold mb-4 text-white">
//                 {section}
//               </h3>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     <Link
//                       href={link.href}
//                       className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Bottom with Copyright and Social Icons */}
//       <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col items-center md:flex-row md:justify-between relative">
//         <p className="text-sm text-gray-400 text-center mb-4 md:mb-0">
//           Designed, Developed and Maintained by{" "}
//           <span className="font-semibold text-white">CLUMOSS</span>
//         </p>
//         <div className="md:absolute md:right-0 flex gap-5">
//           {socialLinks.map(({ name, href, icon: Icon }) => (
//             <Link
//               key={name}
//               href={href}
//               aria-label={name}
//               className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
//             >
//               <Icon className="w-6 h-6" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import styles from "./footer.module.css";

const footerSections = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
  ],
  Legal: [
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className={`${styles.footer} px-4 py-12 md:px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Brand/About Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-3xl font-extrabold mb-4 text-white">
            CLUMOSS
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            Clusters of Multi-Organizations for Support and Services — shaping
            the future with innovation, AI, and global impact.
          </p>
        </div>

        {/* Dynamic Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 md:col-span-1 lg:col-span-3">
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom with Centered Text and Right-Aligned Social Icons */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 relative">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center">
          <p className="text-sm text-gray-400 text-center">
            Designed, Developed and Maintained by{" "}
            <span className="font-semibold text-white">CLUMOSS</span>
          </p>
        </div>
        <div className="flex justify-center md:justify-end gap-5 mt-4 md:mt-0 md:absolute md:right-0 md:bottom-6">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              aria-label={name}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}