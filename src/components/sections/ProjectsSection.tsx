
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;
