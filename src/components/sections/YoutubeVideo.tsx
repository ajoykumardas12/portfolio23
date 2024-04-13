import { YoutubeVideoProps } from "@/src/types";

//   iframe min-width: 321px ensures thumbnail is not blurry

const YoutubeVideo = ({ title, link }: YoutubeVideoProps) => {
  return (
    <article className="bg-dark/40 rounded-md overflow-hidden border-2 border-transparent hover:border-brand transition-colors duration-200 col-span-2">
      <div className="w-full flex-1 h-44">
        <iframe
          width="100%"
          height="100%"
          style={{ aspectRatio: "16:9", minWidth: "321px" }}
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-sm line-clamp-2">{title}</h3>
      </div>
    </article>
  );
};

export default YoutubeVideo;
