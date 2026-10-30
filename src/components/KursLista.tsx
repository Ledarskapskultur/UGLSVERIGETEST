"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Kurs } from "@/data/kurser";
import { formatKr, formatPeriod } from "@/data/kurser";
import { Formular } from "./Formular";

type Props = {
  kurser: Kurs[];
  /** Visa filter för region och ort */
  filter?: boolean;
  /** Antal rader innan "Visa fler" */
  initialt?: number;
  visaOrtLank?: boolean;
};

export function KursLista({ kurser, filter = false, initialt = 8, visaOrtLank = true }: Props) {
  const [region, setRegion] = useState("Alla");
  const [baraLediga, setBaraLediga] = useState(false);
  const [antal, setAntal] = useState(initialt);
  const [oppen, setOppen] = useState<{ id: string; typ: "boka" | "intresse" } | null>(null);

  const regioner = useMemo(() => ["Alla", ...Array.from(new Set(kurser.map((k) => k.region)))], [kurser]);

  const lista = useMemo(
    () => kurser.filter((k) => (region === "Alla" || k.region === region) && (!baraLediga || k.status === "L")),
    [kurser, region, baraLediga]
  );

  const synliga = lista.slice(0, antal);

  return (
    <div>
      {filter && (
        <div className="filters" role="group" aria-label="Filtrera kursveckor">
          {regioner.map((r) => (
            <button key={r} className={`filter${region === r ? " is-on" : ""}`} onClick={() => { setRegion(r); setAntal(initialt); }}>{r === "Alla" ? "Alla regioner" : r}</button>
          ))}
          <button className={`filter${baraLediga ? " is-on" : ""}`} onClick={() => setBaraLediga(!baraLediga)}>Visa bara lediga</button>
        </div>
      )}
      <p className="form__note" style={{ marginBottom: 12 }}>{lista.length} kursveckor{region !== "Alla" ? ` i ${region}` : ""}. Boka plats när du vet vilken vecka. Anmäl intresse om du vill hålla flera veckor öppna. Inget är bindande förrän vi har bekräftat.</p>
      <ul className="kurs-list">
        {synliga.map((k) => {
          const label = `UGL vecka ${k.vecka}, ${formatPeriod(k.start, k.slut)}, ${k.kursgard}, ${k.ort}`;
          const arOppen = oppen?.id === k.id;
          return (
            <li key={k.id} id={k.id}>
              <article className={`kurs${k.status === "F" ? " kurs--full" : ""}`} aria-label={label}>
                <div className="kurs__week"><small>Vecka</small>{k.vecka}</div>
                <div>
                  <div className="kurs__dates">{formatPeriod(k.start, k.slut)}</div>
                  <div className="kurs__place">
                    {k.kursgard}, {visaOrtLank ? <Link href={`/ugl/${k.ortSlug}`}>{k.ort}</Link> : k.ort}
                    {k.status === "F" && <> · <span className="pill pill--full">Fullbokad</span></>}
                  </div>
                  {k.handledare.length > 0 && <div className="kurs__hand">Handledare: {k.handledare.join(", ")}</div>}
                </div>
                <div className="kurs__price">
                  <strong>{formatKr(k.totalpris)}</strong>
                  <span>{k.alltIngar ? "exkl. moms, allt ingår" : `exkl. moms · kurs ${formatKr(k.kurspris)} + kost och logi ${formatKr(k.logipris)}`}</span>
                  <div className="kurs__actions">
                    {k.status === "L" ? (
                      <>
                        <button className="btn btn--sm" onClick={() => setOppen(arOppen && oppen.typ === "boka" ? null : { id: k.id, typ: "boka" })}>Boka plats</button>
                        <button className="btn btn--sm btn--ghost" onClick={() => setOppen(arOppen && oppen.typ === "intresse" ? null : { id: k.id, typ: "intresse" })}>Anmäl intresse</button>
                      </>
                    ) : (
                      <button className="btn btn--sm btn--ghost" onClick={() => setOppen(arOppen ? null : { id: k.id, typ: "intresse" })}>Meddela mig vid avbokning</button>
                    )}
                  </div>
                </div>
              </article>
              {arOppen && (
                <div className="card card--sand" style={{ marginTop: 6 }}>
                  <p className="h3" style={{ marginBottom: 12 }}>{oppen.typ === "boka" ? "Reservera plats" : k.status === "F" ? "Meddela mig om en plats blir ledig" : "Anmäl intresse"}</p>
                  <Formular
                    typ={oppen.typ}
                    kurs={{ id: k.id, label }}
                    knapp={oppen.typ === "boka" ? "Reservera plats" : "Skicka"}
                    tack={oppen.typ === "boka" ? "Tack. Platsen är reserverad i fem arbetsdagar. Vi bekräftar inom två arbetsdagar och skickar då en länk där resten av uppgifterna fylls i." : "Tack. Vi hör av oss inom två arbetsdagar."}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {antal < lista.length && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="btn btn--ghost" onClick={() => setAntal(antal + 12)}>Visa fler ({lista.length - antal} till)</button>
        </div>
      )}
    </div>
  );
}
