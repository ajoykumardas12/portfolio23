import {
  getPostContent,
  getPostsData,
  getTitleFromSlug,
} from "@/src/utils/posts";

import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import Tag from "@components/blog/Tag";

type MetadataProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: MetadataProps) {
  const title = `${getTitleFromSlug(params.slug)} | Ajoy's blog`;
  return {
    title: title,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostContent(params.slug);

  const plainText = post ? post.content : "";
  const wpm = 238; // https://wordsrated.com/reading-speed-statistics/
  const words = plainText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wpm);

  return post ? (
    <section className="flex flex-col items-center">
      <article className="my-6 flex max-w-xl flex-col items-center space-y-12 text-black dark:text-[#c7cfd9] lg:w-[58%] ">
        <div className="flex gap-1 px-4 text-center text-sm font-light text-neutral-400">
          {post.data.tags.map(
            (tag: string, index: number, elements: string[]) => {
              const isNext = elements[index + 1];
              return (
                <div key={tag}>
                  <Tag tag={tag.toLowerCase()} />
                  {isNext ? ", " : ""}
                </div>
              );
            }
          )}
        </div>
        <h1 className="px-4 text-center text-3xl font-bold dark:text-white">
          {post.data.title}
        </h1>
        <div className="w-full px-4">
          {
            <Image
              className="aspect-video w-full rounded-md bg-neutral-200 object-contain dark:bg-neutral-800"
              src={post.data.banner}
              alt="banner"
              width={600}
              height={400}
            />
          }
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-1 px-4">
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-left text-sm font-light text-neutral-400">
              {readingTime} {readingTime != 1 ? "minutes" : "minute"} read...
            </p>
            <p className="flex-none text-right text-sm">
              Written on{" "}
              {post.data.date.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        content:
        <MDXRemote source={post.content} />
      </article>
    </section>
  ) : (
    <div className="mx-5 flex flex-col items-center justify-center gap-2 text-lg xs:flex-row">
      We cannot find this post.
    </div>
  );
}
