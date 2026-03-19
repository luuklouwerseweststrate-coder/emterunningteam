export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
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
    id: "luuk-louwerse",
    name: "Luuk Louwerse",
    role: "Bierveteraan",
    image: "/images/teamlid_luuk.png",
    shortBio:
      "Oprichter en drijvende kracht achter het EMTÉ Running Team. Loopt het liefst hard met de Westkapelse wind in de rug.",
    fullBio:
      "Luuk is het brein achter het EMTÉ Running Team. Wat begon als een grap bij de koffieautomaat — 'zullen we de 65 van Walcheren doen?' — werd al snel serieus toen iedereen ja zei. Sindsdien is hij de onofficiële aanvoerder, motivator en regelneef van het team. Als echte Westkapellenaar kent hij elke dijk, elk duinpad en elke windrichting op Walcheren. Hij combineert een nuchter Zeeuws karakter met een aanstekelijk enthousiasme voor de sport.",
    favoriteDistance: "Halve marathon",
    bestAchievement:
      "De 65 van Walcheren uitlopen met het complete team — alle zes over de finish, niemand achtergelaten.",
    bestTeamMoment:
      "Het moment dat we met z'n zessen de finishboog van de 65 van Walcheren door kwamen en de medailles kregen omgehangen. Dat voelde als een echt team.",
    personalQuote:
      "Als de wind tegenzit, draai je gewoon om. Dan heb je de wind mee.",
    whyRunning:
      "Hardlopen is voor mij de simpelste manier om mijn hoofd leeg te maken. Schoenen aan, deur uit, dijken op. In Westkapelle heb je de perfecte omgeving: zee, duinen, weilanden. En als je dan na een uur weer thuiskomt, is alles een stukje helderder.",
    funFacts: [
      "Heeft de teamshirts met de Westkapelse toren ontworpen",
      "Kan het Zeeuwse volkslied zingen tijdens het lopen",
      "Beweert dat tegenwind je sterker maakt (zegt dat bij élke training)",
    ],
    stats: {
      kmPerWeek: 50,
      races: 18,
      prs: 7,
    },
  },
  {
    id: "matthijs-geleijnse",
    name: "Matthijs Geleijnse",
    role: "Shotjes Kampioen",
    image: "/images/teamlid_matthijs.png",
    shortBio:
      "De snelste van het team — maar hij wacht altijd op de rest. Meestal.",
    fullBio:
      "Matthijs groeide op in Domburg en verhuisde voor zijn studie naar Middelburg, maar het hardlopen langs de Zeeuwse kust liet hij nooit los. Hij is de snelste loper van het team en trekt het tempo graag omhoog tijdens trainingen. Maar zijn echte kracht zit in zijn vermogen om anderen mee te trekken. Hij loopt het liefst voorop, kijkt regelmatig om, en roept 'kom op, nog even!' — ook als er nog 10 kilometer te gaan is.",
    favoriteDistance: "10 km",
    bestAchievement:
      "Snelste tijd bij de Omloop van Walcheren 10 km met een tijd van 37:12.",
    bestTeamMoment:
      "Samen met het team trainen op het strand bij Westkapelle bij zonsondergang. Dat voelde als een reclamespot, maar dan echt.",
    personalQuote: "Snel zijn is leuk, maar samen snel zijn is leuker.",
    whyRunning:
      "Het begon als manier om fit te blijven, maar het werd al snel een verslaving. Die runner's high na een goede intervaltraining — daar doe ik het voor. En eerlijk: ik vind het stiekem ook leuk om de snelste te zijn.",
    funFacts: [
      "Draagt altijd felgele sokken bij wedstrijden",
      "Heeft een geheime afspeellijst die niemand mag horen",
      "Eet meer bolussen dan verantwoord is voor een hardloper",
    ],
    stats: {
      kmPerWeek: 55,
      races: 22,
      prs: 11,
    },
  },
  {
    id: "bart-joziasse",
    name: "Bart Joziasse",
    role: "Jägermeister Specialist",
    image: "/images/teamlid_bart.png",
    shortBio:
      "Houdt van lange afstanden en langzaam tempo. De rust zelve — totdat de finish in zicht komt.",
    fullBio:
      "Bart is de stille kracht van het team. Terwijl anderen het tempo opjagen, houdt Bart geduldig vol op zijn eigen ritme. En dat ritme is verrassend effectief: hij heeft het beste uithoudingsvermogen van het hele team. Werkzaam als timmerman in Westkapelle, combineert hij zijn fysieke werk met zijn hardlooptraining. Hij traint het liefst vroeg in de ochtend, als de rest van Walcheren nog slaapt en de dijken helemaal van hem zijn.",
    favoriteDistance: "Marathon",
    bestAchievement:
      "De Kustmarathon Zeeland uitgelopen in 3:28:14 — zijn eerste marathon ooit.",
    bestTeamMoment:
      "Het teamweekend in Renesse, waar we een training van 25 km deden langs de hele kust en daarna met z'n allen mosselen gingen eten.",
    personalQuote: "Wie langzaam begint, eindigt sterk.",
    whyRunning:
      "Hardlopen is mijn ochtendmeditatie. Om 6 uur de deur uit, de dijk op, de zon zien opkomen boven de Westerschelde — dat is voor mij de mooiste start van de dag. Geen muziek, geen telefoon, gewoon ik en de weg.",
    funFacts: [
      "Loopt altijd zonder muziek, 'want je mist de meeuwen'",
      "Heeft na elke lange run exact dezelfde ontbijtroutine",
      "Kan de exacte afstand schatten van elke route op Walcheren",
    ],
    stats: {
      kmPerWeek: 60,
      races: 14,
      prs: 5,
    },
  },
  {
    id: "juriaan-boogaard",
    name: "Juriaan Boogaard",
    role: "Borrelaanvoerder",
    image: "/images/teamlid_juriaan.png",
    shortBio:
      "Doet alles een beetje en alles best goed. Van 5 km tot trail — Juriaan is overal voor in.",
    fullBio:
      "Juriaan is het meest veelzijdige lid van het team. Vraag hem om een 5 km te lopen? Check. Een trailrun door de duinen? Check. Een estafette op het strand? Dubbelcheck. Hij houdt van variatie en weigert zich te specialiseren. 'Ik loop niet om records te breken, ik loop om alles uit te proberen,' zegt hij zelf. Naast het lopen is hij ook de sociale lijm van het team — hij regelt de borrels, de uitjes en de groepsapp.",
    favoriteDistance: "15 km",
    bestAchievement:
      "Vier verschillende wedstrijden gelopen in één maand en bij allemaal met een glimlach gefinisht.",
    bestTeamMoment:
      "De kerstloop door Westkapelle die hij zelf had georganiseerd, compleet met glühwein bij de toren.",
    personalQuote:
      "Waarom kiezen als je alles kunt doen?",
    whyRunning:
      "Hardlopen is voor mij het ultieme avontuur in je eigen achtertuin. Elke keer als ik een andere route neem, zie ik weer iets nieuws. En ik vind het gewoon ontzettend leuk om met dit team te lopen — het zijn niet alleen teamgenoten, het zijn vrienden.",
    funFacts: [
      "Heeft de teamgroepsapp gemaakt en beheert die met ijzeren hand",
      "Plant elk jaar een verrassingsactiviteit voor het team",
      "Heeft ooit per ongeluk een halve marathon gelopen terwijl hij dacht dat het 10 km was",
    ],
    stats: {
      kmPerWeek: 35,
      races: 20,
      prs: 8,
    },
  },
  {
    id: "imara-murre",
    name: "Imara Murre",
    role: "Rode Wijn Koningin",
    image: "/images/teamlid_imara.png",
    shortBio:
      "De jongste van het team. Snel, enthousiast en altijd in voor een sprint op het einde.",
    fullBio:
      "Imara is pas 22 en de nieuwste aanwinst van het EMTÉ Running Team. Ze brengt jeugdig enthousiasme, ongebreidelde energie en een gezonde dosis competitiedrang mee. Hoewel ze nog relatief kort hardloopt, heeft ze al laten zien dat ze talent heeft — vooral op de kortere afstanden. Imara studeert in Vlissingen en traint vaak langs de boulevard en de duinen rond Westkapelle. Ze is altijd de eerste die 'ja' zegt tegen een nieuw evenement.",
    favoriteDistance: "5 km",
    bestAchievement:
      "Haar eerste 5 km onder de 20 minuten, gelopen tijdens de Boulevard Run in Vlissingen.",
    bestTeamMoment:
      "De teamfoto bij de finish van de 65 van Walcheren — dat was het moment dat ze echt voelde dat ze bij het team hoorde.",
    personalQuote: "Last maar niet least — usually niet last.",
    whyRunning:
      "Eerlijk? Het begon omdat Luuk me uitdaagde. Maar nu kan ik niet meer stoppen. Er is iets verslavends aan jezelf steeds sneller zien worden. En de mensen in dit team maken het extra leuk — het voelt als een sportfamilie.",
    funFacts: [
      "Heeft altijd twee energiegels in haar broekzak 'voor noodgevallen'",
      "Is de enige in het team die TikTok-content maakt van de trainingen",
      "Kan een sprint van 200 meter inzetten na 60 km hardlopen (beweert ze)",
    ],
    stats: {
      kmPerWeek: 40,
      races: 10,
      prs: 6,
    },
  },
  {
    id: "evi-passenier",
    name: "Evi Passenier",
    role: "Prosecco Princess",
    image: "/images/teamlid_evi.png",
    shortBio:
      "Geeft de voorkeur aan onverharde paden, duinen en modder. De avonturier van het team.",
    fullBio:
      "Evi ontdekte trailrunning tijdens een vakantie in de Ardennen en was meteen verkocht. Terug in Zeeland ging ze op zoek naar vergelijkbare uitdagingen en vond die in de duinen rond Westkapelle en het achterland van Walcheren. Ze brengt een avontuurlijke spirit mee die het team inspireert om ook eens van het asfalt af te stappen. Als verpleegkundige in het Admiraal De Ruyter Ziekenhuis weet ze bovendien alles over blessurepreventie en herstel.",
    favoriteDistance: "Trail 25 km",
    bestAchievement:
      "De Duin Ultra Trail (30 km door de Zeeuwse duinen) uitgelopen als derde vrouw.",
    bestTeamMoment:
      "De teamtraining door de duinen bij Domburg waar het begon te regenen en iedereen doorweekt maar lachend de finish haalde.",
    personalQuote:
      "De mooiste routes hebben geen asfalt.",
    whyRunning:
      "Hardlopen in de natuur is voor mij het perfecte tegenwicht voor mijn werk in het ziekenhuis. De duinen in, de wind voelen, je voeten in het zand — dat is mijn manier om op te laden. En met dit team erbij wordt elke trail een feestje.",
    funFacts: [
      "Heeft altijd een EHBO-kit in haar sporttas (beroepsdeformatie)",
      "Verzamelt finisher-medailles en hangt ze aan de Toren van Westkapelle (in gedachten)",
      "Kent elk duinpad op Walcheren uit haar hoofd",
    ],
    stats: {
      kmPerWeek: 45,
      races: 16,
      prs: 6,
    },
  },
];
