import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { getAllPosts, getPostBySlug, getPostHtml, getRelatedPosts } from "@/lib/posts";
import { TagList } from "@/components/TagList";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在"
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: siteConfig.coverImage,
          width: 1024,
          height: 1024,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [siteConfig.coverImage]
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await getPostHtml(post);
  const relatedPosts = getRelatedPosts(post);

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/blog" className="text-sm text-mistgold hover:text-parchment">
        返回文章列表
      </Link>
      <header className="mt-8 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-parchment/58">
          <span>{post.date}</span>
          <span aria-hidden="true">/</span>
          <span>{post.category}</span>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-parchment md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-parchment/72">{post.description}</p>
        <div className="mt-5">
          <TagList tags={post.tags} />
        </div>
      </header>

      <div
        className="prose prose-invert mt-9 max-w-none prose-headings:font-serif prose-headings:text-parchment prose-a:content-link prose-p:leading-8 prose-li:leading-8 prose-strong:text-parchment"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div className="mt-12 rounded-lg border border-mistgold/25 bg-mistgold/10 p-5 text-sm leading-7 text-parchment/78">
        本文內容為塔羅學習與自我探索紀錄，不構成醫療、法律、投資或重大人生決策建議。
      </div>

      {relatedPosts.length > 0 ? (
        <section className="mt-12 border-t border-white/10 pt-8">
          <h2 className="font-serif text-2xl font-semibold text-parchment">延伸閱讀</h2>
          <div className="mt-5 grid gap-4">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-mistgold/50"
              >
                <p className="font-serif text-xl text-parchment">{relatedPost.title}</p>
                <p className="mt-2 text-sm text-parchment/62">{relatedPost.description}</p>
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
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: siteConfig.name
            },
            mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`
          })
        }}
      />
    </article>
  );
}
