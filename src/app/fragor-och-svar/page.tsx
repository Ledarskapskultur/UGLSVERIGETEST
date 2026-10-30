import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";
import { FAQ } from "@/data/innehall";

export const metadata: Metadata = {
  title: "Frågor och svar om UGL",
  description: "Måste man vara chef? Kan man gå med en kollega? Är UGL terapi? Vad kostar det och vad ingår? Svar på de vanligaste frågorna om UGL.",
  alternates: { canonical: "/fragor-och-svar" },
  openGraph: { title: "Frågor och svar om UGL | UGL Sverige", url: absUrl("/fragor-och-svar") },
};

export default function FragorOchSvar() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Frågor och svar", path: "/fragor-och-svar" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Vanliga frågor</span>
            <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Frågor <em className="accent">och svar.</em></h1>
            <p className="muted mt-1">Saknas svaret? Skriv till <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, så hör vi av oss. Eller <Link href="/kontakt">be oss ringa upp</Link>.</p>
          </div>
          <div className="faq">
            {FAQ.map((f, i) => (
              <details key={f.q} open={i === 0}><summary>{f.q}</summary><div className="answer">{f.a}</div></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
