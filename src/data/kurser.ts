// Kursdata för UGL Sverige.
// Format per rad: startdatum|vecka|kursgård|ort|handledare (semikolon)|logipris|status (L ledig, F fullbokad)|pris (valfritt, totalpris där allt ingår när logipris är 0)
// Slutdatum = startdatum + 4 dagar (måndag till fredag).
// Källa: uglsverige.store/kurser-data.js, hämtad 2026-10-30. Byt till databas när arrangörsflödet är på plats.

export const UGL_KURSPRIS = 23900;

const RADER = `
2026-09-14|38|Bykrogen|Kristianstad|Nurgül Iljas Eminovska;Susann Swahn|8900|L
2026-09-14|38|Skevik|Värmdö|Jenny Westring;Matti Kortelainen|9900|F
2026-09-21|39|Bosön Mästarvillan|Lidingö|Carina Nilimaa;Linda Strömberg|9900|F
2026-09-21|39|Bykrogen|Kristianstad|Annette Melander Berg;Vickie Peolin|8900|L
2026-09-28|40|Sundsgården Hotell & Konferens|Helsingborg|Åsa Andersson;Marianne Littke|8900|L
2026-09-28|40|Bosön Mästarvillan|Lidingö|Annica Nordén;Pernilla Johansson|9900|F
2026-10-05|41|Tylebäck|Halmstad|Petra Myhrman;Susanna Nygren|8900|L
2026-10-05|41|Skevik|Värmdö|Anne Karlström;Arvid Stark|9900|L
2026-10-12|42|Hällsnäs Hotell & Konferens|Mölnlycke|Carl-Henrik Lagnefors|9900|F
2026-10-12|42|Skogshem & Wijk|Lidingö|Lotta Ottosson;Sofia Hedberg|9900|L
2026-10-12|42|Gottskär Hotell|Göteborg|Carl-Henrik Lagnefors;Moa Amalot|9900|F
2026-10-19|43|Sundsgården Hotell & Konferens|Helsingborg|Annika Ambjörnsson;Hanna Wiik Olsson|8900|L
2026-10-19|43|Näsby slott|Täby|Jan-Erik Richnau;Linda Strömberg|9900|F
2026-10-19|43|Lovik|Stockholm|Lisa Carlberg|9900|L
2026-11-02|45|Lovik|Stockholm|Dan Nordlöf;Tomas Edlund|10500|L
2026-11-09|46|Ringenäs|Halmstad|Anna Falk;Carina Nilimaa|9900|L
2026-11-09|46|Bosön Mästarvillan|Lidingö|Gisela Gustavsson;Moa Amalot|10500|L
2026-11-09|46|Hagastrand|Stockholm|Carl-Henrik Lagnefors;Jessica Lindvert|10500|F
2026-11-16|47|Sundsgården Hotell & Konferens|Helsingborg|Annette Melander Berg;Marie Olsson|9500|L
2026-11-16|47|Hotel J|Nacka Strand, Stockholm|Jan-Erik Richnau;Marianne Littke|10500|L
2026-11-23|48|Hällsnäs Hotell & Konferens|Mölnlycke||9900|F
2026-11-23|48|Lovik|Stockholm|Susann Swahn|10500|L
2026-11-23|48|Gottskär Hotell|Göteborg|Carl-Henrik Lagnefors;Petra Back|9900|F
2026-11-23|48|Fågelbro Säteri|Värmdö||9900|L
2026-11-30|49|Sundsgården Hotell & Konferens|Helsingborg|Emma Nilsson;Matti Kortelainen|9500|L
2026-11-30|49|Lovik|Stockholm|Josefin Born Nilsson;Lena Sobel|10500|L
2026-11-30|49|Söråkers Herrgård|Sundsvall/Timrå|Mirja Lindström;Pernilla Johansson|9900|L
2026-11-30|49|Hagastrand|Stockholm|Linda Strömberg;Robert Koss|10500|L
2026-12-07|50|Ringenäs|Halmstad|Annica Nordén;Patrik Lindén|9900|L
2026-12-07|50|Skogshem & Wijk|Lidingö|Maria Granander Andersson;Ulrika Palm|10500|L
2026-12-14|51|Hagastrand|Stockholm|Dan Nordlöf;Nedia Edsholt|10500|L
2027-01-18|3|Lovik|Stockholm||10500|L
2027-01-25|4|Hagastrand|Stockholm||10500|L
2027-01-25|4|Skogshem & Wijk|Lidingö||10500|L
2027-01-25|4|Tylebäck|Halmstad||9500|L
2027-01-25|4|Bykrogen|Kristianstad||9500|L
2027-02-01|5|Lovik|Stockholm||10500|L
2027-02-01|5|Bykrogen|Kristianstad||9500|L
2027-02-08|6|Tylebäck|Halmstad||9500|L
2027-02-08|6|Skogshem & Wijk|Lidingö||10500|L
2027-02-08|6|Bosön Mästarvillan|Lidingö||10500|L
2027-02-15|7|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-02-15|7|Hagastrand|Stockholm||10500|L
2027-02-22|8|Lovik|Stockholm||10500|L
2027-02-22|8|Skogshem & Wijk|Lidingö||10500|L
2027-03-01|9|Ringenäs|Halmstad||9900|L
2027-03-08|10|Lovik|Stockholm||10500|L
2027-03-15|11|Bosön Mästarvillan|Lidingö||10500|L
2027-03-15|11|Hällsnäs Hotell & Konferens|Mölnlycke||9900|L
2027-03-15|11|Skogshem & Wijk|Lidingö||10500|L
2027-04-05|14|Skogshem & Wijk|Lidingö||10500|L
2027-04-05|14|Lovik|Stockholm||10500|L
2027-04-05|14|Tylebäck|Halmstad||9500|L
2027-04-05|14|Hällsnäs Hotell & Konferens|Mölnlycke||9900|L
2027-04-05|14|Gottskär Hotell|Göteborg||9900|L
2027-04-12|15|Lovik|Stockholm||10500|L
2027-04-12|15|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-04-19|16|Skogshem & Wijk|Lidingö||10500|L
2027-04-19|16|Bykrogen|Kristianstad||9500|L
2027-04-19|16|Ringenäs|Halmstad||9900|L
2027-04-26|17|Lovik|Stockholm||10500|L
2027-04-26|17|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-05-10|19|Söråkers Herrgård|Sundsvall/Timrå||9900|L
2027-05-10|19|Skogshem & Wijk|Lidingö||10500|L
2027-05-10|19|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-05-10|19|Bosön Mästarvillan|Lidingö||10500|L
2027-05-10|19|Gottskär Hotell|Göteborg||9900|L
2027-05-17|20|Bosön Mästarvillan|Lidingö||10500|L
2027-05-24|21|Skogshem & Wijk|Lidingö||10500|L
2027-05-24|21|Bykrogen|Kristianstad||9500|L
2027-05-24|21|Hällsnäs Hotell & Konferens|Mölnlycke||9900|L
2027-05-31|22|Lovik|Stockholm||10500|L
2027-05-31|22|Skogshem & Wijk|Lidingö||10500|L
2027-06-07|23|Tylebäck|Halmstad||9500|L
2027-06-07|23|Bosön Mästarvillan|Lidingö||10500|L
2027-06-07|23|Skogshem & Wijk|Lidingö||10500|L
2027-06-14|24|Lovik|Stockholm||10500|L
2027-06-14|24|Skogshem & Wijk|Lidingö||10500|L
2027-06-14|24|Bykrogen|Kristianstad||9500|L
2027-06-14|24|Gottskär Hotell|Göteborg||9900|L
2027-06-28|26|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-06-28|26|Skogshem & Wijk|Lidingö||10500|L
2027-06-28|26|Hällsnäs Hotell & Konferens|Mölnlycke||9900|L
2027-06-28|26|Söråkers Herrgård|Sundsvall/Timrå||9900|L
2027-06-28|26|Lovik|Stockholm||10500|L
2027-07-05|27|Lejondals Slott|Stockholm||10500|L
2027-08-16|33|Hagastrand|Stockholm||10500|L
2027-08-23|34|Gottskär Hotell|Göteborg||9900|L
2027-08-23|34|Lovik|Stockholm||10500|L
2027-08-30|35|Tylebäck|Halmstad||9500|L
2027-08-30|35|Bosön Mästarvillan|Lidingö||10500|L
2027-09-06|36|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-09-20|38|Tylebäck|Halmstad||9500|L
2027-09-20|38|Gottskär Hotell|Göteborg||9900|L
2027-09-20|38|Skevik|Värmdö||9900|L
2027-09-20|38|Bykrogen|Kristianstad||9500|L
2027-09-27|39|Bykrogen|Kristianstad||9500|L
2027-10-04|40|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-10-04|40|Lovik|Stockholm||10500|L
2027-10-11|41|Skogshem & Wijk|Lidingö||10500|L
2027-10-11|41|Tylebäck|Halmstad||9500|L
2027-10-18|42|Hällsnäs Hotell & Konferens|Mölnlycke||9900|L
2027-10-25|43|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-10-25|43|Lovik|Stockholm||10500|L
2027-10-25|43|Skevik|Värmdö||9900|L
2027-10-25|43|Fågelbro Säteri|Värmdö||9900|L
2027-11-08|45|Tylebäck|Halmstad||9500|L
2027-11-08|45|Skogshem & Wijk|Lidingö||10500|L
2027-11-08|45|Lovik|Stockholm||10500|L
2027-11-15|46|Ringenäs|Halmstad||9900|L
2027-11-15|46|Fågelbro Säteri|Värmdö||9900|L
2027-11-22|47|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-11-22|47|Gottskär Hotell|Göteborg||9900|L
2027-11-29|48|Hällsnäs Hotell & Konferens|Mölnlycke||9900|L
2027-11-29|48|Lovik|Stockholm||10500|L
2027-12-06|49|Sundsgården Hotell & Konferens|Helsingborg||9500|L
2027-12-06|49|Tylebäck|Halmstad||9500|L
2027-12-06|49|Skogshem & Wijk|Lidingö||10500|L
2027-12-06|49|Lovik|Stockholm||10500|L
2027-12-06|49|Söråkers Herrgård|Sundsvall/Timrå||9900|L
2027-12-06|49|Hagastrand|Stockholm||10500|L
2027-12-13|50|Skogshem & Wijk|Lidingö||10500|L
2027-12-13|50|Ringenäs|Halmstad||9900|L
2026-09-14|38|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2026-10-19|43|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2026-11-23|48|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2027-03-15|11|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2027-04-26|17|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2027-05-31|22|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2027-09-13|38|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2027-10-18|43|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
2027-11-22|48|Mullsjö|Jönköping|Annika Banfield;Michael Kröger|0|L|28750
`.trim();

