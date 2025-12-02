// 'use client';

// import { ReactNode, Suspense } from 'react';
// import Header from '../features/header/Header';
// import Footer from '../features/footer/Footer';
// import AIAssistant from '../features/ai-assistant/AIAssistant';
// import LenisProvider from '../features/lenis/LenisProvider';
// import Loader from '../components/Loader';
// import '@/lib/i18n'; // 👈 Add this import to initialize i18n
// import './globals.css';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white">
//         <LenisProvider />
//         <Header />
//         <main>
//           {/* Wrap your children with Suspense so Loader shows while loading */}
//           <Suspense fallback={<Loader />}>
//             {children}
//           </Suspense>
//         </main>
//         <Footer />
//         <AIAssistant />
//       </body>
//     </html>
//   );
// }

'use client';

import { ReactNode, Suspense } from 'react';
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import AIAssistant from '../features/ai-assistant/AIAssistant';
import LenisProvider from '../features/lenis/LenisProvider';
import Loader from '../components/Loader';
import '@/lib/i18n';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  // Define content for manual injection
  const pageTitle = "CLUMOSS-Clusters of Multi Organizations for Support & Services | Next-Gen AI SaaS Solutions";

  return (
    <html lang="en">
      {/* 👈 MANUAL HEADER INJECTION (Fixes Title & Favicon) */}
      <head>
        <title>{pageTitle}</title>
        
        {/* Fixes the outdated search result description */}
        <meta 
          name="description" 
          content="Empowering industries with next-gen AI SaaS solutions through scalable platforms, innovation, and support." 
        />
        
        {/* Fixes the missing favicon (assumes favicon.ico is in /public/) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

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
        <AIAssistant />
      </body>
    </html>
  );
}