import { useProgressStore } from '../../store/useProgressStore';

export default function ScorePredict({ subjectId }: { subjectId?: string }) {
  const results = useProgressStore((s) => s.results);
  const filtered = subjectId ? results.filter((r) => r.subjectId === subjectId) : results;

  if (filtered.length === 0) {
    return (
      <div className="text-center p-4" style={{ color: 'var(--text-secondary)' }}>
        Пройдите хотя бы один тест для прогноза
      </div>
    );
  }

  const last5 = filtered.slice(-5);
  const avgScore = Math.round(last5.reduce((sum, r) => sum + r.testScore, 0) / last5.length);

  return (
    <div className="text-center p-6 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Прогнозируемый балл</p>
      <p className="text-5xl font-bold" style={{ color: avgScore >= 60 ? 'var(--color-success)' : avgScore >= 40 ? '#F59E0B' : 'var(--color-error)' }}>
        {avgScore}
      </p>
      <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
        По последним {last5.length} тестам
      </p>
    </div>
  );
}
