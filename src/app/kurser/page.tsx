export const revalidate = 86400; // bygg om dagligen så att passerade veckor försvinner

import type { Metadata } from "next";
import Link from "next/link";
import { KursLista } from "@/components/KursLista";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { kommande, UGL_KURSPRIS, formatKr } from "@/data/kurser";
import { courseLd, breadcrumbLd } from "@/lib/schema";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kursdatum och bokning",
  description: "Kursdatum, priser och anmälan till öppna UGL-kurser med UGL Sverige. Välj upp till tre veckor, skicka till chefen eller anmäl intresse.",
  alternates: { canonical: "/kurser" },
  openGraph: { title: "Kursdatum och bokning | UGL Sverige", description: "Kursdatum, priser och anmälan till öppna UGL-kurser över hela Sverige.", url: absUrl("/kurser") },
};

export default function Kurser() {
  const kurser = kommande();
  return (
    <>
      <JsonLd data={courseLd(kurser, absUrl("/kurser"))} />
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Kursdatum", path: "/kurser" }])} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Öppna kurser</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Kursdatum <em className="accent">och bokning.</em></h1>
          <p className="lead muted mt-1">Fem sammanhängande dagar på kursgård, 8 till 12 deltagare och två handledare certifierade av Försvarshögskolan. Anmälan är inte bindande förrän den bekräftats.</p>
          <p className="mt-1"><Link href="/kontakt" className="btn btn--ghost btn--sm">Vill du hellre prata? Vi ringer upp dig</Link></p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel">
            <span className="eyebrow">01. Hitta rätt kurs</span>
            <h2 className="h2">Välj tid <em className="accent">och plats.</em></h2>
            <p className="muted" style={{ maxWidth: "68ch", marginBottom: 20 }}>De flesta bokar tre till sex månader i förväg, och populära veckor fylls tidigt. Välj region, boka den vecka som passar eller anmäl intresse för flera. De flesta som går UGL har fått kursen godkänd av sin chef, och vi hjälper till med underlaget: pris, innehåll och vad veckan ger organisationen.</p>
            <KursLista kurser={kurser} filter initialt={24} />
            <p className="form__note mt-2">Alla priser anges exklusive moms. Kurspriset är {formatKr(UGL_KURSPRIS)}; kost och logi varierar mellan kursgårdarna. Kurserna i Jönköping har ett samlat pris där allt ingår.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">02. Så går det till</span>
            <h2 className="h2">Tre steg, inga <em className="accent">överraskningar.</em></h2>
            <p className="muted">Allt börjar i kurslistan. Du väljer vecka, vi hör av oss, och först när du sagt ja är platsen bokad.</p>
          </div>
          <div className="steps">
            <div className="step"><div className="step__n">01</div><div><h3 className="h3">Boka plats eller anmäl intresse</h3><p className="muted">Boka när du vet vilken vecka. Anmäl intresse om du vill hålla flera veckor öppna. Inget är bindande ännu.</p></div></div>
            <div className="step"><div className="step__n">02</div><div><h3 className="h3">Vi hörs kort</h3><p className="muted">Inom två arbetsdagar stämmer vi av att veckan passar och att gruppen blir rätt sammansatt. Du får en länk där resten av uppgifterna fylls i, av dig eller av den som ska ta emot fakturan.</p></div></div>
            <div className="step"><div className="step__n">03</div><div><h3 className="h3">Bekräftelse och faktura</h3><p className="muted">Först då är platsen din. Välkomstbrev med kursgård, tider och resväg kommer före kursstart. Ingen sista anmälningsdag: det går att boka fram till dagen före kursstart, så länge det finns platser.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="bevaka">
        <div className="container">
          <div className="panel panel--dark split">
            <div>
              <span className="eyebrow">Inte rätt vecka ännu?</span>
              <h2 className="h2">Få nästa lediga platser <em className="accent">till mejlen.</em></h2>
              <p className="muted">Ett mejl per släpp, inget nyhetsbrev. Avsluta när du vill.</p>
            </div>
            <div className="card">
              <Formular typ="bevaka" knapp="Bevaka" not="Ett mejl per släpp. Avsluta när du vill." tack="Tack. Du får ett mejl när nya veckor släpps i vald del av landet." />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="praktiskt">
        <div className="container split">
          <div>
            <span className="eyebrow">03. Praktiskt</span>
            <h2 className="h2">Bra att <em className="accent">veta.</em></h2>
            <p className="muted">Fler frågor och svar finns på <Link href="/fragor-och-svar">sidan med vanliga frågor</Link>.</p>
          </div>
          <div className="faq">
            <details open><summary>Vad ingår i priset?</summary><div className="answer">Kursledning med två handledare, kursmaterial och dokumentation samt kost och logi under veckan. Resa till och från kursgården tillkommer. Alla priser är exklusive moms.</div></details>
            <details><summary>Kan flera från samma arbetsplats gå?</summary><div className="answer">Inte på samma vecka. Gruppen ska vara en främlingsgrupp, och det är en förutsättning för öppenheten. För en hel organisation är <Link href="/foretag">en egen kurs</Link> rätt väg.</div></details>
            <details><summary>Hur fungerar betalning och avbokning?</summary><div className="answer">Betalning sker mot faktura efter bekräftad plats. Vid förhinder, hör av er så snart det går. Villkoren för den aktuella veckan står i bekräftelsen. <Link href="/villkor">Läs våra allmänna villkor</Link>.</div></details>
          </div>
        </div>
      </section>
    </>
  );
}
