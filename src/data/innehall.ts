export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  { q: "Måste man vara chef för att gå UGL?", a: "Nej. UGL är för medarbetare, ledare och chefer, och inga förkunskaper krävs." },
  { q: "Kan man gå tillsammans med en kollega?", a: "Inte på samma vecka. Gruppen ska vara en främlingsgrupp, där ingen känner någon sedan tidigare. Det är det som gör uppriktigheten möjlig. För en hel organisation är en egen kurs rätt väg." },
  { q: "Måste man berätta saker om sig själv?", a: "Var och en bestämmer själv hur mycket som delas. Det gruppen arbetar med är det som händer i rummet under veckan." },
  { q: "Är UGL terapi?", a: "Nej. UGL är en utbildning i grupputveckling och ledarskap, byggd på Försvarshögskolans ledarskapsmodell och forskning om gruppers utveckling." },
  { q: "Får man veta vad gruppen ska göra i förväg?", a: "Ramarna, målen och veckans form är öppna. Exakt vilka uppgifter gruppen möter avslöjas inte i förväg, eftersom upplevelsen blir starkare när uppgifterna möts i stunden." },
  { q: "Måste man bo på kursgården?", a: "Ja. Kost och logi ingår, och ingen kommer och går under veckan. Fem sammanhängande dagar, 48 utbildningstimmar." },
  { q: "Vad kostar det och vad ingår?", a: "Priset varierar mellan kursorter. I priset ingår kursledning av två certifierade handledare, kursmaterial, kost och logi. Resa till och från kursgården tillkommer. Alla priser är exklusive moms." },
  { q: "Hur fungerar betalning och avbokning?", a: "Betalning sker mot faktura efter bekräftad plats. Vid förhinder, hör av dig så snart det går. Avbokningsreglerna för den aktuella kursveckan står i bekräftelsen." },
  { q: "Vad händer efter kursen?", a: "Deltagaren åker hem med en personlig utvecklingsplan som gruppen gett sin syn på." },
  { q: "Vem står bakom UGL?", a: "Konceptet ägs av Försvarshögskolan sedan år 2000 och har använts sedan 1981. Försvarshögskolan certifierar alla handledare." },
  { q: "Vad är skillnaden mellan UGL och UL?", a: "UGL handlar om hur grupper fungerar och hur du fungerar i en grupp. UL, Utvecklande ledarskap, handlar om ditt eget sätt att leda. Många går UL ett år eller två efter UGL." },
];

export const VECKAN = [
  { n: "01 / 04", titel: "Fem dagar i följd", text: "Måndag till fredag på kursgård, med boende och alla måltider. Du är borta från vardagen hela veckan.", for: "Tid att landa, pröva och se mönster som en endagsutbildning aldrig hinner med." },
  { n: "02 / 04", titel: "En liten grupp främlingar", text: "Ni känner inte varandra när veckan börjar. Gruppen formas på plats, och det är den ni lär er av.", for: "Ingen roll att försvara, så du kan pröva nya sätt att vara." },
  { n: "03 / 04", titel: "Certifierade handledare", text: "Handledarna är utbildade och certifierade av Försvarshögskolan och följer gruppen hela veckan.", for: "Någon som hjälper er stanna upp och förstå vad som händer i gruppen." },
  { n: "04 / 04", titel: "Prövad sedan 1981", text: "Sveriges mest använda ledarskapsutbildning. Effekten har utvärderats av Karolinska Institutet.", for: "Ett beprövat upplägg med forskning bakom, inte ett experiment." },
];

export const MALGRUPP = [
  { n: "01", tag: "Samarbete", titel: "Medarbetare och specialist", text: "Du vill samarbeta bättre, våga säga ifrån och förstå varför vissa möten skaver." },
  { n: "02", tag: "Ny i rollen", titel: "Ny chef eller projektledare", text: "Du har fått ansvar för en grupp och vill ha trygghet i rollen från början." },
  { n: "03", tag: "Nya ögon", titel: "Erfaren chef", text: "Du vill se ditt eget ledarskap med nya ögon och leda gruppen utifrån var den är." },
];

