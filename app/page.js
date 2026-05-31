import CopySiteLinkButton from "./CopySiteLinkButton";
import StickyLineCta from "./StickyLineCta";

const CAMPAIGN_SITE_URL = "https://tsukuru-friend-campaign-lp.vercel.app/";

const faqs = [
  {
    q: "パソコン初心者でも大丈夫ですか？",
    a: "大丈夫です。操作から講師が丁寧にサポートし、お子様のペースで進めます。"
  },
  {
    q: "最低継続期間などの縛りはありますか？",
    a: "ありません。体験後、納得いただいてからご判断ください。"
  },
  {
    q: "体験後、必ず入会が必要ですか？",
    a: "いいえ。無理な勧誘はありません。ご家庭でゆっくりご検討ください。"
  },
  {
    q: "体験授業の持ち物はありますか？",
    a: "機材はスクールで用意します。手ぶらでお越しください。"
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
    alt: "公式LINE友だち追加画面",
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
    alt: "紹介した人の生徒名と希望日時の入力画面"
  },
  {
    number: "3",
    description: (
      <>
        スクールから<strong>体験日時の確定連絡</strong>が届きます
      </>
    ),
    illustration: "confirm",
    alt: "体験日時確定の連絡画面",
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
    alt: "体験授業を受ける生徒"
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
      <div className="step-illustration step-illustration-dual" role="img" aria-label="URLを友達に送るイメージ">
        <PhoneMockup className="phone-browser">
          <span className="browser-bar" />
          <span className="browser-line l1" />
          <span className="browser-line l2" />
          <span className="browser-highlight" />
        </PhoneMockup>
        <span className="step-illustration-arrow" aria-hidden="true">
          ›
        </span>
        <PhoneMockup className="phone-chat">
          <span className="chat-bubble" />
          <span className="chat-url-line" />
        </PhoneMockup>
      </div>
    );
  }

  if (type === "reward") {
    return (
      <div className="step-illustration step-illustration-single" role="img" aria-label="1ヶ月分の月謝無料">
        <div className="step-reward-badge">
          <span className="step-reward-label">1ヶ月</span>
          <span className="step-reward-value">月謝無料</span>
        </div>
      </div>
    );
  }

  if (type === "line-add") {
    return (
      <div className="step-illustration step-illustration-dual" role="img" aria-label={step.alt}>
        <PhoneMockup className="phone-lp">
          <span className="lp-logo-dot" />
          <span className="lp-line-btn" />
        </PhoneMockup>
        <span className="step-illustration-arrow" aria-hidden="true">
          ›
        </span>
        <PhoneMockup className="phone-line">
          <span className="phone-avatar" />
          <span className="phone-card line-card" />
          <span className="phone-bottom-bar" />
        </PhoneMockup>
      </div>
    );
  }

  if (type === "form") {
    return (
      <div className="step-illustration step-illustration-dual" role="img" aria-label={step.alt}>
        <PhoneMockup className="phone-form">
          <span className="phone-label" />
          <span className="form-field f1" />
          <span className="form-field f2" />
          <span className="form-field f3 highlight" />
        </PhoneMockup>
        <span className="step-illustration-arrow" aria-hidden="true">
          ›
        </span>
        <PhoneMockup className="phone-calendar">
          <span className="calendar-header" />
          <span className="calendar-grid" />
        </PhoneMockup>
      </div>
    );
  }

  if (type === "confirm") {
    return (
      <div className="step-illustration step-illustration-single" role="img" aria-label={step.alt}>
        <PhoneMockup className="phone-confirm">
          <span className="message-card" />
          <span className="confirm-line short" />
          <span className="confirm-line" />
          <span className="confirm-check" />
        </PhoneMockup>
      </div>
    );
  }

  if (type === "trial") {
    return (
      <div className="step-illustration step-illustration-photo">
        <img src="/assets/lesson-photo-2.png" alt={step.alt} />
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
                <img src="/assets/line-friend-button-trimmed.png" alt="LINE友だち追加" />
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

export default function Home() {
  return (
    <main className="page-shell">
      <article className="lp-canvas" aria-label="プログラミングスクールツクル 夏の友達紹介キャンペーンLP">
        <section className="hero">
          <img className="logo" src="/assets/tsukuru-logo-transparent.png" alt="TSUKURU" />
          <img className="flags-asset" src="/assets/blue-flags.png" alt="" />
          <img className="yellow-dots-asset" src="/assets/yellow-dot-triangle.png" alt="" />
          <img
            className="hero-title-asset"
            src="/assets/hero-title-graphic.png"
            alt="お友達と一緒に楽しく学ぼう！ プログラミングスクールツクル 夏の友達紹介キャンペーン"
          />
          <h1 className="hero-title-mobile" aria-label="お友達と一緒に楽しく学ぼう！ 夏の友達紹介キャンペーン">
            <span className="mobile-title-small">お友達と一緒に楽しく学ぼう！</span>
            <span className="mobile-title-main">
              <span className="mobile-title-prefix">夏の</span>
              <b>友達紹介</b>
              <span className="mobile-title-suffix">キャンペーン</span>
            </span>
          </h1>
          <img className="hero-photo" src="/assets/hero-photo.png" alt="" />
          <div className="offer-row">
            <div className="offer-card offer-pink">
              <p>2回の授業体験が</p>
              <strong>
                完全<span>無料!</span>
              </strong>
            </div>
            <div className="offer-card offer-blue">
              <p>入会後</p>
              <strong>
                1ヶ月月謝<span>無料!</span>
              </strong>
            </div>
          </div>
          <div className="campaign-period" aria-label="キャンペーン期間 2026年6月1日から7月31日まで">
            <span>キャンペーン期間</span>
            <strong>2026年6月1日〜7月31日</strong>
          </div>
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
                <p className="benefit-copy">
                  お友達が入会で
                  <strong>1ヶ月無料</strong>
                </p>
              </div>
              <a className="benefit-detail-btn benefit-detail-btn-referrer" href="#referrer-steps">
                詳細
                <span className="benefit-detail-chevron" aria-hidden="true" />
              </a>
            </article>
            <article className="benefit-card benefit-card-referee">
              <div className="benefit-card-head">紹介された人</div>
              <div className="benefit-card-body">
                <div className="benefit-item">
                  <span>2回の授業体験が</span>
                  <strong>無料</strong>
                </div>
                <div className="benefit-divider" aria-hidden="true">＋</div>
                <div className="benefit-item">
                  <span>入会後</span>
                  <strong>
                    1ヶ月
                    <br />
                    月謝無料
                  </strong>
                </div>
              </div>
              <a className="benefit-detail-btn benefit-detail-btn-referee" href="#referee-steps">
                詳細
                <span className="benefit-detail-chevron" aria-hidden="true" />
              </a>
            </article>
          </div>
          <a className="line-cta-shell" href="https://lin.ee/sxHqCyh" aria-label="LINE友だち追加">
            <img src="/assets/line-friend-button-trimmed.png" alt="LINE友だち追加" />
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
          <div className="trial-grid">
            <div className="trial-step">
              <div className="trial-title">
                <span>1回目</span>
                <strong>スクラッチでゲーム制作</strong>
              </div>
              <div className="lesson-images">
                <img src="/assets/lesson-photo-1.png" alt="スクラッチを学ぶ生徒" />
                <img src="/assets/scratch-screen.png" alt="Scratchのゲーム画面" />
              </div>
            </div>
            <div className="trial-arrow" aria-hidden="true">
              <span className="trial-arrow-badge" />
            </div>
            <div className="trial-step">
              <div className="trial-title">
                <span>2回目</span>
                <strong>ゲームを改良して完成！</strong>
              </div>
              <div className="lesson-images">
                <img src="/assets/lesson-photo-2.png" alt="ゲームを改良する生徒" />
                <img src="/assets/clear-screen.png" alt="完成したゲーム画面" />
              </div>
            </div>
          </div>
          <div className="trial-finale">
            <p className="trial-finale-bridge">2回目の最後に</p>
            <div className="presentation-block">
              <img src="/assets/presentation-photo.png" alt="作品を発表する生徒と講師" />
              <div className="presentation-copy">
                <h2>作品発表・お披露目会</h2>
                <p className="presentation-body">
                  保護者の方もご覧いただき、お子様の成長と楽しさを感じられます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-panel">
          <h2>よくある質問</h2>
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

        <div className="sticky-line-stop" aria-hidden="true" />
      </article>
      <StickyLineCta />
    </main>
  );
}
