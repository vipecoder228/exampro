import { Link } from 'react-router-dom';
import ProgressChart from '../components/Stats/ProgressChart';
import HeatMap from '../components/Stats/HeatMap';
import ScorePredict from '../components/Stats/ScorePredict';
import RatingTable from '../components/Leaderboard/RatingTable';
import { useProgressStore } from '../store/useProgressStore';
import { subjects } from '../data/subjects';
import { ArrowLeft, Bookmark } from 'lucide-react';

export default function ProgressPage() {
  const results = useProgressStore((s) => s.results);
  const bookmarks = useProgressStore((s) => s.bookmarks);

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Мой прогресс</h1>

      <div className="mb-8">
        <RatingTable />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Динамика баллов</h3>
          <ProgressChart />
        </div>
        <div className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Прогноз</h3>
          <ScorePredict />
        </div>
      </div>

      <div className="border rounded-lg p-4 mb-8" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Прогресс по предметам</h3>
        <HeatMap />
      </div>

      {bookmarks.length > 0 && (
        <div className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Bookmark size={18} style={{ color: 'var(--accent)' }} />
            <h3 className="font-serif font-bold" style={{ color: 'var(--primary)' }}>Закладки ({bookmarks.length})</h3>
          </div>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {bookmarks.length} вопросов сохранено для повторения
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="border rounded-lg p-4 mt-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Последние тесты</h3>
          <div className="flex flex-col gap-2">
            {results.slice(-5).reverse().map((r) => {
              const subject = subjects.find((s) => s.id === r.subjectId);
              return (
                <div key={r.id} className="flex items-center justify-between p-2 rounded border" style={{ borderColor: 'var(--border)' }}>
                  <div>
                    <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{subject?.name ?? r.subjectId}</span>
                    <span className="text-xs ml-2" style={{ color: 'var(--text-secondary)' }}>
                      {new Date(r.date).toLocaleDateString('ru-RU')}
                    </span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>{r.testScore}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
