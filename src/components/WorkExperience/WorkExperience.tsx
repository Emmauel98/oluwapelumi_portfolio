"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Achievement {
  text: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: Achievement[];
  icon: string;
  iconBg: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Frontend Team Lead",
    company: "GDSC OAU",
    duration: "2023 - Present",
    description:
      "Led the frontend team and organized developer workshops. Mentored junior developers and established coding standards.",
    achievements: [
      { text: "Led team of 8 frontend developers" },
      { text: "Organized 12+ technical workshops" },
      { text: "Improved code quality by 40%" },
    ],
    icon: "💻",
    iconBg: "from-blue-500 to-purple-600",
  },
  {
    id: "2",
    title: "Core Mobile Developer",
    company: "LoadWay",
    duration: "2022 - 2023",
    description:
      "Built fintech banking app (Cancave) with focus on security and user experience.",
    achievements: [
      { text: "Developed secure payment system" },
      { text: "Implemented biometric authentication" },
      { text: "Achieved 4.8+ app store rating" },
    ],
    icon: "📱",
    iconBg: "from-purple-500 to-pink-600",
  },
  {
    id: "3",
    title: "Mobile Developer Lead",
    company: "Cancave",
    duration: "2021 - 2022",
    description:
      "Developed 45+ screens for fintech platform with complete state management and API integrations.",
    achievements: [
      { text: "Built 45+ production screens" },
      { text: "Implemented Redux state management" },
      { text: "Organized offshore dev architecture" },
    ],
    icon: "🚀",
    iconBg: "from-cyan-500 to-blue-600",
  },
];

const WorkExperience: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <section className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 sm:left-4 top-0">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${exp.iconBg} flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h2 className="text-white font-bold text-xl sm:text-2xl mb-1 group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h2>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h3 className="text-gray-300 font-semibold text-sm uppercase tracking-wider mb-3">
                      Key Achievements
                    </h3>
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + idx * 0.1,
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {achievement.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-8 sm:p-10">
            <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3">
              Want to know more?
            </h3>
            <p className="text-gray-400 mb-6">
              Download my full resume for detailed information
            </p>
            <button
              onClick={() => setShowDownloadModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Download Modal */}
      {showDownloadModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowDownloadModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md w-full"
            onClick={(e: { stopPropagation: () => unknown; }) => e.stopPropagation()}
          >
            <h3 className="text-white font-bold text-2xl mb-4">
              Download Resume
            </h3>
            <p className="text-gray-400 mb-6">
              This is a demo component. In a real implementation, this would
              trigger a resume download.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-6 py-3 bg-zinc-800 text-white rounded-xl font-medium hover:bg-zinc-700 transition-all duration-300"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Resume download would start here!");
                  setShowDownloadModal(false);
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Download
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default WorkExperience;
