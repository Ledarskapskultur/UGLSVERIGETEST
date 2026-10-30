export type Kategori = "Grupputveckling" | "Ledarskap" | "Kommunikation" | "UGL-utbildningen";

export const KATEGORIER: { namn: Kategori; text: string }[] = [
  { namn: "Grupputveckling", text: "Hur grupper bildas, utvecklas och fungerar över tid." },
  { namn: "Ledarskap", text: "Att leda sig själv, andra och grupper i förändring." },
  { namn: "Kommunikation", text: "Samtal, feedback och att bli förstådd." },
  { namn: "UGL-utbildningen", text: "Varför kursen finns, för vem den passar och hur lärandet går till." },
];

export type Inlagg = {
  slug: string;
  kategori: Kategori;
  kortSvar?: string;
  kallor?: string[];
  titel: string;
  ingress: string;
  datum: string;
  lastid: string;
  /** Stycken i enkel markdown-liknande form: rader som börjar med "## " blir mellanrubriker, "- " blir punktlista */
  text: string[];
};

export const FORFATTARE = { namn: "Carl-Fredrik Zetterman", titel: "UGL-handledare, certifierad av Försvarshögskolan" };

export const INLAGG: Inlagg[] = [
  {
    slug: "vad-ar-gruppdynamik",
    kategori: "Grupputveckling",
    titel: "Vad är gruppdynamik? Så utvecklas en grupp",
    ingress: "Alla som suttit i en grupp som fungerar, och i en som kör fast, har mött gruppdynamik. Den förklarar varför samma människor kan samarbeta smidigt i ett sammanhang och köra fast i nästa. Här får du en enkel bild av vad gruppdynamik är, hur grupper brukar utvecklas och vad det betyder för dig som leder eller ingår i en grupp.",
    kortSvar: "Gruppdynamik är de krafter som uppstår när människor samarbetar över tid: hur de förhåller sig till varandra, till ledaren och till uppgiften. Grupper utvecklas ofta stegvis, från försiktig artighet via konflikt och kamp om roller till förtroende och verklig samverkan. Utvecklingen går att stödja, och varje steg behövs på vägen.",
    datum: "2026-10-18",
    lastid: "4 min",
    kallor: ["Wheelan, S. (2013). Att skapa effektiva team: en handledning för ledare och gruppmedlemmar. Studentlitteratur."],
    text: [
      "## Vad innebär gruppdynamik?",
      "Gruppdynamik är samspelet mellan människorna i en grupp, och hur det samspelet formar både stämning och resultat. Det handlar om vem som tar plats och vem som drar sig undan, hur beslut fattas och vad som får sägas högt.",
      "Dynamiken finns i alla grupper, från ett projektteam till ett idrottslag eller en ledningsgrupp. Den syns sällan i dagordningen, men den avgör ofta om dagordningen blir avklarad.",
      "## Hur utvecklas en grupp?",
      "De flesta grupper rör sig genom ett antal stadier. En vanlig modell kommer från den amerikanska forskaren Susan Wheelan och beskriver fyra. Stadierna överlappar och en grupp kan stanna kvar länge i ett av dem.",
      "### Stadium 1: tillhörighet och trygghet",
      "I början vill alla främst bli accepterade. Folk är artiga, försiktiga och förväntar sig att ledaren talar om vad som gäller. Avvikande åsikter hålls tillbaka, eftersom rädslan för att hamna utanför är större än viljan att påverka. Ledarens uppgift: ge tydlig riktning och struktur så att tryggheten kan växa.",
      "### Stadium 2: opposition och konflikt",
      "När tryggheten växer vågar människor ifrågasätta. Ledaren utmanas, mål och metoder diskuteras och undergrupper bildas. Det kan kännas som att gruppen går åt fel håll, men det är i själva verket ett tecken på att den är redo att gå vidare. Ledarens uppgift: tåla oenighet, ge utrymme och hjälpa gruppen enas om mål och arbetssätt.",
      "### Stadium 3: förtroende och struktur",
      "Om konflikterna hanteras väl landar gruppen i gemensamma mål, tydligare roller och sätt att arbeta. Samarbetet blir öppnare och människor lyssnar på varandra på ett annat sätt. Ledarens uppgift: stödja samarbetet och låta fler ta ansvar.",
      "### Stadium 4: arbete och produktivitet",
      "Nu kan gruppen lägga sin energi på uppgiften i stället för på relationerna. Relationerna är fortsatt viktiga. De är bara tillräckligt stabila för att bära arbetet. Ledarens uppgift: hålla fokus på resultat och ta vara på gruppens styrkor.",
      "## Är konflikt i en grupp ett misslyckande?",
      "I regel är den en nödvändig del av utvecklingen. Grupper som undviker olika uppfattningar blir ofta kvar i artighet och når lägre förtroende och sämre resultat. Det som avgör är hur konflikten hanteras: öppet och med respekt för skillnader, eller genom tystnad och syndabockar.",
      "Under stress kan en grupp också ta ett steg tillbaka, till exempel vid en omorganisation eller när en ny medlem kommer in. Det är normalt och går att arbeta sig ur.",
      "## Vad kan du göra som ledare eller gruppmedlem?",
      "- Var tydlig med ramar tidigt. Syfte, mål och spelregler ger den trygghet som behövs för att senare våga säga emot.",
      "- Ge olikheter plats. Fråga efter andra synsätt och visa att avvikande åsikter är välkomna.",
      "- Prata om hur ni samarbetar. Ta ibland en paus i sakfrågan och tala om hur ni talar med varandra.",
      "## Vanliga frågor",
      "### Vad är skillnaden mellan en grupp och ett team?",
      "En grupp blir ett team först när den har gemensamma mål och effektiva sätt att nå dem. Många arbetsgrupper är därför på väg mot att bli team.",
      "### Kan en grupp gå bakåt i sin utveckling?",
      "Ja. Förändringar och press kan få en grupp att falla tillbaka till ett tidigare stadium, ofta mot ett större beroende av ledaren.",
      "## Det viktigaste i korthet",
      "- Gruppdynamik är samspelet i en grupp över tid och påverkar både stämning och resultat.",
      "- Grupper utvecklas ofta i fyra stadier, från trygghet via konflikt till förtroende och produktivitet.",
      "- Konflikt är normalt och kan leda framåt om den hanteras öppet.",
      "- Tydliga ramar, plats för olikheter och samtal om samarbetet stöder utvecklingen.",
    ],
  },
  {
    slug: "varfor-gar-ugl-i-framlingsgrupp",
    kategori: "UGL-utbildningen",
    titel: "Varför går UGL i främlingsgrupp?",
    ingress: "Den vanligaste frågan vi får från organisationer är om två kollegor kan gå samma vecka. Svaret är nej, och skälet är hela poängen med kursen.",
    datum: "2026-10-30",
    lastid: "4 min",
    text: [
      "UGL bygger på att deltagarna inte känner varandra när veckan börjar. Åtta till tolv personer från olika arbetsplatser möts på måndagen, och det är den gruppen, som formas under veckan, som är kursmaterialet.",
      "## Ingen roll att försvara",
      "På jobbet har alla en roll: chefen, den erfarna, den nya, den som brukar säga emot. Rollerna är användbara i vardagen men gör det svårt att pröva något nytt, eftersom de följer med hem till jobbet dagen efter. I en främlingsgrupp finns ingen sådan historia. Den som alltid tar ordet kan pröva att vänta. Den som brukar vara tyst kan pröva att ta plats. Ingen kommer att påminna om det på nästa avdelningsmöte.",
      "## Uppriktigheten blir möjlig",
      "Feedback är en stor del av UGL. Att säga till någon hur den påverkar en är lättare när personen inte sitter i rummet bredvid resten av året. Gruppen tränar på att ge och ta emot feedback så att den leder någonstans, och det kräver att ingen behöver väga sina ord mot en relation som ska hålla i tio år till.",
      "## Vad en organisation gör i stället",
      "Vill en organisation skicka flera medarbetare sprids de över olika veckor och gärna olika kursgårdar. Det går utmärkt att planera, och många kommuner och större företag gör just så. Vi hjälper till att hålla isär dem. Vill man ha UGL för en hel organisation på en gång är lösningen en egen kurs, där grupperna sätts ihop av medarbetare som inte träffats förut, till exempel från olika enheter eller orter.",
      "## Kort sagt",
      "Främlingsgruppen är inte en begränsning utan förutsättningen. Det är den som gör att veckan kan bli ärlig på ett sätt som en kurs med kollegor aldrig blir.",
    ],
  },
  {
    slug: "vad-ingar-i-priset-pa-en-ugl-kurs",
    kategori: "UGL-utbildningen",
    titel: "Vad ingår i priset på en UGL-kurs, och varför skiljer det sig mellan orter?",
    ingress: "En UGL-vecka kostar mellan 28 000 och 35 000 kronor exklusive moms. Här är vad pengarna går till, och varför två veckor med samma innehåll kan kosta olika.",
    datum: "2026-10-30",
    lastid: "3 min",
    text: [
      "Priset på en öppen UGL-kurs består av två delar som oftast redovisas var för sig: kursavgiften och kost och logi.",
      "## Kursavgiften",
      "Kursavgiften är i dag 23 900 kronor exklusive moms hos de flesta arrangörer. Den täcker två handledare certifierade av Försvarshögskolan under fem dagar, kursmaterialet och dokumentationen. Avgiften är i stort sett densamma oavsett var i landet kursen hålls, eftersom handledarnas arbete är detsamma.",
      "## Kost och logi",
      "Den andra delen är fyra nätter på kursgården med alla måltider, från måndag lunch till fredag lunch. Här skiljer det sig: en kursgård utanför Stockholm tar mer betalt än en i Halland eller Skåne. I vår kurslista ligger spannet mellan ungefär 8 900 och 10 500 kronor. Det är den delen som förklarar prisskillnaden mellan orterna, inte kursen i sig.",
      "## Samlat pris",
      "Några arrangörer anger i stället ett samlat pris där allt ingår. Kurserna i Mullsjö är ett exempel. Innehållet är detsamma; det är bara redovisningen som skiljer.",
      "## Vad som inte ingår",
      "Resan till och från kursgården betalar deltagaren eller arbetsgivaren själv. Alla priser är exklusive moms, eftersom det nästan alltid är en arbetsgivare som betalar.",
      "## Vem som betalar",
      "De allra flesta som går UGL får kursen betald av sin arbetsgivare. Behöver du ett underlag till din chef, med pris, innehåll och vad veckan ger organisationen, hjälper vi till med det.",
    ],
  },
  {
    slug: "maste-man-vara-chef-for-att-ga-ugl",
    kategori: "Ledarskap",
    titel: "Måste man vara chef för att gå UGL?",
    ingress: "Nej. UGL är en kurs om hur grupper fungerar och hur du fungerar i en grupp. Det är lika användbart för den som leder sig själv som för den som leder andra.",
    datum: "2026-10-30",
    lastid: "3 min",
    text: [
      "Namnet, Utveckling av grupp och ledare, får många att tro att kursen är till för chefer. Det var den heller inte från början: UGL utvecklades inom Försvarsmakten för att alla i en grupp skulle förstå hur gruppen fungerar, inte bara den som bestämmer.",
      "## Tre vanliga ingångar",
      "- Medarbetare och specialister som vill samarbeta bättre, våga säga ifrån och förstå varför vissa möten skaver.",
      "- Nya chefer och projektledare som fått ansvar för en grupp och vill ha trygghet i rollen från början.",
      "- Erfarna chefer som vill se sitt eget ledarskap med nya ögon och leda gruppen utifrån var den befinner sig.",
      "## Vad som är gemensamt",
      "Oavsett roll arbetar alla med samma saker under veckan: hur en grupp utvecklas, hur man kommunicerar när det spelar roll, hur man ger och tar emot feedback, hur konflikter kan tas i tid och hur det egna sättet att vara påverkar andra. Det är kunskaper som inte sitter i en titel.",
      "## Blandningen är en styrka",
      "En grupp med både chefer och medarbetare blir rikare än en grupp med bara det ena. Chefen får höra hur det är att bli ledd, medarbetaren får se vad som är svårt i att leda. Det är en av anledningarna till att vi inte sorterar deltagare efter roll.",
      "## Inga förkunskaper",
      "Det krävs ingen tidigare utbildning. Det enda som behövs är att du kan vara på plats hela veckan och är beredd att delta i gruppen, på dina egna villkor.",
    ],
  },
];

export function hittaInlagg(slug: string): Inlagg | undefined {
  return INLAGG.find((i) => i.slug === slug);
}
