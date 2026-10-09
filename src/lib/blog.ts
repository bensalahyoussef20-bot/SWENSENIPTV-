import { infoSection, installApps, type InfoSegment } from "@/lib/data";

export type ArticleBlock =
  | { type: "p"; content: InfoSegment[] }
  | { type: "h2" | "h3"; text: string; id?: string }
  | { type: "ul" | "ol"; items: InfoSegment[][] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; width: number; height: number };

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

const internethastighetImage = {
  src: "/images/blog/internethastighet-for-iptv.webp",
  alt: "Internethastighet för IPTV Sverige med hastighetstest för stabil streaming",
};

const xtreamM3uImage = {
  src: "/images/blog/xtream-codes-eller-m3u.webp",
  alt: "Jämförelse av IPTV-inloggning med Xtream Codes, M3U-länk och MAC-aktivering",
};

export const posts: Post[] = [
  {
    slug: "xtream-codes-eller-m3u",
    title: "Xtream Codes eller M3U – vad är bäst för IPTV?",
    metaTitle: "Xtream Codes vs M3U – vad är bäst för IPTV?",
    description:
      "Xtream Codes eller M3U-länk? Se skillnaden, vilka appar som stöder vad och vilken inloggning som passar din enhet bäst. Läs guiden här!",
    excerpt:
      "Xtream Codes, M3U-länk eller MAC-aktivering? Så skiljer sig inloggningarna åt, vilka appar som stöder vad och hur du väljer rätt för din enhet.",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-09",
    readingMinutes: 7,
    image: xtreamM3uImage,
    related: ["vad-ar-iptv", "internethastighet-for-iptv"],
    body: [
      {
        type: "p",
        content: [
          "Kan din app logga in med Xtream Codes är det oftast det smidigaste valet, eftersom kanaler, filmer, serier och TV-guide brukar hämtas automatiskt och sorteras i appen. En M3U-länk fungerar i fler appar och är ett bra alternativ om din app bara stöder spellistor. Har du en MAG Box eller vissa Smart TV-appar används i stället MAC-aktivering.",
        ],
      },
      {
        type: "p",
        content: [
          "Här går vi igenom vad Xtream Codes och M3U är, hur de skiljer sig åt, när MAC-aktivering är aktuell och hur du väljer rätt inloggning för just din enhet och app.",
        ],
      },
      { type: "image", ...xtreamM3uImage, width: 1672, height: 941 },
      { type: "h2", text: "Vad är Xtream Codes?", id: "vad-ar-xtream-codes" },
      {
        type: "p",
        content: [
          "Xtream Codes är ett sätt att logga in i en IPTV-app med tre uppgifter: serveradress, användarnamn och lösenord. Appen ansluter sedan till servern och hämtar själv innehållet, uppdelat i live-TV, filmer och serier.",
        ],
      },
      {
        type: "p",
        content: [
          "Fördelen är att du bara behöver skriva in tre uppgifter, och att appen i många fall även hämtar TV-guiden (EPG) och omslagsbilder automatiskt. Det gör det lättare att hitta rätt bland kanaler, filmer och serier. Hur du loggar in steg för steg visar vi i ",
          { text: "installationsguiden för Firestick", href: "/installera#firestick" },
          ".",
        ],
      },
      { type: "h2", text: "Vad är en M3U-länk?", id: "vad-ar-m3u" },
      {
        type: "p",
        content: [
          "En M3U-länk är en adress till en spellista. Listan innehåller kanalerna och var de ska hämtas ifrån, och länken slutar ofta på .m3u eller .m3u8. Du klistrar in länken i din IPTV-app, som läser listan och visar kanalerna.",
        ],
      },
      {
        type: "p",
        content: [
          "M3U är ett av de vanligaste formaten och stöds av många spelare, även enklare appar. Beroende på app kan TV-guiden behöva läggas till separat, och filmer och serier visas inte alltid lika överskådligt som med Xtream Codes.",
        ],
      },
      {
        type: "p",
        content: [
          "Ibland ser du ändelsen .m3u8 i stället för .m3u. Det är samma typ av spellista, och för dig som tittare spelar skillnaden sällan någon roll – de flesta IPTV-appar hanterar båda. Det viktiga är att du klistrar in länken exakt som du fått den, utan att ändra eller korta den.",
        ],
      },
      {
        type: "h2",
        text: "Xtream Codes eller M3U – jämförelse",
        id: "jamforelse",
      },
      {
        type: "p",
        content: ["Så här brukar de två inloggningarna skilja sig åt i praktiken:"],
      },
      {
        type: "table",
        head: ["Egenskap", "Xtream Codes", "M3U-länk"],
        rows: [
          ["Det här anger du", "Serveradress, användarnamn och lösenord", "En länk till spellistan"],
          ["Kanaler, filmer och serier", "Brukar sorteras automatiskt i appen", "Visas som en lista; upplägget beror på appen"],
          ["TV-guide (EPG)", "Hämtas ofta automatiskt", "Kan behöva läggas till separat"],
          ["Stöd i appar", "Stöds av många IPTV-appar", "Stöds av de flesta spelare"],
          ["Om uppgifterna ändras", "Du uppdaterar inloggningen i appen", "Du lägger in den nya länken eller uppdaterar spellistan"],
        ],
      },
      {
        type: "p",
        content: [
          "Kanalerna och bildkvaliteten är desamma oavsett inloggning – skillnaden ligger i hur appen hämtar och visar innehållet.",
        ],
      },
      { type: "h2", text: "Och MAC-aktivering då?", id: "mac-aktivering" },
      {
        type: "p",
        content: [
          "Vissa enheter och appar loggar inte in med Xtream Codes eller M3U-länk själva, utan aktiveras via enhetens MAC-adress. Det gäller till exempel MAG Box och, beroende på uppsättning, IBO Player och Smart IPTV på Samsung och LG Smart TV.",
        ],
      },
      {
        type: "p",
        content: [
          "Då hittar du MAC-adressen på enheten eller i appen och skickar den till oss via WhatsApp, så aktiverar vi den åt dig. Hur det går till steg för steg ser du i guiden för ",
          { text: "MAC-aktivering på MAG Box", href: "/installera#mag" },
          " och i guiden för ",
          { text: "Smart TV", href: "/installera#smart-tv" },
          ".",
        ],
      },
      { type: "h2", text: "Vilken ska du välja?", id: "vilken-ska-du-valja" },
      {
        type: "ul",
        items: [
          ["Välj Xtream Codes om din app stöder det, till exempel IPTV Smarters eller TiviMate. Det brukar ge den mest överskådliga upplevelsen med kanaler, filmer, serier och TV-guide."],
          ["Välj M3U-länk om din app bara stöder spellistor, eller om du vill ha ett alternativ att falla tillbaka på."],
          ["Välj MAC-aktivering om du har en MAG Box eller om din Smart TV-app visar en MAC-adress och ber dig aktivera den."],
          ["Är du osäker? Berätta vilken enhet och vilken app du använder när du beställer, så får du rätt typ av uppgifter från början."],
        ],
      },
      {
        type: "p",
        content: [
          "Utgår du från enheten blir valet ofta enkelt. På Firestick, Fire TV och Android TV används vanligtvis TiviMate eller IPTV Smarters, och där är Xtream Codes det naturliga förstahandsvalet. På Samsung och LG Smart TV används ofta IBO Player eller Smart IPTV, och där beror det på appen och TV-modellen om du loggar in med M3U-länk, Xtream Codes eller MAC-aktivering. På Apple TV, mobil och surfplatta fungerar IPTV Smarters med både Xtream Codes och M3U-länk.",
        ],
      },
      { type: "h2", text: "Vilka appar stöder vad?", id: "appar" },
      {
        type: "p",
        content: [
          "Här är apparna vi går igenom i installationsguiden och vilka inloggningar de stöder:",
        ],
      },
      {
        type: "table",
        head: ["App", "Enheter", "Inloggning"],
        rows: installApps.map((app) => [app.name, app.devices, app.login]),
      },
      {
        type: "p",
        content: [
          "Fullständiga instruktioner för varje enhet hittar du i vår ",
          { text: "installationsguide", href: "/installera" },
          ". Vill du först förstå grunderna kan du läsa mer om ",
          { text: "hur IPTV fungerar", href: "/blog/vad-ar-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Kan jag använda både Xtream Codes och M3U?" },
      {
        type: "p",
        content: [
          "Det beror på hur du får dina uppgifter och vilken app du använder. Vill du kunna växla mellan dem, eller använda olika appar på olika enheter, kan du nämna det när du beställer.",
        ],
      },
      { type: "h3", text: "Varför fungerar inte min M3U-länk?" },
      {
        type: "p",
        content: [
          "Kontrollera att hela länken är inklistrad utan extra mellanslag och att den är inskriven exakt som du fick den. Uppdatera sedan spellistan eller starta om appen. Hjälper det inte kan du prova att logga in med Xtream Codes i stället, om din app stöder det, eller höra av dig till oss.",
        ],
      },
      { type: "h3", text: "Varför misslyckas inloggningen med Xtream Codes?" },
      {
        type: "p",
        content: ["Oftast beror det på någon av följande saker:"],
      },
      {
        type: "ul",
        items: [
          ["Serveradressen är inte inskriven exakt som du fick den, till exempel utan http:// eller utan portnummer."],
          ["Användarnamn eller lösenord är fel – de är skiftlägeskänsliga, så stora och små bokstäver spelar roll."],
          ["Ett extra mellanslag har följt med när du kopierade uppgifterna."],
          ["Fel inloggningstyp är vald i appen, till exempel en M3U-länk inklistrad där appen förväntar sig Xtream Codes."],
        ],
      },
      {
        type: "p",
        content: [
          "Kontrollera uppgifterna en i taget och försök igen. Fungerar det fortfarande inte är du välkommen att höra av dig till oss.",
        ],
      },
      { type: "h3", text: "Vad är EPG?" },
      {
        type: "p",
        content: [
          "EPG står för Electronic Program Guide, alltså TV-guiden som visar vad som sänds just nu och senare på varje kanal. Med Xtream Codes brukar många appar hämta TV-guiden automatiskt, medan den med M3U-länk ibland behöver läggas till separat i appens inställningar.",
        ],
      },
      { type: "h3", text: "Ska jag hålla mina inloggningsuppgifter hemliga?" },
      {
        type: "p",
        content: [
          "Ja. Behandla serveradress, användarnamn, lösenord och M3U-länk som ett lösenord och dela dem inte med andra. De är kopplade till ditt abonnemang.",
        ],
      },
      { type: "h3", text: "Vilken inloggning ger bäst bildkvalitet?" },
      {
        type: "p",
        content: [
          "Bildkvaliteten beror inte på om du loggar in med Xtream Codes eller M3U, utan på strömmen och din uppkoppling. Läs mer om ",
          { text: "vilken internethastighet du behöver för HD och 4K", href: "/blog/internethastighet-for-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Xtream Codes är oftast det smidigaste valet om din app stöder det, M3U-länken fungerar i fler appar och MAC-aktivering används för MAG Box och vissa Smart TV-appar. Med ",
          { text: "IPTV Sverige", href: "/" },
          " från Sweden IPTV får du den inloggning som passar din enhet – berätta bara vilken app du använder när du väljer bland ",
          { text: "våra abonnemang", href: "/priser" },
          ".",
        ],
      },
    ],
  },
  {
    slug: "internethastighet-for-iptv",
    title: "Hur snabbt internet behöver du för IPTV i HD och 4K?",
    metaTitle: "Internethastighet för IPTV i HD och 4K",
    description:
      "Hur snabbt internet behöver du för IPTV? Se hur många Mbit/s som krävs för SD, HD och 4K och hur du mäter rätt hemma. Läs hela guiden!",
    excerpt:
      "Hur många Mbit/s behöver du för IPTV i SD, HD och 4K? Här är siffrorna, hur du räknar ut vad hela hushållet behöver och hur du mäter rätt.",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
    readingMinutes: 6,
    image: internethastighetImage,
    related: ["iptv-buffrar", "vad-ar-iptv"],
    body: [
      {
        type: "p",
        content: [
          "För IPTV behöver du minst 5 Mbit/s för SD, 10 Mbit/s för HD och 25 Mbit/s för 4K – per ström. Tittar flera personer samtidigt lägger du ihop behovet för varje TV, mobil eller surfplatta. Rätt internethastighet för IPTV handlar alltså både om hur hög kvalitet du vill ha och om hur många som streamar samtidigt hemma.",
        ],
      },
      {
        type: "p",
        content: [
          "I den här guiden går vi igenom siffrorna, hur du räknar ut vad ditt hushåll behöver, hur du mäter hastigheten på rätt sätt och varför bilden ibland hackar trots att du har snabbt bredband.",
        ],
      },
      { type: "image", ...internethastighetImage, width: 1672, height: 941 },
      { type: "h2", text: "Internethastighet för IPTV – snabbtabell", id: "snabbtabell" },
      {
        type: "p",
        content: ["Så här mycket behöver du minst för en ström i varje bildkvalitet:"],
      },
      {
        type: "table",
        head: ["Bildkvalitet", "Minsta hastighet per ström"],
        rows: infoSection.speeds.map((s) => [s.quality, s.speed]),
      },
      {
        type: "p",
        content: [
          "Siffrorna är miniminivåer. De visar vad som krävs för att en ström ska fungera, inte vad som ger bäst marginal. Läs mer om hur tekniken bakom fungerar i vår guide om ",
          { text: "hur IPTV fungerar", href: "/blog/vad-ar-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Vad betyder Mbit/s?", id: "vad-betyder-mbit" },
      {
        type: "p",
        content: [
          "Mbit/s står för megabit per sekund och anger hur mycket data din uppkoppling kan föra över varje sekund. Det är samma enhet som bredbandsleverantörer använder när de skriver till exempel 100/100 eller 250/100 – den första siffran är nedladdning och den andra uppladdning.",
        ],
      },
      {
        type: "p",
        content: [
          "Blanda inte ihop Mbit/s med MB/s, som ofta visas när du laddar ner filer. En byte är åtta bitar, så 1 MB/s motsvarar 8 Mbit/s. När du jämför din uppkoppling med siffrorna i den här guiden är det alltså Mbit/s du ska titta på.",
        ],
      },
      { type: "h2", text: "Varför 4K kräver mer än HD", id: "varfor-4k" },
      {
        type: "p",
        content: [
          "En 4K-bild består av betydligt fler bildpunkter än en HD-bild. Fler bildpunkter betyder mer data per sekund, och därför behöver 4K en snabbare uppkoppling för att spelas upp jämnt. HD och SD klarar sig med mindre.",
        ],
      },
      {
        type: "p",
        content: [
          "Lika viktigt som hur snabb uppkopplingen är, är hur stabil den är. IPTV-appen laddar hela tiden in bilden i små delar. Om hastigheten varierar mycket hinner appen inte ladda tillräckligt i förväg, och då stannar bilden – även om uppkopplingen i genomsnitt är snabb nog.",
        ],
      },
      { type: "h2", text: "Räkna ut vad ditt hushåll behöver", id: "hushallet" },
      {
        type: "p",
        content: [
          "Har du flera TV-apparater, eller tittar någon på mobilen samtidigt, lägger du ihop behovet för varje ström. Några exempel:",
        ],
      },
      {
        type: "table",
        head: ["Situation", "Uträkning", "Minsta hastighet"],
        rows: [
          ["1 TV i HD", "10", "10 Mbit/s"],
          ["1 TV i 4K", "25", "25 Mbit/s"],
          ["2 TV-apparater i 4K", "25 + 25", "50 Mbit/s"],
          ["2 TV-apparater i 4K + 1 mobil i HD", "25 + 25 + 10", "60 Mbit/s"],
        ],
      },
      {
        type: "p",
        content: [
          "Tänk på hur ni faktiskt tittar. Står det en TV i vardagsrummet och en i sovrummet, och tittar barnen ibland på surfplattan samtidigt, är det den situationen du ska räkna på – inte en vanlig vardagskväll när bara en TV är igång.",
        ],
      },
      {
        type: "p",
        content: [
          "Kom ihåg att summan är ett minimum för just IPTV-strömmarna. Resten av hemmet använder också internet samtidigt – spelkonsoler, nedladdningar, videosamtal och mobiler som uppdaterar appar. Ju mer annat som pågår, desto mer marginal behöver du utöver minimibehovet. Därför är det klokt att ha en uppkoppling som ligger en bit över summan i tabellen, i stället för precis på gränsen.",
        ],
      },
      { type: "h2", text: "Så mäter du din internethastighet rätt", id: "mata" },
      {
        type: "p",
        content: [
          "Den hastighet som står i ditt bredbandsavtal gäller oftast fram till routern. Det som spelar roll för IPTV är hastigheten där du faktiskt tittar. Så här mäter du rätt:",
        ],
      },
      {
        type: "ol",
        items: [
          ["Mät på den enhet du tittar på, eller så nära den som möjligt. En mätning på mobilen bredvid routern säger lite om hur det ser ut vid TV:n."],
          ["Mät på kvällen, när det brukar buffra och fler är uppkopplade."],
          ["Jämför trådbunden anslutning och wifi om du kan, så ser du hur mycket wifi kostar."],
          ["Mät flera gånger. Varierar resultatet mycket är det stabiliteten, inte maxhastigheten, som är problemet."],
        ],
      },
      {
        type: "p",
        content: [
          "Du kan till exempel använda ",
          { text: "Bredbandskollen", href: "https://www.bredbandskollen.se/" },
          " för att mäta internethastighet. Jämför sedan resultatet med tabellerna ovan. Ligger nedladdningshastigheten vid TV:n tydligt över ditt behov är uppkopplingen sannolikt inte problemet. Ligger den nära gränsen, eller varierar den mycket mellan mätningarna, är det där du bör börja.",
        ],
      },
      { type: "h2", text: "Wifi eller nätverkskabel?", id: "wifi-eller-kabel" },
      {
        type: "p",
        content: [
          "En nätverkskabel mellan routern och TV:n eller boxen ger den jämnaste bilden, eftersom kabeln inte påverkas av väggar, avstånd eller grannarnas nätverk. Måste du använda wifi finns det flera saker som hjälper:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Anslut till routerns 5 GHz-band om det finns. Det är snabbare och störs mindre, men räckvidden är kortare än på 2,4 GHz."],
          ["2,4 GHz når längre genom väggar men är långsammare och mer känsligt för störningar."],
          ["Placera routern fritt och högt, inte i ett skåp eller bakom TV:n."],
          ["I större bostäder kan ett mesh-system ge jämnare täckning i alla rum."],
        ],
      },
      {
        type: "p",
        content: [
          "Hur du kopplar upp och loggar in på just din enhet visar vi i ",
          { text: "installationsguiden", href: "/installera" },
          ".",
        ],
      },
      {
        type: "h2",
        text: "Därför kan IPTV buffra trots snabbt internet",
        id: "buffrar-trots-snabbt-internet",
      },
      {
        type: "p",
        content: [
          "Många har en uppkoppling på 100 Mbit/s eller mer och upplever ändå att bilden hackar. Det beror oftast på något av följande:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Hastigheten i avtalet gäller fram till routern – vid TV:n kan den vara betydligt lägre, särskilt över wifi."],
          ["Wifi-signalen är svag eller ojämn i rummet där TV:n står."],
          ["Andra enheter i hemmet använder mycket av kapaciteten samtidigt."],
          ["TV:n, boxen eller appen är överbelastad och behöver startas om eller uppdateras."],
          ["En VPN kan sänka hastigheten – prova att stänga av den tillfälligt."],
        ],
      },
      {
        type: "p",
        content: [
          "Fler konkreta lösningar hittar du i vår guide om vad du kan göra när ",
          { text: "IPTV buffrar", href: "/blog/iptv-buffrar" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor om internethastighet och IPTV", id: "vanliga-fragor" },
      { type: "h3", text: "Räcker 100 Mbit/s för IPTV?" },
      {
        type: "p",
        content: [
          "Ja, i de flesta hem. 100 Mbit/s räcker räknat på minimibehovet till fyra samtidiga 4K-strömmar, eller betydligt fler i HD – förutsatt att uppkopplingen är stabil och att inte mycket annat använder nätet samtidigt.",
        ],
      },
      { type: "h3", text: "Behöver jag hög uppladdningshastighet för IPTV?" },
      {
        type: "p",
        content: [
          "Nej, det är främst nedladdningshastigheten som spelar roll. När du tittar på IPTV tar du emot data, och det är den riktningen som avgör hur bilden flyter.",
        ],
      },
      { type: "h3", text: "Fungerar IPTV med mobilt bredband eller 5G?" },
      {
        type: "p",
        content: [
          "Det kan fungera, men hastighet och stabilitet varierar med täckningen och hur många som använder masten samtidigt. Mät därför på platsen där du ska titta, helst vid olika tider på dygnet, innan du bestämmer dig.",
        ],
      },
      { type: "h3", text: "Vilken hastighet behöver jag för att titta i 4K?" },
      {
        type: "p",
        content: [
          "Minst 25 Mbit/s per 4K-ström. Ska två TV-apparater visa 4K samtidigt behöver du alltså minst 50 Mbit/s, plus marginal för resten av hemmets användning.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Räkna med minst 5 Mbit/s för SD, 10 Mbit/s för HD och 25 Mbit/s för 4K per ström, lägg ihop behovet för alla som tittar samtidigt och ha gärna marginal. Mät hastigheten vid TV:n på kvällen och använd nätverkskabel om du kan. Med ",
          { text: "IPTV Sverige", href: "/" },
          " från Sweden IPTV kan du börja med en gratis testperiod och kontrollera att allt fungerar med din uppkoppling innan du väljer bland ",
          { text: "våra abonnemang", href: "/priser" },
          ".",
        ],
      },
    ],
  },
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
          "Ligger du nära gränsen, eller varierar värdet mycket mellan mätningarna, är det troligen där problemet finns. Läs mer om ",
          { text: "hur snabbt internet du behöver för IPTV", href: "/blog/internethastighet-for-iptv" },
          ".",
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
