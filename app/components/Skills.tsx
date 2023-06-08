import CSSIcon from "./icons/skills/CSSIcon";
import Git from "./icons/skills/Git";
import Java from "./icons/skills/Java";
import JavaScript from "./icons/skills/JavaScript";
import NextJS from "./icons/skills/NextJS";
import NodeJS from "./icons/skills/NodeJS";
import ReactIcon from "./icons/skills/ReactIcon";
import TailwindCSS from "./icons/skills/TailwindCSS";
import TypeScript from "./icons/skills/TypeScript";
import VSCode from "./icons/skills/VSCode";

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
    name: "Tailwind CSS",
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
    <div className="w-[87%] xs:w-[85%] sm:w-[78%] lg:w-[72%] xl:w-8/12 py-20 flex flex-col justify-center">
      <h2 className="section-heading mb-5">
        <span className="text-highlight">#</span> My Skills
      </h2>
      <p className="font-light mb-4">
        My interest in web development started with trying to edit default theme
        in blogger where I first experienced few bits of magic of CSS. Since
        then my skills have grown as I kept exploring.
      </p>
      <p className="text-lg mb-6">
        Here are a few technologies of I enjoy working with:
      </p>
      <div className="">
        <ul className="grid-container gap-5">
          {skillItems.map(({ name, Icon }) => {
            return (
              <li
                key={name}
                className="grid-item group border border-transparent hover:border-light/40 transition duration-500"
              >
                <div className="saturate-[0.25] group-hover:saturate-100">
                  <Icon />
                </div>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
