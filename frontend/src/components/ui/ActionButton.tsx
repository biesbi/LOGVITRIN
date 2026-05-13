import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
};

const variants = {
  primary: 'bg-ink text-white shadow-soft hover:bg-moss',
  secondary: 'bg-white text-ink border border-line hover:border-moss',
  danger: 'bg-clay text-white hover:bg-red-700',
  ghost: 'bg-transparent text-ink hover:bg-white/70',
};

export function ActionButton({
  children,
  icon,
  variant = 'primary',
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-55',
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      <span className="truncate">{children}</span>
    </button>
  );
}
