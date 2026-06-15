import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import { PageIntro } from "@/components/PageIntro";
import { articles, categoryLabels } from "@/data/articles";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "塔羅文章",
  description: "尋聲塔羅文章入口，整理塔羅新手、牌義、情感關係、自我探索與水晶能量內容。",
  alternates: {
    canonical: `${siteContent.url}/articles`
  },
  openGraph: {
    title: `塔羅文章｜${siteContent.name}`,
    description: "尋聲塔羅文章入口，整理塔羅新手、牌義、情感關係、自我探索與水晶能量內容。",
    url: `${siteContent.url}/articles`
  }
};

export default function ArticlesPage() {
  return (
    <>
      <PageIntro
        label="Articles"
        title="塔羅文章"
        description="閱讀塔羅、關係與自我探索文章。文章資料目前集中管理在 data/articles.ts。"
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {Object.entries(categoryLabels).map(([slug, label]) => (
            <Link key={slug} href={`/category/${slug}`} className="rounded-full bg-white px-3 py-1.5 text-sm text-plum">
              {label}
            </Link>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-8">
          <AdSlot />
        </div>
      </section>
    </>
  );
}
