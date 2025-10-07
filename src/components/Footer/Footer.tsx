"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const { isDarkMode } = useTheme();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Emmauel98/",
      src: "/github.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/oluwapelumi-olamilekan-289a92222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      src: "/linkedin.svg",
    },
    {
      name: "Twitter",
      href: "https://x.com/olami_js?s=21",
      src: "/twitter.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/olami_js?igsh=Z2VkZnZvOWM2bmd4&utm_source=qr",
      src: "/instagram.svg",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@salaudeenoluwapelumi6092?si=IPNVlEN-OU4l1lHx",
      src: "/youtube.svg",
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-all duration-500 ${
        isDarkMode ? "bg-[#0A0A0C] text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      {/* Glowing gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-24 w-64 h-64 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-24 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10 blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Oluwapelumi
            </h2>
            <p className="text-sm sm:text-base font-medium opacity-80">
              Software & AI Engineer
            </p>
            <p className="text-sm leading-relaxed opacity-70 max-w-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeInUp delay-150">
            <h3
              className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  onClick={() => {
                    const element = document.getElementById(
                      link.name.toLowerCase()
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative w-fit text-sm sm:text-base font-medium transition-all duration-300 group hover:cursor-pointer ${
                    isDarkMode
                      ? "text-slate-400 hover:text-purple-400"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      hoveredLink === link.name ? "w-full" : "w-0"
                    }`}
                  ></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-4 animate-fadeInUp delay-300">
            <h3
              className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.name}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode
                      ? "bg-slate-900/50 border-slate-700 hover:border-purple-500/50 hover:bg-slate-800/50"
                      : "bg-slate-100 border-slate-300 hover:border-blue-400/50 hover:bg-slate-200/50"
                  }`}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={26}
                    height={26}
                    className={`object-contain transition-transform duration-300 ${
                      hoveredSocial === social.name ? "scale-110" : ""
                    } ${isDarkMode ? "invert brightness-90" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            isDarkMode ? "border-slate-800/50" : "border-slate-300/50"
          } mb-6`}
        ></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-3 animate-fadeInUp delay-450">
          <p
            className={`text-sm ${
              isDarkMode ? "text-slate-500" : "text-slate-600"
            }`}
          >
            © 2025 Oluwapelumi Olamilekan — Built with{" "}
            <Heart className="inline w-4 h-4 text-red-500 animate-pulse fill-current" />{" "}
            and React + Next.js.
          </p>
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
