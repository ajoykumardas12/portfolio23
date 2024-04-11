import { SkillItemProps } from "@/src/types";

import CSSIcon from "@components/icons/skills/CSSIcon";
import Express from "@components/icons/skills/Express";
import Git from "@components/icons/skills/Git";
import GitHub from "@components/icons/skills/GitHub";
import JavaScript from "@components/icons/skills/JavaScript";
import Jest from "@components/icons/skills/Jest";
import MongoDB from "@components/icons/skills/MongoDB";
import NextJS from "@components/icons/skills/NextJS";
import NodeJS from "@components/icons/skills/NodeJS";
import Python from "@components/icons/skills/Python";
import ReactIcon from "@components/icons/skills/ReactIcon";
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
    name: "Tailwind",
    Icon: TailwindCSS,
  },
  {
    name: "Node.js",
    Icon: NodeJS,
  },
  {
    name: "Express.js",
    Icon: Express,
  },
  {
    name: "MongoDB",
    Icon: MongoDB,
  },
  {
    name: "Jest",
    Icon: Jest,
  },
  {
    name: "Python",
    Icon: Python,
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
