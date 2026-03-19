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
    id: 'mini-camping-boogaard',
    name: 'Mini Camping Boogaard',
    logo: '/images/Mini-camping-boogaard-logo.png',
    website: '#',
    tier: 'hoofdpartner',
    description:
      'Mini Camping Boogaard uit Westkapelle is onze trotse hoofdsponsor. Een gezellige camping midden op Walcheren die het team vanaf het begin steunt.',
  },
  {
    id: 'hoveniersbedrijf-minderhoud',
    name: 'Hoveniersbedrijf Minderhoud',
    logo: '/images/hoveniers-bedrijf-minderhoud-logo.png',
    website: '#',
    tier: 'partner',
    description:
      'Hoveniersbedrijf Minderhoud zorgt voor de mooiste tuinen in Zeeland — en voor de steun die ons team nodig heeft om te blijven groeien.',
  },
  {
    id: 'bombaai-strandbar',
    name: 'Bombaai Strandbar',
    logo: '/images/bombaai-logo.jpg',
    website: '#',
    tier: 'partner',
    description:
      'Bombaai Strandbar is dé plek voor onze derde helft. Na een training langs de kust is er geen betere bestemming dan Bombaai.',
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
