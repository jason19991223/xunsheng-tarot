"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article, Quiz, TarotCard } from "@/types/content";

type SearchItem = {
  type: "文章" | "測驗" | "牌義";
  title: string;
  description: string;
  href: string;
  keywords: string;
};

export function SearchClient({
  articles,
  quizzes,
  tarotCards
}: {
  articles: Article[];
  quizzes: Quiz[];
  tarotCards: TarotCard[];
}) {
  const [query, setQuery] = useState("");

  const items = useMemo<SearchItem[]>(() => {
    return [
      ...articles.map((article) => ({
        type: "文章" as const,
        title: article.title,
        description: article.excerpt,
        href: `/articles/${article.slug}`,
        keywords: [article.title, article.excerpt, article.categoryLabel, ...article.tags].join(" ")
      })),
      ...quizzes.map((quiz) => ({
        type: "測驗" as const,
        title: quiz.title,
        description: quiz.excerpt,
        href: `/quiz/${quiz.slug}`,
        keywords: [quiz.title, quiz.excerpt, quiz.intro].join(" ")
      })),
      ...tarotCards.map((card) => ({
        type: "牌義" as const,
        title: `${card.name} ${card.englishName}`,
        description: card.selfReflection,
        href: `/tarot-meanings/${card.slug}`,
        keywords: [card.name, card.englishName, ...card.keywords, card.selfReflection].join(" ")
      }))
    ];
  }, [articles, quizzes, tarotCards]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return items.slice(0, 12);
    }

    return items.filter((item) => item.keywords.toLowerCase().includes(normalizedQuery));
  }, [items, query]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <label className="block">
        <span className="text-sm font-semibold text-violetdeep">輸入關鍵字</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="例如：戀愛、安全感、愚者、守護水晶"
          className="mt-2 w-full rounded-full border border-plum/15 bg-white px-5 py-3 text-base outline-none focus:border-mistgold"
        />
      </label>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {results.map((item) => (
          <Link key={`${item.type}-${item.href}`} href={item.href} className="rounded-lg border border-plum/10 bg-white p-5">
            <span className="rounded-full bg-rose/16 px-3 py-1 text-xs font-semibold text-plum">{item.type}</span>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-midnight">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-ink/64">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
