// Forceer dynamische rendering voor de Strava pagina
// Voorkomt dat Next.js deze pagina probeert te pre-renderen (SSR)
export const dynamic = 'force-dynamic';

export default function StravaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
