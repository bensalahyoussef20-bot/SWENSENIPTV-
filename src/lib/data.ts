export const siteConfig = {
  name: "Sweden IPTV",
  tagline: "IPTV i HD & 4K",
  domain: "swedeniptv.cc",
  url: "https://www.swedeniptv.cc",
  email: "contact@swedeniptv.cc",
};

export const whatsapp = {
  number: "212619965368",
  base: "https://wa.me/212619965368",
};

export function waLink(message: string) {
  return `${whatsapp.base}?text=${encodeURIComponent(message)}`;
}

export const waLinks = {
  freeTrial: waLink("Jag vill starta en gratis testperiod för IPTV Sverige"),
  buyNow: waLink("Jag vill köpa IPTV Sverige"),
  installHelp: waLink("Jag behöver hjälp med installation av IPTV Sverige"),
  support: waLink("Jag behöver hjälp med IPTV Sverige"),
  claimOffer: waLink("Jag vill ha 20% rabatt på IPTV Sverige"),
  welcomeOffer: waLink("Jag vill ha 20% rabatt på 12 Månader-planen"),
};

export const promoOffer = {
  badge: "BEGRÄNSAT ERBJUDANDE",
  message: "-20% på alla planer — erbjudandet slutar om:",
  cta: "Utnyttja erbjudandet",
  durationHours: 24,
};

// Same -20% offer as the top promo bar, spotlighted for first-time visitors
// on the 12-month plan specifically. Keep the discount % and base price in
// sync with `plans` / `promoOffer` above if either changes.
export const welcomeOffer = {
  eyebrow: "Välkommen till Sweden IPTV",
  title: "Få 20% rabatt på 12 månader",
  description:
    "Lås in vårt bästa pris: över 20 000 kanaler, alla filmer och serier i HD/4K, på alla dina enheter.",
  planLabel: "12 Månader",
  originalPrice: 799,
  discountedPrice: 639,
  perMonth: 53,
  disclaimer: "Visas endast en gång · Inga bindningstider",
};

export const navLinks = [
  { label: "Hem", href: "/" },
  { label: "Priser", href: "/priser" },
  { label: "Fördelar", href: "/fordelar" },
  { label: "Installera", href: "/installera" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNavLinks = [...navLinks, { label: "Blogg", href: "/blog" }];

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "layers",
    title: "20 000+ kanaler",
    description:
      "Sport, nyheter, barnprogram, film och underhållning från hela världen i ett enda paket.",
  },
  {
    icon: "signal",
    title: "Ingen buffring",
    description:
      "Stabila högkapacitetsservrar ger dig smidig streaming utan avbrott eller väntetid.",
  },
  {
    icon: "sparkle",
    title: "HD & 4K kvalitet",
    description: "Kristallklar bild på alla dina kanaler, filmer och serier.",
  },
  {
    icon: "devices",
    title: "Multi-screen",
    description:
      "Titta på flera enheter samtidigt med samma abonnemang – hemma eller på språng.",
  },
  {
    icon: "bolt",
    title: "Snabb aktivering",
    description: "Kom igång inom 5 minuter efter köp – inga krångliga steg.",
  },
  {
    icon: "shield-check",
    title: "Pengarna-tillbaka-garanti",
    description: "Inte nöjd? Vi löser det snabbt, utan krångel eller bindningstid.",
  },
];

export type ContentCategory = {
  icon: string;
  label: string;
  description: string;
};

export const contentCategories: ContentCategory[] = [
  {
    icon: "trophy",
    label: "Sport",
    description: "Fotboll, hockey, motorsport och mer, live och on-demand.",
  },
  {
    icon: "film",
    label: "Film & Serier",
    description: "Tusentals titlar från hela världen, alltid tillgängliga.",
  },
  {
    icon: "news",
    label: "Nyheter",
    description: "Svenska och internationella nyhetskanaler dygnet runt.",
  },
  {
    icon: "kids",
    label: "Barnkanaler",
    description: "Tryggt och roligt innehåll för de yngsta i familjen.",
  },
  {
    icon: "globe",
    label: "Dokumentärer",
    description: "Natur, historia och vetenskap i toppkvalitet.",
  },
];

export type ComparisonRow = {
  label: string;
  iptv: string | boolean;
  traditional: string | boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { label: "Pris per månad", iptv: "Från 67 kr", traditional: "Från 400 kr" },
  { label: "Installationstid", iptv: "5 minuter", traditional: "Flera dagar" },
  { label: "Bindningstid", iptv: "Ingen", traditional: "Ofta 12–24 månader" },
  { label: "Antal kanaler", iptv: "20 000+", traditional: "50–200" },
  { label: "Titta var som helst", iptv: true, traditional: false },
  { label: "Extra utrustning krävs", iptv: false, traditional: true },
];

