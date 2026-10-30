import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om UGL Sverige: vem som står bakom",
  description: "UGL Sverige är en oberoende förmedlare av öppna UGL-kurser med handledare certifierade av Försvarshögskolan. Drivs av CF Utbildning och Ledarskap AB och Carl-Fredrik Zetterman, själv certifierad UGL-handledare.",
  alternates: { canonical: "/om-oss" },
  openGraph: { title: "Om UGL Sverige", url: absUrl("/om-oss") },
};

export default function OmOss() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Om UGL Sverige", path: "/om-oss" }])} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Person", name: SITE.person, jobTitle: SITE.personTitle,
        worksFor: { "@id": SITE.url + "/#organization" }, sameAs: [SITE.personLinkedin], url: absUrl("/om-oss"),
        hasCredential: { "@type": "EducationalOccupationalCredential", name: "Handledarutbildning UGL (HUGL), Försvarshögskolan", dateCreated: "2024" },
      }} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Om oss</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Vem som står bakom <em className="accent">UGL Sverige.</em></h1>
          <div className="split mt-2">
            <div className="prose">
              <p className="lead">UGL Sverige samlar öppna UGL-kurser från arrangörer runt om i landet på ett ställe, så att den som vill gå kan jämföra kursgård, datum, pris och handledare och boka utan att leta hos varje arrangör för sig.</p>
              <p>Vi är en oberoende förmedlare. Kurserna genomförs av arrangörerna som står för respektive vecka, alltid med två handledare certifierade av Försvarshögskolan. UGL är ett koncept som ägs av Försvarshögskolan; UGL Sverige är inte en del av Försvarshögskolan och företräder den inte.</p>
              <h2>Personen bakom</h2>
              <p>{SITE.person} driver UGL Sverige. Han är själv UGL-handledare, certifierad av Försvarshögskolan (handledarutbildning 2024), ICF-certifierad coach och certifierad organisationsutvecklare, och har arbetat som utbildare, coach och föreläsare för bland andra Sundsvalls kommun, KPMG, Svenska kyrkan och Mälardalens universitet. Det är han som svarar när du hör av dig.</p>
              <h2>Företaget</h2>
              <p>UGL Sverige är ett varumärke inom {SITE.company}, org.nr {SITE.orgnr}, med säte i Västerås. Bolaget arbetar med ledarskapsutveckling och beteendebaserad förändring och har F-skatt.</p>
              <h2>Så tjänar vi pengar</h2>
              <p>Det kostar inget extra att boka via UGL Sverige. Priset är detsamma som hos arrangören, och arrangören ersätter oss för förmedlade deltagare. Vi visar alla veckor vi förmedlar på samma villkor och rangordnar dem efter datum.</p>
              <h2>Kontakt</h2>
              <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a><br />{SITE.address.street}, {SITE.address.postal} {SITE.address.city}</p>
              <p><Link href="/kontakt" className="btn btn--sm">Vi ringer upp dig</Link></p>
            </div>
            <div className="stack">
              <div className="card"><span className="card__n">Certifierade handledare</span><p className="muted" style={{ fontSize: "0.9375rem" }}>Varje kursvecka leds av två handledare som utbildats och certifierats av Försvarshögskolan.</p></div>
              <div className="card"><span className="card__n">Forskning bakom</span><p className="muted" style={{ fontSize: "0.9375rem" }}>Effekten av UGL har utvärderats av Karolinska Institutet och Försvarshögskolan, med uppföljning upp till två år efter kursen.</p></div>
              <div className="card"><span className="card__n">Sedan 1981</span><p className="muted" style={{ fontSize: "0.9375rem" }}>UGL har använts sedan 1981 och ägs av Försvarshögskolan sedan år 2000.</p></div>
              <div className="card card--dark"><span className="card__n">Omdömen</span><p className="muted" style={{ fontSize: "0.9375rem" }}>Omdömen från deltagare publiceras löpande med namn och roll efter genomförd kurs. Har du gått UGL med oss? <Link href="/kontakt#omdome" style={{ color: "var(--on-dark)" }}>Dela vad veckan gav dig.</Link></p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
