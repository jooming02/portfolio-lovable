
import AnimatedTitle from "@/components/AnimatedTitle";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:px-6">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <span className="inline-block text-lg md:text-xl mb-4">
            <span className="wave-hand animate-wave">👋</span> Hi there, I'm
          </span>
          <AnimatedTitle
            text="React Developer"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
          <h2 className="text-xl md:text-2xl mb-6 text-muted-foreground">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I build accessible, responsive, and performant web applications 
            with modern technologies and best practices.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/jooming02" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/joo-ming-lau-974804235/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:laujm02@hotmail.com">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
