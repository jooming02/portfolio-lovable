
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GitHubIcon from "@/components/icons/GitHubIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/10 group border-border/50",
        className
      )}
      data-animate="true"
    >
      {imageUrl && (
        <div className="overflow-hidden w-full h-48 bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl line-clamp-1">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="w-4 h-4" />
              <span>Code</span>
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button
            size="sm"
            className="gap-1"
            asChild
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
