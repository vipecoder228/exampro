import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useProgressStore } from '../../store/useProgressStore';

export default function ProgressChart({ subjectId }: { subjectId?: string }) {
  const results = useProgressStore((s) => s.results);
  const filtered = subjectId ? results.filter((r) => r.subjectId === subjectId) : results;

  const data = filtered.slice(-10).map((r) => ({
    date: new Date(r.date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }),
    score: r.testScore,
  }));

  if (data.length === 0) {
    return (
      <div className="h-48 flex items-center justify-center text-sm" style={{ color: 'var(--text-secondary)' }}>
        Нет данных для графика
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="var(--text-secondary)" fontSize={12} />
        <YAxis stroke="var(--text-secondary)" fontSize={12} />
        <Tooltip
          contentStyle={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text)',
          }}
        />
        <Line type="monotone" dataKey="score" stroke="var(--accent)" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
