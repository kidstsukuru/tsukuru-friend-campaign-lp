import { CAMPAIGN_SITE_URL, LINE_ADD_FRIEND_URL } from "./campaignData";

export const referrerSteps = [
  {
    number: "1",
    description: (
      <>
        このサイトのURLを、<strong>紹介したいお知り合い・お友達</strong>に送る
      </>
    ),
    illustration: "share",
    alt: "URLを友達に送るイメージ",
    cta: {
      type: "copy-link",
      url: CAMPAIGN_SITE_URL
    }
  },
  {
    number: "2",
    description: (
      <>
        お友達の<strong>入会後</strong>、<strong>1ヶ月分の月謝無料</strong>
      </>
    ),
    illustration: "reward",
    alt: "1ヶ月分の月謝無料特典を受け取るイメージ",
    note: "※特典はお友達の入会が確定したタイミングで適用されます。"
  }
];

export const refereeSteps = [
  {
    number: "1",
    description: (
      <>
        このページから<strong>公式LINE</strong>を友だち追加
      </>
    ),
    illustration: "line-add",
    alt: "LINEの連絡が届くイメージ",
    cta: {
      type: "line",
      href: LINE_ADD_FRIEND_URL,
      hint: "友達追加はこちら",
      external: true
    }
  },
  {
    number: "2",
    description: (
      <>
        <strong>紹介した人の生徒名</strong>と<strong>希望日時</strong>を選択
      </>
    ),
    illustration: "form",
    alt: "希望日時を選ぶイメージ"
  },
  {
    number: "3",
    description: (
      <>
        スクールから<strong>体験日時の確定連絡</strong>が届きます
      </>
    ),
    illustration: "confirm",
    alt: "スクールから体験日時の確定連絡が届くイメージ",
    note: "※日程はスクールからLINEでご連絡します。"
  },
  {
    number: "4",
    description: (
      <>
        <strong>2回の無料体験</strong>スタート
      </>
    ),
    illustration: "trial",
    alt: "体験当日のレッスン風景"
  }
];
