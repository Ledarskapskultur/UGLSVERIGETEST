# UGL Sverige, webbplats

Next.js (App Router) med statisk generering. Allt innehåll finns i HTML vid första svaret, så att Google och AI-crawlers ser hela sajten.

## Struktur

- `src/data/kurser.ts`: alla kursveckor (pipe-format, samma som tidigare `kurser-data.js`) plus de 12 kursorterna. Byt ut mot databas när arrangörsflödet är på plats.
- `src/data/innehall.ts`: texter som återanvänds (FAQ, veckan, målgrupp, effekter).
- `src/app/*`: sidorna. `ugl/[ort]` genererar en sida per kursort.
- `src/app/api/kontakt/route.ts`: tar emot alla formulär.
- `next.config.ts`: 301 från gamla ortsidor utan kurs till /kurser.
- `public/assets/`: lägg in `ugl-hero.webp` och `ugl-grupp.webp` från nuvarande sajt här (hero-bilden används som bakgrund på startsidan).

## Formulär

Formulären sparar inget själva. Sätt minst en av dessa miljövariabler i Vercel:

- `FORM_WEBHOOK_URL`: alla formulär skickas som JSON hit (Make, Zapier, Supabase edge function, egen endpoint).
- `RESEND_API_KEY` (+ valfritt `FORM_TO_EMAIL`, `FORM_FROM_EMAIL`): mejl till kontakt@uglsverige.store via Resend.

Utan någon av dem loggas inskick bara i Vercels funktionslogg.

## Kör lokalt

```
npm install
npm run dev
```

## Uppdatera kursveckor

Redigera raderna i `src/data/kurser.ts` och driftsätt. Sidorna byggs om automatiskt en gång per dygn (ISR) så att passerade veckor försvinner.
