export const siteConfig = {
  name: "尋聲塔羅",
  title: "尋聲塔羅｜托特塔羅、牌義解析與自我探索",
  description:
    "尋聲塔羅是一個以托特塔羅、牌義解析、占星與卡巴拉象徵、自我探索為主題的學習型部落格。",
  coverImage: "/images/cover.png",
  markImage: "/images/mark.png",
  tagline: "在牌面與象徵之間，尋回內在真正的聲音。",
  intro:
    "這裡記錄托特塔羅、牌義解析、象徵系統與日常抽牌練習，陪你用更清醒的方式理解自己。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  email: "email@example.com",
  disclaimer:
    "本站內容為塔羅學習、象徵研究與自我探索紀錄，僅供參考，不構成醫療、法律、投資、心理治療或重大人生決策建議。",
  nav: [
    { label: "首頁", href: "/" },
    { label: "文章", href: "/blog" },
    { label: "分類", href: "/categories" },
    { label: "關於", href: "/about" },
    { label: "聯絡", href: "/contact" }
  ],
  social: {
    instagram: "",
    threads: "",
    facebook: ""
  }
} as const;
