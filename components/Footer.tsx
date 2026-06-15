import Image from "next/image";
import Link from "next/link";
import { utilityRoutes } from "@/constants/routes";
import { navItems, siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <section>
          <div className="flex items-center gap-3">
            <Image
              src={siteContent.markImage}
              alt={`${siteContent.name}商標`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-mistgold/45 object-cover"
            />
            <div>
              <p className="font-serif text-xl font-semibold">{siteContent.name}</p>
              <p className="text-sm text-cream/62">聽見心裡的聲音</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/68">{siteContent.shortIntro}</p>
          <p className="mt-4 max-w-xl text-xs leading-6 text-cream/52">{siteContent.disclaimer}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-mistgold">內容入口</h2>
          <div className="mt-3 grid gap-2 text-sm text-cream/70">
            {navItems.slice(1, 6).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-mistgold">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-mistgold">網站資訊</h2>
          <div className="mt-3 grid gap-2 text-sm text-cream/70">
            <Link href="/about" className="hover:text-mistgold">
              關於尋聲
            </Link>
            <Link href="/contact" className="hover:text-mistgold">
              聯絡我們
            </Link>
            {utilityRoutes.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-mistgold">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
