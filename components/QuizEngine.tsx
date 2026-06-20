"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Quiz, QuizResult } from "@/types/content";
import { getArticleBySlug } from "@/data/articles";
import { siteContent } from "@/data/siteContent";
import { ShareButtons } from "@/components/ShareButtons";

type Scores = Record<string, number>;

function getTopResult(quiz: Quiz, scores: Scores, tieBreakerKey?: string): QuizResult {
  const highestScore = Math.max(...quiz.results.map((result) => scores[result.key] ?? 0));
  const topResults = quiz.results.filter((result) => (scores[result.key] ?? 0) === highestScore);

  if (topResults.length > 1 && tieBreakerKey) {
    const tieBreakerResult = quiz.results.find((result) => result.key === tieBreakerKey);

    if (tieBreakerResult) {
      return tieBreakerResult;
    }
  }

  const topKey = topResults[0]?.key ?? quiz.results[0].key;

  return quiz.results.find((result) => result.key === topKey) ?? quiz.results[0];
}

export function QuizEngine({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const scores = useMemo(() => {
    return Object.values(answers).reduce<Scores>((currentScores, resultKey) => {
      return {
        ...currentScores,
        [resultKey]: (currentScores[resultKey] ?? 0) + 1
      };
    }, {});
  }, [answers]);

  const finalAnswerKey = answers[quiz.questions.length - 1];
  const result = getTopResult(quiz, scores, finalAnswerKey);
  const isComplete = Object.keys(answers).length === quiz.questions.length;

  function reset() {
    setAnswers({});
    setShowResult(false);
  }

  if (showResult && isComplete) {
    return (
      <section className="rounded-xl border border-plum/10 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-sm font-semibold text-violetdeep">你的結果</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-midnight">{result.name}</h2>
        <p className="mt-4 text-lg leading-8 text-ink/72">{result.summary}</p>
        <p className="mt-4 leading-8 text-ink/68">{result.detail}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-cream p-4">
            <p className="text-xs font-semibold text-violetdeep">適合的塔羅牌</p>
            <p className="mt-1 font-serif text-xl text-midnight">{result.tarotCard}</p>
          </div>
          <div className="rounded-lg bg-cream p-4">
            <p className="text-xs font-semibold text-violetdeep">適合的水晶</p>
            <p className="mt-1 font-serif text-xl text-midnight">{result.crystal}</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-cream p-4">
          <h3 className="font-serif text-xl font-semibold text-midnight">建議行動</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-7 text-ink/68">
            {result.actions.map((action) => (
              <li key={action}>- {action}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-serif text-xl font-semibold text-midnight">延伸閱讀</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.relatedSlugs.map((slug) => (
              getArticleBySlug(slug) ? (
                <Link
                  key={slug}
                  href={`/articles/${slug}`}
                  className="rounded-full border border-plum/15 px-3 py-1.5 text-sm text-plum"
                >
                  {getArticleBySlug(slug)?.title}
                </Link>
              ) : null
            ))}
          </div>
        </div>

        <div className="mt-6">
          <ShareButtons title={`${quiz.title}：${result.name}`} />
        </div>

        <p className="mt-6 rounded-lg border border-mistgold/30 bg-mistgold/10 p-4 text-xs leading-6 text-ink/58">
          {siteContent.disclaimer}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-5 rounded-full border border-plum/20 px-4 py-2 text-sm font-semibold text-plum"
        >
          重新測驗
        </button>
      </section>
    );
  }

  return (
    <section className="grid gap-5">
      {quiz.questions.map((question, questionIndex) => (
        <fieldset key={question.question} className="rounded-xl border border-plum/10 bg-white p-5 shadow-sm">
          <legend className="font-serif text-xl font-semibold text-midnight">
            {questionIndex + 1}. {question.question}
          </legend>
          <div className="mt-4 grid gap-3">
            {question.options.map((option) => (
              <label
                key={option.label}
                className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition ${
                  answers[questionIndex] === option.resultKey
                    ? "border-plum bg-plum text-cream"
                    : "border-plum/10 bg-cream text-ink/72 hover:border-mistgold"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={option.resultKey}
                  checked={answers[questionIndex] === option.resultKey}
                  onChange={() =>
                    setAnswers((currentAnswers) => ({
                      ...currentAnswers,
                      [questionIndex]: option.resultKey
                    }))
                  }
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <button
        type="button"
        disabled={!isComplete}
        onClick={() => setShowResult(true)}
        className="rounded-full bg-plum px-6 py-3 text-sm font-semibold text-cream transition enabled:hover:bg-midnight disabled:cursor-not-allowed disabled:opacity-45"
      >
        查看結果
      </button>
    </section>
  );
}
