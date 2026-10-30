import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Formular } from "@/components/Formular";
import { breadcrumbLd } from "@/lib/schema";
import { absUrl, SITE } from "@/lib/site";
import { MALGRUPP } from "@/data/innehall";

export const metadata: Metadata = {
  title: "Vad är UGL? Utveckling av grupp och ledare förklarat",
  description: "UGL (Utveckling av grupp och ledare) är Försvarshögskolans femdagarskurs där du lär dig hur grupper fungerar genom att vara i en. För vem, hur det går till, vad du tar med dig hem och frågorna innan du bestämmer dig.",
  alternates: { canonical: "/vad-ar-ugl" },
  openGraph: { title: "Vad är UGL? | UGL Sverige", url: absUrl("/vad-ar-ugl") },
};

const AUTOPILOT = [
  ["På mötet pratar samma två personer, och resten tystnar.", "Du ser mönstret och vet hur du får in fler röster."],
  ["Du har en åsikt, men säger den först efteråt i korridoren.", "Du säger det du menar, tydligt och respektfullt, när det spelar roll."],
  ["En konflikt ligger och pyr i teamet.", "Du tar upp den i tid, innan den hunnit låsa sig."],
  ["Feedback blir antingen för vag eller för hård.", "Du ger och tar emot feedback som leder framåt."],
  ["Du har blivit chef över dina tidigare kollegor.", "Du hittar din roll och förstår vad gruppen behöver av dig."],
  ["Gruppen är trevlig, men står och stampar.", "Du känner igen vilket skede gruppen är i och vet vad som hjälper den vidare."],
];

const RESAN = [
  ["Början", "Nyfikenhet", "Ni möts som främlingar. Alla är artiga, lite försiktiga och letar efter sin plats."],
  ["Efter hand", "Roller tar form", "Gruppen hittar sitt sätt att arbeta. Någon tar täten, någon avvaktar, och mönster börjar synas."],
  ["Mitt i", "Friktion", "Olika viljor möts. Det kan skava, och det är ofta där det mesta lärandet sker."],
  ["Mot slutet", "Uppriktighet", "Förtroendet växer. Ni ger varandra ärlig feedback som går att använda."],
  ["Sista dagen", "Med dig hem", "Ni avslutar tillsammans, och du gör en plan för det du vill ta med dig."],
];

const FRAGOR = [
  ["Måste jag vara chef?", "Alla roller passar. Medarbetare, specialister och chefer går samma kurs, och blandningen gör att du ser hur andra roller tänker."],
  ["Hur är det att möta främlingar?", "Det gör det lättare att vara öppen. Alla startar på samma villkor, och det som sägs stannar i gruppen."],
  ["Får jag veta vad vi ska göra i förväg?", "Som en film: bäst när ingen har berättat slutet. Kursen handlar om grupper, feedback, konflikter och beslut, och det blir starkast när ni möter uppgifterna tillsammans i stunden."],
  ["Är UGL jobbigt?", "Utmanande, aldrig utlämnande. Det kan väcka känslor, och det är där lärandet sker. Du väljer själv vad du delar, och två handledare finns med hela tiden."],
  ["Fem dagar borta, är det värt det?", "Gruppen hinner gå från artighet till uppriktighet. Det ger tid att pröva nya sätt att agera flera gånger, och medarbetarna märker skillnad långt efter kursen."],
  ["Är UGL terapi?", "UGL är en utbildning i ledarskap och samspel. Du arbetar med hur du fungerar i grupper och i din roll."],
  ["Vad kostar UGL?", "Från cirka 28 750 kr exklusive moms, beroende på kursgård. Eget rum och alla måltider ingår. Resan står du för själv."],
  ["Vem betalar?", "Oftast arbetsgivaren. Vi hjälper till med ett underlag till din chef: pris, innehåll och vad veckan ger organisationen."],
  ["Hur bokar jag?", "Välj vecka i kurslistan och reservera på en minut. Vi bekräftar inom två arbetsdagar, och inget är bindande förrän dess."],
];

