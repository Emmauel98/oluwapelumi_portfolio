import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface Particle {
  left: string;
  top: string;
  size: number;
  rotate: string;
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles once on mount
    const generated = Array.from({ length: 40 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2,
      rotate: `${Math.random() * 360}deg`,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 3,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating beams */}
      {particles.map((p, i) => (
        <motion.div
          key={`beam-${i}`}
          className={`absolute rounded-full ${
            isDarkMode
              ? "bg-gradient-to-b from-[#D4AF37]/30 via-transparent to-transparent"
              : "bg-gradient-to-b from-[#0E7490]/20 via-transparent to-transparent"
          }`}
          style={{
            left: p.left,
            top: p.top,
            width: "2px",
            height: `${30 + Math.random() * 80}px`,
            rotate: p.rotate,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Subtle floating sparkles */}
      {particles.map((p, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className={`absolute rounded-full ${
            isDarkMode
              ? "bg-[#D4AF37]/40 shadow-[0_0_6px_#D4AF37]"
              : "bg-[#0E7490]/30 shadow-[0_0_4px_#0E7490]"
          }`}
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.8, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration + 1,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft radial glow overlay for depth */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.05)_0%,transparent_60%)]"
        }`}
      />
    </div>
  );
};

export default AnimatedBackground;
