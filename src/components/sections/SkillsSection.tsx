
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import SkillsSubSection from "./SkillsSubSection";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        <SkillsSubSection heading="Frontend">
          <SkillCard name="React" icon="react.svg" />
          {/* <SkillCard name="Next.js" icon="nextjs.jpg" /> */}
          <SkillCard name="JavaScript" icon="javascript.svg" />
          <SkillCard name="TypeScript" icon="typescript.svg" />
          <SkillCard name="Svelte" icon="svelte.svg" />
        </SkillsSubSection>

        <SkillsSubSection heading="Backend">
          <SkillCard name="Node.js" icon="nodejs.svg" />
          <SkillCard name=".NET Core" icon="net.svg" />
          <SkillCard name="MongoDB" icon="mongodb.svg" />
          <SkillCard name="SQL" icon="sql.svg" />
        </SkillsSubSection>

        <SkillsSubSection heading="Tools">
          <SkillCard name="Tailwind CSS" icon="tailwind.svg" />
          <SkillCard name="Figma" icon="figma.svg" />
          <SkillCard name="Git" icon="git.svg" />
        </SkillsSubSection>
      </div>
    </section>
  );
};

export default SkillsSection;
