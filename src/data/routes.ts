export interface PubStop {
  name: string;
  lat: number;
  lng: number;
  description: string;
}

export interface RunRoute {
  id: string;
  name: string;
  distance: string;
  description: string;
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Pittig';
  color: string;
  pubStop: PubStop;
  coordinates: [number, number][];
}

export const routes: RunRoute[] = [
  {
    id: 'dijkenrondje-westkapelle',
    name: 'Dijkenrondje Westkapelle',
    distance: '10 km',
    description:
      'Het klassieke rondje over de dijken bij Westkapelle. Je start bij de vuurtoren, loopt de zeedijk langs richting Domburg en keert terug via de binnendijk. Wind in je gezicht gegarandeerd, maar de beloning bij Bombaai is het meer dan waard.',
    difficulty: 'Makkelijk',
    color: '#2D6A4F',
    pubStop: {
      name: 'Bombaai Strandbar',
      lat: 51.5275,
      lng: 3.4390,
      description: 'De perfecte derde helft. Biertje op het strand na de run.',
    },
    coordinates: [
      [51.5282, 3.4370],
      [51.5310, 3.4300],
      [51.5355, 3.4220],
      [51.5400, 3.4150],
      [51.5440, 3.4100],
      [51.5470, 3.4050],
      [51.5500, 3.4020],
      [51.5480, 3.4100],
      [51.5450, 3.4180],
      [51.5410, 3.4250],
      [51.5370, 3.4310],
      [51.5330, 3.4350],
      [51.5300, 3.4370],
      [51.5282, 3.4370],
    ],
  },
  {
    id: 'duinen-domburg-trail',
    name: 'Duinen Domburg Trail',
    distance: '15 km',
    description:
      'Trailrun door de duinen van Westkapelle naar Domburg. Zandpaden, bospaden en uitzichten over de Noordzee. Het favoriete rondje van Evi. Pittig door het losse zand, maar de duinen zijn het mooiste decor dat Walcheren te bieden heeft.',
    difficulty: 'Gemiddeld',
    color: '#E9C46A',
    pubStop: {
      name: 'Strandpaviljoen Domburg',
      lat: 51.5640,
      lng: 3.4960,
      description: 'Speciaalbiertje met zeezicht na een stevige trail.',
    },
    coordinates: [
      [51.5282, 3.4370],
      [51.5320, 3.4330],
      [51.5370, 3.4380],
      [51.5420, 3.4450],
      [51.5470, 3.4530],
      [51.5510, 3.4610],
      [51.5540, 3.4700],
      [51.5570, 3.4790],
      [51.5590, 3.4850],
      [51.5610, 3.4900],
      [51.5640, 3.4960],
    ],
  },
  {
    id: 'vlissingen-boulevard',
    name: 'Vlissingen Boulevard Run',
    distance: '12 km',
    description:
      'Van Westkapelle naar Vlissingen via de kustlijn. Langs het strand van Zoutelande, over de boulevard van Vlissingen met uitzicht op de Westerschelde. Plat en snel, ideaal voor een PR-poging de ochtend na een stevig avondje.',
    difficulty: 'Makkelijk',
    color: '#264653',
    pubStop: {
      name: 'Cafe de Tijd',
      lat: 51.4425,
      lng: 3.5730,
      description: 'Terrasje aan de boulevard met uitzicht op de schepen.',
    },
    coordinates: [
      [51.5282, 3.4370],
      [51.5200, 3.4400],
      [51.5100, 3.4500],
      [51.4980, 3.4620],
      [51.4880, 3.4750],
      [51.4770, 3.4900],
      [51.4670, 3.5050],
      [51.4570, 3.5250],
      [51.4500, 3.5450],
      [51.4450, 3.5600],
      [51.4425, 3.5730],
    ],
  },
  {
    id: 'grote-walcheren-rondje',
    name: 'Het Grote Walcheren Rondje',
    distance: '25 km',
    description:
      'De ultieme Walcheren-route. Van Westkapelle via Domburg en Veere terug naar huis. Dit is de route die we lopen als voorbereiding op de 65 van Walcheren. Alleen voor de echte hybride atleten met voldoende koolhydraten van de avond ervoor.',
    difficulty: 'Pittig',
    color: '#E76F51',
    pubStop: {
      name: 'Cafe De Werf Veere',
      lat: 51.5540,
      lng: 3.6590,
      description: 'Historisch cafe in Veere. Verdien je biertje met 25 km.',
    },
    coordinates: [
      [51.5282, 3.4370],
      [51.5350, 3.4300],
      [51.5450, 3.4200],
      [51.5550, 3.4500],
      [51.5630, 3.4900],
      [51.5680, 3.5200],
      [51.5700, 3.5500],
      [51.5690, 3.5800],
      [51.5660, 3.6100],
      [51.5600, 3.6350],
      [51.5540, 3.6590],
    ],
  },
];
