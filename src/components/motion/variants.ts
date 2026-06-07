/**
 * Shared Framer Motion animation presets.
 *
 * Framer Motion needs "variants" objects (hidden → show states).
 * We define them once here so sections don't repeat the same values.
 *
 * Usage: import a preset into <motion.div variants={fadeUp} /> or <Reveal variant="fadeUp" />
 */

// once: true  → animate only the first time it scrolls into view (not every scroll up/down)
// margin: -80px → start animation 80px before the element is fully visible
export const viewport = { once: true, margin: "-80px" } as const;

// Cubic-bezier easing — smooth deceleration (less robotic than "linear")
const ease = [0.22, 1, 0.36, 1] as const;

// --- Hero (page load, NOT scroll) ---
// Parent has no visual change — it only controls timing of child animations
export const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // gap between each child (name → role → bio → buttons)
      delayChildren: 0.15, // wait before the first child starts
    },
  },
};

// Each hero child fades in and moves up slightly
export const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// --- Section scroll reveals (pick different preset per section) ---

// Section headings — used by <Reveal variant="fadeUp">
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// Contact section — gentle opacity only, no movement
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease },
  },
};

// Project cards — slight zoom-in effect
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
};

// Timeline items — slide in from the vertical line on the left
export const slideFromLine = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease },
  },
};

// About text column — enters from the left
export const slideRight = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

// About photo column — enters from the right
export const slideLeft = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

// Skill icons — quick pop with scale
export const popIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease },
  },
};

// --- Stagger parents (used by <Stagger>) ---
// Parent stays invisible logic-wise; children with matching variants animate in sequence

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }, // fast — project cards
  },
};

export const staggerContainerSlow = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }, // slower — experience timeline
  },
};
