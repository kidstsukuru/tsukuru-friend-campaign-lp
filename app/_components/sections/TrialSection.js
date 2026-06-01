import { TRIAL_GAME_YOUTUBE_URL } from "../../_constants/campaignData";
import CampaignPeriod from "../ui/CampaignPeriod";
import LineCta from "../ui/LineCta";

export default function TrialSection() {
  return (
    <section className="trial section-card referee-card">
      <h2 className="pink-ribbon">2回の体験授業の流れ</h2>

      <div className="trial-game">
        <h3 className="trial-game-heading">体験で作るゲーム</h3>
        <img
          className="trial-game-title-banner"
          src="/assets/trial-section-title.png"
          alt="Lv.1 飛んでくる矢をよけろ！"
        />
        <p className="trial-game-lead">
          キャラクター<strong>「クロスケ」</strong>を左右に動かし、上から飛んでくる矢をよけるアクションゲームです。
        </p>
        {TRIAL_GAME_YOUTUBE_URL ? (
          <a
            className="trial-game-video-link"
            href={TRIAL_GAME_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            ゲームプレイ動画を見る
            <span className="trial-game-video-chevron" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <p className="trial-section-bridge">2回の体験授業の流れ</p>

      <div className="trial-grid">
        <div className="trial-step">
          <div className="trial-title">
            <span>1回目</span>
            <strong>スクラッチでゲーム制作</strong>
          </div>
          <p className="trial-step-desc">
            ゲームの<strong>土台</strong>となるプログラムを作ります。
          </p>
          <div className="lesson-images">
            <img src="/assets/trial-lesson-1.png" alt="スクラッチを学ぶ生徒" />
            <img src="/assets/trial-clear-screen.png" alt="Scratchのゲーム画面" />
          </div>
        </div>
        <div className="trial-arrow" aria-hidden="true">
          <span className="trial-arrow-badge" />
        </div>
        <div className="trial-step">
          <div className="trial-title">
            <span>2回目</span>
            <strong>ゲームをアレンジして完成！</strong>
          </div>
          <p className="trial-step-desc">
            1回目のゲームを<strong>アレンジ</strong>して、自分だけの作品に仕上げます。
          </p>
          <div className="lesson-images">
            <img src="/assets/trial-lesson-2.png" alt="ゲームを改良する生徒" />
            <img src="/assets/trial-scratch-screen.png" alt="完成したゲーム画面" />
          </div>
        </div>
      </div>
      <div className="trial-finale">
        <p className="trial-finale-bridge">2回目の最後に</p>
        <div className="presentation-block">
          <img src="/assets/trial-presentation.png" alt="作品を発表する生徒と講師" />
          <div className="presentation-copy">
            <h2>作品発表</h2>
            <p className="presentation-body">
              アレンジしたゲームを発表します。保護者の方もご覧いただき、お子様の成長と楽しさを感じられます。
            </p>
          </div>
        </div>
        <details className="trial-intro-panel">
          <summary className="trial-intro-summary">
            <span className="trial-intro-summary-text">プログラミングが初めての方へ</span>
            <span className="trial-intro-chevron" aria-hidden="true" />
          </summary>
          <div className="trial-intro-body">
            <p className="trial-intro-lead">
              体験授業では、Scratch（スクラッチ）というソフトで<strong>ゲーム制作</strong>
              に挑戦します。
            </p>
            <div className="trial-intro-card">
              <span className="trial-intro-icon scratch-intro-icon-blocks" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <div className="trial-intro-copy">
                <strong>Scratch（スクラッチ）とは？</strong>
                <p>
                  ブロックを並べてプログラムを作る、子ども向けのソフトです。難しいコードを書かず、
                  <strong>パズルのように組み立てて</strong>ゲームやアニメーションが作れます。
                </p>
              </div>
            </div>
          </div>
        </details>
        <p className="trial-finale-bridge">体験終了後</p>
        <div className="trial-enrollment-perk">
          <p className="offer-lead">入会後</p>
          <div className="offer-value-row">
            <span className="offer-amount offer-amount-sm">1ヶ月</span>
            <span className="offer-unit offer-unit-sm">月謝無料</span>
          </div>
        </div>
        <div className="trial-finale-cta-zone">
          <CampaignPeriod variant="compact" />
          <LineCta />
        </div>
      </div>
    </section>
  );
}
