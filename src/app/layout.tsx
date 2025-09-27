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

// 'use client';

// import { ReactNode } from 'react';
// import Header from '../features/header/Header';
// import Footer from '../features/footer/Footer';
// import AIAssistant from '../features/ai-assistant/AIAssistant';
// // import ParticlesBackground from '../features/particles/ParticlesBackground';
// import Galaxy from '../features/particles/Galaxy';
// import LenisProvider from '../features/lenis/LenisProvider'; // 👈 import



// // import SplashCursor from '@/features/cursor/SplashCursor';
// import './globals.css';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white">
//         <LenisProvider/>
//         <Galaxy />
//         {/* <SplashCursor /> */}
//         <Header />
//         <main>{children}
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
// import ParticlesBackground from '../features/particles/ParticlesBackground';
import Galaxy from '../features/particles/Galaxy';
import LenisProvider from '../features/lenis/LenisProvider';
import Loader from '../components/Loader'; // 👈 import your loader
// import SplashCursor from '@/features/cursor/SplashCursor';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <LenisProvider />
        <Galaxy />
        {/* <SplashCursor /> */}
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
