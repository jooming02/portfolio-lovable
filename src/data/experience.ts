import type { ExperienceEntry } from "@/types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    date: "Jul 2025 - Present",
    title: "Frontend Developer",
    company: "Tencent",
    companyLogo: "/experience/tencent/tencent.png",
    type: "work",
    description: [
      "•	Primary frontend contributor to the Strategic Management Dashboard, a React, TypeScript, and UmiJS-based micro-frontend module within Tencent's DataBrain enterprise analytics platform, delivering over 1000+ commits across executive reporting, studio portfolio management, and publishing operations.",
      "Developed enterprise dashboard solutions featuring ECharts visualizations, RESTful API integrations, auto-save protection, and bilingual (EN/ZH) internationalization for leadership and business stakeholders, verifying functionality across all deployment environments before each release.",
      "Implemented 170+ analytics tracking events across the platform, authored buried-point documentation for analytics and product teams, and built an Agent Skill to auto-generate specs from code for user-behavior analysis.",
      "Contributed to a 10+ Agent Skill/Rule framework and used MCP + AI-assisted workflows (Cursor) to deliver 50+ requirements across 12 sprints, achieving ~96% AI-assisted code generation and ~13% faster delivery on this project.",
    ],
    position: "left",
    skills: ["React", "TypeScript", "UmiJS", "ECharts"],
    images: [
      {
        src: "/experience/tencent/databrain.jpg",
        alt: "DataBrain developers and products",
        variant: "landscape",
      },
      {
        src: "/experience/tencent/databrain_developer.jpg",
        alt: "DataBrain developers",
        variant: "portrait",
      }
    ],
  },
  {
    date: "Dec 2024 - Jul 2025",
    title: "Trainee Analyst Programmer",
    company: "Public Bank Group",
    companyLogo: "/experience/pbbank/logo.png",
    type: "work",
    description: [
      "Migrated legacy banking systems from Lotus Notes to .NET Core, ensuring data integrity and regulatory compliance throughout the transition while improving long-term maintainability.",
      "Built and maintained internal banking modules using C#, .NET Framework, SQL Server, and JavaScript/jQuery, while utilizing Azure DevOps for version control and CI/CD pipeline implementation to streamline deployments across development and production environments",
    ],
    position: "left",
    skills: [".NET", "C#", "SQL Server", "JavaScript"],
    images: [
      {
        src: "/experience/pbbank/pbbank_groupphoto.jpeg",
        alt: "Public Bank Group team photo",
        variant: "landscape",
      },
      {
        src: "/experience/pbbank/pbbank_groupphoto2.jpeg",
        alt: "Public Bank Group orientation training",
        variant: "landscape",
      },
    ],
  },
  {
    date: "Oct 2023 - Dec 2023",
    title: "Frontend Web Developer Intern",
    company: "Sunway Group",
    companyLogo: "/experience/sunway/Sunway_logo.png",
    type: "work",
    description: [
      "Designed, prototyped, and developed a Learning Management System (LMS) using Figma, Svelte, SvelteKit, and Bootstrap — translating requirements into responsive, user-centric interfaces.",
      "Collaborated with stakeholders during User Acceptance Testing (UAT) to gather feedback, refine functionality, and improve usability.",
    ],
    position: "left",
    skills: ["Svelte", "SvelteKit", "Figma", "Bootstrap"],
    images: [
      {
        src: "/experience/sunway/groupphoto.jpeg",
        alt: "Sunway Group team photo",
        variant: "landscape",
      },
      {
        src: "/experience/sunway/cert.jpeg",
        alt: "Sunway internship certificate",
        variant: "portrait",
      },
    ],
  },
  {
    date: "2021 - 2024",
    title: "Bachelor of Computer Science",
    company: "APU (APIIT)",
    companyLogo: "/experience/apu/apu.png",
    type: "education",
    description: ["CGPA: 3.59/4.00 (First Class Honours)"],
    position: "left",
    images: [
      {
        src: "/experience/apu/apuclcs.jpeg",
        alt: "APU CLCS group photo",
        variant: "landscape",
      },
      {
        src: "/experience/apu/graduation.jpg",
        alt: "Asia Pacific University of Technology and Innovation",
        variant: "landscape",
      },
    ],
  },
];
