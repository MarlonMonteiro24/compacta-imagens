import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const displayFont = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compacta — Imagens mais leves",
  description: "Comprima imagens com privacidade, rapidez e controle de qualidade.",
  openGraph: {
    title: "Compacta — Imagens mais leves",
    description: "Grátis, privado e sem cadastro.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Compacta — Imagens mais leves. Simples assim." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compacta — Imagens mais leves",
    description: "Grátis, privado e sem cadastro.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
