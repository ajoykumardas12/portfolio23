export type ProjectType = {
  name: string;
  description: string;
  technologies: string[];
  live: string | null;
  repo: string | null;
  imageSrc: string;
};

export type IconProps = {
  iconClass: string;
};

export type IllustrationsProps = {
  iconClass: string;
};

export type SkillItemProps = {
  name: String;
  Icon: () => React.JSX.Element;
};
