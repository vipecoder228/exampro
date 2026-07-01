import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { useProgressStore } from '../store/useProgressStore';
import { subjects } from '../data/subjects';
import { mathQuestions as egeMathQ } from '../data/ege/math';
import { russianQuestions as egeRussianQ } from '../data/ege/russian';
import { physicsQuestions as egePhysicsQ } from '../data/ege/physics';
import { chemistryQuestions as egeChemistryQ } from '../data/ege/chemistry';
import { biologyQuestions as egeBiologyQ } from '../data/ege/biology';
import { informaticsQuestions as egeInformaticsQ } from '../data/ege/informatics';
import { historyQuestions as egeHistoryQ } from '../data/ege/history';
import { socialQuestions as egeSocialQ } from '../data/ege/social';
import { literatureQuestions as egeLiteratureQ } from '../data/ege/literature';
import { geographyQuestions as egeGeographyQ } from '../data/ege/geography';
import { englishQuestions as egeEnglishQ } from '../data/ege/english';
import { mathQuestions as ogeMathQ } from '../data/oge/math';
import { russianQuestions as ogeRussianQ } from '../data/oge/russian';
import { physicsQuestions as ogePhysicsQ } from '../data/oge/physics';
import { chemistryQuestions as ogeChemistryQ } from '../data/oge/chemistry';
import { biologyQuestions as ogeBiologyQ } from '../data/oge/biology';
import { historyQuestions as ogeHistoryQ } from '../data/oge/history';
import { socialQuestions as ogeSocialQ } from '../data/oge/social';
import { geographyQuestions as ogeGeographyQ } from '../data/oge/geography';
import { englishQuestions as ogeEnglishQ } from '../data/oge/english';
import { useState } from 'react';

const allQuestions = [
  ...egeMathQ, ...egeRussianQ, ...egePhysicsQ, ...egeChemistryQ,
  ...egeBiologyQ, ...egeInformaticsQ, ...egeHistoryQ, ...egeSocialQ,
  ...egeLiteratureQ, ...egeGeographyQ, ...egeEnglishQ,
  ...ogeMathQ, ...ogeRussianQ, ...ogePhysicsQ, ...ogeChemistryQ,
  ...ogeBiologyQ, ...ogeHistoryQ, ...ogeSocialQ,
  ...ogeGeographyQ, ...ogeEnglishQ,
];

const questionMap = new Map(allQuestions.map(q => [q.id, q]));

const norm = (v: string | string[]) =>
  Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();

export default function ReviewPage() {
  const getWrongAnswers = useProgressStore((s) => s.getWrongAnswers);
  const wrongAnswers = getWrongAnswers();
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const wrongWithQuestions = wrongAnswers
    .map(w => ({ ...w, question: questionMap.get(w.questionId) }))
    .filter(w => w.question && norm(w.userAnswer) !== norm(w.question!.correctAnswer))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const toggleReveal = (id: string) => {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Повторение ошибок</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
        {wrongWithQuestions.length > 0
          ? `${wrongWithQuestions.length} вопросов для повторения`
          : 'Пока нет ошибок для повторения'}
      </p>

      {wrongWithQuestions.length === 0 ? (
        <div className="border rounded-lg p-12 text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <RotateCcw size={48} className="mx-auto mb-4" style={{ color: 'var(--text-secondary)' }} />
          <p className="text-lg font-bold mb-2" style={{ color: 'var(--primary)' }}>Отлично!</p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Нет вопросов для повторения. Решай тесты, чтобы добавить сюда ошибки.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {wrongWithQuestions.map((item) => {
            const q = item.question!;
            const isRevealed = revealed.has(item.questionId);
            const subject = subjects.find(s => s.id === item.subjectId);

            return (
              <div
                key={item.questionId}
                className="border rounded-lg p-4 cursor-pointer transition-all"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                onClick={() => toggleReveal(item.questionId)}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--border)', color: 'var(--text-secondary)' }}>
                    {subject?.name ?? item.subjectId}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {new Date(item.date).toLocaleDateString('ru-RU')}
                  </span>
                </div>

                <p className="font-medium text-sm mb-2" style={{ color: 'var(--text)' }}>{q.text}</p>

                {isRevealed && (
                  <div className="mt-3 p-3 rounded-md text-sm" style={{ background: 'var(--border)' }}>
                    <p className="mb-1">
                      <span style={{ color: 'var(--color-error)' }}>Твой ответ: </span>
                      <span style={{ color: 'var(--text)' }}>{String(item.userAnswer)}</span>
                    </p>
                    <p>
                      <span style={{ color: 'var(--color-success)' }}>Правильный: </span>
                      <span style={{ color: 'var(--text)' }}>
                        {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                      </span>
                    </p>
                    {q.explanation && (
                      <p className="mt-2 text-xs" style={{ color: 'var(--text-secondary)' }}>{q.explanation}</p>
                    )}
                  </div>
                )}

                {!isRevealed && (
                  <p className="text-xs" style={{ color: 'var(--accent)' }}>Нажми, чтобы увидеть ответ</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
