export const revalidate = 86400; // bygg om dagligen så att passerade veckor försvinner

import Link from "next/link";
import { KursLista } from "@/components/KursLista";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { kommande, ORTER } from "@/data/kurser";
import { FAQ, VECKAN, MALGRUPP, SA_FUNGERAR, EFFEKTER } from "@/data/innehall";
import { SITE } from "@/lib/site";

export default function Start() {
  const kurser = kommande().filter((k) => k.status === "L").slice(0, 6);
  const faq = FAQ.slice(0, 8);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const webLd = { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: "sv-SE", publisher: { "@id": SITE.url + "/#organization" } };

  return (
    <>
      <JsonLd data={webLd} />
      <JsonLd data={faqLd} />

      <section className="hero" aria-labelledby="hero-rubrik">
        <div className="hero__inner">
          <h1 id="hero-rubrik" className="h1">Utveckling av grupp och <em className="accent">ledare</em></h1>
          <p className="lead">Sveriges mest använda ledarskapsutbildning.</p>
          <div className="hero__actions">
            <span className="small">Öppna kurser över hela landet.</span>
            <Link href="/kurser" className="btn btn--light">Se kursdatum</Link>
          </div>
        </div>
      </section>

      <section className="section" id="vad-ar-ugl">
        <div className="container split">
          <div>
            <span className="eyebrow">Kort om UGL</span>
            <h2 className="h2">Vad är UGL?</h2>
            <p className="lead">En vecka där du lär dig hur grupper fungerar genom att vara i en.</p>
          </div>
          <div className="prose">
            <p>UGL, Utveckling av grupp och ledare, är Sveriges mest använda ledarskapsutbildning. Det är ingen föreläsning. Du bor på kursgård med en liten grupp och lär dig av det som händer mellan er, med stöd av två handledare.</p>
            <p className="mt-1"><Link href="/vad-ar-ugl" className="btn btn--ghost btn--sm">Läs mer om UGL</Link></p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Veckan i fyra siffror</span>
            <h2 className="h2">Det här får du <em className="accent">under veckan.</em></h2>
            <div className="grid grid-4 mt-2">
              <div className="card kpi"><div className="kpi__label">Tid</div><div className="kpi__value">5</div><div className="kpi__label">dagar</div></div>
              <div className="card kpi card--dark" style={{ background: "var(--dark-2)" }}><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>Gruppen</div><div className="kpi__value">8–12</div><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>deltagare</div></div>
              <div className="card kpi card--dark" style={{ background: "var(--dark-2)" }}><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>Stödet</div><div className="kpi__value">2</div><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>handledare</div></div>
              <div className="card kpi card--dark" style={{ background: "var(--dark-2)" }}><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>Grunden</div><div className="kpi__value">1981</div><div className="kpi__label" style={{ color: "var(--on-dark-70)" }}>sedan</div></div>
            </div>
            <div className="grid grid-2 mt-1">
              {VECKAN.map((v) => (
                <article key={v.n} className="card card--dark" style={{ background: "var(--dark-2)" }}>
                  <span className="card__n">{v.n}</span>
                  <h3 className="h3">{v.titel}</h3>
                  <p className="muted">{v.text}</p>
                  <div className="card mt-1" style={{ background: "var(--dark)", padding: 16 }}>
                    <span className="card__n">Det betyder för dig</span>
                    <p style={{ fontSize: "0.9375rem" }}>{v.for}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="malgrupp">
        <div className="container">
          <span className="eyebrow">Passar det mig?</span>
          <h2 className="h2">Du behöver inte <em className="accent">vara chef.</em></h2>
          <p className="lead muted">Tre vanliga ingångar till veckan. Känner du igen dig i någon av dem är du rätt. UGL handlar om att leda sig själv lika mycket som andra.</p>
          <div className="grid grid-3 mt-2">
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

      <section className="section" style={{ paddingTop: 0 }} id="sa-fungerar-det">
        <div className="container split">
          <div>
            <span className="eyebrow">Så fungerar det</span>
            <h2 className="h2">Lärandet sker <em className="accent">i gruppen.</em></h2>
            <p className="muted">Det finns inga föreläsningar att anteckna. Ni gör saker tillsammans, och det som händer i gruppen är det ni lär er av. Så går det till, i tre steg.</p>
            <p className="muted mt-1" style={{ fontSize: "0.9375rem" }}>Konceptet ägs av Försvarshögskolan, som certifierar alla handledare. Effekten har utvärderats av Karolinska Institutet.</p>
          </div>
          <div className="steps">
            {SA_FUNGERAR.map((s, i) => (
              <div key={s.titel} className="step">
                <div className="step__n">0{i + 1}</div>
                <div><h3 className="h3">{s.titel}</h3><p className="muted">{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="kursdatum">
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Kommande kursveckor</span>
            <h2 className="h2">Närmast <em className="accent">i tiden.</em></h2>
            <KursLista kurser={kurser} initialt={6} />
            <div className="mt-2" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/kurser" className="btn">Alla kursdatum och priser</Link>
              <Link href="/ugl" className="btn btn--ghost">Välj kursort</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="effekter">
        <div className="container">
          <span className="eyebrow">Effekter av UGL</span>
          <h2 className="h2">Effekter <em className="accent">av UGL.</em></h2>
          <p className="lead muted">UGL ger medarbetare, ledare och chefer medvetenhet och handlingskraft: en förståelse för hur det egna sättet att vara påverkar andra, och verktyg för att göra något åt det. Karolinska Institutet och Försvarshögskolan har följt deltagare och deras medarbetare upp till två år efter kursen, och effekten håller i sig.</p>
          <div className="grid grid-3 mt-2">
            {EFFEKTER.map((e) => (
              <article key={e.n} className="card">
                <span className="card__n">{e.n}</span>
                <h3 className="h3">{e.titel}</h3>
                <p className="muted" style={{ fontSize: "0.9375rem" }}>{e.text}</p>
                <div className="mt-1" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{e.taggar.map((t) => <span key={t} className="pill">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="kursorter">
        <div className="container">
          <span className="eyebrow">Kursorter</span>
          <h2 className="h2">UGL nära <em className="accent">dig.</em></h2>
          <div className="grid grid-4 mt-1">
            {ORTER.map((o) => (
              <Link key={o.slug} href={`/ugl/${o.slug}`} className="card" style={{ display: "block" }}>
                <span className="card__n">{o.region}</span>
                <span className="h3">UGL i {o.namn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="nyhetsbrev">
        <div className="container">
          <div className="panel split">
            <div>
              <span className="eyebrow">Nyhetsbrev</span>
              <h2 className="h2">Insikter om UGL, och kursveckor <em className="accent">som passar.</em></h2>
              <p className="muted">Ett nyhetsbrev om grupper och ledarskap, med besked när det dyker upp kursveckor i rätt del av landet och vid rätt tid. Inga utskick utöver det.</p>
              <ul className="muted mt-1" style={{ fontSize: "0.9375rem", display: "grid", gap: 4 }}>
                <li>Några gånger per år, inte varje vecka</li>
                <li>Kursveckor i vald del av landet</li>
                <li>Avsluta när som helst, med ett klick</li>
              </ul>
            </div>
            <Formular typ="nyhetsbrev" knapp="Anmäl mig" not="Adressen används bara till detta och lämnas inte vidare." tack="Tack. Du är anmäld, och första brevet kommer när det finns något att berätta." />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="fragor">
        <div className="container split">
          <div>
            <span className="eyebrow">Vanliga frågor</span>
            <h2 className="h2">Frågor <em className="accent">och svar.</em></h2>
            <p className="muted">Saknas svaret? Skriv till <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, så hör vi av oss. <Link href="/fragor-och-svar">Alla frågor och svar</Link>.</p>
          </div>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><div className="answer">{f.a}</div></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
