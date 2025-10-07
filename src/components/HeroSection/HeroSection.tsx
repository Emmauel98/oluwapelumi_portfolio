"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import AnimatedBackground from "@/components/HeroSection/AnimatedBackground";
import Navbar from "@/components/NavBar/Navbar";
import HeroSectionComponent from "@/components/HeroSection/HeroSectionComponent";

export const metadata = {
  title: "Oluwapelumi Olamilekan | Software & AI Engineer",
  description:
    "Hi, I'm Oluwapelumi Olamilekan — a Software and AI Product Engineer specializing in web, mobile, backend and intelligent solutions using React, React Native, TypeScript, Node.js, and AI technologies.",
  keywords: [
    "Oluwapelumi Olamilekan",
    "Frontend Developer",
    "React Developer",
    "React Native Developer",
    "AI Engineer",
    "Software Engineer Portfolio",
    "JavaScript Developer",
    "TypeScript Developer",
    "Full Stack Engineer",
    "Mobile App Developer",
    "Backend Developer",
    "Backend Engineer",
  ],
  openGraph: {
    title: "Oluwapelumi Olamilekan | Software & AI Engineer",
    description:
      "Building intelligent, scalable, and user-friendly digital products with modern web, mobile, and AI technologies.",
    url: "https://yourdomain.com",
    siteName: "Oluwapelumi Olamilekan Portfolio",
    images: ["/og-home.png"],
  },
};


const HeroSection: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-hidden relative ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900"
      }`}
      id="home"
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
