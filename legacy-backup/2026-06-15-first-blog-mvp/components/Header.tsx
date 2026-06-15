import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/constants/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/88 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <Image
            src={siteConfig.markImage}
            alt={`${siteConfig.name}商標`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full border border-mistgold/35 object-cover"
            priority
          />
          <span className="inline-flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-normal text-parchment">
              {siteConfig.name}
            </span>
            <span className="text-xs text-parchment/62">{siteConfig.tagline}</span>
          </span>
        </Link>
        <nav aria-label="主要導覽" className="flex flex-wrap gap-2 text-sm text-parchment/76">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-mistgold/70 hover:text-mistgold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
