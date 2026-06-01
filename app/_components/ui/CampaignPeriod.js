import { CAMPAIGN_PERIOD } from "../../_constants/campaignData";

export default function CampaignPeriod({ variant = "box" }) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`campaign-period${isCompact ? " campaign-period-compact" : " campaign-period-box"}`}
      aria-label={isCompact ? CAMPAIGN_PERIOD.ariaLabel : undefined}
      aria-hidden={isCompact ? undefined : true}
    >
      <span>{CAMPAIGN_PERIOD.label}</span>
      <strong>{CAMPAIGN_PERIOD.range}</strong>
    </div>
  );
}
