export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  shortBio: string;
  fullBio: string;
  favoriteDistance: string;
  bestAchievement: string;
  bestTeamMoment: string;
  personalQuote: string;
  whyRunning: string;
  funFacts: string[];
  stats: {
    kmPerWeek: number;
    races: number;
    prs: number;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "jan-de-vries",
    name: "Jan de Vries",
    role: "Voorzitter & Hardloper",
    shortBio:
      "Oprichter van EMTE Running Team en gepassioneerd marathonloper met meer dan 15 jaar ervaring.",
    fullBio:
      "Jan begon met hardlopen toen hij 28 was, op aanraden van een collega. Wat begon als een manier om fit te blijven, groeide al snel uit tot een levenslange passie. Na het lopen van zijn eerste marathon in Rotterdam wist hij: dit is wat ik wil blijven doen. In 2018 richtte hij samen met een paar gelijkgestemde collega's het EMTE Running Team op. Sindsdien heeft hij het team zien groeien van een handvol enthousiastelingen tot een hechte groep van gedreven hardlopers. Als voorzitter combineert hij zijn organisatietalent met zijn liefde voor de sport.",
    favoriteDistance: "Marathon (42.195 km)",
    bestAchievement:
      "Finishen van de Amsterdam Marathon in 3:12:45, een persoonlijk record dat hij na jaren trainen wist te bereiken.",
    bestTeamMoment:
      "De eerste editie van onze eigen EMTE Team Relay, waar het hele team samen de finish haalde onder luid gejuich.",
    personalQuote:
      "Elke kilometer die je loopt, is een investering in jezelf.",
    whyRunning:
      "Hardlopen geeft me rust in mijn hoofd en energie in mijn lichaam. Het is het moment van de dag waarop alles wegvalt en ik volledig bij mezelf ben. Bovendien is er niets mooiers dan die ervaring te delen met een team van gelijkgestemden.",
    funFacts: [
      "Heeft altijd een banaan in zijn sporttas",
      "Kan de Rotterdam Marathon-route uit zijn hoofd tekenen",
      "Draagt gelukssokken bij elke wedstrijd",
    ],
    stats: {
      kmPerWeek: 65,
      races: 34,
      prs: 12,
    },
  },
  {
    id: "lisa-bakker",
    name: "Lisa Bakker",
    role: "Trainer & Hardloper",
    shortBio:
      "Gecertificeerd hardloopcoach die het team helpt met gestructureerde trainingsschema's en motivatie.",
    fullBio:
      "Lisa ontdekte hardlopen tijdens haar studietijd en raakte meteen verslaafd aan het gevoel na een goede training. Ze behaalde haar coaching-certificaat en begon andere lopers te begeleiden. Bij het EMTE Running Team is ze verantwoordelijk voor de wekelijkse trainingen en helpt ze ieder teamlid om het beste uit zichzelf te halen. Haar aanpak is persoonlijk: ze gelooft dat iedereen een eigen pad heeft naar succes.",
    favoriteDistance: "Halve marathon (21.1 km)",
    bestAchievement:
      "Top-10 finish bij de Halve Marathon van Eindhoven met een tijd van 1:28:33.",
    bestTeamMoment:
      "Toen drie teamleden op dezelfde dag hun eerste halve marathon uitliepen en we samen stonden te juichen bij de finish.",
    personalQuote: "Snel of langzaam, je bent iedereen op de bank voor.",
    whyRunning:
      "Hardlopen is voor mij meer dan sport — het is therapie, meditatie en avontuur ineen. Ik hou ervan om anderen te zien groeien en hun doelen te bereiken. Dat geeft mij net zoveel voldoening als mijn eigen prestaties.",
    funFacts: [
      "Maakt de beste energierepen van het team",
      "Heeft in 8 verschillende landen hardgelopen",
      "Begint elke training met dezelfde playlist",
    ],
    stats: {
      kmPerWeek: 55,
      races: 28,
      prs: 9,
    },
  },
  {
    id: "mark-jansen",
    name: "Mark Jansen",
    role: "Penningmeester & Hardloper",
    shortBio:
      "Trailrunner in hart en nieren die ook de financiën van het team beheert.",
    fullBio:
      "Mark kwam bij het EMTE Running Team via een toevallige ontmoeting tijdens een trailrun in de Ardennen. Als fervent trailrunner brengt hij een ander perspectief in het team. Naast het lopen op onverharde paden houdt hij ook de financiën van het team scherp in de gaten. Mark gelooft dat hardlopen in de natuur de ultieme manier is om te ontsnappen aan de drukte van alledag.",
    favoriteDistance: "Trail 30 km",
    bestAchievement:
      "Voltooien van de Trail des Fagnes, een uitdagende 50 km trail door de Belgische Ardennen.",
    bestTeamMoment:
      "Ons eerste teamweekend in de Ardennen, waar we samen een trail van 25 km liepen en 's avonds bij het kampvuur zaten.",
    personalQuote: "De berg op is optioneel, de berg af is verplicht.",
    whyRunning:
      "Op de trail voel ik me vrij. Geen stoplichten, geen verkeer, alleen ik en de natuur. Het is het eerlijkste dat er is: jij tegen het terrein. Die eenvoud spreekt me enorm aan.",
    funFacts: [
      "Verzamelt finisher-medailles uit elk land",
      "Heeft een geheime stash energiegels in zijn auto",
      "Kan de hoogtemeters van elke trail uit zijn hoofd opnoemen",
    ],
    stats: {
      kmPerWeek: 50,
      races: 22,
      prs: 7,
    },
  },
  {
    id: "sophie-mulder",
    name: "Sophie Mulder",
    role: "Wedstrijdcoördinator",
    shortBio:
      "Organisatorisch talent dat ervoor zorgt dat het team altijd goed vertegenwoordigd is bij wedstrijden.",
    fullBio:
      "Sophie begon pas drie jaar geleden met hardlopen, maar haar enthousiasme is aanstekelijk. Ze ontdekte al snel dat ze niet alleen van het lopen zelf hield, maar ook van alles eromheen: de voorbereiding, de tactiek, het samenwerken. Als wedstrijdcoördinator regelt ze inschrijvingen, vervoer en logistiek. Ze is het aanspreekpunt voor alles wat met wedstrijden te maken heeft.",
    favoriteDistance: "10 km",
    bestAchievement:
      "Haar eerste 10 km onder de 45 minuten, slechts anderhalf jaar na haar eerste hardloopstap.",
    bestTeamMoment:
      "De dag dat we als compleet team de Zevenheuvelenloop liepen en iedereen de finish haalde.",
    personalQuote:
      "Het gaat niet om hoe snel je gaat, maar dat je op weg bent.",
    whyRunning:
      "Hardlopen heeft me laten zien dat ik meer kan dan ik dacht. Elke keer als ik denk dat ik niet verder kan, blijkt er toch nog een tandje bij te kunnen. Die les neem ik mee in alles wat ik doe.",
    funFacts: [
      "Heeft een spreadsheet voor elke wedstrijd",
      "Draagt altijd een groen haarbandje tijdens het lopen",
      "Is de onofficiële team-fotograaf",
    ],
    stats: {
      kmPerWeek: 35,
      races: 15,
      prs: 6,
    },
  },
  {
    id: "tom-hendriks",
    name: "Tom Hendriks",
    role: "Social Media & Hardloper",
    shortBio:
      "Creatieve geest die de verhalen van het team vastlegt en deelt met de buitenwereld.",
    fullBio:
      "Tom combineert zijn passie voor hardlopen met zijn talent voor storytelling. Als social media-verantwoordelijke zorgt hij ervoor dat de belevenissen van het EMTE Running Team een breed publiek bereiken. Van trainingsverslagen tot wedstrijdrecaps — Tom weet het altijd boeiend te brengen. Zelf loopt hij het liefst op gevoel, zonder GPS-horloge, puur voor het plezier.",
    favoriteDistance: "15 km",
    bestAchievement:
      "Het opbouwen van een betrokken online community van meer dan 2.000 volgers voor het team.",
    bestTeamMoment:
      "Toen onze teamvideo over de Amsterdam Marathon viral ging en we honderden reacties kregen van geïnspireerde lopers.",
    personalQuote: "Run first, post later.",
    whyRunning:
      "Hardlopen is mijn creatieve uitlaatklep. Tijdens het lopen komen de beste ideeën. Het is ook een manier om verhalen te verzamelen — elke run is een nieuw verhaal waard.",
    funFacts: [
      "Maakt altijd een selfie op de finishlijn",
      "Heeft een podcast over hardlopen gestart (en weer gestopt)",
      "Kent de Instagram-handle van elk teamlid uit zijn hoofd",
    ],
    stats: {
      kmPerWeek: 40,
      races: 18,
      prs: 5,
    },
  },
  {
    id: "anna-de-groot",
    name: "Anna de Groot",
    role: "Hardloper & Mentor",
    shortBio:
      "Ervaren marathonloopster die nieuwe teamleden begeleidt en inspireert om hun grenzen te verleggen.",
    fullBio:
      "Anna is een van de meest ervaren lopers van het team. Met meer dan 20 marathons op haar naam is ze een bron van kennis en inspiratie. Ze neemt graag de rol van mentor op zich en helpt nieuwe teamleden om hun eerste doelen te bereiken. Haar motto: geduld en consistentie winnen altijd. Anna gelooft dat hardlopen voor iedereen toegankelijk moet zijn, ongeacht niveau of achtergrond.",
    favoriteDistance: "Marathon (42.195 km)",
    bestAchievement:
      "Deelname aan de Boston Marathon, een droom die uitkwam na jaren van kwalificatiepogingen.",
    bestTeamMoment:
      "Het moment dat een nieuw teamlid dat ze had begeleid, haar eerste marathon uitliep en in tranen van geluk over de finish kwam.",
    personalQuote:
      "De finish is niet het einde, het is het begin van je volgende avontuur.",
    whyRunning:
      "Hardlopen heeft me geleerd wie ik werkelijk ben. In die uren op de weg ontdek je je grenzen, je kracht en je kwetsbaarheid. Dat deel ik graag met anderen.",
    funFacts: [
      "Heeft in elk seizoen een andere favoriete route",
      "Eet altijd pasta de avond voor een wedstrijd",
      "Kan tijdens het lopen perfect een gesprek voeren",
    ],
    stats: {
      kmPerWeek: 70,
      races: 42,
      prs: 15,
    },
  },
  {
    id: "daan-visser",
    name: "Daan Visser",
    role: "Hardloper & Materiaalman",
    shortBio:
      "Technisch onderlegd teamlid dat alles weet over hardloopschoenen, kleding en gadgets.",
    fullBio:
      "Daan is de go-to persoon als het gaat om hardloopmateriaal. Van schoenen tot horloges, van compressiekousen tot drinkgordels — Daan heeft het getest en beoordeeld. Naast zijn materiaalkeunis is hij een solide hardloper die het liefst op tempo traint. Hij gelooft dat de juiste uitrusting het verschil kan maken tussen een goede en een geweldige run.",
    favoriteDistance: "Halve marathon (21.1 km)",
    bestAchievement:
      "Persoonlijk record op de halve marathon: 1:24:11, gelopen in perfecte omstandigheden tijdens de Halve van Den Haag.",
    bestTeamMoment:
      "Het organiseren van onze eerste materiaaltestdag, waar het hele team nieuwe schoenen en kleding kon uitproberen.",
    personalQuote: "Het juiste materiaal maakt de loper.",
    whyRunning:
      "Hardlopen is pure eenvoud. Je hebt niet meer nodig dan een paar goede schoenen en de deur uit. Maar als techneut geniet ik er ook van om het maximale uit elke training te halen met de juiste tools.",
    funFacts: [
      "Bezit meer dan 15 paar hardloopschoenen",
      "Test elke GPS-watch die op de markt komt",
      "Houdt een spreadsheet bij met slijtage van zijn schoenen",
    ],
    stats: {
      kmPerWeek: 55,
      races: 25,
      prs: 10,
    },
  },
  {
    id: "emma-klein",
    name: "Emma Klein",
    role: "Hardloper & Voedingscoach",
    shortBio:
      "Diëtiste van beroep die het team helpt met voedingsadvies voor optimale prestaties.",
    fullBio:
      "Emma brengt als diëtiste een unieke expertise mee naar het team. Ze helpt teamleden met voedingsplannen, hydratatie-strategieën en herstelvoeding. Zelf is ze een enthousiaste hardloopster die het liefst in de vroege ochtend traint. Emma gelooft dat voeding en sport hand in hand gaan en dat de juiste brandstof het verschil maakt.",
    favoriteDistance: "10 km",
    bestAchievement:
      "Het ontwikkelen van een voedingsprogramma waarmee drie teamleden hun PR verbeterden in één seizoen.",
    bestTeamMoment:
      "Ons gezamenlijke kookavondje waar iedereen een gezond hardlooprecept deelde.",
    personalQuote: "Je bent wat je eet — zeker als hardloper.",
    whyRunning:
      "Hardlopen is voor mij de perfecte combinatie van fysieke uitdaging en mentale rust. Het is ook een prachtig laboratorium om te zien hoe voeding direct invloed heeft op prestaties.",
    funFacts: [
      "Maakt smoothies voor het hele team na trainingen",
      "Heeft een eigen kookboek voor sporters geschreven",
      "Staat altijd als eerste bij de ontbijtbuffet",
    ],
    stats: {
      kmPerWeek: 40,
      races: 20,
      prs: 8,
    },
  },
];
