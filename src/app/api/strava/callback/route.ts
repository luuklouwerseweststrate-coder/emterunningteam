// GET /api/strava/callback
// Strava stuurt de gebruiker hierheen na OAuth
// Toont de tokens zodat je ze als env var kunt opslaan
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  const error = request.nextUrl.searchParams.get('error');

  if (error || !code) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/strava?error=auth_denied`
    );
  }

  // Wissel de code om voor tokens bij Strava
  const tokenRes = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/strava?error=token_exchange`
    );
  }

  const data = await tokenRes.json();

  // Als STRAVA_REFRESH_TOKEN al ingesteld is, redirect direct naar dashboard
  if (process.env.STRAVA_REFRESH_TOKEN) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/strava?connected=true`
    );
  }

  // Eerste keer: toon de tokens zodat Luuk ze kan opslaan als env vars
  const html = `
    <!DOCTYPE html>
    <html lang="nl">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Strava Verbonden! | EMTE Running Team</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, -apple-system, sans-serif; background: #f8f9fa; color: #212529; padding: 2rem; }
        .container { max-width: 600px; margin: 0 auto; }
        .card { background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        h1 { color: #1a5632; margin-bottom: 0.5rem; }
        .success { color: #237a47; font-size: 0.9rem; margin-bottom: 1.5rem; }
        .athlete { display: flex; align-items: center; gap: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 12px; margin-bottom: 1.5rem; }
        .athlete img { width: 48px; height: 48px; border-radius: 50%; }
        .athlete strong { display: block; }
        .athlete span { font-size: 0.85rem; color: #6c757d; }
        label { display: block; font-weight: 600; font-size: 0.85rem; color: #495057; margin-bottom: 0.5rem; margin-top: 1rem; }
        .token-box { width: 100%; padding: 0.75rem; font-family: monospace; font-size: 0.8rem; border: 2px solid #e9ecef; border-radius: 8px; background: #f8f9fa; word-break: break-all; }
        .steps { margin-top: 1.5rem; padding: 1.5rem; background: #1a5632; color: white; border-radius: 12px; }
        .steps h3 { color: #f5c518; margin-bottom: 1rem; }
        .steps ol { padding-left: 1.5rem; }
        .steps li { margin-bottom: 0.75rem; line-height: 1.5; }
        .steps code { background: rgba(255,255,255,0.15); padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.85rem; }
        .btn { display: inline-block; margin-top: 1.5rem; padding: 0.75rem 2rem; background: #1a5632; color: white; text-decoration: none; border-radius: 10px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <h1>Strava verbonden!</h1>
          <p class="success">Je Strava account is succesvol gekoppeld.</p>

          <div class="athlete">
            <img src="${data.athlete.profile_medium}" alt="" />
            <div>
              <strong>${data.athlete.firstname} ${data.athlete.lastname}</strong>
              <span>Athlete ID: ${data.athlete.id}</span>
            </div>
          </div>

          <p style="font-size: 0.9rem; color: #495057;">
            Kopieer de onderstaande waarden en sla ze op als <strong>Environment Variables</strong> in je Vercel project.
          </p>

          <label>STRAVA_REFRESH_TOKEN</label>
          <input class="token-box" value="${data.refresh_token}" readonly onclick="this.select()" />

          <label>STRAVA_ATHLETE_ID</label>
          <input class="token-box" value="${data.athlete.id}" readonly onclick="this.select()" />

          <div class="steps">
            <h3>Wat nu?</h3>
            <ol>
              <li>Ga naar je <strong>Vercel project</strong> &rarr; Settings &rarr; Environment Variables</li>
              <li>Voeg toe: <code>STRAVA_REFRESH_TOKEN</code> met de waarde hierboven</li>
              <li>Voeg toe: <code>STRAVA_ATHLETE_ID</code> met de waarde hierboven</li>
              <li>Klik <strong>Redeploy</strong> (Deployments &rarr; drie puntjes &rarr; Redeploy)</li>
              <li>Na redeploy werkt het dashboard automatisch!</li>
            </ol>
          </div>

          <a class="btn" href="/strava">Naar het dashboard &rarr;</a>
        </div>
      </div>
    </body>
    </html>
  `;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
