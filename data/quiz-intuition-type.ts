export type IntuitionTypeResultKey = "dream" | "emotion" | "body" | "symbol" | "inspiration";

export type IntuitionTypeOption = {
  label: "A" | "B" | "C" | "D" | "E";
  text: string;
  resultKey: IntuitionTypeResultKey;
};

export type IntuitionTypeQuestion = {
  question: string;
  options: IntuitionTypeOption[];
};

export type IntuitionTypeResult = {
  key: IntuitionTypeResultKey;
  title: string;
  analysis: string[];
  reminder: string;
  actions: string[];
  tarotCard: string;
  crystal: string;
};

export const intuitionTypeQuiz = {
  title: "直覺心理測驗｜你是哪一種直覺型人格？",
  slug: "intuition-type",
  description: "透過 10 題塔羅系心理測驗，探索你最常接收直覺訊息的方式。",
  intro: [
    "直覺不一定都是突然知道答案。有些人透過夢境接收，有些人從情緒、身體、符號或靈感裡辨認內在訊息。",
    "這份測驗以托特塔羅的象徵語境作為靈感，協助你觀察自己的直覺入口。它不是診斷，也不是命運定論，而是一個自我覺察練習。",
    "請依照第一個浮現的感覺作答。完成 10 題後，系統會統計 A/B/C/D/E 五種類型；若最高分同分，將以第 10 題選項作為最終結果。"
  ],
  questions: [
    {
      question: "當你需要做一個重要選擇時，最常先出現的是什麼？",
      options: [
        { label: "A", text: "前一晚或最近的夢，像在提醒某個方向。", resultKey: "dream" },
        { label: "B", text: "一種很明顯的情緒波動，讓你知道喜歡或排斥。", resultKey: "emotion" },
        { label: "C", text: "身體的緊繃、放鬆、胃感或呼吸變化。", resultKey: "body" },
        { label: "D", text: "反覆看見某個數字、圖像、詞語或巧合。", resultKey: "symbol" },
        { label: "E", text: "突然跳出一句話或一個完整想法。", resultKey: "inspiration" }
      ]
    },
    {
      question: "你回想過去的準確直覺，通常像哪一種經驗？",
      options: [
        { label: "A", text: "夢裡先看過類似場景，醒來後仍印象深刻。", resultKey: "dream" },
        { label: "B", text: "當下情緒很快告訴你，某件事不太對。", resultKey: "emotion" },
        { label: "C", text: "身體先有反應，之後才理解原因。", resultKey: "body" },
        { label: "D", text: "外界符號像串成線索，讓你注意某件事。", resultKey: "symbol" },
        { label: "E", text: "腦中忽然出現解法，像火花一樣明確。", resultKey: "inspiration" }
      ]
    },
    {
      question: "如果用托特塔羅的畫面感形容你的直覺，它比較像？",
      options: [
        { label: "A", text: "The Moon 的夢境潮汐，從潛意識深處浮上來。", resultKey: "dream" },
        { label: "B", text: "Queen of Cups 的感受之鏡，映出關係裡的細微流動。", resultKey: "emotion" },
        { label: "C", text: "Art 的煉金容器，身體正在調和不同能量。", resultKey: "body" },
        { label: "D", text: "The Magus 的符號桌面，每個細節都可能是訊息。", resultKey: "symbol" },
        { label: "E", text: "Ace of Wands 的火光，瞬間點亮下一步。", resultKey: "inspiration" }
      ]
    },
    {
      question: "你最容易在哪個時刻接收到內在訊息？",
      options: [
        { label: "A", text: "剛睡醒、半夢半醒，或記錄夢境時。", resultKey: "dream" },
        { label: "B", text: "和人互動後，情緒慢慢沉澱下來時。", resultKey: "emotion" },
        { label: "C", text: "散步、伸展、洗澡或安靜呼吸時。", resultKey: "body" },
        { label: "D", text: "翻書、抽牌、走在路上看見某個象徵時。", resultKey: "symbol" },
        { label: "E", text: "寫字、創作、工作到一半突然卡點被打開時。", resultKey: "inspiration" }
      ]
    },
    {
      question: "當你忽略直覺時，最常發生什麼？",
      options: [
        { label: "A", text: "夢變得更密集，或同一主題反覆出現。", resultKey: "dream" },
        { label: "B", text: "心情越來越悶，像有感受沒有被承認。", resultKey: "emotion" },
        { label: "C", text: "身體更疲憊、緊繃，或出現明顯不適感。", resultKey: "body" },
        { label: "D", text: "同樣的提醒一直在外界重複出現。", resultKey: "symbol" },
        { label: "E", text: "腦中一直冒出同一個念頭，無法真正放下。", resultKey: "inspiration" }
      ]
    },
    {
      question: "你判斷一段關係或合作是否適合時，最信任哪種訊號？",
      options: [
        { label: "A", text: "對方出現在夢裡的氛圍與結局。", resultKey: "dream" },
        { label: "B", text: "相處後的情緒餘韻，是安定還是耗損。", resultKey: "emotion" },
        { label: "C", text: "身體靠近或退後的自然反應。", resultKey: "body" },
        { label: "D", text: "你們之間反覆出現的象徵、話題或巧合。", resultKey: "symbol" },
        { label: "E", text: "某個突然清楚的結論：我知道該怎麼做。", resultKey: "inspiration" }
      ]
    },
    {
      question: "你最適合用哪種方式練習直覺？",
      options: [
        { label: "A", text: "夢境日記，記錄人物、場景與醒來後的感覺。", resultKey: "dream" },
        { label: "B", text: "情緒紀錄，把感受、需求和界線分開寫。", resultKey: "emotion" },
        { label: "C", text: "身體掃描，觀察哪裡收縮、哪裡放鬆。", resultKey: "body" },
        { label: "D", text: "象徵筆記，收集反覆出現的牌、數字、詞語。", resultKey: "symbol" },
        { label: "E", text: "自由書寫，讓第一個想法不經審查地落到紙上。", resultKey: "inspiration" }
      ]
    },
    {
      question: "你最容易把哪件事誤認成直覺？",
      options: [
        { label: "A", text: "把每個夢都當成預言，而忘了看現實脈絡。", resultKey: "dream" },
        { label: "B", text: "把強烈情緒直接當成答案，而沒有等待沉澱。", resultKey: "emotion" },
        { label: "C", text: "把疲勞或壓力造成的反應，誤當成警訊。", resultKey: "body" },
        { label: "D", text: "過度解讀每個巧合，讓自己更焦慮。", resultKey: "symbol" },
        { label: "E", text: "把一時衝動當成靈感，太快行動。", resultKey: "inspiration" }
      ]
    },
    {
      question: "你現在最需要哪一種提醒？",
      options: [
        { label: "A", text: "先睡一晚，讓潛意識把訊息整理好。", resultKey: "dream" },
        { label: "B", text: "先承認感受，不急著說服自己沒事。", resultKey: "emotion" },
        { label: "C", text: "先回到呼吸和身體，再處理複雜問題。", resultKey: "body" },
        { label: "D", text: "先觀察重複出現的線索，不急著下結論。", resultKey: "symbol" },
        { label: "E", text: "先把靈感寫下來，再選一個小步驟。", resultKey: "inspiration" }
      ]
    },
    {
      question: "如果今天只能選一個直覺入口，你會選哪一個？",
      options: [
        { label: "A", text: "夢境，因為它總能說出白天沒說出口的事。", resultKey: "dream" },
        { label: "B", text: "情緒，因為感受會先替你辨認真實需求。", resultKey: "emotion" },
        { label: "C", text: "身體，因為身體比頭腦更早知道界線。", resultKey: "body" },
        { label: "D", text: "符號，因為世界會用象徵把訊息送到你面前。", resultKey: "symbol" },
        { label: "E", text: "靈感，因為答案常在一瞬間完整出現。", resultKey: "inspiration" }
      ]
    }
  ],
  results: {
    dream: {
      key: "dream",
      title: "A｜夢境接收型",
      analysis: [
        "你的直覺常透過夢境、半夢半醒的畫面或潛意識象徵出現。你不一定會立刻懂，但夢醒後留下的情緒、顏色、場景和人物，往往藏著真正的提示。",
        "在托特塔羅裡，The Moon 指向潛意識、夜路與不易被理性照亮的感知。對你來說，直覺不是硬想出來的，而是需要留一點黑暗和安靜，讓訊息自己浮上來。"
      ],
      reminder: "你的直覺需要睡眠、沉澱與記錄。先不要急著解夢，請先保存夢的原始質地。",
      actions: [
        "醒來後先記下三個關鍵字：人物、場景、感覺。",
        "連續七天觀察夢裡重複出現的主題，不急著把它當成預言。",
        "重要決定前留一晚沉澱，隔天再看身體和情緒是否一致。"
      ],
      tarotCard: "托特塔羅 The Moon（月亮）",
      crystal: "紫水晶、月光石"
    },
    emotion: {
      key: "emotion",
      title: "B｜情緒感知型",
      analysis: [
        "你的直覺常從情緒變化裡冒出來。你能感覺到語氣、氣氛、關係裡細微的靠近或退縮，也容易在相處後知道自己是被滋養還是被消耗。",
        "托特塔羅的 Queen of Cups 像一面感受之鏡，提醒你情緒可以是訊息，但需要清澈的容器承接。當你先安放感受，而不是立刻反應，直覺會更準。"
      ],
      reminder: "你的感受很敏銳，但不必替所有人的情緒負責。先分清楚：這是我的，還是我接收到的。",
      actions: [
        "互動後寫下：我感覺到什麼、我需要什麼、我能負責什麼。",
        "情緒很強時先等 20 分鐘，再決定要不要回應。",
        "練習把同理心和界線一起使用。"
      ],
      tarotCard: "托特塔羅 Queen of Cups（聖杯皇后）",
      crystal: "粉晶、海藍寶"
    },
    body: {
      key: "body",
      title: "C｜身體直覺型",
      analysis: [
        "你的直覺常先在身體發生。肩膀收緊、胸口打開、胃部不安、呼吸變淺，這些反應比頭腦更早替你辨認界線、壓力和真正的選擇。",
        "托特塔羅的 Art 強調調和、煉金與身心能量的混合。你的直覺不適合被逼問答案，而適合透過呼吸、移動和感官回到當下。"
      ],
      reminder: "身體不是阻礙你理性判斷的雜訊，它是你的第一層羅盤。",
      actions: [
        "做決定前先掃描身體：哪裡緊、哪裡鬆、哪裡想退後。",
        "用散步、伸展或深呼吸整理資訊，不要只坐著硬想。",
        "把身體訊號和現實資料一起看，避免只靠壓力反應判斷。"
      ],
      tarotCard: "托特塔羅 Art（藝術）",
      crystal: "黑曜石、煙晶"
    },
    symbol: {
      key: "symbol",
      title: "D｜符號訊息型",
      analysis: [
        "你的直覺常透過外界符號靠近你。重複出現的數字、牌面、詞語、音樂、路上的標誌，都可能讓你忽然意識到某個被忽略的訊息。",
        "托特塔羅的 The Magus 掌管語言、符號與意志的排列。你擅長從碎片中看見關聯，但也需要辨認哪些是真正重複的線索，哪些只是焦慮造成的過度搜尋。"
      ],
      reminder: "符號是入口，不是命令。它邀請你提問，而不是要求你立刻照做。",
      actions: [
        "把重複出現的符號記錄三次以上，再觀察它們共同指向什麼。",
        "每次看到強烈符號時問自己：它提醒我哪個現實問題？",
        "避免在焦慮時連續查詢牌義或象徵，先回到具體生活。"
      ],
      tarotCard: "托特塔羅 The Magus（魔術師）",
      crystal: "青金石、白水晶"
    },
    inspiration: {
      key: "inspiration",
      title: "E｜靈感突現型",
      analysis: [
        "你的直覺常像一道火光，突然出現一句話、一個方案或一個清楚的下一步。你可能前一刻還沒有答案，下一刻卻知道要往哪裡走。",
        "托特塔羅的 Ace of Wands 指向初始火焰、創造衝動與生命力。你的靈感很珍貴，但需要落地成小行動，才不會只停留在興奮或衝動裡。"
      ],
      reminder: "靈感來時請先接住，不必立刻完成全部。火光需要容器，才會變成真正的創造。",
      actions: [
        "靈感出現後 5 分鐘內寫下來，不先評價可不可行。",
        "把大想法拆成今天能完成的 15 分鐘行動。",
        "行動前確認資源、時間和界線，讓靈感有機會長久。"
      ],
      tarotCard: "托特塔羅 Ace of Wands（權杖一）",
      crystal: "黃水晶、紅瑪瑙"
    }
  } satisfies Record<IntuitionTypeResultKey, IntuitionTypeResult>
} as const;
