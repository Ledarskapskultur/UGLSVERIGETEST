export const revalidate = 86400; // bygg om dagligen så att passerade veckor försvinner

import Link from "next/link";
import { KursLista } from "@/components/KursLista";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { kommande, ORTER, formatDatum } from "@/data/kurser";
import { FAQ, MALGRUPP } from "@/data/innehall";
import { INLAGG } from "@/data/blogg";
import { SITE } from "@/lib/site";

export default function Start() {
  const kurser = kommande().filter((k) => k.status === "L").slice(0, 5);
  const faq = FAQ.slice(0, 5);
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const webLd = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: "sv-SE", publisher: { "@id": SITE.url + "/#organization" } };

  return (
    <>
      <JsonLd data={webLd} />
      <JsonLd data={faqLd} />

      <section className="hero" aria-labelledby="hero-rubrik">
        <div className="hero__inner">
          <h1 id="hero-rubrik" className="h1">Utveckling av grupp och <em className="accent">ledare</em></h1>
          <p className="lead">Sveriges mest använda ledarskapsutbildning. Alla öppna UGL-kurser i landet, samlade på ett ställe.</p>
          <div className="hero__actions">
            <Link href="/kurser" className="btn btn--accent">Kursdatum och bokning</Link>
            <Link href="/vad-ar-ugl" className="btn btn--light">Vad är UGL?</Link>
          </div>
        </div>
      </section>

      {/* Tre ingångar: TOFU, MOFU, BOFU */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <Link href="/vad-ar-ugl" className="card" style={{ display: "block" }}>
              <span className="card__n">Nyfiken</span>
              <span className="h3" style={{ display: "block", marginBottom: 8 }}>Vad är UGL?</span>
              <span className="muted" style={{ fontSize: "0.9375rem" }}>En vecka där du lär dig hur grupper fungerar genom att vara i en. Så fungerar det, vad veckan ger och för vem den passar.</span>
            </Link>
            <Link href="/forskning" className="card" style={{ display: "block" }}>
              <span className="card__n">Skeptisk</span>
              <span className="h3" style={{ display: "block", marginBottom: 8 }}>Vad säger forskningen?</span>
              <span className="muted" style={{ fontSize: "0.9375rem" }}>Karolinska Institutet och Försvarshögskolan har följt deltagare i upp till två år. Här är vad de såg.</span>
            </Link>
            <Link href="/kurser" className="card card--dark" style={{ display: "block" }}>
              <span className="card__n">Redo</span>
              <span className="h3" style={{ display: "block", marginBottom: 8 }}>Kursdatum och bokning</span>
              <span className="muted" style={{ fontSize: "0.9375rem" }}>{kommande().length} kursveckor på kursgårdar över hela landet. Jämför datum, kursgård och pris, boka eller anmäl intresse.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="kort-om-ugl">
        <div className="container split">
          <div>
            <span className="eyebrow">Kort om UGL</span>
            <h2 className="h2">En vecka som <em className="accent">förändrar hur du ser på grupper.</em></h2>
          </div>
          <div className="prose">
            <p className="lead">UGL, Utveckling av grupp och ledare, är ingen föreläsning. Du bor på kursgård med en liten grupp människor du inte känner och lär dig av det som händer mellan er, med stöd av två handledare certifierade av Försvarshögskolan.</p>
            <div className="grid grid-4 mt-2">
              <div className="card kpi" style={{ padding: 16 }}><div className="kpi__label">Tid</div><div className="kpi__value" style={{ fontSize: "2rem" }}>5</div><div className="kpi__label">dagar</div></div>
              <div className="card kpi" style={{ padding: 16 }}><div className="kpi__label">Gruppen</div><div className="kpi__value" style={{ fontSize: "2rem" }}>8–12</div><div className="kpi__label">deltagare</div></div>
              <div className="card kpi" style={{ padding: 16 }}><div className="kpi__label">Stödet</div><div className="kpi__value" style={{ fontSize: "2rem" }}>2</div><div className="kpi__label">handledare</div></div>
              <div className="card kpi" style={{ padding: 16 }}><div className="kpi__label">Grunden</div><div className="kpi__value" style={{ fontSize: "2rem" }}>1981</div><div className="kpi__label">sedan</div></div>
            </div>
            <p className="mt-2"><Link href="/vad-ar-ugl" className="btn btn--ghost btn--sm">Läs mer om UGL</Link></p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="malgrupp">
        <div className="container">
          <span className="eyebrow">Passar det mig?</span>
          <h2 className="h2">Du behöver inte <em className="accent">vara chef.</em></h2>
          <div className="grid grid-3 mt-1">
            {MALGRUPP.map((m, i) => (
              <article key={m.n} className={`card${i === 1 ? " card--dark" : ""}`}>
                <span className="card__n">{m.n} · {m.tag}</span>
                <h3 className="h3">{m.titel}</h3>
                <p className="muted">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="kursdatum">
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Kommande kursveckor</span>
            <h2 className="h2">Närmast <em className="accent">i tiden.</em></h2>
            <KursLista kurser={kurser} initialt={5} />
            <div className="mt-2" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/kurser" className="btn">Alla kursdatum och priser</Link>
              <Link href="/ugl" className="btn btn--ghost">Välj kursort</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="kursorter">
        <div className="container">
          <span className="eyebrow">Kursorter</span>
          <h2 className="h2">UGL nära <em className="accent">dig.</em></h2>
          <div className="grid grid-4 mt-1">
            {ORTER.map((o) => (
              <Link key={o.slug} href={`/ugl/${o.slug}`} className="card" style={{ display: "block", padding: 16 }}>
                <span className="card__n">{o.region}</span>
                <span className="h3" style={{ fontSize: "1.125rem" }}>UGL i {o.namn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="blogg">
        <div className="container">
          <span className="eyebrow">Från bloggen</span>
          <h2 className="h2">Det folk undrar <em className="accent">innan de går.</em></h2>
          <div className="grid grid-3 mt-1">
            {INLAGG.slice(0, 3).map((i) => (
              <article key={i.slug} className="card">
                <span className="card__n">{formatDatum(i.datum)}</span>
                <h3 className="h3"><Link href={`/blogg/${i.slug}`}>{i.titel}</Link></h3>
                <p className="muted" style={{ fontSize: "0.9375rem" }}>{i.ingress}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="nyhetsbrev">
        <div className="container">
          <div className="panel panel--dark split">
            <div>
              <span className="eyebrow">Nyhetsbrev</span>
              <h2 className="h2">Insikter om UGL, och kursveckor <em className="accent">som passar.</em></h2>
              <p className="muted">Några gånger per år, inte varje vecka. Kursveckor i vald del av landet. Avsluta när som helst.</p>
            </div>
            <div className="card"><Formular typ="nyhetsbrev" knapp="Anmäl mig" not="Adressen används bara till detta och lämnas inte vidare." tack="Tack. Du är anmäld, och första brevet kommer när det finns något att berätta." /></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="fragor">
        <div className="container split">
          <div>
            <span className="eyebrow">Vanliga frågor</span>
            <h2 className="h2">Frågor <em className="accent">och svar.</em></h2>
            <p className="muted"><Link href="/fragor-och-svar">Alla frågor och svar</Link>, eller skriv till <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          </div>
          <div className="faq">
            {faq.map((f) => <details key={f.q}><summary>{f.q}</summary><div className="answer">{f.a}</div></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
