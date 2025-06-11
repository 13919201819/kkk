'use client';
import { ReactNode } from 'react';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import AIAssistant from '../features/ai-assistant/AIAssistant';
import ParticlesBackground from '../features/particles/ParticlesBackground';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <ParticlesBackground />
        <Header />
        <main>{children}</main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}