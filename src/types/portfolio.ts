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
}

export interface ExperienceEntry {
  date: string;
  title: string;
  company?: string;
  /** Company logo from public/experience/{folder}/ — shown beside company name */
  companyLogo?: string;
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
