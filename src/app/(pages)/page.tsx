'use client';

import Hero from '../../features/hero/Hero';
// import About from '../../features/about/About';
import Projects from '../../features/projects/Projects';
import Solutions from '../../features/solutions/Solutions';
import Technologies from '../../features/technologies/Technologies';
import Contact from '../../features/contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Solutions />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
}