import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import ProgressChart from '../components/Stats/ProgressChart';
import HeatMap from '../components/Stats/HeatMap';
import ScorePredict from '../components/Stats/ScorePredict';
import RatingTable from '../components/Leaderboard/RatingTable';
import { useProgressStore } from '../store/useProgressStore';
import { subjects } from '../data/subjects';
import { ArrowLeft, Bookmark, Download, Upload } from 'lucide-react';

export default function ProgressPage() {
  const results = useProgressStore((s) => s.results);
  const bookmarks = useProgressStore((s) => s.bookmarks);
  const weeklyGoal = useProgressStore((s) => s.weeklyGoal);
  const getWeeklyDone = useProgressStore((s) => s.getWeeklyDone);
  const setWeeklyGoal = useProgressStore((s) => s.setWeeklyGoal);
  const exportAll = useProgressStore((s) => s.exportAll);
  const importData = useProgressStore((s) => s.importData);
  const weeklyDone = getWeeklyDone();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Мой прогресс</h1>

      <div className="mb-8 border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Цель недели</span>
          <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>{weeklyDone} / {weeklyGoal}</span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <div className="h-full rounded-full transition-all" style={{
            width: `${Math.min(100, (weeklyDone / weeklyGoal) * 100)}%`,
            background: weeklyDone >= weeklyGoal ? 'var(--color-success)' : 'var(--accent)',
          }} />
        </div>
        <div className="flex gap-2 mt-3">
          {[3, 5, 7, 10].map((g) => (
            <button key={g} onClick={() => setWeeklyGoal(g)}
              className="px-2 py-1 rounded text-xs font-medium transition-all"
              style={{
                background: weeklyGoal === g ? 'var(--accent)' : 'var(--border)',
                color: weeklyGoal === g ? '#fff' : 'var(--text-secondary)',
              }}>
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Данные</h3>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
          Сохрани прогресс или перенеси на другое устройство
        </p>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => {
              const json = exportAll();
              const blob = new Blob([json], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `exampro-backup-${new Date().toISOString().split('T')[0]}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            <Download size={14} />
            Экспорт
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            <Upload size={14} />
            Импорт
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = () => {
                const ok = importData(reader.result as string);
                setImportStatus(ok ? 'success' : 'error');
                setTimeout(() => setImportStatus('idle'), 3000);
              };
              reader.readAsText(file);
              e.target.value = '';
            }}
          />
        </div>
        {importStatus === 'success' && (
          <p className="text-xs mt-2" style={{ color: 'var(--color-success)' }}>Данные успешно загружены!</p>
        )}
        {importStatus === 'error' && (
          <p className="text-xs mt-2" style={{ color: 'var(--color-error)' }}>Ошибка: файл повреждён или не подходит</p>
        )}
      </div>

      <div className="mb-8">
        <RatingTable />
      </div>

      {results.length > 0 && (() => {
        const avgScore = Math.round(results.reduce((s, r) => s + (r.score / r.maxScore) * 100, 0) / results.length);
        const percentile = Math.min(99, Math.round(avgScore * 0.85 + Math.log(results.length + 1) * 5));
        return (
          <div className="mb-8 border rounded-lg p-6 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Твое место среди учеников</p>
            <p className="text-4xl font-bold mb-1" style={{ color: 'var(--accent)' }}>Лучше {percentile}%</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              на основе {results.length} тестов · средний балл {avgScore}%
            </p>
          </div>
        );
      })()}

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
