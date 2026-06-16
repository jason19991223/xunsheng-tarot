export type UniverseMessageResultKey = "rest" | "start" | "release" | "guidance";

export type UniverseMessageOption = {
  label: "A" | "B" | "C" | "D";
  text: string;
  resultKey: UniverseMessageResultKey;
};

export type UniverseMessageQuestion = {
  question: string;
  options: UniverseMessageOption[];
};

export type UniverseMessageResult = {
  key: UniverseMessageResultKey;
  title: string;
  analysis: string[];
  universeReminder: string;
  actions: string[];
  tarotCard: string;
  keywords: string[];
};

export const universeMessageQuiz = {
  title: "心理測驗｜你最近最需要被宇宙提醒的是什麼？",
  slug: "universe-message",
  description: "透過 8 題直覺心理測驗，測出你最近最需要收到的宇宙提醒：休息、開始、放下，還是指引？",
  intro: [
    "最近的你，是不是有一點卡住？",
    "也許不是沒有方向，而是心裡有些聲音太小聲，被日常、壓力、期待或過去的情緒蓋過去了。",
    "這個心理測驗會透過你的直覺選擇，看看你最近最需要被宇宙提醒的是什麼。",
    "請不要想太久，選第一個讓你有感覺的答案就好。"
  ],
  questions: [
    {
      question: "如果現在有一扇門出現在你面前，你覺得門後會是？",
      options: [
        { label: "A", text: "一片安靜的森林", resultKey: "rest" },
        { label: "B", text: "一座熱鬧但陌生的城市", resultKey: "start" },
        { label: "C", text: "一間熟悉卻有點昏暗的房間", resultKey: "release" },
        { label: "D", text: "一片看不到盡頭的海", resultKey: "guidance" }
      ]
    },
    {
      question: "最近的你最常有哪種感覺？",
      options: [
        { label: "A", text: "想休息，但又覺得自己不能停", resultKey: "rest" },
        { label: "B", text: "想改變，卻不知道從哪裡開始", resultKey: "start" },
        { label: "C", text: "常常想起過去的人或事", resultKey: "release" },
        { label: "D", text: "對未來有點期待，也有點害怕", resultKey: "guidance" }
      ]
    },
    {
      question: "當壓力變大的時候，你通常會？",
      options: [
        { label: "A", text: "一個人安靜消化，不太想說", resultKey: "rest" },
        { label: "B", text: "找事情做，讓自己不要停下來", resultKey: "start" },
        { label: "C", text: "反覆想是哪裡出了問題", resultKey: "release" },
        { label: "D", text: "開始找訊號、查資料、問別人的看法", resultKey: "guidance" }
      ]
    },
    {
      question: "面對接下來的生活，你比較像是？",
      options: [
        { label: "A", text: "我想先慢下來，不想再硬撐", resultKey: "rest" },
        { label: "B", text: "我想換個方式生活，但還沒開始", resultKey: "start" },
        { label: "C", text: "我知道該往前，但心裡還有牽掛", resultKey: "release" },
        { label: "D", text: "我感覺有新方向，但還不夠確定", resultKey: "guidance" }
      ]
    },
    {
      question: "如果要你形容最近的心情，你會選哪一種天氣？",
      options: [
        { label: "A", text: "陰天，沒有大雨，但有點悶", resultKey: "rest" },
        { label: "B", text: "清晨，天空慢慢亮起來", resultKey: "start" },
        { label: "C", text: "雨後，地上還留著水痕", resultKey: "release" },
        { label: "D", text: "夜空，看不清路但有星星", resultKey: "guidance" }
      ]
    },
    {
      question: "你現在最想被誰理解？",
      options: [
        { label: "A", text: "那個一直很努力、卻很累的自己", resultKey: "rest" },
        { label: "B", text: "那個其實很想重新開始的自己", resultKey: "start" },
        { label: "C", text: "那個還沒完全放下過去的自己", resultKey: "release" },
        { label: "D", text: "那個正在摸索方向的自己", resultKey: "guidance" }
      ]
    },
    {
      question: "你最害怕哪一種狀況？",
      options: [
        { label: "A", text: "努力了很久，卻還是沒有結果", resultKey: "rest" },
        { label: "B", text: "做錯選擇，浪費時間", resultKey: "start" },
        { label: "C", text: "被重要的人遺忘或放下", resultKey: "release" },
        { label: "D", text: "一直停在原地，沒有變好", resultKey: "guidance" }
      ]
    },
    {
      question: "憑直覺選一句你現在最想收到的話：",
      options: [
        { label: "A", text: "你已經很努力了，可以休息一下", resultKey: "rest" },
        { label: "B", text: "不要怕，新的路正在打開", resultKey: "start" },
        { label: "C", text: "有些答案，不需要再回頭找", resultKey: "release" },
        { label: "D", text: "你正在靠近更適合自己的生活", resultKey: "guidance" }
      ]
    }
  ],
  results: {
    rest: {
      key: "rest",
      title: "你需要的提醒是：先好好休息，不是所有努力都要立刻有結果",
      analysis: [
        "最近的你其實已經撐很久了。",
        "你不是不夠努力，也不是沒有進步，而是可能一直把自己放在「必須更好、必須更快、必須撐住」的位置上。",
        "你很習慣把事情扛起來，也很容易在還沒恢復之前，就急著要求自己繼續前進。可是現在的你，真正需要的不是再多做一點，而是先讓自己回到穩定的狀態。"
      ],
      universeReminder: "休息不是退步，而是讓能量回來。",
      actions: [
        "這幾天先不要逼自己做重大決定。",
        "從睡好、吃好、整理房間、減少不必要的社交開始。",
        "當身心慢慢安靜下來，答案也會變得比較清楚。"
      ],
      tarotCard: "隱者 The Hermit",
      keywords: ["休息", "沉澱", "自我照顧", "恢復能量"]
    },
    start: {
      key: "start",
      title: "你需要的提醒是：新的路已經出現，只是你還在等自己準備好",
      analysis: [
        "你心裡其實已經有一個想法很久了。",
        "也許是想開始一個新計畫、改變生活方式、學習新的東西，或是離開某個讓你卡住的狀態。你不是沒有方向，而是一直在等一個「更確定」、「更安全」、「更完美」的時機。",
        "但很多時候，真正的開始不會等到你完全準備好才出現。它通常是一個很小的行動，一個念頭，一次嘗試，或是一個你終於願意跨出去的瞬間。"
      ],
      universeReminder: "你不需要準備到完美，才有資格開始。",
      actions: [
        "把你的目標縮小到今天可以完成的一件小事。",
        "不要急著想最終結果，只要先讓自己動起來。",
        "開始之後，路會比你想像中更清楚。"
      ],
      tarotCard: "愚者 The Fool",
      keywords: ["開始", "冒險", "嘗試", "新階段"]
    },
    release: {
      key: "release",
      title: "你需要的提醒是：有些答案，不需要再回頭找",
      analysis: [
        "你可能還在想一件過去的事。",
        "那可能是一段關係、一個遺憾、一句沒說出口的話，或是一個你一直想不通的結局。你不是沒有往前走，而是心裡還有一部分停在那個場景裡，想知道為什麼會變成這樣。",
        "可是有些事情不會給你完整的解釋。有些人也不一定會用你期待的方式理解你、回應你、補償你。"
      ],
      universeReminder: "你不需要等過去變得合理，才允許自己好起來。",
      actions: [
        "寫一封不寄出的信，把想說的、委屈的、不甘心的都寫下來。",
        "寫完之後，把它收起來或刪掉。",
        "這不是否定過去，而是把自己的心慢慢還給自己。"
      ],
      tarotCard: "月亮 The Moon",
      keywords: ["放下", "釋懷", "情緒清理", "離開舊循環"]
    },
    guidance: {
      key: "guidance",
      title: "你需要的提醒是：你正在靠近更適合自己的生活",
      analysis: [
        "你現在可能還看不清楚全貌，但其實已經走在轉變的路上。",
        "你開始對某些事情沒那麼執著，也開始對某些人、某些環境產生距離感。這不是你變冷漠，而是你的內在正在重新校準。",
        "你可能會覺得自己有點迷惘，像是知道現在的生活不完全適合自己，卻還不知道下一步該往哪裡走。但這段模糊期並不是壞事，它代表你正在離開舊的頻率。"
      ],
      universeReminder: "你不是迷路，你是在離開不適合你的路。",
      actions: [
        "多留意最近反覆出現的訊號。",
        "它可能是一句話、一篇文章、一個夢，或一個突然想做的念頭。",
        "你的直覺正在提醒你下一步。"
      ],
      tarotCard: "星星 The Star",
      keywords: ["指引", "希望", "直覺", "命運轉向"]
    }
  } satisfies Record<UniverseMessageResultKey, UniverseMessageResult>
} as const;
