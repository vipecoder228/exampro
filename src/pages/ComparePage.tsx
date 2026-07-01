import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Users, Copy, Check } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import Button from '../components/ui/Button';

function encodeStats(data: { results: { score: number; maxScore: number; subjectId: string; date: string }[]; streak: number; nickname: string }): string {
  const compact = data.results.map((r) => ({
    s: r.score,
    m: r.maxScore,
    u: r.subjectId,
    d: r.date.split('T')[0],
  }));
  return btoa(JSON.stringify({ n: data.nickname, r: compact, k: data.streak }));
}

function decodeStats(code: string): { nickname: string; results: { score: number; maxScore: number; subjectId: string }[]; streak: number } | null {
  try {
    const data = JSON.parse(atob(code));
    return {
      nickname: data.n,
      results: data.r.map((r: Record<string, unknown>) => ({
        score: r.s as number,
        maxScore: r.m as number,
        subjectId: r.u as string,
      })),
      streak: data.k as number,
    };
  } catch {
    return null;
  }
}

export default function ComparePage() {
  const results = useProgressStore((s) => s.results);
  const streak = useProgressStore((s) => s.streak);
  const [friendCode, setFriendCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [friendStats, setFriendStats] = useState<{ nickname: string; totalTests: number; avgScore: number; streak: number; subjects: number } | null>(null);

  const myStats = {
    nickname: 'Ты',
    totalTests: results.length,
    avgScore: results.length > 0 ? Math.round(results.reduce((s, r) => s + (r.score / r.maxScore) * 100, 0) / results.length) : 0,
    streak,
    subjects: new Set(results.map((r) => r.subjectId)).size,
  };

  const myCode = encodeStats({
    results: results.map((r) => ({ score: r.score, maxScore: r.maxScore, subjectId: r.subjectId, date: r.date })),
    streak,
    nickname: 'Ты',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(myCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCompare = () => {
    const decoded = decodeStats(friendCode.trim());
    if (decoded) {
      const friendTotal = decoded.results.length;
      const friendAvg = friendTotal > 0 ? Math.round(decoded.results.reduce((s, r) => s + (r.score / r.maxScore) * 100, 0) / friendTotal) : 0;
      const friendSubjects = new Set(decoded.results.map((r) => r.subjectId)).size;
      setFriendStats({
        nickname: decoded.nickname || 'Друг',
        streak: decoded.streak,
        totalTests: friendTotal,
        avgScore: friendAvg,
        subjects: friendSubjects,
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Сравнение с другом</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Твой код</h3>
          <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Скопируй и отправь другу:</p>
          <div className="flex gap-2">
            <input readOnly value={myCode.slice(0, 30) + '...'}
              className="flex-1 px-3 py-2 rounded border text-xs font-mono"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
            />
            <button onClick={handleCopy} className="px-3 py-2 rounded border"
              style={{ background: copied ? 'var(--color-success)' : 'var(--border)', color: copied ? '#fff' : 'var(--text)' }}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        <div className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Код друга</h3>
          <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>Вставь код друга:</p>
          <div className="flex gap-2">
            <input value={friendCode} onChange={(e) => setFriendCode(e.target.value)}
              placeholder="Вставьте код..."
              className="flex-1 px-3 py-2 rounded border text-xs font-mono"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
            />
            <Button onClick={handleCompare} disabled={!friendCode.trim()}>Сравнить</Button>
          </div>
        </div>
      </div>

      {friendStats && (
        <div className="border rounded-lg p-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold text-lg mb-4" style={{ color: 'var(--primary)' }}>Сравнение</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>Метрика</p>
            </div>
            <div>
              <p className="text-xs font-bold mb-1" style={{ color: 'var(--accent)' }}>Ты</p>
            </div>
            <div>
              <p className="text-xs font-bold mb-1" style={{ color: '#F59E0B' }}>{friendStats.nickname}</p>
            </div>

            {[
              { label: 'Тестов', my: myStats.totalTests, friend: friendStats.totalTests },
              { label: 'Средний балл', my: `${myStats.avgScore}%`, friend: `${friendStats.avgScore}%` },
              { label: 'Серия дней', my: myStats.streak, friend: friendStats.streak },
              { label: 'Предметов', my: myStats.subjects, friend: friendStats.subjects },
            ].map((row) => (
              <React.Fragment key={row.label}>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{row.label}</p>
                <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{row.my}</p>
                <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>{row.friend}</p>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {!friendStats && results.length === 0 && (
        <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Users size={48} className="mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
          <p className="text-lg font-bold mb-2" style={{ color: 'var(--primary)' }}>Начни тренироваться</p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Пройди хотя бы один тест, чтобы сравнить с другом</p>
        </div>
      )}
    </div>
  );
}
