import Benefits from "./_components/sections/Benefits";
import FaqPanel from "./_components/sections/FaqPanel";
import Hero from "./_components/sections/Hero";
import SiteFooter from "./_components/sections/SiteFooter";
import StepsPanel from "./_components/sections/StepsPanel";
import TermsPanel from "./_components/sections/TermsPanel";
import TrialSection from "./_components/sections/TrialSection";
import { referrerSteps, refereeSteps } from "./_constants/stepsData";

export default function Home() {
  return (
    <main className="page-shell">
      <article className="lp-canvas" aria-label="プログラミングスクールツクル 夏の友達紹介キャンペーンLP">
        <Hero />
        <Benefits />
        <StepsPanel
          id="referrer-steps"
          className="steps-panel steps-panel-referrer"
          title="お友達を紹介する流れ"
          steps={referrerSteps}
          variant="referrer"
        />
        <StepsPanel
          id="referee-steps"
          className="steps-panel steps-panel-referee"
          headClassName="steps-panel-head-long"
          title={
            <>
              友達に紹介してもらって
              <br />
              無料体験を受けるまでの流れ
            </>
          }
          steps={refereeSteps}
          variant="referee"
        />
        <TrialSection />
        <FaqPanel />
        <TermsPanel />
        <SiteFooter />
      </article>
    </main>
  );
}
