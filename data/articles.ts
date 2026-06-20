import type { Article, ArticleCategory } from "@/types/content";

export const categoryLabels: Record<ArticleCategory, string> = {
  "tarot-beginner": "塔羅新手",
  "tarot-meanings": "塔羅牌義",
  relationship: "情感關係",
  "self-discovery": "自我探索",
  "quiz-insights": "心理測驗解析",
  "crystal-energy": "水晶與能量"
};

const articleSeeds: Array<{
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  tags: string[];
  relatedQuizzes: string[];
}> = [
  {
    title: "塔羅新手如何開始：不用急著背完 78 張牌",
    slug: "tarot-beginner-start",
    excerpt: "用問題、圖像與日常紀錄建立塔羅學習基礎。",
    category: "tarot-beginner",
    tags: ["塔羅新手", "直覺", "自我探索"],
    relatedQuizzes: ["guardian-tarot-card"]
  },
  {
    title: "第一次抽牌前，你可以先設定這三個原則",
    slug: "first-tarot-reading-principles",
    excerpt: "避免把抽牌變成焦慮確認，先建立健康使用方式。",
    category: "tarot-beginner",
    tags: ["塔羅新手", "安全感", "自我探索"],
    relatedQuizzes: ["current-energy-type"]
  },
  {
    title: "每日抽牌紀錄怎麼寫，才真的有幫助",
    slug: "daily-tarot-journal",
    excerpt: "把每日抽牌變成覺察練習，而不是答案依賴。",
    category: "tarot-beginner",
    tags: ["塔羅新手", "直覺", "自我探索"],
    relatedQuizzes: ["what-to-let-go"]
  },
  {
    title: "愚者牌牌義：開始、自由與未知",
    slug: "the-fool-first-step",
    excerpt: "愚者不是魯莽，而是生命願意重新流動。",
    category: "tarot-meanings",
    tags: ["塔羅新手", "直覺", "自我探索"],
    relatedQuizzes: ["guardian-tarot-card"]
  },
  {
    title: "魔術師牌牌義：意志、語言與創造",
    slug: "the-magician-will-language-creativity",
    excerpt: "魔術師提醒你把想法變成可執行的行動。",
    category: "tarot-meanings",
    tags: ["塔羅新手", "直覺"],
    relatedQuizzes: ["guardian-tarot-card"]
  },
  {
    title: "女祭司牌義：直覺與沉默中的答案",
    slug: "high-priestess-intuition",
    excerpt: "女祭司邀請你先安靜下來，聽見內在訊號。",
    category: "tarot-meanings",
    tags: ["直覺", "自我探索"],
    relatedQuizzes: ["current-energy-type"]
  },
  {
    title: "情感關係裡的安全感，不是一直確認",
    slug: "relationship-security-not-confirmation",
    excerpt: "安全感需要溝通、界線與自我穩定共同支撐。",
    category: "relationship",
    tags: ["戀愛", "安全感", "關係課題"],
    relatedQuizzes: ["relationship-block", "relationship-lesson-type"]
  },
  {
    title: "曖昧讓人誤判的三個訊號",
    slug: "ambiguous-love-signals",
    excerpt: "把曖昧裡的想像、事實與需求分開。",
    category: "relationship",
    tags: ["曖昧", "戀愛", "安全感"],
    relatedQuizzes: ["ambiguous-love-misread"]
  },
  {
    title: "復合前要問自己的五個問題",
    slug: "before-getting-back-together",
    excerpt: "復合不是回到過去，而是確認是否有新的互動方式。",
    category: "relationship",
    tags: ["復合", "戀愛", "關係課題"],
    relatedQuizzes: ["relationship-lesson-type"]
  },
  {
    title: "關係裡的界線，不是冷淡，而是讓愛有空氣",
    slug: "relationship-boundaries",
    excerpt: "界線讓關係少一點猜測與委屈。",
    category: "relationship",
    tags: ["戀愛", "安全感", "關係課題"],
    relatedQuizzes: ["love-personality", "relationship-block"]
  },
  {
    title: "關係焦慮來的時候，可以先問自己的三件事",
    slug: "relationship-anxiety",
    excerpt: "在想立刻確認答案前，先整理事實、推測與需求。",
    category: "relationship",
    tags: ["戀愛", "安全感", "自我探索"],
    relatedQuizzes: ["relationship-block"]
  },
  {
    title: "塔羅不是替你決定，而是幫你看見選擇",
    slug: "tarot-shows-choices",
    excerpt: "塔羅可以作為整理選擇的工具，而不是宿命答案。",
    category: "self-discovery",
    tags: ["自我探索", "直覺"],
    relatedQuizzes: ["what-to-let-go"]
  },
  {
    title: "內在小孩需要的，常常不是答案，而是被聽見",
    slug: "inner-child-listening",
    excerpt: "用溫和方式理解內在需求，不把它變成診斷標籤。",
    category: "self-discovery",
    tags: ["內在小孩", "自我探索", "安全感"],
    relatedQuizzes: ["inner-child-needs"]
  },
  {
    title: "你目前最需要放下的，可能不是人，而是一種期待",
    slug: "letting-go-expectation",
    excerpt: "放下不是否定感受，而是停止把自己困在單一路徑。",
    category: "self-discovery",
    tags: ["自我探索", "關係課題"],
    relatedQuizzes: ["what-to-let-go"]
  },
  {
    title: "直覺和焦慮怎麼分辨：先看身體訊號",
    slug: "intuition-or-anxiety",
    excerpt: "直覺通常更清明，焦慮通常更急迫。",
    category: "self-discovery",
    tags: ["直覺", "安全感", "自我探索"],
    relatedQuizzes: ["current-energy-type"]
  },
  {
    title: "戀愛人格測驗結果可以怎麼解讀",
    slug: "love-personality-quiz-insight",
    excerpt: "測驗結果不是標籤，而是理解互動習慣的入口。",
    category: "quiz-insights",
    tags: ["戀愛", "自我探索", "關係課題"],
    relatedQuizzes: ["love-personality"]
  },
  {
    title: "關係卡點測驗：從結果看下一步",
    slug: "relationship-block-quiz-insight",
    excerpt: "把卡點整理成具體可調整的行動。",
    category: "quiz-insights",
    tags: ["戀愛", "安全感", "關係課題"],
    relatedQuizzes: ["relationship-block"]
  },
  {
    title: "守護塔羅牌測驗：如何把結果用在日常",
    slug: "guardian-tarot-card-quiz-insight",
    excerpt: "把守護牌當成提醒，而不是固定命運。",
    category: "quiz-insights",
    tags: ["塔羅新手", "直覺", "自我探索"],
    relatedQuizzes: ["guardian-tarot-card"]
  },
  {
    title: "金錢安全感測驗：你真正害怕失去什麼",
    slug: "money-security-quiz-insight",
    excerpt: "金錢議題常連著控制感、安全感與自我價值。",
    category: "quiz-insights",
    tags: ["金錢安全感", "安全感", "自我探索"],
    relatedQuizzes: ["money-security-type"]
  },
  {
    title: "關係課題測驗：吸引來的人，也照見你的模式",
    slug: "relationship-lesson-quiz-insight",
    excerpt: "關係課題不是責怪自己，而是看見重複出現的互動模式。",
    category: "quiz-insights",
    tags: ["關係課題", "戀愛", "安全感"],
    relatedQuizzes: ["relationship-lesson-type"]
  },
  {
    title: "守護水晶可以怎麼看：把它當成提醒，而不是保證",
    slug: "guardian-crystal-guide",
    excerpt: "水晶可以作為日常提醒與儀式感，不取代現實行動。",
    category: "crystal-energy",
    tags: ["守護水晶", "自我探索"],
    relatedQuizzes: ["guardian-crystal"]
  },
  {
    title: "粉晶、紫水晶、黑曜石：三種常見能量提醒",
    slug: "rose-amethyst-obsidian",
    excerpt: "用象徵角度理解水晶，而不是神化它們。",
    category: "crystal-energy",
    tags: ["守護水晶", "安全感", "自我探索"],
    relatedQuizzes: ["guardian-crystal"]
  },
  {
    title: "水晶與塔羅如何一起做自我探索",
    slug: "crystal-and-tarot-practice",
    excerpt: "用一張牌、一顆水晶與一個問題建立日常練習。",
    category: "crystal-energy",
    tags: ["守護水晶", "塔羅新手", "直覺"],
    relatedQuizzes: ["guardian-crystal", "guardian-tarot-card"]
  },
  {
    title: "能量狀態低落時，先不要急著做重大決定",
    slug: "low-energy-decision",
    excerpt: "能量不足時，更需要降低複雜度與照顧基本狀態。",
    category: "crystal-energy",
    tags: ["自我探索", "安全感"],
    relatedQuizzes: ["current-energy-type"]
  },
  {
    title: "金錢安全感與關係安全感，為什麼常常連在一起",
    slug: "money-and-relationship-security",
    excerpt: "金錢焦慮有時不是數字問題，而是安全感與選擇感問題。",
    category: "self-discovery",
    tags: ["金錢安全感", "安全感", "關係課題"],
    relatedQuizzes: ["money-security-type", "relationship-lesson-type"]
  }
];

