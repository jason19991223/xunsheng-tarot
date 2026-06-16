import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { UniverseMessageQuiz } from "@/components/UniverseMessageQuiz";
import { siteContent } from "@/data/siteContent";
import { universeMessageQuiz } from "@/data/quiz-universe-message";

export const metadata: Metadata = {
  title: "心理測驗｜你最近最需要被宇宙提醒的是什麼？｜尋聲塔羅",
  description: universeMessageQuiz.description,
  keywords: [
    "心理測驗",
    "直覺心理測驗",
    "塔羅心理測驗",
    "療癒心理測驗",
    "宇宙提醒",
    "內在訊息",
    "塔羅測驗",
    "自我探索"
  ],
  alternates: {
    canonical: `${siteContent.url}/quiz/universe-message`
  },
  openGraph: {
    title: "心理測驗｜你最近最需要被宇宙提醒的是什麼？｜尋聲塔羅",
    description: universeMessageQuiz.description,
    url: `${siteContent.url}/quiz/universe-message`,
    siteName: siteContent.name,
    images: [siteContent.coverImage],
    locale: "zh_TW",
    type: "website"
  }
};

export default function UniverseMessageQuizPage() {
  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(216,163,167,0.24),transparent_28rem),linear-gradient(180deg,#fbf3e7_0%,#f7eadf_48%,#fbf3e7_100%)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <main>
          <Link href="/quiz" className="text-sm font-semibold text-violetdeep">
            返回心理測驗
          </Link>
          <div className="mt-5">
            <UniverseMessageQuiz />
          </div>
        </main>
        <aside className="grid content-start gap-4">
          <AdSlot />
          <section className="rounded-lg border border-mistgold/30 bg-mistgold/10 p-4 text-xs leading-6 text-ink/58">
            本測驗為娛樂與自我探索內容，不構成醫療、法律、投資、心理治療或重大人生決策建議。
          </section>
        </aside>
      </div>
    </div>
  );
}
