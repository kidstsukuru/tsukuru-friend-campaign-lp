import CopySiteLinkButton from "./CopySiteLinkButton";

const CAMPAIGN_SITE_URL = "https://tsukuru-friend-campaign-lp.vercel.app/";
const TRIAL_GAME_YOUTUBE_URL = "";

const faqs = [
  {
    q: "兄弟を紹介しても対象になりますか？",
    a: "はい、ご兄弟の紹介もキャンペーンの対象となります！"
  },
  {
    q: "以前ツクルに通っていたのですが、再入会でもキャンペーンの対象になりますか？",
    a: "はい！過去に当スクールに通われていた方の再入会も、今回のキャンペーン（1ヶ月無料体験・入会金0円特典）の対象となります。ぜひまた一緒にプログラミングを楽しみましょう！"
  },
  {
    q: "パソコン初心者でも大丈夫ですか？",
    a: "大丈夫です。操作から講師が丁寧にサポートし、お子様のペースで進めます。"
  },
  {
    q: "体験授業の持ち物はありますか？",
    a: "機材はスクールで用意します。手ぶらでお越しください。"
  },
  {
    q: "体験最終日の発表会は親の参加は必須ですか？",
    a: "お子様の成長を直接見ていただきたいため、原則ご参加をお願いしております。2回目の体験授業の終了30分前からのご参加をお願いいたします。"
  },
  {
    q: "体験後、必ず入会が必要ですか？",
    a: "いいえ。無理な勧誘はありません。ご家庭でゆっくりご検討ください。"
  },
  {
    q: "入会後の最低継続期間などの縛りはありますか？",
    a: "ありません。体験後、納得いただいてからご判断ください。"
  }
];

