import Link from "next/link";
import { getTagSlug } from "@/data/tags";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="rounded-lg border border-plum/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-mistgold/60 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink/50">
        <span>{article.categoryLabel}</span>
        <span>/</span>
        <span>{article.publishedAt}</span>
        <span>/</span>
        <span>{article.readingTime}</span>
      </div>
      <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-midnight">
        <Link href={`/articles/${article.slug}`} className="hover:text-violetdeep">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-ink/64">{article.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Link key={tag} href={`/tag/${getTagSlug(tag)}`} className="rounded-full bg-rose/16 px-3 py-1 text-xs text-plum">
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
