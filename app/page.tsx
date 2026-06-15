import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeader } from "@/components/SectionHeader";
import { articles, getArticlesByCategory } from "@/data/articles";
import { siteContent } from "@/data/siteContent";
import { quizzes } from "@/data/quizzes";
import { tarotCards } from "@/data/tarotCards";

export default function HomePage() {
  const latestArticles = articles.slice(-6).reverse();
  const editorPicks = articles.slice(0, 3);
  const beginnerArticles = getArticlesByCategory("tarot-beginner").slice(0, 3);
  const relationshipArticles = getArticlesByCategory("relationship").slice(0, 3);
  const selfDiscoveryArticles = getArticlesByCategory("self-discovery").slice(0, 3);
  const weeklyReads = articles.slice(6, 9);
  const featuredQuizzes = quizzes.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-plum/10 bg-[radial-gradient(circle_at_top_left,rgba(216,163,167,0.34),transparent_30rem),linear-gradient(135deg,#fbf3e7_0%,#f3e2d7_48%,#e9d6ee_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold text-violetdeep">Tarot, Quiz, Self Discovery</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-midnight sm:text-6xl">
              {siteContent.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">{siteContent.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quiz"
                className="rounded-full bg-plum px-6 py-3 text-center text-sm font-semibold text-cream shadow-sm transition hover:bg-midnight"
              >
                開始心理測驗
              </Link>
              <Link
                href="/articles"
                className="rounded-full border border-plum/20 bg-white/60 px-6 py-3 text-center text-sm font-semibold text-plum transition hover:border-mistgold"
              >
                閱讀塔羅文章
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
            <div className="absolute -inset-3 rounded-full bg-mistgold/14 blur-3xl" />
            <Image
              src={siteContent.coverImage}
              alt={`${siteContent.name}部落格縮圖`}
              width={1024}
              height={1024}
              priority
              className="relative aspect-[4/3] w-full rounded-2xl border border-white/70 object-cover shadow-lg sm:aspect-square sm:rounded-[24px] lg:shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <SectionHeader
          eyebrow="Explore"
          title="熱門心理測驗"
          description="測驗定位為娛樂與自我探索，幫助你整理關係、選擇與當下狀態。"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quizzes.slice(0, 6).map((quiz) => (
            <Link key={quiz.slug} href={`/quiz/${quiz.slug}`} className="rounded-lg border border-plum/10 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-violetdeep">{quiz.questions.length} 題</p>
              <h2 className="mt-2 font-serif text-xl font-semibold text-midnight">{quiz.title}</h2>
              <p className="mt-2 text-sm leading-7 text-ink/64">{quiz.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white/58 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader eyebrow="Latest" title="最新文章" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <SectionHeader eyebrow="Editor Picks" title="編輯精選" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {editorPicks.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {[
        ["塔羅新手入門", beginnerArticles],
        ["情感關係專區", relationshipArticles],
        ["自我探索專區", selfDiscoveryArticles],
        ["本週推薦閱讀", weeklyReads]
      ].map(([title, sectionArticles]) => (
        <section key={title as string} className="border-t border-plum/10 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader title={title as string} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {(sectionArticles as typeof articles).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white/58 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Quiz" title="測驗推薦區" />
            <div className="mt-5 grid gap-3">
              {featuredQuizzes.map((quiz) => (
                <Link key={quiz.slug} href={`/quiz/${quiz.slug}`} className="rounded-lg bg-cream p-4">
                  <p className="font-serif text-lg font-semibold text-midnight">{quiz.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{quiz.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Cards" title="塔羅牌義學習" />
            <div className="mt-5 grid gap-3">
              {tarotCards.slice(0, 6).map((card) => (
                <Link key={card.slug} href={`/tarot-meanings/${card.slug}`} className="rounded-lg bg-cream p-4">
                  <p className="font-serif text-lg font-semibold text-midnight">{card.name}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{card.keywords.join(" / ")}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
