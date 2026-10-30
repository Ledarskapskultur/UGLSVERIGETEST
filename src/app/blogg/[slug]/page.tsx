import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";
import { INLAGG, FORFATTARE, hittaInlagg } from "@/data/blogg";
import { formatDatum } from "@/data/kurser";

export function generateStaticParams() {
  return INLAGG.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = hittaInlagg(slug);
  if (!i) return {};
  return { title: i.titel, description: i.ingress, alternates: { canonical: `/blogg/${i.slug}` }, openGraph: { title: i.titel, description: i.ingress, url: absUrl(`/blogg/${i.slug}`), type: "article" } };
}

function Stycke({ rad }: { rad: string }) {
  if (rad.startsWith("### ")) return <h3>{rad.slice(4)}</h3>;
  if (rad.startsWith("## ")) return <h2>{rad.slice(3)}</h2>;
  if (rad.startsWith("- ")) return <li>{rad.slice(2)}</li>;
  return <p>{rad}</p>;
}

export default async function Inlagg({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = hittaInlagg(slug);
  if (!i) notFound();
  const andra = INLAGG.filter((x) => x.slug !== i.slug).slice(0, 2);
  // Gruppera punktlistor
  const block: React.ReactNode[] = [];
  let lista: string[] = [];
  i.text.forEach((rad, idx) => {
    if (rad.startsWith("- ")) { lista.push(rad); return; }
    if (lista.length) { block.push(<ul key={`l${idx}`}>{lista.map((r, j) => <Stycke key={j} rad={r} />)}</ul>); lista = []; }
    block.push(<Stycke key={idx} rad={rad} />);
  });
  if (lista.length) block.push(<ul key="lend">{lista.map((r, j) => <Stycke key={j} rad={r} />)}</ul>);

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Blogg", path: "/blogg" }, { name: i.titel, path: `/blogg/${i.slug}` }])} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BlogPosting", headline: i.titel, description: i.ingress, datePublished: i.datum, dateModified: i.datum, inLanguage: "sv",
        author: { "@type": "Person", name: FORFATTARE.namn, jobTitle: FORFATTARE.titel, sameAs: [SITE.personLinkedin] },
        publisher: { "@id": SITE.url + "/#organization" }, mainEntityOfPage: absUrl(`/blogg/${i.slug}`),
      }} />
      <article className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Du är här"><Link href="/">Start</Link> / <Link href="/blogg">Blogg</Link></nav>
          <span className="eyebrow">{i.kategori} · {formatDatum(i.datum)} · {i.lastid} läsning</span>
          <h1 className="h1" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", maxWidth: "22ch" }}>{i.titel}</h1>
          <div className="split mt-2">
            <div className="prose">
              <p className="lead">{i.ingress}</p>
              {i.kortSvar && (
                <div className="card" style={{ margin: "8px 0 24px" }}>
                  <span className="card__n">Kort svar</span>
                  <p style={{ margin: 0 }}>{i.kortSvar}</p>
                </div>
              )}
              {block}
              {i.kallor && i.kallor.length > 0 && (
                <>
                  <h2>Källor</h2>
                  <ul>{i.kallor.map((k) => <li key={k}>{k}</li>)}</ul>
                </>
              )}
              <p className="muted mt-2" style={{ fontSize: "0.9375rem" }}>Skrivet av {FORFATTARE.namn}, {FORFATTARE.titel}. Publicerat {formatDatum(i.datum)}.</p>
            </div>
            <aside className="stack">
              <div className="card">
                <span className="card__n">Nästa steg</span>
                <p className="muted" style={{ fontSize: "0.9375rem", marginBottom: 12 }}>Se kommande kursveckor med pris och kursgård.</p>
                <Link href="/kurser" className="btn btn--sm">Kursdatum och bokning</Link>
              </div>
              {andra.map((a) => (
                <div key={a.slug} className="card">
                  <span className="card__n">Läs också</span>
                  <Link href={`/blogg/${a.slug}`} className="h3" style={{ display: "block" }}>{a.titel}</Link>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
