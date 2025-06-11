'use client';

import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: '#0a0a0a' } },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          links: { enable: true, distance: 150 },
          move: { enable: true, speed: 2 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}