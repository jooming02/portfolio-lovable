/**
 * Scroll-triggered stagger wrapper (parent of multiple children).
 *
 * Children must be <motion.div variants={...}> — they animate in sequence
 * when this container scrolls into view.
 *
 * Example (projects grid):
 *   <Stagger className="grid ...">
 *     {items.map(item => (
 *       <motion.div key={item.id} variants={scaleIn}><Card /></motion.div>
 *     ))}
 *   </Stagger>
 *
 * Reveal = one block animates. Stagger = many children animate one-by-one.
 */
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerContainerSlow, viewport } from "./variants";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  slow?: boolean; // true for experience timeline, false for project/skill grids
}

export default function Stagger({ children, className, slow }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  // Parent variant only controls stagger timing — children supply their own hidden/show
  const container: Variants = slow ? staggerContainerSlow : staggerContainer;

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={viewport}
      variants={container}
    >
      {/* Each child <motion.div variants={scaleIn|popIn|slideFromLine}> fires in sequence */}
      {children}
    </motion.div>
  );
}
