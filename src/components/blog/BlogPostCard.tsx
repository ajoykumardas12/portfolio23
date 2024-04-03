import { getPostContent } from "@/src/utils/posts";

import Image from "next/image";
import Link from "next/link";

export default async function BlogPostCard({ slug }: { slug: string }) {
  const postContent = await getPostContent(slug);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const dateString = postContent?.data.date
    .toLocaleString("en-US", options)
    .replace(/\//g, ".");

  return (
    <Link
      href={`/blogs/${slug}`}
      className="w-72 h-full flex flex-col gap-3 cursor-pointer items-center rounded-lg p-2 drop-shadow-sm hover:bg-secondary-bg hover:drop-shadow-lg dark:bg-[#1E293B] dark:hover:bg-[#293548] dark:hover:drop-shadow-2xl md:p-3"
    >
      <Image
        className="block h-28 min-w-1/3 max-w-1/3 rounded-md object-cover md:h-28 lg:h-32 xl:h-36"
        src={postContent?.data.banner}
        alt="Post Image"
        width={384}
        height={240}
      />
      <div className="flex w-full flex-col gap-4 justify-center">
        <div className="inline text-sm text-mid">
          {dateString} , {postContent?.data.readingTime}{" "}
          {postContent?.data.readingTime === 1 ? "min" : "mins"} read
        </div>
        <div className="mb-2 text-xl font-semibold">
          {postContent?.data.title}
        </div>
      </div>
    </Link>
  );
}
