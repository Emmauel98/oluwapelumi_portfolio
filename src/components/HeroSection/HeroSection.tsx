"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedBackground from "@/components/HeroSection/AnimatedBackground";
import Navbar from "@/components/NavBar/Navbar";
import HeroSectionComponent from "@/components/HeroSection/HeroSectionComponent";

const HeroSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-hidden relative ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900"
      }`}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section Content */}
      <HeroSectionComponent />
    </div>
  );
};

export default HeroSection;
