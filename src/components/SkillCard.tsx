
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  level: number;
  icon?: string;
  className?: string;
}

const SkillCard = ({ name, level, icon, className }: SkillCardProps) => {
  return (
    <Card 
      className={cn("overflow-hidden transition-all hover:shadow-md", className)}
      data-animate="true"
    >
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg leading-none">{name}</CardTitle>
          <div className="text-xs font-medium text-muted-foreground">
            {level}%
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Progress value={level} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default SkillCard;
