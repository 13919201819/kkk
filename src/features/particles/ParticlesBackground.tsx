// 'use client';

// import { Particles, initParticlesEngine } from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';
// import { useEffect, useState } from 'react';

// export default function ParticlesBackground() {
//   const [init, setInit] = useState(false);

//   // Initialize particles engine
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   if (!init) return null;

//   return (
//     <Particles
//       id="tsparticles"
//       options={{
//         background: { color: { value: '#0a0a0a' } },
//         particles: {
//           number: { value: 50 },
//           size: { value: 3 },
//           links: { enable: true, distance: 150 },
//           move: { enable: true, speed: 2 },
//         },
//       }}
//       className="absolute inset-0 z-0"
//     />
//   );
// }


// 'use client';

// import { useCallback } from 'react';
// import { Engine } from '@tsparticles/engine';
// import { Particles } from '@tsparticles/react';
// import { loadSlim } from '@tsparticles/slim';

// export default function ParticlesBackground() {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: 0 },
//         background: {
//           color: {
//             value: '#0a0a0a',
//           },
//         },
//         particles: {
//           number: {
//             value: 150,
//             density: {
//               enable: true,
//               width: 800,
//               height: 800,
//             },
//           },
//           color: {
//             value: '#ffffff',
//           },
//           opacity: {
//             value: 0.04,
//           },
//           size: {
//             value: { min: 1, max: 2 },
//           },
//           move: {
//             enable: true,
//             speed: 0.1,
//             direction: 'none',
//             outModes: {
//               default: 'bounce',
//             },
//           },
//         },
//       }}
//     />
//   );
// }







'use client';

import { useRef, useEffect } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 100,
        width / 2, height / 2, width
      );
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffff';
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
