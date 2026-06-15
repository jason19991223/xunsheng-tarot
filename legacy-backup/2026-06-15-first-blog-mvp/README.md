# 尋聲塔羅

「在牌面與象徵之間，尋回內在真正的聲音。」

尋聲塔羅是一個使用 Next.js、TypeScript、Tailwind CSS 與本地 Markdown 建立的內容型部落格 MVP。主題包含托特塔羅、牌義解析、牌陣教學、占星與卡巴拉象徵、每日抽牌紀錄與靈性自我探索。

## 技術架構

- Next.js App Router
- TypeScript
- Tailwind CSS
- 本地 Markdown 文章
- 無資料庫、無會員系統、無付款功能
- 內建 sitemap 與 robots.txt

## 安裝與啟動

```bash
npm install
npm run dev
```

開發伺服器預設會在 `http://localhost:3000` 啟動。

正式建置：

```bash
npm run build
npm run start
```

檢查程式：

```bash
npm run lint
npm run type-check
```

## 資料夾結構

```text
app/                 Next.js App Router 頁面與 SEO route
components/          共用 UI 元件
constants/           網站設定與分類設定
content/             Markdown 內容與文章模板
content/posts/       部落格文章
lib/                 文章讀取與整理邏輯
types/               TypeScript 型別
```

## 如何新增文章

1. 複製 `content/post-template.md`。
2. 在 `content/posts/` 建立新的 `.md` 檔案，例如 `my-new-post.md`。
3. 修改 frontmatter：

```yaml
---
title: "文章標題"
slug: "my-new-post"
description: "文章摘要"
date: "2026-05-30"
category: "塔羅學習筆記"
tags:
  - "托特塔羅"
  - "塔羅入門"
readingTime: "5 分鐘"
featured: false
draft: false
---
```

4. 在 frontmatter 下方撰寫 Markdown 內容。
5. 若 `draft: true`，文章不會顯示在正式列表。

可用分類集中管理於 `constants/categories.ts`。

## 目前範例文章

- 托特塔羅是什麼？和偉特塔羅有什麼不同
- 愚者牌：不是魯莽，而是靈魂踏出的第一步
- 魔法師牌：意志、語言與創造力的啟動
- 每日抽牌要怎麼問，才不會越抽越焦慮
- 三張牌牌陣：過去、現在、可能發展
- 塔羅不是替你決定，而是幫你看見選擇

## 環境變數

請複製 `.env.example` 為 `.env.local`，並依部署網域調整：

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

此專案不需要 API Key。

## MVP 暫時簡化

- 聯絡頁僅提供 Email placeholder，尚未串接表單寄信。
- 文章搜尋尚未加入。
- 目前使用本地 Markdown，尚未串接 CMS。
- 尚未加入電子報、Google Analytics、AdSense。
- 尚未加入線上抽牌或每日牌卡互動功能。

## 後續擴充方向

- 線上抽牌功能：可建立牌庫資料與互動抽牌頁面。
- 每日牌卡：可用日期 seed 產生每日固定牌卡。
- 電子報：可串接 Buttondown、ConvertKit、Mailchimp 或自建 API route。
- 文章搜尋：可先用本地索引與 Fuse.js，再視內容量升級。
- Google Analytics：於 `app/layout.tsx` 加入官方 script，並使用環境變數控制 ID。
- AdSense：待內容量與流量穩定後加入廣告 script 與版位。
- WordPress / Headless CMS：可保留前端架構，將 `lib/posts.ts` 替換為 CMS 讀取層。
