import { LINE_ADD_FRIEND_URL } from "../../_constants/campaignData";

export default function LineCta({
  className = "",
  lead = "紹介された方は、こちらから友だち追加",
  ariaLabel = "紹介された方はLINE友だち追加から無料体験を申し込む"
}) {
  return (
    <div className={`trial-line-cta${className ? ` ${className}` : ""}`.trim()}>
      <p className="trial-line-cta-lead">
        <span className="trial-line-cta-arrow" aria-hidden="true" />
        {lead}
      </p>
      <a className="trial-line-cta-button" href={LINE_ADD_FRIEND_URL} aria-label={ariaLabel}>
        <img src="/assets/line-add-friend-button.png" alt="LINE友だち追加" />
      </a>
    </div>
  );
}
