import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { PageIntro } from "@/components/PageIntro";
import { QuizEngine } from "@/components/QuizEngine";
import { getQuizBySlug, quizzes } from "@/data/quizzes";
import { siteContent } from "@/data/siteContent";

type QuizPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return quizzes.filter((quiz) => quiz.slug !== "universe-message").map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    return { title: "測驗不存在" };
  }

  return {
    title: quiz.title,
    description: quiz.excerpt,
    alternates: {
      canonical: `${siteContent.url}/quiz/${quiz.slug}`
    },
    openGraph: {
      title: quiz.title,
      description: quiz.excerpt,
      url: `${siteContent.url}/quiz/${quiz.slug}`,
      images: [siteContent.coverImage]
    }
  };
}

export default async function QuizDetailPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    notFound();
  }

  return (
    <>
      <PageIntro label="Quiz" title={quiz.title} description={quiz.intro} />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <QuizEngine quiz={quiz} />
        <div className="grid content-start gap-4">
          <AdSlot />
          <p className="rounded-lg border border-mistgold/30 bg-mistgold/10 p-4 text-xs leading-6 text-ink/58">
            {siteContent.disclaimer}
          </p>
        </div>
      </div>
    </>
  );
}
