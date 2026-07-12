import { Children } from "react";
import { motion } from "framer-motion";
import Stagger from "@/components/motion/Stagger";
import { popIn } from "@/components/motion/variants";

interface SkillsSubSectionProps {
  heading: string;
  children: React.ReactNode;
}

const SkillsSubSection = ({ heading, children }: SkillsSubSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-display text-lg text-muted-foreground mb-6">{heading}</h3>
      <Stagger className="grid grid-cols-3 gap-2.5 sm:grid-cols-[repeat(auto-fill,120px)] sm:gap-3">
        {Children.map(children, (child) => (
          <motion.div
            key={(child as React.ReactElement).key}
            variants={popIn}
          >
            {child}
          </motion.div>
        ))}
      </Stagger>
    </div>
  );
};

export default SkillsSubSection;
