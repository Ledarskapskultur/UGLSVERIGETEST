import type { Metadata } from "next";
import Link from "next/link";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "UGL i egen regi, på er egen anläggning",
  description: "Företag med många medarbetare och egen anläggning kan köra UGL i egen regi: två certifierade handledare och kursmaterial är det enda inköpet. Kalkyl, upplägg och nästa steg.",
  alternates: { canonical: "/foretag" },
  openGraph: { title: "UGL i egen regi | UGL Sverige", url: absUrl("/foretag") },
};

export default function Foretag() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "UGL i egen regi", path: "/foretag" }])} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Ett förslag till ert företag</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>UGL i egen regi, på er <em className="accent">egen anläggning.</em></h1>
          <p className="lead muted mt-1">Ni har det som andra arbetsgivare saknar när de vill köra ledarskapsutbildning: många medarbetare att utbilda och en egen anläggning att göra det på. Det gör UGL, Sveriges mest använda ledarskapsutbildning, till en av de billigaste kompetensinsatser ni kan göra. Den största kostnaden i en UGL-vecka är boende och konferens, och den har ni redan.</p>
          <div className="grid grid-4 mt-2">
            <div className="card kpi"><div className="kpi__value">28–30</div><div className="kpi__label">tusen kronor: öppet kurspris per deltagare</div></div>
            <div className="card kpi card--dark"><div className="kpi__value">från 9</div><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>tusen kronor per deltagare i egen regi</div></div>
            <div className="card kpi"><div className="kpi__value">8–12</div><div className="kpi__label">deltagare per kurs</div></div>
            <div className="card kpi"><div className="kpi__value">5</div><div className="kpi__label">dagar med två certifierade handledare</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Varför det blir billigt</span>
            <h2 className="h2">Ni betalar för det ni inte har. <em className="accent">Resten äger ni redan.</em></h2>
          </div>
          <div className="prose muted">
            <p>Ett öppet UGL-pris på 28 000 till 30 000 kronor per deltagare består av tre delar: handledare, kursmaterial och fem dagars kost, logi och konferens på en kursgård. Den sista delen är den största, och för ert företag är den en intern kostnad på er anläggning, ofta under veckor när beläggningen ändå är låg.</p>
            <p>Kvar att köpa är handledarna och materialet. Två certifierade handledare kostar 90 000 kronor för veckan oavsett gruppstorlek, och materialet 1 500 kronor per deltagare. Med tolv deltagare blir det 9 000 kronor per person. Sedan kan samma vecka köras igen, med nästa grupp chefer.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Kalkyl, exempel med 24 deltagare per år</span>
            <h2 className="h2">Vad kostar det <em className="accent">för ert företag?</em></h2>
            <table className="table mt-1">
              <thead><tr><th>Post</th><th>Egen regi</th><th>Öppna kurser</th></tr></thead>
              <tbody>
                <tr><td>Handledare, 2 kurser × 90 000 kr</td><td>180 000 kr</td><td>ingår i kurspriset</td></tr>
                <tr><td>Kursmaterial, 24 × 1 500 kr</td><td>36 000 kr</td><td>ingår i kurspriset</td></tr>
                <tr><td>Boende och konferens, deltagare: 24 × 4 nätter</td><td>intern kostnad, ej medräknad</td><td>ingår i kurspriset</td></tr>
                <tr><td>Boende och konferens, handledare: 2 kurser × 2 × 5 nätter</td><td>intern kostnad, ej medräknad</td><td>ingår i kurspriset</td></tr>
                <tr><td><strong>Summa för 24 deltagare</strong></td><td><strong>216 000 kr</strong></td><td><strong>696 000 kr</strong></td></tr>
                <tr><td><strong>Per deltagare</strong></td><td><strong>9 000 kr</strong></td><td><strong>29 000 kr</strong></td></tr>
              </tbody>
            </table>
            <p className="form__note mt-1">Handledare 90 000 kr per kursvecka. Kursmaterial 1 500 kr per deltagare. Kurser beräknas med 12 deltagare, den sista kursen med resten (minst 8). Den interna kostnaden räknas på deltagarnas 4 nätter och handledarnas 5 nätter, båda med kost och konferens. Alla belopp exklusive moms. Öppet kurspris räknat som 29 000 kr. Skillnad i exemplet: 480 000 kr per år.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Så fungerar det i ett stort företag</span>
            <h2 className="h2">Grupper som inte känner varandra, från ett företag <em className="accent">som gör det.</em></h2>
            <div className="prose muted">
              <p>UGL bygger på att deltagarna inte känner varandra sedan tidigare. Det är därför feedbacken blir ärlig. I ett företag med många medarbetare fördelade på flera enheter går det utmärkt att sätta ihop grupper där ingen träffat någon annan förut: en butikschef från norr, en lagerledare från syd, en avdelningschef från huvudkontoret. Vi hjälper till med att sätta grupperna.</p>
              <p>Det ger en bonus som öppna kurser inte kan ge: chefer från olika delar av företaget som lärt känna varandra på riktigt under en vecka, och som sedan har varandra när något skaver i vardagen. Forskningen från Karolinska Institutet och Försvarshögskolan visar att effekten av UGL håller i sig hos dem som får stöd på jobbet efteråt. Det stödet bygger ni in från början.</p>
            </div>
          </div>
          <div className="steps">
            <div className="step"><div className="step__n">01</div><div><h3 className="h3">Handledare och material</h3><p className="muted">Två handledare certifierade av Försvarshögskolan, allt kursmaterial och ramarna för veckan. Det är vår del.</p></div></div>
            <div className="step"><div className="step__n">02</div><div><h3 className="h3">Anläggning och deltagare</h3><p className="muted">Fem dagar på er anläggning enligt en kort kravspecifikation (enkelrum, en sal för ring med 14 personer, grupprum, måltider). Deltagare från olika enheter så att ingen känner någon.</p></div></div>
            <div className="step"><div className="step__n">03</div><div><h3 className="h3">Ett schema för året</h3><p className="muted">Två, fyra eller sex veckor per år, planerade när anläggningen har plats. Varje vecka fylls med 8 till 12 chefer eller nyckelpersoner.</p></div></div>
            <div className="step"><div className="step__n">04</div><div><h3 className="h3">Uppföljning</h3><p className="muted">En gemensam återträff per grupp efter tre månader, och en modell för hur närmaste chef följer upp den personliga planen. Det är det som gör att effekten stannar.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Ett värde till</span>
            <h2 className="h2">Öppna UGL-kurser på <em className="accent">er anläggning.</em></h2>
            <p className="muted" style={{ maxWidth: "68ch" }}>De veckor ni inte fyller själva kan UGL Sverige fylla. Vi arrangerar öppna UGL-veckor på er anläggning och säljer platserna i det nationella utbudet på uglsverige.store, till deltagare från andra företag och organisationer i regionen. Vi tar risken, ni får gästerna.</p>
            <div className="grid grid-4 mt-2">
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">Beläggning i lågsäsong</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>40 till 56 hotellnätter per kurs, med frukost, lunch, middag och fika. Två till fyra öppna veckor per år utöver era egna.</p></div>
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">Ingen risk för er</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>UGL Sverige arrangerar, marknadsför och tar in anmälningarna. Anläggningen ersätts enligt kravspecifikationen, per deltagare.</p></div>
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">Platser till självkostnad</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>Lediga platser på öppna veckor kan fyllas med era egna chefer och medarbetare, till kostnaden för handledare och material.</p></div>
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}><h3 className="h3">En kursgård med namn</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>Anläggningen får en egen sida bland kursorterna på uglsverige.store, med kommande veckor, och blir en plats deltagare från hela landet söker sig till.</p></div>
            </div>
            <p className="muted mt-2" style={{ maxWidth: "68ch" }}><strong style={{ color: "var(--on-dark)" }}>Vi erbjuder också UL och IL.</strong> Samma upplägg fungerar för två kurser till ur Försvarshögskolans koncept: Utvecklande ledarskap, UL, för chefer som leder medarbetare direkt, och Indirekt ledarskap, IL, för chefer som leder genom andra chefer.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="boka-samtal">
        <div className="container split">
          <div>
            <span className="eyebrow">Boka ett första samtal</span>
            <h2 className="h2">En timme, så vet ni <em className="accent">om det passar.</em></h2>
            <p className="muted">Vi går igenom anläggningen, hur många som ska gå och vilket schema som passar året. Inget är bestämt förrän vi pratat.</p>
            <p className="mt-2"><strong>{SITE.person}</strong><br />{SITE.name}<br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a><br />{SITE.address.street}, {SITE.address.postal} {SITE.address.city}</p>
          </div>
          <div className="card"><Formular typ="foretag" knapp="Boka ett samtal" /></div>
        </div>
      </section>
      <div className="container" style={{ paddingBottom: 48 }}><Link href="/kommun" className="muted">Är du näringslivsansvarig i en kommun eller region? Se förslaget för kommuner.</Link></div>
    </>
  );
}
