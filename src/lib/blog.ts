import { infoSection, installApps, plans, type InfoSegment } from "@/lib/data";

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

const bastaIptvAppenImage = {
  src: "/images/blog/basta-iptv-appen.webp",
  alt: "Bästa IPTV-appen jämförd med fyra appikoner på en Smart TV-skärm för Smart TV, Fire TV och Apple TV",
};

const samsungSmartTvImage = {
  src: "/images/blog/iptv-samsung-smart-tv.webp",
  alt: "IPTV på Samsung Smart TV – app där spellistan läggs till med serveradress, användarnamn och lösenord",
};

const appleTvIphoneImage = {
  src: "/images/blog/iptv-apple-tv-iphone.webp",
  alt: "IPTV på Apple TV, iPhone och iPad – TV, streamingbox, surfplatta och mobil som spelar upp samma ström",
};

const epgTvGuideImage = {
  src: "/images/blog/iptv-epg-tv-guide.webp",
  alt: "EPG i IPTV – TV-guide med kanaler, programblock och tider mellan 18:00 och 20:00",
};

const iptvFungerarInteImage = {
  src: "/images/blog/iptv-fungerar-inte.webp",
  alt: "IPTV fungerar inte – TV med varningssymbol och checklista för internet, inloggning, bild och ljud",
};

const wifiEllerKabelImage = {
  src: "/images/blog/iptv-wifi-eller-kabel.webp",
  alt: "Wi-Fi eller nätverkskabel för IPTV – router ansluten till TV både trådlöst och med kabel",
};

const ostabiltWifiImage = {
  src: "/images/blog/ostabilt-wifi-lagenhet.webp",
  alt: "Ostabilt wifi i lägenheten – flerbostadshus där grannarnas wifi-nätverk trängs runt en lägenhet",
};

const macAdressImage = {
  src: "/images/blog/mac-adress-iptv.webp",
  alt: "MAC-adress för IPTV – appskärm med MAC-adress och Device Key samt etikett med MAC-adress på en box",
};

const vadKostarImage = {
  src: "/images/blog/vad-kostar-iptv.webp",
  alt: "Vad kostar IPTV – uträkning av pris per månad: totalpris delat med antal månader",
};

const dataforbrukningImage = {
  src: "/images/blog/iptv-dataforbrukning.webp",
  alt: "Hur mycket data drar IPTV – stapeldiagram över datamängd per timme i SD, HD och 4K",
};

// Price figures for "Vad kostar IPTV?" are read from the plans on /priser, so the
// article always matches the current prices.
const plansByLength = [...plans]
  .map((plan) => ({ ...plan, months: Number.parseInt(plan.duration, 10) }))
  .sort((a, b) => a.months - b.months);
