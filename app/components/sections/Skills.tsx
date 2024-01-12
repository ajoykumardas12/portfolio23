import skillItems from "@/app/data/constants/skills";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Skills() {
  return (
    <section
      className="flex w-[87%] flex-col justify-center py-20 xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12"
      id="skills"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-5`}>
        <span className="text-highlight">#</span> My Skills
      </h2>
      <p className="mb-4 font-light">
        My interest in web development started with trying to edit default theme
        in blogger where I first experienced few bits of magic of CSS. Since
        then my skills have grown as I kept exploring.
      </p>
      <p className="mb-6 text-base sm:text-lg">
        Here are a few technologies of I enjoy working with:
      </p>
      <div className="text-[0.8rem] sm:text-[0.9rem]">
        <ul className="grid-container">
          {/* TODO: Centre last row items */}
          {skillItems.map(({ name, Icon }) => {
            return (
              <li
                key={name}
                className="grid-item skill-card group relative border border-transparent transition duration-300 hover:scale-[1.03] hover:border-light/40"
              >
                <div className="saturate-[1] group-hover:saturate-100">
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
