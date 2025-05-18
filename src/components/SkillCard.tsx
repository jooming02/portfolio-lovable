
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  Code, 
  FileText, 
  Globe, 
  Laptop, 
  Database, 
  Terminal, 
  Layers,
  PackageIcon,
  Settings,
  Layout,
  Server,
  Shield
} from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface SkillCardProps {
  name: string;
  icon: string;
  className?: string;
}

const SkillCard = ({ name, icon, className }: SkillCardProps) => {
  // Map of skill icons
  const IconMap: Record<string, JSX.Element> = {
    "JavaScript": <Code className="h-10 w-10" />,
    "TypeScript": <FileText className="h-10 w-10" />,
    "React": <Globe className="h-10 w-10" />,
    "Next.js": <Laptop className="h-10 w-10" />,
    "Node.js": <Terminal className="h-10 w-10" />,
    "HTML/CSS": <Layers className="h-10 w-10" />,
    "Tailwind CSS": <PackageIcon className="h-10 w-10" />,
    "SQL": <Database className="h-10 w-10" />,
    "MongoDB": <Database className="h-10 w-10" />,
    "Git": <Settings className="h-10 w-10" />,
    "Docker": <Layout className="h-10 w-10" />,
    "AWS": <Server className="h-10 w-10" />,
    "default": <Shield className="h-10 w-10" />
  };
  
  // Get icon or default if not found
  const IconComponent = IconMap[name] || IconMap["default"];

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
            <div className="text-primary mb-4 transition-all duration-300 group-hover:scale-110">
              {IconComponent}
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
