import { getPostsData } from "@/src/utils/posts";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Ajoy Kumar Das",
};

export default function Blog() {
  const posts = getPostsData();

  return (
    <div>
      <h1 className="text-3xl">Latest Posts</h1>
      {posts.map((post) => {
        const slug = post.slug;
        return (
          <Link key={slug} href={`/blog/${slug}`}>
            {slug}
          </Link>
        );
      })}
    </div>
  );
}
