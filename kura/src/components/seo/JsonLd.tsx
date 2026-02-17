import { SITE, SEO, faq } from "@/lib/content";

export function JsonLd() {
  const baseUrl = SITE.url.replace(/\/$/, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: baseUrl,
    logo: `${baseUrl}/og-image.jpg`,
    description: SEO.defaultDescription,
    ...(SITE.email && { email: SITE.email }),
    sameAs: [
      ...(SITE.instagram ? [SITE.instagram] : []),
      ...(SITE.youtube ? [SITE.youtube] : []),
    ].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO.siteName,
    url: baseUrl,
    description: SEO.defaultDescription,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: baseUrl,
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const scripts = [organization, website, faqPage];

  return (
    <>
      {scripts.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
