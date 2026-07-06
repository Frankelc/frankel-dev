import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Frankel Gnonlonfin — Intégration paiement Bitcoin & Lightning",
  description:
    "Développeur full-stack spécialisé dans les passerelles de paiement Bitcoin non-custodial. BTCPay Server, Lightning Network, Breez SDK. Les fonds arrivent direct dans ton wallet.",
  keywords: [
    "Bitcoin",
    "Lightning Network",
    "BTCPay Server",
    "paiement Bitcoin",
    "développeur full-stack",
    "Next.js",
    "Bénin",
  ],
  authors: [{ name: "Frankel Gnonlonfin" }],
  openGraph: {
    title: "Frankel Gnonlonfin — Paiement Bitcoin & Lightning",
    description:
      "J'intègre le paiement Bitcoin & Lightning sur ta boutique. Non-custodial, sans intermédiaire.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
