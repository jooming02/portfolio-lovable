
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/data/experience";

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
          <div className="timeline-line absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20">
            <div className="timeline-line-progress absolute top-0 w-full bg-primary" style={{ height: "0%" }}></div>
          </div>

          <div className="pl-5">
            {experience.map((entry) => (
              <TimelineItem key={`${entry.date}-${entry.title}`} {...entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
