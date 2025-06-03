
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle = ({ text, className }: AnimatedTitleProps) => {
  // This ref will be used to observe the visibility of the title element
  const containerRef = useRef<HTMLHeadingElement>(null); //h1, h2, h3, etc.

  return (
    <div className="overflow-hidden">
      <h1 
        ref={containerRef} 
        className={cn(
          "inline-block bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-[200%_auto] bg-clip-text text-transparent animate-text-shimmer",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default AnimatedTitle;
