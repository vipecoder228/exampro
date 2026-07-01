import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { subjects } from '../data/subjects';
import { mathQuestions as egeMath } from '../data/ege/math';
import { russianQuestions as egeRussian } from '../data/ege/russian';
import { physicsQuestions as egePhysics } from '../data/ege/physics';
import { chemistryQuestions as egeChemistry } from '../data/ege/chemistry';
import { biologyQuestions as egeBiology } from '../data/ege/biology';
import { informaticsQuestions as egeInformatics } from '../data/ege/informatics';
import { historyQuestions as egeHistory } from '../data/ege/history';
import { socialQuestions as egeSocial } from '../data/ege/social';
import { literatureQuestions as egeLiterature } from '../data/ege/literature';
import { geographyQuestions as egeGeography } from '../data/ege/geography';
import { englishQuestions as egeEnglish } from '../data/ege/english';
import { mathQuestions as ogeMath } from '../data/oge/math';
import { russianQuestions as ogeRussian } from '../data/oge/russian';
import { physicsQuestions as ogePhysics } from '../data/oge/physics';
import { chemistryQuestions as ogeChemistry } from '../data/oge/chemistry';
import { biologyQuestions as ogeBiology } from '../data/oge/biology';
import { historyQuestions as ogeHistory } from '../data/oge/history';
import { socialQuestions as ogeSocial } from '../data/oge/social';
import { geographyQuestions as ogeGeography } from '../data/oge/geography';
import { englishQuestions as ogeEnglish } from '../data/oge/english';
import Button from '../components/ui/Button';
import { ArrowLeft, Zap } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import type { ExamType, Question } from '../types';

const egeMap: Record<string, typeof egeMath> = {
  math: egeMath, russian: egeRussian, physics: egePhysics, chemistry: egeChemistry,
  biology: egeBiology, informatics: egeInformatics, history: egeHistory,
  social: egeSocial, literature: egeLiterature, geography: egeGeography, english: egeEnglish,
};

