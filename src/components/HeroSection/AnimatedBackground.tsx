import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface Particle {
  left: string;
  top: string;
  rotate: string;
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random values once, on client mount
    const generated = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotate: `${Math.random() * 360}deg`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-8 ${
            isDarkMode
              ? "bg-gradient-to-b from-purple-500/40 to-transparent"
              : "bg-gradient-to-b from-purple-300/30 to-transparent"
          }`}
          style={{
            left: p.left,
            top: p.top,
            rotate: p.rotate,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
