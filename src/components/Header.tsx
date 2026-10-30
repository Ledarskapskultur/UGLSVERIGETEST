"use client";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/vad-ar-ugl", label: "Vad är UGL" },
  { href: "/kurser", label: "Kursdatum" },
  { href: "/ugl", label: "Kursorter" },
  { href: "/vad-ar-ugl#effekter", label: "Effekter" },
  { href: "/fragor-och-svar", label: "Frågor och svar" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="logo" aria-label="UGL Sverige, till startsidan">UGL Sverige.</Link>
          <nav className="nav" aria-label="Huvudmeny">
            {LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </nav>
          <div className="header__cta">
            <Link href="/kontakt" className="btn btn--ghost btn--sm">Vi ringer upp dig</Link>
            <Link href="/kurser" className="btn btn--sm">Se kursdatum</Link>
            <button className="menu-toggle" aria-expanded={open} aria-controls="mobilmeny" onClick={() => setOpen(!open)}>{open ? "Stäng" : "Meny"}</button>
          </div>
        </div>
        <nav id="mobilmeny" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobilmeny">
          {LINKS.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
          <Link href="/kontakt" onClick={() => setOpen(false)}>Vi ringer upp dig</Link>
        </nav>
      </div>
    </header>
  );
}
