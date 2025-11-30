'use client';

import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  const footerSections = {
    Company: t('footer.company.links', { returnObjects: true }) as Array<{ name: string; href: string }>,
    Legal: t('footer.legal.links', { returnObjects: true }) as Array<{ name: string; href: string }>,
  };

  const socialLinks = t('footer.social', { returnObjects: true }) as Array<{ name: string; href: string }>;

  return (
    <footer className={`${styles.footer} px-4 py-12 md:px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Brand/About Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-3xl font-extrabold mb-4 text-white">
            {t('footer.brand.name')}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            {t('footer.brand.description')}
          </p>
        </div>

        {/* Dynamic Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 md:col-span-1 lg:col-span-3">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-3">
              {footerSections.Company.map((link) => (
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
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t('footer.legal.title')}
            </h3>
            <ul className="space-y-3">
              {footerSections.Legal.map((link) => (
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
        </div>
      </div>

      {/* Footer Bottom with Copyright, Centered Text, and Social Icons */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left: Copyright */}
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold">
                C
              </div>
              <span>{t('footer.copyright.text', { year: new Date().getFullYear() })}</span>
            </div>
          </div>

          {/* Center: Main Text */}
          <div className="flex-1 flex justify-center mb-4 md:mb-0">
            <p className="text-sm text-gray-400 text-center">
              {t('footer.copyright.designedBy').split('CLUMOSS')[0]}
              <span className="font-semibold text-white">CLUMOSS</span>
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center md:justify-end gap-5">
            {socialLinks.map(({ name, href }) => {
              const Icon = name === 'LinkedIn' ? Linkedin : name === 'Twitter' ? Twitter : Instagram;
              return (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}