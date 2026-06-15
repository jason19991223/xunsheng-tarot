import type { TarotCard } from "@/types/content";

const majorArcanaSeeds = [
  ["0", "愚者", "The Fool", "the-fool", ["開始", "自由", "未知", "信任"]],
  ["I", "魔術師", "The Magician", "the-magician", ["意志", "創造", "語言", "聚焦"]],
  ["II", "女祭司", "The High Priestess", "the-high-priestess", ["直覺", "安靜", "內在知識", "等待"]],
  ["III", "皇后", "The Empress", "the-empress", ["滋養", "感受", "創造", "接納"]],
  ["IV", "皇帝", "The Emperor", "the-emperor", ["結構", "界線", "承擔", "穩定"]],
  ["V", "教皇", "The Hierophant", "the-hierophant", ["傳承", "信念", "學習", "規範"]],
  ["VI", "戀人", "The Lovers", "the-lovers", ["選擇", "關係", "價值觀", "連結"]],
  ["VII", "戰車", "The Chariot", "the-chariot", ["方向", "意志", "推進", "整合"]],
  ["VIII", "力量", "Strength", "strength", ["勇氣", "溫柔", "耐心", "內在力量"]],
  ["IX", "隱者", "The Hermit", "the-hermit", ["內省", "獨處", "智慧", "尋找"]],
  ["X", "命運之輪", "Wheel of Fortune", "wheel-of-fortune", ["循環", "轉變", "時機", "流動"]],
  ["XI", "正義", "Justice", "justice", ["平衡", "誠實", "因果", "決斷"]],
  ["XII", "吊人", "The Hanged Man", "the-hanged-man", ["暫停", "換位", "臣服", "觀點"]],
  ["XIII", "死神", "Death", "death", ["結束", "轉化", "放下", "更新"]],
  ["XIV", "節制", "Temperance", "temperance", ["調和", "整合", "節奏", "修復"]],
  ["XV", "惡魔", "The Devil", "the-devil", ["束縛", "慾望", "執著", "看見陰影"]],
  ["XVI", "高塔", "The Tower", "the-tower", ["瓦解", "真相", "重建", "醒來"]],
  ["XVII", "星星", "The Star", "the-star", ["希望", "療癒", "信任", "遠方"]],
  ["XVIII", "月亮", "The Moon", "the-moon", ["潛意識", "迷霧", "感受", "夢境"]],
  ["XIX", "太陽", "The Sun", "the-sun", ["清晰", "喜悅", "生命力", "展現"]],
  ["XX", "審判", "Judgement", "judgement", ["召喚", "覺醒", "回應", "整合"]],
  ["XXI", "世界", "The World", "the-world", ["完成", "整合", "成熟", "展開"]]
] as const;

export const tarotCards: TarotCard[] = majorArcanaSeeds.map(([number, name, englishName, slug, keywords]) => ({
  name,
  englishName,
  slug,
  arcana: "major",
  number,
  keywords: [...keywords],
  uprightMeaning: [
    `${name}的正位提醒你靠近「${keywords[0]}」的力量，讓事情在更清楚的位置上被看見。`,
    `這張牌通常不是單一事件答案，而是一種正在浮現的心理狀態或生命課題。`,
    `如果它出現在牌陣中，可以先觀察它與其他牌之間是推動、提醒，還是要求你停下來整理。`
  ],
  reversedMeaning: [
    `${name}逆位可能表示這股能量被壓抑、過度使用，或尚未找到健康出口。`,
    `它不必然代表壞事，而是提醒你檢查是否正在逃避、用力過度，或被舊慣性牽引。`
  ],
  loveReading: `感情中，${name}提醒你看見關係裡的${keywords[1]}。它適合用來整理期待、界線與真實需求，不建議拿來做絕對預測。`,
  careerReading: `工作中，${name}指向${keywords[2]}。它可能提醒你調整節奏、釐清責任，或把抽象想法落到可執行的步驟。`,
  selfReflection: `自我探索上，請問自己：我現在如何面對${keywords[3]}？我是否願意用更清醒的方式回應這張牌帶來的提醒？`,
  relatedArticleSlugs: ["tarot-beginner-start", "tarot-shows-choices", "daily-tarot-journal"]
}));

export function getTarotCardBySlug(slug: string): TarotCard | undefined {
  return tarotCards.find((card) => card.slug === slug);
}
