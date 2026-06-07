import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import ClickSpark from "@/components/effects/ClickSpark";
import { primaryColor } from "@/lib/colors";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ClickSpark wraps the page — spark effect on click (kept per preference) */}
      <ClickSpark
        sparkColor={primaryColor}
        sparkSize={10}
        sparkRadius={30}
        sparkCount={8}
        duration={800}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
        <ScrollToTop />
      </ClickSpark>
    </div>
  );
};

export default Index;
