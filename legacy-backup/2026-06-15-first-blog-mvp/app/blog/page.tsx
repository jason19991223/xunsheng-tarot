import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/constants/categories";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "文章",
  description: "閱讀尋聲塔羅的托特塔羅牌義、每日抽牌、牌陣教學、占星卡巴拉與自我探索文章。"
};

type BlogPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const posts = getAllPosts();
  const selectedCategory = category ? decodeURIComponent(category) : "";
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <SectionHeading
        eyebrow="Blog"
        title="文章"
        description="所有文章依發布時間排列，你可以用分類快速回到正在學習的路徑。"
      />

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full border px-3 py-1.5 text-sm ${
            selectedCategory === ""
              ? "border-mistgold bg-mistgold text-ink"
              : "border-white/12 text-parchment/72"
          }`}
        >
          全部
        </Link>
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/blog?category=${encodeURIComponent(item.name)}`}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              selectedCategory === item.name
                ? "border-mistgold bg-mistgold text-ink"
                : "border-white/12 text-parchment/72 hover:border-mistgold/70"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <aside className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-4">
        <p className="text-sm font-medium text-mistgold">標籤</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/8 px-2.5 py-1 text-xs text-parchment/70">
              #{tag}
            </span>
          ))}
        </div>
      </aside>

      <div className="mt-8 grid gap-5">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="mt-10 rounded-lg border border-white/10 p-6 text-parchment/70">
          目前這個分類還沒有文章。
        </p>
      ) : null}
    </div>
  );
}
