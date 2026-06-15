import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { PageIntro } from "@/components/PageIntro";
import { categoryLabels, getArticlesByCategory } from "@/data/articles";
import { siteContent } from "@/data/siteContent";
import type { ArticleCategory } from "@/types/content";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const categorySlugs = Object.keys(categoryLabels) as ArticleCategory[];

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ slug }));
}

function isArticleCategory(slug: string): slug is ArticleCategory {
  return slug in categoryLabels;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isArticleCategory(slug)) {
    return { title: "分類不存在" };
  }

  return {
    title: categoryLabels[slug],
    description: `閱讀尋聲塔羅的${categoryLabels[slug]}內容。`,
    alternates: {
      canonical: `${siteContent.url}/category/${slug}`
    },
    openGraph: {
      title: `${categoryLabels[slug]}｜${siteContent.name}`,
      description: `閱讀尋聲塔羅的${categoryLabels[slug]}內容。`,
      url: `${siteContent.url}/category/${slug}`
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  if (!isArticleCategory(slug)) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <>
      <PageIntro
        label="Category"
        title={categoryLabels[slug]}
        description={`整理${categoryLabels[slug]}相關文章，作為後續 SEO 與內容擴充入口。`}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </>
  );
}
