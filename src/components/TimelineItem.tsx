import { motion } from "framer-motion";
import { slideFromLine } from "@/components/motion/variants";

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  description: string[];
  position: "left" | "right";
}

const TimelineItem = ({
  date,
  title,
  company,
  description,
  position, // reserved for future left/right layout
}: TimelineItemProps) => {
  return (
    // Slides in from the timeline line when parent <Stagger> triggers
    <motion.div
      className="relative pb-10 pl-10 md:pl-12"
      variants={slideFromLine}
    >
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[7px] top-6 z-10" />
      <div className="p-6 bg-card border rounded-lg shadow-sm">
        <div className="flex flex-col gap-1">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded">
            {date}
          </span>
          <h3 className="text-lg font-bold">{title}</h3>
          {company && <p className="text-muted-foreground">{company}</p>}
          {/* <p className="mt-2 text-sm text-card-foreground/80">{description}</p> */}
          <ul className="mt-2 text-sm text-card-foreground/80 list-disc list-inside space-y-1">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
