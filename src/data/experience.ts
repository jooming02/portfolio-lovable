import type { ExperienceEntry } from "@/types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    date: "Jul 2025 - Present",
    title: "Frontend Developer",
    company: "Tencent",
    companyLogo: "/experience/tencent/tencent.png",
    type: "work",
    description: [
      "Primary frontend contributor to the Strategic Management Dashboard — a React, TypeScript, and UmiJS micro-frontend module within Tencent's DataBrain analytics platform (800+ commits across executive reporting, studio portfolio management, and publishing operations).",
      "Built enterprise dashboard solutions with ECharts visualizations, RESTful API integrations, analytics tracking, and English/Chinese internationalization for leadership stakeholders.",
      "Implemented complex workflows including form validation, edit-state management, auto-save, and role-based access control for sensitive business data.",
      "Contributed to a 10+ Agent Skill/Rule framework and used MCP and AI-assisted workflows to improve development efficiency.",
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
      "Contributed to the migration of legacy banking systems from Lotus Notes to .NET Core, supporting modernization and long-term maintainability.",
      "Developed and maintained internal enterprise modules using C#, .NET Framework, SQL Server, JavaScript, jQuery, and AJAX — covering both frontend and backend integration.",
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
