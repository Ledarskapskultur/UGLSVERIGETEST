import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl } from "@/lib/site";
import { VAD_VECKAN_GER, RIKTNINGAR, SPELREGLER, EFFEKTER, SA_FUNGERAR } from "@/data/innehall";

export const metadata: Metadata = {
  title: "Vad är UGL? Utveckling av grupp och ledare förklarat",
  description: "UGL (Utveckling av grupp och ledare) är Försvarshögskolans femdagarskurs i grupputveckling och ledarskap. Så fungerar veckan, vad den ger, utvecklingsområdena och forskningen om effekt.",
  alternates: { canonical: "/vad-ar-ugl" },
  openGraph: { title: "Vad är UGL? | UGL Sverige", url: absUrl("/vad-ar-ugl") },
};

export default function VadArUgl() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Vad är UGL", path: "/vad-ar-ugl" }])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Vad är UGL? Utveckling av grupp och ledare förklarat",
        inLanguage: "sv",
        author: { "@type": "Person", name: "Carl-Fredrik Zetterman", jobTitle: "UGL-handledare, certifierad av Försvarshögskolan" },
        publisher: { "@id": absUrl("/") + "#organization" },
        dateModified: "2026-10-30",
        mainEntityOfPage: absUrl("/vad-ar-ugl"),
      }} />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Vad är UGL</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>En vecka där du lär dig hur grupper fungerar <em className="accent">genom att vara i en.</em></h1>
          <div className="prose mt-2">
            <p className="lead">UGL, Utveckling av grupp och ledare, är en femdagars utbildning i grupputveckling och ledarskap som utvecklats av Försvarshögskolan. Den ges i internatform på kursgård för grupper om 8 till 12 deltagare som inte känner varandra, med två handledare certifierade av Försvarshögskolan.</p>
            <p>Det är ingen föreläsning. Gruppen löser uppgifter tillsammans, och det som händer mellan deltagarna är kursmaterialet. Konceptet har använts sedan 1981, ägs av Försvarshögskolan sedan år 2000 och är den ledarskapsutbildning svenska arbetsgivare oftast väljer. Effekten har utvärderats av Karolinska Institutet och Försvarshögskolan i uppföljningar upp till två år efter kursen.</p>
            <p className="muted" style={{ fontSize: "0.9375rem" }}>Skriven av Carl-Fredrik Zetterman, UGL-handledare certifierad av Försvarshögskolan. Uppdaterad 30 oktober 2026.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="sa-fungerar-det">
        <div className="container split">
          <div>
            <span className="eyebrow">Så fungerar det</span>
            <h2 className="h2">Lärandet sker <em className="accent">i gruppen.</em></h2>
            <p className="muted">Det finns inga föreläsningar att anteckna. Ni gör saker tillsammans, och det som händer i gruppen är det ni lär er av.</p>
          </div>
          <div className="steps">
            {SA_FUNGERAR.map((s, i) => (
              <div key={s.titel} className="step"><div className="step__n">0{i + 1}</div><div><h3 className="h3">{s.titel}</h3><p className="muted">{s.text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="vad-veckan-ger">
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Vad veckan ger</span>
            <h2 className="h2">Ny syn på sig själv, gruppen <em className="accent">och ledarskapet.</em></h2>
            <p className="muted" style={{ maxWidth: "68ch" }}>Det du tar med dig hem är inte en metod att följa, utan en klarare bild av hur du påverkar andra och vad du vill göra annorlunda. Tre saker gör det möjligt.</p>
            <div className="grid grid-3 mt-2">
              {VAD_VECKAN_GER.map((v, i) => (
                <article key={v.tag} className="card card--dark" style={{ background: "var(--dark-2)" }}>
                  <span className="card__n">0{i + 1} · {v.tag}</span>
                  <h3 className="h3">{v.titel}</h3>
                  <p className="muted" style={{ fontSize: "0.9375rem" }}>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="utvecklingsomraden">
        <div className="container">
          <span className="eyebrow">Tre riktningar</span>
          <h2 className="h2">Utvecklingsområden <em className="accent">under UGL.</em></h2>
          <p className="lead muted">Under veckan arbetar gruppen med det som avgör hur en grupp fungerar: hur den utvecklas, kommunikation och feedback, konflikter, värderingar och känslor. Försvarshögskolans utvecklingsmål håller ihop det och pekar åt tre håll.</p>
          <div className="grid grid-3 mt-2">
            {RIKTNINGAR.map((r) => (
              <article key={r.n} className="card">
                <span className="card__n">{r.n} · {r.riktning}</span>
                <h3 className="h3">{r.titel}</h3>
                <p style={{ fontWeight: 500, marginBottom: 10 }}>{r.lead}</p>
                <ul className="muted" style={{ fontSize: "0.9375rem", display: "grid", gap: 6 }}>
                  {r.mal.map((m) => <li key={m}>→ {m}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="oppenhet">
        <div className="container split">
          <div>
            <span className="eyebrow">Öppenhet och trygghet</span>
            <h2 className="h2">Utmanande, aldrig <em className="accent">utlämnande.</em></h2>
            <div className="prose muted">
              <p>Gruppen bygger veckan tillsammans. Ingen sitter av den, och ju mer deltagarna vågar visa av sig själva, desto mer får de ut av varandra.</p>
              <p>Öppenhet uppstår inte på uppmaning. Den växer när det känns tryggt nog, och med den växer förtroende och tillhörighet. Det är det som gör att gruppen kan arbeta på riktigt, och det är det som byggs under veckan.</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Tre spelregler för veckan</span>
            <div className="steps">
              {SPELREGLER.map((s, i) => (
                <div key={s.titel} className="step"><div className="step__n">0{i + 1}</div><div><h3 className="h3">{s.titel}</h3><p className="muted">{s.text}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="effekter">
        <div className="container">
          <span className="eyebrow">Effekter av UGL</span>
          <h2 className="h2">Vad forskningen <em className="accent">visar.</em></h2>
          <p className="lead muted">Karolinska Institutet och Försvarshögskolan har följt deltagare och deras medarbetare upp till två år efter kursen. Den största effekten, enligt både cheferna och deras medarbetare, var ett ökat självförtroende i ledarrollen. Hos dem som reflekterade regelbundet och fick stöd på jobbet fanns förändringen kvar efter två år.</p>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel" style={{ textAlign: "center" }}>
            <h2 className="h2">Se kommande <em className="accent">kursveckor.</em></h2>
            <p className="muted">Fem dagar. Två handledare. En grupp som byggs från grunden.</p>
            <div className="mt-1" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/kurser" className="btn">Kursdatum och priser</Link>
              <Link href="/fragor-och-svar" className="btn btn--ghost">Vanliga frågor</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
