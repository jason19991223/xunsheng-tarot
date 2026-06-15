import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用條款",
  description: "尋聲塔羅網站使用條款，說明內容僅供學習、象徵研究與自我探索參考。"
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-serif text-4xl font-semibold text-parchment">使用條款</h1>
      <div className="prose prose-invert mt-8 max-w-none prose-p:leading-8 prose-li:leading-8">
        <p>
          使用本網站即表示你理解並同意：本站內容以塔羅學習、象徵研究與自我探索為目的，僅供參考。
        </p>
        <h2>內容性質</h2>
        <p>
          本站文章不宣稱絕對預言，也不保證任何占卜結果。塔羅可作為整理思緒與理解選擇的工具，但不應取代專業意見。
        </p>
        <h2>專業建議</h2>
        <p>
          本站內容不構成醫療、法律、投資、心理治療或重大人生決策建議。若你面臨相關問題，請尋求合格專業人士協助。
        </p>
        <h2>內容調整</h2>
        <p>本站可能依經營需求調整文章、分類、政策與條款內容，更新後將直接發布於網站。</p>
      </div>
    </div>
  );
}
