import StickyLineCta from "./StickyLineCta";

const faqs = [
  {
    q: "パソコンに全く触ったことがない初心者でも大丈夫ですか？",
    a: "もちろん大丈夫です！プログラミングスクールツクルでは、初めてパソコンに触れるお子様にも安心してご参加いただけるよう、講師がマウスやキーボードの操作から丁寧にサポートいたします。お子様一人ひとりのペースに合わせて進めていきますので、安心してご参加ください。"
  },
  {
    q: "キャンペーンを利用して入会した場合、最低何ヶ月以上続けなければいけないといった「縛り」はありますか？",
    a: "いいえ、ございません。本キャンペーンでは最低継続期間の縛りは一切設けておりません。まずはお子様に体験いただき、納得いただいたうえでご判断いただけます。安心して始めていただけます。"
  },
  {
    q: "体験授業を受けたら、必ず入会しなければいけませんか？",
    a: "いいえ、必ずご入会いただく必要はありません。無理な勧誘は一切ございません。お子様が「楽しい！もっとやりたい！」と感じた場合のみご検討ください。ご家庭でゆっくりご相談いただけます。"
  },
  {
    q: "体験授業に持参するものはありますか？",
    a: "パソコンなど授業で使用する機材はこちらでご用意しております。基本的には手ぶらでご参加いただけます。普段通りの服装でお気軽にお越しください。"
  }
];

const steps = [
  {
    number: "1",
    text: "ページ内導線から\n公式LINEを友だち追加",
    alt: "公式LINEアカウント画面"
  },
  {
    number: "2",
    text: "「紹介された生徒名」\n「希望日時」を送信",
    alt: "希望日時の送信画面"
  },
  {
    number: "3",
    text: "スクールから\n日時調整後、\n確定連絡を受信",
    alt: "日時確定の連絡画面"
  },
  {
    number: "4",
    text: "2回無料体験\nスタート",
    alt: "体験授業を受ける生徒"
  }
];

function StepVisual({ step }) {
  if (step.number === "4") {
    return (
      <div className="step-visual step-photo-visual">
        <img src="/assets/lesson-photo-2.png" alt={step.alt} />
      </div>
    );
  }

  return (
    <div className={`step-visual step-phone-visual phone-${step.number}`} role="img" aria-label={step.alt}>
      <div className="phone-frame">
        <span className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          {step.number === "1" && (
            <>
              <span className="phone-avatar" />
              <span className="phone-card line-card" />
              <span className="phone-bottom-bar" />
            </>
          )}
          {step.number === "2" && (
            <>
              <span className="phone-label" />
              <span className="chat-dot dot-1" />
              <span className="chat-line line-1" />
              <span className="chat-dot dot-2" />
              <span className="chat-line line-2" />
              <span className="chat-dot dot-3" />
              <span className="chat-line line-3" />
              <span className="date-line" />
            </>
          )}
          {step.number === "3" && (
            <>
              <span className="message-card" />
              <span className="confirm-line short" />
              <span className="confirm-line" />
              <span className="confirm-line short" />
              <span className="screen-photo" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <article className="lp-canvas" aria-label="プログラミングスクールツクル 夏の友達紹介キャンペーンLP">
        <section className="hero">
          <img className="logo" src="/assets/tsukurut-logo.png" alt="TSUKURU" />
          <img className="flags-asset" src="/assets/blue-flags.png" alt="" />
          <img className="yellow-dots-asset" src="/assets/yellow-dot-triangle.png" alt="" />
          <img
            className="hero-title-asset"
            src="/assets/hero-title-graphic.png"
            alt="お友達と一緒に楽しく学ぼう！ プログラミングスクールツクル 夏の友達紹介キャンペーン"
          />
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
          <a className="line-cta-shell" href="https://lin.ee/sxHqCyh" aria-label="LINE友だち追加">
            <img src="/assets/line-friend-button-trimmed.png" alt="LINE友だち追加" />
          </a>
        </section>

        <section className="benefits section-card">
          <h2 className="blue-ribbon">
            <span>紹介すると、うれしい特典が</span>
            <span>いっぱい！</span>
          </h2>
          <div className="benefit-grid">
            <div className="benefit-box benefit-friend">
              <p className="pill pink">紹介されるお友達</p>
              <div className="mini-benefit">
                <img className="benefit-icon friend-icon" src="/assets/generated-icon-friend.png" alt="" />
                <small>2回の授業体験が</small>
                <strong>無料</strong>
              </div>
              <div className="plus">＋</div>
              <div className="mini-benefit">
                <img className="benefit-icon gift-icon" src="/assets/generated-icon-gift.png" alt="" />
                <small>入会後</small>
                <strong>1ヶ月<br />月謝無料</strong>
              </div>
            </div>
            <div className="benefit-box benefit-student">
              <p className="pill blue">紹介してくれた生徒</p>
              <img className="benefit-people-icon" src="/assets/generated-icon-student.png" alt="" />
              <div>
                <small>お友達が入会で</small>
                <strong>1ヶ月無料</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="trial section-card green-card">
          <h2 className="green-ribbon">2回の体験授業の流れ</h2>
          <div className="trial-grid">
            <div className="trial-step">
              <div className="trial-title">
                <span>1回目</span>
                <strong>スクラッチで<br />ゲーム制作</strong>
              </div>
              <div className="lesson-images">
                <img src="/assets/lesson-photo-1.png" alt="スクラッチを学ぶ生徒" />
                <img src="/assets/scratch-screen.png" alt="Scratchのゲーム画面" />
              </div>
            </div>
            <div className="trial-arrow" aria-hidden="true">▶</div>
            <div className="trial-step">
              <div className="trial-title">
                <span>2回目</span>
                <strong>ゲームを改良して<br />完成！</strong>
              </div>
              <div className="lesson-images">
                <img src="/assets/lesson-photo-2.png" alt="ゲームを改良する生徒" />
                <img src="/assets/clear-screen.png" alt="完成したゲーム画面" />
              </div>
            </div>
          </div>
        </section>

        <section className="presentation-block">
          <img src="/assets/presentation-photo.png" alt="作品を発表する生徒と講師" />
          <div className="presentation-copy">
            <p>体験最終日（2回目）には</p>
            <h2>作品の発表・お披露目を</h2>
            <p className="bold">行います！</p>
            <p className="body">
              子どもたちが作った作品を、保護者の方にも<br />
              ご覧いただきます。<br />
              成長や楽しさを実際に見て、感じられる<br />
              特別な機会です！
            </p>
          </div>
        </section>

        <section className="steps-panel">
          <h2 className="green-ribbon">カンタン申し込み <span>4</span> ステップ</h2>
          <div className="step-list">
            {steps.map((step) => (
              <div className="step-item" key={step.number}>
                <span className="step-number">{step.number}</span>
                <p>{step.text}</p>
                <StepVisual step={step} />
              </div>
            ))}
          </div>
        </section>

        <section className="faq-panel">
          <h2>よくある質問</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <p className="question">
                  <span>Q.</span>
                  <strong>{faq.q}</strong>
                </p>
                <p className="answer">
                  <span>A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="sticky-line-stop" aria-hidden="true" />
      </article>
      <StickyLineCta />
    </main>
  );
}