export type InfoSegment = string | { text: string; href: string };

export const infoSection = {
  eyebrow: "Guide",
  heading: "IPTV Sverige – så fungerar det",
  paragraphs: [
    [
      "IPTV står för Internet Protocol Television och innebär att TV-kanaler, filmer och serier strömmas via din vanliga internetuppkoppling i stället för via parabol eller kabel-TV. Med IPTV Sverige från Sweden IPTV samlar du sport, nyheter, barnkanaler och underhållning i en och samma tjänst – hemma i soffan eller på språng.",
    ],
    [
      "Det enda du behöver är en stabil internetanslutning och en kompatibel enhet, till exempel Smart TV, Apple TV, Android TV, Fire TV Stick, MAG-box, mobil eller surfplatta. Vi rekommenderar minst 10 Mbit/s för HD och 25 Mbit/s för 4K. En trådbunden anslutning eller ett starkt wifi ger den jämnaste bilden.",
    ],
    [
      "Att komma igång är enkelt. Kontakta oss via WhatsApp och välj det ",
      { text: "abonnemang", href: "/priser" },
      " som passar dig – 3, 6 eller 12 månader. Efter din beställning får du dina aktiverings- och inloggningsuppgifter, och sedan följer du installationsguiden för din enhet. De flesta är igång inom några minuter.",
    ],
    [
      "Osäker? Börja med en gratis testperiod och se hur IPTV Sverige fungerar med din uppkoppling innan du bestämmer dig – utan bindningstid och utan dolda avgifter.",
    ],
  ] satisfies InfoSegment[][],
};

export const guarantee = {
  title: "30 dagars pengarna-tillbaka-garanti",
  description:
    "Inte nöjd av någon anledning? Hör av dig inom 30 dagar så löser vi det, utan krångel.",
};

export const devices = [
  {
    icon: "tv",
    title: "Smart TV",
    description: "Perfekt för Samsung, LG och andra smarta TV-apparater.",
  },
  {
    icon: "apple",
    title: "Apple TV",
    description: "Streama smidigt via Apple TV med enkel installation.",
  },
  {
    icon: "android",
    title: "Android TV",
    description: "Fungerar med Android TV-boxar och appar.",
  },
  {
    icon: "fire",
    title: "Fire TV",
    description: "Kompatibelt med Amazon Fire TV och Firestick.",
  },
  {
    icon: "mag",
    title: "MAG Box",
    description: "Stöd för MAG-boxar och IPTV-enheter.",
  },
  {
    icon: "mobile",
    title: "Mobil & Surfplatta",
    description: "Titta direkt på mobil eller surfplatta.",
  },
] as const;

export const deviceFeatures = [
  { icon: "bolt", title: "Installation på 5 minuter" },
  { icon: "signal", title: "Fungerar utan satellit" },
  { icon: "shield", title: "Support 24/7" },
] as const;

export const installSteps = [
  { step: 1, title: "Välj din enhet" },
  { step: 2, title: "Följ installationsguiden" },
  { step: 3, title: "Börja titta direkt" },
];

export type Plan = {
  id: string;
  duration: string;
  price: number;
  perMonth: number;
  saveLabel: string;
  popular?: boolean;
  features: string[];
  cta: string;
  orderLink: string;
};

export const plans: Plan[] = [
  {
    id: "3-man",
    duration: "3 Månader",
    price: 249,
    perMonth: 83,
    saveLabel: "Spara 10%",
    features: [
      "Över 20 000 kanaler",
      "Filmer & serier",
      "HD / 4K kvalitet",
      "Alla enheter",
      "Support 24/7",
    ],
    cta: "Beställ 3 månader",
    orderLink:
      "https://wa.me/212619965368?text=Jag%20vill%20k%C3%B6pa%203%20M%C3%A5nader%20IPTV%20Nordic",
  },
  {
    id: "12-man",
    duration: "12 Månader",
    price: 799,
    perMonth: 67,
    saveLabel: "Spara 35%",
    popular: true,
    features: [
      "Bästa priset",
      "Över 20 000 kanaler",
      "Full VOD-tillgång",
      "Sport, filmer & serier",
      "HD / 4K streaming",
      "Premium support",
      "Direkt aktivering",
    ],
    cta: "Välj bästa erbjudandet",
    orderLink:
      "https://wa.me/212619965368?text=Jag%20vill%20k%C3%B6pa%2012%20M%C3%A5nader%20IPTV%20Nordic",
  },
  {
    id: "6-man",
    duration: "6 Månader",
    price: 499,
    perMonth: 83,
    saveLabel: "Spara 20%",
    features: [
      "Allt i 3 månader",
      "Stabil streaming",
      "Sport, filmer & serier",
      "Snabb aktivering",
      "Prioriterad support",
    ],
    cta: "Beställ 6 månader",
    orderLink:
      "https://wa.me/212619965368?text=Jag%20vill%20k%C3%B6pa%206%20M%C3%A5nader%20IPTV%20Nordic",
  },
];

