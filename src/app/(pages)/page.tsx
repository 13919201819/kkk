'use client';

import Hero from '../../features/hero/Hero';
import About from '../../features/about/About';
// import Projects from '../../features/projects/Projects';
import Solutions from '../../features/solutions/Solutions';
// import Technologies from '../../features/technologies/Technologies';
// import Contact from '../../features/contact/Contact';
import Domains from '@/features/domains/Domains';
import Partner from '@/features/partner/Partner';

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <About />
      <Domains/>
      <Partner/>
      {/* <Technologies /> */}
      {/* <Contact /> */}
    </>
  );
}