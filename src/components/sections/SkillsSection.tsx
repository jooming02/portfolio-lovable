
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import SkillsSubSection from "./SkillsSubSection";
import { skillCategories } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 px-4 md:px-6 overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-[8%] top-[10%] h-64 w-64 rounded-full bg-primary/[0.07] blur-[100px]" />
        <div className="absolute bottom-[15%] left-[-5%] h-56 w-56 rounded-full bg-primary/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        {skillCategories.map((category) => (
          <SkillsSubSection key={category.heading} heading={category.heading}>
            {category.skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </SkillsSubSection>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
