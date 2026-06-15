import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ShareButtons } from "@/components/ShareButtons";
import { articles, getArticleBySlug } from "@/data/articles";
import { getQuizBySlug } from "@/data/quizzes";
import { siteContent } from "@/data/siteContent";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "文章不存在" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `${siteContent.url}/articles/${article.slug}`
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${siteContent.url}/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      images: [siteContent.coverImage]
    }
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedArticles
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        <Link href="/articles" className="text-sm font-semibold text-violetdeep">
          返回文章列表
        </Link>
        <header className="mt-6 border-b border-plum/10 pb-6">
          <div className="flex flex-wrap gap-2 text-sm text-ink/52">
            <span>{article.categoryLabel}</span>
            <span>/</span>
            <span>{article.publishedAt}</span>
            <span>/</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-midnight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink/68">{article.excerpt}</p>
        </header>

        <div className="mt-8 grid gap-5 text-base leading-8 text-ink/72">
          {article.content.map((block) =>
            block.startsWith("### ") ? (
              <h3 key={block} className="mt-4 font-serif text-2xl font-semibold text-midnight">
                {block.replace("### ", "")}
              </h3>
            ) : block.startsWith("## ") ? (
              <h2 key={block} className="mt-6 font-serif text-3xl font-semibold text-midnight">
                {block.replace("## ", "")}
              </h2>
            ) : (
              <p key={block}>{block}</p>
            )
          )}
        </div>

        <div className="mt-8">
          <AdSlot label="文章內廣告版位預留" />
        </div>

        <div className="mt-8">
          <ShareButtons title={article.title} />
        </div>

        <p className="mt-8 rounded-lg border border-mistgold/30 bg-mistgold/10 p-4 text-xs leading-6 text-ink/58">
          {siteContent.disclaimer}
        </p>

        {article.relatedQuizzes.length > 0 ? (
          <section className="mt-10 border-t border-plum/10 pt-6">
            <h2 className="font-serif text-2xl font-semibold text-midnight">相關心理測驗</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.relatedQuizzes.map((quizSlug) => (
                <Link key={quizSlug} href={`/quiz/${quizSlug}`} className="rounded-full bg-white px-3 py-1.5 text-sm text-plum">
                  {getQuizBySlug(quizSlug)?.title ?? quizSlug}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {relatedArticles.length > 0 ? (
          <section className="mt-10 border-t border-plum/10 pt-6">
            <h2 className="font-serif text-2xl font-semibold text-midnight">延伸閱讀</h2>
            <div className="mt-4 grid gap-3">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/articles/${relatedArticle.slug}`} className="rounded-lg bg-white p-4">
                  <p className="font-serif text-xl font-semibold text-midnight">{relatedArticle.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{relatedArticle.excerpt}</p>
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
              "@type": "Article",
              headline: article.title,
              description: article.excerpt,
              datePublished: article.publishedAt,
              author: { "@type": "Organization", name: siteContent.name },
              mainEntityOfPage: `${siteContent.url}/articles/${article.slug}`
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "首頁", item: siteContent.url },
                { "@type": "ListItem", position: 2, name: "文章", item: `${siteContent.url}/articles` },
                { "@type": "ListItem", position: 3, name: article.title, item: `${siteContent.url}/articles/${article.slug}` }
              ]
            })
          }}
        />
      </div>

      <aside className="grid content-start gap-4">
        <AdSlot />
        <Link href={`/category/${article.category}`} className="rounded-lg bg-white p-4 text-sm font-semibold text-plum">
          更多{article.categoryLabel}文章
        </Link>
      </aside>
    </article>
  );
}
