'use client';

import { motion } from 'framer-motion';
import { ProcessedActivity } from '@/lib/strava/types';
import { formatRelativeDate, getActivityTypeName, getActivityTypeIcon } from '@/lib/strava/utils';
import ActivityMap from './ActivityMap';

interface ActivityCardProps {
  activity: ProcessedActivity;
  index: number;
}

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      {/* Kaart bovenaan als er een polyline is */}
      {activity.polyline && activity.startLatlng && (
        <div className="h-40 w-full">
          <ActivityMap
            polyline={activity.polyline}
            center={activity.startLatlng}
          />
        </div>
      )}

      <div className="p-5">
        {/* Header: type + datum */}
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl" role="img" aria-label={activity.type}>
              {getActivityTypeIcon(activity.type)}
            </span>
            <div>
              <h4 className="font-bold text-emte-gray-900 leading-tight">
                {activity.name}
              </h4>
              <p className="text-xs text-emte-gray-500">
                {getActivityTypeName(activity.type)} &middot; {formatRelativeDate(activity.date)}
              </p>
            </div>
          </div>

          {/* PR badge */}
          {activity.prCount > 0 && (
            <span className="inline-flex items-center rounded-full bg-emte-yellow/20 px-2.5 py-0.5 text-xs font-bold text-emte-yellow-dark">
              {activity.prCount} PR{activity.prCount > 1 ? "'s" : ''}!
            </span>
          )}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-2xl font-bold text-emte-green">{activity.distanceKm}</p>
            <p className="text-xs text-emte-gray-500">km</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emte-green">{activity.paceFormatted}</p>
            <p className="text-xs text-emte-gray-500">min/km</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emte-green">{activity.durationFormatted}</p>
            <p className="text-xs text-emte-gray-500">tijd</p>
          </div>
        </div>

        {/* Extra stats */}
        <div className="mt-3 flex flex-wrap gap-3 border-t border-emte-gray-100 pt-3">
          {activity.elevationGain > 0 && (
            <span className="text-xs text-emte-gray-500">
              <span className="font-medium text-emte-gray-700">{activity.elevationGain}m</span> hoogte
            </span>
          )}
          {activity.averageHeartrate && (
            <span className="text-xs text-emte-gray-500">
              <span className="font-medium text-emte-gray-700">{Math.round(activity.averageHeartrate)}</span> bpm
            </span>
          )}
          {activity.calories && activity.calories > 0 && (
            <span className="text-xs text-emte-gray-500">
              <span className="font-medium text-emte-gray-700">{activity.calories}</span> kcal
            </span>
          )}
          {activity.kudosCount > 0 && (
            <span className="text-xs text-emte-gray-500">
              <span className="font-medium text-emte-gray-700">{activity.kudosCount}</span> kudos
            </span>
          )}
          {activity.sufferScore && activity.sufferScore > 0 && (
            <span className="text-xs text-emte-gray-500">
              suffer: <span className="font-medium text-emte-gray-700">{activity.sufferScore}</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
