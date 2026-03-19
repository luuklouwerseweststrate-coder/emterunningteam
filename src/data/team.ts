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
    id: "luuk-westerstrate",
    name: "Luuk Westerstrate",
    role: "Aanvoerder",
    image: "/images/team/luuk-westerstrate.jpg",
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
    id: "fleur-de-visser",
    name: "Fleur de Visser",
    role: "Tempomaakster",
    image: "/images/team/fleur-de-visser.jpg",
    shortBio:
      "De snelste van het team — maar ze wacht altijd op de rest. Meestal.",
    fullBio:
      "Fleur groeide op in Domburg en verhuisde voor haar studie naar Middelburg, maar het hardlopen langs de Zeeuwse kust liet ze nooit los. Ze is de snelste loper van het team en trekt het tempo graag omhoog tijdens trainingen. Maar haar echte kracht zit in haar vermogen om anderen mee te trekken. Ze loopt het liefst voorop, kijkt regelmatig om, en roept 'kom op, nog even!' — ook als er nog 10 kilometer te gaan is.",
    favoriteDistance: "10 km",
    bestAchievement:
      "Eerste vrouw bij de Omloop van Walcheren 10 km met een tijd van 41:32.",
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
    id: "bas-vermeulen",
    name: "Bas Vermeulen",
    role: "Duurloper",
    image: "/images/team/bas-vermeulen.jpg",
    shortBio:
      "Houdt van lange afstanden en langzaam tempo. De rust zelve — totdat de finish in zicht komt.",
    fullBio:
      "Bas is de stille kracht van het team. Terwijl anderen het tempo opjagen, houdt Bas geduldig vol op zijn eigen ritme. En dat ritme is verrassend effectief: hij heeft de beste uithoudingsvermogen van het hele team. Werkzaam als timmerman in Westkapelle, combineert hij zijn fysieke werk met zijn hardlooptraining. Hij traint het liefst vroeg in de ochtend, als de rest van Walcheren nog slaapt en de dijken helemaal van hem zijn.",
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
    id: "sanne-de-jong",
    name: "Sanne de Jong",
    role: "Allrounder",
    image: "/images/team/sanne-de-jong.jpg",
    shortBio:
      "Doet alles een beetje en alles best goed. Van 5 km tot trail — Sanne is overal voor in.",
    fullBio:
      "Sanne is het meest veelzijdige lid van het team. Vraag haar om een 5 km te lopen? Check. Een trailrun door de duinen? Check. Een estafette op het strand? Dubbelcheck. Ze houdt van variatie en weigert zich te specialiseren. 'Ik loop niet om records te breken, ik loop om alles uit te proberen,' zegt ze zelf. Naast het lopen is ze ook de sociale lijm van het team — ze regelt de borrels, de uitjes en de groepsapp.",
    favoriteDistance: "15 km",
    bestAchievement:
      "Vier verschillende wedstrijden gelopen in één maand en bij allemaal met een glimlach gefinisht.",
    bestTeamMoment:
      "De kerstloop door Westkapelle die ze zelf had georganiseerd, compleet met glühwein bij de toren.",
    personalQuote:
      "Waarom kiezen als je alles kunt doen?",
    whyRunning:
      "Hardlopen is voor mij het ultieme avontuur in je eigen achtertuin. Elke keer als ik een andere route neem, zie ik weer iets nieuws. En ik vind het gewoon ontzettend leuk om met dit team te lopen — het zijn niet alleen teamgenoten, het zijn vrienden.",
    funFacts: [
      "Heeft de teamgroepsapp gemaakt en beheert die met ijzeren hand",
      "Plant elk jaar een verrassingsactiviteit voor het team",
      "Heeft ooit per ongeluk een halve marathon gelopen terwijl ze dacht dat het 10 km was",
    ],
    stats: {
      kmPerWeek: 35,
      races: 20,
      prs: 8,
    },
  },
  {
    id: "jesse-klaassen",
    name: "Jesse Klaassen",
    role: "Sprinter",
    image: "/images/team/jesse-klaassen.jpg",
    shortBio:
      "De jongste van het team. Snel, enthousiast en altijd in voor een sprint op het einde.",
    fullBio:
      "Jesse is pas 22 en de nieuwste aanwinst van het EMTÉ Running Team. Hij brengt jeugdig enthousiasme, ongebreidelde energie en een gezonde dosis competitiedrang mee. Hoewel hij nog relatief kort hardloopt, heeft hij al laten zien dat hij talent heeft — vooral op de kortere afstanden. Jesse studeert in Vlissingen en traint vaak langs de boulevard en de duinen rond Westkapelle. Hij is altijd de eerste die 'ja' zegt tegen een nieuw evenement.",
    favoriteDistance: "5 km",
    bestAchievement:
      "Zijn eerste 5 km onder de 19 minuten, gelopen tijdens de Boulevard Run in Vlissingen.",
    bestTeamMoment:
      "De teamfoto bij de finish van de 65 van Walcheren — dat was het moment dat hij echt voelde dat hij bij het team hoorde.",
    personalQuote: "Last maar niet least — usually niet last.",
    whyRunning:
      "Eerlijk? Het begon omdat Luuk me uitdaagde. Maar nu kan ik niet meer stoppen. Er is iets verslavends aan jezelf steeds sneller zien worden. En de mensen in dit team maken het extra leuk — het voelt als een sportfamilie.",
    funFacts: [
      "Heeft altijd twee energiegels in zijn broekzak 'voor noodgevallen'",
      "Is de enige in het team die TikTok-content maakt van de trainingen",
      "Kan een sprint van 200 meter inzetten na 60 km hardlopen (beweert hij)",
    ],
    stats: {
      kmPerWeek: 40,
      races: 10,
      prs: 6,
    },
  },
  {
    id: "eva-pieters",
    name: "Eva Pieters",
    role: "Trailrunner",
    image: "/images/team/eva-pieters.jpg",
    shortBio:
      "Geeft de voorkeur aan onverharde paden, duinen en modder. De avonturier van het team.",
    fullBio:
      "Eva ontdekte trailrunning tijdens een vakantie in de Ardennen en was meteen verkocht. Terug in Zeeland ging ze op zoek naar vergelijkbare uitdagingen en vond die in de duinen rond Westkapelle en het achterland van Walcheren. Ze brengt een avontuurlijke spirit mee die het team inspireert om ook eens van het asfalt af te stappen. Als verpleegkundige in het Admiraal De Ruyter Ziekenhuis weet ze bovendien alles over blessurepreventie en herstel.",
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
