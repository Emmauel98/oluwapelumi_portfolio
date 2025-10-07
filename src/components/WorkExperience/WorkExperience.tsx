"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export const metadata = {
  title: "Experience | Oluwapelumi Olamilekan",
  description:
    "Professional experience of Oluwapelumi Olamilekan — Frontend Team Lead at GDG OAU, Core Mobile Developer at LoadWay, and Mobile Developer Lead at Concova.",
  keywords: [
    "Software Engineer Experience",
    "Frontend Team Lead",
    "GDG OAU",
    "Concova",
    "LoadWay",
    "React Native Experience",
    "Fintech Developer",
  ],
  openGraph: {
    title: "Experience | Oluwapelumi Olamilekan",
    description:
      "Discover OluwapelumiU+2019s experience leading frontend and mobile teams, building fintech apps, and delivering scalable AI-powered solutions.",
    url: "https://yourdomain.com/experience",
    images: ["/og-experience.png"],
  },
};


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
    duration: "2025 - Aug 2025",
    description:
      "Led the frontend team and organized developer workshops. Mentored junior developers and established coding standards.",
    achievements: [
      { text: "Led a team of 8 frontend developers" },
      { text: "Organized 12+ technical workshops" },
      { text: "Improved code quality by 40%" },
    ],
    icon: "💻",
    iconBg: "from-blue-500 to-purple-600",
  },
  {
    id: "2",
    title: "Mobile Developer",
    company: "LoadWay",
    duration: "March 2024 - May 2024",
    description:
      "Contributed to a Real Estate fintech banking app (Loadway) with focus on security and user experience.",
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
    title: "Core Mobile Developer",
    company: "Concavo",
    duration: "Sept 2024",
    description:
      "Developed 45+ screens for a fintech platform with complete state management and API integrations.",
    achievements: [
      { text: "Built 45+ production-ready screens" },
      { text: "Integrated APIs and managed complex navigation flows" },
      { text: "Implemented responsive layouts with React Native" },
    ],
    icon: "🚀",
    iconBg: "from-cyan-500 to-blue-600",
  },
  {
    id: "4",
    title: "Frontend Engineer",
    company: "CLM Worldwide",
    duration: "Sep 2023 – Jan 2024",
    description:
      "Developed a modern frontend UI using React.js and Tailwind CSS, integrating APIs via Swagger and collaborating with designers to enhance UX.",
    achievements: [
      { text: "Built responsive, accessible interfaces with React.js" },
      { text: "Integrated backend APIs using Swagger" },
      { text: "Improved UI consistency and user satisfaction" },
    ],
    icon: "🌐",
    iconBg: "from-green-500 to-teal-600",
  },
  {
    id: "5",
    title: "Fullstack Developer",
    company: "Client Project (Remote)",
    duration: "Aug 2023 – Nov 2023",
    description:
      "Built a full-stack church management platform using React.js, Node.js, and MongoDB with secure RESTful APIs.",
    achievements: [
      { text: "Developed full CRUD operations and authentication flow" },
      { text: "Designed scalable REST APIs using Express.js" },
      { text: "Deployed app with production-ready configurations" },
    ],
    icon: "🧩",
    iconBg: "from-yellow-500 to-orange-600",
  },
  {
    id: "6",
    title: "Frontend Instructor",
    company: "Virtual Learning Hub",
    duration: "Sep 2022 – Aug 2023",
    description:
      "Trained over 100 students in frontend development with project-based learning and mentorship.",
    achievements: [
      { text: "Taught HTML, CSS, JavaScript, and React fundamentals" },
      { text: "Supervised 30+ student projects" },
      { text: "Increased course completion rate by 25%" },
    ],
    icon: "🎓",
    iconBg: "from-indigo-500 to-blue-700",
  },
  {
    id: "7",
    title: "Technical Consultant",
    company: "Arteries Communication",
    duration: "Nov 2023",
    description:
      "Provided expert consulting on website enhancements, API testing, and deployment best practices.",
    achievements: [
      {
        text: "Provided expert guidance on website enhancements, API testing, and deployment best practices.",
      },
      { text: "Built a SME website for Arteries Communcication" },
      { text: "Helped ensure the Growth of Arteries Comms" },
    ],
    icon: "🧠",
    iconBg: "from-gray-500 to-gray-700",
  },
  {
    id: "8",
    title: "AI Instructor",
    company: "Independent / Training Program",
    duration: "Aug 2025 – Oct 2025",
    description:
      "Taught students the fundamentals and practical applications of Generative AI, helping them progress from beginner to intermediate level through hands-on projects and real-world examples.",
    achievements: [
      { text: "Delivered interactive Generative AI workshops" },
      { text: "Guided 30+ students from beginner to intermediate proficiency" },
      {
        text: "Covered topics including LLMs, Prompt Engineering, and AI tools",
      },
    ],
    icon: "🧠",
    iconBg: "from-yellow-500 to-orange-600",
  },
];
const WorkExperience: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${
        isDarkMode ? "bg-black" : "bg-white"
      } bg-black py-16 px-4 sm:px-6 lg:px-8`}
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500
           to-purple-600 bg-clip-text text-transparent"
          >
            Work Experience
          </h1>
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-lg md:text-xl lg:text-2xl`}
          >
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500
           via-purple-500 to-cyan-500 sm:block hidden"
          />

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative sm:pl-24"
              >
                {/* Bulletin  */}
                <div className="absolute left-[1.7rem]  top-0 md:block hidden">
                  <div
                    className={`w-3 h-3  rounded-full bg-gradient-to-br ${exp.iconBg} ring-2 ring-black
                     flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                  ></div>
                </div>
                {/* Content Card */}
                <div
                  className={`${
                    isDarkMode ? "bg-zinc-900/50" : "bg-slate-50"
                  } backdrop-blur-sm border 
                border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all
                 duration-300 group`}
                >
                  {/* Icon + Header div */}

                  <div className="md:flex md:gap-5">
                    {/* Timeline Icon */}
                    <div
                      //  className="absolute left-0 sm:left-4 top-0"
                      className="relative"
                    >
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${exp.iconBg}
                     flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                      >
                        {exp.icon}
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col md:flex-row sm:items-start md:justify-between  gap-2 mb-4 md:w-full">
                      <div>
                        <h2
                          className={`${
                            isDarkMode ? "text-white" : "text-black"
                          }  font-bold text-xl sm:text-2xl mb-1 group-hover:text-purple-400 transition-colors`}
                        >
                          {exp.title}
                        </h2>
                        <p className="text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={`${
                          isDarkMode ? "text-white" : "text-black"
                        } text-sm sm:text-base whitespace-nowrap`}
                      >
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-500"
                    } mb-6 leading-relaxed`}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h3
                      className={`${
                        isDarkMode ? "text-white" : "text-gray-500"
                      } font-semibold text-sm uppercase tracking-wider mb-3`}
                    >
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
                        <p
                          className={`${
                            isDarkMode ? "text-white" : "text-black"
                          } text-sm sm:text-base leading-relaxed`}
                        >
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
          <div
            className={` ${
              isDarkMode
                ? "bg-gradient-to-r from-[#181123]/80 to-[#091A20]/80"
                : "bg-gradient-to-r from-[#F5EEFE ]/80 to-[#E7F7FC]/80"
            } backdrop-blur-sm 
          border border-zinc-700/50 rounded-2xl p-8 sm:p-10 relative w-full max-w-xl mx-auto
           perspective-1000`}
          >
            <h3
              className={` ${
                isDarkMode ? "text-white" : "text-black"
              } font-bold text-2xl sm:text-3xl mb-3`}
            >
              Want to know more?
            </h3>
            <p
              className={` ${isDarkMode ? "text-gray-400" : "text-black"} mb-6`}
            >
              Download my full resume for detailed information
            </p>
            <button
              onClick={() => setShowDownloadModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white
               rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 
               inline-flex items-center gap-2 hover:cursor-pointer"
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
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50`}
          onClick={() => setShowDownloadModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md w-full"
            onClick={(e: { stopPropagation: () => unknown }) =>
              e.stopPropagation()
            }
          >
            <h3 className="text-white font-bold text-2xl mb-4">
              Download Resume
            </h3>
            <p className="text-gray-400 mb-6">
              My Resume would be downloaded on your chrome. Click demo to continue.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-6 py-3 bg-zinc-800 text-white rounded-xl font-medium hover:bg-zinc-700 transition-all duration-300"
              >
                Close
              </button>
              <a
                href="/resume.pdf"
                download="Salaudeen-Resume.pdf"
                onClick={() => setShowDownloadModal(false)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Download
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default WorkExperience;
