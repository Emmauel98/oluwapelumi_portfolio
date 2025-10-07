"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

// Types
interface AboutCardProps {
  name: string;
  title: string;
  description: string;
  location: string;
  availability: string;
  imageUrl?: string;
}

// About Card Component
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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-5xl mx-auto perspective-1000"
    >
      <motion.article
        className={`relative ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900/90 to-[#0A0A0C]/90 text-gray-900"
            : "bg-white text-white"
        } 
           rounded-2xl lg:rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl border
            border-purple-500/20 shadow-2xl overflow-hidden`}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(147, 51, 234, 0.5), 0 0 0 1px rgba(147, 51, 234, 0.3)"
            : "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(147, 51, 234, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-xl opacity-50"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.7 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-2xl">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={`${name} profile`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-20 h-20 md:w-24 md:h-24 text-gray-900"
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

          {/* Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            style={{
              transform: "translateZ(30px)",
            }}
          >
            <motion.h3
              className={`text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 md:mb-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {name}
            </motion.h3>

            <motion.p
              className={` text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-medium backdrop-blur-sm">
                📍 {location}
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
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
