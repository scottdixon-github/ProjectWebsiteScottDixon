export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}