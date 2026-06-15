import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { quizzes } from "@/data/quizzes";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "心理測驗",
  description: "尋聲塔羅心理測驗入口，提供娛樂、自我探索與情感整理測驗。",
  alternates: {
    canonical: `${siteContent.url}/quiz`
  },
  openGraph: {
    title: `心理測驗｜${siteContent.name}`,
    description: "尋聲塔羅心理測驗入口，提供娛樂、自我探索與情感整理測驗。",
    url: `${siteContent.url}/quiz`
  }
};

export default function QuizPage() {
  return (
    <>
      <PageIntro
        label="Quiz"
        title="心理測驗"
        description="測驗定位為娛樂與自我探索，不做醫療或人格診斷。選一個主題，看看此刻哪個聲音需要被理解。"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-2">
        {quizzes.map((quiz) => (
          <article key={quiz.slug} className="rounded-lg border border-plum/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-violetdeep">{quiz.questions.length} 題</p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-midnight">{quiz.title}</h2>
            <p className="mt-3 text-sm leading-7 text-ink/64">{quiz.excerpt}</p>
            <Link
              href={`/quiz/${quiz.slug}`}
              className="mt-5 inline-flex rounded-full bg-plum px-4 py-2 text-sm font-semibold text-cream"
            >
              開始測驗
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