const referrerSteps = [
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

const steps = [
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
      href: "https://lin.ee/sxHqCyh",
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
    alt: "希望日時を選ぶイメージ",
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

function PhoneMockup({ children, className = "" }) {
  return (
    <div className={`step-phone ${className}`.trim()}>
      <div className="phone-frame">
        <span className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}

function StepIllustration({ type, step }) {
  if (type === "share") {
    return (
      <div className="step-illustration step-illustration-single">
        <img
          className="step-illustration-image"
          src="/assets/step-referrer-share-link.png"
          alt={step.alt ?? "URLを友達に送るイメージ"}
        />
      </div>
    );
  }

  if (type === "reward") {
    return (
      <div className="step-illustration step-illustration-single">
        <img
          className="step-illustration-image"
          src="/assets/step-referrer-reward.png"
          alt={step.alt ?? "1ヶ月分の月謝無料"}
        />
      </div>
    );
  }

  if (type === "line-add") {
    return (
      <div className="step-illustration step-illustration-single">
        <img
          className="step-illustration-image"
          src="/assets/step-referee-line-message.png"
          alt={step.alt ?? "公式LINE友だち追加画面"}
        />
      </div>
    );
  }

  if (type === "form") {
    return (
      <div className="step-illustration step-illustration-single">
        <img
          className="step-illustration-image"
          src="/assets/step-referee-select-date.png"
          alt={step.alt ?? "希望日時を選ぶイメージ"}
        />
      </div>
    );
  }

  if (type === "confirm") {
    return (
      <div className="step-illustration step-illustration-single">
        <img
          className="step-illustration-image"
          src="/assets/step-referee-school-reply.png"
          alt={step.alt}
        />
      </div>
    );
  }

  if (type === "trial") {
    return (
      <div className="step-illustration step-illustration-single">
        <img
          className="step-illustration-image"
          src="/assets/step-referee-trial-day.png"
          alt={step.alt ?? "体験当日のレッスン風景"}
        />
      </div>
    );
  }

  return null;
}

function StepCard({ step, variant }) {
  return (
    <article className="step-card">
      <div className="step-ribbon">STEP {step.number}</div>
      <div className="step-card-body">
        <p className="step-desc">{step.description}</p>
        <StepIllustration type={step.illustration} step={step} />
        {step.note ? <p className="step-note">{step.note}</p> : null}
        {step.cta ? (
          step.cta.type === "line" ? (
            <div className="step-line-cta">
              <p className="step-line-cta-hint">
                <span className="step-line-cta-arrow" aria-hidden="true" />
                {step.cta.hint}
              </p>
              <a
                className="step-line-cta-link"
                href={step.cta.href}
                target={step.cta.external ? "_blank" : undefined}
                rel={step.cta.external ? "noopener noreferrer" : undefined}
                aria-label="LINE友だち追加"
              >
                <img src="/assets/line-add-friend-button.png" alt="LINE友だち追加" />
              </a>
            </div>
          ) : step.cta.type === "copy-link" ? (
            <CopySiteLinkButton url={step.cta.url} />
          ) : (
            <a
              className={`step-cta step-cta-${variant}`}
              href={step.cta.href}
              target={step.cta.external ? "_blank" : undefined}
              rel={step.cta.external ? "noopener noreferrer" : undefined}
            >
              {step.cta.label}
              <span className="step-cta-chevron" aria-hidden="true" />
            </a>
          )
        ) : null}
      </div>
    </article>
  );
}

function CampaignPeriod({ variant = "box" }) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`campaign-period${isCompact ? " campaign-period-compact" : " campaign-period-box"}`}
      aria-label={isCompact ? "キャンペーン期間 2026年6月1日から7月31日まで" : undefined}
      aria-hidden={isCompact ? undefined : true}
    >
      <span>キャンペーン期間</span>
      <strong>2026年6月1日〜7月31日</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <article className="lp-canvas" aria-label="プログラミングスクールツクル 夏の友達紹介キャンペーンLP">
        <section className="hero">
          <img className="logo" src="/assets/tsukuru-logo.png" alt="TSUKURU" />
          <div className="hero-visual">
            <img
              className="hero-photo"
              src="/assets/hero-photo.png"
              alt="プログラミング教室で楽しく学ぶお子様たち"
            />
            <div className="hero-photo-wrap" aria-hidden="true" />
            <div className="hero-title-band">
              <h1 className="hero-title-mobile">
                <img
                  className="hero-title-image"
                  src="/assets/hero-title.png"
                  alt="お友達と一緒に楽しく学ぼう！ 夏の友達紹介キャンペーン"
                />
              </h1>
            </div>
          </div>
          <p className="offer-summary">
            <span className="offer-summary-badge">紹介特典</span>
            紹介した人・紹介された人、どちらもうれしい特典がもらえる！
          </p>
          <div className="offer-row">
            <div className="offer-card offer-card-referrer">
              <div className="offer-card-head">紹介した人</div>
              <div className="offer-card-body">
                <p className="offer-lead">お友達が入会で</p>
                <div className="offer-value-row">
                  <span className="offer-amount">1ヶ月</span>
                  <span className="offer-unit">月謝無料</span>
                </div>
              </div>
            </div>
            <div className="offer-card offer-card-referee">
              <div className="offer-card-head">紹介された人</div>
              <div className="offer-card-body offer-card-body-stacked">
                <div className="offer-perk">
                  <p className="offer-lead">2回の授業体験が</p>
                  <div className="offer-value-row">
                    <span className="offer-amount offer-amount-sm">完全</span>
                    <span className="offer-unit offer-unit-sm">無料!</span>
                  </div>
                </div>
                <span className="offer-perk-divider" aria-hidden="true">
                  ＋
                </span>
                <div className="offer-perk">
                  <p className="offer-lead">入会後</p>
                  <div className="offer-value-row">
                    <span className="offer-amount offer-amount-sm">1ヶ月</span>
                    <span className="offer-unit offer-unit-sm">月謝無料</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CampaignPeriod />
        </section>

        <section className="benefits section-card">
          <h2 className="benefits-heading">紹介特典</h2>
          <p className="benefits-lead">
            紹介した人・紹介された人、それぞれにうれしい特典がもらえます。
          </p>
          <ul className="benefits-steps">
            <li className="benefits-step benefits-step-referrer">
              <strong>紹介した人</strong>
              このサイトのURLを紹介したい方に送り、お友達が入会すると特典がもらえます。
            </li>
            <li className="benefits-step benefits-step-referee">
              <strong>紹介された人</strong>
              LINE友だち追加後、体験の申込・受付を行い、無料体験授業を2回受けます。
            </li>
          </ul>
          <div className="benefit-grid">
            <article className="benefit-card benefit-card-referrer">
              <div className="benefit-card-head">紹介した人</div>
              <div className="benefit-card-body">
                <p className="offer-lead">お友達が入会で</p>
                <div className="offer-value-row">
                  <span className="offer-amount">1ヶ月</span>
                  <span className="offer-unit">月謝無料</span>
                </div>
              </div>
              <a className="benefit-detail-btn benefit-detail-btn-referrer" href="#referrer-steps">
                詳細
                <span className="benefit-detail-chevron" aria-hidden="true" />
              </a>
            </article>
            <article className="benefit-card benefit-card-referee">
              <div className="benefit-card-head">紹介された人</div>
              <div className="benefit-card-body offer-card-body-stacked">
                <div className="offer-perk">
                  <p className="offer-lead">2回の授業体験が</p>
                  <div className="offer-value-row">
                    <span className="offer-amount offer-amount-sm">完全</span>
                    <span className="offer-unit offer-unit-sm">無料!</span>
                  </div>
                </div>
                <span className="offer-perk-divider" aria-hidden="true">
                  ＋
                </span>
                <div className="offer-perk">
                  <p className="offer-lead">入会後</p>
                  <div className="offer-value-row">
                    <span className="offer-amount offer-amount-sm">1ヶ月</span>
                    <span className="offer-unit offer-unit-sm">月謝無料</span>
                  </div>
                </div>
              </div>
              <a className="benefit-detail-btn benefit-detail-btn-referee" href="#referee-steps">
                詳細
                <span className="benefit-detail-chevron" aria-hidden="true" />
              </a>
            </article>
          </div>
          <a className="line-cta-shell" href="https://lin.ee/sxHqCyh" aria-label="LINE友だち追加">
            <img src="/assets/line-add-friend-button.png" alt="LINE友だち追加" />
          </a>
        </section>

        <section className="steps-panel steps-panel-referrer" id="referrer-steps">
          <h2 className="steps-panel-head">お友達を紹介する流れ</h2>
          <div className="step-list">
            {referrerSteps.map((step) => (
              <StepCard step={step} variant="referrer" key={step.number} />
            ))}
          </div>
        </section>

        <section className="steps-panel steps-panel-referee" id="referee-steps">
          <h2 className="steps-panel-head steps-panel-head-long">
            友達に紹介してもらって
            <br />
            無料体験を受けるまでの流れ
          </h2>
          <div className="step-list">
            {steps.map((step) => (
              <StepCard step={step} variant="referee" key={step.number} />
            ))}
          </div>
        </section>

        <section className="trial section-card referee-card">
          <h2 className="pink-ribbon">2回の体験授業の流れ</h2>

          <div className="trial-game">
            <h3 className="trial-game-heading">体験で作るゲーム</h3>
            <img
              className="trial-game-title-banner"
              src="/assets/trial-section-title.png"
              alt="Lv.1 飛んでくる矢をよけろ！"
            />
            <p className="trial-game-lead">
              キャラクター<strong>「クロスケ」</strong>を左右に動かし、上から飛んでくる矢をよけるアクションゲームです。
            </p>
            {TRIAL_GAME_YOUTUBE_URL ? (
              <a
                className="trial-game-video-link"
                href={TRIAL_GAME_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                ゲームプレイ動画を見る
                <span className="trial-game-video-chevron" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <p className="trial-section-bridge">2回の体験授業の流れ</p>

          <div className="trial-grid">
            <div className="trial-step">
              <div className="trial-title">
                <span>1回目</span>
                <strong>スクラッチでゲーム制作</strong>
              </div>
              <p className="trial-step-desc">
                ゲームの<strong>土台</strong>となるプログラムを作ります。
              </p>
              <div className="lesson-images">
                <img src="/assets/trial-lesson-1.png" alt="スクラッチを学ぶ生徒" />
                <img src="/assets/trial-clear-screen.png" alt="Scratchのゲーム画面" />
              </div>
            </div>
            <div className="trial-arrow" aria-hidden="true">
              <span className="trial-arrow-badge" />
            </div>
            <div className="trial-step">
              <div className="trial-title">
                <span>2回目</span>
                <strong>ゲームをアレンジして完成！</strong>
              </div>
              <p className="trial-step-desc">
                1回目のゲームを<strong>アレンジ</strong>して、自分だけの作品に仕上げます。
              </p>
              <div className="lesson-images">
                <img src="/assets/trial-lesson-2.png" alt="ゲームを改良する生徒" />
                <img src="/assets/trial-scratch-screen.png" alt="完成したゲーム画面" />
              </div>
            </div>
          </div>
          <div className="trial-finale">
            <p className="trial-finale-bridge">2回目の最後に</p>
            <div className="presentation-block">
              <img src="/assets/trial-presentation.png" alt="作品を発表する生徒と講師" />
              <div className="presentation-copy">
                <h2>作品発表</h2>
                <p className="presentation-body">
                  アレンジしたゲームを発表します。保護者の方もご覧いただき、お子様の成長と楽しさを感じられます。
                </p>
              </div>
            </div>
            <details className="trial-intro-panel">
              <summary className="trial-intro-summary">
                <span className="trial-intro-summary-text">プログラミングが初めての方へ</span>
                <span className="trial-intro-chevron" aria-hidden="true" />
              </summary>
              <div className="trial-intro-body">
                <p className="trial-intro-lead">
                  体験授業では、Scratch（スクラッチ）というソフトで<strong>ゲーム制作</strong>
                  に挑戦します。
                </p>
                <div className="trial-intro-card">
                  <span className="trial-intro-icon scratch-intro-icon-blocks" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  <div className="trial-intro-copy">
                    <strong>Scratch（スクラッチ）とは？</strong>
                    <p>
                      ブロックを並べてプログラムを作る、子ども向けのソフトです。難しいコードを書かず、
                      <strong>パズルのように組み立てて</strong>ゲームやアニメーションが作れます。
                    </p>
                  </div>
                </div>
              </div>
            </details>
            <div className="trial-finale-cta-zone">
              <CampaignPeriod variant="compact" />
              <div className="trial-line-cta">
                <p className="trial-line-cta-lead">
                  <span className="trial-line-cta-arrow" aria-hidden="true" />
                  無料体験の申込はLINEから！
                </p>
                <a
                  className="trial-line-cta-button"
                  href="https://lin.ee/sxHqCyh"
                  aria-label="LINE友だち追加して無料体験を申し込む"
                >
                  <img src="/assets/line-add-friend-button.png" alt="LINE友だち追加" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-panel">
          <h2>よくある質問</h2>
          <p className="faq-subtitle">（夏の友だち紹介キャンペーン）</p>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary className="faq-question">
                  <span className="faq-q-mark">Q</span>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="terms-panel" aria-label="キャンペーン注意事項・規約">
          <details className="terms-item">
            <summary className="terms-summary">
              <span className="terms-summary-text">キャンペーン注意事項・規約</span>
              <span className="terms-chevron" aria-hidden="true" />
            </summary>
            <div className="terms-body">
              <h3 className="terms-heading">キャンペーン期間</h3>
              <p>
                2026年6月1日〜 2026年7月31日 までのお申し込み分が対象となります。
              </p>

              <h3 className="terms-heading">特典の適用条件について</h3>
              <p>
                ご紹介者様（在籍生徒）への特典（月謝無料）は、ご紹介いただいたお友達が「1ヶ月の無料体験」を終了し、【正式に入会された場合】に適用となります。体験のみで終了した場合は適用されませんのでご了承ください。
              </p>
              <p>
                月謝の無料適用は、お友達の入会が確定した翌月（または翌々月）の月謝分に充当させていただきます。
              </p>
              <p>
                ご紹介人数に上限はありません。（例：2名入会で2ヶ月無料、3名入会で3ヶ月無料となります）
              </p>
              <p>
                ご兄弟でのご入会や、過去に当スクールに通われていた方の「再入会」も本キャンペーンの対象となります。
              </p>

              <h3 className="terms-heading">注意事項</h3>
              <p>
                ご希望の曜日・時間帯のクラスが満席の場合、別の日時やクラスをご案内させていただく可能性がございます。あらかじめご了承ください。
              </p>
              <p>
                本キャンペーンは、予告なく期間の変更、または終了・内容の改定を行う場合がございます。あらかじめご了承ください。
              </p>

              <h3 className="terms-heading">個人情報の取り扱いについて</h3>
              <p>
                お預かりした個人情報（LINEのアカウント情報、お名前等）は、本キャンペーンの特典付与、無料体験の案内、および当スクールからのご連絡にのみ使用し、適切に管理いたします。
              </p>
            </div>
          </details>
        </section>

        <footer className="lp-footer">
          <div className="lp-footer-inner">
            <img
              className="lp-footer-logo"
              src="/assets/tsukuru-logo.png"
              alt="TSUKURU"
            />
            <div className="lp-footer-brand">
              <span className="lp-footer-label">プログラミングスクール</span>
              <strong className="lp-footer-name">ツクル</strong>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
