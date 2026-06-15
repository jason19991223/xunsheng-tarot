import Link from "next/link";
import Image from "next/image";
import { categories } from "@/constants/categories";
import { siteConfig } from "@/constants/site";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  const featuredPosts = getFeaturedPosts(3);

  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto grid min-h-[calc(100vh-112px)] max-w-6xl content-center gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div>
            <p className="text-sm font-medium text-mistgold">Thoth Tarot Journal</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-parchment md:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-parchment/88">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-parchment/70">{siteConfig.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full bg-mistgold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-parchment"
              >
                閱讀文章
              </Link>
              <Link
                href="/categories"
                className="rounded-full border border-white/14 px-5 py-3 text-sm font-semibold text-parchment transition hover:border-mistgold hover:text-mistgold"
              >
                探索分類
              </Link>
            </div>
          </div>
          <aside className="self-end overflow-hidden rounded-lg border border-mistgold/25 bg-ink/40 shadow-soft">
            <Image
              src={siteConfig.coverImage}
              alt={`${siteConfig.name}部落格縮圖`}
              width={1024}
              height={1024}
              priority
              className="aspect-square w-full object-cover"
            />
            <div className="p-6">
            <p className="text-sm text-mistgold">推薦閱讀</p>
            <div className="mt-4 grid gap-4">
              {featuredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <p className="font-serif text-xl text-parchment group-hover:text-mistgold">
                    {post.title}
                  </p>
                  <p className="mt-1 text-xs text-parchment/56">{post.category} / {post.readingTime}</p>
                </Link>
              ))}
            </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <SectionHeading eyebrow="Latest" title="最新文章" description="從牌義、牌陣到每日抽牌，把象徵慢慢整理成可以回到生活的理解。" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-parchment py-14 text-ink">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Categories"
            title="文章分類入口"
            description="依照學習路徑與閱讀情境，選擇你此刻想靠近的主題。"
            tone="light"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${encodeURIComponent(category.name)}`}
                className="rounded-lg border border-ink/10 bg-white p-5 transition hover:border-violetdeep/50"
              >
                <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/66">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
