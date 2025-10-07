'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define types
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

// Skills data
const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'React.js', percentage: 95, icon: '⚛️' },
      { name: 'Next.js', percentage: 90, icon: '▲' },
      { name: 'TypeScript', percentage: 92, icon: 'TS' },
      { name: 'TailwindCSS', percentage: 95, icon: '🎨' },
      { name: 'HTML5/CSS3', percentage: 98, icon: '🌐' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', percentage: 88, icon: '🟢' },
      { name: 'Express', percentage: 85, icon: '🚂' },
      { name: 'NestJS', percentage: 80, icon: '🦅' },
      { name: 'MongoDB', percentage: 82, icon: '🍃' },
      { name: 'Redis', percentage: 75, icon: '🔴' },
    ],
  },
  {
    id: 'aiml',
    name: 'AI/ML',
    skills: [
      { name: 'Python', percentage: 85, icon: '🐍' },
      { name: 'TensorFlow', percentage: 78, icon: '🧠' },
      { name: 'LangChain', percentage: 82, icon: '🔗' },
      { name: 'OpenAI API', percentage: 90, icon: '🤖' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    skills: [
      { name: 'React Native', percentage: 93, icon: '📱' },
      { name: 'Expo', percentage: 90, icon: '🚀' },
      { name: 'iOS/Android', percentage: 88, icon: '📲' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    skills: [
      { name: 'Git', percentage: 95, icon: '🔧' },
      { name: 'Docker', percentage: 80, icon: '🐳' },
      { name: 'AWS', percentage: 75, icon: '☁️' },
      { name: 'Figma', percentage: 88, icon: '🎨' },
    ],
  },
];

const SkillsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const activeCategoryData = skillsData.find(cat => cat.id === activeCategory);

  return (
    <section className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-[#2464E9] bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 lg:flex justify-center items-center"
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-2 inline-flex
          flex-wrap gap-2 border border-zinc-800/50 mx-auto justify-between w-full max-w-4xl">
            {skillsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all 
                    duration-300 text-sm sm:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
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
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.percentage}%</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
            <span>🔥</span>
            <span>Built with Polymet</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;