export const stats = [
  { target: 50000, decimals: 0, prefix: "", suffix: "+", label: "Kunder" },
  { target: 4.9, decimals: 1, prefix: "", suffix: " / 5", label: "Snittbetyg" },
  { target: 5, decimals: 0, prefix: "< ", suffix: " min", label: "Aktiveringstid" },
];

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Johan",
    city: "Stockholm, Sverige",
    quote:
      "Snabb aktivering och riktigt bra bildkvalitet. Sweden IPTV fungerar perfekt på min Smart TV.",
  },
  {
    name: "Sara",
    city: "Göteborg, Sverige",
    quote:
      "Enkel installation och stort utbud av kanaler, filmer och serier. Väldigt nöjd.",
  },
  {
    name: "Mikael",
    city: "Malmö, Sverige",
    quote:
      "Stabil nordisk iptv utan krångel. Supporten hjälpte mig komma igång på några minuter.",
  },
  {
    name: "Emma",
    city: "Uppsala, Sverige",
    quote:
      "Sweden IPTV var enkelt att komma igång med och fungerar utmärkt på Apple TV.",
  },
  {
    name: "Daniel",
    city: "Västerås, Sverige",
    quote: "Bra kvalitet på sportkanalerna och snabb support när jag behövde hjälp.",
  },
  {
    name: "Lina",
    city: "Helsingborg, Sverige",
    quote: "Perfekt för hela familjen. Massor av innehåll och väldigt enkel installation.",
  },
];

// Illustrative placeholder data for the "recent activity" toast — NOT real
// order events. Swap this for real purchase data (from your order system,
// CRM, or payment provider webhook) once one exists. Showing fabricated
// real-time activity as genuine is a deceptive practice under EU/Swedish
// consumer-protection rules if it doesn't reflect actual purchases.
export type SocialProofEvent = {
  name: string;
  city: string;
  plan: string;
  minutesAgo: number;
};

export const socialProofEvents: SocialProofEvent[] = [
  { name: "Johan", city: "Stockholm", plan: "12 Månader", minutesAgo: 3 },
  { name: "Sara", city: "Göteborg", plan: "6 Månader", minutesAgo: 7 },
  { name: "Mikael", city: "Malmö", plan: "3 Månader", minutesAgo: 12 },
  { name: "Emma", city: "Uppsala", plan: "6 Månader", minutesAgo: 5 },
  { name: "Daniel", city: "Västerås", plan: "12 Månader", minutesAgo: 9 },
  { name: "Lina", city: "Helsingborg", plan: "3 Månader", minutesAgo: 2 },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Vad är IPTV Sverige?",
    answer:
      "IPTV Sverige från Sweden IPTV är en premiumstreamingtjänst som levererar TV-kanaler, filmer och serier via internet – utan parabolantenn eller kabel-TV.",
  },
  {
    question: "Hur snabbt aktiveras mitt abonnemang?",
    answer:
      "Du beställer enkelt genom att kontakta oss via WhatsApp. Efter din beställning skickar vi dina aktiverings- och inloggningsuppgifter, och de flesta abonnemang är aktiva inom 5 minuter.",
  },
  {
    question: "Vilka enheter fungerar med tjänsten?",
    answer:
      "Sweden IPTV fungerar på Smart TV, Apple TV, Android TV, Fire TV/Firestick, MAG-boxar samt mobil och surfplatta.",
  },
  {
    question: "Hur fungerar den gratis testperioden?",
    answer:
      "Kontakta oss via WhatsApp så startar vi din testperiod. Du kan testa tjänsten kostnadsfritt under en begränsad period för att säkerställa att streamingen fungerar bra med din internetuppkoppling innan du köper ett abonnemang.",
  },
  {
    question: "Behöver jag binda mig till ett kontrakt?",
    answer:
      "Nej, det finns inga bindningstider eller dolda avgifter. Du väljer den period som passar dig bäst.",
  },
  {
    question: "Vad gör jag om jag behöver hjälp?",
    answer:
      "Vårt supportteam finns tillgängligt dygnet runt och hjälper dig gärna med installation eller andra frågor.",
  },
];

