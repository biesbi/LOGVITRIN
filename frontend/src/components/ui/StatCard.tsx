import type { ReactNode } from 'react';

export function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-ink/65">{label}</p>
        {icon}
      </div>
      <p className="mt-2 text-2xl font-bold text-ink">{value}</p>
    </div>
  );
}
