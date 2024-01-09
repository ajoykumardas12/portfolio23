import Link from "next/link";
import SocialIcons from "../SocialIcons";
import { Space_Grotesk } from "next/font/google";
import externalLinks from "@/app/data/constants/external-links";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Hero() {
  return (
    <section className="w-[87%] xs:w-[85%] sm:w-[82%] lg:w-[78%] xl:w-9/12 min-h-[calc(100vh-5rem)] flex items-center mt-16 md:mt-20">
      <div className="relative">
        <div className="w-max flex px-4 py-1 bg-gradient-to-r from-brand/50 to-[#0a468b] border border-highlight/40 rounded-r-2xl rounded-tl-2xl mb-6">
          <span className="text-xl md:text-2xl font-medium">नमस्ते</span>
        </div>
        <div className="text-lg leading-5 text-brand">I&apos;m,</div>
        <h1 className="text-name mb-6">AJOY KUMAR DAS</h1>
        <p
          className={`${spaceGrotesk.className} w-full md:w-10/12 lg:w-8/12 xl:w-7/12 font-light hover:text-mid/10 transition-colors pointer-events-none`}
        >
          A full-stack developer with a strong focus on{" "}
          <span className="bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-transparent font-semibold pointer-events-auto">
            front-end development
          </span>
          . I love exploring, learning and building.
        </p>
        <div className="my-10">
          <SocialIcons />
        </div>
        <Link
          href={externalLinks.RESUME}
          rel="noopener noreferrer"
          target="_blank"
          className={`${spaceGrotesk.className} px-4 py-2 text-highlight text-lg border border-highlight rounded hover:bg-dark transition-colors`}
        >
          My Resume
        </Link>
      </div>
    </section>
  );
}

export default Hero;
