import type { ExperienceEntry } from "@/types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    date: "Dec 2024 - Jul 2025",
    title: "Trainee Analyst Programmer",
    company: "Public Bank Group",
    companyLogo: "/experience/pbbank/logo.png",
    description: [
      "Contributed to the migration of legacy systems from Lotus Notes to .NET.",
      "Developed proficiency in .NET framework, C#, and SQL databases through practical implementation.",
    ],
    position: "left",
    skills: [".NET", "C#", "SQL"],
    images: [
      {
        src: "/experience/pbbank/pbbank_groupphoto.jpeg",
        alt: "Public Bank Group team photo",
      },
      {
        src: "/experience/pbbank/pbbank_groupphoto2.jpeg",
        alt: "Public Bank Group team photo",
      },
    ],
  },
  {
    date: "Oct 2023 - Dec 2023",
    title: "Frontend Web Developer Intern",
    company: "Sunway Group",
    companyLogo: "/experience/sunway/Sunway_logo.png",
    description: [
      "Created the interactive prototype of a Learning Management System (LMS) using Figma",
      "Participated in the User Acceptance Testing (UAT) process and presented the prototype to stakeholders for continuous improvement",
      "Developed the LMS frontend using Svelte, Svelte Kit, and Bootstrap, creating responsive and dynamic web pages that enhanced the user learning experience",
    ],
    position: "left",
    skills: ["Svelte", "SvelteKit", "Figma", "Bootstrap"],
    images: [
      {
        src: "/experience/sunway/groupphoto.jpeg",
        alt: "Sunway Group team photo",
      },
      {
        src: "/experience/sunway/cert.jpeg",
        alt: "Sunway internship certificate",
      },
    ],
  },
  {
    date: "2021 - 2024",
    title: "Bachelor of Computer Science ",
    company:
      "Asia Pacific University of Technology and Innovation (APU / APIIT)",
    companyLogo: "/experience/apu/apu.png",
    description: ["GPA: 3.59/4.00 (First Class Honours)"],
    position: "left",
    images: [
      {
        src: "/experience/apu/apuclcs.jpeg",
        alt: "APU LCS group photo",
      },
      {
        src: "/experience/apu/apac.jpeg",
        alt: "Asia Pacific University of Technology and Innovation",
      },
    ],
  },
];
