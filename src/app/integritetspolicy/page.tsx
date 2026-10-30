import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Hur UGL Sverige behandlar personuppgifter vid bokning, intresseanmälan, bevakning och nyhetsbrev.",
  alternates: { canonical: "/integritetspolicy" },
};

export default function Integritet() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Integritetspolicy</span>
        <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Så behandlar vi <em className="accent">personuppgifter.</em></h1>
        <div className="prose mt-2">
          <p className="lead">Personuppgiftsansvarig är {SITE.company}, org.nr {SITE.orgnr}, {SITE.address.street}, {SITE.address.postal} {SITE.address.city}. Kontakt: {SITE.email}.</p>
          <h2>Vilka uppgifter och varför</h2>
          <ul>
            <li><strong>Bokning och intresseanmälan:</strong> namn, e-post, telefon, organisation och vald kursvecka, samt i nästa steg deltagaruppgifter och fakturauppgifter. Används för att hantera bokningen och delas med arrangören som genomför kursen. Rättslig grund: fullgörande av avtal.</li>
            <li><strong>Bevakning och nyhetsbrev:</strong> e-post och vald del av landet. Används för att skicka besked om nya kursveckor och nyhetsbrev. Rättslig grund: samtycke, som du återkallar med avregistreringslänken i varje utskick.</li>
            <li><strong>Ring mig och samtalsbokning:</strong> namn, telefon, e-post och det du skriver. Används för att kontakta dig. Rättslig grund: berättigat intresse av att besvara din förfrågan.</li>
            <li><strong>Omdömen:</strong> namn, roll och text publiceras bara efter ditt uttryckliga godkännande.</li>
          </ul>
          <h2>Hur länge</h2>
          <p>Bokningsuppgifter sparas så länge det krävs för bokföring (sju år enligt bokföringslagen). Intresseanmälningar och bevakningar sparas tills du avregistrerar dig eller som längst 24 månader efter senaste kontakt.</p>
          <h2>Vem som får uppgifterna</h2>
          <p>Arrangören av den kursvecka du bokat, samt de leverantörer vi använder för drift, e-post och lagring. Vi säljer aldrig uppgifter vidare.</p>
          <h2>Dina rättigheter</h2>
          <p>Du har rätt att få ut, rätta och radera dina uppgifter, att invända mot behandling och att klaga hos Integritetsskyddsmyndigheten. Skriv till {SITE.email}.</p>
          <h2>Cookies</h2>
          <p>Sajten använder bara nödvändiga cookies och anonym besöksstatistik utan spårning över webbplatser. Inga marknadsföringscookies sätts.</p>
          <p className="muted" style={{ fontSize: "0.9375rem" }}>Senast uppdaterad 30 oktober 2026.</p>
        </div>
      </div>
    </section>
  );
}
