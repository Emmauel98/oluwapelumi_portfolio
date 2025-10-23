"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface AboutCardProps {
  name: string;
  title: string;
  description: string;
  location: string;
  availability: string;
  imageUrl?: string;
}

const AboutCard = ({
  name,
  title,
  description,
  location,
  availability,
  imageUrl,
}: AboutCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full max-w-5xl mx-auto perspective-1000"
    >
      <motion.article
        className={`relative rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl border shadow-2xl overflow-hidden
          ${
            isDarkMode
              ? "bg-gradient-to-br from-[#0B0B0C] via-[#111] to-[#1A1A1C] border-neutral-700/40"
              : "bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F5] to-[#EAEAEA] border-neutral-300/50"
          }`}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(180, 180, 180, 0.3)"
            : "0 20px 25px -5px rgba(0,0,0,0.4), 0 0 0 1px rgba(180, 180, 180, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Subtle Glow Layer */}
        <motion.div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-tr from-amber-100/5 via-transparent to-zinc-100/5"
              : "bg-gradient-to-tr from-zinc-200/40 via-transparent to-amber-100/40"
          } opacity-0`}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Minimal Ambient Particles (soft silver shimmer) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isDarkMode ? "bg-neutral-400/20" : "bg-neutral-500/15"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              {/* Elegant Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B9B9B9] blur-2xl opacity-40"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.6 : 0.4,
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Image */}
              <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-2xl border border-neutral-400/30">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={`${name} profile`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-20 h-20 md:w-24 md:h-24 text-neutral-400"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <circle cx="30" cy="35" r="3" />
                    <circle cx="40" cy="35" r="3" />
                    <circle cx="50" cy="35" r="3" />
                    <circle cx="25" cy="45" r="3" />
                    <circle cx="35" cy="45" r="3" />
                    <circle cx="45" cy="45" r="3" />
                    <circle cx="55" cy="45" r="3" />
                    <circle cx="30" cy="55" r="3" />
                    <circle cx="40" cy="55" r="3" />
                    <circle cx="50" cy="55" r="3" />
                    <circle cx="35" cy="65" r="3" />
                    <circle cx="45" cy="65" r="3" />
                    <circle cx="40" cy="75" r="3" />
                  </svg>
                )}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.h3
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${
                isDarkMode
                  ? "text-white"
                  : "bg-gradient-to-r from-[#222] to-[#555] bg-clip-text text-transparent"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {name}
            </motion.h3>

            <motion.p
              className={`text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-neutral-700"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span
                className={`px-4 py-2 rounded-full bg-neutral-800/20 border border-neutral-500/40  text-sm font-medium backdrop-blur-sm ${
                  isDarkMode ? "text-neutral-300" : "text-neutral-900"
                }`}
              >
                📍 {location}
              </span>
              <span className="px-4 py-2 rounded-full bg-amber-200/10 border border-amber-400/30 text-amber-300 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {availability}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default AboutCard;
