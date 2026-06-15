import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "免責聲明",
  description: "尋聲塔羅免責聲明，說明內容不構成醫療、法律、投資、心理治療或重大決策建議。",
  alternates: {
    canonical: `${siteContent.url}/disclaimer`
  },
  openGraph: {
    title: `免責聲明｜${siteContent.name}`,
    description: "尋聲塔羅免責聲明，說明內容不構成醫療、法律、投資、心理治療或重大決策建議。",
    url: `${siteContent.url}/disclaimer`
  }
};

export default function DisclaimerPage() {
  return (
    <>
      <PageIntro
        label="Disclaimer"
        title="免責聲明"
        description="本站內容提供學習、參考與自我探索使用。"
      />
      <section className="mx-auto max-w-3xl px-4 py-10 text-base leading-8 text-ink/72">
        <p>{siteContent.disclaimer}</p>
        <p className="mt-5">
          心理測驗結果是以題目選項進行的簡化分類，目的在於提供反思方向，不代表人格診斷、心理衡鑑或專業諮詢。
        </p>
        <p className="mt-5">
          塔羅、牌義與水晶相關內容皆屬象徵解讀與自我探索素材，不應被用來取代現實溝通、專業判斷或必要的醫療處置。
        </p>
      </section>
    </>
  );
}
