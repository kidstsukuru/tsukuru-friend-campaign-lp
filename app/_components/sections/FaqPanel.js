import { faqs } from "../../_constants/campaignData";

export default function FaqPanel() {
  return (
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
  );
}
