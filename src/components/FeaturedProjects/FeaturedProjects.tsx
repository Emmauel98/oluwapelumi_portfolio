"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export const metadata = {
  title: "Projects | Oluwapelumi Olamilekan",
  description:
    "Browse projects by Oluwapelumi Olamilekan — web, mobile, backend, and AI-powered solutions built using React.js, React Native, Node.js, and advanced AI tools.",
  openGraph: {
    title: "Projects | Oluwapelumi Olamilekan",
    description:
      "A showcase of Oluwapelumi’s innovative projects spanning web, mobile, backend, and AI — built for performance, scalability, and impact.",
    url: "https://yourdomain.com/projects",
    images: ["/og-projects.png"],
  },
};

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  featured?: boolean;
  badge?: string;
  demo?: string;
  code: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform with advanced filtering, cart management, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tags: ["React", "TypeScript", "TailwindCSS", "Redux"],
    categories: ["all", "frontend"],
    featured: true,
    badge: "E-Commerce",
    demo: "https://concavo-demo.vercel.app",
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "Recharts"],
    categories: ["all", "frontend"],
    featured: true,
    badge: "Analytics",
    demo: "https://concavo-demo.vercel.app",
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "3",
    title: "RESTful API Service",
    description:
      "Scalable REST API with authentication, rate limiting, and comprehensive documentation.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    categories: ["all", "backend"],
    featured: true,
    badge: "API",
    demo: "https://concavo-demo.vercel.app",
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "4",
    title: "AI Chatbot Assistant",
    description:
      "Intelligent chatbot powered by machine learning with natural language processing.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["Python", "OpenAI", "LangChain", "FastAPI"],
    categories: ["all", "aiml"],
    featured: true,
    badge: "AI",
    demo: "https://concavo-demo.vercel.app",
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "5",
    title: "Logistics Tracking",
    description:
      "Real-time logistics and delivery tracking system with GPS integration.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    tags: ["React Native", "Node.js", "PostgreSQL", "Maps API"],
    categories: ["all", "mobile", "backend"],
    featured: true,
    badge: "Logistics",
    demo: "https://concavo-demo.vercel.app",
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "6",
    title: "Classroom Booking App",
    description:
      "Streamlined classroom reservation system for educational institutions.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    categories: ["all", "frontend", "backend"],
    badge: "Education",
    demo: "https://concavo-demo.vercel.app",
    code: "https://github.com/yourusername/concavo-banking-app",
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: "⭐" },
  { id: "frontend", label: "Frontend", icon: "⚛️" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "aiml", label: "AI/ML", icon: "🤖" },
  { id: "mobile", label: "Mobile", icon: "📱" },
];

const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(true);
  const { isDarkMode } = useTheme();

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const displayProjects = showAllProjects ? filteredProjects : featuredProjects;

  return (
    <section
      id="projects"
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-[#0A0A0A]" : "bg-[#F5F5F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#E2C275] bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p
            className={`text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A selection of my recent work across different domains
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAllProjects(false);
              }}
              className={`px-5 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#D4AF37] to-[#E2C275] text-black shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                    : isDarkMode
                    ? "text-gray-400 border border-[#D4AF37]/20 hover:text-[#E2C275] hover:border-[#D4AF37]/40"
                    : "text-gray-700 border border-[#0E7490]/20 hover:text-[#0E7490] hover:border-[#0E7490]/40"
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${showAllProjects}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {displayProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-300 group
                  ${
                    isDarkMode
                      ? "bg-gradient-to-br from-[#0D0D0D]/80 to-[#1A1A1A]/90 border-[#D4AF37]/20 hover:border-[#D4AF37]/40"
                      : "bg-white border-[#0E7490]/10 hover:border-[#0E7490]/40"
                  }`}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                  />
                  {project.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#E2C275] text-black px-3 py-1.5 rounded-lg text-sm font-semibold">
                      {project.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`font-bold text-xl mb-2 ${
                      isDarkMode
                        ? "text-white group-hover:text-[#E2C275]"
                        : "text-gray-900 group-hover:text-[#0E7490]"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs border transition-all duration-300 ${
                          isDarkMode
                            ? "text-gray-300 border-[#D4AF37]/20 bg-[#111]/60"
                            : "text-gray-700 border-[#0E7490]/20 bg-[#F9FAFB]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#E2C275] text-black rounded-lg font-medium text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg font-medium text-sm border ${
                        isDarkMode
                          ? "border-[#D4AF37]/30 text-[#E2C275] hover:bg-[#D4AF37]/10"
                          : "border-[#0E7490]/30 text-[#0E7490] hover:bg-[#0E7490]/10"
                      } transition`}
                    >
                      💻 Code
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Toggle Button */}
        {featuredProjects.length < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E2C275] text-black rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              {showAllProjects ? "Show Less Projects" : "View All Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
