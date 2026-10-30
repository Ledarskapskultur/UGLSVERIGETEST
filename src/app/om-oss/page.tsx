import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om UGL Sverige: vem som står bakom",
  description: "UGL Sverige samlar öppna UGL-kurser i hela landet. Drivs av CF Utbildning och Ledarskap AB och Carl-Fredrik Zetterman, UGL-handledare certifierad av Försvarshögskolan. Så arbetar vi och så tjänar vi pengar.",
  alternates: { canonical: "/om-oss" },
  openGraph: { title: "Om UGL Sverige", url: absUrl("/om-oss") },
};

export default function OmOss() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Om oss", path: "/om-oss" }])} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Person", name: SITE.person, jobTitle: SITE.personTitle,
        worksFor: { "@id": SITE.url + "/#organization" }, sameAs: [SITE.personLinkedin], url: absUrl("/om-oss"),
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", name: "Handledarutbildning UGL (HUGL), Försvarshögskolan", dateCreated: "2024" },
          { "@type": "EducationalOccupationalCredential", name: "ICF-certifierad coach" },
          { "@type": "EducationalOccupationalCredential", name: "Certifierad organisationsutvecklare" },
        ],
      }} />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Om UGL Sverige</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", maxWidth: "16ch" }}>Man lär sig leda genom att uppleva det</h1>
          <p className="lead muted mt-1" style={{ maxWidth: "60ch" }}>UGL Sverige samlar öppna UGL-kurser i hela landet. Vi gör det enkelt att hitta en kurs som passar. Det som händer under veckan får du uppleva själv.</p>
          <div className="mt-1" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/kurser" className="btn">Visa lediga kurser</Link>
            <Link href="/vad-ar-ugl" className="btn btn--ghost">Vad är UGL?</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Vad vi gör</span>
          <div className="grid grid-3 mt-1">
            <article className="card"><span className="card__n">1</span><h2 className="h3">Hjälper dig hitta rätt kurs</h2><p className="muted" style={{ fontSize: "0.9375rem" }}>Vi visar kursveckor från arrangörer i hela landet på ett ställe, med datum, kursgård, pris och status. Kurs, boende och måltider ingår alltid.</p></article>
            <article className="card"><span className="card__n">2</span><h2 className="h3">Svarar på dina frågor</h2><p className="muted" style={{ fontSize: "0.9375rem" }}>Osäker på om UGL passar dig, eller vilken vecka du ska välja? Vi ringer upp, håller webinar och hjälper dig med underlag till din chef.</p></article>
            <article className="card"><span className="card__n">3</span><h2 className="h3">Hjälper företag planera</h2><p className="muted" style={{ fontSize: "0.9375rem" }}>Vill ni skicka flera medarbetare hjälper vi er planera vilka som ska gå och när, så att de hamnar i olika grupper.</p></article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Människan bakom</span>
            <h2 className="h2">{SITE.person}</h2>
            <p className="muted" style={{ fontWeight: 500 }}>Grundare och UGL-handledare</p>
            <div className="prose mt-1">
              <p>Carl-Fredrik är certifierad UGL-handledare från Försvarshögskolan, ICF-certifierad coach och certifierad organisationsutvecklare. Han har arbetat som utbildare, coach och föreläsare åt bland annat Sundsvalls kommun, KPMG, Svenska kyrkan och Mälardalens universitet, och har erfarenhet av att leda förändring genom chefer i Eskilstuna kommun.</p>
              <p>Det är han som svarar när du hör av dig.</p>
              <p><a href={SITE.personLinkedin} rel="noopener me">Hitta Carl-Fredrik på LinkedIn</a></p>
            </div>
          </div>
          <div className="stack">
            <div className="card">
              <span className="card__n">Certifieringar</span>
              <ul style={{ display: "grid", gap: 6, margin: 0, paddingLeft: "1.2em", fontSize: "0.9375rem" }}>
                <li>UGL-handledare, Försvarshögskolan (2024)</li>
                <li>ICF-certifierad coach</li>
                <li>Certifierad organisationsutvecklare</li>
              </ul>
            </div>
            <div className="card">
              <span className="card__n">Arbetat med</span>
              <p className="muted" style={{ fontSize: "0.9375rem" }}>Ledarskapsutveckling, grupputveckling och beteendeförändring.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Så tänker vi</span>
            <div className="grid grid-3 mt-1">
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">Upplevelsen är en del av kursen</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>Vi berättar varför veckan är värd din tid och hur lärandet går till. Resten upplever du på plats, där det gör mest skillnad.</p></div>
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">Det praktiska ska vara enkelt</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>Du ska slippa leta bland kurstillfällen och villkor. Vi visar vad som passar och vad som ingår, så att du kan koncentrera dig på det som är viktigt.</p></div>
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">Ett etablerat koncept</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>UGL ägs av Försvarshögskolan. Vi utgår från det och använder det som det är tänkt. UGL Sverige är inte en del av Försvarshögskolan och företräder den inte.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div className="prose">
            <h2>Så tjänar vi pengar</h2>
            <p>Det kostar inget extra att boka via UGL Sverige. Priset är detsamma som hos arrangören, och arrangören ersätter oss för förmedlade deltagare. Vi visar alla veckor vi förmedlar på samma villkor och rangordnar dem efter datum.</p>
            <h2>Företaget</h2>
            <p>UGL Sverige är ett varumärke inom {SITE.company}, org.nr {SITE.orgnr}, med säte i Västerås. Bolaget arbetar med ledarskapsutveckling och beteendebaserad förändring och har F-skatt.</p>
          </div>
          <div className="card">
            <span className="card__n">Hör av dig eller hitta din kurs</span>
            <p className="muted" style={{ fontSize: "0.9375rem" }}>Har du frågor innan du bestämmer dig?</p>
            <p style={{ margin: "12px 0" }}><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a><br /><span className="muted">{SITE.address.street}, {SITE.address.postal} {SITE.address.city}</span></p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/kurser" className="btn btn--sm">Visa lediga kurser</Link>
              <Link href="/kontakt" className="btn btn--ghost btn--sm">Vi ringer upp dig</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
