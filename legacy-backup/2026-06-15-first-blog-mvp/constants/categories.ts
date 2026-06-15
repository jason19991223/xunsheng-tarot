export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  {
    name: "托特塔羅牌義",
    slug: "thoth-card-meanings",
    description: "以托特塔羅為核心，整理大牌、小牌與象徵語彙。"
  },
  {
    name: "每日抽牌",
    slug: "daily-draw",
    description: "日常抽牌紀錄、提問方式與覺察練習。"
  },
  {
    name: "牌陣教學",
    slug: "spreads",
    description: "從簡單三張牌到主題式牌陣，建立清楚的解讀框架。"
  },
  {
    name: "占星與卡巴拉",
    slug: "astrology-kabbalah",
    description: "理解塔羅背後的占星、生命樹與象徵系統。"
  },
  {
    name: "塔羅學習筆記",
    slug: "tarot-notes",
    description: "塔羅入門、系統比較與學習路徑整理。"
  },
  {
    name: "自我探索",
    slug: "self-inquiry",
    description: "把牌面當成自我理解與選擇整理的工具。"
  }
];

export function getCategorySlug(categoryName: string): string {
  return categories.find((category) => category.name === categoryName)?.slug ?? categoryName;
}
