import { Space_Grotesk } from "next/font/google";

import youtubeVideos from "@data/constants/youtubeVideos";

import YoutubeVideo from "@components/sections/YoutubeVideo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Youtube = () => {
  return (
    <section
      className="flex flex-col justify-center py-16 sm:py-20 w-full lg:w-4/5"
      id="skills"
    >
      <h2 className={`${spaceGrotesk.className} section-heading mb-5`}>
        <span className="text-highlight">#</span> Youtube
      </h2>
      <p className="mb-3 font-light">
        I love CSS and solving CSS challenges.{" "}
        <a
          href="https://cssbattle.dev/"
          className="link"
          rel="noopener noreferrer"
          target="_blank"
          title="CSSBattle"
          aria-label="Link to CSSBatlle"
        >
          CSSBattle
        </a>{" "}
        is one such platform where I solve daily CSS challenges and I&apos;ve
        been uploading the videos.
      </p>
      <p className="mb-8 text-base sm:text-lg">Here are some of the videos:</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-3 sm:[&>*:nth-child(3)]:col-start-2 xl:[&>*:nth-child(3)]:col-start-5">
        {youtubeVideos.map((ytVideo) => (
          <YoutubeVideo key={ytVideo.link} {...ytVideo} />
        ))}
      </div>
    </section>
  );
};

export default Youtube;
