"use client";

import { useEffect } from "react";
import Lenis, { LenisOptions } from "@studio-freight/lenis";

export default function LenisProvider() {
  useEffect(() => {
    const options: Partial<LenisOptions> = {
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smoothWheel: true, // enable smooth mouse wheel scrolling
    };

    const lenis = new Lenis(options);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
