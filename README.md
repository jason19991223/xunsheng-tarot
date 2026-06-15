# 尋聲塔羅

尋聲塔羅是以 Next.js、TypeScript、Tailwind CSS 與 App Router 建立的互動式內容網站第一版架構。

目前定位：結合塔羅牌義、心理測驗、情感關係與自我探索內容，未來用於累積 SEO 內容、導入 IG / Threads 流量，並準備申請 Google AdSense。

## 第一階段範圍

已完成：

- 重新整理專案架構
- 建立首頁
- 建立 Header / Footer
- 建立基本路由
- 建立手機版響應式版面
- 建立基本 SEO metadata
- 建立 sitemap / robots.txt
- 整理舊文章摘要到新版 `data/articles.ts`
- 整理測驗與塔羅牌義資料骨架
- 備份舊程式到 `legacy-backup/2026-06-15-first-blog-mvp`
- 移動舊素材到 `public/legacy-assets`

本階段未實作：

- 會員系統
- 登入
- 付款
- 資料庫
- AI 即時占卜
- 完整心理測驗邏輯
- 完整文章系統

## 安裝與啟動

```bash
npm install
npm run dev
```

預設開發網址：

```text
http://localhost:3000
```

正式建置：

```bash
npm run build
```

型別檢查：

```bash
npm run type-check
```

Lint：

```bash
npm run lint
```

## 新版資料夾

```text
app/                  App Router 頁面與 SEO routes
components/           Header、Footer、首頁卡片與頁面元件
constants/            輔助路由常數
data/                 第一階段內容資料
public/images/        新版正式使用素材
public/legacy-assets/ 舊素材備份
legacy-backup/        舊程式與舊內容備份
types/                TypeScript 型別
```

## 主要路由

- `/`
- `/quiz`
- `/articles`
- `/tarot-meanings`
- `/category/relationship`
- `/category/self-discovery`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/disclaimer`

## 舊資料整理

可保留內容：

- 舊 Markdown 文章主題與摘要
- 關於頁、隱私權政策、使用條款、免責聲明文字方向
- 站名、品牌定位、分類方向
- `cover.png`、`mark.png` 圖片素材

已備份舊程式：

- `legacy-backup/2026-06-15-first-blog-mvp/app`
- `legacy-backup/2026-06-15-first-blog-mvp/components`
- `legacy-backup/2026-06-15-first-blog-mvp/constants`
- `legacy-backup/2026-06-15-first-blog-mvp/content`
- `legacy-backup/2026-06-15-first-blog-mvp/lib`
- `legacy-backup/2026-06-15-first-blog-mvp/types`

已移動舊素材：

- `public/legacy-assets/cover.png`
- `public/legacy-assets/mark.png`

已整理成新版資料格式：

- `data/articles.ts`
- `data/quizzes.ts`
- `data/tarotCards.ts`
- `data/siteContent.ts`

不建議繼續沿用：

- 舊 `app/blog` 動態文章頁
- 舊 `lib/posts.ts` Markdown 讀取器
- 舊 `components/PostCard.tsx`
- 舊 `constants/categories.ts`
- 舊 `types/post.ts`

這些檔案已在 `legacy-backup` 中保留，可作內容參考，但不作為新版架構基礎。

## 第二階段內容 MVP

已新增：

- `/quiz` 測驗列表
- `/quiz/[slug]` 測驗詳情與簡單計分邏輯
- `/articles` 文章列表
- `/articles/[slug]` 文章詳情
- `/category/[slug]` 分類頁
- `/tarot-meanings` 牌義列表
- `/tarot-meanings/[slug]` 牌義詳情
- `components/AdSlot.tsx` 廣告版位預留
- `components/ShareButtons.tsx` 分享 / 複製連結按鈕

## 如何新增心理測驗

測驗資料集中在 `data/quizzes.ts`。

每個測驗需要：

- `title`
- `slug`
- `excerpt`
- `questions`
- `results`

每題固定 4 個選項。選項的 `resultKey` 要對應到某個結果的 `key`。

```ts
{
  question: "題目文字",
  options: [
    { label: "選項 A", resultKey: "result-a" },
    { label: "選項 B", resultKey: "result-b" },
    { label: "選項 C", resultKey: "result-c" },
    { label: "選項 D", resultKey: "result-d" }
  ]
}
```

完成測驗後，系統會統計每個 `resultKey` 的得分，顯示最高分結果。

## 如何新增文章

文章資料集中在 `data/articles.ts`。

新增文章時加入一筆 `Article`：

- `title`
- `slug`
- `excerpt`
- `category`
- `categoryLabel`
- `tags`
- `publishedAt`
- `readingTime`
- `body`
- `relatedSlugs`

文章詳情頁會自動使用 `/articles/[slug]`。

## 如何新增塔羅牌義

牌義資料集中在 `data/tarotCards.ts`。

新增牌義時加入一筆 `TarotCard`：

- `name`
- `slug`
- `arcana`
- `number`
- `keywords`
- `summary`
- `upright`
- `reflectionQuestions`
- `relatedArticleSlugs`

牌義詳情頁會自動使用 `/tarot-meanings/[slug]`。

## 廣告版位

`components/AdSlot.tsx` 目前只顯示「廣告版位預留」。尚未接正式 AdSense 程式碼。

正式申請或導入 AdSense 前，應先確認：

- 隱私權政策已補上廣告與 Cookie 說明
- 頁面內容量足夠
- 廣告不遮擋主要內容

## 第三階段完成內容

第三階段將網站擴充為可正式上線測試 SEO 與流量的內容型版本：

- 心理測驗擴充至 10 個
- 文章擴充至 25 篇
- 塔羅牌義擴充至完整大阿爾克那 22 張
- 新增 `/search` 搜尋頁
- 新增 `/tag/[slug]` 標籤頁
- 補強 Article JSON-LD 與 Breadcrumb JSON-LD
- 補強 canonical、Open Graph、sitemap 與 robots
- 首頁加入熱門心理測驗、最新文章、編輯精選、塔羅新手入門、情感關係、自我探索、本週推薦閱讀、測驗推薦區
- 預留 GA4 與 AdSense 環境變數

## 如何新增標籤

標籤集中在 `data/tags.ts`。

新增標籤時加入：

```ts
{ name: "標籤名稱", slug: "tag-slug" }
```

文章的 `tags` 欄位若使用相同 `name`，文章卡片會自動連到 `/tag/[slug]`。

## 環境變數

請複製 `.env.example` 為 `.env.local`。

```bash
NEXT_PUBLIC_SITE_URL=https://xunshengtarot.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ADSENSE_CLIENT_ID=
```

- `NEXT_PUBLIC_SITE_URL`：正式網站網址，用於 canonical、sitemap 與 structured data。
- `NEXT_PUBLIC_GA_ID`：GA4 Measurement ID。空白時不載入 GA script。
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`：AdSense client id 預留。第三階段不載入正式 AdSense 程式碼。

