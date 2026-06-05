
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
