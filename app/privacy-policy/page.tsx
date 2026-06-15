import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "尋聲塔羅隱私權政策，說明基本分析工具、Cookie 與聯絡資訊使用方式。",
  alternates: {
    canonical: `${siteContent.url}/privacy-policy`
  },
  openGraph: {
    title: `隱私權政策｜${siteContent.name}`,
    description: "尋聲塔羅隱私權政策，說明基本分析工具、Cookie 與聯絡資訊使用方式。",
    url: `${siteContent.url}/privacy-policy`
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        label="Privacy"
        title="隱私權政策"
        description="此頁保留為可修改的基本政策文字，後續導入分析、電子報或廣告時需更新。"
      />
      <section className="mx-auto max-w-3xl px-4 py-10 text-base leading-8 text-ink/72">
        <p>網站目前以內容閱讀與簡單互動測驗為主，未提供會員、登入、付款或資料庫功能。</p>
        <p className="mt-5">
          未來若導入 Google Analytics、AdSense、電子報或其他第三方工具，可能使用 Cookie 或匿名統計資料來理解流量來源、
          熱門頁面與內容表現。正式導入前，本站應更新本頁說明。
        </p>
        <p className="mt-5">
          心理測驗目前在瀏覽器中完成，不需要登入，也不會建立個人測驗檔案。若未來新增儲存或訂閱功能，會另行補充資料使用方式。
        </p>
        <p className="mt-5">若讀者主動來信，信件中的 Email 與內容僅用於回覆與溝通，不會任意出售或公開。</p>
      </section>
    </>
  );
}
