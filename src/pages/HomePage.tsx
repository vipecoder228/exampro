import { subjects } from '../data/subjects';
import SubjectCard from '../components/Exam/SubjectCard';
import DailyChallenge from '../components/Daily/DailyChallenge';
import StreakBadge from '../components/Daily/StreakBadge';
import { useProgressStore } from '../store/useProgressStore';

export default function HomePage() {
  const streak = useProgressStore((s) => s.streak);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            Подготовка к ЕГЭ и ОГЭ
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Все предметы. Доверенные источники. ИИ-помощник.
          </p>
        </div>
        {streak > 0 && <StreakBadge streak={streak} />}
      </div>

      <div className="mb-6">
        <DailyChallenge />
      </div>

      <h2 className="font-serif text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Предметы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
