import Image from "next/image";
import Link from "next/link";
import { navItems, siteContent } from "@/data/siteContent";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-plum/10 bg-cream/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={siteContent.markImage}
            alt={`${siteContent.name}商標`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-mistgold/45 object-cover"
            priority
          />
          <span className="min-w-0">
            <span className="block font-serif text-lg font-semibold text-midnight">
              {siteContent.name}
            </span>
            <span className="hidden text-xs text-ink/58 sm:block">聽見心裡的聲音</span>
          </span>
        </Link>

        <nav aria-label="主選單" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-ink/72 transition hover:bg-white hover:text-plum"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quiz"
          className="shrink-0 rounded-full bg-plum px-4 py-2 text-sm font-medium text-cream shadow-sm transition hover:bg-midnight"
        >
          開始測驗
        </Link>
      </div>

      <nav
        aria-label="手機主選單"
        className="flex gap-2 overflow-x-auto border-t border-plum/10 px-4 py-2 text-sm text-ink/72 lg:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full bg-white/72 px-3 py-1.5"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
