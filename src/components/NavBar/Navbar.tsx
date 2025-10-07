'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/components/ThemeProvider'; // adjust path as needed



const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems: string[] = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav
      className={`relative z-50 px-6 py-6 lg:px-12 transition-colors duration-300 ${
        isDarkMode ? 'bg-black/50' : 'bg-white/50'
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          Oluwapelumi
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-300 text-sm ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-black'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Theme Toggle Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
          }`}
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden p-2"
          whileTap={{ scale: 0.95 }}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
