import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "使用條款",
  description: "尋聲塔羅使用條款，說明網站內容僅供學習、參考與自我探索。",
  alternates: {
    canonical: `${siteContent.url}/terms`
  },
  openGraph: {
    title: `使用條款｜${siteContent.name}`,
    description: "尋聲塔羅使用條款，說明網站內容僅供學習、參考與自我探索。",
    url: `${siteContent.url}/terms`
  }
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        label="Terms"
        title="使用條款"
        description="使用本網站即表示理解內容性質與限制。"
      />
      <section className="mx-auto max-w-3xl px-4 py-10 text-base leading-8 text-ink/72">
        <p>本站內容以塔羅學習、心理測驗、情感關係與自我探索為目的，僅供娛樂、學習與參考。</p>
        <p className="mt-5">
          使用者應自行判斷內容是否適合自身情境。本站不承諾任何占卜、測驗或文章內容能預測未來、保證關係結果或替代專業建議。
        </p>
        <p className="mt-5">
          未經同意，請勿大量複製、改作或商業使用本站原創文字與視覺素材。引用少量內容時，請標示來源。
        </p>
        <p className="mt-5">網站可能依內容規劃調整頁面、分類與政策文字，更新後會直接發布於網站。</p>
      </section>
    </>
  );
}
