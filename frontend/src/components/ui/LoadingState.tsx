export function LoadingState({ label = 'Yukleniyor' }: { label?: string }) {
  return (
    <div className="space-y-3 rounded-lg border border-line bg-white p-4" aria-live="polite">
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div className="h-3 rounded bg-line" />
      <div className="h-3 w-4/5 rounded bg-line" />
      <div className="h-12 rounded bg-paper" />
    </div>
  );
}
