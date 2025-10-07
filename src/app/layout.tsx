import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredDataCom from "@/app/StructuredDataMeta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oluwapelumi Olamilekan | Software & AI Engineer",
  description:
    "IU+2019m a Software and AI Product Engineer passionate about building intelligent, scalable, and user-centered digital solutions. I specialize in Frontend, Backend, Mobile, and AI engineering, with hands-on expertise in JavaScript, TypeScript, React.js, React Native, Node.js and modern AI/ML technologies.",
  keywords: [
    "Oluwapelumi Olamilekan",
    "Frontend Developer",
    "Mobile Engineer",
    "React Native Developer",
    "Backend Developer",
    "Backend Engineer",
    "Web Developer",
    "React.js Developer",
    "AI Engineer",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: "Oluwapelumi Olamilekan | Frontend, Mobile & AI Engineer",
    description:
      "Building modern, interactive web and mobile solutions that solve real-world problems.",
    url: "https://yourdomain.com",
    siteName: "Oluwapelumi Olamilekan Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oluwapelumi Olamilekan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwapelumi Olamilekan | Software & AI Engineer",
    description:
      "Software & AI Engineer creating digital solutions with React, React Native, Node.js & AI tools.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  icons: {
    icon: "/ola.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <head>
          <StructuredDataCom />
        </head>
        {children}
      </body>
    </html>
  );
}
