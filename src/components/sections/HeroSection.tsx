import AnimatedTitle from "@/components/AnimatedTitle";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import ThreeCharacter from "@/components/ThreeCharacter";
import ScrollVelocity from "@/components/ui/TextAnimations/ScrollVelocity";
import Particles from "@/components/ui/Backgrounds/Particles";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#9D05F5", "#F505E1"]} //purple color and pink
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true} // Set to true for alpha particles (make it transparent)
          disableRotation={false}
        />
      </div>
      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-block text-lg md:text-xl mb-4">
                Hi, I'm
              </span>
              <AnimatedTitle
                text="Lau Joo Ming"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              />
              <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
                Frontend Developer | UI/UX Enthusiast
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                I build accessible, responsive, and performant web applications
                with modern technologies and best practices.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <Button variant="gradientButton" asChild>
                  {/* download can be used to directly download */}
                  {/* <a href="/public/CV_LauJooMing.pdf" download> Resume </a> */}

                  {/* Open the resume in next tab */}
                  <a
                    href="/CV_LauJooMing.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
                <Button variant="gradientOutline" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a
                  href="https://github.com/jooming02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a
                  href="https://www.linkedin.com/in/joo-ming-lau-974804235/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a href="mailto:laujm02@hotmail.com">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - 3D Character */}
          <div className="h-[400px] lg:h-[600px] w-full">
            <ThreeCharacter />
          </div>
        </div>
      </div>
      {/* <ScrollVelocity
          texts={['React Bits', 'Scroll Down']} 
          // velocity={velocity} 
          className="custom-scroll-text"
        /> */}
    </section>
  );
};

export default HeroSection;
