import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Villkor för bokning",
  description: "Så fungerar bokning, bekräftelse, betalning och avbokning av UGL-kurser via UGL Sverige.",
  alternates: { canonical: "/villkor" },
};

export default function Villkor() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Villkor</span>
        <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Villkor för <em className="accent">bokning.</em></h1>
        <div className="prose mt-2">
          <p className="lead">Det här gäller när du bokar en UGL-kurs via UGL Sverige. Villkoren är skrivna för att vara begripliga; hör av dig om något är oklart.</p>
          <h2>1. Vem du bokar hos</h2>
          <p>UGL Sverige ({SITE.company}, org.nr {SITE.orgnr}) förmedlar platser på öppna UGL-kurser som genomförs av fristående arrangörer. Vilken arrangör som genomför en viss kursvecka framgår av bekräftelsen. Avtalet om kursen ingås mellan deltagaren (eller deltagarens arbetsgivare) och arrangören; UGL Sverige hanterar anmälan, bekräftelse och kontakt fram till kursstart.</p>
          <h2>2. Anmälan och bekräftelse</h2>
          <p>En anmälan via sajten är en reservation och är inte bindande förrän UGL Sverige har bekräftat platsen skriftligen, normalt inom två arbetsdagar. Reservationen hålls i fem arbetsdagar. Vid bekräftelsen får du en länk där övriga uppgifter fylls i (deltagaruppgifter, kostönskemål, fakturamottagare). Först när platsen är bekräftad är den din.</p>
          <h2>3. Pris och betalning</h2>
          <p>Priset anges exklusive moms och består av kursavgift samt kost och logi, om inte annat anges. Resa till och från kursgården ingår inte. Betalning sker mot faktura efter bekräftad plats, med 30 dagars betalningsvillkor om inget annat anges på fakturan. Priset är detsamma som vid bokning direkt hos arrangören.</p>
          <h2>4. Avbokning och ombokning</h2>
          <p>Avbokningsreglerna varierar mellan arrangörer och kursgårdar och anges för varje kursvecka i bekräftelsen. Hör av dig så snart du vet att du får förhinder, så hjälper vi till att hitta en annan vecka om det går. Avbokning ska ske skriftligt till {SITE.email}.</p>
          <h2>5. Inställd kurs</h2>
          <p>Om en kursvecka ställs in av arrangören, till exempel vid för få deltagare, erbjuds du plats på en annan vecka eller återbetalning av det som betalats. Ersättning för resa eller andra kostnader utgår inte.</p>
          <h2>6. Gruppens sammansättning</h2>
          <p>UGL genomförs i främlingsgrupp. Personer som känner varandra sedan tidigare, till exempel kollegor, kan inte gå samma vecka. Vi stämmer av detta vid bekräftelsen och kan behöva föreslå en annan vecka.</p>
          <h2>7. Personuppgifter</h2>
          <p>Uppgifter du lämnar används för att hantera din bokning och delas med arrangören som genomför kursen. Läs mer i vår <Link href="/integritetspolicy">integritetspolicy</Link>.</p>
          <p className="muted" style={{ fontSize: "0.9375rem" }}>Senast uppdaterad 30 oktober 2026.</p>
        </div>
      </div>
    </section>
  );
}
