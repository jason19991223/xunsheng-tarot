import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "關於",
  description: "認識尋聲塔羅的網站理念：以塔羅學習、象徵理解與自我覺察為核心的內容網站。"
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-medium text-mistgold">About</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-parchment">關於尋聲塔羅</h1>
      <div className="prose prose-invert mt-8 max-w-none prose-p:leading-8 prose-headings:font-serif">
        <p>
          {siteConfig.name}是一個以托特塔羅、牌義解析、占星與卡巴拉象徵、自我探索為主題的內容網站。
          這裡不把塔羅寫成絕對預言，也不把牌面當成替人決定人生的工具。
        </p>
        <p>
          我們更在意的是：一張牌如何幫助你整理當下的感受、看見反覆出現的模式，並在選擇之前多保留一點清醒。
          對初學者，這裡會盡量用溫柔、清楚的語言解釋牌義；對想深入象徵系統的讀者，也會慢慢整理托特塔羅、卡巴拉與占星對應。
        </p>
        <h2>網站理念</h2>
        <p>
          塔羅可以是一面鏡子。它不需要神秘到讓人害怕，也不需要簡化成單一答案。
          當我們在牌面與象徵之間停留，真正被聽見的，往往是內在尚未說清楚的聲音。
        </p>
      </div>
    </div>
  );
}
