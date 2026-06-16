import type { Quiz } from "@/types/content";
import { universeMessageQuiz } from "@/data/quiz-universe-message";

export const quizzes: Quiz[] = [
  {
    title: universeMessageQuiz.title,
    slug: universeMessageQuiz.slug,
    excerpt: universeMessageQuiz.description,
    intro: universeMessageQuiz.intro.join("\n\n"),
    questions: universeMessageQuiz.questions.map((question) => ({
      question: question.question,
      options: question.options.map((option) => ({
        label: `${option.label}. ${option.text}`,
        resultKey: option.resultKey
      }))
    })),
    results: Object.values(universeMessageQuiz.results).map((result) => ({
      key: result.key,
      name: result.title,
      summary: result.universeReminder,
      detail: result.analysis.join("\n\n"),
      tarotCard: result.tarotCard,
      crystal: result.keywords.join("、"),
      actions: result.actions,
      relatedSlugs: ["tarot-shows-choices", "guardian-crystal-guide"]
    }))
  },
  {
    title: "你的守護水晶是哪一種？",
    slug: "guardian-crystal",
    excerpt: "把水晶當作日常提醒，找出此刻適合你的象徵焦點。",
    intro:
      "這是一個以娛樂與自我探索為目的的小測驗。請依照你最近的狀態作答，結果不是絕對定論，而是一個幫助你整理內在需求的象徵提示。",
    questions: [
      {
        question: "最近的你最常感覺自己需要什麼？",
        options: [
          { label: "更清楚的方向感", resultKey: "amethyst" },
          { label: "被溫柔接住的安全感", resultKey: "rose-quartz" },
          { label: "穩定下來，不被外界拉走", resultKey: "obsidian" },
          { label: "重新打開行動力", resultKey: "citrine" }
        ]
      },
      {
        question: "遇到壓力時，你比較容易出現哪種反應？",
        options: [
          { label: "想很多，需要先釐清脈絡", resultKey: "amethyst" },
          { label: "很在意別人的感受與回應", resultKey: "rose-quartz" },
          { label: "想把界線拉清楚，保護自己", resultKey: "obsidian" },
          { label: "想趕快解決，重新掌握節奏", resultKey: "citrine" }
        ]
      },
      {
        question: "你希望接下來的生活多一點什麼？",
        options: [
          { label: "安靜思考與直覺整理", resultKey: "amethyst" },
          { label: "愛、信任與柔軟的關係", resultKey: "rose-quartz" },
          { label: "界線、穩定與不被消耗", resultKey: "obsidian" },
          { label: "信心、明亮感與行動", resultKey: "citrine" }
        ]
      },
      {
        question: "你最想放下哪一種狀態？",
        options: [
          { label: "腦中停不下來的雜訊", resultKey: "amethyst" },
          { label: "一直懷疑自己不值得被愛", resultKey: "rose-quartz" },
          { label: "明明累了卻還一直勉強", resultKey: "obsidian" },
          { label: "想做卻遲遲沒有開始", resultKey: "citrine" }
        ]
      },
      {
        question: "如果把最近的自己比喻成天氣，會比較像？",
        options: [
          { label: "夜裡的霧，需要慢慢看清", resultKey: "amethyst" },
          { label: "柔和細雨，需要被安撫", resultKey: "rose-quartz" },
          { label: "厚重雲層，需要保留空間", resultKey: "obsidian" },
          { label: "陽光快出來了，需要推一把", resultKey: "citrine" }
        ]
      },
      {
        question: "你做決定時最需要哪一種提醒？",
        options: [
          { label: "先聽見自己的直覺", resultKey: "amethyst" },
          { label: "不用為了被喜歡而委屈自己", resultKey: "rose-quartz" },
          { label: "界線清楚，選擇才會清楚", resultKey: "obsidian" },
          { label: "可以先做一小步，不必一次完美", resultKey: "citrine" }
        ]
      },
      {
        question: "你最容易被哪種事消耗？",
        options: [
          { label: "資訊太多、想法太雜", resultKey: "amethyst" },
          { label: "關係裡的忽冷忽熱", resultKey: "rose-quartz" },
          { label: "沒有界線的要求與期待", resultKey: "obsidian" },
          { label: "長期停滯、看不到進展", resultKey: "citrine" }
        ]
      },
      {
        question: "此刻你最想帶回日常的一句話是？",
        options: [
          { label: "我可以慢慢聽懂自己。", resultKey: "amethyst" },
          { label: "我值得被溫柔對待。", resultKey: "rose-quartz" },
          { label: "我可以守住自己的界線。", resultKey: "obsidian" },
          { label: "我允許自己重新開始。", resultKey: "citrine" }
        ]
      }
    ],
    results: [
      {
        key: "amethyst",
        name: "紫水晶：直覺與清明",
        summary: "你最近需要的是安靜下來，讓混亂的想法重新排序。",
        detail:
          "紫水晶象徵直覺、沉澱與清明。這個結果提醒你，現在不一定需要立刻做出所有決定，而是先把內在的雜訊降下來。當你願意留一點時間給自己，答案會比較容易從焦慮和外界期待中被分辨出來。",
        tarotCard: "女祭司",
        crystal: "紫水晶",
        actions: [
          "每天留 10 分鐘不滑手機，記錄當天最真實的感覺。",
          "把正在煩惱的事拆成事實、想像、需求三欄。",
          "重大決定先延後一晚，讓直覺有時間浮現。"
        ],
        relatedSlugs: ["high-priestess-intuition", "intuition-or-anxiety"]
      },
      {
        key: "rose-quartz",
        name: "粉晶：溫柔與自我接納",
        summary: "你正在學習用比較柔軟的方式靠近自己，而不是一直責備自己。",
        detail:
          "粉晶象徵愛、接納與關係中的柔軟。這個結果不代表你需要討好誰，而是提醒你先把注意力放回自己的感受。當你不再急著證明自己值得被愛，關係裡的選擇會變得更清楚。",
        tarotCard: "皇后",
        crystal: "粉晶",
        actions: [
          "寫下一件你今天已經做得夠好的事。",
          "在關係裡先說出自己的感受，而不是猜對方想聽什麼。",
          "把照顧別人的力氣，留一部分給自己的身體和情緒。"
        ],
        relatedSlugs: ["inner-child-listening", "relationship-security-not-confirmation"]
      },
      {
        key: "obsidian",
        name: "黑曜石：界線與保護",
        summary: "你需要更明確地分辨，哪些責任屬於你，哪些其實不該由你承擔。",
        detail:
          "黑曜石象徵保護、界線與看見陰影。這個結果提醒你，不是所有消耗都要用忍耐解決。有些混亂會在你停止過度承擔之後自然變清楚。你可以溫和，但不必失去自己的界線。",
        tarotCard: "皇帝",
        crystal: "黑曜石",
        actions: [
          "列出最近三件讓你疲憊的事，標記哪些不是你的責任。",
          "練習用一句簡短的話拒絕不合理要求。",
          "減少讓你反覆內耗的訊息、對話或環境刺激。"
        ],
        relatedSlugs: ["relationship-boundaries", "money-and-relationship-security"]
      },
      {
        key: "citrine",
        name: "黃水晶：信心與行動",
        summary: "你已經累積足夠多的想法，現在需要的是一個可執行的小開始。",
        detail:
          "黃水晶象徵信心、創造力與行動感。這個結果提醒你，不必等到完全準備好才開始。你真正需要的可能不是更多分析，而是讓自己透過一個小行動重新感覺到掌控感。",
        tarotCard: "魔術師",
        crystal: "黃水晶",
        actions: [
          "把想做的事縮小成今天 15 分鐘內能完成的一步。",
          "先完成粗略版本，再慢慢修整。",
          "記錄一個你已經擁有的資源，而不是只看不足。"
        ],
        relatedSlugs: ["the-magician-will-language-creativity", "tarot-shows-choices"]
      }
    ]
  }
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.slug === slug);
}
