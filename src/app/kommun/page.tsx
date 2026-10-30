import type { Metadata } from "next";
import Link from "next/link";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "UGL på er ort: samarbete för näringslivsansvariga i kommuner och regioner",
  description: "Ett samarbete om UGL på er ort ger ortens företag Sveriges mest använda ledarskapsutbildning på hemmaplan och fyller hotellnätter i lågsäsong. Två upplägg, riktpriser och nästa steg.",
  alternates: { canonical: "/kommun" },
  openGraph: { title: "UGL på er ort | UGL Sverige", url: absUrl("/kommun") },
};

export default function Kommun() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "För kommuner och regioner", path: "/kommun" }])} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">För näringslivsansvariga i kommuner och regioner</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>UGL på <em className="accent">er ort.</em></h1>
          <p className="lead muted mt-1">Tänk om chefer och medarbetare i ortens företag kunde gå Sveriges mest använda ledarskapsutbildning utan att resa bort, och om varje kursvecka samtidigt fyllde hotellrum, restauranger och kursgårdar i kommunen. Det är vad ett samarbete om UGL på er ort går ut på: kompetensutveckling för det lokala näringslivet, och besöksnäring på köpet. Kursen kan hållas flera gånger per år.</p>
          <div className="grid grid-4 mt-2">
            <div className="card kpi"><div className="kpi__value">8–12</div><div className="kpi__label">deltagare per kurs</div></div>
            <div className="card kpi card--dark"><div className="kpi__value">40–56</div><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>hotellnätter per kurs</div></div>
            <div className="card kpi"><div className="kpi__value">2–3</div><div className="kpi__label">kurser per år på orten</div></div>
            <div className="card kpi"><div className="kpi__value">5</div><div className="kpi__label">dagar med två handledare</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Visionen</span>
            <h2 className="h2">Kompetensutveckling på orten, <em className="accent">genom UGL.</em></h2>
          </div>
          <div className="prose muted">
            <p>UGL, Utveckling av grupp och ledare, ägs av Försvarshögskolan och har använts sedan 1981. Det är den ledarskapsutbildning svenska arbetsgivare oftast väljer, men den hålls nästan bara i storstadsområdena. Den som bor i övriga landet reser, eller går inte alls.</p>
            <p>En återkommande UGL-vecka på er ort ändrar det. Ortens företag får en utbildning av nationell klass på hemmaplan, chefer och medarbetare från olika arbetsgivare lär känna varandra på riktigt, och kursen blir efter ett par omgångar en del av ortens utbud som drar deltagare även utifrån.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Vad orten får</span>
          <h2 className="h2">Tre vinster, varje gång <em className="accent">kursen hålls.</em></h2>
          <div className="grid grid-3 mt-1">
            <article className="card"><span className="card__n">01</span><h3 className="h3">Ledarskap som stannar på orten</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>Chefer och medarbetare i ortens företag och organisationer får en utbildning med dokumenterad effekt, och de får den tillsammans med andra från närområdet. Forskning från Karolinska Institutet och Försvarshögskolan visar att effekten håller i sig hos dem som får stöd på jobbet efteråt, och det stödet finns nära när fler på orten har gått.</p></article>
            <article className="card card--dark"><span className="card__n">02</span><h3 className="h3">Besöksnäring i lågsäsong</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>Varje kurs betyder 10 till 14 personer som bor fyra nätter på en anläggning i kommunen, äter alla måltider där och stannar hela veckan. Det är 40 till 56 hotellnätter per kurs, ofta under vardagar och perioder när beläggningen annars är låg. Med två till tre kurser per år blir det uppemot 170 nätter, år efter år.</p></article>
            <article className="card"><span className="card__n">03</span><h3 className="h3">En etablerad kurs som drar folk utifrån</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>När en UGL-vecka väl finns på orten kan den marknadsföras i det nationella utbudet på uglsverige.store. Deltagare från andra delar av landet väljer då er ort, och kursen fyller sig själv utan att kommunen behöver göra mer än att hålla kontakten.</p></article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Det vi behöver stöd med</span>
            <h2 className="h2">Tre saker som bara ni <em className="accent">kan göra lokalt.</em></h2>
            <p className="muted">UGL Sverige står för kursen: certifierade handledare, material, ramar och genomförande. Det som avgör om en kurs blir av på en ny ort är det lokala nätverket, och det är där näringslivsfunktionen gör skillnad.</p>
          </div>
          <div className="steps">
            <div className="step"><div className="step__n">01</div><div><h3 className="h3">Kontakt med hotell eller anläggning</h3><p className="muted">Vilken anläggning på orten passar för fem dagar med 10 till 14 personer, enkelrum och en lokal där man kan sitta i ring? Ni känner dem, och ett samtal från kommunen öppnar dörren.</p></div></div>
            <div className="step"><div className="step__n">02</div><div><h3 className="h3">Marknadsföring mot företag i närområdet</h3><p className="muted">Ett utskick i era kanaler, ett omnämnande i näringslivsnyhetsbrevet, ett inlägg i företagarföreningens grupp. Beroende på upplägg kan kommunen också ta emot bokningar av platser.</p></div></div>
            <div className="step"><div className="step__n">03</div><div><h3 className="h3">Två till tre träffar om UGL</h3><p className="muted">Infomöten, en föreläsning på ett frukostmöte eller en kortare träff för intresserade företag. Vi håller i innehållet, ni bjuder in. Det brukar räcka för att fylla den första veckan.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Två sätt att samarbeta</span>
          <h2 className="h2">Välj det upplägg som <em className="accent">passar kommunen.</em></h2>
          <div className="grid grid-2 mt-1">
            <article className="card">
              <span className="card__n">Upplägg 1</span>
              <h3 className="h3">Kommunen arrangerar</h3>
              <p className="muted" style={{ fontSize: "0.9375rem" }}>Kommunen eller regionen står som arrangör: rekryterar 8 till 12 deltagare, tar emot anmälningar och löser anläggning enligt kravspecifikationen. UGL Sverige levererar kursen med två certifierade handledare och allt material till ett fast pris per kursvecka. Passar när kommunen vill erbjuda UGL till näringslivet under eget namn, som en del av sitt företagsstöd.</p>
              <table className="table mt-1"><tbody>
                <tr><th>Handledare</th><td>90 000 kr per kursvecka, två certifierade handledare</td></tr>
                <tr><th>Kursmaterial</th><td>1 500 kr per deltagare</td></tr>
                <tr><th>Boende och konferens</th><td>Enligt kravspecifikation, avtalas med anläggningen</td></tr>
              </tbody></table>
              <p className="form__note mt-1">Riktpriser exklusive moms.</p>
            </article>
            <article className="card card--dark">
              <span className="card__n">Upplägg 2</span>
              <h3 className="h3">Kommunen öppnar dörrar</h3>
              <p className="muted" style={{ fontSize: "0.9375rem" }}>UGL Sverige arrangerar och tar risken. Kommunen hjälper till med kontakten till anläggningen, marknadsföringen mot det lokala näringslivet och infomötena. Deltagare från företag på orten får ett rabatterat pris. Passar när kommunen vill få hit kursen utan att administrera den.</p>
              <table className="table mt-1" style={{ color: "var(--on-dark)" }}><tbody>
                <tr><th style={{ color: "var(--on-dark-70)" }}>Kurspris</th><td>28 000 till 30 000 kr per deltagare, inklusive handledare, kursmaterial, kost och logi</td></tr>
                <tr><th style={{ color: "var(--on-dark-70)" }}>Rabatt</th><td>Enligt överenskommelse för deltagare från företag på orten</td></tr>
              </tbody></table>
              <p className="form__note mt-1" style={{ color: "var(--on-dark-70)" }}>Riktpriser exklusive moms. Resa till anläggningen tillkommer.</p>
            </article>
          </div>
          <p className="muted mt-1" style={{ maxWidth: "68ch" }}>Slutliga priser och rabattnivåer bestäms i det första samtalet, utifrån ort, anläggning och hur många kurser per år vi siktar på.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Så går det till</span>
            <h2 className="h2">Från första samtal till <em className="accent">återkommande vecka.</em></h2>
            <div className="grid grid-3 mt-1">
              {[
                ["Ett första samtal", "Vi går igenom orten, näringslivet och vilket upplägg som passar. En timme, på plats eller digitalt."],
                ["Anläggning", "Ni pekar ut en eller två anläggningar, vi skickar kravspecifikationen och tar in prisuppgift."],
                ["Infomöten", "Två till tre träffar för ortens företag, i era kanaler och med ert namn som avsändare."],
                ["Anmälningar", "Platserna fylls via uglsverige.store, eller via kommunen beroende på upplägg. Avstämning 30 dagar före start."],
                ["Kursveckan", "Fem dagar på anläggningen med två certifierade handledare. Ni är välkomna att öppna veckan."],
                ["Nästa vecka", "Efter första omgången bokar vi nästa datum, och kursen börjar leva av sig själv i ortens utbud."],
              ].map(([t, d], i) => (
                <div key={t} className="step" style={{ background: "var(--sand)" }}><div className="step__n">{i + 1}</div><div><h3 className="h3">{t}</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>{d}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div className="prose muted">
            <span className="eyebrow">För ortens företag</span>
            <p>Små och medelstora företag skickar sällan sina chefer på ledarskapsutbildning. Inte för att behovet saknas, utan för att kursen ligger tjugo mil bort och kostar en veckas frånvaro plus resa. Med UGL på hemmaplan blir steget kort, och chefer från olika företag på orten går tillsammans. Det ger ett nätverk mellan företagen som håller långt efter kursen, och en vana att skicka nästa chef när nästa vecka kommer. <Link href="/vad-ar-ugl">Läs mer om UGL</Link> eller <Link href="/foretag">om UGL för företag med egen anläggning</Link>.</p>
          </div>
          <div>
            <span className="eyebrow">Boka ett första samtal</span>
            <h2 className="h2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)" }}>En timme räcker för att se <em className="accent">om det passar.</em></h2>
            <p className="muted" style={{ marginBottom: 16 }}>Berätta kort om orten och vad ni ser framför er, så hör vi av oss för att boka ett samtal. Inget är bestämt förrän vi pratat.</p>
            <div className="card"><Formular typ="kommun" knapp="Boka ett samtal" /></div>
            <p className="muted mt-1" style={{ fontSize: "0.9375rem" }}>{SITE.person}, {SITE.name}. <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
