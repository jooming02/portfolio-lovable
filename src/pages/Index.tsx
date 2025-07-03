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
import ClickSpark from "../components/ui/ClickSpark";
import Particles from "@/components/ui/Backgrounds/Particles";
import { BackgroundGradientAnimation } from "@/components/ui/Backgrounds/BackgroundGradientAnimation";
import { primaryColor } from "@/lib/colors";

const Index = () => {
  // Initialize animations
  useAnimations();

  return (
    <div className="min-h-screen flex flex-col">
      <ClickSpark
        sparkColor={primaryColor}
        sparkSize={10}
        sparkRadius={30}
        sparkCount={8}
        duration={800}
      >
        <Navbar />
        <HeroSection />

        {/* <BackgroundGradientAnimation className="z-0">
          <div className="relative z-10"> */}
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
            <FooterSection />
          {/* </div> */}
        {/* </BackgroundGradientAnimation> */}

        <ScrollToTop />
      </ClickSpark>
    </div>
  );
};

export default Index;
