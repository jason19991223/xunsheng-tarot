import type { MetadataRoute } from "next";
import { articles, categoryLabels } from "@/data/articles";
import { siteContent } from "@/data/siteContent";
import { tags } from "@/data/tags";
import { quizzes } from "@/data/quizzes";
import { tarotCards } from "@/data/tarotCards";

const routes = [
  "",
  "/quiz",
  "/articles",
  "/search",
  "/tarot-meanings",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteContent.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteContent.url}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const quizRoutes = quizzes.map((quiz) => ({
    url: `${siteContent.url}/quiz/${quiz.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const tarotRoutes = tarotCards.map((card) => ({
    url: `${siteContent.url}/tarot-meanings/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const categoryRoutes = Object.keys(categoryLabels).map((category) => ({
    url: `${siteContent.url}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const tagRoutes = tags.map((tag) => ({
    url: `${siteContent.url}/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.65
  }));

  return [...staticRoutes, ...categoryRoutes, ...tagRoutes, ...articleRoutes, ...quizRoutes, ...tarotRoutes];
}
