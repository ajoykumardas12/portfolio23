import skillItems from "@/src/data/constants/skills";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Skills() {
  return (
    <section
      className="flex flex-col justify-center py-16 sm:py-20 w-full lg:w-4/5"
      id="skills"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-5`}>
        <span className="text-highlight">#</span> My Skills
      </h2>
      <p className="mb-3 font-light">
        My interest in web development started with trying to edit default theme
        in blogger where I first experienced few bits of magic of CSS. Since
        then my skills have grown as I kept exploring.
      </p>
      <p className="mb-8 text-base sm:text-lg">
        Here are a few technologies of I enjoy working with:
      </p>
      <div className="text-[0.8rem] sm:text-[0.9rem]">
        <ul className="flex flex-wrap justify-center gap-4">
          {/* TODO: Centre last row items */}
          {skillItems.map(({ name, Icon }) => {
            return (
              <li
                key={name}
                className="border-box skill-card group relative flex w-full min-w-[5.5rem] shrink-0 grow-0 basis-[calc(33%-1rem)] flex-col items-center justify-center gap-2 rounded-[0.3rem] border border-transparent bg-[#164e63]/10 p-[0.8rem] text-center transition duration-300 hover:scale-[1.03] hover:border-light/40 sm:basis-[22%] md:basis-2/12 2xl:basis-40"
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
