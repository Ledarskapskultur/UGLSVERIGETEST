import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";
import { EFFEKTER } from "@/data/innehall";

export const metadata: Metadata = {
  title: "Forskningen bakom UGL: effekter och teoretisk grund",
  description: "Vad forskningen säger om UGL: Karolinska Institutets och Försvarshögskolans uppföljning av deltagare och medarbetare upp till två år efter kursen, och teorierna kursen vilar på.",
  alternates: { canonical: "/forskning" },
  openGraph: { title: "Forskningen bakom UGL | UGL Sverige", url: absUrl("/forskning") },
};

export default function Forskning() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Forskning", path: "/forskning" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "Forskningen bakom UGL", inLanguage: "sv", author: { "@type": "Person", name: SITE.person, jobTitle: SITE.personTitle }, publisher: { "@id": SITE.url + "/#organization" }, dateModified: "2026-10-30", mainEntityOfPage: absUrl("/forskning") }} />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Forskning</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Vad forskningen säger <em className="accent">om UGL.</em></h1>
          <div className="prose mt-2">
            <p className="lead">UGL har använts sedan 1981 och ägs av Försvarshögskolan sedan år 2000. Effekten har utvärderats av forskare vid Karolinska Institutet och Försvarshögskolan (Sandahl m.fl. 2019, Söderhjelm m.fl. 2018), som följt deltagare och deras medarbetare i upp till två år efter kursen. Den här sidan sammanfattar vad uppföljningen visade och vilka teorier kursen vilar på.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Uppföljningen</span>
            <h2 className="h2">Effekten höll i sig, särskilt hos dem som <em className="accent">fick stöd efteråt.</em></h2>
            <div className="prose muted">
              <p>Uppföljningen mätte inte bara vad deltagarna själva tyckte, utan också hur deras medarbetare uppfattade dem före och efter kursen. Medarbetarna skattade cheferna som mer utvecklande ledare efter UGL, och nivån låg kvar sex månader senare. Hos deltagare som reflekterade regelbundet och fick stöd på arbetsplatsen fanns förändringen kvar efter två år.</p>
              <p>Den största effekten, enligt både cheferna och deras medarbetare, var ett ökat självförtroende i ledarrollen. Deltagarna började också förändra arbetssätt och samarbete i sina egna team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">Tre effekter</span>
          <h2 className="h2">Vad som förändras <em className="accent">i vardagen.</em></h2>
          <div className="grid grid-3 mt-1">
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
        <div className="container split">
          <div>
            <span className="eyebrow">Teoretisk grund</span>
            <h2 className="h2">Vad kursen <em className="accent">vilar på.</em></h2>
            <p className="muted">UGL är inte en metod att följa utan en upplevelsebaserad utbildning. Innehållet bygger på etablerad forskning om grupper och ledarskap, och Försvarshögskolan uppdaterar konceptet löpande.</p>
          </div>
          <div className="steps">
            <div className="step"><div className="step__n">01</div><div><h3 className="h3">Gruppers utveckling</h3><p className="muted">Susan Wheelans modell för gruppers utvecklingsfaser (IMGD) beskriver hur en grupp går från beroende och osäkerhet till arbete och produktivitet, och vad ledaren behöver göra i varje fas. Deltagarna upplever faserna i sin egen grupp under veckan.</p></div></div>
            <div className="step"><div className="step__n">02</div><div><h3 className="h3">Försvarshögskolans ledarskapsmodell</h3><p className="muted">Modellen beskriver ledarbeteenden som utvecklande, konventionella och destruktiva, och hur de påverkar medarbetare. Den ligger också till grund för kursen Utvecklande ledarskap, UL.</p></div></div>
            <div className="step"><div className="step__n">03</div><div><h3 className="h3">Kommunikation, feedback och konflikt</h3><p className="muted">Hur grupper hanterar öppenhet, återkoppling och meningsskiljaktigheter, och hur det påverkar förtroende och beslut. Tränas i gruppen snarare än föreläses.</p></div></div>
            <div className="step"><div className="step__n">04</div><div><h3 className="h3">Upplevelsebaserat lärande</h3><p className="muted">Lärandet sker genom att göra, reflektera, dra slutsatser och pröva igen. Därför avslöjas inte uppgifterna i förväg: upplevelsen blir starkare när den möts i stunden.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel split">
            <div>
              <span className="eyebrow">Källor</span>
              <h2 className="h2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)" }}>Läs vidare</h2>
              <ul className="prose muted" style={{ listStyle: "disc", paddingLeft: "1.3em" }}>
                <li>Sandahl, C. m.fl. (2019) och Söderhjelm, T. m.fl. (2018): uppföljningar av UGL-deltagare och deras medarbetare, genomförda vid Karolinska Institutet och Försvarshögskolan, med mätningar upp till två år efter kursen.</li>
                <li>Wheelan, S. A. (2013). <em>Att skapa effektiva team</em>. Studentlitteratur. Modellen för gruppers utveckling (IMGD).</li>
                <li>Larsson, G. m.fl.: Utvecklande ledarskap, Försvarshögskolans ledarskapsmodell, som ligger till grund för både UGL och kursen UL.</li>
                <li>Kolb, D. A. (1984). <em>Experiential Learning</em>. Grunden för det upplevelsebaserade lärandet i UGL.</li>
                <li><a href="https://www.fhs.se" rel="noopener">Försvarshögskolan</a>, som äger konceptet UGL, certifierar handledarna och förnyade kursen senast 2022.</li>
              </ul>
              <p className="muted mt-1" style={{ fontSize: "0.9375rem" }}>Har du frågor om forskningen, hör av dig till <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
            </div>
            <div className="card">
              <span className="card__n">Vill du uppleva det själv?</span>
              <p className="muted" style={{ fontSize: "0.9375rem", marginBottom: 12 }}>Kommande kursveckor över hela landet.</p>
              <Link href="/kurser" className="btn btn--sm">Kursdatum och bokning</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
