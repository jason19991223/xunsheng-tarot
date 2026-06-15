import type { Quiz, QuizQuestion, QuizResult } from "@/types/content";

type ResultSeed = {
  key: string;
  name: string;
  summary: string;
  tarotCard: string;
  crystal: string;
  relatedSlugs: string[];
};

const resultSet: ResultSeed[] = [
  {
    key: "spark",
    name: "火花型",
    summary: "你需要行動、回應與重新啟動的力量。",
    tarotCard: "魔術師",
    crystal: "黃水晶",
    relatedSlugs: ["the-magician-will-language-creativity", "tarot-shows-choices"]
  },
  {
    key: "moon",
    name: "月光型",
    summary: "你需要安靜、直覺與情緒安全感。",
    tarotCard: "女祭司",
    crystal: "紫水晶",
    relatedSlugs: ["high-priestess-intuition", "intuition-or-anxiety"]
  },
  {
    key: "garden",
    name: "花園型",
    summary: "你需要滋養、接納與可持續的照顧。",
    tarotCard: "皇后",
    crystal: "粉晶",
    relatedSlugs: ["inner-child-listening", "guardian-crystal-guide"]
  },
  {
    key: "anchor",
    name: "錨點型",
    summary: "你需要界線、結構與穩定承擔。",
    tarotCard: "皇帝",
    crystal: "黑曜石",
    relatedSlugs: ["relationship-boundaries", "money-and-relationship-security"]
  }
];

function makeQuestions(topic: string): QuizQuestion[] {
  const prompts = [
    `面對${topic}時，你第一個反應是？`,
    `你最希望${topic}帶給你什麼？`,
    `當事情不確定時，你通常會？`,
    `你最容易忽略哪一件事？`,
    `哪一句話最像你此刻需要聽見的提醒？`,
    `你在壓力下最常使用哪種方式保護自己？`,
    `如果要往前一步，你最需要什麼支持？`,
    `你希望接下來的自己更靠近哪種狀態？`
  ];

  return prompts.map((question, index) => ({
    question,
    options: [
      { label: index % 2 === 0 ? "先行動，讓局面開始流動" : "把想法說清楚，選一個具體行動", resultKey: "spark" },
      { label: "先安靜觀察，確認自己的真實感受", resultKey: "moon" },
      { label: "先照顧情緒，讓自己不要太用力", resultKey: "garden" },
      { label: "先建立界線與計畫，讓狀態穩下來", resultKey: "anchor" }
    ]
  }));
}

function makeResults(topic: string): QuizResult[] {
  return resultSet.map((result) => ({
    key: result.key,
    name: `${result.name}${topic}結果`,
    summary: result.summary,
    detail: `在「${topic}」這個主題裡，你的選項顯示你比較需要${result.summary.replace("你需要", "")}。這不是固定人格，也不是診斷，而是一個幫助你整理當下狀態的自我探索入口。`,
    tarotCard: result.tarotCard,
    crystal: result.crystal,
    actions: [
      "把最有感的一句結果寫下來，觀察它對應到生活中的哪個情境。",
      "選一個今天就能執行的小行動，不需要一次改變全部。",
      "若牽涉重大決策，請回到現實條件並尋求合格專業人士協助。"
    ],
    relatedSlugs: result.relatedSlugs
  }));
}

function makeQuiz(title: string, slug: string, topic: string, excerpt: string): Quiz {
  return {
    title,
    slug,
    excerpt,
    intro: `這是一個娛樂與自我探索取向的測驗，幫助你從「${topic}」看見目前較需要被理解的內在聲音。結果不代表診斷，也不保證未來。`,
    questions: makeQuestions(topic),
    results: makeResults(topic)
  };
}

export const quizzes: Quiz[] = [
  makeQuiz("你的戀愛人格是哪一型？", "love-personality", "戀愛人格", "從互動習慣看你在愛裡最自然的靠近方式。"),
  makeQuiz("你在感情中最容易卡在哪裡？", "relationship-block", "感情卡點", "看見關係裡反覆出現的卡點，把它整理成可行的下一步。"),
  makeQuiz("你的守護塔羅牌是哪一張？", "guardian-tarot-card", "守護塔羅牌", "用象徵語言找出此刻最能提醒你的塔羅原型。"),
  makeQuiz("你的內在小孩目前最需要什麼？", "inner-child-needs", "內在小孩需求", "用溫和的自我探索看見此刻最需要被照顧的內在需求。"),
  makeQuiz("你的守護水晶是哪一種？", "guardian-crystal", "守護水晶", "把水晶當作日常提醒，找出此刻適合你的象徵焦點。"),
  makeQuiz("你的金錢安全感是哪一型？", "money-security-type", "金錢安全感", "理解你面對金錢、穩定與選擇感時的安全感模式。"),
  makeQuiz("你在曖昧中最容易誤判什麼？", "ambiguous-love-misread", "曖昧誤判", "把曖昧中的想像、事實與需求分開看。"),
  makeQuiz("你目前最需要放下的是什麼？", "what-to-let-go", "放下與整理", "看見此刻最需要鬆手的期待、慣性或內在壓力。"),
  makeQuiz("你最近的能量狀態是哪一型？", "current-energy-type", "能量狀態", "用日常狀態理解你最近需要補充、聚焦或停下的地方。"),
  makeQuiz("你吸引來的是哪一種關係課題？", "relationship-lesson-type", "關係課題", "從反覆出現的互動模式看見你正在學習的關係功課。")
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.slug === slug);
}
