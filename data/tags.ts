import type { Tag } from "@/types/content";

export const tags: Tag[] = [
  { name: "戀愛", slug: "love" },
  { name: "曖昧", slug: "ambiguous-love" },
  { name: "復合", slug: "getting-back-together" },
  { name: "安全感", slug: "security" },
  { name: "內在小孩", slug: "inner-child" },
  { name: "直覺", slug: "intuition" },
  { name: "塔羅新手", slug: "tarot-beginner" },
  { name: "守護水晶", slug: "guardian-crystal" },
  { name: "自我探索", slug: "self-discovery" },
  { name: "金錢安全感", slug: "money-security" },
  { name: "關係課題", slug: "relationship-lesson" }
];

export function getTagBySlug(slug: string): Tag | undefined {
  return tags.find((tag) => tag.slug === slug);
}

export function getTagSlug(name: string): string {
  return tags.find((tag) => tag.name === name)?.slug ?? encodeURIComponent(name);
}
