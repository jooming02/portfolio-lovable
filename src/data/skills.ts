import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    heading: "Frontend",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Svelte", icon: "svelte.svg" },
    ],
  },
  {
    heading: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: ".NET Core", icon: "net.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "SQL", icon: "sql.svg" },
    ],
  },
  {
    heading: "Tools",
    skills: [
      { name: "Tailwind CSS", icon: "tailwind.svg" },
      { name: "Figma", icon: "figma.svg" },
      { name: "Git", icon: "git.svg" },
    ],
  },
];
