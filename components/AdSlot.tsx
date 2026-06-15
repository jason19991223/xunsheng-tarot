type AdSlotProps = {
  label?: string;
};

export function AdSlot({ label = "廣告版位預留" }: AdSlotProps) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <aside className="rounded-lg border border-dashed border-plum/20 bg-white/55 px-4 py-6 text-center text-sm text-ink/48">
      {label}
      {adsenseClientId ? <span className="sr-only">AdSense client configured</span> : null}
    </aside>
  );
}
