// 'use client';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import styles from './particles.module.css';

// export default function ParticlesBackground() {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('particleCanvas') as HTMLCanvasElement, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     const geometry = new THREE.BufferGeometry();
//     const vertices = [];
//     for (let i = 0; i < 1000; i++) {
//       vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
//       vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
//       vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
//     }
//     geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
//     const material = new THREE.PointsMaterial({ color: 0x888888, size: 2 });
//     const particles = new THREE.Points(geometry, material);
//     scene.add(particles);
//     camera.position.z = 500;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       particles.rotation.x += 0.001;
//       particles.rotation.y += 0.002;
//       renderer.render(scene, camera);
//     };
//     animate();

//     window.addEventListener('resize', () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     });
//   }, []);

//   return <canvas id="particleCanvas" className={styles.canvas} />;
// }




'use client';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      init={loadFull}
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