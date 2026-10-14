import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1F2E24",
};

export const metadata: Metadata = {
  title: "Efflorescence Florist | Award-Winning Florist in Barrow-in-Furness, Cumbria",
  description:
    "Award-winning independent florist in Barrow-in-Furness, Cumbria. Bespoke wedding floristry, hand-tied gift bouquets, bereavement tributes, and seasonal floral workshops.",
  keywords: [
    "florist Barrow in Furness",
    "Cumbria wedding flowers",
    "Abbey House florist",
    "flower delivery Barrow",
    "bespoke wedding packages",
    "funeral flowers Cumbria",
    "Efflorescence florist"
  ],
  authors: [{ name: "Efflorescence Ltd" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-[#242220]">
        {children}
      </body>
    </html>
  );
}
