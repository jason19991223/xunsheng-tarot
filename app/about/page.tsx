import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "關於尋聲",
  description: "關於尋聲塔羅：結合塔羅、心理測驗、情感關係與自我探索的內容網站。",
  alternates: {
    canonical: `${siteContent.url}/about`
  },
  openGraph: {
    title: `關於尋聲｜${siteContent.name}`,
    description: "關於尋聲塔羅：結合塔羅、心理測驗、情感關係與自我探索的內容網站。",
    url: `${siteContent.url}/about`
  }
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title="關於尋聲"
        description={siteContent.shortIntro}
      />
      <section className="mx-auto max-w-3xl px-4 py-10 text-base leading-8 text-ink/72">
        <p>
          尋聲塔羅不是要替讀者做絕對預言，而是提供一個整理關係、選擇與內在狀態的內容空間。
          我們把塔羅、心理測驗與象徵語言視為自我理解工具，而不是替人生下結論的權威。
        </p>
        <p className="mt-5">
          網站內容會維持溫柔、清楚、有知識感，避免恐嚇式占卜與宿命論。心理測驗定位為娛樂與自我探索，
          不提供醫療診斷，也不取代專業諮詢。
        </p>
        <p className="mt-5">
          未來內容會集中在三個方向：塔羅牌義與牌陣學習、情感關係與界線整理、自我探索與日常覺察。
          目標是讓讀者在迷惘時多一個可以停下來思考的位置。
        </p>
      </section>
    </>
  );
}
