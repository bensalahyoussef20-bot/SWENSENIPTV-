import type { InfoSegment } from "@/lib/data";

export type ArticleBlock =
  | { type: "p"; content: InfoSegment[] }
  | { type: "h2" | "h3"; text: string; id?: string }
  | { type: "ul" | "ol"; items: InfoSegment[][] };

export type Post = {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  related: string[];
  body: ArticleBlock[];
};

export const posts: Post[] = [
  {
    slug: "vad-ar-iptv",
    title: "Vad är IPTV? Så fungerar IPTV i Sverige",
    description:
      "Vad är IPTV och hur fungerar det? Lär dig hur TV via internet fungerar, vad du behöver, vilka enheter som stöds och hur du kommer igång med IPTV i Sverige.",
    excerpt:
      "IPTV är TV som strömmas via internet i stället för via antenn, parabol eller kabel. Här går vi igenom hur det fungerar, vad du behöver och hur du kommer igång.",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    readingMinutes: 5,
    related: [],
    body: [
      {
        type: "p",
        content: [
          "IPTV (Internet Protocol Television) är TV som levereras via internet i stället för via antenn, parabol eller kabel. Du tittar på kanaler, filmer och serier i en app eller på en box som är ansluten till din vanliga internetuppkoppling. I den här guiden förklarar vi hur IPTV fungerar, vad du behöver och hur du kommer igång i Sverige.",
        ],
      },
      { type: "h2", text: "Vad betyder IPTV?", id: "vad-betyder-iptv" },
      {
        type: "p",
        content: [
          "IPTV står för Internet Protocol Television. Namnet kommer från att TV-signalen skickas som datapaket över internet – samma teknik som används när du surfar, streamar musik eller ringer videosamtal. IPTV är i sig ingen ny teknik: många TV-operatörer levererar redan TV via bredband till sina kunder.",
        ],
      },
      {
        type: "p",
        content: [
          "Skillnaden mot traditionell TV är vägen signalen tar. I stället för att sändas ut via marknät, satellit eller kabelnät strömmas innehållet direkt till din enhet när du väljer en kanal eller ett program.",
        ],
      },
      { type: "h2", text: "Hur fungerar IPTV?", id: "hur-fungerar-iptv" },
      {
        type: "p",
        content: [
          "När du öppnar en kanal i din IPTV-app skickar appen en förfrågan till IPTV-leverantörens server. Servern svarar genom att strömma kanalen till dig i små datapaket, som appen sätter ihop till bild och ljud i realtid. Hela processen tar bara några sekunder.",
        ],
      },
      { type: "p", content: ["Innehållet i en IPTV-tjänst brukar delas in i två delar:"] },
      {
        type: "ul",
        items: [
          ["Live-TV – kanaler som sänds i realtid, till exempel sport och nyheter."],
          ["Video on demand (VOD) – filmer och serier som du startar när du vill."],
        ],
      },
      {
        type: "p",
        content: [
          "För att logga in i appen använder du uppgifter från din leverantör, oftast i form av Xtream Codes (serveradress, användarnamn och lösenord), en M3U-länk eller aktivering via enhetens MAC-adress.",
        ],
      },
      {
        type: "h2",
        text: "IPTV jämfört med kabel-TV och parabol",
        id: "iptv-jamfort-med-kabel-tv",
      },
      { type: "p", content: ["De största skillnaderna för dig som tittare är:"] },
      {
        type: "ul",
        items: [
          ["Ingen extra utrustning – du behöver ingen parabol, antenn eller kabeldosa."],
          ["Titta var du vill – samma tjänst fungerar på TV:n, mobilen och surfplattan."],
          ["Snabb start – du kan ofta vara igång samma dag i stället för att vänta på installation."],
          ["Beroende av internet – bildkvaliteten styrs av hur stabil din uppkoppling är."],
        ],
      },
      { type: "h2", text: "Vad behöver du för att titta på IPTV?", id: "vad-behover-du" },
      {
        type: "ul",
        items: [
          ["En stabil internetuppkoppling – minst 10 Mbit/s för HD och 25 Mbit/s för 4K."],
          ["En kompatibel enhet, till exempel Smart TV, Firestick, Android TV, Apple TV, MAG Box, mobil eller surfplatta."],
          ["En IPTV-app för din enhet (behövs inte för MAG Box)."],
          ["Inloggningsuppgifter från din IPTV-leverantör."],
        ],
      },
      {
        type: "p",
        content: [
          "En trådbunden anslutning via nätverkskabel ger oftast den jämnaste bilden. Använder du wifi hjälper det att ha routern nära TV:n. Vilken app som passar din enhet går vi igenom i vår ",
          { text: "installationsguide för IPTV", href: "/installera" },
          ".",
        ],
      },
      { type: "h2", text: "Vilka enheter fungerar med IPTV?", id: "enheter" },
      {
        type: "p",
        content: [
          "IPTV fungerar på de flesta moderna enheter med internetanslutning. Här är de vanligaste – klicka för steg-för-steg-instruktioner:",
        ],
      },
      {
        type: "ul",
        items: [
          [{ text: "Smart TV", href: "/installera#smart-tv" }, " – Samsung, LG och andra smarta TV-apparater."],
          [{ text: "Amazon Fire TV Stick", href: "/installera#firestick" }, " – ett prisvärt sätt att göra en vanlig TV smart."],
          [{ text: "Android TV", href: "/installera#android-tv" }, " – TV-apparater och boxar med Android TV eller Google TV."],
          [{ text: "Apple TV", href: "/installera#apple-tv" }, " – via en IPTV-app från App Store."],
          [{ text: "MAG Box", href: "/installera#mag" }, " – en dedikerad IPTV-box som aktiveras via MAC-adress."],
          [{ text: "Mobil och surfplatta", href: "/installera#mobil" }, " – för att titta på språng."],
        ],
      },
      { type: "h2", text: "Så kommer du igång med IPTV i Sverige", id: "kom-igang" },
      {
        type: "ol",
        items: [
          ["Välj ett ", { text: "abonnemang", href: "/priser" }, " – 3, 6 eller 12 månader – eller börja med en gratis testperiod."],
          ["Kontakta oss via WhatsApp och berätta vilken enhet du ska titta på."],
          ["Efter din beställning får du dina aktiverings- och inloggningsuppgifter."],
          ["Installera appen och logga in enligt ", { text: "guiden för din enhet", href: "/installera" }, "."],
        ],
      },
      {
        type: "p",
        content: [
          "Med ",
          { text: "IPTV Sverige", href: "/" },
          " från Sweden IPTV får du sport, filmer, serier, nyheter och barnkanaler i HD och 4K – utan bindningstid.",
        ],
      },
      { type: "h2", text: "Vanliga frågor om IPTV", id: "vanliga-fragor" },
      { type: "h3", text: "Behöver jag en Smart TV för att titta på IPTV?" },
      {
        type: "p",
        content: [
          "Nej. Har du en vanlig TV med HDMI-ingång kan du ansluta en Fire TV Stick, en Android TV-box eller en MAG Box och titta på IPTV via den.",
        ],
      },
      { type: "h3", text: "Fungerar IPTV över wifi?" },
      {
        type: "p",
        content: [
          "Ja, så länge uppkopplingen är stabil. Om bilden hackar kan du prova att flytta routern närmare, byta till 5 GHz-bandet eller ansluta enheten med nätverkskabel.",
        ],
      },
      { type: "h3", text: "Kan jag testa innan jag köper?" },
      {
        type: "p",
        content: [
          "Ja. Vi erbjuder en gratis testperiod så att du kan kontrollera att allt fungerar med din uppkoppling och din enhet innan du väljer ett abonnemang.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "IPTV är TV via internet. Allt du behöver är en stabil uppkoppling, en kompatibel enhet och en app. Jämfört med kabel-TV och parabol slipper du extra utrustning och kan titta på flera enheter. Vill du komma igång kan du ",
          { text: "jämföra våra priser", href: "/priser" },
          " eller starta en gratis testperiod.",
        ],
      },
    ],
  },
];

export function getAllPosts() {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}
