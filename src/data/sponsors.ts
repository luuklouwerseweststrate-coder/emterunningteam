export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: 'hoofdpartner' | 'partner' | 'supporter';
  description: string;
}

export interface SponsorPackage {
  name: string;
  tier: 'hoofdpartner' | 'partner' | 'supporter';
  price: string;
  features: string[];
  highlighted: boolean;
}

export const sponsors: Sponsor[] = [
  {
    id: 'emte-supermarkten',
    name: 'EMTE Supermarkten',
    logo: '/images/sponsors/emte.png',
    website: 'https://www.emte.nl',
    tier: 'hoofdpartner',
    description:
      'Als naamgevende hoofdpartner ondersteunt EMTE Supermarkten het team met alles wat nodig is. Van sportvoeding tot wedstrijdkleding — EMTE staat altijd achter ons.',
  },
  {
    id: 'van-den-berg-fysiotherapie',
    name: 'Van den Berg Fysiotherapie',
    logo: '/images/sponsors/vandenberg.png',
    website: 'https://www.vandenbergfysio.nl',
    tier: 'hoofdpartner',
    description:
      'Blessurevrij hardlopen begint bij goede begeleiding. Van den Berg Fysiotherapie zorgt ervoor dat onze lopers in topvorm blijven.',
  },
  {
    id: 'breda-sport',
    name: 'Breda Sport',
    logo: '/images/sponsors/bredasport.png',
    website: 'https://www.bredasport.nl',
    tier: 'partner',
    description:
      'De beste hardloopschoenen en uitrusting vind je bij Breda Sport. Onze vaste leverancier voor alles wat je nodig hebt.',
  },
  {
    id: 'de-running-coach',
    name: 'De Running Coach',
    logo: '/images/sponsors/runningcoach.png',
    website: 'https://www.derunningcoach.nl',
    tier: 'partner',
    description:
      'Professionele trainingsschema\'s en persoonlijke coaching. De Running Coach helpt onze leden hun doelen te bereiken.',
  },
  {
    id: 'bakkerij-jansen',
    name: 'Bakkerij Jansen',
    logo: '/images/sponsors/jansen.png',
    website: 'https://www.bakkerijjansen.nl',
    tier: 'partner',
    description:
      'Na elke training en wedstrijd staat Bakkerij Jansen klaar met vers gebak en brood. De energie die we nodig hebben!',
  },
  {
    id: 'drukkerij-de-haan',
    name: 'Drukkerij De Haan',
    logo: '/images/sponsors/dehaan.png',
    website: 'https://www.drukkerijdehaan.nl',
    tier: 'supporter',
    description: 'Al onze flyers, banners en promotiematerialen komen van Drukkerij De Haan.',
  },
  {
    id: 'cafe-de-beyerd',
    name: 'Café De Beyerd',
    logo: '/images/sponsors/debeyerd.png',
    website: 'https://www.debeyerd.nl',
    tier: 'supporter',
    description: 'Ons vaste stamcafé voor de derde helft. Altijd een warm welkom na de training.',
  },
  {
    id: 'autobedrijf-willems',
    name: 'Autobedrijf Willems',
    logo: '/images/sponsors/willems.png',
    website: 'https://www.autobedrijfwillems.nl',
    tier: 'supporter',
    description: 'Betrouwbaar vervoer naar wedstrijden in heel Nederland, mede mogelijk gemaakt door Autobedrijf Willems.',
  },
  {
    id: 'accountancy-breda',
    name: 'Vis Accountancy',
    logo: '/images/sponsors/vis.png',
    website: 'https://www.visaccountancy.nl',
    tier: 'supporter',
    description: 'Onze financiën op orde dankzij de expertise van Vis Accountancy.',
  },
];

export const sponsorPackages: SponsorPackage[] = [
  {
    name: 'Supporter',
    tier: 'supporter',
    price: '€ 250 / jaar',
    features: [
      'Logo op de website',
      'Vermelding op social media',
      'Uitnodiging voor teamevents',
      'Bedankpost op social media',
    ],
    highlighted: false,
  },
  {
    name: 'Partner',
    tier: 'partner',
    price: '€ 750 / jaar',
    features: [
      'Alles van Supporter',
      'Logo op wedstrijdkleding',
      'Banner bij evenementen',
      'Feature-artikel op de website',
      'Gezamenlijke social media campagne',
      'Netwerkevent met andere partners',
    ],
    highlighted: true,
  },
  {
    name: 'Hoofdpartner',
    tier: 'hoofdpartner',
    price: '€ 1.500 / jaar',
    features: [
      'Alles van Partner',
      'Prominente logoplaatsing op kleding',
      'Exclusieve naamsvermelding bij events',
      'Gezamenlijk persbericht',
      'VIP-toegang tot alle evenementen',
      'Kwartaalrapportage zichtbaarheid',
      'Input in teamactiviteiten',
    ],
    highlighted: false,
  },
];
