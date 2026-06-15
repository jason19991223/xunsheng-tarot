import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { PageIntro } from "@/components/PageIntro";
import { getArticlesByTag } from "@/data/articles";
import { siteContent } from "@/data/siteContent";
import { getTagBySlug, tags } from "@/data/tags";

type TagPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tags.map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    return { title: "標籤不存在" };
  }

  return {
    title: `#${tag.name}`,
    description: `閱讀尋聲塔羅中與「${tag.name}」相關的內容。`,
    alternates: {
      canonical: `${siteContent.url}/tag/${tag.slug}`
    },
    openGraph: {
      title: `#${tag.name}｜${siteContent.name}`,
      description: `閱讀尋聲塔羅中與「${tag.name}」相關的內容。`,
      url: `${siteContent.url}/tag/${tag.slug}`
    }
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const taggedArticles = getArticlesByTag(tag.name);

  return (
    <>
      <PageIntro label="Tag" title={`#${tag.name}`} description={`整理與「${tag.name}」相關的文章。`} />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
        {taggedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </>
  );
}
