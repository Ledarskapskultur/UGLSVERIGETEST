import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="logo">UGL <span>Sverige</span></div>
            <p className="muted mt-1" style={{ maxWidth: "36ch" }}>{SITE.description}</p>
            <p className="mt-1"><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></p>
          </div>
          <div>
            <h4>Om UGL</h4>
            <ul>
              <li><Link href="/vad-ar-ugl">Vad är UGL</Link></li>
              <li><Link href="/vad-ar-ugl#utvecklingsomraden">Utvecklingsområden</Link></li>
              <li><Link href="/forskning">Forskning</Link></li>
              <li><Link href="/blogg">Blogg</Link></li>
              <li><Link href="/fragor-och-svar">Vanliga frågor</Link></li>
            </ul>
          </div>
          <div>
            <h4>Bokning</h4>
            <ul>
              <li><Link href="/kurser">Kursdatum och bokning</Link></li>
              <li><Link href="/ugl">Kursorter</Link></li>
              <li><Link href="/foretag">UGL i egen regi</Link></li>
              <li><Link href="/kommun">För kommuner och regioner</Link></li>
              <li><Link href="/kontakt#nyhetsbrev">Nyhetsbrev</Link></li>
            </ul>
          </div>
          <div>
            <h4>Om oss</h4>
            <ul>
              <li><Link href="/om-oss">Om UGL Sverige</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
              <li><Link href="/villkor">Villkor</Link></li>
              <li><Link href="/integritetspolicy">Integritetspolicy</Link></li>
              <li><a href="https://www.fhs.se" rel="noopener">Försvarshögskolan</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {SITE.name}. UGL är ett koncept som ägs av Försvarshögskolan. {SITE.company}, org.nr {SITE.orgnr}.</span>
          <a href="#innehall">Till toppen</a>
        </div>
      </div>
    </footer>
  );
}
