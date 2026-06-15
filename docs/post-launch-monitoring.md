# Post Launch Monitoring

正式上線後，建議用固定節奏觀察索引、流量與錯誤狀態。以下清單適用於 `https://xunshengtarot.com`。

## 上線後第 1 天檢查

- 確認正式首頁可開啟。
- 確認 `/sitemap.xml` 可讀取。
- 確認 `/robots.txt` 可讀取，且允許 Google 爬取。
- 在 Google Search Console 驗證網域。
- 在 Search Console 提交 `https://xunshengtarot.com/sitemap.xml`。
- 使用 URL Inspection 檢查：
  - 首頁 `/`
  - `/quiz/love-personality`
  - `/articles/tarot-beginner-start`
  - `/tarot-meanings/the-fool`
- 確認 GA4 Realtime 是否收到至少一筆瀏覽資料。
- 檢查 Vercel Analytics 或 logs 是否有 404。

## 上線後第 7 天檢查

- Search Console 是否已成功讀取 sitemap。
- Coverage / Pages 報表是否出現已索引頁面。
- 是否有 404、重新導向錯誤或 blocked by robots。
- GA4 是否有資料，確認主要流量來源。
- 檢查哪些測驗被點擊：
  - 戀愛人格
  - 感情卡點
  - 守護塔羅牌
  - 內在小孩需求
  - 守護水晶
- 檢查行動裝置可用性與 Core Web Vitals 初步狀態。

## 上線後第 14 天檢查

- 比對 Search Console 查詢字詞與曝光頁面。
- 找出有曝光但 CTR 低的頁面，優先調整 title / description。
- 檢查是否有重複 title 或 meta description。
- 檢查搜尋頁、標籤頁、分類頁是否有流量。
- 檢查測驗結果頁互動是否正常，延伸閱讀是否被點擊。
- 人工補強前 5 個有曝光的文章內容。

## 上線後第 30 天檢查

- 匯總前 30 天流量最高頁面。
- 匯總前 30 天點擊最多測驗。
- 檢查 Google 是否已索引主要文章、測驗、牌義頁。
- 檢查是否需要新增內部連結或延伸閱讀。
- 評估是否已具備 AdSense 申請條件。
- 整理下一批文章主題：
  - 高曝光低點擊主題
  - 高停留時間主題
  - 社群互動高的測驗主題
