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
  image?: { src: string; alt: string };
  related: string[];
  body: ArticleBlock[];
};

export const posts: Post[] = [
  {
    slug: "iptv-buffrar",
    title: "IPTV buffrar? 8 sätt att få en stabil bild",
    description:
      "Buffrar eller hackar din IPTV? Här är 8 beprövade sätt att få stabil bild – från kabel och 5 GHz-wifi till appinställningar. Testa idag!",
    excerpt:
      "Bilden fryser eller laddar hela tiden? Så tar du reda på om felet sitter i nätverket, enheten eller tjänsten – och 8 sätt att få en stabil bild.",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    readingMinutes: 8,
    image: {
      src: "/images/blog/iptv-buffrar-smart-tv-wifi.webp",
      alt: "Smart TV som buffrar under en fotbollsmatch, med en wifi-router i förgrunden",
    },
    related: ["vad-ar-iptv"],
    body: [
      {
        type: "p",
        content: [
          "IPTV buffrar oftast på grund av instabilt wifi, för låg internethastighet eller en överbelastad enhet. Börja med att starta om routern och ansluta TV:n eller boxen med nätverkskabel – det löser många fall direkt. Nedan går vi igenom hur du hittar orsaken och 8 sätt att få en stabil bild.",
        ],
      },
      { type: "h2", text: "Varför buffrar IPTV?", id: "varfor-buffrar-iptv" },
      {
        type: "p",
        content: [
          "När du tittar på IPTV laddar appen hela tiden in bilden i små delar via internet. Så länge delarna kommer fram snabbare än de spelas upp flyter allt på. Kommer de för långsamt, eller ojämnt, tar bufferten slut och bilden stannar medan appen laddar om. Det är därför en stabil uppkoppling ofta betyder mer än en hög maxhastighet.",
        ],
      },
      {
        type: "p",
        content: [
          "Vill du veta mer om hur tekniken fungerar kan du läsa vår guide om ",
          { text: "vad IPTV är och hur det fungerar", href: "/blog/vad-ar-iptv" },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Snabbdiagnos: nätverket, enheten eller tjänsten?",
        id: "snabbdiagnos",
      },
      {
        type: "p",
        content: [
          "Titta på hur problemet visar sig. Det ger ofta en tydlig ledtråd om var felet sitter:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Alla kanaler buffrar, på alla enheter – troligen din uppkoppling eller routern. Börja med punkt 1–4 nedan."],
          ["Bara en enhet buffrar – troligen enheten, appen eller wifi-signalen just där. Prova punkt 2, 3 och 5."],
          ["Det buffrar främst på kvällen – många använder nätet samtidigt. Se punkt 7 och 8."],
          ["Bara en kanal buffrar – felet ligger troligen hos kanalen, inte hos dig. Kontakta oss så kontrollerar vi den."],
          ["Ljudet fungerar men bilden fryser – ofta enheten eller appen. Rensa cache och uppdatera enligt punkt 5."],
          ["Problemet började efter en uppdatering – starta om enheten och kontrollera att appen är uppdaterad till senaste versionen."],
        ],
      },
      { type: "h2", text: "8 sätt att få en stabil bild", id: "8-satt" },
      { type: "h3", text: "1. Mät hastigheten på rätt sätt", id: "mat-hastigheten" },
      {
        type: "p",
        content: [
          "Mät hastigheten på samma enhet och samma uppkoppling som du tittar på, helst på kvällen när det brukar buffra. En mätning på mobilen bredvid routern säger inte mycket om hur det ser ut vid TV:n. Du kan till exempel använda ",
          { text: "Bredbandskollen", href: "https://www.bredbandskollen.se/" },
          ". Så här mycket behöver du minst:",
        ],
      },
      {
        type: "ul",
        items: [["SD: 5 Mbit/s"], ["HD: 10 Mbit/s"], ["4K: 25 Mbit/s"]],
      },
      {
        type: "p",
        content: [
          "Ligger du nära gränsen, eller varierar värdet mycket mellan mätningarna, är det troligen där problemet finns.",
        ],
      },
      { type: "h3", text: "2. Anslut med nätverkskabel", id: "natverkskabel" },
      {
        type: "p",
        content: [
          "En trådbunden anslutning är det enklaste sättet att få en stabil bild. Kabeln påverkas inte av väggar, avstånd eller andra trådlösa nätverk, så IPTV hackar betydligt mindre. Har TV:n eller boxen en nätverksport, dra en kabel direkt till routern.",
        ],
      },
      {
        type: "p",
        content: [
          "Går det inte att dra kabel kan en powerline-adapter vara ett alternativ. Den skickar internet via elnätet i hemmet. Hur bra det fungerar beror på elinstallationen, så testa gärna innan du bestämmer dig.",
        ],
      },
      { type: "h3", text: "3. Optimera ditt wifi", id: "wifi" },
      {
        type: "p",
        content: ["Måste du använda wifi finns det flera saker som gör skillnad:"],
      },
      {
        type: "ul",
        items: [
          ["Anslut till routerns 5 GHz-band om det finns. Det är snabbare och störs mindre, men räckvidden är kortare än på 2,4 GHz."],
          ["Placera routern fritt och högt, inte i ett skåp eller bakom TV:n."],
          ["Minska avståndet och antalet väggar mellan router och TV."],
          ["I större bostäder kan ett mesh-system ge jämnare täckning i alla rum."],
        ],
      },
      { type: "h3", text: "4. Starta om router och enhet", id: "starta-om" },
      {
        type: "p",
        content: [
          "Det låter enkelt, men en omstart löser förvånansvärt ofta problemet. Gör en kallstart: dra ur strömsladden till routern och till TV:n eller boxen, vänta ungefär en minut och koppla sedan in dem igen. Då töms arbetsminnet och anslutningen byggs upp på nytt.",
        ],
      },
      { type: "h3", text: "5. Rensa cache och uppdatera appen", id: "rensa-cache" },
      {
        type: "p",
        content: [
          "Med tiden kan appens tillfälliga filer göra den långsammare. Rensa appens cache i enhetens inställningar och se till att både appen och enhetens mjukvara är uppdaterade. Hur du gör skiljer sig mellan enheter – se vår guide för ",
          { text: "Firestick", href: "/installera#firestick" },
          ", ",
          { text: "Android TV", href: "/installera#android-tv" },
          " eller ",
          { text: "Smart TV", href: "/installera#smart-tv" },
          ".",
        ],
      },
      {
        type: "h3",
        text: "6. Kontrollera appens spelarinställningar",
        id: "appinstallningar",
      },
      {
        type: "p",
        content: [
          "Vissa IPTV-appar har inställningar för videospelare eller buffertstorlek. Finns det i din app kan en större buffert ge jämnare uppspelning, men det tar något längre tid innan kanalen startar. Alla appar har inte de här inställningarna, och menyerna ser olika ut. Är du osäker kan du fråga oss, eller läsa om ",
          { text: "vilken app som passar din enhet", href: "/installera" },
          ".",
        ],
      },
      {
        type: "h3",
        text: "7. Minska belastningen på nätverket",
        id: "minska-belastningen",
      },
      {
        type: "p",
        content: [
          "Allt som använder internet samtidigt delar på samma uppkoppling. Stora nedladdningar, spelkonsoler som uppdateras, molnsäkerhetskopiering och andra som streamar kan ta så mycket kapacitet att IPTV-strömmen inte hinner med. Pausa det som inte behövs medan du tittar. Använder du VPN kan det också sänka hastigheten – prova att stänga av det tillfälligt och se om det blir bättre.",
        ],
      },
      { type: "h3", text: "8. Sänk bildkvaliteten tillfälligt", id: "sank-kvaliteten" },
      {
        type: "p",
        content: [
          "4K kräver betydligt mer bandbredd än HD. Om din uppkoppling ligger nära gränsen, välj HD-versionen av kanalen i stället. Skillnaden syns ofta mindre än du tror, och en stabil HD-bild är bättre än en 4K-bild som stannar.",
        ],
      },
      { type: "h2", text: "Buffrar det fortfarande? Så hjälper vi dig", id: "support" },
      {
        type: "p",
        content: [
          "Har du provat stegen ovan och det fortfarande buffrar på alla kanaler trots en stabil uppkoppling, kan felet ligga hos oss. Hör av dig till ",
          { text: "vår support via WhatsApp", href: "/om-oss" },
          " så felsöker vi tillsammans. Det går snabbast om du skickar med:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Vilken kanal eller vilka kanaler som buffrar"],
          ["Ungefär när det händer (tid och dag)"],
          ["Vilken enhet och vilken app du använder"],
          ["Resultatet från din hastighetsmätning"],
        ],
      },
      { type: "h2", text: "Vanliga frågor om IPTV-buffring", id: "vanliga-fragor" },
      { type: "h3", text: "Varför buffrar IPTV mer på kvällen?" },
      {
        type: "p",
        content: [
          "På kvällen är fler uppkopplade samtidigt, både i ditt hem och i nätet i stort. Det gör att marginalerna krymper. Kabelanslutning och färre samtidiga nedladdningar brukar hjälpa mest.",
        ],
      },
      { type: "h3", text: "Hjälper en snabbare internetuppkoppling alltid?" },
      {
        type: "p",
        content: [
          "Inte alltid. Om problemet är dåligt wifi eller en överbelastad enhet blir det inte bättre av ett snabbare abonnemang. Mät först vid TV:n och prova kabel innan du uppgraderar.",
        ],
      },
      { type: "h3", text: "Varför fungerar Netflix men inte IPTV?" },
      {
        type: "p",
        content: [
          "Tjänster som Netflix strömmar inspelat material. De kan ladda långt i förväg och sänker bildkvaliteten automatiskt när uppkopplingen svajar. Live-TV sänds i realtid, så appen kan inte buffra lika mycket i förväg och blir därför känsligare för ojämn uppkoppling.",
        ],
      },
      { type: "h3", text: "Är en Smart TV sämre än en IPTV-box?" },
      {
        type: "p",
        content: [
          "Inte nödvändigtvis. Äldre Smart TV-apparater har ofta mindre minne och långsammare processor än en modern streamingbox, vilket kan märkas. En nyare Smart TV med en bra app fungerar i regel bra.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "De snabbaste lösningarna när IPTV buffrar är att ansluta med nätverkskabel, starta om router och enhet och mäta hastigheten vid TV:n. Hjälper inget av det kan du felsöka vidare med punkterna ovan eller höra av dig till oss. Med ",
          { text: "IPTV Sverige", href: "/" },
          " får du support via WhatsApp dygnet runt när du behöver hjälp.",
        ],
      },
    ],
  },
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
    image: {
      src: "/images/family-watching-tv.jpg",
      alt: "Familj som tittar på IPTV tillsammans i soffan",
    },
    related: ["iptv-buffrar"],
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
