import { useParams, Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { mathQuestions } from '../data/ege/math';
import { russianQuestions } from '../data/ege/russian';
import { physicsQuestions } from '../data/ege/physics';
import TestRunner from '../components/Exam/TestRunner';
import { ArrowLeft } from 'lucide-react';

const questionMap: Record<string, typeof mathQuestions> = {
  math: mathQuestions,
  russian: russianQuestions,
  physics: physicsQuestions,
};

export default function TestPage() {
  const { id } = useParams<{ id: string }>();
  const subject = subjects.find((s) => s.id === id);
  const questions = questionMap[id ?? ''] ?? [];

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
        <Link to={`/subject/${id}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />
          {subject.name}
        </Link>
        <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Тесты для этого предмета скоро будут добавлены</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to={`/subject/${id}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        {subject.name}
      </Link>
      <TestRunner
        questions={questions}
        subjectId={subject.id}
        examKey={`ege-${subject.id}`}
        title={`Пробный вариант — ${subject.name}`}
      />
    </div>
  );
}
