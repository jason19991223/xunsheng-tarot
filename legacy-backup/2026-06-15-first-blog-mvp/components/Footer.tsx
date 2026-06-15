import Link from "next/link";
import Image from "next/image";
import { categories } from "@/constants/categories";
import { siteConfig } from "@/constants/site";

const footerLinks = [
  { label: "關於", href: "/about" },
  { label: "聯絡", href: "/contact" },
  { label: "隱私權政策", href: "/privacy" },
  { label: "使用條款", href: "/terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <section>
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.markImage}
              alt={`${siteConfig.name}商標`}
              width={52}
              height={52}
              className="h-[52px] w-[52px] rounded-full border border-mistgold/35 object-cover"
            />
            <h2 className="font-serif text-2xl font-semibold text-parchment">{siteConfig.name}</h2>
          </div>
          <p className="mt-2 max-w-md text-sm leading-7 text-parchment/70">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-xl text-xs leading-6 text-parchment/54">{siteConfig.disclaimer}</p>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-mistgold">分類</h3>
          <div className="mt-3 grid gap-2 text-sm text-parchment/68">
            {categories.map((category) => (
              <Link key={category.slug} href={`/blog?category=${encodeURIComponent(category.name)}`}>
                {category.name}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-mistgold">網站</h3>
          <div className="mt-3 grid gap-2 text-sm text-parchment/68">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
