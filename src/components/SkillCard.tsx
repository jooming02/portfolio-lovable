import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface SkillCardProps {
  name: string;
  icon: string; // this should be the image file name, e.g., "react.png"
  className?: string;
}

const SkillCard = ({ name, icon, className }: SkillCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card
          className={cn(
            "overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent cursor-pointer",
            className
          )}
          data-animate="true"
        >
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div className="mb-4 transition-all duration-300 group-hover:scale-110">
              <img
                src={`/logo/${icon}`} // your images should be in `public/skills`
                alt={name}
                className="h-10 w-10 object-contain"
              />
            </div>
            <h3 className="font-medium text-center">{name}</h3>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex justify-between space-x-4">
          <div>
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {name === "JavaScript" && "Modern JavaScript including ES6+ features"}
              {name === "TypeScript" && "Static typing for JavaScript"}
              {name === "React" && "Component-based UI library"}
              {name === "Next.js" && "React framework with SSR/SSG"}
              {name === "Node.js" && "JavaScript runtime for server-side applications"}
              {name === "HTML/CSS" && "Semantic markup and modern styling"}
              {name === "Tailwind CSS" && "Utility-first CSS framework"}
              {name === "SQL" && "Relational database querying"}
              {name === "MongoDB" && "NoSQL document database"}
              {name === "Git" && "Version control system"}
              {name === "Docker" && "Container platform"}
              {name === "AWS" && "Cloud computing services"}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default SkillCard;
