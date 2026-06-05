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

export interface ExperienceEntry {
  date: string;
  title: string;
  company?: string;
  description: string[];
  position: "left" | "right";
}

export interface AboutContent {
  paragraphs: string[];
  profileImage: string;
  profileAlt: string;
}
