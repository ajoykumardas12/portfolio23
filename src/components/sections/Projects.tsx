import { ProjectType } from "@/src/types";

import { Space_Grotesk } from "next/font/google";
import Image from "next/image";

import projects from "@data/constants/projects/projects";

import ExternalLink from "@components/icons/ExternalLink";
import GitHub from "@components/icons/GitHub";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// TODO: Use markdown for project details
function Projects() {
  return (
    <section
      className="flex w-[87%] flex-col justify-center py-20 xs:w-[85%] sm:w-[82%] lg:w-[76%] xl:w-8/12"
      id="projects"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-8`}>
        <span className="text-highlight">#</span> Projects
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project: ProjectType) => {
          return <Project key={project.name} {...project} />;
        })}
      </div>
    </section>
  );
}

function Project(project: ProjectType) {
  return (
    <div className="group flex flex-col overflow-hidden rounded border border-brand/40 bg-dark/40">
      <div className="overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.name}
          width={400}
          height={400}
          className="w-full rounded-t object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex grow flex-col justify-between gap-4 px-4 py-3">
        <div className="flex flex-col">
          <h3
            className={`${spaceGrotesk.className} mb-2 self-center text-lg font-bold`}
          >
            {project.name}
          </h3>
          <p className="text-[0.9rem] text-light/80">{project.description}</p>
        </div>
        <div className="flex flex-col">
          <div className="mb-3 flex gap-10 self-center">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                title="GitHub Repo"
                aria-label="GitHub Repo"
              >
                <GitHub iconClass="project-icon" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink iconClass="project-icon" />
              </a>
            )}
          </div>
          <div className="flex w-full justify-center gap-1 text-xs text-light min-[320px]:gap-3 xs:gap-4 xs:text-sm">
            {project.technologies.map((technology) => {
              return (
                <div
                  className="rounded px-2 py-1 text-center hover:bg-dark"
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
