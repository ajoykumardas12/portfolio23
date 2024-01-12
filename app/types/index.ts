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

export interface IllustrationsProps {
  iconClass: string;
}

export type SkillItemProps = {
  name: String;
  Icon: () => React.JSX.Element;
};
