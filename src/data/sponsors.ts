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
    tier: 'partner',
    description:
      'Mini Camping Boogaard uit Westkapelle steunt het team vanaf het begin. Een gezellige camping midden op Walcheren.',
  },
  {
    id: 'hoveniersbedrijf-minderhoud',
    name: 'Hoveniersbedrijf Minderhoud',
    logo: '/images/hoveniers-bedrijf-minderhoud-logo.png',
    website: '#',
    tier: 'partner',
    description:
      'Hoveniersbedrijf Minderhoud zorgt voor de mooiste tuinen in Zeeland, en voor de steun die ons team nodig heeft om te blijven groeien.',
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
    price: '€ 25 / jaar',
    features: [
      'Logo op de website',
      'Vermelding op social media',
      'Uitnodiging voor teamevents',
      'Bedankpost op social media',
    ],
    highlighted: false,
  },
  {
    name: 'Sponsor',
    tier: 'partner',
    price: '€ 50 / jaar',
    features: [
      'Alles van Supporter',
      'Logo op wedstrijdkleding (shirt!)',
      'Banner bij evenementen',
      'Feature-artikel op de website',
      'Gezamenlijke social media campagne',
    ],
    highlighted: true,
  },
  {
    name: 'Hoofdsponsor',
    tier: 'hoofdpartner',
    price: '€ 100 / jaar',
    features: [
      'Alles van Sponsor',
      'Prominente logoplaatsing op kleding',
      'Exclusieve naamsvermelding bij events',
      'Gezamenlijk persbericht',
      'VIP-toegang tot alle evenementen',
      'Input in teamactiviteiten',
    ],
    highlighted: false,
  },
];
