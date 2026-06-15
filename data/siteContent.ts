import type { FeatureLink, NavItem } from "@/types/content";

export const siteContent = {
  name: "尋聲塔羅",
  title: "尋聲塔羅｜聽見心裡的聲音",
  description:
    "尋聲塔羅是一個結合塔羅牌義、心理測驗、情感關係與自我探索內容的互動式部落格。",
  heroTitle: "尋聲塔羅｜聽見心裡的聲音",
  heroSubtitle:
    "在關係、選擇與迷惘之間，透過塔羅與心理測驗，看見你當下真正需要被理解的聲音。",
  shortIntro:
    "尋聲塔羅整理塔羅象徵、關係議題與自我探索內容，讓讀者用更清醒、溫柔的方式理解自己。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "email@example.com",
  coverImage: "/images/cover.png",
  markImage: "/images/mark.png",
  disclaimer:
    "本站內容為塔羅學習、心理測驗、象徵研究與自我探索紀錄，僅供參考，不構成醫療、法律、投資、心理治療或重大人生決策建議。"
} as const;

export const navItems: NavItem[] = [
  { label: "首頁", href: "/" },
  { label: "心理測驗", href: "/quiz" },
  { label: "塔羅占卜", href: "/articles" },
  { label: "塔羅牌義", href: "/tarot-meanings" },
  { label: "情感關係", href: "/category/relationship" },
  { label: "自我探索", href: "/category/self-discovery" },
  { label: "搜尋", href: "/search" },
  { label: "關於尋聲", href: "/about" },
  { label: "聯絡我們", href: "/contact" }
];

export const homeSections: FeatureLink[] = [
  {
    title: "熱門心理測驗",
    description: "保留測驗入口，第二階段再接題目與結果邏輯。",
    href: "/quiz"
  },
  {
    title: "最新塔羅文章",
    description: "先以內容索引呈現塔羅與抽牌文章，之後再擴充完整文章頁。",
    href: "/articles"
  },
  {
    title: "塔羅牌義學習",
    description: "整理大牌、小牌與象徵關鍵字，作為長期 SEO 內容基礎。",
    href: "/tarot-meanings"
  },
  {
    title: "情感關係",
    description: "聚焦關係中的安全感、界線、選擇與溝通。",
    href: "/category/relationship"
  },
  {
    title: "自我探索",
    description: "以溫和的問題意識整理自我覺察與內在狀態。",
    href: "/category/self-discovery"
  },
  {
    title: "關於尋聲簡介",
    description: "說明網站定位與內容原則，避免宿命論與恐嚇式占卜。",
    href: "/about"
  }
];
