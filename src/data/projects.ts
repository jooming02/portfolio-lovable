import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "MonitorCare",
    description:
      "A mHealth-based NCD (Non-Communicable Diseases) Monitoring System utilizing data from body tests to detect andprevent NCDs at an early stage.",
    tags: ["React Native", "Node.js", "MongoDB", "Express.js", "XGBoost"],
    imageUrl: "/projects/monitorcare.png",
    githubUrl: "https://github.com/jooming02/fyp_monitorcare",
  },
  {
    title: "VerifyMy",
    description:
      "An app that shows the digital form of identification which provides a seamless, secure, and private way to accessgovernment e-services using blockchain technology",
    tags: ["Figma"],
    imageUrl: "/projects/verifymy.png",
    liveUrl:
      "https://www.figma.com/proto/cgy2n56w7qVCOJulIGNF7M/VerifyMy?node-id=175-1630&scaling=scale-down&page-id=0%3A1&starting-point-node-id=175%3A1630&show-proto-sidebar=1",
  },
  {
    title: "HeyLaw",
    description:
      "A web application that simplifies access to Malaysian legal information by providing categorized and searchable law summaries in a user-friendly interface.",
    tags: ["Figma"],
    imageUrl: "/projects/heylaw.png",
    liveUrl:
      "https://www.figma.com/proto/6ViFgcTwNO71KwSUFjtNPb/Heylaws?node-id=409-281&p=f&t=CvtT7P560C4YCql3-1&scaling=scale-down&content-scaling=fixed&page-id=205%3A1341&starting-point-node-id=409%3A281&show-proto-sidebar=1",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and experience with interactive effects and smooth animations.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Three.js", "Framer Motion"],
    imageUrl: "/projects/portfolio.png",
    // Set liveUrl after first Vercel deploy (e.g. https://your-project.vercel.app/)
    githubUrl: "https://github.com/jooming02/portfolio-lovable",
  },
  {
    title: "Gaming Dashboard",
    description:
      "A dashboard that simulates the game analytics environment. It features a fully interactive leaderboard for over 10,000 players, complete with search, sort, pagination, and visual indicators.",
    tags: ["React", "Tailwind CSS", "TypeScript", "rechart", "tanstack-table"],
    imageUrl: "/projects/gamingdashboard.png",
    liveUrl: "https://gaming-dashboard.lovable.app/",
    githubUrl: "https://github.com/jooming02/gaming-dashboard",
  },
];
