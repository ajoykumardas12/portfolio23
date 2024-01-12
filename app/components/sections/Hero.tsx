import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

import externalLinks from "@data/constants/external-links";

import SocialIcons from "@components/SocialIcons";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Hero() {
  return (
    <section className="mt-16 flex min-h-[calc(100vh-5rem)] w-[87%] items-center xs:w-[85%] sm:w-[82%] md:mt-20 lg:w-[78%] xl:w-9/12">
      <div className="relative">
        <div className="mb-6 flex w-max rounded-r-2xl rounded-tl-2xl border border-highlight/40 bg-gradient-to-r from-brand/50 to-[#0a468b] px-4 py-1">
          <span className="text-xl font-medium md:text-2xl">नमस्ते</span>
        </div>
        <div className="text-lg leading-5 text-brand">I&apos;m,</div>
        <h1 className="text-name mb-6">AJOY KUMAR DAS</h1>
        <p
          className={`${spaceGrotesk.className} pointer-events-none w-full font-light transition-colors hover:text-mid/10 md:w-10/12 lg:w-8/12 xl:w-7/12`}
        >
          A full-stack developer with a strong focus on{" "}
          <span className="pointer-events-auto bg-gradient-to-r from-brand to-brand/60 bg-clip-text font-semibold text-transparent">
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
          className={`${spaceGrotesk.className} rounded border border-highlight px-4 py-2 text-lg text-highlight transition-colors hover:bg-dark`}
        >
          My Resume
        </Link>
      </div>
    </section>
  );
}

export default Hero;
