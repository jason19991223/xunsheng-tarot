import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SearchClient } from "@/components/SearchClient";
import { articles } from "@/data/articles";
import { quizzes } from "@/data/quizzes";
import { siteContent } from "@/data/siteContent";
import { tarotCards } from "@/data/tarotCards";

export const metadata: Metadata = {
  title: "搜尋",
  description: "搜尋尋聲塔羅的文章、心理測驗與塔羅牌義內容。",
  alternates: {
    canonical: `${siteContent.url}/search`
  },
  openGraph: {
    title: `搜尋｜${siteContent.name}`,
    description: "搜尋尋聲塔羅的文章、心理測驗與塔羅牌義內容。",
    url: `${siteContent.url}/search`
  }
};

export default function SearchPage() {
  return (
    <>
      <PageIntro
        label="Search"
        title="搜尋"
        description="可搜尋文章、心理測驗與塔羅牌義。結果會標示內容類型。"
      />
      <SearchClient articles={articles} quizzes={quizzes} tarotCards={tarotCards} />
    </>
  );
}
