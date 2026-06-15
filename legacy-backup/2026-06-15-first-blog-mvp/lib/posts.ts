import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Post, PostFrontmatter } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function assertString(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Post frontmatter field "${field}" must be a non-empty string.`);
  }

  return value;
}

function assertBoolean(value: unknown, field: string): boolean {
  if (typeof value !== "boolean") {
    throw new Error(`Post frontmatter field "${field}" must be a boolean.`);
  }

  return value;
}

function assertStringArray(value: unknown, field: string): string[] {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
    throw new Error(`Post frontmatter field "${field}" must be a string array.`);
  }

  return value;
}

function parseFrontmatter(data: Record<string, unknown>, fallbackSlug: string): PostFrontmatter {
  return {
    title: assertString(data.title, "title"),
    slug: typeof data.slug === "string" && data.slug.length > 0 ? data.slug : fallbackSlug,
    description: assertString(data.description, "description"),
    date: assertString(data.date, "date"),
    category: assertString(data.category, "category"),
    tags: assertStringArray(data.tags, "tags"),
    readingTime: assertString(data.readingTime, "readingTime"),
    featured: assertBoolean(data.featured, "featured"),
    draft: assertBoolean(data.draft, "draft")
  };
}

function getPostFiles(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"));
}

export function getAllPosts({ includeDrafts = false }: { includeDrafts?: boolean } = {}): Post[] {
  return getPostFiles()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = parseFrontmatter(data, slug);

      return {
        ...frontmatter,
        content
      };
    })
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(limit = 3): Post[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAllTags(): string[] {
  return Array.from(new Set(getAllPosts().flatMap((post) => post.tags))).sort((a, b) =>
    a.localeCompare(b, "zh-Hant")
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export async function getPostHtml(post: Post): Promise<string> {
  const processedContent = await remark().use(html).process(post.content);
  return processedContent.toString();
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const tagMatches = candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      const categoryMatch = candidate.category === post.category ? 2 : 0;

      return {
        post: candidate,
        score: tagMatches + categoryMatch
      };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((candidate) => candidate.post)
    .slice(0, limit);
}
