export default function ProgressBar({ value, max = 100, className = '' }: { value: number; max?: number; className?: string }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={`w-full rounded-full h-2 overflow-hidden ${className}`} style={{ background: 'var(--border)' }}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: pct >= 80 ? 'var(--color-success)' : pct >= 40 ? 'var(--accent)' : 'var(--color-error)' }}
      />
    </div>
  );
}
