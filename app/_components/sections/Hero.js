import CampaignPeriod from "../ui/CampaignPeriod";

export default function Hero() {
  return (
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
  );
}
