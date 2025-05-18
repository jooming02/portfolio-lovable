
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  description: string;
  position: "left" | "right";
}

const TimelineItem = ({
  date,
  title,
  company,
  description,
  position,
}: TimelineItemProps) => {
  return (
    <div
      className="timeline-item relative pb-10 pl-10 md:pl-12"
      data-animate="true"
    >
      <div className="timeline-dot"></div>
      <div className="p-6 bg-card border rounded-lg shadow-sm">
        <div className="flex flex-col gap-1">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded">
            {date}
          </span>
          <h3 className="text-lg font-bold">{title}</h3>
          {company && <p className="text-muted-foreground">{company}</p>}
          <p className="mt-2 text-sm text-card-foreground/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
