import { useState } from 'react';
import type { Question } from '../../types';
import QuestionCard from './QuestionCard';
import Button from '../ui/Button';
import { primaryToTestScore } from '../../lib/scoreTable';
import { useProgressStore } from '../../store/useProgressStore';

interface Props {
  questions: Question[];
  subjectId: string;
  examKey: string;
  title: string;
  onComplete?: () => void;
}

export default function TestRunner({ questions, subjectId, examKey, title, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const addResult = useProgressStore((s) => s.addResult);
  const updateStreak = useProgressStore((s) => s.updateStreak);

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
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

    addResult({
      id: Date.now().toString(),
      testId: title,
      subjectId,
      date: new Date().toISOString(),
      answers,
      score,
      maxScore,
      primaryScore: score,
      testScore,
    });
    updateStreak();
    onComplete?.();
  };

  const score = submitted
    ? questions.reduce((sum, q) => {
        const userAns = answers[q.id];
        if (!userAns) return sum;
        const correct = Array.isArray(q.correctAnswer)
          ? JSON.stringify([...(userAns as string[])].sort()) === JSON.stringify([...q.correctAnswer].sort())
          : String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
        return sum + (correct ? q.points : 0);
      }, 0)
    : 0;

  const maxScore = questions.reduce((s, q) => s + q.points, 0);

  if (submitted) {
    return (
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg p-6 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: 'var(--primary)' }}>Результаты</h3>
          <p className="text-4xl font-bold mb-2" style={{ color: score / maxScore >= 0.6 ? 'var(--color-success)' : 'var(--color-error)' }}>
            {score} / {maxScore}
          </p>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Балл ЕГЭ: <span className="font-bold" style={{ color: 'var(--accent)' }}>{primaryToTestScore(examKey, score)}</span>
          </p>
        </div>

        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} onAnswer={() => {}} showResult userAnswer={answers[q.id]} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="font-serif font-bold" style={{ color: 'var(--primary)' }}>{title}</h3>
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Вопрос {current + 1} из {questions.length}
        </span>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrent(i)}
            className="w-8 h-8 rounded-full text-xs font-medium border transition-colors"
            style={{
              background: i === current ? 'var(--accent)' : answers[q.id] ? 'var(--color-success)' : 'transparent',
              color: i === current || answers[q.id] ? '#fff' : 'var(--text-secondary)',
              borderColor: i === current ? 'var(--accent)' : answers[q.id] ? 'var(--color-success)' : 'var(--border)',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <QuestionCard
        question={questions[current]}
        onAnswer={(answer) => handleAnswer(questions[current].id, answer)}
        showResult={false}
      />

      <div className="flex gap-2">
        {current > 0 && (
          <Button variant="secondary" onClick={() => setCurrent(current - 1)}>Назад</Button>
        )}
        {current < questions.length - 1 ? (
          <Button onClick={() => setCurrent(current + 1)}>Далее</Button>
        ) : (
          <Button onClick={handleSubmit}>Завершить тест</Button>
        )}
      </div>
    </div>
  );
}
