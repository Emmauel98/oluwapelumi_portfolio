'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';


// Main About Section Component
export default function AboutSection() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen py-20 md:py-22 px-6 transition-colors duration-500 ${
        isDarkMode
          ? 'bg-black text-white'
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-px h-20 ${
              isDarkMode ? 'bg-purple-500/20' : 'bg-purple-300/20'
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
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
            description="I'm a passionate Software Engineer specialized in building interactive, scalable, and user-friendly web and mobile applications. My expertise spans React.js, React Native, Node.js, and AI integrations. I love solving complex problems and creating digital experiences that make an impact."
            location="Nigeria"
            availability="Available for work"
          />
        </motion.div>
      </motion.div>

      {/* Theme Toggle (Optional) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed bottom-8 left-8 p-4 rounded-full shadow-lg transition-colors z-50 ${
          isDarkMode
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-white hover:bg-gray-100 text-gray-900'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.button>
    </section>
  );
}