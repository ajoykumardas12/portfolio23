import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

import { PostsData } from "../types/posts";
import { capitalizeString } from "./common";

export const getPostsData = () => {
  const slugs = readdirSync("blog-content");

  const posts: PostsData[] = slugs.map((slug) => {
    const markdownx = readFileSync(
      path.join("blog-content", slug, "index.mdx"),
      "utf-8"
    );
    const { data } = matter(markdownx);

    const postMetaData = {
      title: data.title || "",
      date: new Date(data.date) || new Date(),
      excerpt: data.excerpt || "",
      banner: data.banner || "",
      tags: data.tags || [],
    };

    return { slug, postMetaData };
  });

  return posts;
};

export const getPostContent = async (slug: string) => {
  const folderName = "blog-content";
  const file = path.join(process.cwd(), folderName, slug, "index.mdx");
  if (existsSync(file)) {
    const markdownx = readFileSync(file, "utf8");
    const matterResult = matter(markdownx);
    const { data, content } = matterResult;
    return { data, content };
  } else {
    return null;
  }
};

export const getTitleFromSlug = (slug: string) => {
  const title = slug
    .split("-")
    .map((slugPart) => {
      return capitalizeString(slugPart);
    })
    .join(" ");

  return title;
};
