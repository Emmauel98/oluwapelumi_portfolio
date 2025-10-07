"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

interface SocialIconsProps {
  isDarkMode: boolean;
}

const socials = [
  {
    src: "/github.svg",
    label: "GitHub",
    href: "https://github.com/Emmauel98/",
  },
  {
    src: "/linkedin.svg",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwapelumi-olamilekan-289a92222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    src: "/twitter.svg",
    label: "Twitter",
    href: "https://x.com/olami_js?s=21",
  },
  {
    src: "/youtube.svg",
    label: "YouTube",
    href: "https://youtube.com/@salaudeenoluwapelumi6092?si=IPNVlEN-OU4l1lHx",
  },
  {
    src: "/instagram.svg",
    label: "Instagram",
    href: "https://www.instagram.com/olami_js?igsh=Z2VkZnZvOWM2bmd4&utm_source=qr",
  },
];

const HeroSectionComponent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // console.log(centerX, 'center X', centerY, 'center Y', clientX, 'clientX', clientY, 'clientY');

      const rotateX = (clientX - centerX) / 40;
      const rotateY = (clientY - centerY) / 40;
      // console.log(rotateX, 'rotateX', rotateY, 'rotateY');

      // setMousePosition({ x: moveX, y: moveY });
      setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-6 py-20 lg:py-32 min-h-[calc(100vh-88px)]">
      <motion.div
        className="text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={
            isMounted
              ? {
                  // rotateX: tilt.rotateX / 12,
                  // rotateY: tilt.rotateY * 2,
                  // rotateZ: tilt.rotateY / 15,
                  // skewX: tilt.rotateY / 5,
                  // skewY: tilt.rotateX / 5,
                }
              : {}
          }
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          className=" "
        >
          <div className="">
            <section className="md:flex mt-10">
              <section>
                {/* Main Heading */}
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold 
                  mb-6 lg:mb-8 md:flex md:gap-5 bg-gradient-to-r from-purple-400 via-blue-400
                   to-cyan-400 text-transparent bg-clip-text text-center"
                >
                  <span className="block md:flex mb-2 md:mb-0">
                    Hi, I&apos;m{" "}
                  </span>
                  <span className="">Oluwapelumi</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-2 lg:mb-3"
                >
                  Software & AI Engineer
                </motion.h2>
                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className={`text-base sm:text-lg md:text-2xl mb-5 lg:mb-6 max-w-3xl mx-auto transition-colors duration-300 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  I build modern web & mobile solutions that solve real
                  problems.
                </motion.p>
              </section>
              {/* Cloud Icon */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center"
              >
                <motion.svg
                  className="w-16 h-16 lg:w-20 lg:h-20 text-cyan-400"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path d="M80,50 Q80,35 65,35 Q65,25 50,25 Q35,25 35,35 Q20,35 20,50 Q20,65 35,65 L65,65 Q80,65 80,50 Z" />
                </motion.svg>
              </motion.div>
            </section>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:mb-16"
            >
              <motion.button
                className="w-full sm:w-auto px-8 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg shadow-purple-500/50"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const nextSection = document.getElementById("contact");
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
              </motion.button>

              <motion.button
                className={`w-full sm:w-auto px-8 py-2 rounded-lg border font-semibold transition-colors ${
                  isDarkMode
                    ? "border-gray-600 text-white hover:bg-gray-800"
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
                whileHover={{
                  scale: 1.05,
                  borderColor: isDarkMode ? "#fff" : "#000",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const nextSection = document.getElementById("projects");
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-6"
            >
              {socials.map(({ src, label, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                  whileHover={{
                    scale: 1.25,
                    rotate: -10,
                    y: -6,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={src}
                    alt={label}
                    width={28}
                    height={28}
                    className={`object-contain ${
                      isDarkMode ? "invert brightness-90" : ""
                    }`}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator */}
      <motion.button
        onClick={() => {
          const nextSection = document.getElementById("about");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer ${
          isDarkMode ? "bg-blue-300/50" : "bg-slate-400/50"
        }
            p-2 rounded-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity },
        }}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll down to next section"
      >
        <svg
          className={`w-6 h-6 transition-colors ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.button>
    </section>
  );
};

export default HeroSectionComponent;
