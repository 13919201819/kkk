// 'use client';
// import { ReactNode } from 'react';
// import Header from '../features/header/Header';
// import Footer from '../features/footer/Footer';
// import AIAssistant from '../features/ai-assistant/AIAssistant';
// import ParticlesBackground from '../features/particles/ParticlesBackground';
// import './globals.css';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white">
//         <ParticlesBackground />
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <AIAssistant />
//       </body>
//     </html>
//   );
// }

'use client';

import { ReactNode } from 'react';
import Script from 'next/script';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import AIAssistant from '../features/ai-assistant/AIAssistant';
// import ParticlesBackground from '../features/particles/ParticlesBackground';
import Galaxy from '../features/particles/Galaxy';


// import SplashCursor from '@/features/cursor/SplashCursor';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-gray-900 text-white">
        <Galaxy />
        {/* <SplashCursor /> */}
        <Header />
        <main>{children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}