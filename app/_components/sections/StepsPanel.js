import StepCard from "../ui/StepCard";

export default function StepsPanel({ id, className, headClassName = "", title, steps, variant }) {
  return (
    <section className={className} id={id}>
      <h2 className={`steps-panel-head${headClassName ? ` ${headClassName}` : ""}`.trim()}>{title}</h2>
      <div className="step-list">
        {steps.map((step) => (
          <StepCard step={step} variant={variant} key={step.number} />
        ))}
      </div>
    </section>
  );
}
