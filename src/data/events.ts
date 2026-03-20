export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  distance: string;
  description: string;
  status: 'upcoming' | 'past';
  registrationUrl?: string;
  image?: string;
  participants?: number;
}

export const events: Event[] = [
  {
    id: 'halve-marathon-gent-2026',
    name: 'Halve Marathon Gent',
    date: '2026-09-20',
    location: 'Gent, België',
    distance: 'Halve marathon (21.1 km)',
    description:
      'De Halve Marathon van Gent door het historische centrum. Prachtig parcours langs de Leie en de middeleeuwse binnenstad. Het EMTE Running Team trekt de grens over!',
    status: 'upcoming',
    participants: 6,
  },
  {
    id: 'kustmarathon-2026',
    name: 'Kustmarathon',
    date: '2026-10-17',
    location: 'Zeeland',
    distance: '6 km / 15 km / halve marathon / marathon',
    description:
      'Dé marathon van Zeeland! Van strand naar dijk, van duinen naar polders. Als Zeeuws team is dit onze thuiswedstrijd, hier moeten we staan.',
    status: 'upcoming',
    participants: 12,
  },
  {
    id: '65-van-walcheren-2026',
    name: '65 van Walcheren',
    date: '2026-06-13',
    location: 'Walcheren, Zeeland',
    distance: '65 km / 40 km / 25 km / 15 km',
    description:
      'Het ultieme evenement voor het EMTE Running Team. 65 kilometer rond Walcheren, onze eigen achtertuin. Hier is het allemaal begonnen.',
    status: 'upcoming',
    participants: 15,
  },
  {
    id: 'sip-and-run-2025',
    name: 'Sip & Run Walcheren',
    date: '2025-09-06',
    location: 'Westkapelle, Zeeland',
    distance: '10 km',
    description:
      'Ons eigen evenement: 10 km hardlopen met onderweg drie stops voor een drankje. De ultieme hybride atleet-ervaring. Georganiseerd door het EMTE Running Team zelf.',
    status: 'past',
    participants: 24,
  },
  {
    id: '65-van-walcheren-2025',
    name: '65 van Walcheren',
    date: '2025-06-14',
    location: 'Walcheren, Zeeland',
    distance: '65 km / 40 km / 25 km / 15 km',
    description:
      'Het evenement waar het allemaal begon. Met het voltallige team gelopen, inclusief de nodige katers van de avond ervoor. Een onvergetelijke dag op ons eigen eiland.',
    status: 'past',
    participants: 12,
  },
];