export const legalLinks = [
  { label: "Integritetspolicy", href: "/integritetspolicy" },
  { label: "Användarvillkor", href: "/anvandarvillkor" },
  { label: "Cookies", href: "/cookies" },
];

export const trustBadges = [
  { icon: "lock", label: "Säker beställning" },
  { icon: "no-contract", label: "Inga bindningstider" },
  { icon: "clock", label: "Aktivering < 5 min" },
  { icon: "headset", label: "Support dygnet runt" },
];

export const installGuideUpdated = "24 september 2026";

export type InstallApp = {
  name: string;
  devices: string;
  login: string;
};

export const installApps: InstallApp[] = [
  {
    name: "IPTV Smarters",
    devices: "Firestick, Android TV, Apple TV, mobil & surfplatta",
    login: "Xtream Codes eller M3U-länk",
  },
  {
    name: "TiviMate",
    devices: "Firestick, Fire TV, Android TV & TV-boxar",
    login: "Xtream Codes eller M3U-länk",
  },
  {
    name: "IBO Player",
    devices: "Samsung & LG Smart TV",
    login: "Xtream Codes, M3U-länk eller MAC-aktivering",
  },
  {
    name: "Smart IPTV",
    devices: "Samsung & LG Smart TV",
    login: "M3U-länk eller MAC-aktivering",
  },
];

export type InstallGuide = {
  id: string;
  title: string;
  intro: string;
  prep?: string[];
  methods: Array<{ app: string; steps: string[] }>;
  note?: string;
};

