import AboutSection from "@/components/AboutMe/AboutMe";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import HeroSection from "@/components/HeroSection/HeroSection";
import SkillsShowcase from "@/components/Skills/SkillSet";
import { ThemeProvider } from "@/components/ThemeProvider";
import WorkExperience from "@/components/WorkExperience/WorkExperience";


export default function Home() {
  return (
    <ThemeProvider>
      <HeroSection />
      <AboutSection />
      <SkillsShowcase />
      <FeaturedProjects />
      <WorkExperience />
      <GetInTouch />
      <Footer />
    </ThemeProvider>
  );
}


