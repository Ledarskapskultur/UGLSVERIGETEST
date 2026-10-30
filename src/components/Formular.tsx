"use client";
import { useState } from "react";

export type FormTyp = "boka" | "intresse" | "bevaka" | "ring" | "nyhetsbrev" | "foretag" | "kommun" | "omdome";

type Props = {
  typ: FormTyp;
  /** Förifyllda uppgifter, t.ex. vald kursvecka */
  kurs?: { id: string; label: string };
  knapp?: string;
  not?: string;
  tack?: string;
  kompakt?: boolean;
};

const LANDSDELAR = ["Hela landet", "Norr", "Mitt", "Stockholm", "Väst", "Syd"];

export function Formular({ typ, kurs, knapp, not, tack, kompakt }: Props) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = { typ };
    fd.forEach((v, k) => { data[k] = String(v); });
    if (kurs) { data.kursId = kurs.id; data.kurs = kurs.label; }
    data.sida = typeof window !== "undefined" ? window.location.pathname : "";
    try {
      const r = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(r.ok ? "ok" : "err");
    } catch {
      setState("err");
    }
  }

  if (state === "ok") {
    return <div className="form__ok" role="status">{tack ?? "Tack. Vi hör av oss inom två arbetsdagar."}</div>;
  }

  const beh = typ === "boka" || typ === "intresse" || typ === "ring" || typ === "foretag" || typ === "kommun";

  return (
    <form className="form" onSubmit={onSubmit}>
      <input className="hp" type="text" name="webbplats" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {kurs && <p className="form__note">Gäller: <strong>{kurs.label}</strong></p>}

      {(typ === "foretag" || typ === "kommun") && (
        <div className="field">
          <label htmlFor={`${typ}-org`}>{typ === "kommun" ? "Kommun eller region" : "Företag"}</label>
          <input id={`${typ}-org`} name="organisation" required />
        </div>
      )}

      {typ !== "bevaka" && typ !== "nyhetsbrev" && (
        <div className={kompakt ? "field" : "form__row"}>
          <div className="field"><label htmlFor={`${typ}-namn`}>Namn</label><input id={`${typ}-namn`} name="namn" autoComplete="name" required /></div>
          {(typ === "foretag" || typ === "kommun") && (
            <div className="field"><label htmlFor={`${typ}-roll`}>Roll</label><input id={`${typ}-roll`} name="roll" /></div>
          )}
          {typ === "omdome" && (
            <div className="field"><label htmlFor={`${typ}-roll`}>Roll och organisation</label><input id={`${typ}-roll`} name="roll" placeholder="t.ex. Enhetschef, Region X" /></div>
          )}
        </div>
      )}

      {typ === "nyhetsbrev" && (
        <div className="form__row">
          <div className="field"><label htmlFor="nb-namn">Namn</label><input id="nb-namn" name="namn" autoComplete="name" required /></div>
          <div className="field"><label htmlFor="nb-org">Organisation (valfritt)</label><input id="nb-org" name="organisation" /></div>
        </div>
      )}

      {(typ === "boka" || typ === "intresse") && (
        <div className="field"><label htmlFor={`${typ}-org`}>Organisation</label><input id={`${typ}-org`} name="organisation" autoComplete="organization" /></div>
      )}

      <div className={typ === "bevaka" ? "form__row" : "form__row"}>
        <div className="field"><label htmlFor={`${typ}-epost`}>E-post</label><input id={`${typ}-epost`} type="email" name="epost" autoComplete="email" required /></div>
        {beh && (
          <div className="field"><label htmlFor={`${typ}-tel`}>Mobil</label><input id={`${typ}-tel`} type="tel" name="telefon" autoComplete="tel" required={typ === "ring"} /></div>
        )}
        {(typ === "bevaka" || typ === "nyhetsbrev") && (
          <div className="field">
            <label htmlFor={`${typ}-del`}>Del av landet</label>
            <select id={`${typ}-del`} name="landsdel" defaultValue="Hela landet">{LANDSDELAR.map((l) => <option key={l}>{l}</option>)}</select>
          </div>
        )}
      </div>

      {typ === "kommun" && (
        <div className="field"><label htmlFor="kommun-ort">Ort</label><input id="kommun-ort" name="ort" required /></div>
      )}
      {typ === "foretag" && (
        <div className="field"><label htmlFor="foretag-antal">Ungefär hur många ska gå per år?</label><input id="foretag-antal" name="antal" inputMode="numeric" /></div>
      )}

      {typ === "nyhetsbrev" && (
        <div className="field">
          <label>Jag vill ha</label>
          <div className="checks">
            <label><input type="checkbox" name="vill_kursveckor" value="ja" defaultChecked /> Besked om kursveckor</label>
            <label><input type="checkbox" name="vill_nyhetsbrev" value="ja" defaultChecked /> Nyhetsbrevet</label>
          </div>
        </div>
      )}

      {typ === "omdome" && (
        <>
          <div className="field">
            <label htmlFor="omdome-betyg">Betyg 1 till 5</label>
            <select id="omdome-betyg" name="betyg" defaultValue="5">{[5, 4, 3, 2, 1].map((n) => <option key={n}>{n}</option>)}</select>
          </div>
          <div className="field"><label htmlFor="omdome-text">Vad gav veckan dig?</label><textarea id="omdome-text" name="meddelande" required /></div>
          <div className="field"><label htmlFor="omdome-gard">Kursgård och vecka (valfritt)</label><input id="omdome-gard" name="kursgard" /></div>
        </>
      )}

      {(typ === "ring" || typ === "foretag" || typ === "kommun") && (
        <div className="field">
          <label htmlFor={`${typ}-medd`}>{typ === "kommun" ? "Kort om orten och läget (valfritt)" : typ === "foretag" ? "Något mer vi bör veta (valfritt)" : "Vad gäller det? (valfritt)"}</label>
          <textarea id={`${typ}-medd`} name="meddelande" />
        </div>
      )}

      {(typ === "boka" || typ === "intresse") && (
        <div className="field"><label htmlFor={`${typ}-medd`}>Något vi bör veta (valfritt)</label><textarea id={`${typ}-medd`} name="meddelande" /></div>
      )}

      <div>
        <button className="btn" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Skickar..." : knapp ?? "Skicka"}
        </button>
      </div>
      {state === "err" && <p className="form__note" role="alert">Något gick fel. Mejla oss direkt på kontakt@uglsverige.store så hjälper vi dig.</p>}
      <p className="form__note">{not ?? "Vi hör av oss inom två arbetsdagar. Inget är bindande förrän vi har bekräftat. Uppgifterna används bara för det här ärendet."}</p>
    </form>
  );
}
