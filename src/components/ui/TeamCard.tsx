'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamCardProps {
  id: string;
  name: string;
  role: string;
  image?: string;
  shortBio: string;
  favoriteDistance: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamCard({
  id,
  name,
  role,
  image,
  shortBio,
  favoriteDistance,
}: TeamCardProps) {
  return (
    <Link href={`/team/${id}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        {/* Image / Placeholder */}
        <div className="relative flex h-80 items-center justify-center bg-emte-gray-100">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-bold text-emte-gray-400">
                {getInitials(name)}
              </span>
              <svg
                className="h-8 w-8 text-emte-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-emte-gray-900">{name}</h3>
          <p className="text-sm font-medium text-emte-green">{role}</p>

          <p className="mt-2 line-clamp-2 text-sm text-emte-gray-600">
            {shortBio}
          </p>

          <span className="mt-3 inline-block rounded-full bg-emte-yellow/20 px-3 py-1 text-xs font-semibold text-emte-green-dark">
            {favoriteDistance}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
