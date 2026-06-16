"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  universeMessageQuiz,
  type UniverseMessageResultKey
} from "@/data/quiz-universe-message";

type Step = "intro" | "question" | "result";
type Answers = Record<number, UniverseMessageResultKey>;

const resultKeys: UniverseMessageResultKey[] = ["rest", "start", "release", "guidance"];

function calculateResult(answers: Answers): UniverseMessageResultKey {
  const scores = resultKeys.reduce<Record<UniverseMessageResultKey, number>>(
    (currentScores, key) => ({ ...currentScores, [key]: 0 }),
    { rest: 0, start: 0, release: 0, guidance: 0 }
  );

  Object.values(answers).forEach((key) => {
    scores[key] += 1;
  });

  const highestScore = Math.max(...resultKeys.map((key) => scores[key]));
  const topKeys = resultKeys.filter((key) => scores[key] === highestScore);

  if (topKeys.length === 1) {
    return topKeys[0];
  }

  return answers[universeMessageQuiz.questions.length - 1] ?? topKeys[0];
}

export function UniverseMessageQuiz() {
  const [step, setStep] = useState<Step>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = universeMessageQuiz.questions[questionIndex];
  const isLastQuestion = questionIndex === universeMessageQuiz.questions.length - 1;
  const resultKey = useMemo(() => calculateResult(answers), [answers]);
  const result = universeMessageQuiz.results[resultKey];

  function selectAnswer(key: UniverseMessageResultKey) {
    const nextAnswers = { ...answers, [questionIndex]: key };
    setAnswers(nextAnswers);

    if (isLastQuestion) {
      setStep("result");
      return;
    }

    setQuestionIndex((current) => current + 1);
  }

  function reset() {
    setAnswers({});
    setQuestionIndex(0);
    setStep("intro");
  }

  async function shareResult() {
    const shareText = `${universeMessageQuiz.title}\n我的結果：${result.title}`;

    if (navigator.share) {
      await navigator.share({
        title: universeMessageQuiz.title,
        text: shareText,
        url: window.location.href
      });
      return;
    }

    await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
    alert("結果連結已複製");
  }

  if (step === "intro") {
    return (
      <section className="rounded-xl border border-plum/10 bg-white/88 p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-violetdeep">Tarot Quiz</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-midnight sm:text-5xl">
          {universeMessageQuiz.title}
        </h1>
        <div className="mt-5 grid gap-3 text-base leading-8 text-ink/70">
          {universeMessageQuiz.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setStep("question")}
          className="mt-7 w-full rounded-full bg-plum px-6 py-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-midnight sm:w-auto"
        >
          開始測驗
        </button>
      </section>
    );
  }

  if (step === "result") {
    return (
      <section className="rounded-xl border border-plum/10 bg-white/90 p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-violetdeep">你的宇宙提醒</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-midnight">
          {result.title}
        </h1>

        <div className="mt-6 grid gap-4 text-base leading-8 text-ink/72">
          {result.analysis.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-mistgold/30 bg-mistgold/10 p-4">
          <h2 className="font-serif text-xl font-semibold text-midnight">宇宙想提醒你</h2>
          <p className="mt-2 leading-7 text-ink/72">{result.universeReminder}</p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-cream p-4">
            <h2 className="text-xs font-semibold text-violetdeep">塔羅提醒牌</h2>
            <p className="mt-2 font-serif text-xl text-midnight">{result.tarotCard}</p>
          </div>
          <div className="rounded-lg bg-cream p-4">
            <h2 className="text-xs font-semibold text-violetdeep">關鍵字</h2>
            <p className="mt-2 leading-7 text-ink/72">{result.keywords.join("、")}</p>
          </div>
        </div>

        <div className="mt-5 rounded-lg bg-cream p-4">
          <h2 className="font-serif text-xl font-semibold text-midnight">行動建議</h2>
          <ul className="mt-3 grid gap-2 text-sm leading-7 text-ink/70">
            {result.actions.map((action) => (
              <li key={action}>- {action}</li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-plum/20 bg-white px-5 py-3 text-sm font-semibold text-plum"
          >
            重新測驗
          </button>
          <button
            type="button"
            onClick={shareResult}
            className="rounded-full bg-plum px-5 py-3 text-sm font-semibold text-cream"
          >
            分享結果
          </button>
        </div>

        <div className="mt-7 rounded-xl border border-plum/10 bg-white p-4">
          <h2 className="font-serif text-xl font-semibold text-midnight">下一步</h2>
          <p className="mt-2 text-sm leading-7 text-ink/66">
            如果這個結果讓你有感，可以接著閱讀更多塔羅文章，延伸整理你最近收到的提醒。
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/articles" className="rounded-full bg-cream px-4 py-2 text-center text-sm font-semibold text-plum">
              閱讀更多文章
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-plum/10 bg-white/90 p-5 shadow-sm sm:p-8">
      <p className="text-sm font-semibold text-violetdeep">
        {questionIndex + 1} / {universeMessageQuiz.questions.length}
      </p>
      <h1 className="mt-3 font-serif text-2xl font-semibold leading-tight text-midnight sm:text-3xl">
        {currentQuestion.question}
      </h1>

      <div className="mt-6 grid gap-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => selectAnswer(option.resultKey)}
            className="rounded-lg border border-plum/10 bg-cream px-4 py-4 text-left text-sm leading-7 text-ink/76 transition hover:border-mistgold hover:bg-white"
          >
            <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-plum text-xs font-semibold text-cream">
              {option.label}
            </span>
            {option.text}
          </button>
        ))}
      </div>
    </section>
  );
}