export const installGuides: InstallGuide[] = [
  {
    id: "smart-tv",
    title: "Smart TV (Samsung & LG)",
    intro:
      "På Samsung och LG Smart TV rekommenderar vi IBO Player eller Smart IPTV. Hur du loggar in beror på app och TV-modell: vissa uppsättningar aktiveras via TV:ns MAC-adress, medan andra låter dig ange Xtream Codes eller M3U-länk direkt.",
    methods: [
      {
        app: "IBO Player",
        steps: [
          "Öppna TV:ns appbutik (Apps på Samsung, LG Content Store på LG), sök efter IBO Player och installera appen.",
          "Starta appen. Kan du lägga till en spellista direkt väljer du Xtream Codes och anger serveradress, användarnamn och lösenord – eller klistrar in din M3U-länk.",
          "Visar appen i stället en MAC-adress och Device Key används MAC-aktivering. Skicka MAC-adressen till oss via WhatsApp så hjälper vi dig att aktivera, eller lägg till spellistan själv på IBO Players webbplats.",
          "Starta om appen på TV:n. Kanaler, filmer och serier laddas automatiskt.",
        ],
      },
      {
        app: "Smart IPTV",
        steps: [
          "Installera Smart IPTV från TV:ns appbutik och starta appen.",
          "Anteckna MAC-adressen som visas på skärmen.",
          "Lägg till din M3U-länk på siptv.eu/mylist tillsammans med MAC-adressen, eller skicka MAC-adressen till oss via WhatsApp så hjälper vi dig.",
          "Starta om appen på TV:n så laddas kanallistan.",
        ],
      },
    ],
    note: "IBO Player och Smart IPTV är tredjepartsappar som kan kräva en egen licens från apputvecklaren efter provperioden.",
  },
  {
    id: "firestick",
    title: "Amazon Firestick & Fire TV",
    intro:
      "På Firestick och Fire TV rekommenderar vi TiviMate eller IPTV Smarters. Båda fungerar med Xtream Codes och M3U-länk, och installeras med hjälp av appen Downloader.",
    prep: [
      "Sök efter Downloader i Amazon Appstore och installera appen.",
      "Gå till Inställningar → My Fire TV → Utvecklaralternativ → Installera okända appar och slå på Downloader. Syns inte Utvecklaralternativ? Gå till Inställningar → My Fire TV → Om och klicka sju gånger på enhetens namn.",
      "Öppna Downloader och ange nedladdningsadressen för appen du vill använda. Vi skickar gärna rätt länk via WhatsApp.",
    ],
    methods: [
      {
        app: "TiviMate",
        steps: [
          "Öppna TiviMate och välj Lägg till spellista (Add playlist).",
          "Välj Xtream Codes och ange serveradress, användarnamn och lösenord – eller välj M3U-spellista och klistra in din M3U-länk.",
          "Välj Nästa och vänta medan kanalerna och TV-guiden laddas.",
        ],
      },
      {
        app: "IPTV Smarters",
        steps: [
          "Öppna IPTV Smarters och välj Login with Xtream Codes API. Har du en M3U-länk väljer du i stället Load Your Playlist or File/URL.",
          "Ange ett valfritt namn och fyll i användarnamn, lösenord och serveradress från ditt e-postmeddelande.",
          "Välj Add User och vänta medan innehållet laddas.",
        ],
      },
    ],
  },
  {
    id: "android-tv",
    title: "Android TV & TV-boxar",
    intro:
      "På Android TV, Google TV och Android-baserade TV-boxar fungerar både TiviMate och IPTV Smarters med Xtream Codes eller M3U-länk.",
    methods: [
      {
        app: "TiviMate",
        steps: [
          "Installera TiviMate från Google Play.",
          "Välj Lägg till spellista och ange dina Xtream Codes-uppgifter eller din M3U-länk.",
          "Vänta medan kanalerna och TV-guiden laddas.",
        ],
      },
      {
        app: "IPTV Smarters",
        steps: [
          "Installera IPTV Smarters. Hittar du inte appen i Google Play installerar du den via Downloader, precis som i Firestick-guiden ovan.",
          "Välj Login with Xtream Codes API, eller Load Your Playlist or File/URL om du har en M3U-länk.",
          "Fyll i dina uppgifter och välj Add User.",
        ],
      },
    ],
  },
  {
    id: "apple-tv",
    title: "Apple TV",
    intro:
      "På Apple TV använder du IPTV Smarters, som heter Smarters Player Lite i App Store.",
    methods: [
      {
        app: "IPTV Smarters",
        steps: [
          "Öppna App Store på din Apple TV, sök efter Smarters Player Lite och installera appen.",
          "Starta appen och välj inloggning med Xtream Codes API, eller lägg till din M3U-länk.",
          "Fyll i användarnamn, lösenord och serveradress och bekräfta. Innehållet laddas automatiskt.",
        ],
      },
    ],
  },
  {
    id: "mag",
    title: "MAG Box",
    intro:
      "MAG-boxar aktiveras via boxens MAC-adress. Du behöver ingen extra app – tjänsten läggs in direkt i boxens inställningar.",
    methods: [
      {
        app: "MAC-aktivering",
        steps: [
          "Hitta boxens MAC-adress på etiketten under boxen eller i boxens statusmeny.",
          "Skicka MAC-adressen till oss via WhatsApp eller e-post. Vi aktiverar din box och skickar portaladressen till dig.",
          "Gå till Inställningar → Systeminställningar → Servrar → Portaler, ange ett valfritt namn och klistra in portaladressen.",
          "Spara och starta om boxen. Kanalerna laddas automatiskt.",
        ],
      },
    ],
  },
  {
    id: "mobil",
    title: "mobil & surfplatta",
    intro:
      "På iPhone, iPad och Android-mobiler använder du IPTV Smarters. Samma inloggningsuppgifter fungerar på alla dina enheter.",
    methods: [
      {
        app: "IPTV Smarters",
        steps: [
          "iPhone och iPad: installera Smarters Player Lite från App Store. Android: installera IPTV Smarters från Google Play.",
          "Välj inloggning med Xtream Codes API och fyll i användarnamn, lösenord och serveradress – eller lägg till din M3U-länk.",
          "Bekräfta och börja titta direkt i mobilen eller surfplattan.",
        ],
      },
    ],
  },
];

export const installTroubleshooting = [
  {
    problem: "Kanalerna buffrar eller hackar",
    solution:
      "Starta om routern och enheten. Använd nätverkskabel eller 5 GHz-wifi om det går, och kontrollera att du har minst 10 Mbit/s för HD och 25 Mbit/s för 4K.",
  },
  {
    problem: "Inloggningen misslyckas",
    solution:
      "Kontrollera att serveradressen är inskriven exakt som i e-postmeddelandet, inklusive http:// och eventuellt portnummer. Användarnamn och lösenord är skiftlägeskänsliga.",
  },
  {
    problem: "Inga kanaler eller tom TV-guide",
    solution:
      "Uppdatera spellistan i appen eller starta om appen. Använder du MAC-aktivering, kontrollera att rätt MAC-adress är registrerad hos oss.",
  },
  {
    problem: "Appen finns inte i min appbutik",
    solution:
      "Tredjepartsappar byts ibland ut i appbutikerna. Kontakta oss så tipsar vi om ett alternativ som fungerar på din enhet.",
  },
];
