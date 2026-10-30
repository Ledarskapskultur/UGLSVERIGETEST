export const revalidate = 86400; // bygg om dagligen så att passerade veckor försvinner

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KursLista } from "@/components/KursLista";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { courseLd, breadcrumbLd } from "@/lib/schema";
import { absUrl } from "@/lib/site";
import { ORTER, kurserForOrt, kursgardarForOrt, formatKr } from "@/data/kurser";

export function generateStaticParams() {
  return ORTER.map((o) => ({ ort: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ort: string }> }): Promise<Metadata> {
  const { ort } = await params;
  const o = ORTER.find((x) => x.slug === ort);
  if (!o) return {};
  const gardar = kursgardarForOrt(o.slug);
  return {
    title: `UGL i ${o.namn}: kursdatum, kursgårdar och pris`,
    description: `UGL-kurser i ${o.namn} på ${gardar.join(" och ")}. Kommande kursveckor med datum, pris och bokning. Fem dagar på kursgård med två certifierade handledare.`,
    alternates: { canonical: `/ugl/${o.slug}` },
    openGraph: { title: `UGL i ${o.namn} | UGL Sverige`, url: absUrl(`/ugl/${o.slug}`) },
  };
}

export default async function OrtSida({ params }: { params: Promise<{ ort: string }> }) {
  const { ort } = await params;
  const o = ORTER.find((x) => x.slug === ort);
  if (!o) notFound();
  const idag = new Date().toISOString().slice(0, 10);
  const alla = kurserForOrt(o.slug);
  const kurser = alla.filter((k) => k.start >= idag);
  const gardar = kursgardarForOrt(o.slug);
  const handledare = [...new Set(alla.flatMap((k) => k.handledare))];
  const priser = [...new Set(kurser.map((k) => k.totalpris))].sort((a, b) => a - b);
  const andraOrter = ORTER.filter((x) => x.region === o.region && x.slug !== o.slug);

  return (
    <>
      <JsonLd data={courseLd(kurser, absUrl(`/ugl/${o.slug}`))} />
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Kursorter", path: "/ugl" }, { name: o.namn, path: `/ugl/${o.slug}` }])} />
      <section className="section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Du är här"><Link href="/">Start</Link> / <Link href="/ugl">Kursorter</Link> / {o.namn}</nav>
          <span className="eyebrow">{o.region}</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>UGL i <em className="accent">{o.namn}.</em></h1>
          <p className="lead muted mt-1">{o.intro}</p>
          <div className="grid grid-3 mt-2">
            <div className="card kpi"><div className="kpi__label">Kommande veckor</div><div className="kpi__value">{kurser.length}</div></div>
            <div className="card kpi"><div className="kpi__label">{gardar.length === 1 ? "Kursgård" : "Kursgårdar"}</div><div className="h3 mt-1">{gardar.join(", ")}</div></div>
            <div className="card kpi"><div className="kpi__label">Pris, exkl. moms</div><div className="h3 mt-1">{priser.length > 1 ? `${formatKr(priser[0])} till ${formatKr(priser[priser.length - 1])}` : priser.length === 1 ? formatKr(priser[0]) : "Se kurslistan"}</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel">
            <span className="eyebrow">Kursveckor i {o.namn}</span>
            <h2 className="h2">Välj <em className="accent">vecka.</em></h2>
            {kurser.length > 0 ? (
              <KursLista kurser={kurser} initialt={12} visaOrtLank={false} />
            ) : (
              <p className="muted">Inga planerade veckor just nu. Bevaka orten nedan så hör vi av oss när nya datum släpps.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Så fungerar det här</span>
            <h2 className="h2">Fem dagar på kursgård, <em className="accent">med internat.</em></h2>
            <div className="prose muted">
              <p>Kursen pågår måndag till fredag. Boende i enkelrum och alla måltider ingår, och deltagarna bor på kursgården hela veckan. Gruppen är 8 till 12 personer som inte känner varandra sedan tidigare, med två handledare certifierade av Försvarshögskolan.</p>
              {handledare.length > 0 && <p>Handledare som leder kursveckor i {o.namn}: {handledare.join(", ")}.</p>}
              <p>Priset består av kursavgift och kost och logi, båda exklusive moms. Resa till kursgården tillkommer. <Link href="/vad-ar-ugl">Läs mer om vad UGL är</Link> eller <Link href="/fragor-och-svar">se vanliga frågor</Link>.</p>
            </div>
          </div>
          <div className="card">
            <span className="eyebrow">Bevaka {o.namn}</span>
            <p className="muted" style={{ marginBottom: 14 }}>Få ett mejl när nya veckor släpps i {o.region}.</p>
            <Formular typ="bevaka" knapp="Bevaka" not="Ett mejl per släpp. Avsluta när du vill." tack={`Tack. Du får ett mejl när nya veckor släpps i ${o.region}.`} />
          </div>
        </div>
      </section>

      {andraOrter.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <span className="eyebrow">Fler orter i {o.region}</span>
            <div className="grid grid-4 mt-1">
              {andraOrter.map((a) => <Link key={a.slug} href={`/ugl/${a.slug}`} className="card" style={{ display: "block" }}><span className="h3">UGL i {a.namn}</span></Link>)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
