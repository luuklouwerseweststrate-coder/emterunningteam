'use client';

import { motion } from 'framer-motion';
import Button from './Button';

interface EventCardProps {
  name: string;
  date: string;
  location: string;
  distance: string;
  status: 'upcoming' | 'past';
  description: string;
}

export default function EventCard({
  name,
  date,
  location,
  distance,
  status,
  description,
}: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col rounded-2xl bg-white p-6 shadow-md"
    >
      {/* Header row */}
      <div className="mb-4 flex items-start justify-between">
        <span className="inline-block rounded-lg bg-emte-green px-3 py-1 text-sm font-semibold text-white">
          {formattedDate}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === 'upcoming'
              ? 'bg-emte-green/10 text-emte-green'
              : 'bg-emte-gray-100 text-emte-gray-500'
          }`}
        >
          {status === 'upcoming' ? 'Aankomend' : 'Afgelopen'}
        </span>
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-bold text-emte-gray-900">{name}</h3>
      <p className="mb-4 line-clamp-2 text-sm text-emte-gray-600">
        {description}
      </p>

      {/* Details */}
      <div className="mb-6 flex flex-wrap gap-4 text-sm text-emte-gray-500">
        <span className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </span>
        <span className="flex items-center gap-1">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          {distance}
        </span>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {status === 'upcoming' ? (
          <Button variant="primary" size="sm" className="w-full">
            Meer info
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="w-full">
            Bekijk resultaten
          </Button>
        )}
      </div>
    </motion.div>
  );
}
