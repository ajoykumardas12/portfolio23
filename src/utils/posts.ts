import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

import { PostsData } from "../types/posts";
import { capitalizeString } from "./common";

const contentsFolderName = "blog-content";

export const getPostsData = () => {
  const fileNames = readdirSync(path.join(process.cwd(), contentsFolderName));

  const posts: PostsData[] = fileNames.map((fileName) => {
    const file = path.join(process.cwd(), contentsFolderName, fileName);
    const slug = fileName.slice(0, -4);

    const markdownx = readFileSync(file, "utf-8");
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
  const fileName = `${slug}.mdx`;
  const file = path.join(process.cwd(), contentsFolderName, fileName);
  if (existsSync(file)) {
    const markdownx = readFileSync(file, "utf8");
    const matterResult = matter(markdownx);
    const { data, content } = matterResult;

    data.readingTime = getReadingTime(content);

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

const getReadingTime = (content: string = ""): number => {
  const plainText = content;
  const wpm = 238; // https://wordsrated.com/reading-speed-statistics/
  const words = plainText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wpm);

  return readingTime;
};
