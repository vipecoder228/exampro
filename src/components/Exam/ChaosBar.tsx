import { useEffect, useState } from 'react';

interface Props {
  current: number;
  total: number;
  timeLeft?: number;
  timeMax?: number;
  bonusActive?: boolean;
}

export default function ChaosBar({ current, total, timeLeft, timeMax, bonusActive }: Props) {
  const progress = ((current + 1) / total) * 100;
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (bonusActive) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 800);
      return () => clearTimeout(t);
    }
  }, [bonusActive, current]);

  const timeRatio = timeMax && timeLeft !== undefined ? timeLeft / timeMax : null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>
          ХАОС {current + 1}/{total}
        </span>
        {timeRatio !== null && (
          <span
            className="text-xs font-mono font-bold"
            style={{ color: timeRatio <= 0.2 ? 'var(--color-error)' : timeRatio <= 0.5 ? '#F59E0B' : 'var(--accent)' }}
          >
            {timeLeft}с
          </span>
        )}
      </div>
      <div className="relative h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: flash
              ? 'linear-gradient(90deg, #EF4444, #F59E0B, #EF4444)'
              : `linear-gradient(90deg, var(--color-success), var(--accent), var(--color-error))`,
          }}
        />
        {flash && (
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{ background: 'rgba(239, 68, 68, 0.3)' }}
          />
        )}
      </div>
      {timeRatio !== null && (
        <div className="mt-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${timeRatio * 100}%`,
              background: timeRatio <= 0.2 ? 'var(--color-error)' : timeRatio <= 0.5 ? '#F59E0B' : 'var(--color-success)',
            }}
          />
        </div>
      )}
    </div>
  );
}
