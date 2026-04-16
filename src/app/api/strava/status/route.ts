// GET /api/strava/status
// Simpele check of Strava verbonden is (env var aanwezig)
import { NextResponse } from 'next/server';

export async function GET() {
  const hasToken = !!process.env.STRAVA_REFRESH_TOKEN;

  return NextResponse.json({ connected: hasToken });
}
