import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE, SEO } from "@/lib/content";
import "./globals.css";

const siteUrl = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SEO.defaultTitle,
  description: SEO.defaultDescription,
  keywords: [
    "negócio para médicos",
    "médico empreendedor",
    "marketing médico",
    "one person business médico",
    "empreendedorismo médico",
    "curso para médicos",
    "mentoria médico",
    "negócio digital médico",
    "CFM marketing",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: SEO.defaultTitle,
    description: SEO.ogDescription,
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: SEO.siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kura, negócios para médicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.ogDescription,
    images: ["/og-image.jpg"],
    ...(SITE.twitterHandle && { creator: SITE.twitterHandle }),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <JsonLd />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
