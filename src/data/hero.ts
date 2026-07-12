import type { HeroContent } from "@/types/portfolio";

export const hero: HeroContent = {
  name: "Lau Joo Ming",
  role: " Software Developer | UI/UX Enthusiast",
  bio: "Software engineer building across the stack — frontend today, full-stack ahead.\nAlways learning, always shipping.",
  primaryCta: {
    label: "Resume",
    href: "/CV_LauJooMing.pdf",
    external: true,
  },
  secondaryCta: {
    label: "Get In Touch",
    href: "#contact",
  },
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
  lanyard: {
    name: "Lau Joo Ming",
    title: "Software Developer",
    website: "github.com/jooming02",
  },
};
