import type { Metadata } from "next";
import { Formular } from "@/components/Formular";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt: vi ringer upp dig",
  description: "Frågor om UGL eller hjälp att välja kursvecka? Lämna ditt nummer så ringer vi upp inom en arbetsdag. Eller mejla kontakt@uglsverige.store.",
  alternates: { canonical: "/kontakt" },
  openGraph: { title: "Kontakt | UGL Sverige", url: absUrl("/kontakt") },
};

export default function Kontakt() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Kontakt", path: "/kontakt" }])} />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Kontakt</span>
            <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Vi ringer <em className="accent">upp dig.</em></h1>
            <p className="lead muted mt-1">Osäker på vilken vecka, om UGL passar, eller hur du får det godkänt av din chef? Lämna ditt nummer så ringer vi upp inom en arbetsdag. Inget säljsamtal, bara svar på dina frågor.</p>
            <p className="mt-2"><strong>{SITE.person}</strong><br /><span className="muted">{SITE.personTitle}</span><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a><br />{SITE.company}<br />{SITE.address.street}, {SITE.address.postal} {SITE.address.city}</p>
          </div>
          <div className="card"><Formular typ="ring" knapp="Ring mig" not="Vi ringer inom en arbetsdag, på det nummer du anger." tack="Tack. Vi ringer dig inom en arbetsdag." /></div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }} id="nyhetsbrev">
        <div className="container">
          <div className="panel split">
            <div>
              <span className="eyebrow">Nyhetsbrev</span>
              <h2 className="h2">Insikter om UGL, och kursveckor <em className="accent">som passar.</em></h2>
              <p className="muted">Några gånger per år, inte varje vecka. Kursveckor i vald del av landet. Avsluta när som helst.</p>
            </div>
            <Formular typ="nyhetsbrev" knapp="Anmäl mig" not="Adressen används bara till detta och lämnas inte vidare." tack="Tack. Du är anmäld." />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }} id="omdome">
        <div className="container">
          <div className="panel panel--dark split">
            <div>
              <span className="eyebrow">Har du gått UGL med oss?</span>
              <h2 className="h2">Dela vad veckan <em className="accent">gav dig.</em></h2>
              <p className="muted">Omdömen publiceras med namn och roll efter ditt godkännande. Vi hör av oss innan något publiceras.</p>
            </div>
            <div className="card"><Formular typ="omdome" knapp="Skicka omdöme" not="Vi kontaktar dig innan omdömet publiceras." tack="Tack för att du delar. Vi hör av oss innan något publiceras." /></div>
          </div>
        </div>
      </section>
    </>
  );
}