export type Ort = {
  slug: string;
  namn: string;
  region: string;
  /** Hur orten står i kursdatan */
  matchar: string[];
  /** Större ort som orten ligger nära, för rubriker och sökningar */
  narOrt?: string;
  intro: string;
};

export const ORTER: Ort[] = [
  { slug: "stockholm", namn: "Stockholm", region: "Stockholm", matchar: ["Stockholm"], intro: "UGL i Stockholmsområdet hålls på kursgårdar med internat: Lovik på Lidingö, Hagastrand i Solna och Lejondals Slott i Bro. Kursveckorna listas här under Stockholm; Lidingö, Nacka Strand, Värmdö och Täby har egna sidor." },
  { slug: "lidingo", namn: "Lidingö", region: "Stockholm", matchar: ["Lidingö"], narOrt: "Stockholm", intro: "På Lidingö finns två UGL-kursgårdar, Skogshem & Wijk och Bosön Mästarvillan, båda med internat nära vatten och med kollektivtrafik från Stockholm." },
  { slug: "nacka", namn: "Nacka Strand", region: "Stockholm", matchar: ["Nacka Strand, Stockholm"], narOrt: "Stockholm", intro: "Hotel J i Nacka Strand ligger vid vattnet med båt och buss till Stockholm. Kursveckorna här kombinerar stadens närhet med kursgårdens lugn." },
  { slug: "varmdo", namn: "Värmdö", region: "Stockholm", matchar: ["Värmdö"], narOrt: "Stockholm", intro: "Skevik och Fågelbro Säteri på Värmdö ger UGL-veckan skärgårdsmiljö inom Stockholms län." },
  { slug: "taby", namn: "Täby", region: "Stockholm", matchar: ["Täby"], narOrt: "Stockholm", intro: "Näsby slott i Täby är en slottsmiljö norr om Stockholm med egen slottspark vid Stora Värtan." },
  { slug: "halmstad", namn: "Halmstad", region: "Halland", matchar: ["Halmstad"], intro: "I Halmstad hålls UGL på Tylebäck och Ringenäs, båda kursgårdar nära havet i Halland." },
  { slug: "helsingborg", namn: "Helsingborg", region: "Skåne", matchar: ["Helsingborg"], intro: "Sundsgården Hotell & Konferens i Helsingborg är kursgården för UGL i nordvästra Skåne, med tågförbindelser från Malmö och Lund." },
  { slug: "kristianstad", namn: "Kristianstad", region: "Skåne", matchar: ["Kristianstad"], intro: "Bykrogen i Kristianstad är kursgården för UGL i nordöstra Skåne, nära för den som bor i Blekinge, Kronoberg eller östra Skåne." },
  { slug: "goteborg", namn: "Göteborg", region: "Västra Götaland", matchar: ["Göteborg"], intro: "Gottskär Hotell ligger vid havet på Onsalahalvön i Kungsbacka kommun, söder om Göteborg." },
  { slug: "molnlycke", namn: "Mölnlycke", region: "Västra Götaland", matchar: ["Mölnlycke"], narOrt: "Göteborg", intro: "Hällsnäs Hotell & Konferens i Mölnlycke ligger vid Landvettersjön, nära Göteborg och Landvetter flygplats." },
  { slug: "jonkoping", namn: "Jönköping", region: "Jönköping", matchar: ["Jönköping"], intro: "UGL i Mullsjö utanför Jönköping har ett samlat pris där handledning, kursmaterial, kost och logi ingår. Mullsjö ligger centralt i södra Sverige med tågförbindelser." },
  { slug: "sundsvall", namn: "Sundsvall", region: "Västernorrland", matchar: ["Sundsvall/Timrå"], intro: "Söråkers Herrgård i Timrå, mellan Sundsvall och Härnösand, är kursgården för UGL i Norrland, nära Sundsvall–Timrå flygplats." },
];

