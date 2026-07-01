import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
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
import TestRunner from '../components/Exam/TestRunner';
import { ArrowLeft } from 'lucide-react';
import type { ExamType } from '../types';

const egeQuestionMap: Record<string, typeof egeMath> = {
  math: egeMath, russian: egeRussian, physics: egePhysics, chemistry: egeChemistry,
  biology: egeBiology, informatics: egeInformatics, history: egeHistory,
  social: egeSocial, literature: egeLiterature, geography: egeGeography, english: egeEnglish,
};

const ogeQuestionMap: Record<string, typeof ogeMath> = {
  math: ogeMath, russian: ogeRussian, physics: ogePhysics, chemistry: ogeChemistry,
  biology: ogeBiology, history: ogeHistory,
  social: ogeSocial, geography: ogeGeography, english: ogeEnglish,
};

export default function TestPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const examType: ExamType = (searchParams.get('type') as ExamType) || 'ege';
  const subject = subjects.find((s) => s.id === id);
  const questions = examType === 'oge' ? (ogeQuestionMap[id ?? ''] ?? []) : (egeQuestionMap[id ?? ''] ?? []);
  const examKey = `${examType}-${subject?.id}`;
  const label = examType === 'oge' ? 'ОГЭ' : 'ЕГЭ';
  const [timePerQuestion, setTimePerQuestion] = useState<number | undefined>(undefined);

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Предмет не найден</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />
          {subject.name}
        </Link>
        <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Тесты ({label}) для этого предмета скоро будут добавлены</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        {subject.name}
      </Link>
      <div className="border rounded-lg p-6 mb-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <h3 className="font-serif font-bold mb-3" style={{ color: 'var(--primary)' }}>Настройки теста</h3>
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Время на каждый вопрос (необязательно):</p>
        <div className="flex gap-2">
          {[undefined, 30, 60, 90].map((t) => (
            <button
              key={String(t)}
              onClick={() => setTimePerQuestion(t)}
              className="px-4 py-2 rounded-lg text-sm font-medium border transition-all"
              style={{
                background: timePerQuestion === t ? 'var(--accent)' : 'transparent',
                color: timePerQuestion === t ? '#fff' : 'var(--text)',
                borderColor: timePerQuestion === t ? 'var(--accent)' : 'var(--border)',
              }}
            >
              {t ? `${t}с` : 'Без таймера'}
            </button>
          ))}
        </div>
      </div>
      <TestRunner
        questions={questions}
        subjectId={subject.id}
        examKey={examKey}
        title={`Пробный вариант (${label}) — ${subject.name}`}
        timeMinutes={examType === 'oge' ? 45 : 60}
        timePerQuestion={timePerQuestion}
      />
    </div>
  );
}
