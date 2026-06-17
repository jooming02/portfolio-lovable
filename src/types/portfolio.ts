export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  heading: string;
  skills: Skill[];
}

export interface ExperienceImage {
  src: string;
  alt?: string;
  /** landscape = wide crop; portrait = tall / document */
  variant?: "portrait" | "landscape";
}

export interface ExperienceEntry {
  date: string;
  title: string;
  company?: string;
  /** Company logo from public/experience/{folder}/ — shown beside company name */
  companyLogo?: string;
  type?: "work" | "education";
  description: string[];
  position: "left" | "right";
  /** Photos from public/experience/{folder}/ — shown below card content */
  images?: ExperienceImage[];
  /** Key skills used in this role — shown as badges (LinkedIn-style highlights) */
  skills?: string[];
}

export interface AboutContent {
  paragraphs: string[];
  profileImage: string;
  profileAlt: string;
}

export interface FooterQuickLink {
  id: string;
  label: string;
}

export type FooterSocialType = "github" | "linkedin" | "email";

export interface FooterSocialLink {
  type: FooterSocialType;
  href: string;
  label: string;
}

export interface FooterContent {
  name: string;
  bio: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterQuickLink[];
  contactHeading: string;
  availability: string[];
  lastUpdated: string;
}
