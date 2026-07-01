import { Calendar, Flame } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';

export default function DailyChallenge() {
  const streak = useProgressStore((s) => s.streak);
  const today = new Date().toISOString().split('T')[0];
  const lastActive = useProgressStore((s) => s.lastActiveDate);
  const isActive = lastActive === today;

  return (
    <div
      className="border rounded-lg p-4 flex items-center justify-between"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-center gap-3">
        <Calendar size={20} style={{ color: 'var(--accent)' }} />
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>Задание дня</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            {isActive ? 'Вы уже выполнили задание сегодня!' : 'Решите 5 задач из разных предметов'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Flame size={18} style={{ color: streak > 0 ? '#F59E0B' : 'var(--text-secondary)' }} />
        <span className="text-sm font-bold" style={{ color: streak > 0 ? '#F59E0B' : 'var(--text-secondary)' }}>
          {streak}
        </span>
      </div>
    </div>
  );
}
