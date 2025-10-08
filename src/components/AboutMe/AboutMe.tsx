"use client";

import React from "react";
import { motion, easeInOut  } from "framer-motion";
import AboutCard from "./AboutCard";
import { useTheme } from "@/components/ThemeProvider";


export const metadata = {
  title: "About | Oluwapelumi Olamilekan",
  description:
    "Learn more about Oluwapelumi Olamilekan — a Software and AI Engineer passionate about building innovative, human-centered solutions through web, mobile, and artificial intelligence technologies.",
  keywords: [
    "About Oluwapelumi Olamilekan",
    "Software Engineer Bio",
    "AI Engineer Profile",
    "Frontend Developer Journey",
    "Mobile Developer Experience",
  ],
  openGraph: {
    title: "About | Oluwapelumi Olamilekan",
    description:
      "Discover Oluwapelumi's journey as a Software and AI Product Engineer, combining creativity, technology, and intelligence to build impactful products.",
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
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: easeInOut,
       },
    },
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen py-20 md:py-22 px-6 transition-colors duration-500 ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-px h-20 ${
              isDarkMode ? "bg-purple-500/20" : "bg-purple-300/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-5xl font-bold mb-4 md:mb-6 
            text-[#2464E9]
            "
            // bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate about creating digital experiences that make a difference
          </motion.p>
        </div>

        {/* About Card */}
        <motion.div variants={itemVariants}>
          <AboutCard
            name="Oluwapelumi Olamilekan"
            title="Software Engineer"
            description="I’m a Software and AI Product Engineer passionate about building intelligent, scalable, and user-centered digital solutions. I specialize in Frontend, Backend, Mobile, and AI engineering, with hands-on expertise in JavaScript, TypeScript, React.js, React Native, Node.js and modern AI/ML technologies."
            location="Nigeria"
            availability="Available for work"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
