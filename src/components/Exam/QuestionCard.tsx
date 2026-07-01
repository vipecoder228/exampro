import { useState } from 'react';
import type { Question } from '../../types';
import Button from '../ui/Button';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (answer: string | string[]) => void;
  showResult?: boolean;
  userAnswer?: string | string[];
}

export default function QuestionCard({ question, onAnswer, showResult, userAnswer }: Props) {
  const [selected, setSelected] = useState<string | string[]>('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    const answer = question.type === 'input' ? inputValue : selected;
    if (answer) onAnswer(answer);
  };

  const isCorrect = showResult && userAnswer !== undefined && Array.isArray(question.correctAnswer)
    ? JSON.stringify([...(userAnswer as string[])].sort()) === JSON.stringify([...question.correctAnswer].sort())
    : showResult && userAnswer !== undefined && String(userAnswer).trim().toLowerCase() === String(question.correctAnswer).trim().toLowerCase();

  return (
    <div className="border rounded-lg p-5" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <p className="font-medium mb-4" style={{ color: 'var(--text)' }}>{question.text}</p>

      {question.type === 'choice' && question.options && (
        <div className="flex flex-col gap-2 mb-4">
          {question.options.map((opt) => {
            const isSelected = selected === opt;
            const isOptCorrect = showResult && opt === question.correctAnswer;
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
        </div>
      )}
    </div>
  );
}
