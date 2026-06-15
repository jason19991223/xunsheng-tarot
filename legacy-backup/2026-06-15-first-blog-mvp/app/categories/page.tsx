import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/constants/categories";
import { getPostsByCategory } from "@/lib/posts";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "分類",
  description: "尋聲塔羅文章分類：托特塔羅牌義、每日抽牌、牌陣教學、占星與卡巴拉、塔羅學習筆記與自我探索。"
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <SectionHeading
        eyebrow="Categories"
        title="分類"
        description="每個分類都是一條靠近象徵的路，也是一種整理自己的方式。"
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = getPostsByCategory(category.name).length;

          return (
            <Link
              key={category.slug}
              href={`/blog?category=${encodeURIComponent(category.name)}`}
              className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:border-mistgold/50"
            >
              <p className="text-sm text-mistgold">{count} 篇文章</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-parchment">
                {category.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-parchment/68">{category.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