export const articles: Article[] = articleSeeds.filter((article) => article.category !== "tarot-meanings").map((article, index) => {
  const categoryLabel = categoryLabels[article.category];
  const relatedArticles = articleSeeds
    .filter((candidate) => candidate.slug !== article.slug && candidate.category === article.category)
    .slice(0, 3)
    .map((candidate) => candidate.slug);

  return {
    ...article,
    categoryLabel,
    publishedAt: `2026-06-${String(index + 1).padStart(2, "0")}`,
    relatedArticles,
    metaTitle: `${article.title}｜尋聲塔羅`,
    metaDescription: article.excerpt,
    content: buildArticleContent(article.title, article.excerpt, categoryLabel, article.tags)
  };
});

function buildArticleContent(title: string, excerpt: string, categoryLabel: string, tags: string[]): string[] {
  const primaryTag = tags[0] ?? categoryLabel;
  const secondaryTag = tags[1] ?? "自我探索";

  return [
    `這篇文章以「${primaryTag}」作為切入點，目的不是給出單一答案，而是讓你把正在發生的感受、期待與現實條件分開看。當問題被拆清楚，選擇通常也會少一點急迫感。`,
    `### 先辨認目前的位置`,
    `如果你是因為關係、金錢、安全感或抽牌結果而來，先不要急著要求自己立刻做決定。可以先寫下三件事：已經發生的事、你對它的解讀、你真正擔心的後果。這三者常被混在一起，造成不必要的壓力。`,
    `在${categoryLabel}的脈絡裡，「${secondaryTag}」通常不是孤立問題。它可能同時牽涉你如何理解自己、如何對他人表達需求，以及你是否允許事情有一段觀察期。`,
    `### 用塔羅或測驗作為整理工具`,
    `塔羅牌、心理測驗與水晶象徵都適合作為提醒，但不應被當成替你決定人生的權威。比較健康的用法，是把它們當成一組問題：這提醒我看見什麼？我是否忽略了某個需求？我能採取哪個低風險行動？`,
    `你可以選一張牌或一個測驗結果，搭配一句日常提醒。例如：我可以慢一點確認、我可以把需求說清楚、我可以先照顧基本狀態。這類提醒越具體，越容易回到生活。`,
    `### 實際練習`,
    `今天先做一個小練習：把「我是不是應該」改寫成「我現在最需要釐清的是什麼」。這會讓問題從外部判斷回到內在整理，也比較不會落入反覆確認。`,
    `如果這篇文章碰到你的關係或重大決策，請把它視為自我探索參考。涉及醫療、法律、投資、心理治療或重大人生決策時，仍應尋求合格專業人士協助。`
  ];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) => article.tags.includes(tag));
}
