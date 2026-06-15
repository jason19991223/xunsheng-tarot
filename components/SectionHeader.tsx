export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-sm font-semibold text-violetdeep">{eyebrow}</p> : null}
      <h2 className="mt-2 font-serif text-2xl font-semibold text-midnight sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-ink/64">{description}</p> : null}
    </div>
  );
}
