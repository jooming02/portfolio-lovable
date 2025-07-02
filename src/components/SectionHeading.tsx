import { cn } from "@/lib/utils";
import GradientText from "@/components/ui/TextAnimations/GradientText";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
      data-animate="true"
    >
      <GradientText
        animationSpeed={5}
        className="text-3xl md:text-4xl font-bold mb-3 text-gradient"
      >
        {title}
      </GradientText>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