const shortestPlan = plansByLength[0];
const longestPlan = plansByLength[plansByLength.length - 1];
const krDecimals = (value: number) =>
  value.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const listSv = (items: string[]) =>
  items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} och ${items[items.length - 1]}`;
const perMonth = (plan: (typeof plansByLength)[number]) => plan.price / plan.months;
const yearCosts = plansByLength
  .filter((plan) => 12 % plan.months === 0)
  .map((plan) => ({ plan, times: 12 / plan.months, total: (12 / plan.months) * plan.price }));
const yearCostSpread =
  Math.max(...yearCosts.map((y) => y.total)) - Math.min(...yearCosts.map((y) => y.total));
const speedFor = (quality: string) =>
  infoSection.speeds.find((s) => s.quality === quality)?.speed ?? "";
// Data per hour: 1 Mbit/s for 3 600 s = 3 600 Mbit = 450 MB = 0.45 GB (1 GB = 1 000 MB).
const gbPerHour = (mbit: number) =>
  (mbit * 0.45).toLocaleString("sv-SE", { maximumFractionDigits: 2 });

export const posts: Post[] = [
  {
    slug: "ostabilt-wifi-lagenhet",
    title: "Ostabilt wifi i lägenheten? Så löser du det",
    description:
      "Ostabilt wifi i lägenheten? Så hittar du orsaken – grannarnas nätverk, routerns placering eller väggar – och åtgärdar den steg för steg.",
    excerpt:
      "Grannarnas nätverk, routerns placering och tjocka väggar är de vanligaste orsakerna till ostabilt wifi i lägenheter. Så hittar du felet och löser det.",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    readingMinutes: 7,
    image: ostabiltWifiImage,
    related: ["iptv-wifi-eller-kabel", "iptv-buffrar"],
    body: [
      {
        type: "p",
        content: [
          "Ostabilt wifi i lägenheten beror oftast på tre saker: grannarnas trådlösa nätverk som trängs på samma kanaler, en router som står dåligt placerad och väggar som dämpar signalen. Börja med att flytta routern till en fri och central plats, anslut det du kan till 5 GHz-bandet och låt routern byta till en mindre belastad kanal. Räcker inte det kan mesh eller en extra accesspunkt ge jämnare täckning.",
        ],
      },
      {
        type: "p",
        content: [
          "Råden gäller allt som använder wifi – mobiler, datorer och TV. Vill du främst få stabil bild på TV:n har vi en separat guide om att välja ",
          { text: "wifi eller nätverkskabel för IPTV", href: "/blog/iptv-wifi-eller-kabel" },
          ".",
        ],
      },
      { type: "image", ...ostabiltWifiImage, width: 1672, height: 941 },
      { type: "h2", text: "Varför blir wifi ostabilt i en lägenhet?", id: "varfor-ostabilt" },
      {
        type: "p",
        content: [
          "I ett flerbostadshus finns ofta tiotals trådlösa nätverk inom räckhåll. Alla delar på samma radiofrekvenser, och det är där de flesta problem börjar.",
        ],
      },
      { type: "h3", text: "Grannarnas nätverk trängs på samma kanaler" },
      {
        type: "p",
        content: [
          "På 2,4 GHz-bandet finns bara ett fåtal kanaler som inte överlappar varandra – i praktiken kanal 1, 6 och 11, enligt ",
          {
            text: "Cisco Merakis riktlinjer för kanalplanering",
            href: "https://documentation.meraki.com/Wireless/Design_and_Configure/Architecture_and_Best_Practices/Channel_Planning_Best_Practices",
          },
          ". När många routrar i samma hus delar på dem får alla dela på sändningstiden, och hastigheten blir ojämn – särskilt på kvällen när fler är hemma och uppkopplade.",
        ],
      },
      { type: "h3", text: "Routern står på fel ställe" },
      {
        type: "p",
        content: [
          "Routern hamnar ofta där bredbandet kommer in i lägenheten, till exempel i hallen eller i ett skåp. Därifrån måste signalen ta sig genom flera väggar för att nå vardagsrum och sovrum, och den blir svagare för varje vägg.",
        ],
      },
      { type: "h3", text: "Väggar och andra apparater dämpar signalen" },
      {
        type: "p",
        content: [
          "Betong, tegel och metall dämpar wifi betydligt mer än lättväggar. Även trådlösa telefoner, babyvakter, Bluetooth-prylar och mikrovågsugnar använder 2,4 GHz-bandet och kan störa signalen, som ",
          {
            text: "Realtid beskriver",
            href: "https://www.realtid.se/it-tech/gor-du-det-har-hemma-da-stryper-du-ditt-internet-sjalv/",
          },
          ".",
        ],
      },
      { type: "h3", text: "Gamla enheter och gammal mjukvara" },
      {
        type: "p",
        content: [
          "En router som inte har uppdaterats på länge, eller äldre enheter som bara klarar äldre wifi-standarder, kan göra nätet både långsammare och mindre stabilt.",
        ],
      },
      { type: "h2", text: "Hitta felet med tre snabba tester", id: "testa" },
      {
        type: "ol",
        items: [
          [
            "Mät med kabel och med wifi. Anslut en dator med nätverkskabel direkt till routern och mät hastigheten på ",
            { text: "Bredbandskollen", href: "https://www.bredbandskollen.se/" },
            ". Gör sedan samma mätning via wifi. Är kabelmätningen stabil men inte wifi-mätningen sitter felet i det trådlösa nätet.",
          ],
          ["Mät i olika rum och vid olika tider. Är det bra nära routern men dåligt längre bort handlar det om räckvidd. Är det bara dåligt på kvällarna tyder det på trängsel från grannarnas nätverk."],
          ["Se vilka nätverk som finns runt dig. En wifi-analysapp i mobilen visar vilka nätverk som syns och vilka kanaler de använder. Ligger många på samma kanal som ditt nätverk har du hittat en trolig orsak."],
        ],
      },
      {
        type: "table",
        head: ["Symptom", "Trolig orsak", "Börja med att"],
        rows: [
          ["Sämre på kvällen", "Trängsel från grannarnas nätverk", "Byta till 5 GHz eller en annan kanal"],
          ["Bra nära routern, dåligt i andra rum", "Avstånd och väggar", "Flytta routern eller komplettera med mesh"],
          ["Anslutningen tappas helt ibland", "Routern eller enheten har hängt sig", "Starta om och uppdatera routern"],
          ["Långsamt även med kabel", "Bredbandet eller leverantören", "Kontakta din bredbandsleverantör"],
        ],
      },
      { type: "h2", text: "Så löser du det – steg för steg", id: "losningar" },
      { type: "h3", text: "1. Ge routern en bättre plats" },
      {
        type: "p",
        content: [
          "Placera routern fritt och gärna högt, så centralt i lägenheten som möjligt – inte i ett skåp, bakom TV:n eller tätt intill annan elektronik. Sitter bredbandsuttaget i hallen kan en längre nätverkskabel mellan uttaget och routern göra det möjligt att flytta routern närmare mitten av lägenheten.",
        ],
      },
      { type: "h3", text: "2. Använd 5 GHz där det går" },
      {
        type: "p",
        content: [
          "5 GHz-bandet har fler kanaler och är oftast mindre trångt än 2,4 GHz, men räckvidden är kortare och signalen går sämre genom väggar. Anslut mobiler, datorer och TV-apparater som står nära routern till 5 GHz, och låt enheter längre bort använda 2,4 GHz.",
        ],
      },
      { type: "h3", text: "3. Byt kanal och använd 20 MHz på 2,4 GHz" },
      {
        type: "p",
        content: [
          "Låt routern välja kanal automatiskt, eller välj själv den av kanal 1, 6 och 11 som är minst belastad enligt wifi-analysappen. Använd 20 MHz kanalbredd på 2,4 GHz-bandet. En bredare kanal tar upp en större del av det smala bandet och ökar risken för störningar i ett hus med många nätverk.",
        ],
      },
      { type: "h3", text: "4. Starta om och uppdatera routern" },
      {
        type: "p",
        content: [
          "Dra ur routerns strömsladd i ungefär en minut och starta den igen om nätet har börjat bete sig konstigt. Kontrollera också i routerns inställningar om det finns ny mjukvara – uppdateringar kan förbättra både stabilitet och säkerhet.",
        ],
      },
      { type: "h3", text: "5. Komplettera med mesh eller en accesspunkt" },
      {
        type: "p",
        content: [
          "Räcker inte en router till hela lägenheten, till exempel på grund av tjocka betongväggar, ger ett mesh-system med flera enheter jämnare täckning. Ännu stabilare blir det om den extra enheten kan anslutas med nätverkskabel till routern. En enkel wifi-förstärkare kan hjälpa i vissa fall, men den kan också sänka hastigheten.",
        ],
      },
      { type: "h3", text: "6. Koppla det som står still med kabel" },
      {
        type: "p",
        content: [
          "TV, TV-box, stationär dator och spelkonsol står oftast på samma plats. Ansluter du dem med nätverkskabel frigör du utrymme i wifi-nätet för mobiler och bärbara datorer. Hur du gör det med TV:n beskriver vi i guiden ",
          { text: "Wi-Fi eller nätverkskabel för IPTV", href: "/blog/iptv-wifi-eller-kabel" },
          ".",
        ],
      },
      { type: "h3", text: "7. Byt ut en gammal router" },
      {
        type: "p",
        content: [
          "Saknar routern 5 GHz eller stöd för nyare standarder som Wi-Fi 6 kan en ny router vara värd pengarna. Hyr du routern av din bredbandsleverantör kan du fråga om de kan byta till en nyare modell.",
        ],
      },
      { type: "h2", text: "När beror felet inte på wifi?", id: "inte-wifi" },
      {
        type: "p",
        content: [
          "Är uppkopplingen långsam eller ostabil även med nätverkskabel ligger felet troligen hos bredbandet, inte i ditt trådlösa nätverk. Kontakta då din bredbandsleverantör. Märker du problemen främst när du tittar på strömmad TV kan du också läsa vad du kan göra när ",
          { text: "IPTV buffrar", href: "/blog/iptv-buffrar" },
          " och hur mycket ",
          { text: "internethastighet du behöver för IPTV", href: "/blog/internethastighet-for-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Varför är wifi sämre på kvällen?" },
      {
        type: "p",
        content: [
          "På kvällen använder fler i huset sina nätverk samtidigt. Eftersom grannarnas nätverk delar på samma kanaler blir det trängre, och din uppkoppling blir ojämnare. 5 GHz eller en mindre belastad kanal brukar hjälpa.",
        ],
      },
      { type: "h3", text: "Ska jag välja 2,4 eller 5 GHz i lägenheten?" },
      {
        type: "p",
        content: [
          "Använd 5 GHz för enheter i samma eller närliggande rum som routern – det är snabbare och mindre trångt. 2,4 GHz når längre och kan fungera bättre för enheter långt bort, men är ofta hårt belastat i flerbostadshus.",
        ],
      },
      { type: "h3", text: "Behöver jag mesh i en mindre lägenhet?" },
      {
        type: "p",
        content: [
          "Oftast inte. I en mindre lägenhet räcker det vanligtvis att flytta routern och använda 5 GHz. Mesh blir mer aktuellt i större lägenheter eller där tjocka väggar stoppar signalen.",
        ],
      },
      { type: "h3", text: "Kan grannarnas wifi verkligen störa mitt nätverk?" },
      {
        type: "p",
        content: [
          "Ja. Nätverk som använder samma eller överlappande kanaler delar på sändningstiden, vilket gör att alla blir långsammare. Det är en av de vanligaste orsakerna till ostabilt wifi i flerbostadshus.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Ostabilt wifi i lägenheten beror oftast på trängsel från grannarnas nätverk, routerns placering eller väggar. Flytta routern, använd 5 GHz och byt kanal, och komplettera med mesh om täckningen ändå inte räcker. Tittar du på TV via internet ger en nätverkskabel till TV:n den stabilaste bilden – och med ",
          { text: "IPTV Sverige", href: "/" },
          " kan du testa tjänsten med din egen uppkoppling innan du väljer abonnemang.",
        ],
      },
    ],
  },
  {
    slug: "mac-adress-iptv",
    title: "MAC-adress för IPTV – var hittar du den?",
    description:
      "Var hittar du MAC-adressen för IPTV? Se skillnaden mellan enhetens nätverksadress och appens ID, och var adressen visas på MAG-box, TV och i appar.",
    excerpt:
      "Boxens MAC-adress, appens ID eller Device Key? Så vet du vilken adress som gäller för IPTV och var du hittar den på MAG-box, Smart TV och i appar.",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    readingMinutes: 5,
    image: macAdressImage,
    related: ["xtream-codes-eller-m3u", "iptv-samsung-smart-tv"],
    body: [
      {
        type: "p",
        content: [
          "Vilken MAC-adress du behöver för IPTV beror på hur du aktiverar tjänsten. På en MAG-box är det boxens egen MAC-adress, som står på etiketten under boxen och i boxens statusmeny. I appar som Smart IPTV och IBO Player är det i stället adressen som appen själv visar på skärmen – och den kan skilja sig från TV:ns nätverksadress. Använd alltid den adress som efterfrågas, och skriv av den tecken för tecken.",
        ],
      },
      {
        type: "p",
        content: [
          "Här reder vi ut skillnaden mellan enhetens nätverksadress, appens ID och Device Key, och var du hittar rätt uppgift på de vanligaste enheterna.",
        ],
      },
      { type: "image", ...macAdressImage, width: 1672, height: 941 },
      { type: "h2", text: "Vad är en MAC-adress?", id: "vad-ar-mac" },
      {
        type: "p",
        content: [
          "En MAC-adress är en hårdvaruadress som identifierar ett nätverkskort. Den består av 12 hexadecimala tecken – siffrorna 0–9 och bokstäverna A–F – och skrivs oftast i sex par med kolon emellan, till exempel 00:1A:2B:3C:4D:5E. En enhet med både wifi och nätverksuttag har en adress för vardera. Läs mer om ",
          { text: "MAC-adresser på Wikipedia", href: "https://sv.wikipedia.org/wiki/MAC-adress" },
          ".",
        ],
      },
      { type: "h2", text: "Nätverks-MAC, appens ID och Device Key", id: "skillnaden" },
      {
        type: "table",
        head: ["Begrepp", "Vad det är", "Var du hittar det", "Används till"],
        rows: [
          ["Enhetens MAC-adress", "Hårdvaruadressen för enhetens wifi eller nätverksuttag", "Enhetens nätverks- eller Om-meny, ibland på en etikett", "Aktivering av MAG-box, routerinställningar"],
          ["Appens MAC/ID", "Identifierare som en IPTV-app visar och använder för att koppla en spellista till din TV", "Appens startskärm eller inställningar", "Smart IPTV, IBO Player"],
          ["Device Key", "Extra kod som visas tillsammans med MAC-adressen i IBO Player", "I appen", "Inloggning på IBO Players webbplats"],
        ],
      },
      {
        type: "p",
        content: [
          "Appens adress ser ut som en vanlig MAC-adress men behöver inte vara densamma som TV:ns egen nätverksadress. När en app ber om MAC-adress är det därför adressen som visas i appen som gäller.",
        ],
      },
      {
        type: "p",
        content: [
          "Loggar du in med Xtream Codes eller en M3U-länk direkt i appen behöver du ingen MAC-adress alls. Skillnaderna förklaras i guiden ",
          { text: "Xtream Codes eller M3U", href: "/blog/xtream-codes-eller-m3u" },
          ".",
        ],
      },
      { type: "h2", text: "Var hittar du MAC-adressen?", id: "var-hittar" },
      { type: "h3", text: "MAG-box" },
      {
        type: "p",
        content: [
          "En MAG-box aktiveras med boxens egen MAC-adress. Den står på etiketten under boxen och visas också i boxens statusmeny – menynamnen kan variera mellan modeller och mjukvaruversioner.",
        ],
      },
      {
        type: "ol",
        items: [
          ["Hitta boxens MAC-adress på etiketten under boxen eller i statusmenyn."],
          ["Skicka MAC-adressen till oss via WhatsApp. Vi aktiverar boxen och skickar portaladressen till dig."],
          ["Gå till Inställningar → Systeminställningar → Servrar → Portaler, ange ett valfritt namn och klistra in portaladressen."],
          ["Spara och starta om boxen."],
        ],
      },
      {
        type: "p",
        content: [
          "Mer om MAG-boxar finns i ",
          { text: "installationsguiden för MAG-box", href: "/installera#mag" },
          ".",
        ],
      },
      { type: "h3", text: "Smart IPTV" },
      {
        type: "p",
        content: [
          "Smart IPTV visar en MAC-adress på skärmen när du startar appen. Den adressen anger du på utvecklarens sida ",
          { text: "siptv.app/mylist", href: "https://siptv.app/mylist/" },
          " tillsammans med länken till din spellista. Enligt utvecklaren visas felet ”MAC address is not found” om adressen är felskriven eller om appen inte har startats minst en gång.",
        ],
      },
      {
        type: "p",
        content: [
          "Utvecklaren rekommenderar också att du låser din MAC/ID i appens inställningar, så att spellistan inte kan nollställas av någon annan. Appen aktiveras mot en engångsavgift per TV enligt ",
          { text: "utvecklarens aktiveringssida", href: "https://siptv.app/activation/" },
          ". Avgiften betalas till apputvecklaren och ingår inte i ditt IPTV-abonnemang.",
        ],
      },
      { type: "h3", text: "IBO Player" },
      {
        type: "p",
        content: [
          "IBO Player visar både en MAC-adress och en Device Key i appen. Båda uppgifterna behövs för att logga in under Manage Playlists på ",
          { text: "IBO Players webbplats", href: "https://iboplayer.com/device/login" },
          " och lägga till en spellista. Du kan också fylla i Xtream Codes eller en M3U-länk direkt i appen. Enligt utvecklaren har appen en provperiod på 7 dagar, därefter behöver en licens köpas från utvecklaren.",
        ],
      },
      { type: "h3", text: "Smart TV, Fire TV och Apple TV" },
      {
        type: "p",
        content: [
          "Ibland behöver du enhetens egen nätverksadress, till exempel om routern bara släpper in godkända enheter. Menynamnen kan skilja sig mellan modeller, mjukvaruversioner och språk:",
        ],
      },
      {
        type: "table",
        head: ["Enhet", "Var du hittar MAC-adressen"],
        rows: [
          ["Samsung Smart TV", "Inställningar → Support → Om denna TV (About This TV)"],
          ["Fire TV och Fire TV Stick", "Inställningar → My Fire TV → Om (About) → Nätverk (Network)"],
          ["Apple TV", "Inställningar → Allmänt → Om (Wi-Fi-adress eller Ethernet-adress)"],
        ],
      },
      {
        type: "p",
        content: [
          "Sökvägen för Samsung kommer från ",
          { text: "Samsungs supportsida", href: "https://www.samsung.com/us/support/answer/ANS10005222/" },
          ". Hittar du inte menyn på din enhet, leta under nätverksinställningarna.",
        ],
      },
      { type: "h2", text: "Vanliga misstag", id: "misstag" },
      {
        type: "ul",
        items: [
          ["Att skriva bokstaven O i stället för en nolla. En MAC-adress innehåller bara siffror och bokstäverna A–F, så ett tecken som ser ut som ett O är alltid en nolla."],
          ["Att blanda ihop B och 8 eller D och 0. Jämför adressen tecken för tecken innan du skickar den."],
          ["Att använda TV:ns nätverksadress när appen visar en egen adress."],
          ["Att uppge adressen för wifi när enheten är ansluten med kabel, eller tvärtom – de två har olika adresser."],
          ["Att lägga in spellistan innan appen har startats första gången."],
        ],
      },
      {
        type: "p",
        content: [
          "Sidor som erbjuder att ”generera” MAC-adresser för IPTV behöver du inte. En giltig adress kommer alltid från din egen enhet eller app.",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Behöver jag en MAC-adress för IPTV?" },
      {
        type: "p",
        content: [
          "Bara om du aktiverar via MAC-adress, till exempel med en MAG-box eller i appar som Smart IPTV. Loggar du in med Xtream Codes eller en M3U-länk direkt i appen behövs ingen MAC-adress.",
        ],
      },
      { type: "h3", text: "Varför visar appen en annan MAC-adress än TV:n?" },
      {
        type: "p",
        content: [
          "Vissa appar använder ett eget ID som ser ut som en MAC-adress. Det är adressen som appen visar som gäller för aktiveringen, inte TV:ns nätverksadress.",
        ],
      },
      { type: "h3", text: "Är MAC-adressen hemlig?" },
      {
        type: "p",
        content: [
          "Den är inget lösenord, men i appar som kopplar en spellista till adressen fungerar den som en nyckel till din spellista. Dela den därför bara med din leverantör eller på apputvecklarens officiella sida.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "På en MAG-box använder du boxens egen MAC-adress från etiketten eller statusmenyn. I Smart IPTV och IBO Player gäller adressen som appen visar – och i IBO Player även Device Key. Med ",
          { text: "IPTV Sverige", href: "/" },
          " hjälper vi dig gärna med aktiveringen: ",
          { text: "kontakta oss", href: "/kontakt" },
          ", eller följ stegen för din enhet i ",
          { text: "installationsguiden", href: "/installera" },
          ".",
        ],
      },
    ],
  },
  {
    slug: "vad-kostar-iptv",
    title: "Vad kostar IPTV? Så räknar du månadspriset",
    description:
      "Vad kostar IPTV? Så räknar du fram priset per månad för 3, 6 och 12 månader, vad ett år kostar och vilka extra kostnader som kan tillkomma.",
    excerpt:
      "Dela totalpriset med antalet månader – så får du det verkliga månadspriset. Vi visar uträkningen, vad ett helt år kostar och vilka kostnader som kan tillkomma.",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    readingMinutes: 5,
    image: vadKostarImage,
    related: ["basta-iptv-appen", "internethastighet-for-iptv"],
    body: [
      {
        type: "p",
        content: [
          `Vad kostar IPTV? Det beror på hur lång period du betalar för och om något tillkommer utöver själva abonnemanget. Månadspriset räknar du fram genom att dela totalpriset med antalet månader. Hos IPTV Sverige kostar ${listSv(
            plansByLength.map((p) => `${p.months} månader ${p.price} kr`)
          )}, vilket blir ${listSv(plansByLength.map((p) => krDecimals(perMonth(p))))} kr per månad. Fler enheter kostar extra, och app och eventuell utrustning betalas separat.`,
        ],
      },
      {
        type: "p",
        content: [
          "Här visar vi hur du räknar, vad ett helt år kostar med olika perioder och vilka kostnader som kan tillkomma. Aktuella priser och vad som ingår i varje abonnemang ser du alltid på ",
          { text: "prissidan", href: "/priser" },
          ".",
        ],
      },
      { type: "image", ...vadKostarImage, width: 1672, height: 941 },
      { type: "h2", text: "Så räknar du månadspriset", id: "rakna" },
      {
        type: "p",
        content: ["Formeln är enkel: totalpris ÷ antal månader = pris per månad. Så här ser det ut för våra abonnemang:"],
      },
      {
        type: "table",
        head: ["Abonnemang", "Totalpris", "Uträkning", "Pris per månad"],
        rows: plansByLength.map((p) => [
          `${p.months} månader`,
          `${p.price} kr`,
          `${p.price} ÷ ${p.months}`,
          `${krDecimals(perMonth(p))} kr`,
        ]),
      },
      {
        type: "p",
        content: [
          `Med ${longestPlan.months} månader betalar du ${krDecimals(perMonth(longestPlan))} kr per månad, jämfört med ${krDecimals(perMonth(shortestPlan))} kr med ${shortestPlan.months} månader. På prissidan avrundas månadspriset till hela kronor.`,
        ],
      },
      { type: "h2", text: "Vad kostar ett helt år?", id: "helt-ar" },
      {
        type: "p",
        content: ["Vill du titta ett helt år kan du jämföra vad tolv månader kostar om du köper samma period flera gånger:"],
      },
      {
        type: "table",
        head: ["Så betalar du", "Uträkning", "Kostnad för 12 månader"],
        rows: yearCosts.map(({ plan, times, total }) => [
          `${plan.months} månader × ${times}`,
          times > 1 ? `${times} × ${plan.price} kr` : `${plan.price} kr`,
          `${total} kr`,
        ]),
      },
      {
        type: "p",
        content: [
          `Skillnaden mellan det dyraste och det billigaste sättet är ${yearCostSpread} kr per år. Samtidigt gäller priset för hela perioden, så ett längre abonnemang innebär en större summa på en gång. Det finns ingen bindningstid – du väljer själv vilken period som passar dig.`,
        ],
      },
      { type: "h2", text: "Kostnader som kan tillkomma", id: "extra-kostnader" },
      { type: "h3", text: "Appen" },
      {
        type: "p",
        content: [
          "IPTV-appen är en separat spelare från en tredjepartsutvecklare och ingår inte i abonnemanget. Vissa appar är gratis, andra kostar efter en provperiod. Två exempel från utvecklarnas egna sidor:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            "IBO Player har en provperiod på 7 dagar, därefter krävs en licens (",
            { text: "iboplayer.com", href: "https://iboplayer.com/" },
            ").",
          ],
          [
            "Smart IPTV aktiveras mot en engångsavgift per TV eller enhet (",
            { text: "siptv.app", href: "https://siptv.app/activation/" },
            ").",
          ],
        ],
      },
      {
        type: "p",
        content: [
          "Avgifterna bestäms av apputvecklarna och kan ändras. Vilken app som passar din enhet läser du i guiden om ",
          { text: "bästa IPTV-appen", href: "/blog/basta-iptv-appen" },
          ".",
        ],
      },
      { type: "h3", text: "Utrustning" },
      {
        type: "p",
        content: [
          "Har din TV redan en app som fungerar behöver du ingen extra utrustning. Saknas appen kan en streamingsticka eller TV-box som ansluts via HDMI vara ett alternativ – en engångskostnad utöver abonnemanget.",
        ],
      },
      { type: "h3", text: "Internetuppkoppling" },
      {
        type: "p",
        content: [
          `Du behöver ett bredband som klarar strömmen. Vi rekommenderar minst ${speedFor("HD")} för HD och ${speedFor("4K")} för 4K – läs mer om `,
          { text: "internethastighet för IPTV", href: "/blog/internethastighet-for-iptv" },
          ". Tittar du med mobildata kan det också vara värt att veta ",
          { text: "hur mycket data IPTV drar", href: "/blog/iptv-dataforbrukning" },
          ".",
        ],
      },
      { type: "h3", text: "Flera enheter samtidigt" },
      {
        type: "p",
        content: [
          "Vill du kunna titta på fler enheter samtidigt kostar det extra. Hur många enheter du behöver väljer du när du beställer via WhatsApp – berätta hur många det gäller, så får du priset för just ditt abonnemang.",
        ],
      },
      { type: "h2", text: "Det här bör du jämföra", id: "jamfora" },
      {
        type: "ul",
        items: [
          ["Månadspriset för samma periodlängd – jämför inte ett pris för tre månader med ett årspris."],
          ["Vad som ingår, till exempel kanaler, filmer och serier, bildkvalitet och support."],
          ["Bindningstid och eventuella avgifter utöver abonnemanget."],
          ["Vad det kostar om flera enheter ska kunna titta samtidigt."],
          ["Om det finns en testperiod, så att du kan prova med din egen uppkoppling."],
          ["Vilka enheter och appar som fungerar."],
        ],
      },
      { type: "h2", text: "Kan man testa innan man betalar?", id: "testperiod" },
      {
        type: "p",
        content: [
          "Ja. Kontakta oss via WhatsApp så startar vi en gratis testperiod. Du kan då testa tjänsten kostnadsfritt under en begränsad period och se hur den fungerar med din uppkoppling innan du köper ett abonnemang.",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Vilka abonnemangsperioder finns?" },
      {
        type: "p",
        content: [
          `Hos oss väljer du mellan ${listSv(plansByLength.map((p) => `${p.months}`))} månader. Månadspriset räknar du fram genom att dela totalpriset med antalet månader.`,
        ],
      },
      { type: "h3", text: "Ingår appen i priset?" },
      {
        type: "p",
        content: [
          "Nej. Abonnemanget ger dig tillgång till tjänstens kanaler, filmer och serier, medan appen är en separat spelare. Kräver appen en licens betalar du den direkt till apputvecklaren.",
        ],
      },
      { type: "h3", text: "Finns det någon bindningstid?" },
      {
        type: "p",
        content: ["Nej, det finns ingen bindningstid och inga dolda avgifter. Du väljer den period som passar dig."],
      },
      { type: "h3", text: "Lönar det sig att välja en längre period?" },
      {
        type: "p",
        content: [
          `Räknat per månad, ja: ${longestPlan.months} månader kostar ${krDecimals(perMonth(longestPlan))} kr per månad mot ${krDecimals(perMonth(shortestPlan))} kr för ${shortestPlan.months} månader. Är du osäker kan du börja med en gratis testperiod eller en kortare period.`,
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Dela totalpriset med antalet månader så får du det verkliga månadspriset, och räkna med att fler enheter, app och eventuell utrustning tillkommer. Se aktuella priser för ",
          { text: "IPTV Sverige", href: "/" },
          " på ",
          { text: "prissidan", href: "/priser" },
          ", eller börja med en gratis testperiod via WhatsApp.",
        ],
      },
    ],
  },
  {
    slug: "iptv-dataforbrukning",
    title: "Hur mycket data drar IPTV? Så räknar du",
    description:
      "Hur mycket data drar IPTV i SD, HD och 4K? Så räknar du om Mbit/s till GB per timme, vad en månad kan dra och hur du sparar på mobildatan.",
    excerpt:
      "Bithastighet × 0,45 = GB per timme. Så räknar du ut hur mycket data IPTV drar i SD, HD och 4K, vad en månad kan kosta i data och hur du mäter själv.",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    readingMinutes: 6,
    image: dataforbrukningImage,
    related: ["internethastighet-for-iptv", "iptv-apple-tv-iphone"],
    body: [
      {
        type: "p",
        content: [
          "Hur mycket data IPTV drar beror på strömmens bithastighet, som varierar med bildkvalitet, kanal och tjänst. Som riktmärke anger Netflix att strömning drar upp till 1 GB per timme i SD, upp till 3 GB i HD och upp till 7 GB i 4K. Vill du räkna själv multiplicerar du bithastigheten i Mbit/s med 0,45 – då får du ungefärligt antal GB per timme.",
        ],
      },
      {
        type: "p",
        content: [
          "Här visar vi hur du räknar, vad en vanlig månad kan dra och hur du håller koll på mobildatan.",
        ],
      },
      { type: "image", ...dataforbrukningImage, width: 1672, height: 941 },
      { type: "h2", text: "Så räknar du om Mbit/s till GB per timme", id: "formel" },
      {
        type: "p",
        content: [
          "Bithastigheten anger hur mycket data strömmen använder varje sekund. En timme har 3 600 sekunder och en byte är 8 bitar. Vi räknar med 1 GB = 1 000 MB:",
        ],
      },
      {
        type: "ol",
        items: [
          ["1 Mbit/s × 3 600 sekunder = 3 600 megabit"],
          ["3 600 megabit ÷ 8 = 450 megabyte"],
          ["450 megabyte = 0,45 gigabyte (GB)"],
        ],
      },
      {
        type: "p",
        content: ["Varje Mbit/s motsvarar alltså ungefär 0,45 GB per timme:"],
      },
      {
        type: "table",
        head: ["Bithastighet", "Data per timme"],
        rows: [1, 2, 4, 6, 8, 12, 16, 20].map((mbit) => [`${mbit} Mbit/s`, `${gbPerHour(mbit)} GB`]),
      },
      { type: "h2", text: "Ungefärlig förbrukning i SD, HD och 4K", id: "sd-hd-4k" },
      {
        type: "p",
        content: [
          "Det finns ingen gemensam siffra för alla IPTV-kanaler – bithastigheten bestäms av hur varje kanal kodas. Två publicerade riktmärken ger ändå en bra bild:",
        ],
      },
      {
        type: "table",
        head: ["Kvalitet", "Netflix, upp till per timme", "Räknat från Apples exempel på bithastigheter"],
        rows: [
          ["SD", "1 GB", "cirka 0,9 GB (960×540, 2 Mbit/s)"],
          ["HD 720p", "–", "cirka 1,4–2,0 GB (3–4,5 Mbit/s)"],
          ["Full HD 1080p", "3 GB", "cirka 2,7–3,5 GB (6–7,8 Mbit/s, H.264) eller 2,0–2,6 GB (4,5–5,8 Mbit/s, HEVC)"],
          ["4K", "7 GB", "cirka 5,2–7,6 GB (11,6–16,8 Mbit/s, HEVC)"],
        ],
      },
      {
        type: "p",
        content: [
          { text: "Netflix hjälpcenter", href: "https://help.netflix.com/sv/node/87" },
          " anger hur mycket data tjänsten använder per timme och kvalitetsnivå. ",
          {
            text: "Apples riktlinjer för HLS-strömning",
            href: "https://developer.apple.com/streaming/hls-authoring-specification-for-apple-devices.html",
          },
          " listar exempel på bithastigheter som videotjänster kan koda i. Apples siffror är kodningsmål, inte mätningar av en viss IPTV-kanal, så se dem som ett riktmärke.",
        ],
      },
      {
        type: "p",
        content: [
          "Två saker påverkar mest. Högre bildfrekvens kräver högre bithastighet, vilket syns i ",
          { text: "YouTubes rekommendationer för livesändningar", href: "https://support.google.com/youtube/answer/2853702" },
          " där 60 bilder per sekund får högre värden än 30 – därför kan sport med mycket rörelse dra mer. Och modernare kodning som HEVC ger samma upplösning med lägre bithastighet än H.264, som Apples tabell visar.",
        ],
      },
      { type: "h2", text: "Internethastighet är inte samma sak som dataförbrukning", id: "hastighet-vs-data" },
      {
        type: "p",
        content: [
          `Våra rekommendationer om minst ${speedFor("HD")} för HD och ${speedFor("4K")} för 4K gäller hur snabb uppkoppling du behöver – med marginal för variationer och för annat som använder nätet samtidigt. Själva strömmen använder normalt mindre än så.`,
        ],
      },
      {
        type: "p",
        content: [
          `Räknar du ut förbrukningen från den rekommenderade hastigheten får du därför för höga siffror: ${speedFor("HD")} skulle motsvara ${gbPerHour(Number.parseInt(speedFor("HD"), 10))} GB per timme, medan en Full HD-ström enligt riktmärkena ovan ligger kring 2–3,5 GB. Hur snabbt internet du behöver förklaras i guiden om `,
          { text: "internethastighet för IPTV", href: "/blog/internethastighet-for-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Exempel: så mycket data går åt per månad", id: "per-manad" },
      {
        type: "p",
        content: [
          "Med Netflix riktmärken som utgångspunkt och två timmars tittande om dagen i 30 dagar – totalt 60 timmar:",
        ],
      },
      {
        type: "table",
        head: ["Kvalitet", "Per timme, upp till", "60 timmar per månad, upp till"],
        rows: [
          ["SD", "1 GB", "60 GB"],
          ["HD", "3 GB", "180 GB"],
          ["4K", "7 GB", "420 GB"],
        ],
      },
      {
        type: "p",
        content: [
          "En fotbollsmatch på ungefär två timmar i HD kan alltså dra upp till cirka 6 GB. Har du fast bredband utan datagräns behöver du sällan tänka på förbrukningen – det är främst med mobildata och mobilt bredband med surfgräns som den spelar roll.",
        ],
      },
      { type: "h2", text: "Titta på IPTV med mobildata", id: "mobildata" },
      {
        type: "p",
        content: [
          "Med en surfpott på till exempel 20 GB räcker det till ungefär 6–7 timmar i HD med 3 GB per timme, men till omkring 20 timmar i SD med 1 GB per timme. Så sparar du data:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Använd wifi när du kan."],
          ["Välj en lägre bildkvalitet eller kanalens SD-version när du är på mobilnätet, om den finns."],
          ["Stäng appen när du har tittat klart – en ström som fortsätter spela drar data även om du inte tittar."],
          ["Håll koll på förbrukningen i mobilens inställningar."],
        ],
      },
      {
        type: "p",
        content: [
          "Hur du kommer igång i mobilen och surfplattan beskriver vi i guiden om ",
          { text: "IPTV på Apple TV, iPhone och iPad", href: "/blog/iptv-apple-tv-iphone" },
          ".",
        ],
      },
      { type: "h2", text: "Så mäter du din egen förbrukning", id: "mat-sjalv" },
      {
        type: "p",
        content: ["Det säkraste sättet att veta hur mycket just din kanal och app drar är att mäta själv:"],
      },
      {
        type: "ol",
        items: [
          ["Se till att mobilen använder mobildata och notera hur mycket IPTV-appen har förbrukat. På iPhone hittar du det under Inställningar → Mobildata, på Android under nätverks- eller dataanvändningsinställningarna – namnet varierar mellan tillverkare."],
          ["Titta på en kanal i 30 minuter med den bildkvalitet du brukar använda."],
          ["Läs av hur mycket appen har använt och multiplicera med två – då har du förbrukningen per timme."],
        ],
      },
      {
        type: "p",
        content: [
          "Vill du mäta på TV:n kan många routrar visa trafik per enhet i sina inställningar.",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Hur mycket data drar en timme IPTV i HD?" },
      {
        type: "p",
        content: [
          "Räkna med ungefär 2–3,5 GB per timme för en Full HD-ström, beroende på bithastighet och kodning. Netflix anger upp till 3 GB per timme i HD.",
        ],
      },
      { type: "h3", text: "Drar 4K alltid mer data än HD?" },
      {
        type: "p",
        content: [
          "I regel ja. En 4K-bild har fyra gånger så många bildpunkter som Full HD och kräver högre bithastighet. Enligt Netflix kan 4K dra upp till 7 GB per timme, jämfört med upp till 3 GB i HD.",
        ],
      },
      { type: "h3", text: "Varför stämmer inte min mätning med tabellen?" },
      {
        type: "p",
        content: [
          "Bithastigheten varierar mellan kanaler, program och appar, och vissa appar anpassar kvaliteten efter uppkopplingen. Tabellerna är riktmärken – din egen mätning visar vad som gäller för dig.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Multiplicera bithastigheten i Mbit/s med 0,45 så får du ungefärligt antal GB per timme. En Full HD-ström drar ofta 2–3,5 GB per timme och 4K upp mot 7 GB, men den rekommenderade internethastigheten är högre än förbrukningen. Mät gärna själv, och testa ",
          { text: "IPTV Sverige", href: "/" },
          " med din egen uppkoppling innan du väljer abonnemang.",
        ],
      },
    ],
  },
  {
    slug: "basta-iptv-appen",
    title: "Bästa IPTV-appen 2026 för Smart TV, Fire TV och Apple TV",
    metaTitle: "Bästa IPTV-appen 2026: 4 appar jämförda",
    description:
      "Vilken IPTV-app är bäst för din TV? Vi jämför IPTV Smarters, TiviMate, IBO Player och Smart IPTV för Smart TV, Fire TV och Apple TV.",
    excerpt:
      "TiviMate, IPTV Smarters, IBO Player eller Smart IPTV? Så skiljer sig apparna åt och så väljer du rätt IPTV-app för din Smart TV, Fire TV eller Apple TV.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    readingMinutes: 7,
    image: bastaIptvAppenImage,
    related: ["iptv-samsung-smart-tv", "iptv-apple-tv-iphone"],
    body: [
      {
        type: "p",
        content: [
          "Den bästa IPTV-appen är den som fungerar bra på just din enhet. På Fire TV och Android TV är TiviMate och IPTV Smarters de vanligaste valen, på Samsung och LG Smart TV används ofta IBO Player eller Smart IPTV, och på Apple TV, iPhone och iPad använder du Smarters Player Lite. Här jämför vi apparna och hjälper dig att välja rätt.",
        ],
      },
      {
        type: "p",
        content: [
          "Kom ihåg att en IPTV-app är en spelare – den innehåller inga kanaler i sig. För att titta behöver du inloggningsuppgifter från din IPTV-leverantör, oftast i form av ",
          { text: "Xtream Codes eller en M3U-länk", href: "/blog/xtream-codes-eller-m3u" },
          ".",
        ],
      },
      { type: "image", ...bastaIptvAppenImage, width: 1672, height: 941 },
      { type: "h2", text: "Snabbguide: vilken IPTV-app passar din enhet?", id: "snabbguide" },
      {
        type: "table",
        head: ["Enhet", "App att prova först", "Alternativ"],
        rows: [
          ["Fire TV och Firestick", "TiviMate", "IPTV Smarters"],
          ["Android TV och TV-boxar", "TiviMate", "IPTV Smarters"],
          ["Samsung och LG Smart TV", "IBO Player", "Smart IPTV"],
          ["Apple TV", "Smarters Player Lite", "–"],
          ["iPhone och iPad", "Smarters Player Lite", "–"],
          ["Android-mobil och surfplatta", "IPTV Smarters", "–"],
        ],
      },
      {
        type: "p",
        content: [
          "Alla fyra apparna finns med steg-för-steg-instruktioner i vår ",
          { text: "installationsguide", href: "/installera" },
          ".",
        ],
      },
      { type: "h2", text: "Så har vi valt ut apparna", id: "urval" },
      {
        type: "p",
        content: [
          "Det finns många IPTV-appar, men vi går bara igenom de appar som finns i vår installationsguide och som vi kan hjälpa dig med. Vi har tittat på fyra saker:",
        ],
      },
      {
        type: "ul",
        items: [
          ["Vilka enheter appen finns för."],
          ["Vilka inloggningar den stöder: Xtream Codes, M3U-länk eller MAC-aktivering."],
          ["Hur lätt den är att använda med en vanlig fjärrkontroll."],
          ["Hur kanaler, filmer, serier och TV-guide presenteras."],
        ],
      },
      { type: "h2", text: "TiviMate – för Fire TV och Android TV", id: "tivimate" },
      {
        type: "p",
        content: [
          "TiviMate finns för Android-baserade enheter som Fire TV, Firestick, Android TV och Android-boxar. Appen är uppbyggd kring en TV-guide som påminner om vanlig tablå-TV, vilket gör den lätt att hitta i för dig som mest tittar på live-TV. Du loggar in med Xtream Codes eller M3U-länk.",
        ],
      },
      {
        type: "ul",
        items: [
          ["Fördelar: tydlig TV-guide, smidig att styra med fjärrkontrollen, bra för live-TV."],
          ["Att tänka på: finns bara för Android-baserade enheter, och vissa funktioner kräver en betald premiumversion från apputvecklaren."],
        ],
      },
      { type: "h2", text: "IPTV Smarters – för många enheter", id: "iptv-smarters" },
      {
        type: "p",
        content: [
          "IPTV Smarters finns för Fire TV, Android TV, Android-mobiler och surfplattor. På Apple TV, iPhone och iPad heter appen Smarters Player Lite i App Store. Innehållet delas upp i live-TV, filmer och serier, och du loggar in med Xtream Codes eller M3U-länk.",
        ],
      },
      {
        type: "ul",
        items: [
          ["Fördelar: finns för många plattformar och fungerar på samma sätt på alla dina enheter."],
          ["Att tänka på: gränssnittet är inte lika tablåinriktat som TiviMate, och appens namn och utbud i appbutikerna kan ändras."],
        ],
      },
      { type: "h2", text: "IBO Player – för Samsung och LG", id: "ibo-player" },
      {
        type: "p",
        content: [
          "IBO Player installeras direkt från appbutiken på Samsung och LG Smart TV, så du behöver ingen extra box. Beroende på uppsättning loggar du in med Xtream Codes eller M3U-länk, eller aktiverar TV:n via den MAC-adress och Device Key som appen visar.",
        ],
      },
      {
        type: "ul",
        items: [
          ["Fördelar: fungerar direkt i TV:n och stöder alla tre inloggningssätten."],
          ["Att tänka på: appen är en tredjepartsapp som kan kräva en egen licens från apputvecklaren efter provperioden."],
        ],
      },
      { type: "h2", text: "Smart IPTV – för Samsung och LG", id: "smart-iptv" },
      {
        type: "p",
        content: [
          "Smart IPTV är ett annat alternativ för Samsung och LG. Appen visar en MAC-adress, och du lägger sedan till din M3U-länk via apputvecklarens webbplats eller ber oss hjälpa dig med aktiveringen.",
        ],
      },
      {
        type: "ul",
        items: [
          ["Fördelar: enkel app som fungerar direkt i TV:n."],
          ["Att tänka på: stöder M3U-länk och MAC-aktivering men inte Xtream Codes, och kan kräva en licens från apputvecklaren efter provperioden."],
        ],
      },
      { type: "h2", text: "Jämförelse: appar, enheter och inloggning", id: "jamforelse" },
      {
        type: "table",
        head: ["App", "Enheter", "Inloggning"],
        rows: installApps.map((app) => [app.name, app.devices, app.login]),
      },
      { type: "h2", text: "Exempel: så väljer du app", id: "exempel" },
      {
        type: "ul",
        items: [
          ["Du har en Samsung- eller LG-TV och vill slippa extra prylar: börja med IBO Player direkt i TV:n."],
          ["Du tittar mest på live-TV och sport via en Fire TV Stick: TiviMate ger en tablå som liknar vanlig TV."],
          ["Familjen tittar på olika enheter: IPTV Smarters finns för Android och Fire TV, och som Smarters Player Lite för Apple TV, iPhone och iPad – så alla får ett liknande upplägg."],
          ["Du vill främst titta i mobilen: IPTV Smarters på Android eller Smarters Player Lite på iPhone räcker långt."],
        ],
      },
      { type: "h2", text: "Gratis eller betald IPTV-app?", id: "gratis-eller-betald" },
      {
        type: "p",
        content: [
          "Apparna är fristående spelare från tredjepartsutvecklare. Vissa är gratis att ladda ner, medan andra kräver en licens eller en premiumversion efter en provperiod. Villkor och priser bestäms av apputvecklaren och kan ändras, så kontrollera aktuell information i appbutiken innan du bestämmer dig. Hur appens kostnad påverkar totalen räknar vi på i guiden ",
          { text: "Vad kostar IPTV?", href: "/blog/vad-kostar-iptv" },
          ".",
        ],
      },
      {
        type: "p",
        content: [
          "Tänk på att appen och IPTV-abonnemanget är två olika saker. Kräver appen en licens eller ett eget abonnemang betalar du det direkt till apputvecklaren – det ingår inte i ditt IPTV-abonnemang hos oss.",
        ],
      },
      { type: "h2", text: "Tips innan du väljer app", id: "tips" },
      {
        type: "ul",
        items: [
          ["Kontrollera att appen finns i appbutiken för just din TV-modell eller enhet."],
          ["Har du en vanlig TV utan bra appar kan en Fire TV Stick eller Android TV-box via HDMI vara enklaste vägen."],
          ["Se till att uppkopplingen räcker – läs om vilken internethastighet du behöver för IPTV i HD och 4K."],
          ["Testa gärna tjänsten innan du köper ett abonnemang."],
        ],
      },
      {
        type: "p",
        content: [
          "Mer om uppkopplingen hittar du i guiden om ",
          { text: "internethastighet för IPTV", href: "/blog/internethastighet-for-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor om IPTV-appar", id: "vanliga-fragor" },
      { type: "h3", text: "Vilken IPTV-app är bäst för Samsung TV?" },
      {
        type: "p",
        content: [
          "På Samsung används oftast IBO Player eller Smart IPTV, eftersom de finns i TV:ns egen appbutik. Läs vår guide om ",
          { text: "IPTV på Samsung Smart TV", href: "/blog/iptv-samsung-smart-tv" },
          ".",
        ],
      },
      { type: "h3", text: "Finns TiviMate för Apple TV eller Samsung?" },
      {
        type: "p",
        content: [
          "Nej, TiviMate finns bara för Android-baserade enheter. På Apple TV använder du Smarters Player Lite, och på Samsung IBO Player eller Smart IPTV. Se guiden om ",
          { text: "IPTV på Apple TV, iPhone och iPad", href: "/blog/iptv-apple-tv-iphone" },
          ".",
        ],
      },
      { type: "h3", text: "Kan jag använda samma inloggning i flera appar?" },
      {
        type: "p",
        content: [
          "Ja. Dina uppgifter för Xtream Codes eller M3U-länken fungerar i alla appar som stöder samma inloggningssätt, så du kan till exempel använda TiviMate på Fire TV och Smarters Player Lite i mobilen. Hur många enheter du vill kunna titta på samtidigt väljer du när du beställer ditt abonnemang.",
        ],
      },
      { type: "h3", text: "Ingår appen i IPTV-abonnemanget?" },
      {
        type: "p",
        content: [
          "Nej. Ditt IPTV-abonnemang ger dig tillgång till kanaler, filmer och serier, medan appen är en separat spelare från en tredjepartsutvecklare. Om appen kräver en licens eller en premiumversion betalar du den direkt till apputvecklaren.",
        ],
      },
      { type: "h3", text: "Varför hittar jag inte appen i appbutiken?" },
      {
        type: "p",
        content: [
          "Tredjepartsappar byts ibland ut eller försvinner ur appbutikerna, och utbudet kan skilja sig mellan TV-modeller. Hör av dig till oss så tipsar vi om ett alternativ som fungerar på din enhet.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Välj TiviMate eller IPTV Smarters på Fire TV och Android TV, IBO Player eller Smart IPTV på Samsung och LG, och Smarters Player Lite på Apple TV, iPhone och iPad. Med ",
          { text: "IPTV Sverige", href: "/" },
          " från Sweden IPTV får du inloggningsuppgifter som passar din app – se ",
          { text: "våra abonnemang", href: "/priser" },
          " eller börja med en gratis testperiod.",
        ],
      },
    ],
  },
  {
    slug: "iptv-samsung-smart-tv",
    title: "IPTV på Samsung Smart TV – så kommer du igång",
    description:
      "Så tittar du på IPTV på Samsung Smart TV: välj app, installera IBO Player eller Smart IPTV, logga in eller aktivera via MAC-adress. Steg för steg.",
    excerpt:
      "Du behöver ingen extra box för att titta på IPTV på din Samsung Smart TV. Så väljer du app, installerar den och loggar in eller aktiverar TV:n via MAC-adressen.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    readingMinutes: 5,
    image: samsungSmartTvImage,
    related: ["basta-iptv-appen", "iptv-wifi-eller-kabel"],
    body: [
      {
        type: "p",
        content: [
          "På en Samsung Smart TV tittar du på IPTV via en app från TV:ns egen appbutik – oftast IBO Player eller Smart IPTV. Du installerar appen, loggar in med dina uppgifter eller aktiverar TV:n via MAC-adressen, och sedan laddas kanalerna. Du behöver ingen extra box.",
        ],
      },
      { type: "image", ...samsungSmartTvImage, width: 1672, height: 941 },
      { type: "h2", text: "Det här behöver du", id: "det-har-behover-du" },
      {
        type: "ul",
        items: [
          ["En Samsung Smart TV som är ansluten till internet och har tillgång till appbutiken Apps."],
          ["En stabil uppkoppling – minst 10 Mbit/s för HD och 25 Mbit/s för 4K."],
          ["Inloggningsuppgifter (Xtream Codes eller M3U-länk) eller möjlighet att aktivera via MAC-adress."],
        ],
      },
      {
        type: "p",
        content: [
          "Samsungs smarta TV-apparater använder ett eget operativsystem, Tizen. Därför går det inte att installera Android-appar som TiviMate direkt på TV:n – du använder i stället appar som finns i Samsungs appbutik.",
        ],
      },
      { type: "h2", text: "IBO Player eller Smart IPTV?", id: "vilken-app" },
      {
        type: "table",
        head: ["", "IBO Player", "Smart IPTV"],
        rows: [
          ["Inloggning", "Xtream Codes, M3U-länk eller MAC-aktivering", "M3U-länk eller MAC-aktivering"],
          ["Lägga till spellista", "Direkt i appen eller via apputvecklarens webbplats", "Via apputvecklarens webbplats (siptv.eu/mylist)"],
          ["Applicens", "Kan kräva licens från apputvecklaren efter provperioden", "Kan kräva licens från apputvecklaren efter provperioden"],
        ],
      },
      {
        type: "p",
        content: [
          "Vill du kunna logga in med Xtream Codes är IBO Player det naturliga valet. En bredare jämförelse hittar du i guiden om ",
          { text: "bästa IPTV-appen", href: "/blog/basta-iptv-appen" },
          ".",
        ],
      },
      { type: "h2", text: "Installera IBO Player på Samsung", id: "ibo-player" },
      {
        type: "ol",
        items: [
          ["Tryck på Home på fjärrkontrollen, gå till Apps och sök efter IBO Player."],
          ["Installera appen och starta den."],
          ["Kan du lägga till en spellista direkt väljer du Xtream Codes och anger serveradress, användarnamn och lösenord – eller klistrar in din M3U-länk."],
          ["Visar appen i stället en MAC-adress och en Device Key används MAC-aktivering. Skicka MAC-adressen till oss via WhatsApp så hjälper vi dig att aktivera, eller lägg till spellistan själv på IBO Players webbplats."],
          ["Starta om appen. Kanaler, filmer och serier laddas automatiskt."],
        ],
      },
      { type: "h2", text: "Installera Smart IPTV på Samsung", id: "smart-iptv" },
      {
        type: "ol",
        items: [
          ["Sök efter Smart IPTV i Apps, installera appen och starta den."],
          ["Anteckna MAC-adressen som visas på skärmen."],
          ["Lägg till din M3U-länk på siptv.eu/mylist tillsammans med MAC-adressen, eller skicka MAC-adressen till oss via WhatsApp så hjälper vi dig."],
          ["Starta om appen så laddas kanallistan."],
        ],
      },
      { type: "h2", text: "Rätt MAC-adress", id: "mac-adress" },
      {
        type: "p",
        content: [
          "Använd alltid den MAC-adress som visas i appen. Den kan skilja sig från TV:ns egen nätverksadress i inställningarna, och det är appens adress som gäller vid aktiveringen. Skriv av den noga – en enda felaktig siffra eller bokstav gör att aktiveringen inte fungerar. Mer om de olika inloggningssätten läser du i guiden om ",
          { text: "Xtream Codes eller M3U", href: "/blog/xtream-codes-eller-m3u" },
          ". Var du hittar rätt adress på olika enheter visar vi i guiden om ",
          { text: "MAC-adress för IPTV", href: "/blog/mac-adress-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Uppdatera TV:ns mjukvara", id: "uppdatera-tv" },
      {
        type: "p",
        content: [
          "En uppdaterad TV ger bäst förutsättningar för att apparna ska fungera stabilt. Så kontrollerar du om det finns en uppdatering:",
        ],
      },
      {
        type: "ol",
        items: [
          ["Tryck på Home på fjärrkontrollen och öppna Inställningar."],
          ["Gå till Support och välj Programuppdatering."],
          ["Välj Uppdatera nu och låt TV:n starta om när uppdateringen är klar."],
        ],
      },
      {
        type: "p",
        content: [
          "Menyernas namn kan skilja sig något mellan olika modeller och årsmodeller.",
        ],
      },
      { type: "h2", text: "Hittar du inte appen?", id: "hittar-inte-appen" },
      {
        type: "p",
        content: [
          "Utbudet i Samsungs appbutik varierar mellan modeller och kan ändras över tid. Hittar du inte IBO Player eller Smart IPTV kan du höra av dig till oss, så tipsar vi om ett alternativ. Ett annat sätt är att koppla in en Fire TV Stick eller en Android TV-box i TV:ns HDMI-port och använda TiviMate eller IPTV Smarters – se ",
          { text: "guiden för Fire TV", href: "/installera#firestick" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga problem på Samsung Smart TV", id: "vanliga-problem" },
      {
        type: "ul",
        items: [
          ["Appen fastnar vid laddning: dra ur TV:ns strömsladd i ungefär en minut och starta igen."],
          ["Aktiveringen fungerar inte: kontrollera att du använt MAC-adressen som visas i appen."],
          ["Appen slutade fungera efter en tid: provperioden för appens licens kan ha gått ut. Licensen köps från apputvecklaren och ingår inte i IPTV-abonnemanget."],
          ["Bilden hackar: TV:n har ofta en nätverksport – en kabel ger stabilare bild än wifi."],
        ],
      },
      {
        type: "p",
        content: [
          "Fler lösningar finns i guiderna ",
          { text: "IPTV fungerar inte?", href: "/blog/iptv-fungerar-inte" },
          " och ",
          { text: "wifi eller nätverkskabel för IPTV", href: "/blog/iptv-wifi-eller-kabel" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Kan jag installera TiviMate på en Samsung-TV?" },
      {
        type: "p",
        content: [
          "Nej, TiviMate finns bara för Android-baserade enheter. Vill du använda TiviMate behöver du en Fire TV Stick eller en Android TV-box kopplad till TV:n.",
        ],
      },
      { type: "h3", text: "Fungerar det på äldre Samsung-modeller?" },
      {
        type: "p",
        content: [
          "Det beror på om apparna finns i appbutiken för din modell. Sök efter IBO Player och Smart IPTV i Apps – hittar du dem kan du använda dem.",
        ],
      },
      { type: "h3", text: "Fungerar samma sak på LG?" },
      {
        type: "p",
        content: [
          "Ja, IBO Player och Smart IPTV finns även för LG Smart TV, där du installerar dem från LG Content Store. Stegen är i stort sett desamma – se ",
          { text: "installationsguiden för Smart TV", href: "/installera#smart-tv" },
          ".",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Installera IBO Player eller Smart IPTV från Apps, logga in med Xtream Codes eller M3U-länk, eller aktivera via appens MAC-adress, och starta om appen. Med ",
          { text: "IPTV Sverige", href: "/" },
          " hjälper vi dig gärna med aktiveringen – välj bland ",
          { text: "våra abonnemang", href: "/priser" },
          " eller börja med en gratis testperiod.",
        ],
      },
    ],
  },
  {
    slug: "iptv-apple-tv-iphone",
    title: "IPTV på Apple TV, iPhone och iPad",
    description:
      "Så tittar du på IPTV på Apple TV, iPhone och iPad med Smarters Player Lite. Installera appen, logga in med Xtream Codes eller M3U och få stabil bild.",
    excerpt:
      "Med appen Smarters Player Lite tittar du på IPTV på Apple TV, iPhone och iPad. Så installerar du appen, loggar in och får en stabil bild.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-25",
    readingMinutes: 5,
    image: appleTvIphoneImage,
    related: ["basta-iptv-appen", "xtream-codes-eller-m3u"],
    body: [
      {
        type: "p",
        content: [
          "På Apple TV, iPhone och iPad tittar du på IPTV med appen Smarters Player Lite från App Store. Du installerar appen, loggar in med Xtream Codes eller en M3U-länk, och sedan laddas kanaler, filmer och serier. Samma inloggningsuppgifter fungerar i appen på alla dina Apple-enheter.",
        ],
      },
      { type: "image", ...appleTvIphoneImage, width: 1672, height: 941 },
      { type: "h2", text: "Det här behöver du", id: "det-har-behover-du" },
      {
        type: "ul",
        items: [
          ["En Apple TV, iPhone eller iPad med tillgång till App Store."],
          ["En stabil internetuppkoppling."],
          ["Dina inloggningsuppgifter: serveradress, användarnamn och lösenord, eller en M3U-länk."],
        ],
      },
      { type: "h2", text: "Vilka Apple TV-modeller fungerar?", id: "apple-tv-modeller" },
      {
        type: "p",
        content: [
          "Appar från App Store kan installeras på Apple TV HD och Apple TV 4K. Äldre modeller, från tredje generationen och tidigare, saknar App Store och kan därför inte användas med IPTV-appar. Där kan en Fire TV Stick eller en Android TV-box vara ett alternativ.",
        ],
      },
      { type: "h2", text: "Installera IPTV på Apple TV", id: "apple-tv" },
      {
        type: "ol",
        items: [
          ["Öppna App Store på din Apple TV, sök efter Smarters Player Lite och installera appen."],
          ["Starta appen och välj inloggning med Xtream Codes API, eller lägg till din M3U-länk."],
          ["Fyll i användarnamn, lösenord och serveradress och bekräfta. Innehållet laddas automatiskt."],
        ],
      },
      {
        type: "p",
        content: [
          "Att skriva med fjärrkontrollen kan ta tid. Många använder därför tangentbordet i iPhone, som kan kopplas till Apple TV när ett textfält är aktivt, för att fylla i uppgifterna snabbare.",
        ],
      },
      { type: "h2", text: "Installera IPTV på iPhone och iPad", id: "iphone-ipad" },
      {
        type: "ol",
        items: [
          ["Öppna App Store, sök efter Smarters Player Lite och installera appen."],
          ["Välj inloggning med Xtream Codes API och fyll i användarnamn, lösenord och serveradress – eller lägg till din M3U-länk."],
          ["Bekräfta och börja titta direkt i mobilen eller surfplattan."],
        ],
      },
      { type: "h2", text: "Xtream Codes eller M3U-länk?", id: "inloggning" },
      {
        type: "p",
        content: [
          "Smarters Player Lite stöder båda inloggningssätten. Med Xtream Codes sorterar appen kanaler, filmer, serier och TV-guide automatiskt, vilket gör det enklare att hitta rätt. Vill du veta mer om skillnaden kan du läsa guiden om ",
          { text: "Xtream Codes eller M3U", href: "/blog/xtream-codes-eller-m3u" },
          ".",
        ],
      },
      { type: "h2", text: "Tips för en stabil bild på Apple TV", id: "tips-apple-tv" },
      {
        type: "ul",
        items: [
          ["Har din Apple TV en nätverksport, anslut den med kabel till routern – det ger jämnast bild."],
          ["Använder du wifi, placera routern nära TV:n och anslut till 5 GHz-bandet om det finns."],
          ["Håll både tvOS och appen uppdaterade."],
          ["Starta om Apple TV om appen börjar bete sig konstigt."],
        ],
      },
      {
        type: "p",
        content: [
          "Fler råd om uppkopplingen hittar du i guiden om ",
          { text: "wifi eller nätverkskabel för IPTV", href: "/blog/iptv-wifi-eller-kabel" },
          ".",
        ],
      },
      { type: "h2", text: "Titta på iPhone och iPad", id: "titta-i-mobilen" },
      {
        type: "p",
        content: [
          "I mobilen och surfplattan fungerar IPTV både via wifi och mobilt nätverk. Tänk på att strömmande video i HD och 4K förbrukar mycket data, så använd wifi när du kan om du har ett mobilabonnemang med begränsad surf. Hur mycket hastighet som krävs för olika bildkvaliteter läser du i guiden om ",
          { text: "internethastighet för IPTV", href: "/blog/internethastighet-for-iptv" },
          ", och hur mycket data det blir i guiden ",
          { text: "Hur mycket data drar IPTV?", href: "/blog/iptv-dataforbrukning" },
          ".",
        ],
      },
      { type: "h2", text: "Felsökning på Apple TV, iPhone och iPad", id: "felsokning" },
      {
        type: "ul",
        items: [
          ["Inloggningen misslyckas: kontrollera serveradressen, inklusive http:// och eventuellt portnummer, och att användarnamn och lösenord är rätt skrivna."],
          ["Inget innehåll visas: logga ut och in igen, eller ta bort profilen i appen och lägg till den på nytt."],
          ["Bilden hackar: anslut Apple TV med kabel eller använd 5 GHz-wifi."],
          ["Appen hänger sig på Apple TV: tryck två gånger på TV-knappen på fjärrkontrollen, svep bort appen och starta den igen."],
        ],
      },
      {
        type: "p",
        content: [
          "Fler lösningar hittar du i guiden ",
          { text: "IPTV fungerar inte?", href: "/blog/iptv-fungerar-inte" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Vad heter IPTV Smarters i App Store?" },
      {
        type: "p",
        content: [
          "På Apple TV, iPhone och iPad heter appen Smarters Player Lite. Appnamn i App Store kan ändras – hittar du den inte är du välkommen att höra av dig till oss.",
        ],
      },
      { type: "h3", text: "Finns TiviMate för Apple TV?" },
      {
        type: "p",
        content: [
          "Nej, TiviMate finns bara för Android-baserade enheter. En jämförelse av apparna för olika enheter hittar du i guiden om ",
          { text: "bästa IPTV-appen", href: "/blog/basta-iptv-appen" },
          ".",
        ],
      },
      { type: "h3", text: "Kan jag använda samma konto på Apple TV och iPhone?" },
      {
        type: "p",
        content: [
          "Samma inloggningsuppgifter fungerar i appen på alla dina enheter. Du kan titta på flera enheter samtidigt med samma abonnemang, och du väljer själv hur många enheter du vill ha när du beställer. Fler enheter som tittar samtidigt kostar extra – berätta hur många du behöver, så får du priset för just ditt abonnemang.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Installera Smarters Player Lite från App Store, logga in med Xtream Codes eller M3U-länk och använd gärna kabel på Apple TV. Steg för steg för alla enheter finns i ",
          { text: "installationsguiden", href: "/installera#apple-tv" },
          ". Med ",
          { text: "IPTV Sverige", href: "/" },
          " kan du börja med en gratis testperiod innan du väljer bland ",
          { text: "våra abonnemang", href: "/priser" },
          ".",
        ],
      },
    ],
  },
  {
    slug: "iptv-epg-tv-guide",
    title: "EPG och TV-guide i IPTV – så fungerar tablån",
    description:
      "Vad är EPG i IPTV och varför är TV-guiden ibland tom eller visar fel tid? Så fungerar tablån i IPTV-appar och så får du den att fungera.",
    excerpt:
      "EPG är TV-guiden i din IPTV-app. Så fungerar tablån, varför den ibland är tom eller visar fel tid och hur du uppdaterar den.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    readingMinutes: 5,
    image: epgTvGuideImage,
    related: ["iptv-fungerar-inte", "xtream-codes-eller-m3u"],
    body: [
      {
        type: "p",
        content: [
          "EPG står för Electronic Program Guide och är TV-guiden i din IPTV-app – tablån som visar vad som sänds just nu och senare på varje kanal. I ditt abonnemang hos Sweden IPTV ingår en TV-guide, som appen laddar ner och kopplar till kanalerna. Visas guiden inte direkt eller visar den fel klockslag beror det oftast på appens inställningar, och det går att åtgärda med några enkla steg.",
        ],
      },
      { type: "image", ...epgTvGuideImage, width: 1672, height: 941 },
      { type: "h2", text: "Vad är EPG?", id: "vad-ar-epg" },
      {
        type: "p",
        content: [
          "EPG är samma sak som TV-guiden eller tablån i traditionell TV. I en IPTV-app ser du programmens namn, start- och sluttider och ofta en kort beskrivning. Med guiden kan du bläddra framåt i tiden, se vad som går på andra kanaler och snabbt byta till det du vill titta på.",
        ],
      },
      { type: "h2", text: "Hur fungerar TV-guiden i en IPTV-app?", id: "hur-fungerar-epg" },
      {
        type: "p",
        content: [
          "Programinformationen kommer som en separat datakälla, ofta i formatet XMLTV. Appen laddar ner informationen och matchar den mot kanalerna i din kanallista. Matchningen sker med hjälp av ett kanal-ID, så att rätt program visas på rätt kanal.",
        ],
      },
      {
        type: "p",
        content: [
          "Loggar du in med Xtream Codes hämtar appen TV-guiden automatiskt. Med en M3U-länk kan guiden behöva läggas till som en separat länk i appens inställningar – hör av dig till oss så hjälper vi dig. Skillnaderna mellan inloggningarna förklaras i guiden om ",
          { text: "Xtream Codes eller M3U", href: "/blog/xtream-codes-eller-m3u" },
          ".",
        ],
      },
      { type: "h2", text: "TV-guiden i de vanligaste apparna", id: "epg-i-apparna" },
      {
        type: "ul",
        items: [
          ["TiviMate: TV-guiden är en central del av appen och visas som en klassisk tablå med alla kanaler."],
          ["IPTV Smarters och Smarters Player Lite: guiden finns i live-TV-delen och kan behöva laddas ner första gången du öppnar den."],
          ["IBO Player och Smart IPTV: programinformationen visas direkt i kanallistan."],
        ],
      },
      {
        type: "p",
        content: [
          "Menyernas namn och placering kan skilja sig mellan appversioner. Vilken app som passar din enhet läser du i guiden om ",
          { text: "bästa IPTV-appen", href: "/blog/basta-iptv-appen" },
          ".",
        ],
      },
      { type: "h2", text: "Lägg till TV-guiden med M3U-länk", id: "epg-med-m3u" },
      {
        type: "p",
        content: [
          "Använder du en M3U-länk i stället för Xtream Codes kan du behöva lägga till TV-guiden själv. I de flesta appar går det till så här:",
        ],
      },
      {
        type: "ol",
        items: [
          ["Öppna appens inställningar och leta efter EPG, TV-guide eller XMLTV."],
          ["Välj att lägga till en ny källa och klistra in länken till TV-guiden."],
          ["Spara och uppdatera guiden. Första nedladdningen kan ta en stund."],
          ["Behöver du länken eller hjälp med inställningen? Kontakta oss så hjälper vi dig."],
        ],
      },
      { type: "h2", text: "Smarta sätt att använda TV-guiden", id: "tips-tv-guide" },
      {
        type: "ul",
        items: [
          ["Bläddra framåt i tablån för att se vad som sänds senare i kväll eller i morgon."],
          ["Lägg till dina favoritkanaler, så hamnar de först och du slipper bläddra."],
          ["Använd kategorier för att snabbt hitta sport, nyheter eller barnkanaler."],
          ["I vissa appar kan du ställa in en påminnelse inför ett program."],
        ],
      },
      { type: "h2", text: "Varför är TV-guiden tom?", id: "tom-tv-guide" },
      {
        type: "ul",
        items: [
          ["Guiden har inte laddats ner än: vänta en stund efter första inloggningen eller uppdatera guiden manuellt."],
          ["Spellistan behöver uppdateras: uppdatera spellistan i appen eller starta om appen."],
          ["Du loggar in med M3U-länk: guiden kan behöva läggas till separat i appens inställningar."],
          ["Gammal data i cachen: rensa appens cache och ladda om guiden."],
        ],
      },
      { type: "h2", text: "TV-guiden visar fel tid", id: "fel-tid" },
      {
        type: "p",
        content: [
          "Är alla program förskjutna med en eller flera timmar beror det nästan alltid på tidszonen. Kontrollera att enhetens tidszon är inställd på Sverige (Stockholm) och att datum och tid hämtas automatiskt. Många appar har också en inställning för tidsförskjutning av TV-guiden, där du kan justera tiden i hela timmar.",
        ],
      },
      { type: "h2", text: "Så uppdaterar du TV-guiden manuellt", id: "uppdatera-epg" },
      {
        type: "ol",
        items: [
          ["Öppna appens inställningar och leta efter TV-guide eller EPG."],
          ["Välj att uppdatera eller ladda om guiden."],
          ["Vänta tills nedladdningen är klar – det kan ta en stund med många kanaler."],
          ["Starta om appen om guiden fortfarande inte visas."],
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Vad betyder XMLTV?" },
      {
        type: "p",
        content: [
          "XMLTV är ett vanligt filformat för TV-guider. Det innehåller kanaler, program och tider, och många IPTV-appar kan läsa det.",
        ],
      },
      { type: "h3", text: "Ingår TV-guiden i abonnemanget?" },
      {
        type: "p",
        content: [
          "Ja, TV-guiden ingår i ditt abonnemang hos Sweden IPTV. Får du inte guiden att visas i din app hjälper vår support dig att komma igång.",
        ],
      },
      { type: "h3", text: "Hur ofta uppdateras TV-guiden?" },
      {
        type: "p",
        content: [
          "Det beror på appen. Många uppdaterar guiden automatiskt med jämna mellanrum, och i inställningarna kan du ofta välja hur ofta det ska ske eller uppdatera manuellt.",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "EPG är TV-guiden i din IPTV-app. Är den tom, uppdatera guiden och spellistan, och visar den fel tid, kontrollera tidszonen. Fungerar det ändå inte hittar du fler lösningar i guiden ",
          { text: "IPTV fungerar inte?", href: "/blog/iptv-fungerar-inte" },
          " – eller ",
          { text: "kontakta oss", href: "/kontakt" },
          " så hjälper vi dig. Med ",
          { text: "IPTV Sverige", href: "/" },
          " får du support via WhatsApp dygnet runt.",
        ],
      },
    ],
  },
  {
    slug: "iptv-fungerar-inte",
    title: "IPTV fungerar inte? Felsök ljud, bild och inloggning",
    metaTitle: "IPTV fungerar inte? Så felsöker du",
    description:
      "Fungerar inte din IPTV? Felsök inloggning, kanallista, svart bild, ljud och ljud i osynk steg för steg – och se när det är dags att kontakta supporten.",
    excerpt:
      "Inloggningen misslyckas, kanallistan är tom eller ljudet saknas? Så felsöker du de vanligaste IPTV-problemen steg för steg.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    readingMinutes: 5,
    image: iptvFungerarInteImage,
    related: ["iptv-buffrar", "iptv-epg-tv-guide"],
    body: [
      {
        type: "p",
        content: [
          "När IPTV inte fungerar beror det oftast på uppkopplingen, appen eller inloggningsuppgifterna. Börja med att starta om routern och enheten, kontrollera att internet fungerar och att appen är uppdaterad. Här går vi igenom de vanligaste problemen – inloggning, tom kanallista, svart bild, ljud och ljud i osynk – och hur du löser dem.",
        ],
      },
      {
        type: "p",
        content: [
          "Är problemet att bilden laddar och stannar har vi en egen guide om vad du kan göra när ",
          { text: "IPTV buffrar", href: "/blog/iptv-buffrar" },
          ".",
        ],
      },
      { type: "image", ...iptvFungerarInteImage, width: 1672, height: 941 },
      { type: "h2", text: "Snabb felsökning i fem steg", id: "snabb-felsokning" },
      {
        type: "ol",
        items: [
          ["Starta om enheten och routern. Dra ur strömsladden i ungefär en minut och koppla sedan in den igen."],
          ["Kontrollera internet. Fungerar andra appar och webbsidor på samma enhet?"],
          ["Starta om appen och se till att den är uppdaterad till senaste versionen."],
          ["Kontrollera inloggningsuppgifterna så att de är inskrivna exakt som du fick dem."],
          ["Testa en annan kanal och, om du kan, en annan enhet. Då ser du om felet gäller en kanal, en enhet eller allt."],
        ],
      },
      { type: "h2", text: "Inloggningen misslyckas", id: "inloggning" },
      {
        type: "ul",
        items: [
          ["Serveradressen måste vara inskriven exakt som du fick den, inklusive http:// och eventuellt portnummer."],
          ["Användarnamn och lösenord är skiftlägeskänsliga – stora och små bokstäver spelar roll."],
          ["Kontrollera att inget extra mellanslag har följt med när du kopierade uppgifterna."],
          ["Se till att rätt inloggningstyp är vald i appen. En M3U-länk fungerar inte där appen förväntar sig Xtream Codes."],
          ["Använder du MAC-aktivering, kontrollera att rätt MAC-adress är registrerad hos oss."],
        ],
      },
      {
        type: "p",
        content: [
          "Skillnaden mellan inloggningssätten förklaras i guiden om ",
          { text: "Xtream Codes eller M3U", href: "/blog/xtream-codes-eller-m3u" },
          ".",
        ],
      },
      { type: "h2", text: "Inga kanaler eller tom kanallista", id: "tom-kanallista" },
      {
        type: "p",
        content: [
          "Uppdatera spellistan i appen eller starta om appen. Använder du MAC-aktivering, kontrollera att rätt MAC-adress är registrerad. Visas kanalerna men inte TV-guiden finns lösningarna i guiden om ",
          { text: "EPG och TV-guide", href: "/blog/iptv-epg-tv-guide" },
          ". Är du osäker på om abonnemanget fortfarande är aktivt kan du fråga oss.",
        ],
      },
      { type: "h2", text: "Svart skärm eller bilden fryser", id: "svart-skarm" },
      {
        type: "ul",
        items: [
          ["Byt till en annan kanal för att se om felet bara gäller en kanal."],
          ["Vissa appar låter dig välja mellan olika spelare eller avkodning (hårdvara eller mjukvara). Prova att byta inställning."],
          ["Välj HD i stället för 4K om din uppkoppling ligger nära gränsen."],
          ["Starta om enheten för att frigöra minne."],
        ],
      },
      { type: "h2", text: "Inget ljud", id: "inget-ljud" },
      {
        type: "ul",
        items: [
          ["Kontrollera att TV:n och eventuell soundbar inte är ljudlös och har rätt ljudkälla vald."],
          ["Vissa kanaler har flera ljudspår – välj ett annat ljudspår i appen."],
          ["Kontrollera ljudinställningarna i din TV-box eller Fire TV. Prova att byta ljudformat från surround till stereo om ljudet saknas på vissa kanaler."],
          ["Testa en annan kanal för att se om felet bara gäller en kanal."],
        ],
      },
      { type: "h2", text: "Ljud och bild i osynk", id: "ljud-i-osynk" },
      {
        type: "p",
        content: [
          "Om ljudet ligger före eller efter bilden kan du börja med att byta kanal och sedan gå tillbaka. Hjälper det inte, prova att byta spelare eller avkodning i appen. Många appar och TV-apparater har dessutom en inställning för ljudfördröjning, och använder du soundbar kan även den ha en sådan inställning. Gäller felet bara en kanal ligger orsaken ofta i själva sändningen.",
        ],
      },
      { type: "h2", text: "Appen startar inte eller kraschar", id: "appen-kraschar" },
      {
        type: "ul",
        items: [
          ["Uppdatera appen och enhetens mjukvara."],
          ["Rensa appens cache i enhetens inställningar."],
          ["Kontrollera att det finns ledigt lagringsutrymme på enheten, särskilt på Fire TV Stick."],
          ["Avinstallera och installera om appen – se steg för steg i installationsguiden."],
        ],
      },
      {
        type: "p",
        content: [
          "Instruktioner för varje enhet hittar du i vår ",
          { text: "installationsguide", href: "/installera" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga felmeddelanden", id: "felmeddelanden" },
      {
        type: "table",
        head: ["Felmeddelande (exempel)", "Vad det brukar betyda", "Gör så här"],
        rows: [
          ["Fel användarnamn eller lösenord", "Inloggningsuppgifterna stämmer inte", "Kontrollera stavning, stora och små bokstäver och mellanslag."],
          ["Kan inte ansluta till servern", "Appen når inte servern", "Kontrollera serveradressen och internet, och starta om routern."],
          ["Kontot har gått ut", "Abonnemanget är inte längre aktivt", "Kontakta oss så hjälper vi dig."],
          ["Kanalen kan inte spelas upp", "Problemet gäller en enskild kanal", "Testa en annan kanal eller byt spelare i appen."],
        ],
      },
      {
        type: "p",
        content: [
          "Den exakta formuleringen skiljer sig mellan apparna, och många appar visar meddelandena på engelska.",
        ],
      },
      { type: "h2", text: "Är tjänsten nere?", id: "ar-tjansten-nere" },
      {
        type: "p",
        content: [
          "Fungerar internet som vanligt men inga kanaler fungerar, på flera enheter och i olika appar, kan felet ligga hos oss. Då är det dags att höra av sig till supporten i stället för att fortsätta felsöka själv.",
        ],
      },
      { type: "h2", text: "Kontakta supporten", id: "kontakta-supporten" },
      {
        type: "p",
        content: ["Vi kan hjälpa dig snabbare om du skickar med:"],
      },
      {
        type: "ul",
        items: [
          ["Vilken enhet och vilken app du använder."],
          ["Vilken kanal det gäller och ungefär när felet uppstod."],
          ["Eventuellt felmeddelande, gärna som en bild."],
          ["Vad du redan har provat."],
        ],
      },
      {
        type: "p",
        content: [
          "Du når oss via WhatsApp dygnet runt – se alla sätt att ",
          { text: "kontakta oss", href: "/kontakt" },
          ".",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Starta om enhet och router, kontrollera internet och inloggning och testa en annan kanal eller enhet. Ljudproblem löses ofta med rätt ljudspår eller ljudinställning, och tom kanallista med en uppdaterad spellista. Med ",
          { text: "IPTV Sverige", href: "/" },
          " hjälper vår support dig dygnet runt via WhatsApp, både med frågor om abonnemanget och med tekniska problem.",
        ],
      },
    ],
  },
  {
    slug: "iptv-wifi-eller-kabel",
    title: "Wi-Fi eller nätverkskabel för IPTV – och rätt routerinställningar",
    metaTitle: "Wi-Fi eller nätverkskabel för IPTV?",
    description:
      "Ska du använda wifi eller nätverkskabel för IPTV? Så skiljer de sig åt, vilken kabel du behöver och vilka routerinställningar som ger stabilare bild.",
    excerpt:
      "Nätverkskabel ger stabilast bild, men wifi kan räcka. Så väljer du anslutning, vilken kabel som behövs och vilka routerinställningar som ger stabilare IPTV.",
    publishedAt: "2026-10-17",
    updatedAt: "2026-10-17",
    readingMinutes: 5,
    image: wifiEllerKabelImage,
    related: ["internethastighet-for-iptv", "iptv-buffrar"],
    body: [
      {
        type: "p",
        content: [
          "Kan du dra en nätverkskabel mellan routern och TV:n eller boxen är det oftast det bästa valet för IPTV – kabeln ger den jämnaste och stabilaste uppkopplingen. Wifi fungerar också bra om signalen är stark, särskilt på 5 GHz-bandet och med routern placerad nära TV:n. Här går vi igenom skillnaderna och vilka routerinställningar som kan ge en stabilare bild.",
        ],
      },
      {
        type: "h2",
        text: "Nätverkskabel eller wifi – vad är skillnaden?",
        id: "skillnaden",
      },
      {
        type: "table",
        head: ["", "Nätverkskabel", "Wifi"],
        rows: [
          ["Stabilitet", "Mycket jämn", "Varierar med signalen"],
          ["Påverkas av väggar och avstånd", "Nej", "Ja"],
          ["Påverkas av andra trådlösa nätverk", "Nej", "Ja, särskilt på 2,4 GHz"],
          ["Installation", "Kräver en kabel till TV:n", "Ingen kabel behövs"],
        ],
      },
      {
        type: "p",
        content: [
          "För IPTV är det stabiliteten som avgör. Appen laddar hela tiden in bilden i förväg, och om uppkopplingen svajar tar bufferten slut och bilden stannar – även om den genomsnittliga hastigheten är hög.",
        ],
      },
      { type: "image", ...wifiEllerKabelImage, width: 1672, height: 941 },
      { type: "h2", text: "När räcker wifi?", id: "nar-racker-wifi" },
      {
        type: "ul",
        items: [
          ["Routern står i samma rum som TV:n eller nära."],
          ["Enheten är ansluten till 5 GHz och visar stark signal."],
          ["Hastighetsmätningen vid TV:n ligger tydligt över behovet och varierar lite mellan mätningarna."],
          ["Det är få andra enheter som använder nätet samtidigt."],
        ],
      },
      { type: "h2", text: "Vilken nätverkskabel behöver du?", id: "vilken-kabel" },
      {
        type: "p",
        content: [
          "En vanlig nätverkskabel av typen Cat5e eller Cat6 räcker gott för IPTV. Båda klarar betydligt högre hastigheter än vad IPTV kräver. Platta kablar kan vara enklare att dra längs en list eller under en matta.",
        ],
      },
      {
        type: "p",
        content: [
          "Många smarta TV-apparater har en nätverksport på 100 Mbit/s. Det räcker för IPTV, eftersom en 4K-ström kräver ungefär 25 Mbit/s. Streamingstickor som Fire TV Stick saknar ofta nätverksport, men för många modeller finns en adapter som gör det möjligt att ansluta en kabel.",
        ],
      },
      { type: "h2", text: "Så ansluter du TV:n med nätverkskabel", id: "ansluta-med-kabel" },
      {
        type: "ol",
        items: [
          ["Koppla kabeln mellan en ledig LAN-port på routern och nätverksporten på TV:n eller boxen."],
          ["Öppna nätverksinställningarna på enheten och välj trådbunden anslutning om den inte väljs automatiskt."],
          ["Kontrollera att enheten är ansluten och starta om IPTV-appen."],
          ["Mät gärna hastigheten igen för att se skillnaden mot wifi."],
        ],
      },
      {
        type: "h2",
        text: "Alternativ när du inte kan dra kabel",
        id: "alternativ-till-kabel",
      },
      {
        type: "ul",
        items: [
          ["Mesh-wifi: flera enheter som tillsammans ger jämnare täckning i hela bostaden."],
          ["Powerline-adapter: skickar internet via elnätet. Hur bra det fungerar beror på elinstallationen."],
          ["Accesspunkt: en extra trådlös punkt nära TV:n, ansluten med kabel till routern."],
          ["Wifi-förstärkare: kan hjälpa vid svag signal, men en enkel förstärkare kan också sänka hastigheten."],
        ],
      },
      {
        type: "h2",
        text: "Routerinställningar för stabilare IPTV",
        id: "routerinstallningar",
      },
      {
        type: "p",
        content: [
          "Du ändrar inställningarna genom att logga in på routern i en webbläsare, oftast via en adress som står på routerns undersida. Menyerna skiljer sig mellan märken och modeller.",
        ],
      },
      { type: "h3", text: "Använd 5 GHz" },
      {
        type: "p",
        content: [
          "5 GHz-bandet är snabbare och störs mindre än 2,4 GHz. Om routern använder samma nätverksnamn för båda banden och enheten hamnar på 2,4 GHz kan du ge 5 GHz-nätet ett eget namn och ansluta TV:n till det.",
        ],
      },
      { type: "h3", text: "Välj en mindre belastad wifi-kanal" },
      {
        type: "p",
        content: [
          "Bor du i lägenhet kan grannarnas nätverk störa. Låt routern välja kanal automatiskt, eller prova en annan kanal manuellt om bilden ofta hackar vid samma tider. Fler råd för flerbostadshus finns i guiden om ",
          { text: "ostabilt wifi i lägenheten", href: "/blog/ostabilt-wifi-lagenhet" },
          ".",
        ],
      },
      { type: "h3", text: "Placera routern rätt" },
      {
        type: "p",
        content: [
          "Placera routern fritt och högt, inte i ett skåp, bakom TV:n eller nära metallföremål. Färre väggar mellan routern och TV:n ger starkare signal.",
        ],
      },
      { type: "h3", text: "Uppdatera routerns mjukvara" },
      {
        type: "p",
        content: [
          "Routertillverkare släpper uppdateringar som kan förbättra stabilitet och säkerhet. Kontrollera i routerns inställningar om det finns en ny version.",
        ],
      },
      { type: "h3", text: "Prioritera TV:n med QoS" },
      {
        type: "p",
        content: [
          "Har routern en QoS-funktion kan du ge TV:n eller TV-boxen högre prioritet än andra enheter. Det kan hjälpa när många använder nätet samtidigt.",
        ],
      },
      { type: "h3", text: "Starta om routern ibland" },
      {
        type: "p",
        content: [
          "En omstart rensar routerns arbetsminne och löser ofta tillfälliga problem. Dra ur strömsladden i ungefär en minut och koppla sedan in den igen.",
        ],
      },
      { type: "h2", text: "Testa skillnaden", id: "testa-skillnaden" },
      {
        type: "p",
        content: [
          "Mät hastigheten vid TV:n, först via wifi och sedan via kabel om du kan, gärna på kvällen. Då ser du hur mycket wifi påverkar din uppkoppling. Vilken hastighet som krävs för SD, HD och 4K läser du i guiden om ",
          { text: "internethastighet för IPTV", href: "/blog/internethastighet-for-iptv" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor", id: "vanliga-fragor" },
      { type: "h3", text: "Behöver min TV en gigabitport för 4K?" },
      {
        type: "p",
        content: [
          "Nej. En 4K-ström kräver ungefär 25 Mbit/s, så en nätverksport på 100 Mbit/s räcker för IPTV.",
        ],
      },
      { type: "h3", text: "Hjälper en wifi-förstärkare?" },
      {
        type: "p",
        content: [
          "Den kan hjälpa om signalen är svag, men en enkel förstärkare kan också sänka hastigheten. Mesh-wifi eller en accesspunkt ansluten med kabel ger ofta ett bättre resultat.",
        ],
      },
      { type: "h3", text: "Bilden hackar fast jag har kabel – vad gör jag?" },
      {
        type: "p",
        content: [
          "Då ligger orsaken troligen någon annanstans, till exempel i enheten, appen eller uppkopplingen in till bostaden. Läs guiden om vad du kan göra när ",
          { text: "IPTV buffrar", href: "/blog/iptv-buffrar" },
          ".",
        ],
      },
      { type: "h2", text: "Sammanfattning", id: "sammanfattning" },
      {
        type: "p",
        content: [
          "Använd nätverkskabel om du kan. Måste du använda wifi, anslut till 5 GHz, placera routern rätt och håll den uppdaterad. Stegen för att ansluta din enhet finns i ",
          { text: "installationsguiden", href: "/installera" },
          ". Med ",
          { text: "IPTV Sverige", href: "/" },
          " kan du testa tjänsten med din egen uppkoppling innan du väljer bland ",
          { text: "våra abonnemang", href: "/priser" },
          ".",
        ],
      },
    ],
  },
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
      {
        type: "p",
        content: [
          "Skillnaden mellan enhetens nätverksadress och appens eget ID förklarar vi i guiden ",
          { text: "MAC-adress för IPTV – var hittar du den?", href: "/blog/mac-adress-iptv" },
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
          "Det kan fungera, men hastighet och stabilitet varierar med täckningen och hur många som använder masten samtidigt. Mät därför på platsen där du ska titta, helst vid olika tider på dygnet, innan du bestämmer dig. Har abonnemanget en surfgräns, se också ",
          { text: "hur mycket data IPTV drar", href: "/blog/iptv-dataforbrukning" },
          ".",
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
      "Buffrar din IPTV? Så hittar du orsaken – nätverk, enhet eller app – och 8 sätt att få stabil bild, från nätverkskabel och 5 GHz-wifi till appinställningar.",
    excerpt:
      "Bilden fryser eller laddar hela tiden? Så tar du reda på om felet sitter i nätverket, enheten eller tjänsten – och 8 sätt att få en stabil bild.",
    publishedAt: "2026-09-25",
    updatedAt: "2026-10-25",
    readingMinutes: 8,
    image: {
      src: "/images/blog/iptv-buffrar-smart-tv-wifi.webp",
      alt: "Smart TV som buffrar under en fotbollsmatch, med en wifi-router i förgrunden",
    },
    related: ["iptv-wifi-eller-kabel", "iptv-fungerar-inte"],
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
      {
        type: "p",
        content: [
          "Fler råd om kabeltyper och routerinställningar hittar du i guiden om ",
          { text: "wifi eller nätverkskabel för IPTV", href: "/blog/iptv-wifi-eller-kabel" },
          ".",
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
          { text: "vår support via WhatsApp", href: "/kontakt" },
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
      {
        type: "p",
        content: [
          "Är problemet något annat än buffring, till exempel inloggning, ljud eller svart bild? Läs guiden ",
          { text: "IPTV fungerar inte?", href: "/blog/iptv-fungerar-inte" },
          ".",
        ],
      },
      { type: "h2", text: "Vanliga frågor om IPTV-buffring", id: "vanliga-fragor" },
      { type: "h3", text: "Varför buffrar IPTV mer på kvällen?" },
      {
        type: "p",
        content: [
          "På kvällen är fler uppkopplade samtidigt, både i ditt hem och i nätet i stort. Det gör att marginalerna krymper. Kabelanslutning och färre samtidiga nedladdningar brukar hjälpa mest. Bor du i lägenhet kan grannarnas nätverk också spela in – läs mer om ",
          { text: "ostabilt wifi i lägenheten", href: "/blog/ostabilt-wifi-lagenhet" },
          ".",
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
          ", läsa ",
          { text: "vad IPTV kostar per månad", href: "/blog/vad-kostar-iptv" },
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

export type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[åä]/g, "a")
    .replace(/ö/g, "o")
    .replace(/é/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Gives every H2/H3 an id so it can be linked from the table of contents.
// Ids set in the data are kept, so existing anchor links keep working.
export function withHeadingIds(blocks: ArticleBlock[]): ArticleBlock[] {
  const used = new Set(
    blocks.flatMap((b) => ((b.type === "h2" || b.type === "h3") && b.id ? [b.id] : []))
  );
  return blocks.map((b) => {
    if ((b.type !== "h2" && b.type !== "h3") || b.id) return b;
    const base = slugify(b.text) || "avsnitt";
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);
    return { ...b, id };
  });
}

export function getToc(blocks: ArticleBlock[]): TocItem[] {
  return blocks.flatMap((b) =>
    (b.type === "h2" || b.type === "h3") && b.id
      ? [{ id: b.id, text: b.text, level: b.type === "h2" ? (2 as const) : (3 as const) }]
      : []
  );
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}
