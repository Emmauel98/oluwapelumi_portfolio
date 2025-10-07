"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export const metadata = {
  title: "Projects | Oluwapelumi Olamilekan",
  description:
    "Browse projects by Oluwapelumi Olamilekan — web, mobile, backend, and AI-powered solutions built using React.js, React Native, Node.js, and advanced AI tools.",
  keywords: [
    "Software Projects",
    "Frontend Portfolio",
    "React Native Apps",
    "AI Projects",
    "JavaScript Portfolio",
    "Web Developer Projects",
    "Mobile Developer Projects",
  ],
  openGraph: {
    title: "Projects | Oluwapelumi Olamilekan",
    description:
      "A showcase of OluwapelumiU+2019s innovative projects spanning web, mobile, backend, and AI — built for performance, scalability, and impact.",
    url: "https://yourdomain.com/projects",
    images: ["/og-projects.png"],
  },
};

// Define types
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

// Project data
const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform with advanced filtering, cart management, and payment integration",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tags: ["React", "TypeScript", "TailwindCSS", "Redux"],
    categories: ["all", "frontend"],
    featured: true,
    badge: "E-Commerce",
    demo: "https://concavo-demo.vercel.app", // optional
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Next.js", "TypeScript", "Recharts"],
    categories: ["all", "frontend"],
    featured: true,
    badge: "Analytics",
    demo: "https://concavo-demo.vercel.app", // optional
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "3",
    title: "RESTful API Service",
    description:
      "Scalable REST API with authentication, rate limiting, and comprehensive documentation",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    categories: ["all", "backend"],
    featured: true,
    badge: "API",
    demo: "https://concavo-demo.vercel.app", // optional
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "4",
    title: "AI Chatbot Assistant",
    description:
      "Intelligent chatbot powered by machine learning with natural language processing",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["Python", "OpenAI", "LangChain", "FastAPI"],
    categories: ["all", "aiml"],
    featured: true,
    badge: "AI",
    demo: "https://concavo-demo.vercel.app", // optional
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "5",
    title: "Logistics Tracking",
    description:
      "Real-time logistics and delivery tracking system with GPS integration",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    tags: ["React Native", "Node.js", "PostgreSQL", "Maps API"],
    categories: ["all", "mobile", "backend"],
    featured: true,
    badge: "Logistics",
    demo: "https://concavo-demo.vercel.app", // optional
    code: "https://github.com/yourusername/concavo-banking-app",
  },
  {
    id: "6",
    title: "Classroom Booking App",
    description:
      "Streamlined classroom reservation system for educational institutions",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    categories: ["all", "frontend", "backend"],
    badge: "Education",
    demo: "https://concavo-demo.vercel.app", // optional
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
      className={`min-h-screen ${
        isDarkMode ? "bg-black" : "bg-white"
      } py-16 px-4 sm:px-6 lg:px-8`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto`}
          >
            A selection of my recent work across different domains
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 relative w-full max-w-5xl mx-auto perspective-1000"
        >
          <div
            className={`${
              isDarkMode ? "bg-zinc-900/50" : "bg-slate-50"
            }  backdrop-blur-sm rounded-2xl p-2 inline-flex 
          flex-wrap gap-2 border ${
            isDarkMode && "border-zinc-800/50"
          } mx-auto justify-between w-full max-w-4xl`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAllProjects(false);
                }}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-slate-500/70"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Section Header */}
        {!showAllProjects && featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 "
          >
            <span className="text-yellow-400 text-2xl">⭐</span>
            <h2 className="text-white text-2xl font-bold">Featured</h2>
          </motion.div>
        )}

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
                className={`${
                  isDarkMode ? "bg-zinc-900/50" : "bg-slate-50"
                } backdrop-blur-sm border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group`}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {project.badge && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1">
                      <span>🔥</span>
                      <span>{project.badge}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`${
                      isDarkMode ? "text-white" : "text-black"
                    } font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-800/50 text-gray-300 text-xs rounded-full border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay (buttons) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium text-sm hover:bg-zinc-700 transition"
                    >
                      💻 Code
                    </a>
                  )}
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show All/Less Button */}
        {featuredProjects.length < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
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
