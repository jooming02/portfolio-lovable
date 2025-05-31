interface SkillsSubSectionProps {
  heading: string;
  children: React.ReactNode;
}

const SkillsSubSection = ({ heading, children }: SkillsSubSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl mb-6">{heading}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6">
        {children}
      </div>
    </div>
  );
};

export default SkillsSubSection;
