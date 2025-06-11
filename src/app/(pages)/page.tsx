'use client';

import Hero from '../../features/hero/Hero';
import About from '../../features/about/About';
import Projects from '../../features/projects/Projects';
import Services from '../../features/services/Services';
import Technologies from '../../features/technologies/Technologies';
import Contact from '../../features/contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Technologies />
      <Contact />
    </>
  );
}