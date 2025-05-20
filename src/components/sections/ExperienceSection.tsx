
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";

const ExperienceSection = () => {
  return (
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
  );
};

export default ExperienceSection;
