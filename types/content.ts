export type NavItem = {
  label: string;
  href: string;
};

export type ArticleCategory =
  | "tarot-beginner"
  | "tarot-meanings"
  | "relationship"
  | "self-discovery"
  | "quiz-insights"
  | "crystal-energy";

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: ArticleCategory;
  categoryLabel: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  relatedArticles: string[];
  relatedQuizzes: string[];
  metaTitle: string;
  metaDescription: string;
};

export type QuizOption = {
  label: string;
  resultKey: string;
};

export type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

export type QuizResult = {
  key: string;
  name: string;
  summary: string;
  detail: string;
  tarotCard: string;
  crystal: string;
  actions: string[];
  relatedSlugs: string[];
};

export type Quiz = {
  title: string;
  slug: string;
  excerpt: string;
  intro: string;
  questions: QuizQuestion[];
  results: QuizResult[];
};

export type TarotCard = {
  name: string;
  englishName: string;
  slug: string;
  arcana: "major" | "minor";
  number: string;
  keywords: string[];
  uprightMeaning: string[];
  reversedMeaning: string[];
  loveReading: string;
  careerReading: string;
  selfReflection: string;
  relatedArticleSlugs: string[];
};

export type Tag = {
  name: string;
  slug: string;
};

export type FeatureLink = {
  title: string;
  description: string;
  href: string;
};
