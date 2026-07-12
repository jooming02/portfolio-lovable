import type { FooterContent } from "@/types/portfolio";

export const footer: FooterContent = {
  name: "Lau Joo Ming",
  bio: "Software engineer building across the stack — frontend today, full-stack ahead. Always learning, always shipping.",
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
  availability: ["Open to new opportunities", "Happy to connect"],
  lastUpdated: "12/7/2026",
};