export const SA_FUNGERAR = [
  { titel: "Ni möts som främlingar", text: "Ingen har en roll att försvara. Det gör att du kan pröva nya sätt att vara utan att det följer med hem till jobbet." },
  { titel: "Gruppen blir kursmaterialet", text: "Ni löser uppgifter tillsammans och ser en grupp växa fram på riktigt. Handledarna hjälper er stanna upp och förstå vad som händer." },
  { titel: "Du ser dig själv utifrån", text: "Genom feedback från de andra får du en klarare bild av hur du påverkar en grupp, och vad du vill göra annorlunda." },
];

export const VAD_VECKAN_GER = [
  { tag: "Tid för personlig utveckling", titel: "Fem dagar ger ett djup som en workshop aldrig hinner med.", text: "Gruppen hinner gå från artighet till uppriktighet, och det finns tid att pröva nya sätt att agera flera gånger och se vad de gör med gruppen." },
  { tag: "Nya ögon på ledarskapet", titel: "Du blir sedd för det du faktiskt gör, inte för din roll.", text: "Deltagarna möts för första gången, och det är det som gör uppriktigheten möjlig. Gruppen tränar på att ge och ta emot feedback så att den leder någonstans, och relationerna blir ofta ovanligt nära." },
  { tag: "Upplevelsebaserad utveckling", titel: "Som en film: bäst när ingen har berättat slutet i förväg.", text: "Kursen handlar om hur grupper utvecklas, kommunikation och feedback, konflikter, beslut och självkännedom. Innehållet är inte hemligt, men det blir starkare när uppgifterna möts i stunden, tillsammans med de andra." },
];

export const RIKTNINGAR = [
  { n: "01", riktning: "Inåt", titel: "Sig själv", lead: "Hur du fungerar, och varför.", mal: ["Förstå drivkrafterna bakom det egna handlandet", "Upptäcka hur känslor och värderingar färgar relationer", "Göra reflektion till en vana, inte en engångsövning"] },
  { n: "02", riktning: "Utåt", titel: "Mötet med andra", lead: "Hur du kommunicerar när det spelar roll.", mal: ["Kommunicera direkt och klart, även när det är obekvämt", "Ge och ta emot feedback utan att gå i försvar", "Gå in i konflikter i stället för runt dem"] },
  { n: "03", riktning: "Uppåt", titel: "Gruppen", lead: "Hur en grupp fungerar som helhet.", mal: ["Läsa vilket stadium en grupp befinner sig i", "Förstå vad roller, normer och ledarstil gör med gruppen", "Fatta beslut som gruppen står bakom"] },
];

export const SPELREGLER = [
  { titel: "Här och nu", text: "Det som händer i gruppen den här veckan, inte det som hänt förut." },
  { titel: "Eget ansvar", text: "Var och en väljer själv vad som delas, och ansvarar för sina egna känslor och handlingar." },
  { titel: "Utmana, inte kränka", text: "Pröva nya sätt att tänka och handla. Aldrig på någon annans bekostnad." },
];

export const EFFEKTER = [
  { n: "01", titel: "Konflikter tas i tid", text: "Efter UGL blir det lättare att ge och ta emot feedback, att se en konflikt innan den låst sig och att hantera den i stället för att vänta ut den. Den största effekten, enligt både cheferna och deras medarbetare, var ett ökat självförtroende i ledarrollen. Det är det som gör att samtalet blir av.", taggar: ["Feedback", "Konflikthantering", "Kommunikation"] },
  { n: "02", titel: "Gruppen leds utifrån var den är", text: "Med en klar bild av vilket stadium gruppen befinner sig i går det att anpassa ledarstilen: riktning när gruppen är ny, utrymme när den är mogen. Det ger färre omtag, tydligare roller och mindre stress. Deltagarna i studien började förändra arbetssätt och samarbete i sina egna team.", taggar: ["Gruppens utveckling", "Ledarstilar", "Värderingar"] },
  { n: "03", titel: "Självkännedom som märks", text: "En klarare bild av hur det egna beteendet påverkar andra, hur andra påverkar en själv och vad känslor gör med individer och grupper. Medarbetarna skattade cheferna som mer utvecklande ledare efter kursen, och nivån låg kvar sex månader senare. Hos dem som reflekterade regelbundet och fick stöd på jobbet fanns förändringen kvar efter två år.", taggar: ["Självkännedom", "Känslor i grupp", "Erfarenhet av gruppdynamik"] },
];