export default function VadArUgl() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Start", path: "/" }, { name: "Vad är UGL", path: "/vad-ar-ugl" }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "Vad är UGL? Utveckling av grupp och ledare förklarat", inLanguage: "sv", author: { "@type": "Person", name: SITE.person, jobTitle: SITE.personTitle }, publisher: { "@id": SITE.url + "/#organization" }, dateModified: "2026-10-30", mainEntityOfPage: absUrl("/vad-ar-ugl") }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FRAGOR.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Vad är UGL?</span>
          <h1 className="h1" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", maxWidth: "16ch" }}>Utveckling av grupp och ledare</h1>
          <p className="lead muted mt-1">Fem dagar där du lär dig hur grupper fungerar, genom att vara i en.</p>
          <div className="mt-1" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/kurser" className="btn">Se kursveckor</Link>
            <a href="#for-vem" className="btn btn--ghost">Är det för mig?</a>
          </div>
          <div className="grid grid-4 mt-2">
            <div className="card kpi"><div className="kpi__value">5 dagar</div><div className="kpi__label">Måndag till fredag på kursgård</div></div>
            <div className="card kpi"><div className="kpi__value">8 till 12</div><div className="kpi__label">Deltagare som möts för första gången</div></div>
            <div className="card kpi"><div className="kpi__value">2</div><div className="kpi__label">Handledare certifierade av Försvarshögskolan</div></div>
            <div className="card kpi"><div className="kpi__value">1981</div><div className="kpi__label">Använt sedan dess och följt upp i forskning</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="pa-en-minut">
        <div className="container split">
          <div>
            <span className="eyebrow">UGL på en minut</span>
            <h2 className="h2">Du möter en grupp för första gången.</h2>
            <p className="muted">Ni löser uppgifter tillsammans och reflekterar, framför allt över dig själv.</p>
          </div>
          <div className="card card--dark">
            <span className="card__n">Kärnan i UGL</span>
            <ol style={{ margin: 0, paddingLeft: "1.3em", display: "grid", gap: 10, fontSize: "1.125rem", fontWeight: 500 }}>
              <li>Hur fungerar jag i en grupp?</li>
              <li>Hur påverkar jag en grupp?</li>
              <li>Hur påverkas jag av en grupp?</li>
            </ol>
            <p className="muted mt-2" style={{ fontSize: "0.9375rem" }}>Syftet: bli effektivare som gruppmedlem, medarbetare och ledare.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <span className="eyebrow">Vad är UGL?</span>
            <h2 className="h2">Vad händer egentligen när människor ska samarbeta?</h2>
            <p className="muted">Det är frågan UGL utforskar, i en grupp där du själv är med.</p>
          </div>
          <div className="prose">
            <p>Tänk dig tio personer som möts för första gången och får en uppgift att lösa tillsammans. Vem tar ordet? Vem blir tyst? Hur fattas besluten, och hur känns det? Samma situation upplevs olika av alla i rummet, och det är där lärandet börjar.</p>
            <p>Under fem dagar får du syn på dig själv i det samspelet: hur du fungerar i en grupp, hur du påverkar den och hur den påverkar dig. Det du upptäcker tar du med dig hem till ditt eget team.</p>
            <p className="muted">UGL, Utveckling av grupp och ledare, är framtagen av Försvarshögskolan och har använts sedan 1981.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="for-vem">
        <div className="container">
          <span className="eyebrow">Vem är UGL till för?</span>
          <h2 className="h2">För alla som påverkar en grupp</h2>
          <p className="lead muted">Ledarskap är ett beteende, och alla i en grupp påverkar den. Syftet med UGL är att bli effektivare som gruppmedlem, medarbetare och ledare. Kursen handlar om både ledarskap och medarbetarskap, och om hur vi påverkar och påverkas av varandra. Därför går chefer, specialister och medarbetare samma kurs.</p>
          <div className="grid grid-4 mt-2">
            {[
              ["01", "Självkännedom och värderingar", "Du i gruppen", "Se hur du fungerar bland andra och vad som styr dina val."],
              ["02", "Kommunikation och feedback", "Du bland andra", "Bidra, säg det du menar och ta ansvar för din del. Här befinner sig de flesta av oss det mesta av tiden."],
              ["03", "Grupputveckling och ledarskap", "Du som leder", "Ge riktning och möt gruppen där den befinner sig i sin utveckling."],
              ["04", "Inflytande och beslut", "Du som leds", "Påverka och låt dig påverkas, så att gruppen fattar beslut som alla står bakom. Ledarskap och medarbetarskap förutsätter varandra."],
            ].map(([n, tag, t, d]) => (
              <article key={n} className="card"><span className="card__n">{n} · {tag}</span><h3 className="h3">{t}</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>{d}</p></article>
            ))}
          </div>
          <div className="grid grid-3 mt-1">
            {MALGRUPP.map((m) => (
              <article key={m.n} className="card" style={{ background: "var(--white)", border: "1px solid var(--ink-15)" }}><span className="card__n">{m.tag}</span><h3 className="h3" style={{ fontSize: "1.125rem" }}>{m.titel}</h3><p className="muted" style={{ fontSize: "0.9375rem" }}>{m.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="kanner-du-igen-dig">
        <div className="container">
          <div className="panel panel--dark">
            <span className="eyebrow">Känner du igen dig?</span>
            <h2 className="h2">Det mesta i en grupp händer på autopilot</h2>
            <p className="muted" style={{ maxWidth: "62ch" }}>Situationerna finns på alla arbetsplatser. UGL handlar om just dem: hur du påverkar en grupp, och hur gruppen påverkar dig.</p>
            <div className="grid grid-2 mt-2">
              {AUTOPILOT.map(([fore, efter]) => (
                <div key={fore} className="card card--dark" style={{ background: "var(--dark-2)" }}>
                  <p style={{ fontWeight: 500 }}>{fore}</p>
                  <p className="muted mt-1" style={{ fontSize: "0.9375rem" }}><strong style={{ color: "var(--on-dark)" }}>Efter UGL</strong> {efter}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="sa-kan-det-kannas">
        <div className="container">
          <span className="eyebrow">Så kan kursen kännas</span>
          <h2 className="h2">Från artighet till uppriktighet</h2>
          <p className="lead muted">Varje grupp är unik, men många känner igen den här resan. Handledarna hjälper er att sätta ord på varje skede, och mönstren är desamma som i grupperna på jobbet.</p>
          <div className="grid mt-2" style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
            {RESAN.map(([nar, t, d], i) => (
              <div key={t} className="card" style={{ padding: 20 }}><span className="card__n">{i + 1} · {nar}</span><h3 className="h3" style={{ fontSize: "1.125rem" }}>{t}</h3><p className="muted" style={{ fontSize: "0.9rem" }}>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="med-dig-hem">
        <div className="container split">
          <div>
            <span className="eyebrow">Efter kursen</span>
            <h2 className="h2">Det här tar du med dig hem</h2>
            <p className="muted">Ett sätt att leda som märks i vardagen, och en plan som gör att det håller.</p>
          </div>
          <div className="stack">
            <div className="card">
              <span className="card__n">Utvecklande ledarskap</span>
              <p className="muted" style={{ fontSize: "0.9375rem", marginBottom: 12 }}>Ledarskapsmodellen bakom UGL beskriver tre beteenden som gör grupper starkare. Du tränar dem under kursen, oavsett roll.</p>
              <ul style={{ display: "grid", gap: 8 }}>
                <li><strong>Var ett föredöme.</strong> <span className="muted">Gör det du säger. När ord och handling hänger ihop växer förtroendet.</span></li>
                <li><strong>Inspirera och engagera.</strong> <span className="muted">Skapa utrymme för andras idéer, så att fler vill och kan bidra.</span></li>
                <li><strong>Visa personlig omtanke.</strong> <span className="muted">Se varje person och lyssna på riktigt, så att alla kan växa.</span></li>
              </ul>
            </div>
            <div className="grid grid-3">
              <div className="card"><span className="card__n">Din utvecklingsplan</span><p className="muted" style={{ fontSize: "0.9rem" }}>Sista dagen formulerar du vad du vill fortsätta utveckla, och hur du gör det i din vardag.</p></div>
              <div className="card"><span className="card__n">Reflektion som vana</span><p className="muted" style={{ fontSize: "0.9rem" }}>Forskningen visar att de som fortsätter reflektera behåller förändringen, även flera år senare.</p></div>
              <div className="card"><span className="card__n">Kursintyg</span><p className="muted" style={{ fontSize: "0.9rem" }}>När kursen är klar får du ett intyg på genomförd UGL.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="jamfor">
        <div className="container">
          <span className="eyebrow">Jämför</span>
          <h2 className="h2">Vad skiljer UGL från andra ledarskapskurser?</h2>
          <p className="lead muted">Fem dagar utan en enda powerpoint, med fullt fokus på din personliga utveckling, ditt samspel med andra och gruppen ni bygger tillsammans.</p>
          <div className="card mt-2" style={{ overflowX: "auto" }}>
            <table className="table">
              <thead><tr><th>Område</th><th>UGL</th><th>Föreläsningsbaserad kurs</th><th>Individuell coaching</th></tr></thead>
              <tbody>
                <tr><td><strong>Så lär du dig</strong></td><td>Här och nu, av det som händer i gruppen</td><td>Genom att lyssna, läsa och diskutera</td><td>Genom samtal med en coach</td></tr>
                <tr><td><strong>Fokus</strong></td><td>Hur du påverkar och påverkas av en grupp</td><td>Teorier, modeller och verktyg</td><td>Dina egna mål och utmaningar</td></tr>
                <tr><td><strong>Feedback</strong></td><td>Från de andra deltagarna, direkt när det händer</td><td>Främst från kursledaren</td><td>Från coachen</td></tr>
              </tbody>
            </table>
            <p className="muted mt-1" style={{ fontSize: "0.9375rem" }}>Många kombinerar. UGL ger grunden, och coaching hjälper dig att fortsätta utvecklas efteråt.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="fragor">
        <div className="container split">
          <div>
            <span className="eyebrow">Det många undrar</span>
            <h2 className="h2">Frågor innan du bestämmer dig</h2>
            <p className="muted">Har du fler frågor? <Link href="/kontakt">Be oss ringa upp</Link>, eller ställ dem på ett kort webinar med en handledare.</p>
          </div>
          <div className="faq">
            {FRAGOR.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><div className="answer">{a}</div></details>)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="trygg-grund">
        <div className="container">
          <span className="eyebrow">Trygg grund</span>
          <h2 className="h2">Därför kan du lita på UGL</h2>
          <p className="lead muted">Ett beprövat koncept, med forskning bakom och handledare certifierade för uppdraget.</p>
          <div className="grid grid-4 mt-2">
            <div className="card kpi"><div className="kpi__value">1981</div><div className="h3 mt-1" style={{ fontSize: "1.0625rem" }}>Prövad i över 40 år</div><p className="muted" style={{ fontSize: "0.9rem" }}>UGL togs fram inom Försvarsmakten. Sedan 2000 äger Försvarshögskolan konceptet, som senast förnyades 2022.</p></div>
            <div className="card kpi"><div className="kpi__value">FHS</div><div className="h3 mt-1" style={{ fontSize: "1.0625rem" }}>Kvalitetssäkrat</div><p className="muted" style={{ fontSize: "0.9rem" }}>Försvarshögskolan utbildar och certifierar handledarna och håller kursinnehållet aktuellt.</p></div>
            <div className="card kpi"><div className="kpi__value">2</div><div className="h3 mt-1" style={{ fontSize: "1.0625rem" }}>Certifierade handledare</div><p className="muted" style={{ fontSize: "0.9rem" }}>Två handledare följer gruppen hela kursen och hjälper er att sätta ord på det som händer.</p></div>
            <div className="card kpi"><div className="kpi__value">Teori</div><div className="h3 mt-1" style={{ fontSize: "1.0625rem" }}>Byggt på forskning</div><p className="muted" style={{ fontSize: "0.9rem" }}>Wheelans modell för grupputveckling, Kolbs erfarenhetsbaserade lärande och utvecklande ledarskap enligt Larsson med flera.</p></div>
          </div>
          <p className="muted mt-1">Effekten är följd i forskning. Forskare har frågat medarbetarna före kursen och efteråt. De märkte skillnad, och den höll i sig. <Link href="/forskning">Se vad forskningen visar</Link>.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="webinar">
        <div className="container">
          <div className="panel panel--dark split">
            <div>
              <span className="eyebrow">Webinar</span>
              <h2 className="h2">Möt en handledare innan du bokar</h2>
              <p className="muted">Ett kort och öppet webinar online där du får veta mer om UGL och kan ställa dina frågor direkt till en handledare. 30 minuter, kostnadsfritt, och frågor kan ställas anonymt i chatten. Anmäl dig så får du datum för nästa tillfälle.</p>
            </div>
            <div className="card" style={{ background: "var(--white)" }}>
              <Formular typ="webinar" knapp="Anmäl mig till webinar" not="Du får ett mejl med datum för nästa tillfälle." tack="Tack. Du får ett mejl så snart nästa webinar är inplanerat." kompakt />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="panel" style={{ textAlign: "center" }}>
            <h2 className="h2">Redo att se kursveckorna?</h2>
            <p className="muted">Fem dagar. Två handledare. En grupp som byggs från grunden.</p>
            <div className="mt-1" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/kurser" className="btn">Kursdatum och bokning</Link>
              <Link href="/forskning" className="btn btn--ghost">Forskningen bakom</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
