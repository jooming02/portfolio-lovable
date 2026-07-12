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

export interface AboutHighlight {
  /** Exact phrase to highlight in the paragraphs */
  text: string;
  /** emphasis = brighter text; accent = primary color */
  variant?: "emphasis" | "accent";
}

export interface AboutContent {
  paragraphs: string[];
  /** Phrases to highlight across paragraphs — edit here to control standout words */
  highlights?: AboutHighlight[];
  profileImage: string;
  profileAlt: string;
  gallery: string[];
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

export interface HeroCta {
  label: string;
  href: string;
  /** Open in new tab (e.g. resume PDF) */
  external?: boolean;
}

export interface HeroLanyard {
  name: string;
  title: string;
  website: string;
}

export interface HeroContent {
  name: string;
  role: string;
  bio: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  socialLinks: FooterSocialLink[];
  lanyard: HeroLanyard;
}