const ogeMap: Record<string, typeof ogeMath> = {
  math: ogeMath, russian: ogeRussian, physics: ogePhysics, chemistry: ogeChemistry,
  biology: ogeBiology, history: ogeHistory, social: ogeSocial,
  geography: ogeGeography, english: ogeEnglish,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const norm = (v: string | string[]) =>
  Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();

const BLITZ_TIME = 30;
const BLITZ_COUNT = 10;

export default function BlitzPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const examType: ExamType = (searchParams.get('type') as ExamType) || 'ege';
  const subject = subjects.find((s) => s.id === id);
  const allQuestions = examType === 'oge' ? (ogeMap[id ?? ''] ?? []) : (egeMap[id ?? ''] ?? []);
  const addResult = useProgressStore((s) => s.addResult);
  const updateStreak = useProgressStore((s) => s.updateStreak);

  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(BLITZ_TIME);
  const [finished, setFinished] = useState(false);

  const startBlitz = () => {
    const selected = shuffle(allQuestions).slice(0, BLITZ_COUNT);
    setQuestions(selected);
    setAnswers({});
    setCurrent(0);
    setTimeLeft(BLITZ_TIME);
    setStarted(true);
    setFinished(false);
  };

  const saveBlitzResult = useCallback(() => {
    const score = questions.reduce((sum, q) => {
      const userAns = answers[q.id];
      if (!userAns) return sum;
      return sum + (norm(userAns) === norm(q.correctAnswer) ? 1 : 0);
    }, 0);
    addResult({
      id: Date.now().toString(),
      testId: `blitz-${subject?.id}`,
      subjectId: subject?.id ?? '',
      date: new Date().toISOString(),
      answers,
      score,
      maxScore: questions.length,
      primaryScore: score,
      testScore: score,
    });
    updateStreak();
  }, [questions, answers, subject, addResult, updateStreak]);

  const advance = useCallback(() => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setTimeLeft(BLITZ_TIME);
    } else {
      saveBlitzResult();
      setFinished(true);
    }
  }, [current, questions.length, saveBlitzResult]);

  useEffect(() => {
    if (!started || finished) return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          advance();
          return BLITZ_TIME;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [started, finished, current, advance]);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [questions[current].id]: answer }));
    advance();
  };

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Предмет не найден</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  if (allQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />{subject.name}
        </Link>
        <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Нет вопросов для блitz-режима</p>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="max-w-xl mx-auto">
        <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />{subject.name}
        </Link>
        <div className="border rounded-lg p-8 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Zap size={48} className="mx-auto mb-4" style={{ color: '#F59E0B' }} />
          <h1 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Блitz-режим</h1>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            {BLITZ_COUNT} вопросов · {BLITZ_TIME} сек на каждый
          </p>
          <Button size="lg" onClick={startBlitz}>Начать блitz</Button>
        </div>
      </div>
    );
  }

  if (finished) {
    const score = questions.reduce((sum, q) => {
      const userAns = answers[q.id];
      if (!userAns) return sum;
      return sum + (norm(userAns) === norm(q.correctAnswer) ? 1 : 0);
    }, 0);

    return (
      <div className="max-w-xl mx-auto">
        <div className="border rounded-lg p-8 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <Zap size={48} className="mx-auto mb-4" style={{ color: '#F59E0B' }} />
          <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Блitz завершён!</h2>
          <p className="text-4xl font-bold mb-2" style={{ color: score >= 7 ? 'var(--color-success)' : score >= 4 ? '#F59E0B' : 'var(--color-error)' }}>
            {score} / {BLITZ_COUNT}
          </p>
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            {score >= 8 ? 'Отлично!' : score >= 5 ? 'Хорошо!' : 'Нужно тренироваться'}
          </p>
          <div className="flex gap-2 justify-center">
            <Button onClick={startBlitz}>Ещё раз</Button>
            <Link to={`/subject/${id}?type=${examType}`}>
              <Button variant="secondary">К предмету</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const progress = ((BLITZ_TIME - timeLeft) / BLITZ_TIME) * 100;
  const circumference = 2 * Math.PI * 40;
  const dashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
          {current + 1} / {BLITZ_COUNT}
        </span>
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border)" strokeWidth="6" />
            <circle cx="50" cy="50" r="40" fill="none"
              stroke={timeLeft <= 5 ? 'var(--color-error)' : 'var(--accent)'}
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={dashoffset}
              className="transition-all duration-1000" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-mono font-bold"
            style={{ color: timeLeft <= 5 ? 'var(--color-error)' : 'var(--text)' }}>
            {timeLeft}
          </span>
        </div>
      </div>

      <div className="border rounded-lg p-6 mb-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <p className="font-medium text-lg mb-4" style={{ color: 'var(--text)' }}>{q.text}</p>

        {q.type === 'choice' && q.options && (
          <div className="flex flex-col gap-2">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="text-left px-4 py-3 rounded-lg border text-sm transition-all hover:scale-[1.02]"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
              >
                <span className="font-bold mr-2" style={{ color: 'var(--accent)' }}>{i + 1}.</span>
                {opt}
              </button>
            ))}
          </div>
        )}

        {q.type === 'input' && (
          <BlitzInput onSubmit={handleAnswer} />
        )}
      </div>
    </div>
  );
}

function BlitzInput({ onSubmit }: { onSubmit: (answer: string) => void }) {
  const [value, setValue] = useState('');
  return (
    <div className="flex gap-2">
      <input
        type="text" value={value} onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && value.trim()) onSubmit(value.trim()); }}
        className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none"
        style={{ background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}
        placeholder="Введите ответ..."
        autoFocus
      />
      <Button onClick={() => { if (value.trim()) onSubmit(value.trim()); }} disabled={!value.trim()}>OK</Button>
    </div>
  );
}
