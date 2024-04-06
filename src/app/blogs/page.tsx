import { getPostsData } from "@/src/utils/posts";

import { Metadata } from "next";

import BlogPostCard from "@components/blog/BlogPostCard";

export const metadata: Metadata = {
  title: "Blogs | Ajoy Kumar Das",
};

export default function Blog() {
  const posts = getPostsData();

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl mb-10">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 justify-items-center">
        {posts.map((post) => {
          const slug = post.slug;
          return <BlogPostCard key={slug} slug={slug} />;
        })}
      </div>
    </div>
  );
}
