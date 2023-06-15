import projects from "@/app/data/projects/projects";
import { ProjectType } from "@/app/types";
import Image from "next/image";
import GitHub from "../icons/GitHub";
import ExternalLink from "../icons/ExternalLink";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// TODO: Use markdown for project details
function Projects() {
  return (
    <section
      className="w-[87%] xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12 py-20 flex flex-col justify-center"
      id="projects"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-8`}>
        <span className="text-highlight">#</span> Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project: ProjectType) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </section>
  );
}

function Project(project: ProjectType) {
  return (
    <div className="flex flex-col bg-dark/40 rounded border border-brand/40">
      <Image
        src={project.imageSrc}
        alt={project.name}
        width={400}
        height={400}
        className="w-full object-cover rounded-t"
      />
      <div className="px-4 py-3 grow flex flex-col justify-between gap-4">
        <div className="flex flex-col">
          <h4
            className={`${spaceGrotesk.className} self-center text-lg font-bold mb-2`}
          >
            {project.name}
          </h4>
          <p className="text-light/80 text-[0.9rem]">{project.description}</p>
        </div>
        <div className="flex flex-col">
          <div className="self-center flex gap-10 mb-3">
            {project.repo && (
              <a href={project.repo} target="_blank">
                <GitHub iconClass="project-icon" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank">
                <ExternalLink iconClass="project-icon" />
              </a>
            )}
          </div>
          <div className="text-light w-full flex gap-1 min-[320px]:gap-3 xs:gap-4 justify-center text-xs xs:text-sm">
            {project.technologies.map((technology) => {
              return (
                <div
                  className="px-2 py-1 rounded hover:bg-dark text-center"
                  key={technology}
                >
                  {technology}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
