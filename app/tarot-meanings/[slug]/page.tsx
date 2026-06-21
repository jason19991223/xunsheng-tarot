import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ShareButtons } from "@/components/ShareButtons";
import { getArticleBySlug } from "@/data/articles";
import { siteContent } from "@/data/siteContent";
import { getTarotCardBySlug, tarotCards } from "@/data/tarotCards";

type TarotCardPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tarotCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: TarotCardPageProps): Promise<Metadata> {
  const { slug } = await params;
  const card = getTarotCardBySlug(slug);

  if (!card) {
    return { title: "牌義不存在" };
  }

  return {
    title: `${card.name}牌義`,
    description: card.selfReflection,
    alternates: {
      canonical: `${siteContent.url}/tarot-meanings/${card.slug}`
    }
  };
}

export default async function TarotCardDetailPage({ params }: TarotCardPageProps) {
  const { slug } = await params;
  const card = getTarotCardBySlug(slug);

  if (!card) {
    notFound();
  }

  const relatedArticles = card.relatedArticleSlugs
    .map((articleSlug) => getArticleBySlug(articleSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        <Link href="/tarot-meanings" className="text-sm font-semibold text-violetdeep">
          返回牌義列表
        </Link>
        <header className="mt-6 rounded-xl border border-plum/10 bg-white p-6">
          <p className="text-sm font-semibold text-violetdeep">大阿爾克那 / {card.number}</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-midnight">
            {card.name} <span className="text-2xl text-ink/48">{card.englishName}</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink/68">{card.selfReflection}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {card.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full bg-rose/16 px-3 py-1 text-xs text-plum">
                {keyword}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold text-midnight">核心含義</h2>
          <div className="mt-4 grid gap-4 text-base leading-8 text-ink/72">
            {card.coreMeaning.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl font-semibold text-midnight">陰影提醒</h2>
          <div className="mt-4 grid gap-4 text-base leading-8 text-ink/72">
            {card.shadowMeaning.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-xl font-semibold text-midnight">感情解讀</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{card.loveReading}</p>
          </div>
          <div className="rounded-lg bg-white p-5">
            <h2 className="font-serif text-xl font-semibold text-midnight">工作解讀</h2>
            <p className="mt-3 text-sm leading-7 text-ink/68">{card.careerReading}</p>
          </div>
        </section>

        <section className="mt-8 rounded-lg bg-white p-5">
          <h2 className="font-serif text-2xl font-semibold text-midnight">自我探索提醒</h2>
          <p className="mt-4 text-sm leading-7 text-ink/68">{card.selfReflection}</p>
        </section>

        <div className="mt-8">
          <ShareButtons title={`${card.name}牌義`} />
        </div>

        {relatedArticles.length > 0 ? (
          <section className="mt-10 border-t border-plum/10 pt-6">
            <h2 className="font-serif text-2xl font-semibold text-midnight">延伸閱讀</h2>
            <div className="mt-4 grid gap-3">
              {relatedArticles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="rounded-lg bg-white p-4">
                  {article.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "首頁", item: siteContent.url },
                { "@type": "ListItem", position: 2, name: "塔羅牌義", item: `${siteContent.url}/tarot-meanings` },
                { "@type": "ListItem", position: 3, name: card.name, item: `${siteContent.url}/tarot-meanings/${card.slug}` }
              ]
            })
          }}
        />
      </div>
      <aside className="grid content-start gap-4">
        <AdSlot />
      </aside>
    </article>
  );
}
