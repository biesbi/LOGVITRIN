import { cn } from '@/lib/utils';

const toneClass = {
  neutral: 'bg-paper text-ink border-line',
  success: 'bg-green-50 text-green-800 border-green-200',
  warning: 'bg-amber-50 text-amber-800 border-amber-200',
  danger: 'bg-red-50 text-red-800 border-red-200',
  info: 'bg-sky-50 text-sky-800 border-sky-200',
};

export function StatusBadge({
  children,
  tone = 'neutral',
}: {
  children: React.ReactNode;
  tone?: keyof typeof toneClass;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold',
        toneClass[tone],
      )}
    >
      {children}
    </span>
  );
}
