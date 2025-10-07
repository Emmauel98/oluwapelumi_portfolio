'use client'

import React, { useState } from 'react';
import { Send, Github, Linkedin, Twitter, Mail, CheckCircle } from 'lucide-react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Get In Touch
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind? Let&apos;s work together to create something amazing
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="w-full animate-slideInLeft">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-800/50 shadow-2xl hover:border-slate-700/50 transition-all duration-300">
              <div className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-700"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-700"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-slate-700"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={isSubmitted}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="w-full space-y-8 animate-slideInRight">
            {/* Email Card */}
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-800/50 shadow-2xl hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:oluwapelumi@example.com" 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    oluwapelumi@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-800/50 shadow-2xl hover:border-slate-700/50 transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-6">Connect with me</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300 mb-2" />
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors duration-300">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 mb-2" />
                  <span className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110 group"
                >
                  <Twitter className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 mb-2" />
                  <span className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors duration-300">Twitter</span>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-green-800/30 shadow-2xl hover:border-green-700/50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Available for work</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s create something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default GetInTouch;