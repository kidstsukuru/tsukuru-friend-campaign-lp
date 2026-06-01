import CopySiteLinkButton from "./CopySiteLinkButton";

function StepIllustration({ type, step }) {
  const illustrations = {
    share: {
      src: "/assets/step-referrer-share-link.png",
      alt: step.alt ?? "URLを友達に送るイメージ"
    },
    reward: {
      src: "/assets/step-referrer-reward.png",
      alt: step.alt ?? "1ヶ月分の月謝無料"
    },
    "line-add": {
      src: "/assets/step-referee-line-message.png",
      alt: step.alt ?? "公式LINE友だち追加画面"
    },
    form: {
      src: "/assets/step-referee-select-date.png",
      alt: step.alt ?? "希望日時を選ぶイメージ"
    },
    confirm: {
      src: "/assets/step-referee-school-reply.png",
      alt: step.alt
    },
    trial: {
      src: "/assets/step-referee-trial-day.png",
      alt: step.alt ?? "体験当日のレッスン風景"
    }
  };

  const illustration = illustrations[type];
  if (!illustration) {
    return null;
  }

  return (
    <div className="step-illustration step-illustration-single">
      <img className="step-illustration-image" src={illustration.src} alt={illustration.alt} />
    </div>
  );
}

export default function StepCard({ step, variant }) {
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
