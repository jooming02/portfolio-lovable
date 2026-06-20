
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Stagger from "@/components/motion/Stagger";
import { scaleIn } from "@/components/motion/variants";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.title} variants={scaleIn}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ProjectsSection;
