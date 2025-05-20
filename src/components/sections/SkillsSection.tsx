
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard name="JavaScript" icon="javascript" />
          <SkillCard name="TypeScript" icon="typescript" />
          <SkillCard name="React" icon="react" />
          <SkillCard name="Next.js" icon="nextjs" />
          <SkillCard name="Node.js" icon="nodejs" />
          <SkillCard name="HTML/CSS" icon="html" />
          <SkillCard name="Tailwind CSS" icon="tailwind" />
          <SkillCard name="SQL" icon="sql" />
          <SkillCard name="MongoDB" icon="mongodb" />
          <SkillCard name="Git" icon="git" />
          <SkillCard name="Docker" icon="docker" />
          <SkillCard name="AWS" icon="aws" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
