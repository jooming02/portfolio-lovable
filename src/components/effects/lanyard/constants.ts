/** Asset paths served from /public */
export const LANYARD_ASSETS = {
  cardGlb: "/assets/lanyard/card.glb",
  strap: "/assets/lanyard/lanyard.png",
  profile: "/profile/profile.jpeg",
} as const;

/** Must match embedded GLB texture dimensions and front-face UV bounds */
export const CARD_UV = {
  texWidth: 1678,
  texHeight: 1677,
  uMax: 0.49893826246261597,
  vMax: 0.7572484612464905,
} as const;

/** Canvas layout — ratios relative to visible card face (faceW / faceH) */
export const CARD_LAYOUT = {
  padX: 0.1,
  profileRadius: 0.28,
  profileY: 0.38,
  nameGap: 0.13,
  labelY: 0.1,
  accentDotY: 0.09,
  titleGap: 0.04,
  siteY: 0.9,
  borderInset: 24,
} as const;

/** Fonts to preload before drawing the canvas texture */
export const CARD_FONTS = [
  { family: "Cormorant Garamond", weight: 600 },
  { family: "Source Sans 3", weight: 600 },
  { family: "Source Sans 3", weight: 500 },
  { family: "JetBrains Mono", weight: 500 },
] as const;

/** Colors and canvas styling — edit here to restyle the badge */
export const CARD_THEME = {
  fontDisplay: '"Cormorant Garamond", serif',
  fontBody: '"Source Sans 3", sans-serif',
  fontMono: '"JetBrains Mono", monospace',
  background: ["#1a0b2e", "#2d1657", "#0f0524"] as const,
  border: "rgba(255,255,255,0.12)",
  borderGlow: "rgba(157, 5, 245, 0.35)",
  label: "rgba(255,255,255,0.55)",
  labelLetterSpacing: "0.15em",
  accent: "#9D05F5",
  name: "#ffffff",
  title: "rgba(255,255,255,0.75)",
  titleLetterSpacing: "0.1em",
  site: "rgba(192, 132, 252, 0.7)",
  blobPrimary: "rgba(157, 5, 245, 0.32)",
  blobSecondary: "rgba(245, 5, 225, 0.22)",
  profileBase: "#1a0b2e",
} as const;

/** Default text when cardInfo props are omitted */
export const CARD_DEFAULTS = {
  name: "Lau Joo Ming",
  title: "Frontend Developer",
  website: "github.com/jooming02",
  label: "PORTFOLIO",
} as const;

/** 3D material for the card mesh */
export const CARD_MATERIAL = {
  clearcoat: 1,
  clearcoatRoughness: 0.15,
  roughness: 0.5,
  metalness: 0.35,
  anisotropy: 16,
} as const;
