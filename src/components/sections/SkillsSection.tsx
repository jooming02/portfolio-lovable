
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import SkillsSubSection from "./SkillsSubSection";
import { skillCategories } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-accent/30">
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
