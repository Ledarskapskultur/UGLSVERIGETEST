import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section"><div className="container">
      <span className="eyebrow">Sidan finns inte</span>
      <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>Den här sidan <em className="accent">finns inte.</em></h1>
      <p className="muted mt-1">Kursveckorna hittar du på kurssidan, och alla kursorter under Kursorter.</p>
      <div className="mt-2" style={{ display: "flex", gap: 12 }}><Link href="/kurser" className="btn">Kursdatum</Link><Link href="/ugl" className="btn btn--ghost">Kursorter</Link></div>
    </div></section>
  );
}
