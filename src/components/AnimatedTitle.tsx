
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle = ({ text, className }: AnimatedTitleProps) => {
  // This ref will be used to observe the visibility of the title element
  const containerRef = useRef<HTMLHeadingElement>(null); //h1, h2, h3, etc.

  useEffect(() => {
    // Create an IntersectionObserver to observe the container
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log("Observing:", containerRef.current);
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 } // at least 10% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
