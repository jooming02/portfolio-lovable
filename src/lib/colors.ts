// lib/colors.ts
export const primaryColor = "rgba(139, 92, 246, 0.5)";

/** Shared with GradientText — amber → violet → amber */
export const gradientTextColors: string[] = ["#ffaa40", "#9c40ff", "#ffaa40"];

export const gradientTextLinear = `linear-gradient(to right, ${gradientTextColors.join(", ")})`;

/** Vertical variant for timeline scroll beam */
export const gradientTextLinearVertical = `linear-gradient(to bottom, ${gradientTextColors.join(", ")})`;
