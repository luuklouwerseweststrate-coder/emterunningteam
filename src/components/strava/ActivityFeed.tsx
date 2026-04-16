'use client';

import { useState } from 'react';
import { ProcessedActivity } from '@/lib/strava/types';
import ActivityCard from './ActivityCard';

interface ActivityFeedProps {
  activities: ProcessedActivity[];
}

type FilterType = 'all' | 'Run' | 'TrailRun' | 'Ride' | 'other';

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [showCount, setShowCount] = useState(6);

  const filtered = activities.filter((a) => {
    if (filter === 'all') return true;
    if (filter === 'other') return !['Run', 'TrailRun', 'Ride'].includes(a.type);
    return a.type === filter;
  });

  const visible = filtered.slice(0, showCount);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'Alles' },
    { key: 'Run', label: 'Hardlopen' },
    { key: 'TrailRun', label: 'Trail' },
    { key: 'Ride', label: 'Fietsen' },
    { key: 'other', label: 'Overig' },
  ];

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key); setShowCount(6); }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === f.key
                ? 'bg-emte-green text-white'
                : 'bg-emte-gray-100 text-emte-gray-600 hover:bg-emte-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Activity grid */}
      {visible.length > 0 ? (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>

          {/* Meer laden knop */}
          {showCount < filtered.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowCount((c) => c + 6)}
                className="rounded-xl bg-emte-gray-100 px-6 py-3 text-sm font-medium text-emte-gray-700 transition-colors hover:bg-emte-gray-200"
              >
                Meer laden ({filtered.length - showCount} over)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl bg-emte-gray-50 py-12 text-center">
          <p className="text-emte-gray-500">Geen activiteiten gevonden</p>
        </div>
      )}
    </div>
  );
}
