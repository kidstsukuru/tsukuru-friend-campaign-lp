# LP ディレクトリ構成

プログラミングスクール「ツクル」の **夏の友達紹介キャンペーン LP**（`tsukuru-friend-campaign-lp`）のディレクトリ構成と各ファイルの役割をまとめたドキュメントです。

---

## 概要

| 項目 | 内容 |
|------|------|
| プロジェクト名 | `tsukuru-friend-campaign-lp` |
| フレームワーク | Next.js 16（App Router） |
| UI | React 19 |
| スタイル | `globals.css`（import ハブ）+ `app/_styles/` 分割 CSS |
| デプロイ先 | Vercel（`vercel.json` 設定あり） |
| 本番 URL | https://tsukuru-friend-campaign-lp.vercel.app/ |
| Node.js | >= 20 |

---

## ディレクトリツリー

```
友達紹介キャンペーン_最終盤/
├── app/
│   ├── _components/              # ルーティングに含まれないコンポーネント
│   │   ├── ui/                   # 共通 UI パーツ
│   │   │   ├── CopySiteLinkButton.js  # Client: リンクコピー
│   │   │   ├── CampaignPeriod.js      # キャンペーン期間表示
│   │   │   ├── LineCta.js             # LINE 友だち追加 CTA
│   │   │   └── StepCard.js            # STEP カード + イラスト
│   │   └── sections/             # LP 各セクション
│   │       ├── Hero.js
│   │       ├── Benefits.js
│   │       ├── StepsPanel.js
│   │       ├── TrialSection.js
│   │       ├── FaqPanel.js
│   │       ├── TermsPanel.js
│   │       └── SiteFooter.js
│   │
│   ├── _constants/               # テキストデータ・定数
│   │   ├── campaignData.js       # URL, FAQ, 規約, キャンペーン期間
│   │   └── stepsData.js          # 紹介者 / 被紹介者 STEP 定義（JSX 含む）
│   │
│   ├── _styles/                  # セクション別 CSS（globals から import）
│   │   ├── base.css              # リセット, CSS 変数, ページ骨組み
│   │   ├── hero.css
│   │   ├── shared.css            # 特典カード, キャンペーン期間, 共通 UI
│   │   ├── benefits.css
│   │   ├── trial.css
│   │   ├── steps.css
│   │   ├── faq-terms-footer.css
│   │   └── responsive.css        # メディアクエリ一式
│   │
│   ├── layout.js                 # ルートレイアウト・フォント・GA4
│   ├── page.js                   # セクションを並べる親コンポーネント
│   └── globals.css               # CSS import ハブ（8行）
│
├── public/
│   └── assets/                   # 画像アセット一式（16 PNG）
│
├── package.json
├── package-lock.json
├── vercel.json
├── .gitignore
├── .env.local                    # ローカル環境変数（Git 管理外）
└── DIRECTORY.md                  # 本ドキュメント
```

### Git 管理外・開発用（参考）

```
node_modules/          # npm 依存パッケージ
.next/                 # Next.js ビルドキャッシュ
out/                   # 静的エクスポート出力
.vercel/               # Vercel CLI 設定
.env*.local            # 環境変数
.venv-img/             # 画像処理用 Python 仮想環境（ローカルのみ）
```

---

## 各ファイルの詳細

### `app/page.js`

LP のエントリポイント。各セクションコンポーネントを import して並べるだけの薄いファイル（約 45 行）。

```jsx
<Hero />
<Benefits />
<StepsPanel ... />  // 紹介者
<StepsPanel ... />  // 被紹介者
<TrialSection />
<FaqPanel />
<TermsPanel />
<SiteFooter />
```

### `app/_constants/`

| ファイル | 内容 |
|----------|------|
| `campaignData.js` | `CAMPAIGN_SITE_URL`, `LINE_ADD_FRIEND_URL`, `CAMPAIGN_PERIOD`, `faqs`, `termsSections` |
| `stepsData.js` | `referrerSteps`（2 STEP）, `refereeSteps`（4 STEP）。説明文に JSX を含む |

**文言修正の起点:** FAQ・規約・URL は `campaignData.js`、STEP 説明は `stepsData.js`。

### `app/_components/ui/`

