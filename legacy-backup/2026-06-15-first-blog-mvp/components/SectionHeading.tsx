export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
}) {
  const titleClass = tone === "light" ? "text-ink" : "text-parchment";
  const descriptionClass = tone === "light" ? "text-ink/66" : "text-parchment/68";

  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-sm font-medium text-mistgold">{eyebrow}</p> : null}
      <h2 className={`mt-2 font-serif text-3xl font-semibold md:text-4xl ${titleClass}`}>{title}</h2>
      {description ? <p className={`mt-3 leading-7 ${descriptionClass}`}>{description}</p> : null}
    </div>
  );
}
