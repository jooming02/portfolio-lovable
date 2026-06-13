import { cn } from "@/lib/utils";
import GradientText from "@/components/effects/text/GradientText";
import Reveal from "@/components/motion/Reveal";

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
    <Reveal variant="fadeUp">
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
      >
        <GradientText
          animationSpeed={5}
          className="font-display text-3xl md:text-4xl font-bold mb-3 text-gradient"
        >
          {title}
        </GradientText>
        {subtitle && (
          <p
            className={cn(
              "text-lg text-muted-foreground max-w-2xl",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default SectionHeading;
