import Link from "next/link";
import type { FeatureLink } from "@/types/content";

export function FeatureCard({ feature }: { feature: FeatureLink }) {
  return (
    <Link
      href={feature.href}
      className="rounded-lg border border-plum/10 bg-white/74 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-mistgold/60 hover:shadow-md"
    >
      <h3 className="font-serif text-xl font-semibold text-midnight">{feature.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/66">{feature.description}</p>
    </Link>
  );
}
