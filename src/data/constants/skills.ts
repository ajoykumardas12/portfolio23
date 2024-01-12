import { SkillItemProps } from "@/src/types";

import CSSIcon from "@components/icons/skills/CSSIcon";
import Git from "@components/icons/skills/Git";
import GitHub from "@components/icons/skills/GitHub";
import Java from "@components/icons/skills/Java";
import JavaScript from "@components/icons/skills/JavaScript";
import NextJS from "@components/icons/skills/NextJS";
import NodeJS from "@components/icons/skills/NodeJS";
import ReactIcon from "@components/icons/skills/ReactIcon";
import SCSS from "@components/icons/skills/SCSS";
import TailwindCSS from "@components/icons/skills/TailwindCSS";
import TypeScript from "@components/icons/skills/TypeScript";
import VSCode from "@components/icons/skills/VSCode";

const skillItems: SkillItemProps[] = [
  { name: "JavaScript", Icon: JavaScript },
  {
    name: "TypeScript",
    Icon: TypeScript,
  },
  {
    name: "React",
    Icon: ReactIcon,
  },
  {
    name: "Next.js",
    Icon: NextJS,
  },
  {
    name: "CSS",
    Icon: CSSIcon,
  },
  {
    name: "SCSS",
    Icon: SCSS,
  },
  {
    name: "Tailwind",
    Icon: TailwindCSS,
  },
  {
    name: "Node.js",
    Icon: NodeJS,
  },
  {
    name: "Java",
    Icon: Java,
  },
  {
    name: "Git",
    Icon: Git,
  },
  {
    name: "GitHub",
    Icon: GitHub,
  },
  {
    name: "VS Code",
    Icon: VSCode,
  },
];

export default skillItems;
