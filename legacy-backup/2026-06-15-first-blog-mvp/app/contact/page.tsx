import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "聯絡",
  description: "聯絡尋聲塔羅，提供合作、內容建議與讀者回饋。"
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-medium text-mistgold">Contact</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-parchment">聯絡</h1>
      <section className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] p-6">
        <p className="leading-8 text-parchment/74">
          若你有文章建議、合作邀請或網站回饋，可以先透過 Email 聯繫。第一版 MVP 暫不串接表單寄信功能。
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-5 inline-flex rounded-full bg-mistgold px-5 py-3 text-sm font-semibold text-ink hover:bg-parchment"
        >
          {siteConfig.email}
        </a>
      </section>
    </div>
  );
}
