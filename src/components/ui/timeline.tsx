/**
 * Aceternity UI Timeline — sticky date labels + scroll-following beam on the line.
 * Source: https://ui.aceternity.com/components/timeline
 * Adapted: framer-motion (not motion/react), site theme tokens, no built-in section header.
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { gradientTextLinearVertical } from "@/lib/colors";

export interface TimelineEntry {
  title: string;
  content: ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

/** Line + dot sit on the left rail; content column gets ~70% width (3:7) */
const LINE_LEFT = "left-5"; // 20px — aligns rail in the timeline column (the vertical line beam)

export const Timeline = ({ data, className }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Track timeline height so the scroll beam can grow to match content
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const updateHeight = () => setHeight(node.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);
    return () => observer.disconnect();
  }, [data]);

  // Scroll progress within this section drives beam height + opacity
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // Shift gradient stops as user scrolls — same motion feel as GradientText
  const beamBackgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "0% 100%"]
  );

  return (
    <div ref={containerRef} className={cn("w-full font-sans", className)}>
      <div ref={ref} className="relative mx-auto pb-10 md:pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative z-10 grid grid-cols-1 gap-3 pt-8 md:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] md:gap-x-6 md:pt-16 lg:gap-x-8"
          >
            {/* Narrow timeline column — sticky date, subtle marker */}
            <div className="relative z-10 md:sticky md:top-40 md:self-start">
              <div className="flex items-center gap-3 md:pl-9">
                {/* Outer ring masks the beam — line passes behind, not over the dot */}
                <div
                  className="relative z-10 shrink-0 md:absolute md:left-[9px] md:top-1.5"
                  aria-hidden
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-background">
                    <div className="h-3 w-3 rounded-full border border-muted-foreground/25 bg-muted-foreground/45" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-muted-foreground md:text-xl lg:text-2xl">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content column — majority of horizontal space */}
            <div className="relative min-w-0">{item.content}</div>
          </div>
        ))}

        {/* Static track + animated beam — sits behind dots (z-0) */}
        <div
          style={{ height: `${height}px` }}
          className={cn(
            "absolute top-0 z-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border/40 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
            LINE_LEFT
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              backgroundImage: gradientTextLinearVertical,
              backgroundSize: "100% 300%",
              backgroundPosition: beamBackgroundPosition,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
