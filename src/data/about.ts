import type { AboutContent } from "@/types/portfolio";

export const about: AboutContent = {
  paragraphs: [
    "Hi, I'm Lau Joo Ming — a Frontend Developer at Tencent with nearly two years of full-stack experience spanning enterprise frontend (React, TypeScript, UmiJS) and backend systems (.NET, SQL Server).",
    "I graduated with First Class Honours in Computer Science from APU, and I enjoy using AI-assisted workflows and tools like MCP to ship faster — without sacrificing clean architecture or production quality.",
    "My journey started as a Frontend Web Developer Intern at Sunway, grew into full-stack work at Public Bank, and now continues as a Frontend Developer at Tencent — and it's not stopping there. I'm actively expanding toward a stronger full-stack path.",
  ],
  /** Add/remove phrases here to control what stands out in About */
  highlights: [
    { text: "Tencent", variant: "emphasis" },
    { text: "First Class Honours", variant: "emphasis" },
    { text: "Sunway", variant: "emphasis" },
    { text: "Public Bank", variant: "emphasis" },
  ],
  profileImage: "/profile/profile.jpeg",
  profileAlt: "My profile",
  gallery: [
    "/profile/profile.jpeg",
    "/profile/travel.jpg",
    "/profile/travel2.jpg",
    "/profile/travel3.jpg",
    "/profile/skecher.jpg",
  ],
};
