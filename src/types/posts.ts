export type PostsData = {
  slug: string;
  postMetaData: {
    title: string;
    date: Date;
    excerpt: string;
    banner: string;
    tags: string[];
  };
};