| コンポーネント | 種別 | 用途 |
|----------------|------|------|
| `CopySiteLinkButton` | Client | 紹介者 STEP1 の URL コピー |
| `CampaignPeriod` | Server | キャンペーン期間バッジ（通常 / compact） |
| `LineCta` | Server | LINE 友だち追加 CTA ブロック |
| `StepCard` | Server | STEP カード（イラスト・CTA 込み） |

### `app/_components/sections/`

| コンポーネント | 対応セクション |
|----------------|----------------|
| `Hero.js` | ヒーロー + 特典サマリー |
| `Benefits.js` | 紹介特典詳細 + LINE CTA |
| `StepsPanel.js` | 紹介者 / 被紹介者の STEP 一覧（props で切替） |
| `TrialSection.js` | 2 回体験の流れ・作品発表・Scratch 説明・入会特典 |
| `FaqPanel.js` | よくある質問 |
| `TermsPanel.js` | キャンペーン注意事項・規約 |
| `SiteFooter.js` | フッター |

### `app/_styles/`

| ファイル | 主なスタイル対象 | 行数目安 |
|----------|------------------|----------|
| `base.css` | `:root`, reset, `.page-shell`, `.lp-canvas` | 66 |
| `hero.css` | `.hero`, `.logo`, `.hero-visual` 等 | 153 |
| `shared.css` | `.offer-*`, `.campaign-period`, `.section-card` 等 | 297 |
| `benefits.css` | `.benefits`, `.benefit-*` 等 | 199 |
| `trial.css` | `.trial-*`, `.presentation-*`, `.trial-line-cta` 等 | 682 |
| `steps.css` | `.steps-panel`, `.step-*`, `.step-copy-link-*` 等 | 714 |
| `faq-terms-footer.css` | `.faq-*`, `.terms-*`, `.lp-footer` 等 | 252 |
| `responsive.css` | `@media` ブロック一式 | 413 |

`globals.css` は上記を `@import` するだけのハブファイル。

### `app/layout.js`

- Google Fonts（M PLUS Rounded 1c, Dela Gothic One）
- メタデータ・viewport
- Google Analytics 4（`NEXT_PUBLIC_GA_MEASUREMENT_ID` 設定時）

### `public/assets/`

| ファイル名 | 使用箇所 |
|------------|----------|
| `tsukuru-logo.png` | ヒーロー, フッター |
| `hero-photo.png` | ヒーロービジュアル |
| `hero-title.png` | キャンペーンタイトル |
| `line-add-friend-button.png` | LINE CTA（複数箇所） |
| `step-referrer-*.png` | 紹介者 STEP イラスト（2 枚） |
| `step-referee-*.png` | 被紹介者 STEP イラスト（4 枚） |
| `trial-*.png` | 体験授業セクション（7 枚） |

---

## 環境変数

| 変数名 | 必須 | 説明 |
|--------|------|------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | 任意 | GA4 測定 ID |

---

## 開発・ビルド

```bash
npm run dev      # 開発サーバー
npm run build    # 本番ビルド
npm run start    # 本番サーバー
```

---

## アーキテクチャの方針

1. **シングルページ LP** — ルート `/` のみ
2. **コロケーション** — `_components`, `_constants`, `_styles` を `app/` 内に集約（`_` プレフィックスでルーティング除外）
3. **データと UI の分離** — 文言・定数は `_constants/`、見た目は `_components/sections/`
4. **CSS 分割** — セクション単位で `_styles/` に分割、`globals.css` は import ハブ
5. **Client Component 最小化** — リンクコピーのみ Client 化

### 運用時の修正ガイド

| 変更内容 | 編集先 |
|----------|--------|
| FAQ 文言 | `_constants/campaignData.js` |
| 規約・注意事項 | `_constants/campaignData.js` |
| STEP 説明文 | `_constants/stepsData.js` |
| セクション構成・レイアウト | `_components/sections/*.js` |
| デザイン微調整 | `_styles/` 内の該当 CSS |
| キャンペーン期間 | `_constants/campaignData.js` → `CAMPAIGN_PERIOD` |

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-06-01 | 初版作成 |
| 2026-06-01 | コンポーネント分割・CSS 分割後の構成に更新 |
