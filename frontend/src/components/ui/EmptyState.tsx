import type { ReactNode } from 'react';

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid min-h-52 place-items-center rounded-lg border border-dashed border-line bg-white p-6 text-center">
      <div className="max-w-xs space-y-3">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        <p className="text-sm leading-6 text-ink/70">{description}</p>
        {action}
      </div>
    </div>
  );
}
