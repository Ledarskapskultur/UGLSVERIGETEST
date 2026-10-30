import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Tar emot alla formulär på sajten (boka, intresse, bevaka, ring, nyhetsbrev, foretag, kommun, omdome).
 * - Skickar vidare till FORM_WEBHOOK_URL om den finns (t.ex. Make, Zapier, Supabase edge function).
 * - Mejlar via Resend om RESEND_API_KEY finns.
 * - Loggar alltid till serverloggen så att inget försvinner medan integrationerna sätts upp.
 */
export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honungsfälla mot bottar: fältet "webbplats" är dolt och ska vara tomt.
  if (data.webbplats) return NextResponse.json({ ok: true });

  const typ = String(data.typ || "okand");
  const epost = String(data.epost || "");
  if (!epost || !epost.includes("@")) return NextResponse.json({ ok: false, fel: "epost" }, { status: 400 });

  const payload = { ...data, mottaget: new Date().toISOString(), kalla: SITE.url };
  console.log("[formular]", JSON.stringify(payload));

  const jobs: Promise<unknown>[] = [];

  if (process.env.FORM_WEBHOOK_URL) {
    jobs.push(
      fetch(process.env.FORM_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).catch((e) => console.error("webhook", e))
    );
  }

  if (process.env.RESEND_API_KEY) {
    const to = process.env.FORM_TO_EMAIL || SITE.email;
    const from = process.env.FORM_FROM_EMAIL || `UGL Sverige <noreply@${new URL(SITE.url).hostname.replace(/^www\./, "")}>`;
    const rows = Object.entries(payload).map(([k, v]) => `<tr><td style="padding:4px 8px;color:#666">${k}</td><td style="padding:4px 8px">${escapeHtml(String(v))}</td></tr>`).join("");
    jobs.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, reply_to: epost, subject: `[UGL Sverige] ${typ}: ${data.namn || epost}`, html: `<table>${rows}</table>` }),
      }).catch((e) => console.error("resend", e))
    );
  }

  await Promise.all(jobs);
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
