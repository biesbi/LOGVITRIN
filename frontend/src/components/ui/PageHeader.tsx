import type { ReactNode } from 'react';

export function PageHeader({
  title,
  eyebrow,
  action,
}: {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
}) {
  return (
    <header className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        {eyebrow ? <p className="text-xs font-bold uppercase text-moss">{eyebrow}</p> : null}
        <h1 className="text-2xl font-bold text-ink md:text-3xl">{title}</h1>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
