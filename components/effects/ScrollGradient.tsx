"use client";

import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

function interpolateColor(color1: string, color2: string, factor: number): string {
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);

  return `rgb(${r}, ${g}, ${b})`;
}

export default function ScrollGradient() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setProgress(v));
    return () => unsubscribe();
  }, [scrollYProgress]);

  const colors = {
    deepSpace: "#0a0d1a",
    midnight: "#101630",
    ocean: "#152040",
    twilight: "#1a2850",
  };

  const topColor = interpolateColor(colors.deepSpace, colors.midnight, progress);
  const midColor = interpolateColor(colors.midnight, colors.ocean, progress);
  const bottomColor = interpolateColor(colors.ocean, colors.twilight, progress);

  return (
    <div
      className="fixed inset-0 -z-20 transition-colors duration-300"
      style={{
        background: `linear-gradient(
          to bottom,
          ${topColor} 0%,
          ${midColor} 50%,
          ${bottomColor} 100%
        )`,
      }}
    />
  );
}
