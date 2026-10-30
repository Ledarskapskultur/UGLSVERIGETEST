import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl } from "@/lib/site";
import { INLAGG, FORFATTARE, KATEGORIER } from "@/data/blogg";
import { formatDatum } from "@/data/kurser";

export const metadata: Metadata = {
  title: "Blogg om UGL, grupper och ledarskap",
  description: "Texter om gruppdynamik, ledarskap, kommunikation och UGL-utbildningen, skrivna av en handledare certifierad av Försvarshögskolan.",
  alternates: { canonical: "/blogg" },
  openGraph: { title: "Blogg | UGL Sverige", url: absUrl("/blogg") },
};

export default function Blogg() {
  const sorterade = [...INLAGG].sort((a, b) => (a.datum < b.datum ? 1 : -1));
  const utvald = sorterade.find((i) => i.kortSvar) ?? sorterade[0];
  const ovriga = sorterade.filter((i) => i.slug !== utvald.slug);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Blogg", path: "/blogg" }])} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Blogg</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", maxWidth: "16ch" }}>Om grupper, ledarskap och UGL</h1>
          <p className="lead muted mt-1" style={{ maxWidth: "60ch" }}>Korta texter om det folk undrar över före, under och efter en UGL-vecka. Skrivna av {FORFATTARE.namn}, {FORFATTARE.titel}.</p>

          <article className="panel panel--dark split mt-2">
            <div>
              <span className="eyebrow">Utvald artikel · {utvald.kategori}</span>
              <h2 className="h2"><Link href={`/blogg/${utvald.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{utvald.titel}</Link></h2>
              <p className="muted">{utvald.ingress}</p>
              <p className="mt-1"><Link href={`/blogg/${utvald.slug}`} className="btn btn--light btn--sm">Läs artikeln</Link></p>
            </div>
            {utvald.kortSvar && (
              <div className="card card--dark" style={{ background: "var(--dark-2)" }}>
                <span className="card__n">Kort svar</span>
                <p style={{ fontSize: "0.9375rem" }}>{utvald.kortSvar}</p>
              </div>
            )}
          </article>

          <div className="mt-2">
            <span className="eyebrow">Ämnen</span>
            <div className="grid grid-4 mt-1">
              {KATEGORIER.map((k) => {
                const antal = INLAGG.filter((i) => i.kategori === k.namn).length;
                return (
                  <div key={k.namn} className="card" style={{ padding: 20 }}>
                    <span className="card__n">{antal} {antal === 1 ? "artikel" : "artiklar"}</span>
                    <h2 className="h3" style={{ fontSize: "1.125rem" }}>{k.namn}</h2>
                    <p className="muted" style={{ fontSize: "0.9rem" }}>{k.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-2">
            <span className="eyebrow">Alla artiklar</span>
            <div className="grid grid-3 mt-1">
              {[utvald, ...ovriga].map((i) => (
                <article key={i.slug} className="card">
                  <span className="card__n">{i.kategori} · {i.lastid}</span>
                  <h2 className="h3"><Link href={`/blogg/${i.slug}`}>{i.titel}</Link></h2>
                  <p className="muted" style={{ fontSize: "0.9375rem" }}>{i.ingress}</p>
                  <p className="muted mt-1" style={{ fontSize: "0.85rem" }}>{formatDatum(i.datum)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
