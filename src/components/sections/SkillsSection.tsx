
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Skillsss"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard name="HTML/CSS" icon="html.svg" />
          <SkillCard name="JavaScript" icon="javascript.svg" />
          <SkillCard name="TypeScript" icon="typescript.svg" />
          <SkillCard name="React" icon="react.svg" />
          <SkillCard name="Next.js" icon="nextjs.jpg" />
          <SkillCard name="Tailwind CSS" icon="tailwind.svg" />
          <SkillCard name="Node.js" icon="nodejs.svg" />
          <SkillCard name="Svelte" icon="svelte.svg" />
          <SkillCard name=".NET Core" icon="net.svg" />
          <SkillCard name="MongoDB" icon="mongodb.svg" />
          <SkillCard name="SQL" icon="sql.svg" />
          <SkillCard name="Git" icon="git.svg" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
