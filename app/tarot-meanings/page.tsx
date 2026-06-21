import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/data/siteContent";
import { tarotCards } from "@/data/tarotCards";

export const metadata: Metadata = {
  title: "塔羅牌義",
  description: "完整大阿爾克那 22 張塔羅牌義，包含核心象徵、陰影提醒、感情、工作與自我探索提醒。",
  alternates: {
    canonical: `${siteContent.url}/tarot-meanings`
  },
  openGraph: {
    title: `塔羅牌義｜${siteContent.name}`,
    description: "完整大阿爾克那 22 張塔羅牌義，包含核心象徵、陰影提醒、感情、工作與自我探索提醒。",
    url: `${siteContent.url}/tarot-meanings`
  }
};

export default function TarotMeaningsPage() {
  return (
    <>
      <PageIntro
        label="Tarot Meanings"
        title="塔羅牌義"
        description="從大阿爾克那開始，建立可長期擴充的牌義學習入口。"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {tarotCards.map((card) => (
          <article key={card.slug} className="rounded-lg border border-plum/10 bg-white p-5">
            <p className="text-sm font-semibold text-violetdeep">
              {card.arcana === "major" ? "大阿爾克那" : "小阿爾克那"} / {card.number}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-midnight">
              <Link href={`/tarot-meanings/${card.slug}`}>{card.name}</Link>
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink/64">{card.selfReflection}</p>
          </article>
        ))}
      </section>
    </>
  );
}
