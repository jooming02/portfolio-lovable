import { motion, useReducedMotion } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Lanyard from "@/components/effects/lanyard/Lanyard";
import ScrollVelocity from "@/components/effects/text/ScrollVelocity";
import Particles from "@/components/effects/backgrounds/Particles";
import { heroContainer, heroItem } from "@/components/motion/variants";

const HeroSection = () => {
  // Skip hero entrance animation when user prefers reduced motion
  const reduceMotion = useReducedMotion();

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
            {/* Staggered page-load sequence: name → role → bio → buttons → socials */}
            <motion.div
              className="mb-8"
              variants={heroContainer}
              initial={reduceMotion ? "show" : "hidden"}
              animate="show"
            >
              <motion.div variants={heroItem}>
                <AnimatedTitle
                  text="Lau Joo Ming"
                  className="text-4xl/[1.25] md:text-5xl/[1.25] lg:text-6xl/[1.25] font-bold mb-6"
                />
              </motion.div>
              <motion.h2
                variants={heroItem}
                className="text-xl md:text-2xl mb-6 text-muted-foreground"
              >
                Frontend Developer | UI/UX Enthusiast
              </motion.h2>
              <motion.p
                variants={heroItem}
                className="max-w-2xl text-muted-foreground"
              >
                I build accessible, responsive, and performant web applications
                with modern technologies and best practices.
              </motion.p>
              <motion.div
                variants={heroItem}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
              >
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
              </motion.div>
              <motion.div
                variants={heroItem}
                className="flex gap-4 justify-center lg:justify-start mt-8"
              >
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
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Interactive 3D Lanyard */}
          <div className="h-[500px] lg:h-[650px] w-full">
            <Lanyard
              // Camera position in 3D space: [x, y, z]
              // x=0 → centered left/right
              // y=0 → centered up/down
              // z=18 → camera sits 18 units BACK from the scene origin (0,0,0), looking toward the card
              position={[0, 0, 18]}
              // Field of view in degrees — lens "zoom angle"
              // lower (e.g. 15) = narrower view = card looks bigger / more zoomed in
              // higher (e.g. 35) = wider view = card looks smaller / more zoomed out
              fov={20}
              cardInfo={{
                name: "Lau Joo Ming",
                title: "Frontend Developer",
                website: "github.com/jooming02",
              }}
            />
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
