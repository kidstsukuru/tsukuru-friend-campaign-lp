import { termsSections } from "../../_constants/campaignData";

export default function TermsPanel() {
  return (
    <section className="terms-panel" aria-label="キャンペーン注意事項・規約">
      <details className="terms-item">
        <summary className="terms-summary">
          <span className="terms-summary-text">キャンペーン注意事項・規約</span>
          <span className="terms-chevron" aria-hidden="true" />
        </summary>
        <div className="terms-body">
          {termsSections.map((section) => (
            <div key={section.heading}>
              <h3 className="terms-heading">{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
