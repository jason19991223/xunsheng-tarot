import Link from "next/link";
import type { Post } from "@/types/post";
import { TagList } from "@/components/TagList";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-soft transition hover:border-mistgold/50">
      <div className="flex flex-wrap items-center gap-2 text-xs text-parchment/58">
        <span>{post.date}</span>
        <span aria-hidden="true">/</span>
        <span>{post.category}</span>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-parchment">
        <Link href={`/blog/${post.slug}`} className="hover:text-mistgold">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-7 text-parchment/72">{post.description}</p>
      <div className="mt-4">
        <TagList tags={post.tags} />
      </div>
    </article>
  );
}
