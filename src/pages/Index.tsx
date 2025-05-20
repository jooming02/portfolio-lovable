
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import useAnimations from "@/hooks/useAnimations";

const Index = () => {
  // Initialize animations
  useAnimations();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
