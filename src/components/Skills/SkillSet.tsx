"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export const metadata = {
  title: "Skills | Oluwapelumi Olamilekan",
  description:
    "Technical skills of Oluwapelumi Olamilekan — specializing in React.js, React Native, TypeScript, Node.js, NestJS, and AI/ML tools like TensorFlow and OpenAI.",
  keywords: [
    "Frontend Skills",
    "Backend Skills",
    "AI Engineer Skills",
    "React Developer Stack",
    "TypeScript Developer",
    "Node.js Developer",
    "React Native Expert",
  ],
  openGraph: {
    title: "Skills | Oluwapelumi Olamilekan",
    description:
      "Explore Oluwapelumi’s core skills across frontend, backend, mobile, and AI technologies — merging design, performance, and intelligence.",
    url: "https://yourdomain.com/skills",
    images: ["/og-skills.png"],
  },
};

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React.js", percentage: 95, icon: "⚛️" },
      { name: "Next.js", percentage: 90, icon: "▲" },
      { name: "TypeScript", percentage: 92, icon: "TS" },
      { name: "TailwindCSS", percentage: 95, icon: "🎨" },
      { name: "HTML5/CSS3", percentage: 98, icon: "🌐" },
      { name: "ES6+ Javascript", percentage: 98, icon: "🌐" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", percentage: 88, icon: "🟢" },
      { name: "Express.js", percentage: 85, icon: "🚂" },
      { name: "MongoDB", percentage: 82, icon: "🍃" },
      { name: "Redis", percentage: 78, icon: "🧱" },
      { name: "GraphQL", percentage: 75, icon: "🕸️" },
      { name: "Kafka", percentage: 75, icon: "📡" },
      { name: "Docker", percentage: 80, icon: "🐳" },
      { name: "Kubernetes", percentage: 72, icon: "☸️" },
      { name: "AWS", percentage: 77, icon: "☁️" },
      { name: "REST API", percentage: 88, icon: "🌐" },
      { name: "System Design", percentage: 82, icon: "🧩" },
      { name: "Microservices", percentage: 85, icon: "⚙️" },
    ],
  },
  {
    id: "aiml",
    name: "AI/ML",
    skills: [
      { name: "Machine Learning", percentage: 90, icon: "🤖" },
      { name: "Deep Learning", percentage: 85, icon: "🧠" },
      { name: "Generative AI", percentage: 83, icon: "✨" },
      { name: "RAG Systems", percentage: 82, icon: "🔗" },
      { name: "LLM Fine-Tuning", percentage: 80, icon: "🎯" },
      { name: "Data Preprocessing", percentage: 88, icon: "🧹" },
      { name: "Feature Engineering", percentage: 84, icon: "⚙️" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    skills: [
      { name: "React Native", percentage: 93, icon: "📱" },
      { name: "Expo", percentage: 90, icon: "🚀" },
      { name: "iOS/Android", percentage: 88, icon: "📲" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "Git", percentage: 95, icon: "🔧" },
      { name: "Docker", percentage: 80, icon: "🐳" },
      { name: "AWS", percentage: 75, icon: "☁️" },
      { name: "Figma", percentage: 88, icon: "🎨" },
    ],
  },
];

const SkillsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const { isDarkMode } = useTheme();

  const activeCategoryData = skillsData.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
      }`}
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 
              bg-gradient-to-r from-[#D4AF37] to-[#E2C275] bg-clip-text text-transparent`}
          >
            Skills & Expertise
          </h1>
          <p
            className={`text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skillset card */}
        <div
          className={`relative w-full max-w-5xl mx-auto p-8 md:p-12 lg:p-8 shadow-[0_0_50px_8px_rgba(212,175,55,0.2)]
            rounded-2xl lg:rounded-3xl backdrop-blur-xl border overflow-hidden transition-all duration-300
            ${
              isDarkMode
                ? "bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border-[#D4AF37]/20"
                : "bg-white border-[#0E7490]/20 shadow-md"
            }`}
        >
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {skillsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#E2C275] text-black shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                      : isDarkMode
                      ? "text-gray-400 hover:text-[#E2C275] hover:border-[#D4AF37]/40 border border-gray-700"
                      : "text-gray-700 hover:text-[#0E7490] hover:border-[#0E7490]/30 border border-gray-300"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {activeCategoryData?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 group 
                    ${
                      isDarkMode
                        ? "bg-[#111]/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                        : "bg-[#FAFAFA] border-[#0E7490]/10 hover:border-[#0E7490]/40"
                    }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-base sm:text-lg mb-1 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{skill.percentage}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className={`relative h-2 rounded-full overflow-hidden ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-200"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#E2C275] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
