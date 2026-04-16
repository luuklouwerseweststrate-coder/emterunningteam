// GET /api/strava/authorize
// Redirect de gebruiker naar Strava OAuth pagina
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/api/strava/callback`;

  // Alle scopes die we nodig hebben voor maximale data
  const scope = 'read,read_all,activity:read,activity:read_all';

  const stravaAuthUrl = new URL('https://www.strava.com/oauth/authorize');
  stravaAuthUrl.searchParams.set('client_id', clientId || '');
  stravaAuthUrl.searchParams.set('redirect_uri', redirectUri);
  stravaAuthUrl.searchParams.set('response_type', 'code');
  stravaAuthUrl.searchParams.set('scope', scope);
  stravaAuthUrl.searchParams.set('approval_prompt', 'auto');

  return NextResponse.redirect(stravaAuthUrl.toString());
}
