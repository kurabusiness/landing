import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kura.com.br"),
  title: "Kura | Negócios Para Médicos",
  description:
    "Educação em negócios para médicos que querem viver nos próprios termos. A Kura ensina posicionamento, presença digital, produtos, marketing e automação. Leia o manifesto.",
  keywords: [
    "negócio para médicos",
    "médico empreendedor",
    "marketing médico",
    "one person business médico",
    "empreendedorismo médico",
  ],
  openGraph: {
    title: "Kura | Negócios Para Médicos",
    description:
      "Educação em negócios para médicos que querem viver nos próprios termos. A Kura ensina o caminho. Leia o manifesto.",
    type: "website",
    locale: "pt_BR",
    url: "https://kura.com.br",
    siteName: "Kura",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kura — Negócios para Médicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kura | Negócios Para Médicos",
    description:
      "Educação em negócios para médicos que querem viver nos próprios termos. A Kura ensina o caminho. Leia o manifesto.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