export type Kurs = {
  id: string;
  start: string;
  slut: string;
  vecka: number;
  kursgard: string;
  ort: string;
  ortSlug: string;
  region: string;
  handledare: string[];
  kurspris: number;
  logipris: number;
  totalpris: number;
  alltIngar: boolean;
  status: "L" | "F";
};

function addDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function ortFor(ort: string): Ort {
  const o = ORTER.find((x) => x.matchar.includes(ort));
  if (!o) throw new Error("Okänd ort i kursdata: " + ort);
  return o;
}

export const KURSER: Kurs[] = RADER.split("\n")
  .map((rad) => rad.trim())
  .filter(Boolean)
  .map((rad) => {
    const [start, vecka, kursgard, ort, handledare, logipris, status, pris] = rad.split("|");
    const o = ortFor(ort);
    const logi = Number(logipris);
    const kurspris = pris ? Number(pris) : UGL_KURSPRIS;
    const alltIngar = logi === 0 && !!pris;
    return {
      id: `${start}-${slugify(kursgard)}`,
      start,
      slut: addDays(start, 4),
      vecka: Number(vecka),
      kursgard,
      ort,
      ortSlug: o.slug,
      region: o.region,
      handledare: handledare ? handledare.split(";").map((h) => h.trim()).filter(Boolean) : [],
      kurspris,
      logipris: logi,
      totalpris: kurspris + logi,
      alltIngar,
      status: (status === "F" ? "F" : "L") as "L" | "F",
    };
  })
  .sort((a, b) => a.start.localeCompare(b.start));

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/å/g, "a").replace(/ä/g, "a").replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function kommande(fran: Date = new Date()): Kurs[] {
  const iso = fran.toISOString().slice(0, 10);
  return KURSER.filter((k) => k.start >= iso);
}

export function kurserForOrt(slug: string): Kurs[] {
  return KURSER.filter((k) => k.ortSlug === slug);
}

export function kursgardarForOrt(slug: string): string[] {
  return [...new Set(kurserForOrt(slug).map((k) => k.kursgard))];
}

export const REGIONER = [...new Set(ORTER.map((o) => o.region))];

export function formatDatum(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const man = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
  return `${d} ${man[m - 1]} ${y}`;
}

export function formatPeriod(start: string, slut: string): string {
  const [y1, m1, d1] = start.split("-").map(Number);
  const [y2, m2, d2] = slut.split("-").map(Number);
  const man = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
  if (m1 === m2) return `${d1} till ${d2} ${man[m1 - 1]} ${y1}`;
  return `${d1} ${man[m1 - 1]} till ${d2} ${man[m2 - 1]} ${y2}`;
}

export function formatKr(n: number): string {
  return n.toLocaleString("sv-SE").replace(/ /g, " ") + " kr";
}
