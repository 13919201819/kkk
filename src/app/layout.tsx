'use client';

import { ReactNode, Suspense } from 'react';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
// import AIAssistant from '../features/ai-assistant/AIAssistant';
import LenisProvider from '../features/lenis/LenisProvider';
import Loader from '../components/Loader';
import '@/lib/i18n'; // 👈 Add this import to initialize i18n
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <LenisProvider />
        <Header />
        <main>
          {/* Wrap your children with Suspense so Loader shows while loading */}
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
        </main>
        <Footer />
        {/* <AIAssistant /> */}
      </body>
    </html>
  );
}