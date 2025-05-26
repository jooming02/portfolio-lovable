
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
            title="MonitorCare"
            description="A mHealth-based NCD (Non-Communicable Diseases) Monitoring System utilizing data from body tests to detect andprevent NCDs at an early stage."
            tags={["React Native", "Node.js", "MongoDB", "Express.js", "XGBoost"]}
            imageUrl="/projects/monitorcare.png"
            // liveUrl="https://example.com"
            githubUrl="https://github.com/jooming02/fyp_monitorcare"
          />
          <ProjectCard
            title="VerifyMy"
            description="An app that shows the digital form of identification which provides a seamless, secure, and private way to accessgovernment e-services using blockchain technology"
            tags={["Figma"]}
            imageUrl="/projects/verifymy.png"
            liveUrl="https://www.figma.com/proto/cgy2n56w7qVCOJulIGNF7M/VerifyMy?node-id=175-1630&scaling=scale-down&page-id=0%3A1&starting-point-node-id=175%3A1630&show-proto-sidebar=1"
          />
          <ProjectCard
            title="HeyLaw"
            description="A web application that simplifies access to Malaysian legal information by providing categorized and searchable law summaries in a user-friendly interface."
            tags={["Figma"]}
            imageUrl="/projects/heylaw.png"
            liveUrl="https://www.figma.com/proto/6ViFgcTwNO71KwSUFjtNPb/Heylaws?node-id=409-281&p=f&t=CvtT7P560C4YCql3-1&scaling=scale-down&content-scaling=fixed&page-id=205%3A1341&starting-point-node-id=409%3A281&show-proto-sidebar=1"
          />
          {/* <ProjectCard
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
          /> */}
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio website showcasing projects, skills, and experience with dark mode support and smooth animations."
            tags={["React", "Tailwind CSS", "shadcn-ui", "TypeScript"]}
            imageUrl="/projects/portfolio.png"
            liveUrl="https://laujooming.lovable.app/"
            githubUrl="https://github.com/jooming02/portfolio-lovable"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
