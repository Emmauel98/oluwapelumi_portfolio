"use client";

import React, { useState } from "react";
import { Send, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-br from-[#0A0A0C] via-[#000000] to-[#1A1A1A]"
          : "bg-gradient-to-br from-[#F0F9FF] via-[#F3E8FF] to-[#FEF2F2]"
      } flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden`}
      id="contact"
    >
      {/* Animated background elements */}
      {/* Soft background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-40 animate-pulse ${
            isDarkMode
              ? "bg-gradient-to-r from-[#D4AF37]/30 to-[#E2C275]/20"
              : "bg-gradient-to-r from-[#93C5FD]/40 to-[#E9D5FF]/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full blur-3xl opacity-30 animate-pulse delay-700 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#E2C275]/20 to-[#D4AF37]/20"
              : "bg-gradient-to-r from-[#F9A8D4]/30 to-[#A5B4FC]/30"
          }`}
        ></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fadeIn">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-gradient ${
              isDarkMode
                ? "bg-gradient-to-r from-[#D4AF37] to-[#E2C275] text-transparent bg-clip-text"
                : "bg-gradient-to-r from-[#0EA5E9] via-[#7C3AED] to-[#EC4899] text-transparent bg-clip-text"
            }`}
          >
            Get In Touch
          </h1>
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto px-4`}
          >
            Have a project in mind? Let&apos;s work together to create something
            amazing
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start relative">
          {/* effect */}

          <div
            className="absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-r animate-pulse
           from-[#D4AF37] to-[#E2C275] hover:from-[#E2C275] blur-3xl top-0 left-[20rem]"
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              // repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-r
           from-[#D4AF37] to-[#E2C275] hover:from-[#E2C275] blur-3xl top-0 right-0"
          ></motion.div>

          {/* Contact Form */}
          <div className="w-full animate-slideInLeft">
            <div
              className={` ${
                isDarkMode
                  ? "bg-gradient-to-br from-[#111]/80 via-[#1A1A1A]/70 to-[#0F0F0F]/80 border-[#D4AF37]/20"
                  : "bg-gradient-to-br from-[#FFFFFF]/80 via-[#F3E8FF]/70 to-[#E0F2FE]/70 border-[#E0E7FF]/50"
              } bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 
            rounded-2xl p-6 sm:p-8 border border-slate-800/50  hover:border-slate-700/50 transition-all
            duration-300 `}
            >
              <div className="space-y-6" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-slate-300" : "text-black"
                    } `}
                  >
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
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? "bg-slate-950/50" : "bg-white"
                    } ${
                      isDarkMode ? "border-slate-800" : "border-slate-300 "
                    } border  rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-700`}
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${
                      isDarkMode ? "text-slate-300" : "text-black"
                    } mb-2`}
                  >
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
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? "bg-slate-950/50" : "bg-white"
                    } ${
                      isDarkMode ? "border-slate-800" : "border-slate-300 "
                    } border  rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-700`}
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      isDarkMode ? "text-slate-300" : "text-black"
                    } mb-2`}
                  >
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
                    className={`w-full px-4 py-3 ${
                      isDarkMode ? "bg-slate-950/50" : "bg-white"
                    } ${
                      isDarkMode ? "border-slate-800" : "border-slate-300 "
                    } border  rounded-lg text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none group-hover:border-slate-700`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={isSubmitted}
                  className={`w-full py-3 px-6 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#E2C275] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                      : "bg-gradient-to-r from-[#0EA5E9] to-[#7C3AED] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]"
                  } text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/50`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isHovered ? "translate-x-1 -translate-y-1" : ""
                        }`}
                      />
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
            <div
              className={` ${
                isDarkMode
                  ? "bg-gradient-to-br from-[#111]/80 to-[#1A1A1A]/80 border-[#D4AF37]/20"
                  : "bg-gradient-to-br from-[#FFFFFF]/80 to-[#E0F2FE]/80 border-[#E0E7FF]/50"
              } backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-800/50 shadow-2xl hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-[#D4AF37] to-[#E2C275]"
                      : "bg-gradient-to-br from-[#0EA5E9] to-[#7C3AED]"
                  } rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Mail className={`w-7 h-7  text-white`} />
                </div>
                <div>
                  <h3
                    className={`${
                      isDarkMode ? "text-white" : "text-black"
                    } font-semibold text-lg mb-1`}
                  >
                    Email
                  </h3>
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
            <div
              className={`${
                isDarkMode ? "bg-[#0A0A0C]/50" : "bg-white/50"
              } backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-800/50 shadow-2xl hover:border-slate-700/50 transition-all duration-300`}
            >
              <h3
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                }  font-semibold text-lg mb-6`}
              >
                Connect with me
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://github.com/Emmauel98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 ${
                    isDarkMode ? "bg-slate-950/50" : "bg-slate-200"
                  } rounded-xl 
                    border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 
                    transition-all duration-300 transform hover:scale-110 group`}
                >
                  {/* <Github className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300 mb-2" /> */}
                  <Image
                    src={"/github.svg"}
                    alt={"github"}
                    width={28}
                    height={28}
                    className={`object-contain ${
                      isDarkMode ? "invert brightness-90" : ""
                    }`}
                  />
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors duration-300">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwapelumi-olamilekan-289a92222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 ${
                    isDarkMode ? "bg-slate-950/50" : "bg-slate-200"
                  } rounded-xl border border-slate-800
                     hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 transform hover:scale-110 group`}
                >
                  {/* <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 mb-2" /> */}
                  <Image
                    src={"/linkedin.svg"}
                    alt={"linkedin"}
                    width={28}
                    height={28}
                    className={`object-contain ${
                      isDarkMode ? "invert brightness-90" : ""
                    }`}
                  />
                  <span className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/olami_js?igsh=Z2VkZnZvOWM2bmd4&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 ${
                    isDarkMode ? "bg-slate-950/50" : "bg-slate-200"
                  } 
                  rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300
                   transform hover:scale-110 group`}
                >
                  <Image
                    src={"/instagram.svg"}
                    alt={"instagram"}
                    width={28}
                    height={28}
                    className={`object-contain ${
                      isDarkMode ? "invert brightness-90" : ""
                    }`}
                  />
                  <span className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div
              className={`${
                isDarkMode
                  ? "bg-gradient-to-r from-[#181123]/80 to-[#091A20]/80"
                  : "bg-gradient-to-r from-[#F5EEFE ]/80 to-[#E7F7FC]/80"
              } backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-grey-800/70 shadow-2xl
             hover:border-grey-700/50 transition-all duration-300`}
            >
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3
                    className={`${
                      isDarkMode ? "text-white" : "text-black"
                    } font-semibold text-lg mb-2`}
                  >
                    Available for work
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    I&apos;m currently available for freelance projects and
                    full-time opportunities. Let&apos;s create something amazing
                    together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
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
          0%,
          100% {
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
      `}</style> */}
    </section>
  );
};

export default GetInTouch;
