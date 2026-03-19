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
    id: 'singelloop-breda-2026',
    name: 'Bredase Singelloop',
    date: '2026-10-04',
    location: 'Breda',
    distance: '5 km / 10 km / halve marathon',
    description:
      'De grootste hardloopwedstrijd van Breda. Het EMTE Running Team loopt met een voltallige ploeg door het centrum van de stad.',
    status: 'upcoming',
    registrationUrl: 'https://singelloop.nl',
    participants: 12,
  },
  {
    id: 'dam-tot-damloop-2026',
    name: 'Dam tot Damloop',
    date: '2026-09-20',
    location: 'Amsterdam — Zaandam',
    distance: '10 Engelse mijl',
    description:
      'Een van de populairste hardloopevenementen van Nederland. We rijden samen naar Amsterdam en lopen de iconische route.',
    status: 'upcoming',
    registrationUrl: 'https://damloop.nl',
    participants: 8,
  },
  {
    id: 'zevenheuvelenloop-2026',
    name: 'Zevenheuvelenloop',
    date: '2026-11-15',
    location: 'Nijmegen',
    distance: '15 km',
    description:
      'De mooiste 15 km van Nederland, dwars door het heuvellandschap rond Nijmegen. Een must-do voor elke hardloper.',
    status: 'upcoming',
    participants: 6,
  },
  {
    id: 'marathon-eindhoven-2026',
    name: 'Marathon Eindhoven',
    date: '2026-10-11',
    location: 'Eindhoven',
    distance: '10 km / halve marathon / marathon',
    description:
      'Het snelle en vlakke parkoers in Eindhoven is ideaal voor een persoonlijk record. Meerdere teamleden lopen de halve of hele marathon.',
    status: 'upcoming',
    registrationUrl: 'https://marathoneindhoven.nl',
    participants: 10,
  },
  {
    id: 'kapellenbosloop-2026',
    name: 'Kapellenbosloop',
    date: '2026-04-19',
    location: 'Etten-Leur',
    distance: '5 km / 10 km',
    description:
      'Gezellige lokale loop door de bossen van Etten-Leur. Een perfecte lentewedstrijd om het seizoen in te luiden.',
    status: 'upcoming',
    participants: 15,
  },
  {
    id: 'midwintermarathon-2026',
    name: 'Midwintermarathon',
    date: '2026-02-01',
    location: 'Apeldoorn',
    distance: '21.1 km / 42.195 km',
    description:
      'De traditionele wintermarathon op de Veluwe. Koud maar prachtig parcours door de bossen rondom Apeldoorn.',
    status: 'past',
    participants: 5,
  },
  {
    id: 'cpc-loop-2026',
    name: 'CPC Loop Den Haag',
    date: '2026-03-08',
    location: 'Den Haag',
    distance: '10 km / halve marathon',
    description:
      'Halve marathon door het centrum van Den Haag met finish op de Hofvijver. Een vlak en snel parcours.',
    status: 'past',
    participants: 7,
  },
  {
    id: 'bredaas-bierbrouwerij-trail-2025',
    name: 'Bredaas Bierbrouwerij Trail',
    date: '2025-11-22',
    location: 'Breda',
    distance: '12 km trail',
    description:
      'Unieke trailrun langs de brouwerijen van Breda. Inclusief proeverij na afloop. Een teamfavoriet!',
    status: 'past',
    participants: 14,
  },
  {
    id: 'warandeloop-2025',
    name: 'Warandeloop',
    date: '2025-12-13',
    location: 'Tilburg',
    distance: '5 km / 10 km',
    description:
      'Winterse crossloop in het Wandelbos bij Tilburg. Modderig, zwaar en ontzettend leuk.',
    status: 'past',
    participants: 9,
  },
];
