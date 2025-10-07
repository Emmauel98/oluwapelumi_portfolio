'use client'

import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com', 
      icon: Github,
      hoverColor: 'hover:text-purple-400'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: Linkedin,
      hoverColor: 'hover:text-purple-400'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com', 
      icon: Twitter,
      hoverColor: 'hover:text-purple-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Oluwapelumi
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Frontend, Mobile & AI Engineer
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 animate-fadeInUp delay-150">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-slate-400 hover:text-purple-400 transition-all duration-300 text-sm sm:text-base w-fit group"
                >
                  <span className="relative">
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                        hoveredLink === link.name ? 'w-full' : 'w-0'
                      }`}
                    ></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4 animate-fadeInUp delay-300">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`w-12 h-12 flex items-center justify-center bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:border-purple-500/50 hover:bg-slate-800/50`}
                    aria-label={social.name}
                  >
                    <Icon 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredSocial === social.name ? 'scale-110' : ''
                      }`} 
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 mb-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeInUp delay-450">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2025 Oluwapelumi Olamilekan. Built with{' '}
            <Heart className="inline w-4 h-4 text-red-500 animate-pulse fill-current" />{' '}
            and React.
          </p>
          
          {/* Optional: Built with Polymet badge */}
          <div className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 px-4 py-2 rounded-lg cursor-pointer transform hover:scale-105">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 2L3 9l10.5 7L24 9z"/>
            </svg>
            <span className="text-white text-xs font-semibold">Built with Polymet</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-150 {
          animation-delay: 150ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-450 {
          animation-delay: 450ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </footer>
  );
};

export default Footer;