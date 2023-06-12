export interface ProjectType {
  name: string;
  description: string;
  technologies: string[];
  live: string | null;
  repo: string | null;
  imageSrc: string;
}

export interface IconProps {
  iconClass: string;
}
