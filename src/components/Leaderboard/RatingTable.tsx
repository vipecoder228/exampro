import { useProgressStore } from '../../store/useProgressStore';
import { Trophy, Target, Zap } from 'lucide-react';

export default function RatingTable() {
  const results = useProgressStore((s) => s.results);
  const streak = useProgressStore((s) => s.streak);

  if (results.length === 0) {
    return (
      <div className="text-center p-8" style={{ color: 'var(--text-secondary)' }}>
        Пройдите хотя бы один тест, чтобы увидеть статистику
      </div>
    );
  }

  const avgScore = Math.round(results.reduce((sum, r) => sum + (r.score / r.maxScore) * 100, 0) / results.length);

  const stats = [
    { icon: Trophy, label: 'Средний балл', value: `${avgScore}%`, color: 'var(--accent)' },
    { icon: Target, label: 'Тестов пройдено', value: results.length.toString(), color: 'var(--color-success)' },
    { icon: Zap, label: 'Дней подряд', value: streak.toString(), color: '#F59E0B' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="border rounded-lg p-4 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <s.icon size={24} className="mx-auto mb-2" style={{ color: s.color }} />
          <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
