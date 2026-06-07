/**
 * Scroll-triggered reveal wrapper (single element).
 *
 * Wraps content in Framer Motion's <motion.div> with whileInView —
 * animates when the user scrolls the element into view.
 *
 * Example:
 *   <Reveal variant="slideRight"><p>About text</p></Reveal>
 *
 * You could write motion.div directly in every section instead;
 * this file avoids repeating whileInView, viewport, and reduced-motion logic.
 */
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeIn,
  fadeUp,
  popIn,
  scaleIn,
  slideFromLine,
  slideLeft,
  slideRight,
  viewport,
} from "./variants";

// Maps the variant prop string to a preset from variants.ts
const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideFromLine,
  slideRight,
  slideLeft,
  popIn,
} as const;

type RevealVariant = keyof typeof variantMap;

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  delay?: number; // optional offset — e.g. contact form after contact info
}

export default function Reveal({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
}: RevealProps) {
  // Respects OS "reduce motion" setting — skip animation for accessibility
  const reduceMotion = useReducedMotion();
  const base = variantMap[variant];

  // Merge the chosen preset with an optional delay on the "show" state
  const variants: Variants = {
    hidden: base.hidden,
    show: {
      ...base.show,
      transition: {
        // Keep duration/ease from the preset, add delay on top
        ...(typeof base.show === "object" &&
        base.show !== null &&
        "transition" in base.show
          ? base.show.transition
          : {}),
        delay: reduceMotion ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      // Start hidden, or skip straight to "show" if reduced motion is on
      initial={reduceMotion ? "show" : "hidden"}
      // Trigger "show" variant when this element scrolls into viewport
      whileInView="show"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
