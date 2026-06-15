export function PageIntro({
  label,
  title,
  description
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-plum/10 bg-white/42">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="text-sm font-semibold text-violetdeep">{label}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-midnight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-ink/66">{description}</p>
      </div>
    </section>
  );
}
