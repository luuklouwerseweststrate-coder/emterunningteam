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
      "Oprichter en bierveteraan. Zaterdagavond de kroeg platlopen, zondagochtend de dijk oplopen. Dat is de Luuk-manier.",
    fullBio:
      "Luuk is het brein achter het EMTE Running Team. Wat begon als een dronken weddenschap in de kroeg — 'wedden dat we de 65 van Walcheren kunnen doen?' — werd al snel serieus toen iedereen de volgende ochtend nog steeds ja zei. Sindsdien combineert hij zaterdagavonden in het cafe met zondagochtend-duurlopen alsof het de normaalste zaak van de wereld is. Als echte Westkapellenaar kent hij elke kroeg en elke dijk op Walcheren even goed.",
    favoriteDistance: "Halve marathon",
    bestAchievement:
      "De 65 van Walcheren uitlopen met het complete team — met een kater van de avond ervoor.",
    bestTeamMoment:
      "Het moment dat we met z'n zessen de finishboog door kwamen en meteen naar het dichtstbijzijnde terras liepen voor een welverdiend biertje.",
    personalQuote:
      "Een biertje na de finish is geen beloning, het is onderdeel van de training.",
    whyRunning:
      "Hardlopen is de perfecte manier om de bier-calorieen eraf te lopen. Schoenen aan, deur uit, dijken op. En als je dan na een uur weer thuiskomt, heb je weer ruimte voor een paar pilsjes.",
    funFacts: [
      "Heeft ooit een halve marathon gelopen op 4 uur slaap na een kroegentocht",
      "Beweert dat bier een isotonische sportdrank is",
      "Kent meer kroegen dan hardlooproutes op Walcheren",
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
      "Snelste loper en snelste drinker. Doet alles in een hoog tempo — van intervals tot biertjes tikken.",
    fullBio:
      "Matthijs is de snelste van het team, zowel op de baan als aan de bar. Zaterdagavond staat hij vooraan bij de shotjesronde, zondagochtend staat hij vooraan bij de duurloop. Hoe hij dat doet? Niemand weet het. Hij loopt het liefst voorop, kijkt regelmatig om, en roept 'kom op, nog even!' — of het nou de laatste kilometer is of het laatste rondje aan de bar.",
    favoriteDistance: "10 km",
    bestAchievement:
      "PR gelopen op de 10 km de ochtend na een bruiloft. Niemand snapt hoe.",
    bestTeamMoment:
      "De teamborrel die uitliep tot 3 uur 's nachts en de daaropvolgende zondagochtend-training waar iedereen kwam opdagen.",
    personalQuote: "Snel drinken, snel lopen — balans is alles.",
    whyRunning:
      "Het begon als manier om de kroeg-calorieen te compenseren, maar het werd een verslaving. Die runner's high na een goede intervaltraining is bijna net zo goed als dat eerste biertje op vrijdagavond. Bijna.",
    funFacts: [
      "Heeft een regel: voor elke shotje op zaterdag, een kilometer extra op zondag",
      "Zijn geheime wapen voor snelle tijden is 'carbo-loaden met pils'",
      "Heeft ooit een wedstrijd gewonnen met een kater die een eigen postcode verdiende",
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
    role: "Jagermeister Specialist",
    image: "/images/teamlid_bart.png",
    shortBio:
      "Houdt van lange afstanden en lange avonden. De rust zelve — totdat de Jagermeister op tafel komt.",
    fullBio:
      "Bart is de stille kracht van het team — tot de Jagermeister tevoorschijn komt. Dan verandert de rustige duurloper in de feestbeest van de avond. Maar hoe laat het ook wordt op zaterdag, zondag staat hij er weer. Om 6 uur de deur uit, de dijk op, de kater eraf lopen. Als timmerman in Westkapelle is hij fysiek al sterk, dus die extra kilometers na een stevig avondje zijn voor hem geen probleem.",
    favoriteDistance: "Marathon",
    bestAchievement:
      "De Kustmarathon Zeeland uitgelopen in 3:28:14 — na een vrijdagavond die beter vergeten kan worden.",
    bestTeamMoment:
      "Het teamweekend in Renesse. 25 km gelopen overdag, 25 biertjes gedronken 's avonds. De ultieme hybride atleet-ervaring.",
    personalQuote: "De beste kater-remedie is een lange duurloop bij zonsopgang.",
    whyRunning:
      "Hardlopen is mijn kater-therapie. Om 6 uur de deur uit, de dijk op, het zweet eruit lopen. Na 15 km voel je niks meer — geen kater, geen spijt, alleen de wind en de weg. En dan 's avonds weer opnieuw beginnen.",
    funFacts: [
      "Heeft een Jagermeister-flesje als geluksbrenger in zijn sporttas",
      "Beweert dat Jagermeister kruiden bevat en dus gezond is",
      "Kan de exacte afstand schatten tussen elke kroeg op Walcheren",
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
      "Organiseert de borrels, organiseert de wedstrijden. De sociale lijm die alles bij elkaar houdt — met bier.",
    fullBio:
      "Juriaan is de sociale lijm van het team. Hij regelt de borrels, de uitjes, de groepsapp en zorgt ervoor dat iedereen op komt dagen — zowel op zaterdag in de kroeg als op zondag bij de training. 'Ik loop niet om records te breken, ik loop zodat ik 's avonds zonder schuldgevoel kan borrelen,' zegt hij zelf. Hij is de man die de teamcultuur van hybride atleet heeft uitgevonden: hard trainen, hard feesten, en de volgende dag weer gaan.",
    favoriteDistance: "15 km",
    bestAchievement:
      "Een kerstloop door Westkapelle georganiseerd, compleet met gluhwein-stops onderweg als 'verzorgingspost'.",
    bestTeamMoment:
      "De gluhwein-kerstloop die hij had georganiseerd. Iedereen finishte lachend en licht aangeschoten. Perfecte hybride atleet-ervaring.",
    personalQuote:
      "Het leven is te kort om te kiezen tussen de kroeg en de hardloopschoenen.",
    whyRunning:
      "Hardlopen is mijn excuus om te borrelen zonder schuldgevoel. Elke kilometer die ik loop is een biertje dat ik kan drinken. Simpele wiskunde. En ik vind het gewoon ontzettend leuk om met dit team te lopen — het zijn niet alleen teamgenoten, het zijn drinkmaatjes die toevallig ook kunnen hardlopen.",
    funFacts: [
      "Beheert de teamgroepsapp waar 80% van de berichten over bier gaat",
      "Heeft ooit per ongeluk een halve marathon gelopen omdat hij de verkeerde afslag nam na een kroegentocht",
      "Zijn borrelhapjes-keuze is even serieus als zijn trainingsschema",
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
      "De jongste van het team. Rent overdag, rode wijn 's avonds. Bewijst dat je allebei kunt combineren.",
    fullBio:
      "Imara is pas 22 en de nieuwste aanwinst van het EMTE Running Team. Wat haar uniek maakt? Ze combineert haar liefde voor rode wijn met serieuze hardloopprestaties. Zaterdagavond een fles Merlot delen met vriendinnen, zondagochtend een PR lopen op de 5 km — voor Imara is dat geen tegenstelling, dat is lifestyle. Ze is de belichaming van de hybride atleet: jong, snel, en altijd in voor een goed glas na de training.",
    favoriteDistance: "5 km",
    bestAchievement:
      "Haar eerste 5 km onder de 20 minuten, gelopen na een wijnproeverij de avond ervoor. Rode wijn als brandstof.",
    bestTeamMoment:
      "De teamborrel na de 65 van Walcheren waar ze met een glas rode wijn in de hand de teamfoto maakte die viral ging in de groepsapp.",
    personalQuote: "Rode wijn heeft antioxidanten. Ik noem het sportvoeding.",
    whyRunning:
      "Eerlijk? Het begon omdat Luuk me uitdaagde. Maar nu kan ik niet meer stoppen. Het is de perfecte balans: doordeweeks trainen, weekend genieten van een goed glas wijn. En de mensen in dit team snappen dat je beide kunt doen zonder je te hoeven verantwoorden.",
    funFacts: [
      "Heeft altijd een kurkentrekker in haar sporttas 'voor na de finish'",
      "Is de enige in het team die TikTok-content maakt van de borrels EN de trainingen",
      "Beweert dat rode wijn beter is dan sportdrank voor herstel",
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
      "Trailrunner met een zwak voor prosecco. Overdag door de duinen, 's avonds bubbels op het terras.",
    fullBio:
      "Evi combineert trailrunning met prosecco alsof het olympische disciplines zijn. Zaterdagochtend rent ze door de duinen bij Westkapelle, zaterdagavond zit ze met een glas bubbels op het terras bij Bombaai. Ze brengt een avontuurlijke spirit mee die het team inspireert — zowel op de trail als bij de borrel. Als verpleegkundige weet ze precies hoeveel je kunt drinken en nog steeds kunt presteren. Wetenschap in dienst van de hybride atleet.",
    favoriteDistance: "Trail 25 km",
    bestAchievement:
      "De Duin Ultra Trail (30 km) uitgelopen als derde vrouw, gevierd met een fles prosecco op het strand.",
    bestTeamMoment:
      "De teamtraining door de duinen bij Domburg die eindigde bij een strandtent met prosecco voor iedereen. Zo hoort het.",
    personalQuote:
      "De mooiste routes eindigen bij een terras.",
    whyRunning:
      "Hardlopen in de natuur is mijn excuus om daarna zonder schuldgevoel prosecco te drinken op het terras. De duinen in, het zweet eruit, en dan belonen met bubbels. Met dit team erbij wordt elke trail een feestje — letterlijk, want er is altijd iemand die een fles meeneemt.",
    funFacts: [
      "Heeft altijd een mini-flesje prosecco in haar sporttas voor na de finish",
      "Verzamelt finisher-medailles en hangt ze aan haar wijnrek",
      "Kent elk terras op Walcheren beter dan elk duinpad",
    ],
    stats: {
      kmPerWeek: 45,
      races: 16,
      prs: 6,
    },
  },
];
