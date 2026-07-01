import { Link } from 'react-router-dom';
import { ArrowLeft, Flame } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { pickDailyQuestions } from '../lib/dailySeed';
import { mathQuestions } from '../data/ege/math';
import { russianQuestions } from '../data/ege/russian';
import { physicsQuestions } from '../data/ege/physics';
import { chemistryQuestions } from '../data/ege/chemistry';
import { biologyQuestions } from '../data/ege/biology';
import { informaticsQuestions } from '../data/ege/informatics';
import { historyQuestions } from '../data/ege/history';
import { socialQuestions } from '../data/ege/social';
import { literatureQuestions } from '../data/ege/literature';
import { geographyQuestions } from '../data/ege/geography';
import { englishQuestions } from '../data/ege/english';
import QuestionCard from '../components/Exam/QuestionCard';
import { useState } from 'react';

const allQuestions = [
  ...mathQuestions,
  ...russianQuestions,
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions,
  ...informaticsQuestions,
  ...historyQuestions,
  ...socialQuestions,
  ...literatureQuestions,
  ...geographyQuestions,
  ...englishQuestions,
];

export default function DailyPage() {
  const streak = useProgressStore((s) => s.streak);
  const updateStreak = useProgressStore((s) => s.updateStreak);
  const dailyQuestions = pickDailyQuestions(allQuestions, 5);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setShowResults((prev) => ({ ...prev, [questionId]: true }));
    if (Object.keys(showResults).length + 1 === dailyQuestions.length) {
      updateStreak();
    }
  };

  const score = dailyQuestions.filter((q) => {
    const userAns = answers[q.id];
    const norm = (v: string | string[]) => Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();
    return userAns && norm(userAns) === norm(q.correctAnswer);
  }).length;

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold" style={{ color: 'var(--primary)' }}>Задание дня</h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>5 случайных задач из разных предметов</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: streak > 0 ? '#FEF3C7' : 'var(--border)', color: streak > 0 ? '#92400E' : 'var(--text-secondary)' }}>
          <Flame size={14} />
          <span className="text-sm font-bold">{streak}</span>
        </div>
      </div>

      {Object.keys(showResults).length === dailyQuestions.length && (
        <div className="border rounded-lg p-4 mb-6 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Результат дня</p>
          <p className="text-3xl font-bold" style={{ color: score >= 4 ? 'var(--color-success)' : score >= 2 ? '#F59E0B' : 'var(--color-error)' }}>
            {score} / {dailyQuestions.length}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {dailyQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            onAnswer={(answer) => handleAnswer(q.id, answer)}
            showResult={showResults[q.id]}
            userAnswer={answers[q.id]}
          />
        ))}
      </div>
    </div>
  );
}
