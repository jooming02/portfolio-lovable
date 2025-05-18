import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import AnimatedTitle from "@/components/AnimatedTitle";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import TimelineItem from "@/components/TimelineItem";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { setupTimelineAnimation } from "@/lib/utils";

const Index = () => {
  // Start animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('[data-animate="true"]');
    animatedElements.forEach((el) => observer.observe(el));

    // Setup timeline animation
    setupTimelineAnimation();

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:px-6">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center text-center">
          <div className="mb-8">
            <span className="inline-block text-lg md:text-xl mb-4">
              <span className="wave-hand animate-wave">👋</span> Hi there, I'm
            </span>
            <AnimatedTitle
              text="Jane Developer"
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="Learn more about my background and approach to development"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center" data-animate="true">
            <div className="space-y-4">
              <p>
                Hi, I'm a passionate web developer with 5+ years of experience building modern web applications. 
                My journey in tech started when I built my first website at the age of 15, 
                and I've been hooked on creating digital experiences ever since.
              </p>
              <p>
                I specialize in React, TypeScript, and modern frontend frameworks, 
                but I'm also comfortable working with backend technologies. 
                I love learning new technologies and techniques to improve my craft.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-60 h-60 rounded-full bg-gradient-to-br from-primary via-primary/60 to-primary/20 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-background flex items-center justify-center text-7xl">
                  👩‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="My Projects"
            subtitle="Check out some of my recent work"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment integration."
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A productivity app that helps users organize tasks, set priorities, and track their progress with beautiful visualizations."
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]}
              imageUrl="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A weather application that provides real-time forecasts, location-based suggestions, and historical weather data."
              tags={["React", "Redux", "OpenWeather API", "Chart.js"]}
              imageUrl="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Recipe Finder"
              description="A web app that helps users discover recipes based on available ingredients, dietary restrictions, and cuisine preferences."
              tags={["Vue.js", "Firebase", "Tailwind CSS", "API"]}
              imageUrl="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Budget Tracker"
              description="A financial app that helps users track income, expenses, and savings goals with intuitive visualizations."
              tags={["React", "TypeScript", "D3.js", "Firebase"]}
              imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff3f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website showcasing projects, skills, and experience with dark mode support and smooth animations."
              tags={["React", "Tailwind CSS", "Framer Motion"]}
              imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              liveUrl="https://example.com"
              githubUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard name="JavaScript" icon="javascript" />
            <SkillCard name="TypeScript" icon="typescript" />
            <SkillCard name="React" icon="react" />
            <SkillCard name="Next.js" icon="nextjs" />
            <SkillCard name="Node.js" icon="nodejs" />
            <SkillCard name="HTML/CSS" icon="html" />
            <SkillCard name="Tailwind CSS" icon="tailwind" />
            <SkillCard name="SQL" icon="sql" />
            <SkillCard name="MongoDB" icon="mongodb" />
            <SkillCard name="Git" icon="git" />
            <SkillCard name="Docker" icon="docker" />
            <SkillCard name="AWS" icon="aws" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="My Journey"
            subtitle="Professional experience and education"
            align="left"
          />

          <div className="timeline-container relative">
            {/* Timeline vertical line */}
            <div className="timeline-line absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20">
              <div className="timeline-line-progress absolute top-0 w-full bg-primary" style={{ height: "0%" }}></div>
            </div>
            
            <div className="pl-5">
              <TimelineItem
                date="2021 - Present"
                title="Senior Frontend Developer"
                company="TechCorp Inc."
                description="Lead development of multiple web applications using React and TypeScript. Implemented CI/CD pipelines and mentored junior developers."
                position="left"
              />
              <TimelineItem
                date="2018 - 2021"
                title="Full Stack Developer"
                company="WebSolutions LLC"
                description="Developed full-stack applications using React, Node.js, and PostgreSQL. Collaborated with UX designers to implement responsive designs."
                position="left"
              />
              <TimelineItem
                date="2016 - 2018"
                title="Junior Developer"
                company="StartupHub"
                description="Built and maintained frontend components using React. Participated in code reviews and implemented automated testing."
                position="left"
              />
              <TimelineItem
                date="2012 - 2016"
                title="B.Sc. Computer Science"
                company="Tech University"
                description="Studied algorithms, data structures, and software engineering. Completed capstone project on real-time web applications."
                position="left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to work together? Send me a message!"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-animate="true">
              <div>
                <h3 className="text-xl font-medium mb-2">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through the form or directly via email.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <span>hello@example.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/janedev
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-4 w-4" />
                  </Button>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/janedev
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Index;
