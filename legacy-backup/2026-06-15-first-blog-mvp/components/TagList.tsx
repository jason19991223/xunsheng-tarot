export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-mistgold/25 bg-mistgold/10 px-2.5 py-1 text-xs text-parchment/76"
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
}
