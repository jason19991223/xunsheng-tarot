import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "聯絡尋聲塔羅，提供內容建議、合作邀請與網站回饋。",
  alternates: {
    canonical: `${siteContent.url}/contact`
  },
  openGraph: {
    title: `聯絡我們｜${siteContent.name}`,
    description: "聯絡尋聲塔羅，提供內容建議、合作邀請與網站回饋。",
    url: `${siteContent.url}/contact`
  }
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="聯絡我們"
        description="第一版先提供聯絡資訊，不串接表單與寄信服務。"
      />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-lg border border-plum/10 bg-white p-5">
          <p className="text-sm leading-7 text-ink/66">
            合作、內容建議、錯字回報或網站回饋可先透過 Email 聯繫。第一版不串接表單，避免收集不必要的個人資料。
          </p>
          <a
            href={`mailto:${siteContent.email}`}
            className="mt-4 inline-flex rounded-full bg-plum px-5 py-3 text-sm font-semibold text-cream"
          >
            {siteContent.email}
          </a>
          <a
            href={siteContent.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-0 mt-3 inline-flex rounded-full border border-plum/20 bg-cream px-5 py-3 text-sm font-semibold text-plum sm:ml-3"
          >
            Instagram {siteContent.instagramHandle}
          </a>
          <p className="mt-4 text-xs leading-6 text-ink/50">
            若你的問題涉及醫療、法律、投資、心理治療或重大人生決策，請優先尋求合格專業人士協助。
          </p>
        </div>
      </section>
    </>
  );
}
