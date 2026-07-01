import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Flame, Target, Star } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { subjects } from '../data/subjects';
import Button from '../components/ui/Button';

export default function LeaderboardPage() {
  const results = useProgressStore((s) => s.results);
  const streak = useProgressStore((s) => s.streak);

  const subjectStats = subjects.map((subject) => {
    const subjectResults = results.filter((r) => r.subjectId === subject.id);
    const totalTests = subjectResults.length;
    const avgScore = totalTests > 0
      ? Math.round(subjectResults.reduce((sum, r) => sum + (r.score / r.maxScore) * 100, 0) / totalTests)
      : 0;
    const bestScore = totalTests > 0
      ? Math.max(...subjectResults.map((r) => r.testScore))
      : 0;
    const lastTest = subjectResults.length > 0
      ? subjectResults[subjectResults.length - 1].date
      : null;
    return { ...subject, totalTests, avgScore, bestScore, lastTest };
  }).filter((s) => s.totalTests > 0).sort((a, b) => b.bestScore - a.bestScore);

  const totalTests = results.length;
  const totalCorrect = results.reduce((sum, r) => sum + r.score, 0);
  const totalQuestions = results.reduce((sum, r) => sum + r.maxScore, 0);
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Достижения</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="border rounded-lg p-4 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Trophy size={24} className="mx-auto mb-2" style={{ color: '#F59E0B' }} />
          <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{totalTests}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Тестов пройдено</p>
        </div>
        <div className="border rounded-lg p-4 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Target size={24} className="mx-auto mb-2" style={{ color: 'var(--accent)' }} />
          <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{overallAccuracy}%</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Точность</p>
        </div>
        <div className="border rounded-lg p-4 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Flame size={24} className="mx-auto mb-2" style={{ color: '#EF4444' }} />
          <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{streak}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Серия дней</p>
        </div>
        <div className="border rounded-lg p-4 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Star size={24} className="mx-auto mb-2" style={{ color: '#8B5CF6' }} />
          <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{subjectStats.length}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Предметов изучено</p>
        </div>
      </div>

      {subjectStats.length > 0 ? (
        <>
          <h2 className="font-serif text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Рейтинг по предметам</h2>
          <div className="flex flex-col gap-3">
            {subjectStats.map((stat, i) => (
              <Link
                key={stat.id}
                to={`/subject/${stat.id}`}
                className="flex items-center gap-4 p-4 rounded-lg border transition-colors hover:opacity-80"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <span className="text-2xl font-bold w-8 text-center" style={{ color: i < 3 ? '#F59E0B' : 'var(--text-secondary)' }}>
                  #{i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif font-bold" style={{ color: 'var(--primary)' }}>{stat.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {stat.totalTests} тестов · Лучший: {stat.bestScore} баллов
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold" style={{ color: 'var(--accent)' }}>{stat.avgScore}%</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>средний</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="border rounded-lg p-12 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Trophy size={48} className="mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
          <p className="text-lg font-bold mb-2" style={{ color: 'var(--primary)' }}>Пока нет результатов</p>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Пройди хотя бы один тест, чтобы увидеть статистику</p>
          <Link to="/">
            <Button>Выбрать предмет</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
