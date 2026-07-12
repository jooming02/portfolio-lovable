
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
        type={entry.type}
        description={entry.description}
        images={entry.images}
        skills={entry.skills}
      />
    ),
  }));

  return (
    <section id="experience" className="relative py-16 px-4 md:py-20 md:px-6">
      {/* Subtle atmosphere — depth without competing with hero particles */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-[10%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="My Journey"
          subtitle="Professional experience and education"
          align="center"
        />

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
