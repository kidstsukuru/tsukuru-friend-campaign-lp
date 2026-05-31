import { Dela_Gothic_One, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const campaignFont = M_PLUS_Rounded_1c({
  weight: ["400", "700", "800", "900"],
  variable: "--font-campaign",
  display: "swap"
});

const campaignDisplayFont = Dela_Gothic_One({
  weight: "400",
  variable: "--font-campaign-display",
  display: "swap"
});

export const metadata = {
  title: "夏の友達紹介キャンペーン",
  description: "プログラミングスクールツクルの公開講座LP再現"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${campaignFont.variable} ${campaignDisplayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
