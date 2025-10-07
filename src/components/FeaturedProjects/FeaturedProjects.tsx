'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
}

// Project data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with advanced filtering, cart management, and payment integration',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Redux'],
    categories: ['all', 'frontend'],
    featured: true,
    badge: 'E-Commerce'
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Real-time analytics dashboard with interactive charts and data visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Recharts'],
    categories: ['all', 'frontend'],
    badge: 'Analytics'
  },
  {
    id: '3',
    title: 'RESTful API Service',
    description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    categories: ['all', 'backend'],
    badge: 'API'
  },
  {
    id: '4',
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by machine learning with natural language processing',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
    categories: ['all', 'aiml'],
    featured: true,
    badge: 'AI'
  },
  {
    id: '5',
    title: 'Logistics Tracking',
    description: 'Real-time logistics and delivery tracking system with GPS integration',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Maps API'],
    categories: ['all', 'mobile', 'backend'],
    badge: 'Logistics'
  },
  {
    id: '6',
    title: 'Classroom Booking App',
    description: 'Streamlined classroom reservation system for educational institutions',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    categories: ['all', 'frontend', 'backend'],
    badge: 'Education'
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: '⭐' },
  { id: 'frontend', label: 'Frontend', icon: '⚛️' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'aiml', label: 'AI/ML', icon: '🤖' },
  { id: 'mobile', label: 'Mobile', icon: '📱' }
];

const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = projects.filter(project => 
    project.categories.includes(activeCategory)
  );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const displayProjects = showAllProjects ? filteredProjects : featuredProjects;

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A selection of my recent work across different domains
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-2 inline-flex flex-wrap gap-2 border border-zinc-800/50 mx-auto justify-center w-full max-w-4xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAllProjects(false);
                }}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-zinc-800/50'
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
            className="flex items-center gap-2 mb-6"
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
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition-colors">
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
              {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
            </button>
          </motion.div>
        )}

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

export default FeaturedProjects;