## 部署到 Vercel

1. 將專案推到 GitHub。
2. 在 Vercel 匯入 repository。
3. Framework Preset 選 Next.js。
4. 設定環境變數：
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
5. Deploy。

部署前建議先執行：

```bash
npm run type-check
npm run lint
npm run build
```

## 正式網域與 Google 工具設定

### 設定 NEXT_PUBLIC_SITE_URL

正式部署後，請在 Vercel Project Settings 的 Environment Variables 設定：

```bash
NEXT_PUBLIC_SITE_URL=https://xunshengtarot.com
```

這會影響 canonical URL、sitemap、Open Graph 與 JSON-LD structured data。

### 設定自訂網域

在 Vercel：

1. 進入 Project Settings。
2. 打開 Domains。
3. 新增你的正式網域，例如 `example.com` 或 `www.example.com`。
4. 依 Vercel 顯示的 DNS 記錄到網域商或 Cloudflare 設定。

### Cloudflare DNS 提示

常見設定方式：

- 根網域 `example.com`：使用 Vercel 指定的 A record。
- `www.example.com`：使用 Vercel 指定的 CNAME。
- 若使用 Cloudflare proxy，部署初期可先切成 DNS only，確認 Vercel SSL 正常後再評估是否開啟 proxy。

實際記錄值請以 Vercel Domains 頁面顯示為準。

### 提交 sitemap 到 Google Search Console

1. 到 Google Search Console 新增 Domain property。
2. 依 Google 提供的 TXT record 到 Cloudflare DNS 新增驗證記錄。
3. 等待 DNS 生效後回到 Search Console 點 Verify。
4. 確認正式網站可開啟：

```text
https://xunshengtarot.com
```

5. 確認 sitemap 可讀取：

```text
https://xunshengtarot.com/sitemap.xml
```

6. 確認 robots 可讀取：

```text
https://xunshengtarot.com/robots.txt
```

7. 進入 Sitemaps，提交：

```text
https://xunshengtarot.com/sitemap.xml
```

8. 使用 URL Inspection 檢查重要頁面：

```text
https://xunshengtarot.com/
https://xunshengtarot.com/quiz/love-personality
https://xunshengtarot.com/articles/tarot-beginner-start
https://xunshengtarot.com/tarot-meanings/the-fool
```

### 接 GA4

1. 到 Google Analytics 建立 GA4 property。
2. 建立 Web data stream。
3. 網站網址填入：

```text
https://xunshengtarot.com
```

4. 複製 Measurement ID，格式通常為 `G-XXXXXXXXXX`。
5. 在 Vercel 設定：

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

若此變數為空，網站不會載入 GA script。

部署後可用以下方式確認 GA4 是否收到資料：

- 打開 GA4 Realtime 報表。
- 用無痕視窗開啟正式網站。
- 等待 1 到 2 分鐘，確認 Realtime 出現使用者。
- 若沒有資料，檢查 Vercel 環境變數是否設定在 Production，並重新部署。

### AdSense 通過後替換廣告設定

目前只保留 `AdSlot` placeholder，不接正式 AdSense script。

申請前請確認：

- `/about`、`/contact`、`/privacy-policy`、`/terms`、`/disclaimer` 可正常瀏覽。
- 文章內容已人工校稿，避免過度模板化。
- 圖片與商標素材有合法使用權。
- 網站沒有空白頁、假功能或施工中頁。
- 心理測驗沒有醫療診斷語氣。

AdSense 通過後再設定：

```bash
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
```

正式接入前，請先更新隱私權政策中的第三方廣告與 Cookie 說明，並確認廣告不遮擋主要內容。

不要把廣告放在以下位置：

- 彈窗或遮罩。
- 容易誤點的導覽按鈕旁。
- 測驗選項中間。
- 看起來像內容按鈕的位置。
- 會造成手機版內容跳動的位置。

## 上線後文件

- AdSense 準備清單：`docs/adsense-readiness-checklist.md`
- 上線後觀察清單：`docs/post-launch-monitoring.md`
- 社群導流計畫：`docs/social-launch-plan.md`
