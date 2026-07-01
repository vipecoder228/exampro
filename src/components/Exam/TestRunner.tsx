import { useState, useEffect, useRef, useCallback } from 'react';
import type { Question } from '../../types';
import QuestionCard from './QuestionCard';
import ChaosBar from './ChaosBar';
import Button from '../ui/Button';
import { primaryToTestScore } from '../../lib/scoreTable';
import { useProgressStore } from '../../store/useProgressStore';
import { sendAIMessage, buildSystemPrompt } from '../../lib/ai';

interface Props {
  questions: Question[];
  subjectId: string;
  examKey: string;
  title: string;
  timeMinutes?: number;
  timePerQuestion?: number;
  chaosMode?: boolean;
  chaosRandomTimes?: number[];
  mode?: 'test' | 'practice';
  adaptive?: boolean;
  onComplete?: () => void;
}

const norm = (v: string | string[]) =>
  Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();

export default function TestRunner({ questions, subjectId, examKey, title, timeMinutes = 60, timePerQuestion, chaosMode = false, chaosRandomTimes, mode = 'test', adaptive = false, onComplete }: Props) {
  const isPractice = mode === 'practice';
  const results = useProgressStore((s) => s.results);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeMinutes * 60);
  const [chaosTimeLeft, setChaosTimeLeft] = useState(chaosRandomTimes?.[0] ?? 0);
  const [started, setStarted] = useState(false);
  const [questionResults, setQuestionResults] = useState<Record<string, boolean>>({});
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [bonusFlash, setBonusFlash] = useState(false);
  const addResult = useProgressStore((s) => s.addResult);
  const updateStreak = useProgressStore((s) => s.updateStreak);
  const subjectResults = results.filter((r) => r.subjectId === subjectId);
  const selectedQuestions = adaptive
    ? (() => {
        const topicAccuracy = new Map<string, number>();
        const topicIds = [...new Set(questions.map((q) => q.topicId))];
        for (const tid of topicIds) {
          const relevant = subjectResults.filter((r) => Object.keys(r.answers).some((qId) => qId.includes(tid.split('-').slice(0, -1).join('-'))));
          topicAccuracy.set(tid, relevant.length > 0 ? 0.5 : 0.5);
        }
        const scored = questions.map((q) => ({ q, score: (topicAccuracy.get(q.topicId) ?? 0.5) + Math.random() * 0.3 }));
        scored.sort((a, b) => b.score - a.score);
        return scored.slice(0, 20).map((s) => s.q);
      })()
    : questions;
  const answersRef = useRef(answers);
  answersRef.current = answers;

  const saveResult = useCallback(() => {
    const currentAnswers = answersRef.current;
    const score = selectedQuestions.reduce((sum, q) => {
      const userAns = currentAnswers[q.id];
      if (!userAns) return sum;
      return sum + (norm(userAns) === norm(q.correctAnswer) ? q.points : 0);
    }, 0);
    const maxScore = selectedQuestions.reduce((s, q) => s + q.points, 0);
    addResult({
      id: Date.now().toString(),
      testId: title,
      subjectId,
      date: new Date().toISOString(),
      answers: currentAnswers,
      score,
      maxScore,
      primaryScore: score,
      testScore: primaryToTestScore(examKey, score),
    });
    updateStreak();
    onComplete?.();
  }, [selectedQuestions, subjectId, examKey, title, addResult, updateStreak, onComplete]);

  useEffect(() => {
    if (!started || submitted || isPractice) return;
    if (chaosMode) {
      const id = setInterval(() => {
        setChaosTimeLeft((t) => {
          if (t <= 1) {
            if (current < selectedQuestions.length - 1) {
              setCurrent((c) => c + 1);
              return chaosRandomTimes?.[current + 1] ?? 30;
            }
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(id);
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [started, submitted, isPractice, chaosMode, current, chaosRandomTimes, selectedQuestions.length]);

  useEffect(() => {
    if (started && !submitted && !isPractice && !chaosMode && timeLeft <= 0) {
      saveResult();
      setSubmitted(true);
    }
  }, [timeLeft, started, submitted, isPractice, chaosMode, saveResult]);

  useEffect(() => {
    if (chaosMode && started && !submitted && chaosTimeLeft <= 0 && current >= selectedQuestions.length - 1) {
      saveResult();
      setSubmitted(true);
    }
  }, [chaosTimeLeft, chaosMode, started, submitted, current, selectedQuestions.length, saveResult]);

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  if (!started) {
    return (
      <div className="border rounded-lg p-8 text-center" style={{ background: 'var(--card)', borderColor: chaosMode ? '#EF4444' : 'var(--border)' }}>
        <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: chaosMode ? '#EF4444' : 'var(--primary)' }}>{title}</h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          {chaosMode ? 'Армагеддон · ' : ''}{adaptive ? 'Адаптивный подбор · ' : ''}{questions.length} вопросов{isPractice ? '' : chaosMode ? '' : ` · ${timeMinutes} минут`}{timePerQuestion ? ` · ${timePerQuestion} сек/вопрос` : ''}
        </p>
        <Button size="lg" onClick={() => setStarted(true)} style={chaosMode ? { background: '#EF4444' } : undefined}>
          {chaosMode ? 'Запустить хаос' : isPractice ? 'Начать тренировку' : 'Начать тест'}
        </Button>
      </div>
    );
  }

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    const q = selectedQuestions.find((q) => q.id === questionId);
    if (q) {
      const isCorrect = norm(answer) === norm(q.correctAnswer);
      setQuestionResults((prev) => ({ ...prev, [questionId]: isCorrect }));
      if (chaosMode && q.points > 1) {
        setBonusFlash(true);
        setTimeout(() => setBonusFlash(false), 800);
      }
    }
    setAiExplanation(null);
    if (chaosMode && current < selectedQuestions.length - 1) {
      const nextIdx = current + 1;
      setCurrent(nextIdx);
      setChaosTimeLeft(chaosRandomTimes?.[nextIdx] ?? 30);
    } else if (timePerQuestion && current < selectedQuestions.length - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 300);
    }
  };

  const handleExplainError = async (questionText: string, userAns: string, correctAns: string) => {
    const apiKey = localStorage.getItem('exampro-ai-key');
    if (!apiKey) {
      setAiExplanation('Введите API-ключ OpenAI в настройках AI-помощника.');
      return;
    }
    setAiLoading(true);
    try {
      const prompt = buildSystemPrompt({
        subject: title,
        question: questionText,
        wrongAnswer: userAns,
        correctAnswer: correctAns,
      });
      const reply = await sendAIMessage([
        { role: 'system', content: prompt },
        { role: 'user', content: `Объясни почему мой ответ "${userAns}" неправильный и как прийти к правильному ответу "${correctAns}".` },
      ], apiKey);
      setAiExplanation(reply);
    } catch {
      setAiExplanation('Не удалось получить объяснение. Попробуйте позже.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!isPractice) saveResult();
    setSubmitted(true);
  };

  const score = submitted
    ? selectedQuestions.reduce((sum, q) => {
        const userAns = answers[q.id];
        if (!userAns) return sum;
        return sum + (norm(userAns) === norm(q.correctAnswer) ? q.points : 0);
      }, 0)
    : 0;

  const maxScore = selectedQuestions.reduce((s, q) => s + q.points, 0);

  if (submitted) {
    return (
      <div className="flex flex-col gap-4">
        <div className="border rounded-lg p-6 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: 'var(--primary)' }}>
            {isPractice ? 'Тренировка завершена' : 'Результаты'}
          </h3>
          <p className="text-4xl font-bold mb-2" style={{ color: score / maxScore >= 0.6 ? 'var(--color-success)' : 'var(--color-error)' }}>
            {score} / {maxScore}
          </p>
          {!isPractice && (
            <>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Балл: <span className="font-bold" style={{ color: 'var(--accent)' }}>{primaryToTestScore(examKey, score)}</span>
              </p>
              <button
                onClick={() => {
                  const text = `Я набрал ${score}/${maxScore} (${primaryToTestScore(examKey, score)} баллов) на ExamPro!`;
                  if (navigator.share) {
                    navigator.share({ title: 'ExamPro', text });
                  } else {
                    navigator.clipboard.writeText(text);
                  }
                }}
                className="mt-2 text-sm underline min-h-[44px] py-2 inline-flex items-center"
                style={{ color: 'var(--accent)' }}
              >
                Поделиться результатом
              </button>
            </>
          )}
        </div>

        {selectedQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} onAnswer={() => {}} showResult userAnswer={answers[q.id]} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {chaosMode ? (
        <ChaosBar
          current={current}
          total={selectedQuestions.length}
          timeLeft={chaosTimeLeft}
          timeMax={chaosRandomTimes?.[current] ?? 30}
          bonusActive={bonusFlash}
        />
      ) : (
        <div className="flex items-center justify-between p-3 rounded-lg border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h3 className="font-serif font-bold truncate min-w-0" style={{ color: 'var(--primary)' }}>{title}</h3>
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {current + 1} / {selectedQuestions.length}
            </span>
            {!isPractice && (
              <span className={`font-mono text-lg font-bold ${timeLeft < 300 ? 'animate-pulse' : ''}`}
                style={{ color: timeLeft < 300 ? 'var(--color-error)' : 'var(--accent)' }}>
                {formatTime(timeLeft)}
              </span>
            )}
          </div>
        </div>
      )}

      {!chaosMode && (
        <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1" style={{ WebkitOverflowScrolling: 'touch' }}>
          {selectedQuestions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrent(i)}
              className="w-8 h-8 shrink-0 rounded-full text-xs font-medium border transition-colors"
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
      )}

      <QuestionCard
        key={selectedQuestions[current].id}
        question={selectedQuestions[current]}
        onAnswer={(answer) => handleAnswer(selectedQuestions[current].id, answer)}
        userAnswer={answers[selectedQuestions[current].id]}
        showResult={!!timePerQuestion || chaosMode ? !!questionResults[selectedQuestions[current].id] : false}
        timePerQuestion={chaosMode ? undefined : timePerQuestion}
        onExplainError={handleExplainError}
        explanationLoading={aiLoading}
      />

      {aiExplanation && (
        <div className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--accent)' }}>
          <p className="text-xs font-medium mb-2" style={{ color: 'var(--accent)' }}>Объяснение от ИИ:</p>
          <p className="text-sm" style={{ color: 'var(--text)' }}>{aiExplanation}</p>
        </div>
      )}

      <div className="flex gap-2">
        {current > 0 && (
          <Button variant="secondary" onClick={() => setCurrent(current - 1)}>Назад</Button>
        )}
        {current < selectedQuestions.length - 1 ? (
          <Button onClick={() => setCurrent(current + 1)}>Далее</Button>
        ) : (
          <Button onClick={handleSubmit}>Завершить тест</Button>
        )}
      </div>
    </div>
  );
}
