'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-md"
    >
      <div className="mb-4 text-4xl text-emte-yellow">{icon}</div>
      <span className="text-4xl font-bold text-emte-green">{value}</span>
      <span className="mt-2 text-sm text-emte-gray-600">{label}</span>
    </motion.div>
  );
}
