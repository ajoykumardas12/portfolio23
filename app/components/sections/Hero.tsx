import SocialIcons from "../SocialIcons";

function Hero() {
  return (
    <section className="w-[87%] xs:w-[85%] sm:w-[82%] lg:w-[78%] xl:w-9/12 min-h-[calc(100vh-5rem)] flex items-center mt-20">
      <div className="relative">
        <div className="w-max flex px-4 py-1 bg-gradient-to-r from-brand/50 to-[#0a468b] border border-highlight/40 rounded-r-2xl rounded-tl-2xl mb-6">
          <span className="text-xl md:text-2xl font-medium">नमस्ते</span>
        </div>
        <div className="text-lg leading-5 text-brand">I&apos;m,</div>
        <h1 className="text-name mb-6">AJOY KUMAR DAS</h1>
        <p className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 font-light">
          A full-stack developer with a lot of passion for{" "}
          <span className="bg-gradient-to-r from-brand to-brand/60 bg-clip-text text-transparent font-medium">
            front-end development.
          </span>{" "}
          I&apos;m a lifelong learner and love exploring and building.
        </p>
        <div className="my-10">
          <SocialIcons />
        </div>
        <button className="px-4 py-2 text-highlight text-lg border border-highlight rounded">
          My Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
