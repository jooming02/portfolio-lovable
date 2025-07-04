import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { BackgroundGradientAnimation } from "@/components/ui/Backgrounds/BackgroundGradientAnimation";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(25, 0, 25)"
        gradientBackgroundEnd="rgb(35, 0, 35)"
        firstColor="255, 20, 147"
        secondColor="199, 21, 133"
        thirdColor="219, 112, 147"
        fourthColor="255, 105, 180"
        size="14%"
        fullHeight={false}
        containerClassName="absolute inset-0 opacity-18"
      >
        <div className="max-w-7xl mx-auto relative z-10">
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
                date="Dec 2024 - Present"
                title="Trainee Analyst Programmer"
                company="Public Bank Group"
                description={[
                  "PresentContributed to the migration of legacy systems from Lotus Notes to .NET.", 
                  " Developed proficiency in .NET framework, C#, and SQL databases through practical implementation."
                ]}
                position="left"
              />
              <TimelineItem
                date="Oct 2023 - Dec 2023"
                title="Frontend Web Developer Intern"
                company="Sunway Group"
                description={[
                  "Created the interactive prototype of a Learning Management System (LMS) using Figma", 
                  " Participated in the User Acceptance Testing (UAT) process and presented the prototype to stakeholders for continuous improvement",
                  " Developed the LMS frontend using Svelte, Svelte Kit, and Bootstrap, creating responsive and dynamic web pages that enhanced the user learning experience"
                ]}
                position="left"
              />

              <TimelineItem
                date="2021 - 2024"
                title="Bachelor of Computer Science "
                company="Asia Pacific University of Technology and Innovation (APU / APIIT)    "
                description={["GPA: 3.59/4.00 (First Class Honours)"]}
                position="left"
              />
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
};

export default ExperienceSection;
