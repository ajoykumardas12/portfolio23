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
  name: string;
  Icon: () => React.JSX.Element;
};

export type YoutubeVideoProps = {
  title: string;
  link: string;
};
