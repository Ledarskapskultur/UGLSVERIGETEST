export const revalidate = 86400; // bygg om dagligen så att passerade veckor försvinner

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl } from "@/lib/site";
import { ORTER, REGIONER, kurserForOrt, kommande, kursgardarForOrt } from "@/data/kurser";

export const metadata: Metadata = {
  title: "UGL nära dig: kursorter och kursgårdar",
  description: "UGL hålls på kursgård med internat i Stockholmsområdet, Göteborg, Halland, Skåne, Jönköping och Sundsvall. Välj ort och se kommande kursveckor med pris och bokning.",
  alternates: { canonical: "/ugl" },
  openGraph: { title: "UGL nära dig: kursorter | UGL Sverige", url: absUrl("/ugl") },
};

export default function Kursorter() {
  const idag = new Date().toISOString().slice(0, 10);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Kursorter", path: "/ugl" }])} />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Kursorter</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>UGL nära <em className="accent">dig.</em></h1>
          <p className="lead muted mt-1">Välj din ort, så visar vi kursveckorna som ligger närmast, med kursgård, pris och bokning. Kurserna hålls på kursgård med internat i Stockholmsområdet, Göteborg, Halland, Skåne, Jönköping och Sundsvall.</p>
        </div>
      </section>
      {REGIONER.map((region) => (
        <section key={region} className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2 className="h2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)" }}>{region}</h2>
            <div className="grid grid-3">
              {ORTER.filter((o) => o.region === region).map((o) => {
                const kommandeHar = kurserForOrt(o.slug).filter((k) => k.start >= idag);
                return (
                  <Link key={o.slug} href={`/ugl/${o.slug}`} className="card" style={{ display: "block" }}>
                    <span className="card__n">{kommandeHar.length} kommande veckor</span>
                    <span className="h3" style={{ display: "block", marginBottom: 6 }}>UGL i {o.namn}</span>
                    <span className="muted" style={{ fontSize: "0.9375rem" }}>{kursgardarForOrt(o.slug).join(", ")}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel split">
            <div>
              <span className="eyebrow">Bor du någon annanstans?</span>
              <h2 className="h2">Hela listan, <em className="accent">alla orter.</em></h2>
              <p className="muted">På kurssidan filtrerar du på region och ser alla {kommande().length} kommande veckor. Vill du ha UGL på din ort? Vi samarbetar med <Link href="/kommun">kommuner och regioner</Link> och med <Link href="/foretag">företag med egen anläggning</Link>.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}><Link href="/kurser" className="btn">Alla kursdatum</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
