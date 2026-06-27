import type { FooterContent } from "@/types/portfolio";

export const footer: FooterContent = {
  name: "Lau Joo Ming",
  bio: "Frontend developer passionate about creating accessible, responsive web experiences. Always learning, always building.",
  socialLinks: [
    {
      type: "github",
      href: "https://github.com/jooming02",
      label: "GitHub",
    },
    {
      type: "linkedin",
      href: "https://www.linkedin.com/in/joo-ming-lau-974804235/",
      label: "LinkedIn",
    },
    {
      type: "email",
      href: "mailto:laujm02@hotmail.com",
      label: "Email",
    },
  ],
  quickLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ],
  contactHeading: "Get In Touch",
  availability: ["Open to new opportunities", "Available for freelance work"],
  lastUpdated: "28/6/2026",
};
