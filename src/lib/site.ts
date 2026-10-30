export const SITE = {
  name: "UGL Sverige",
  url: "https://www.uglsverige.store",
  email: "kontakt@uglsverige.store",
  phone: "070-145 62 51",
  phoneIntl: "+46701456251",
  address: { street: "Mälarparksvägen 11", postal: "723 56", city: "Västerås" },
  company: "CF Utbildning och Ledarskap AB",
  orgnr: "559386-6691",
  person: "Carl-Fredrik Zetterman",
  personTitle: "UGL-handledare, certifierad av Försvarshögskolan",
  linkedin: "https://www.linkedin.com/company/uglsverige",
  personLinkedin: "https://www.linkedin.com/in/carl-fredrik-zetterman-31b0a544",
  description:
    "Öppna UGL-kurser med certifierade handledare, på kursgårdar runt om i landet. Fem dagar. En grupp som byggs från grunden.",
};

export function absUrl(path: string): string {
  return SITE.url + (path.startsWith("/") ? path : "/" + path);
}
