// Strava API client - server-side helper functies
// Tokens komen uit environment variables (geen database nodig)

import { StravaActivity, StravaDetailedActivity, StravaAthlete, StravaAthleteStats } from './types';

const STRAVA_API_BASE = 'https://www.strava.com/api/v3';

// Haal een geldige access token op via refresh token uit env vars
export async function getValidAccessToken(): Promise<string | null> {
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

// Generieke Strava API call
async function stravaFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T | null> {
  const accessToken = await getValidAccessToken();
  if (!accessToken) return null;

  const url = new URL(`${STRAVA_API_BASE}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
    next: { revalidate: 300 },
  });

  if (!res.ok) return null;
  return res.json();
}

// === API functies ===

export async function getAthlete(): Promise<StravaAthlete | null> {
  return stravaFetch<StravaAthlete>('/athlete');
}

export async function getAthleteStats(athleteId: number): Promise<StravaAthleteStats | null> {
  return stravaFetch<StravaAthleteStats>(`/athletes/${athleteId}/stats`);
}

export async function getActivities(page = 1, perPage = 50): Promise<StravaActivity[] | null> {
  return stravaFetch<StravaActivity[]>('/athlete/activities', {
    page: String(page),
    per_page: String(perPage),
  });
}

export async function getActivity(id: number): Promise<StravaDetailedActivity | null> {
  return stravaFetch<StravaDetailedActivity>(`/activities/${id}`);
}
