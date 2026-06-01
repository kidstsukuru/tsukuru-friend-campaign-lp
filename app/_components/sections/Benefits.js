import LineCta from "../ui/LineCta";

export default function Benefits() {
  return (
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
      <LineCta className="benefits-line-cta" />
    </section>
  );
}
