import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { mathQuestions } from '../data/ege/math';
import { russianQuestions } from '../data/ege/russian';
import { physicsQuestions } from '../data/ege/physics';
import QuestionCard from '../components/Exam/QuestionCard';
import Button from '../components/ui/Button';
import { ArrowLeft, Clock } from 'lucide-react';
import { primaryToTestScore } from '../lib/scoreTable';
import { useProgressStore } from '../store/useProgressStore';

const questionMap: Record<string, typeof mathQuestions> = {
  math: mathQuestions,
  russian: russianQuestions,
  physics: physicsQuestions,
};

export default function ExamModePage() {
  const { id } = useParams<{ id: string }>();
  const subject = subjects.find((s) => s.id === id);
  const questions = questionMap[id ?? ''] ?? [];
  const addResult = useProgressStore((s) => s.addResult);
  const updateStreak = useProgressStore((s) => s.updateStreak);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeLeft, setTimeLeft] = useState(180 * 60);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || finished) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, finished]);

  useEffect(() => {
    if (finished) {
      const score = questions.reduce((sum, q) => {
        const userAns = answers[q.id];
        if (!userAns) return sum;
        const correct = String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
        return sum + (correct ? q.points : 0);
      }, 0);
      const maxScore = questions.reduce((s, q) => s + q.points, 0);
      addResult({
        id: Date.now().toString(),
        testId: `exam-${subject?.id}`,
        subjectId: subject?.id ?? '',
        date: new Date().toISOString(),
        answers,
        score,
        maxScore,
        primaryScore: score,
        testScore: primaryToTestScore(`ege-${subject?.id}`, score),
      });
      updateStreak();
    }
  }, [finished]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  if (!subject || questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Экзамен недоступен</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="max-w-xl mx-auto">
        <Link to={`/subject/${id}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />
          {subject.name}
        </Link>

        <div className="border rounded-lg p-8 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Clock size={48} className="mx-auto mb-4" style={{ color: 'var(--accent)' }} />
          <h1 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Режим экзамена</h1>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            {subject.name} — {questions.length} вопросов, 3 часа
          </p>
          <ul className="text-sm text-left mb-6 space-y-1" style={{ color: 'var(--text-secondary)' }}>
            <li>Без подсказок и ИИ</li>
            <li>Без перехода между страницами</li>
            <li>Автозавершение по таймеру</li>
          </ul>
          <Button size="lg" onClick={() => setStarted(true)}>Начать экзамен</Button>
        </div>
      </div>
    );
  }

  if (finished) {
    const score = questions.reduce((sum, q) => {
      const userAns = answers[q.id];
      if (!userAns) return sum;
      const correct = String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
      return sum + (correct ? q.points : 0);
    }, 0);
    const maxScore = questions.reduce((s, q) => s + q.points, 0);

    return (
      <div className="max-w-3xl mx-auto">
        <div className="border rounded-lg p-6 text-center mb-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-serif text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Экзамен завершён</h2>
          <p className="text-4xl font-bold mb-2" style={{ color: score / maxScore >= 0.6 ? 'var(--color-success)' : 'var(--color-error)' }}>
            {score} / {maxScore}
          </p>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Балл ЕГЭ: <span className="font-bold" style={{ color: 'var(--accent)' }}>{primaryToTestScore(`ege-${subject.id}`, score)}</span>
          </p>
        </div>

        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} onAnswer={() => {}} showResult userAnswer={answers[q.id]} />
        ))}

        <div className="mt-6 text-center">
          <Link to={`/subject/${subject.id}`}>
            <Button>Вернуться к предмету</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4 p-3 rounded-lg border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <span className="font-serif font-bold" style={{ color: 'var(--primary)' }}>{subject.name} — Экзамен</span>
        <span className={`font-mono text-lg font-bold ${timeLeft < 300 ? 'animate-pulse' : ''}`} style={{ color: timeLeft < 300 ? 'var(--color-error)' : 'var(--accent)' }}>
          {formatTime(timeLeft)}
        </span>
      </div>

      <div className="flex gap-1.5 flex-wrap mb-4">
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
        onAnswer={(answer) => setAnswers((prev) => ({ ...prev, [questions[current].id]: answer }))}
      />

      <div className="flex gap-2 mt-4">
        {current > 0 && <Button variant="secondary" onClick={() => setCurrent(current - 1)}>Назад</Button>}
        {current < questions.length - 1 ? (
          <Button onClick={() => setCurrent(current + 1)}>Далее</Button>
        ) : (
          <Button onClick={() => setFinished(true)}>Завершить</Button>
        )}
      </div>
    </div>
  );
}
