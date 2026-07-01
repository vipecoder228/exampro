import type { Question } from '../../types';
import { primaryToTestScore } from '../../lib/scoreTable';

interface Props {
  questions: Question[];
  answers: Record<string, string | string[]>;
  examKey: string;
}

export default function ResultsPanel({ questions, answers, examKey }: Props) {
  const score = questions.reduce((sum, q) => {
    const userAns = answers[q.id];
    if (!userAns) return sum;
    const correct = Array.isArray(q.correctAnswer)
      ? JSON.stringify([...(userAns as string[])].sort()) === JSON.stringify([...q.correctAnswer].sort())
      : String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
    return sum + (correct ? q.points : 0);
  }, 0);

  const maxScore = questions.reduce((s, q) => s + q.points, 0);
  const testScore = primaryToTestScore(examKey, score);

  return (
    <div className="border rounded-lg p-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="font-serif font-bold text-xl mb-4" style={{ color: 'var(--primary)' }}>Результаты теста</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold" style={{ color: 'var(--color-success)' }}>{score}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Первичных баллов</p>
        </div>
        <div>
          <p className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{testScore}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Балл ЕГЭ</p>
        </div>
        <div>
          <p className="text-3xl font-bold" style={{ color: 'var(--text)' }}>{maxScore}</p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Максимум</p>
        </div>
      </div>
    </div>
  );
}
