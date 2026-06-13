
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { Timeline } from "@/components/ui/timeline";
import { experience } from "@/data/experience";

const ExperienceSection = () => {
  // Map portfolio data → Aceternity Timeline format (sticky title + card content)
  const timelineData = experience.map((entry) => ({
    title: entry.date,
    content: (
      <TimelineItem
        date={entry.date}
        title={entry.title}
        company={entry.company}
        companyLogo={entry.companyLogo}
        description={entry.description}
        images={entry.images}
        skills={entry.skills}
      />
    ),
  }));

  return (
    <section id="experience" className="relative py-20 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="My Journey"
          subtitle="Professional experience and education"
          align="left"
        />

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
