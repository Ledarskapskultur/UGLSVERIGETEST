import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "UGL, Utveckling av grupp och ledare: kursdatum, innehåll och effekt | UGL Sverige",
    template: "%s | UGL Sverige",
  },
  description: "UGL, Utveckling av grupp och ledare: Försvarshögskolans femdagarskurs i ledarskap och grupputveckling. Kursinnehåll, forskning om effekt, fakta och kursdatum över hela Sverige.",
  openGraph: { type: "website", locale: "sv_SE", siteName: SITE.name, images: ["/assets/ugl-hero.webp"] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": SITE.url + "/#organization",
    name: SITE.name,
    legalName: SITE.company,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneIntl,
    description: SITE.description,
    address: { "@type": "PostalAddress", streetAddress: SITE.address.street, postalCode: SITE.address.postal, addressLocality: SITE.address.city, addressCountry: "SE" },
    founder: { "@type": "Person", name: SITE.person, jobTitle: SITE.personTitle, sameAs: [SITE.personLinkedin] },
    sameAs: [SITE.linkedin],
  };
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <JsonLd data={org} />
        <Header />
        <main id="innehall">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
