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
    title: "Software & AI Engineer",
    company: "AI Builder (Contract)",
    duration: "05/2025 - 07/2025",
    description:
      "A remote startup specializing in AI solutions for data processing and intelligent automation.",
    achievements: [
      {
        text: "Developed and integrated AI-powered data processing systems for efficient data organization.",
      },
      {
        text: "Built a Retrieval-Augmented Generation (RAG) system for intelligent document search functionalities.",
      },
    ],
    icon: "💻",
    iconBg: "from-blue-500 to-purple-600",
  },
  {
    id: "2",
    title: "Fullstack Engineer",
    company: "Edge Capital (Contract)",
    duration: "03/2025 - 05/2025",
    description:
      "A contract-based fintech firm specializing in corporate web and financial solutions.",
    achievements: [
      {
        text: "Developed and deployed a bilingual corporate website supporting English and Dutch.",
      },
      {
        text: "Implemented dynamic language translation and optimized SEO performance.",
      },
      {
        text: "Improved site load speed by 35% through frontend performance enhancements.",
      },
    ],
    icon: "🧩",
    iconBg: "from-cyan-500 to-blue-600",
  },
  {
    id: "3",
    title: "Mobile Developer",
    company: "Concavo",
    duration: "09/2024 – 11/2024",
    description:
      "A remote fintech startup focused on mobile banking and digital financial services.",
    achievements: [
      {
        text: "Led the development of a fintech mobile banking app with over 20 screens.",
      },
      {
        text: "Ensured seamless navigation flow and responsive UI across devices.",
      },
      {
        text: "Collaborated with UI/UX teams to ensure secure and user-friendly experiences.",
      },
    ],
    icon: "📱",
    iconBg: "from-purple-500 to-pink-600",
  },
  {
    id: "4",
    title: "Mobile Developer",
    company: "LoadWay",
    duration: "2024",
    description:
      "A remote fintech startup building Real Estate-focused mobile applications.",
    achievements: [
      {
        text: "Developed and maintained a Real Estate fintech mobile app.",
      },
      {
        text: "Implemented context API for efficient state management and data flow.",
      },
      {
        text: "Collaborated with mobile developers to ensure secure and intuitive user experiences.",
      },
    ],
    icon: "📱",
    iconBg: "from-indigo-500 to-blue-600",
  },
  {
    id: "5",
    title: "Frontend Engineer",
    company: "CLM Worldwide",
    duration: "2024",
    description:
      "A digital solutions company providing web and software development services.",
    achievements: [
      {
        text: "Built a modern, responsive frontend interface using React.js and Tailwind CSS.",
      },
      { text: "Integrated APIs via Swagger and enhanced data consistency." },
      { text: "Improved site load speed by 25% and optimized performance." },
    ],
    icon: "🌐",
    iconBg: "from-green-500 to-teal-600",
  },
  {
    id: "6",
    title: "Fullstack Developer",
    company: "Client Project (Remote)",
    duration: "08/2023 – 11/2023",
    description:
      "A freelance church management platform for a growing digital congregation.",
    achievements: [
      {
        text: "Developed a full-stack web application using React.js, Node.js, and MongoDB.",
      },
      {
        text: "Implemented authentication, secure REST APIs, and email notifications with Nodemailer.",
      },
      {
        text: "Deployed production-ready configurations for scalability and performance.",
      },
    ],
    icon: "🧠",
    iconBg: "from-yellow-500 to-orange-600",
  },
  {
    id: "7",
    title: "Frontend Instructor",
    company: "Virtual Learning Hub",
    duration: "09/2022 – 10/2022",
    description:
      "An online platform providing project-based learning in web development and digital skills.",
    achievements: [
      { text: "Taught and mentored students in HTML, CSS, and JavaScript." },
      {
        text: "Developed project-based learning paths that improved completion rates by 40%.",
      },
      {
        text: "Guided students through practical assignments and portfolio projects.",
      },
    ],
    icon: "🎓",
    iconBg: "from-pink-500 to-purple-600",
  },
];

const WorkExperience: React.FC = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`${
        isDarkMode
          ? "bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#1A1A1A]"
          : "bg-gradient-to-br from-[#F8FAFC] via-[#EEF2FF] to-[#FAF5FF]"
      } bg-black py-16 px-4 sm:px-6 lg:px-8`}
      id="experience"
    >
      {/* Subtle background glow */}
      <div
        className={`absolute inset-0 opacity-40 blur-[100px] pointer-events-none transition-all duration-700
          ${
            isDarkMode
              ? "bg-gradient-to-br from-[#D4AF37]/20 via-[#E2C275]/10 to-transparent"
              : "bg-gradient-to-br from-[#A5F3FC]/40 via-[#C7D2FE]/30 to-[#FBCFE8]/30"
          }`}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              isDarkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E2C275]"
                : "text-gray-900"
            }`}
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
                className={`relative sm:pl-24 `}
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
                  className={` backdrop-blur-sm border  ${
                    isDarkMode
                      ? "bg-[#111]/60 border border-[#2A2A2A] hover:border-[#D4AF37]/40"
                      : "bg-white/60 border border-gray-200 hover:border-[#0E7490]/30"
                  }
               rounded-2xl p-6 sm:p-8  transition-all
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
                          }  font-bold text-xl sm:text-2xl mb-1 transition-colors group-hover:text-transparent group-hover:bg-clip-text
                           group-hover:bg-gradient-to-r from-[#D4AF37] to-[#E2C275]`}
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
                isDarkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E2C275]"
                  : "text-gray-900"
              } font-bold text-2xl sm:text-3xl mb-3`}
            >
              Want to know more?
            </h3>
            <p
              className={` ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              } mb-6`}
            >
              Download my full resume for detailed information
            </p>
            <button
              onClick={() => setShowDownloadModal(true)}
              className={`px-8 py-3  text-white
               rounded-xl font-medium  transition-all duration-300 
               inline-flex items-center gap-2 hover:cursor-pointer ${
                 isDarkMode
                   ? "bg-gradient-to-r from-[#D4AF37] to-[#E2C275] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                   : "bg-gradient-to-r from-[#D4AF37] to-[#E2C275] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
               }`}
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
              My Resume would be downloaded on your chrome. Click demo to
              continue.
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
