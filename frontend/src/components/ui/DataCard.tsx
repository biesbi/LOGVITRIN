import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function DataCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn('rounded-lg border border-line bg-white p-4 shadow-sm', className)}
      {...props}
    />
  );
}
