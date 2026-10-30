import type { MetadataRoute } from "next";
import { ORTER } from "@/data/kurser";
import { INLAGG } from "@/data/blogg";
import { absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fasta = ["/", "/kurser", "/vad-ar-ugl", "/forskning", "/blogg", "/ugl", "/foretag", "/kommun", "/om-oss", "/kontakt", "/fragor-och-svar", "/villkor", "/integritetspolicy"];
  return [
    ...fasta.map((p) => ({ url: absUrl(p), lastModified: now, changeFrequency: (p === "/kurser" ? "weekly" : "monthly") as "weekly" | "monthly", priority: p === "/" ? 1 : p === "/kurser" ? 0.9 : 0.7 })),
    ...ORTER.map((o) => ({ url: absUrl(`/ugl/${o.slug}`), lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...INLAGG.map((i) => ({ url: absUrl(`/blogg/${i.slug}`), lastModified: new Date(i.datum), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
