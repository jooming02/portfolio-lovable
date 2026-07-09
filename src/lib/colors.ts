/** HSL string for BorderGlow — matches --primary */
export const borderGlowColor = "265 80 60";

/** Card background — matches --card */
export const cardBackground = "hsl(240, 10%, 3.9%)";

/** Shared with GradientText — amber → violet → amber */
export const gradientTextColors: string[] = ["#ffaa40", "#9c40ff", "#ffaa40"];

/** Mesh gradient colors for BorderGlow */
export const borderGlowColors = gradientTextColors;

export const primaryColor = "rgba(139, 92, 246, 0.5)";

export const gradientTextLinear = `linear-gradient(to right, ${gradientTextColors.join(", ")})`;

/** Vertical variant for timeline scroll beam */
export const gradientTextLinearVertical = `linear-gradient(to bottom, ${gradientTextColors.join(", ")})`;
