import type { Kurs } from "@/data/kurser";
import { SITE, absUrl } from "./site";

export function courseLd(kurser: Kurs[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": url + "#kurs",
    name: "UGL, Utveckling av grupp och ledare",
    description: "Försvarshögskolans femdagarskurs i grupputveckling och ledarskap, i internatform för 8 till 12 deltagare med två certifierade handledare.",
    provider: { "@id": SITE.url + "/#organization" },
    url,
    inLanguage: "sv",
    educationalCredentialAwarded: "Personlig utvecklingsplan och kursintyg",
    hasCourseInstance: kurser.map((k) => ({
      "@type": "CourseInstance",
      name: `UGL vecka ${k.vecka}, ${k.kursgard}`,
      courseMode: "Onsite",
      courseWorkload: "PT48H",
      startDate: k.start,
      endDate: k.slut,
      location: { "@type": "Place", name: k.kursgard, address: { "@type": "PostalAddress", addressLocality: k.ort.replace(", Stockholm", ""), addressCountry: "SE" } },
      instructor: k.handledare.map((h) => ({ "@type": "Person", name: h })),
      offers: { "@type": "Offer", price: k.totalpris, priceCurrency: "SEK", availability: k.status === "L" ? "https://schema.org/InStock" : "https://schema.org/SoldOut", url: absUrl(`/kurser#${k.id}`), validFrom: "2026-01-01" },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absUrl(it.path) })),
  };
}
