"use client";

import { useState } from "react";

import { CAMPAIGN_SITE_URL } from "../../_constants/campaignData";

export default function CopySiteLinkButton({ url = CAMPAIGN_SITE_URL }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="step-copy-link-cta">
      <p className="step-copy-link-lead">
        <span className="step-copy-link-arrow" aria-hidden="true" />
        コピーしてお友達に送ろう！
      </p>
      <button
        type="button"
        className={`step-copy-link-btn${copied ? " is-copied" : ""}`}
        onClick={handleCopy}
        aria-live="polite"
      >
        {copied ? "コピーしました！" : "このサイトのリンクをコピー"}
      </button>
    </div>
  );
}
