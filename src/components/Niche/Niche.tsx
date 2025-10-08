"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

const skills: Skill[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Building scalable and performant web applications with modern frameworks",
    icon: "</>",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Creating cross-platform mobile experiences with React Native",
    icon: "📱",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Implementing intelligent features with machine learning and AI APIs",
    icon: "🤖",
    color: "bg-teal-500",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Designing robust, secure, and efficient server-side architectures.",
    icon: "🧠",
    color: "bg-green-500",
    gradient: "from-green-500 to-green-600",
  },
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-4
          bg-gradient-to-br ${
            isHovered
              ? skill.gradient
              : isDarkMode
              ? "bg-[#0A0A0C]"
              : "bg-white"
          }
          border border-gray-700 hover:border-gray-600
          transition-all duration-300 cursor-pointer h-full`}
      >
        <motion.div
          animate={{
            opacity: isHovered ? 0.2 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} blur-xl`}
        />

        <div className="relative z-10">
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`w-14 h-14 md:w-16 md:h-16 lg:h-12 lg:w-12 rounded-xl md:rounded-2xl ${
              isHovered ? "bg-white/20" : skill.color
            } flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 shadow-lg`}
          >
            {skill.icon}
          </motion.div>

          <h3
            className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {skill.title}
          </h3>

          <p
            className={`text-sm md:text-base leading-relaxed font-medium ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
          >
            {skill.description}
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
            className="h-1 bg-white/30 rounded-full mt-4 md:mt-6"
          />
        </div>

        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"
        />
      </motion.div>
    </motion.article>
  );
};

const NicheSection: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const randomPositions = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setPositions(randomPositions);
    }
  }, []);

  return (
    <section
      className={`w-full ${
        isDarkMode ? "bg-black" : "bg-white"
      } py-8 md:py-4 px-4 sm:px-6 lg:px-8`}
      aria-label="Skills and Expertise"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Safe animated dots */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              animate={{
                x: [pos.x, Math.random() * window.innerWidth],
                y: [pos.y, Math.random() * window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheSection;
