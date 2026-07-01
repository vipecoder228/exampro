import { useParams, Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { mathTopics, mathQuestions } from '../data/ege/math';
import { russianTopics, russianQuestions } from '../data/ege/russian';
import { physicsTopics, physicsQuestions } from '../data/ege/physics';
import QuestionCard from '../components/Exam/QuestionCard';
import BookmarkButton from '../components/Exam/BookmarkButton';
import ChatBot from '../components/AI/ChatBot';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const topicMap: Record<string, typeof mathTopics> = {
  math: mathTopics,
  russian: russianTopics,
  physics: physicsTopics,
};

const questionMap: Record<string, typeof mathQuestions> = {
  math: mathQuestions,
  russian: russianQuestions,
  physics: physicsQuestions,
};

export default function TopicPage() {
  const { id, topicId } = useParams<{ id: string; topicId: string }>();
  const subject = subjects.find((s) => s.id === id);
  const topics = topicMap[id ?? ''] ?? [];
  const topic = topics.find((t) => t.id === topicId);
  const questions = (questionMap[id ?? ''] ?? []).filter((q) => q.topicId === topicId);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  if (!subject || !topic) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Тема не найдена</h2>
        <Link to={id ? `/subject/${id}` : '/'} className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>Назад</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to={`/subject/${id}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        {subject.name}
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>{topic.title}</h1>

      <div className="border rounded-lg p-6 mb-8" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <div className="prose prose-sm max-w-none" style={{ color: 'var(--text)' }}>
          {topic.content.split('\n').map((line: string, i: number) => {
            if (line.startsWith('## ')) return <h2 key={i} className="font-serif text-lg font-bold mt-4 mb-2">{line.slice(3)}</h2>;
            if (line.startsWith('### ')) return <h3 key={i} className="font-serif text-base font-bold mt-3 mb-1">{line.slice(4)}</h3>;
            if (line.startsWith('- ')) return <li key={i} className="ml-4 text-sm">{line.slice(2)}</li>;
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="text-sm mb-2">{line}</p>;
          })}
        </div>

        {topic.formulas && topic.formulas.length > 0 && (
          <div className="mt-4 p-3 rounded-md" style={{ background: 'var(--border)' }}>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Формулы</p>
            <div className="flex flex-wrap gap-2">
              {topic.formulas.map((f: string, i: number) => (
                <span key={i} className="px-2 py-1 rounded text-xs font-mono" style={{ background: 'var(--card)', color: 'var(--accent)' }}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {questions.length > 0 && (
        <>
          <h2 className="font-serif text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Проверьте себя</h2>
          <div className="flex flex-col gap-4">
            {questions.map((q) => (
              <div key={q.id} className="relative">
                <div className="absolute top-3 right-3 z-10">
                  <BookmarkButton questionId={q.id} />
                </div>
                <QuestionCard
                  question={q}
                  onAnswer={(answer) => {
                    setAnswers((prev) => ({ ...prev, [q.id]: answer }));
                    setShowResults((prev) => ({ ...prev, [q.id]: true }));
                  }}
                  showResult={showResults[q.id]}
                  userAnswer={answers[q.id]}
                />
              </div>
            ))}
          </div>
        </>
      )}

      <ChatBot context={{ subject: subject.name, topic: topic.title }} />
    </div>
  );
}
