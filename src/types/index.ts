export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  handle: string;
  title: string;
  status: string;
  bio: string;
  aboutShort: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  cvUrl?: string;
  currentFocus: string;
  favoriteTrack?: {
    title: string;
    artist: string;
    note: string;
  };
}

export interface SkillItem {
  name: string;
  level: 'Core / Proficient' | 'Familiar / Comfortable' | 'Exploring / Learning';
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'concepts';
  icon?: string;
  tags?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-stack' | 'Frontend' | 'System & Tools' | 'Audio / Creative';
  role: string;
  status: 'Completed' | 'In Progress' | 'Archived';
  featured: boolean;
  date: string;
  stack: string[];
  features: string[];
  challenges: string;
  learnings: string;
  repoUrl: string;
  demoUrl?: string;
  coverImage: string;
}

export interface PostFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  cover?: string;
  published: boolean;
  readingTime?: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
  type: 'education' | 'experience' | 'achievement' | 'project';
}
