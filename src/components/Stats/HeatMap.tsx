import { useProgressStore } from '../../store/useProgressStore';
import { subjects } from '../../data/subjects';

export default function HeatMap() {
  const results = useProgressStore((s) => s.results);

  const subjectScores = subjects.map((s) => {
    const subjectResults = results.filter((r) => r.subjectId === s.id);
    if (subjectResults.length === 0) return { name: s.name, avg: 0, count: 0 };
    const avg = Math.round(subjectResults.reduce((sum, r) => sum + (r.score / r.maxScore) * 100, 0) / subjectResults.length);
    return { name: s.name, avg, count: subjectResults.length };
  });

  const getColor = (avg: number) => {
    if (avg === 0) return 'var(--border)';
    if (avg >= 80) return 'var(--color-success)';
    if (avg >= 60) return 'var(--accent)';
    if (avg >= 40) return '#F59E0B';
    return 'var(--color-error)';
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {subjectScores.map((s) => (
        <div
          key={s.name}
          className="p-3 rounded-lg text-center"
          style={{ background: getColor(s.avg), color: s.avg === 0 ? 'var(--text-secondary)' : '#fff' }}
        >
          <p className="text-xs font-medium truncate">{s.name}</p>
          <p className="text-lg font-bold">{s.avg > 0 ? `${s.avg}%` : '—'}</p>
          <p className="text-xs opacity-70">{s.count} тестов</p>
        </div>
      ))}
    </div>
  );
}
