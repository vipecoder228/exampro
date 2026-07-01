import { useState, useEffect } from 'react';
import type { Question } from '../../types';
import Button from '../ui/Button';
import { CheckCircle, XCircle, Sparkles } from 'lucide-react';
import { playCorrect, playWrong } from '../../lib/sounds';
import { useThemeStore } from '../../store/useThemeStore';

interface Props {
  question: Question;
  onAnswer: (answer: string | string[]) => void;
  showResult?: boolean;
  userAnswer?: string | string[];
  timePerQuestion?: number;
  mode?: 'test' | 'practice' | 'learn';
  onExplainError?: (question: string, userAnswer: string, correctAnswer: string) => void;
  explanationLoading?: boolean;
}

export default function QuestionCard({ question, onAnswer, showResult, userAnswer, timePerQuestion, mode = 'test', onExplainError, explanationLoading }: Props) {
  const [selected, setSelected] = useState<string | string[]>('');
  const [inputValue, setInputValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(timePerQuestion ?? 0);
  const [elapsed, setElapsed] = useState(0);
  const [hintShown, setHintShown] = useState(false);

  useEffect(() => {
    if (userAnswer !== undefined) {
      if (question.type === 'input') {
        setInputValue(String(userAnswer));
      } else {
        setSelected(userAnswer);
      }
    } else {
      setSelected('');
      setInputValue('');
    }
  }, [question.id, userAnswer, question.type]);

  useEffect(() => {
    if (!timePerQuestion || showResult) return;
    setTimeLeft(timePerQuestion);
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          const answer = question.type === 'input' ? inputValue : selected;
          if (answer) onAnswer(answer);
          else onAnswer('');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [question.id, timePerQuestion, showResult]);

  useEffect(() => {
    if (showResult) return;
    setElapsed(0);
    const id = setInterval(() => setElapsed((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [question.id, showResult]);

  const handleSubmit = () => {
    const answer = question.type === 'input' ? inputValue : selected;
    if (answer) onAnswer(answer);
  };

  const norm = (v: string | string[]) => Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();
  const isCorrect = showResult && userAnswer !== undefined && norm(userAnswer) === norm(question.correctAnswer);
  const soundEnabled = useThemeStore((s) => s.soundEnabled);

  useEffect(() => {
    if (showResult && userAnswer !== undefined) {
      if (soundEnabled) {
        if (isCorrect) playCorrect(); else playWrong();
      }
    }
  }, [showResult]);

  return (
    <div className="border rounded-lg p-5" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <div className="flex items-center justify-between mb-4">
        <p className="font-medium flex-1" style={{ color: 'var(--text)' }}>{question.text}</p>
        {timePerQuestion && !showResult && (
          <div className="ml-3 flex items-center gap-2">
            <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(timeLeft / timePerQuestion) * 100}%`,
                  background: timeLeft <= 10 ? 'var(--color-error)' : 'var(--accent)',
                }}
              />
            </div>
            <span className={`text-sm font-mono font-bold ${timeLeft <= 10 ? 'animate-pulse' : ''}`}
              style={{ color: timeLeft <= 10 ? 'var(--color-error)' : 'var(--text-secondary)', minWidth: '2rem', textAlign: 'right' }}>
              {timeLeft}
            </span>
          </div>
        )}
        {!timePerQuestion && !showResult && elapsed > 0 && (
          <span className="ml-3 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
            {elapsed}с
          </span>
        )}
      </div>

      {mode === 'learn' && !showResult && question.explanation && (
        <div className="mb-4">
          {!hintShown ? (
            <button
              onClick={() => setHintShown(true)}
              className="text-xs underline"
              style={{ color: 'var(--accent)' }}
            >
              Показать подсказку
            </button>
          ) : (
            <div className="p-3 rounded-md text-xs" style={{ background: 'var(--border)', color: 'var(--text-secondary)' }}>
              {question.explanation.split('.').slice(0, 2).join('.') + '.'}
            </div>
          )}
        </div>
      )}

      {question.type === 'choice' && question.options && (
        <div className="flex flex-col gap-2 mb-4">
          {question.options.map((opt) => {
            const isSelected = selected === opt;
            const isOptCorrect = showResult && norm(opt) === norm(question.correctAnswer);
            const isOptWrong = showResult && isSelected && !isOptCorrect;

            return (
              <button
                key={opt}
                onClick={() => !showResult && setSelected(opt)}
                className="text-left px-4 py-2 rounded-md border text-sm transition-colors"
                style={{
                  background: isOptCorrect
                    ? 'var(--color-success)'
                    : isOptWrong
                    ? 'var(--color-error)'
                    : isSelected
                    ? 'var(--accent)'
                    : 'transparent',
                  color: isOptCorrect || isOptWrong || isSelected ? '#fff' : 'var(--text)',
                  borderColor: isOptCorrect ? 'var(--color-success)' : isOptWrong ? 'var(--color-error)' : 'var(--border)',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'input' && (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={showResult}
          placeholder="Введите ответ..."
          className="w-full px-3 py-2 rounded-md border text-sm mb-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
          style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
        />
      )}

      {!showResult && (
        <Button onClick={handleSubmit} disabled={question.type === 'choice' ? !selected : !inputValue.trim()}>
          Ответить
        </Button>
      )}

      {showResult && (
        <div className="mt-3 p-3 rounded-md text-sm" style={{ background: 'var(--border)' }}>
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle size={16} style={{ color: 'var(--color-success)' }} />
            ) : (
              <XCircle size={16} style={{ color: 'var(--color-error)' }} />
            )}
            <span className="font-medium" style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-error)' }}>
              {isCorrect ? 'Правильно!' : 'Неправильно'}
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{question.explanation}</p>
          {!isCorrect && (
            <p className="mt-1 font-medium" style={{ color: 'var(--text)' }}>
              Правильный ответ: {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}
            </p>
          )}
          {!isCorrect && onExplainError && (
            <button
              onClick={() => onExplainError(
                question.text,
                Array.isArray(userAnswer) ? userAnswer.join(', ') : String(userAnswer ?? ''),
                Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : String(question.correctAnswer)
              )}
              disabled={explanationLoading}
              className="mt-2 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
              style={{ background: 'var(--accent)', color: '#fff', opacity: explanationLoading ? 0.6 : 1 }}
            >
              <Sparkles size={12} />
              {explanationLoading ? 'Думаю...' : 'Объяснить с ИИ'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
