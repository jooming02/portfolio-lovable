import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle = ({ text, className }: AnimatedTitleProps) => {
  return (
    <h1
      className={cn(
        "font-display inline-block bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-[200%_auto] bg-clip-text text-transparent animate-text-shimmer",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default AnimatedTitle;
