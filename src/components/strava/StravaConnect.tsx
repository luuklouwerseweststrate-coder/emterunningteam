'use client';

// "Verbind met Strava" knop + verbonden status
interface StravaConnectProps {
  connected: boolean;
  athleteName?: string;
  athletePhoto?: string;
}

export default function StravaConnect({ connected, athleteName, athletePhoto }: StravaConnectProps) {
  if (connected) {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-2">
        {athletePhoto && (
          <img src={athletePhoto} alt="" className="h-8 w-8 rounded-full" />
        )}
        <div className="text-sm">
          <p className="font-medium text-white">{athleteName}</p>
          <p className="text-white/60">Verbonden met Strava</p>
        </div>
        <div className="ml-2 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      </div>
    );
  }

  return (
    <a
      href="/api/strava/authorize"
      className="group inline-flex items-center gap-3 rounded-xl bg-[#FC4C02] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#e04402] hover:shadow-xl hover:-translate-y-0.5"
    >
      {/* Strava logo */}
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
      </svg>
      <span>Verbind met Strava</span>
    </a>
  );
}
