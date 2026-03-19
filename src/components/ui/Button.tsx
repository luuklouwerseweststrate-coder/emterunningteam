'use client';

import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-emte-green text-white hover:bg-emte-green-light active:bg-emte-green-dark',
  secondary:
    'bg-emte-yellow text-emte-green-dark hover:bg-emte-yellow-light active:bg-emte-yellow',
  outline:
    'border-2 border-emte-green text-emte-green hover:bg-emte-green hover:text-white',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emte-green focus:ring-offset-2';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
