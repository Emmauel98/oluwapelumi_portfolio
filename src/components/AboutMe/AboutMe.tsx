"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";
import AboutCard from "./AboutCard";
import { useTheme } from "@/components/ThemeProvider";

export const metadata = {
  title: "About | Oluwapelumi Olamilekan",
  description:
    "Learn more about Oluwapelumi Olamilekan — a Software and AI Engineer passionate about building intelligent, human-centered products.",
  openGraph: {
    title: "About | Oluwapelumi Olamilekan",
    description:
      "Discover Oluwapelumi's journey as a Software and AI Product Engineer, blending creativity, technology, and intelligence.",
    url: "https://yourdomain.com/about",
    images: ["/og-about.png"],
  },
};

export default function AboutSection() {
  const { isDarkMode } = useTheme();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen py-20 px-6 transition-colors duration-500 ${
        isDarkMode
          ? "bg-[#0A0A0A] text-gray-100"
          : "bg-[#F5F5F5] text-gray-900"
      }`}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-px h-20 rounded-full ${
              isDarkMode
                ? "bg-gradient-to-b from-[#D4AF37]/20 to-transparent"
                : "bg-gradient-to-b from-[#0E7490]/20 to-transparent"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Radial gradient center glow */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.05)_0%,transparent_70%)]"
          }`}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            variants={itemVariants}
            className={`text-5xl md:text-6xl font-extrabold mb-4 ${
              isDarkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E2C275]"
                : "text-[#0E7490]"
            }`}
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Passionate about crafting digital experiences that inspire trust and impact lives.
          </motion.p>
        </div>

        {/* About Card */}
        <motion.div variants={itemVariants}>
          <AboutCard
            name="Oluwapelumi Olamilekan"
            title="Software & AI Engineer"
            description="I’m a Software and AI Product Engineer focused on delivering intelligent, scalable, and user-centric solutions. My work blends deep technical knowledge with design thinking — across frontend, backend, mobile, and AI. I’m driven by precision, creativity, and purpose in every line of code."
            location="Nigeria"
            availability="Available for collaborations"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
