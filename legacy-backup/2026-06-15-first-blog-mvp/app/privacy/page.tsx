import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "尋聲塔羅的基本隱私權政策，說明 Cookie、分析工具與聯絡資訊使用方式。"
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-serif text-4xl font-semibold text-parchment">隱私權政策</h1>
      <div className="prose prose-invert mt-8 max-w-none prose-p:leading-8 prose-li:leading-8">
        <p>
          本頁為可修改的基本隱私權政策文字。尋聲塔羅重視讀者的隱私，網站目前以內容閱讀為主，不提供會員系統與付款功能。
        </p>
        <h2>資料收集</h2>
        <p>
          未來若導入基本網站分析工具，可能會收集瀏覽頁面、裝置類型、來源網址等匿名統計資訊，用於理解內容成效與改善閱讀體驗。
        </p>
        <h2>Cookie</h2>
        <p>
          網站可能使用必要 Cookie 或第三方分析工具 Cookie。若之後加入廣告、電子報或嵌入服務，將更新本政策。
        </p>
        <h2>聯絡資訊</h2>
        <p>
          若你主動寄信聯絡本站，信件中的姓名、Email 與內容僅用於回覆與溝通，不會任意出售或公開。
        </p>
      </div>
    </div>
  );
}
