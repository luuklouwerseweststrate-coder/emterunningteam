// GET /api/strava/data
// Haalt alle Strava data op via env var tokens (geen database nodig)
import { NextResponse } from 'next/server';
import { StravaActivity, StravaAthleteStats } from '@/lib/strava/types';
import { processAllStats } from '@/lib/strava/utils';

const STRAVA_API = 'https://www.strava.com/api/v3';

// Haal een geldige access token op via de refresh token uit env vars
async function getAccessToken(): Promise<string | null> {
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN;
  const clientId = process.env.STRAVA_CLIENT_ID;
  const clientSecret = process.env.STRAVA_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) return null;

  const res = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.access_token;
}

async function stravaGet<T>(token: string, endpoint: string, params?: Record<string, string>): Promise<T | null> {
  const url = new URL(`${STRAVA_API}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) return null;
  return res.json();
}

export async function GET() {
  try {
    const token = await getAccessToken();
    if (!token) {
      return NextResponse.json({ connected: false }, { status: 200 });
    }

    const athleteId = process.env.STRAVA_ATHLETE_ID;

    // Haal activiteiten op van het afgelopen jaar + athlete stats parallel
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const epoch = Math.floor(oneYearAgo.getTime() / 1000);

    // Parallel: athlete stats + eerste 3 pagina's activiteiten + athlete profiel
    const [statsResult, page1, page2, page3, athlete] = await Promise.all([
      athleteId ? stravaGet<StravaAthleteStats>(token, `/athletes/${athleteId}/stats`) : null,
      stravaGet<StravaActivity[]>(token, '/athlete/activities', { per_page: '100', page: '1', after: String(epoch) }),
      stravaGet<StravaActivity[]>(token, '/athlete/activities', { per_page: '100', page: '2', after: String(epoch) }),
      stravaGet<StravaActivity[]>(token, '/athlete/activities', { per_page: '100', page: '3', after: String(epoch) }),
      stravaGet<{ id: number; firstname: string; lastname: string; profile: string; profile_medium: string }>(token, '/athlete'),
    ]);

    const activities = [
      ...(page1 || []),
      ...(page2 || []),
      ...(page3 || []),
    ];

    // Verwerk alle data
    const processedStats = processAllStats(activities);

    return NextResponse.json({
      connected: true,
      athlete,
      stats: processedStats,
      athleteStats: statsResult,
      lastUpdated: new Date().toISOString(),
    }, {
      headers: {
        // Cache voor 5 minuten op Vercel CDN
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Strava data fetch error:', error);
    return NextResponse.json(
      { connected: false, error: 'Failed to fetch Strava data' },
      { status: 500 }
    );
  }
}
