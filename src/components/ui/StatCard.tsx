'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function parseNumericValue(value: string): { number: number; prefix: string; suffix: string } {
  // Extract the numeric part and any prefix/suffix
  const match = value.match(/^([^\d]*)(\d[\d.]*)(.*)/);
  if (!match) return { number: 0, prefix: '', suffix: value };

  const numStr = match[2].replace(/\./g, '');
  return {
    prefix: match[1],
    number: parseInt(numStr, 10),
    suffix: match[3],
  };
}

function formatNumber(n: number, original: string): string {
  // If original had dots as thousand separators (Dutch format), apply same formatting
  if (original.includes('.')) {
    return n.toLocaleString('nl-NL');
  }
  return n.toString();
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  const { number, prefix, suffix } = parseNumericValue(value);

  useEffect(() => {
    if (!isInView || number === 0) return;

    const controls = animate(0, number, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(formatNumber(Math.round(latest), value));
      },
    });

    return () => controls.stop();
  }, [isInView, number, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-md"
    >
      <div className="mb-4 text-4xl text-emte-yellow">{icon}</div>
      <span className="text-4xl font-bold text-emte-green tabular-nums">
        {number > 0 ? `${prefix}${displayValue}${suffix}` : value}
      </span>
      <span className="mt-2 text-sm text-emte-gray-600">{label}</span>
    </motion.div>
  );
}
