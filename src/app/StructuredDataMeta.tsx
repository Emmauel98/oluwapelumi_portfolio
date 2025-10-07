export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Oluwapelumi Olamilekan",
    jobTitle: "Frontend, Mobile & AI Engineer",
    url: "https://yourdomain.com",
    sameAs: [
      "https://github.com/Emmauel98/",
      "https://www.linkedin.com/in/oluwapelumi-olamilekan-289a92222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "https://x.com/olami_js?s=21",
      "https://www.instagram.com/olami_js?igsh=Z2VkZnZvOWM2bmd4&utm_source=qr",
      "https://youtube.com/@salaudeenoluwapelumi6092?si=IPNVlEN-OU4l1lHx"
    ],
    knowsAbout: [
      "React.js",
      "React Native",
      "Node.js",
      "NestJS",
      "Next.js",
      "AI Integration",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Concova, LoadWay, GDSC OAU",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
