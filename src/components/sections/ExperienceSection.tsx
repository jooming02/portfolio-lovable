
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import Stagger from "@/components/motion/Stagger";
import { viewport } from "@/components/motion/variants";
import { experience } from "@/data/experience";

const ExperienceSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Journey"
          subtitle="Professional experience and education"
          align="left"
        />

        <div className="relative pl-5">
          {/* Vertical line grows downward when section scrolls into view */}
          <motion.div
            className="absolute left-5 top-0 bottom-0 w-0.5 bg-primary/20 origin-top"
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewport}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <Stagger slow className="relative">
            {experience.map((entry) => (
              <TimelineItem
                key={`${entry.date}-${entry.title}`}
                {...entry}
              />
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
