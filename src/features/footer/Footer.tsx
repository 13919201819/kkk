import Link from 'next/link';
import styles from './footer.module.css';

const footerSections = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blogs', href: '/blogs' },
  ],
  Legal: [
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
  Social: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className={`${styles.footer} glassmorphism py-10 px-6 mt-20`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CLUMOSS</h3>
          <p className="text-sm">
            Clusters of Multi-Organizations for Support and Services.
          </p>
        </div>
        {Object.entries(footerSections).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-lg font-semibold mb-4">{section}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-sm">
        © {new Date().getFullYear()} CLUMOSS. All rights reserved.
      </div>
    </footer>
  );
}