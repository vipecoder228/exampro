import { Flame } from 'lucide-react';

export default function StreakBadge({ streak }: { streak: number }) {
  if (streak === 0) return null;

  return (
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: '#FEF3C7', color: '#92400E' }}>
      <Flame size={14} />
      <span className="text-xs font-bold">{streak} дней подряд</span>
    </div>
  );
}
