import { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadForm from '../components/CustomTest/UploadForm';
import QuestionCard from '../components/Exam/QuestionCard';
import { ArrowLeft } from 'lucide-react';
import type { Question } from '../types';

interface CustomQuestion {
  text: string;
  answer: string;
}

export default function CustomTestPage() {
  const [customQuestions, setCustomQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const handleUpload = (questions: CustomQuestion[]) => {
    const mapped: Question[] = questions.map((q, i) => ({
      id: `custom-${i}`,
      topicId: 'custom',
      text: q.text,
      type: 'input' as const,
      correctAnswer: q.answer,
      explanation: `Правильный ответ: ${q.answer}`,
      points: 1,
    }));
    setCustomQuestions(mapped);
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setShowResults((prev) => ({ ...prev, [questionId]: true }));
  };

  const score = customQuestions.filter((q) => {
    const userAns = answers[q.id];
    return userAns && String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
  }).length;

  if (customQuestions.length > 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => { setCustomQuestions([]); setAnswers({}); setShowResults({}); }}
          className="flex items-center gap-1 text-sm mb-4 hover:underline"
          style={{ color: 'var(--accent)' }}
        >
          <ArrowLeft size={16} />
          Назад
        </button>

        <div className="flex items-center justify-between mb-4">
          <h1 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Свой тест</h1>
          {Object.keys(showResults).length === customQuestions.length && (
            <span className="text-lg font-bold" style={{ color: 'var(--color-success)' }}>
              {score} / {customQuestions.length}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {customQuestions.map((q) => (
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

  return (
    <div className="max-w-xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Свой тест</h1>
      <UploadForm onUpload={handleUpload} />
    </div>
  );
}
