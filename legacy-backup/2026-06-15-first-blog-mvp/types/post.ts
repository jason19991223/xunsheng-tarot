export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  draft: boolean;
  content: string;
};

export type PostFrontmatter = Omit<Post, "content">;
