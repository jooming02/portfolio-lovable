import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    heading: "Frontend",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "UmiJS", icon: "umijs.png" },
      { name: "Svelte", icon: "svelte.svg" },
      { name: "Tailwind CSS", icon: "tailwind.svg" },
      { name: "ECharts", icon: "echart.svg" },
    ],
  },
  {
    heading: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: ".NET", icon: "net.svg" },
      { name: "SQL Server", icon: "sql.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
    ],
  },
  {
    heading: "Tools",
    skills: [
      { name: "Figma", icon: "figma.svg" },
      { name: "Git", icon: "git.svg" },
      { name: "MCP", icon: "mcp.svg" },
    ],
  },
];
