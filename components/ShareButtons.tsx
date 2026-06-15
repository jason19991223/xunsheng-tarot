"use client";

export function ShareButtons({ title }: { title: string }) {
  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
  }

  function nativeShare() {
    if (navigator.share) {
      void navigator.share({
        title,
        url: window.location.href
      });
      return;
    }

    void copyLink();
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={nativeShare}
        className="rounded-full bg-plum px-4 py-2 text-sm font-semibold text-cream transition hover:bg-midnight"
      >
        分享頁面
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="rounded-full border border-plum/20 bg-white px-4 py-2 text-sm font-semibold text-plum transition hover:border-mistgold"
      >
        複製連結
      </button>
    </div>
  );
}
