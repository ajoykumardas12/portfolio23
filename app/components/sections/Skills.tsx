import CSSIcon from "../icons/skills/CSSIcon";
import Git from "../icons/skills/Git";
import Java from "../icons/skills/Java";
import JavaScript from "../icons/skills/JavaScript";
import NextJS from "../icons/skills/NextJS";
import NodeJS from "../icons/skills/NodeJS";
import ReactIcon from "../icons/skills/ReactIcon";
import TailwindCSS from "../icons/skills/TailwindCSS";
import TypeScript from "../icons/skills/TypeScript";
import VSCode from "../icons/skills/VSCode";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const skillItems = [
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
    name: "Java",
    Icon: Java,
  },
  {
    name: "Git",
    Icon: Git,
  },
  {
    name: "VS Code",
    Icon: VSCode,
  },
];

function Skills() {
  return (
    <section
      className="w-[87%] xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12 py-20 flex flex-col justify-center"
      id="skills"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-5`}>
        <span className="text-highlight">#</span> My Skills
      </h2>
      <p className="font-light mb-4">
        My interest in web development started with trying to edit default theme
        in blogger where I first experienced few bits of magic of CSS. Since
        then my skills have grown as I kept exploring.
      </p>
      <p className="text-base sm:text-lg mb-6">
        Here are a few technologies of I enjoy working with:
      </p>
      <div className="text-[0.8rem] sm:text-[0.9rem]">
        <ul className="grid-container">
          {/* TODO: Centre last row items */}
          {skillItems.map(({ name, Icon }) => {
            return (
              <li
                key={name}
                className="grid-item group border border-transparent hover:border-light/40 transition duration-500"
              >
                <div className="saturate-[0.45] group-hover:saturate-100">
                  <Icon />
                </div>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
