import { useParams, Link, useSearchParams } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { mathTopics as egeMathT, mathQuestions as egeMathQ } from '../data/ege/math';
import { russianTopics as egeRussianT, russianQuestions as egeRussianQ } from '../data/ege/russian';
import { physicsTopics as egePhysicsT, physicsQuestions as egePhysicsQ } from '../data/ege/physics';
import { chemistryTopics as egeChemistryT, chemistryQuestions as egeChemistryQ } from '../data/ege/chemistry';
import { biologyTopics as egeBiologyT, biologyQuestions as egeBiologyQ } from '../data/ege/biology';
import { informaticsTopics as egeInformaticsT, informaticsQuestions as egeInformaticsQ } from '../data/ege/informatics';
import { historyTopics as egeHistoryT, historyQuestions as egeHistoryQ } from '../data/ege/history';
import { socialTopics as egeSocialT, socialQuestions as egeSocialQ } from '../data/ege/social';
import { literatureTopics as egeLiteratureT, literatureQuestions as egeLiteratureQ } from '../data/ege/literature';
import { geographyTopics as egeGeographyT, geographyQuestions as egeGeographyQ } from '../data/ege/geography';
import { englishTopics as egeEnglishT, englishQuestions as egeEnglishQ } from '../data/ege/english';
import { mathTopics as ogeMathT, mathQuestions as ogeMathQ } from '../data/oge/math';
import { russianTopics as ogeRussianT, russianQuestions as ogeRussianQ } from '../data/oge/russian';
import { physicsTopics as ogePhysicsT, physicsQuestions as ogePhysicsQ } from '../data/oge/physics';
import { chemistryTopics as ogeChemistryT, chemistryQuestions as ogeChemistryQ } from '../data/oge/chemistry';
import { biologyTopics as ogeBiologyT, biologyQuestions as ogeBiologyQ } from '../data/oge/biology';
import { historyTopics as ogeHistoryT, historyQuestions as ogeHistoryQ } from '../data/oge/history';
import { socialTopics as ogeSocialT, socialQuestions as ogeSocialQ } from '../data/oge/social';
import { geographyTopics as ogeGeographyT, geographyQuestions as ogeGeographyQ } from '../data/oge/geography';
import { englishTopics as ogeEnglishT, englishQuestions as ogeEnglishQ } from '../data/oge/english';
import { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import type { ExamType } from '../types';

const egeTopicMap: Record<string, typeof egeMathT> = {
  math: egeMathT, russian: egeRussianT, physics: egePhysicsT, chemistry: egeChemistryT,
  biology: egeBiologyT, informatics: egeInformaticsT, history: egeHistoryT,
  social: egeSocialT, literature: egeLiteratureT, geography: egeGeographyT, english: egeEnglishT,
};
const ogeTopicMap: Record<string, typeof ogeMathT> = {
  math: ogeMathT, russian: ogeRussianT, physics: ogePhysicsT, chemistry: ogeChemistryT,
  biology: ogeBiologyT, history: ogeHistoryT,
  social: ogeSocialT, geography: ogeGeographyT, english: ogeEnglishT,
};
const egeQuestionMap: Record<string, typeof egeMathQ> = {
  math: egeMathQ, russian: egeRussianQ, physics: egePhysicsQ, chemistry: egeChemistryQ,
  biology: egeBiologyQ, informatics: egeInformaticsQ, history: egeHistoryQ,
  social: egeSocialQ, literature: egeLiteratureQ, geography: egeGeographyQ, english: egeEnglishQ,
};
const ogeQuestionMap: Record<string, typeof ogeMathQ> = {
  math: ogeMathQ, russian: ogeRussianQ, physics: ogePhysicsQ, chemistry: ogeChemistryQ,
  biology: ogeBiologyQ, history: ogeHistoryQ,
  social: ogeSocialQ, geography: ogeGeographyQ, english: ogeEnglishQ,
};

const norm = (v: string | string[]) =>
  Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();

export default function LearnPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const examType: ExamType = (searchParams.get('type') as ExamType) || 'ege';
  const subject = subjects.find((s) => s.id === id);
  const topics = examType === 'oge' ? (ogeTopicMap[id ?? ''] ?? []) : (egeTopicMap[id ?? ''] ?? []);
  const allQuestions = examType === 'oge' ? (ogeQuestionMap[id ?? ''] ?? []) : (egeQuestionMap[id ?? ''] ?? []);

  const [topicIndex, setTopicIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [phase, setPhase] = useState<'theory' | 'practice'>('theory');

  const topic = topics[topicIndex];
  const topicQuestions = topic ? allQuestions.filter((q) => q.topicId === topic.id) : [];
  const currentQuestion = topicQuestions[questionIndex];

  if (!subject || !topic) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Темы не найдены</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  const nextQuestion = () => {
    setShowAnswer(false);
    if (questionIndex < topicQuestions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else {
      nextTopic();
    }
  };

  const nextTopic = () => {
    setPhase('theory');
    setQuestionIndex(0);
    setShowAnswer(false);
    if (topicIndex < topics.length - 1) {
      setTopicIndex((i) => i + 1);
    }
  };

  const prevTopic = () => {
    if (topicIndex > 0) {
      setPhase('theory');
      setQuestionIndex(0);
      setShowAnswer(false);
      setTopicIndex((i) => i - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        {subject.name}
      </Link>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
            Тема {topicIndex + 1} из {topics.length}
          </p>
          <h1 className="font-serif text-2xl font-bold" style={{ color: 'var(--primary)' }}>{topic.title}</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevTopic}
            disabled={topicIndex === 0}
            className="p-2 rounded-lg border transition-colors disabled:opacity-30"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTopic}
            disabled={topicIndex === topics.length - 1}
            className="p-2 rounded-lg border transition-colors disabled:opacity-30"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {phase === 'theory' ? (
        <div className="border rounded-lg p-6 mb-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={20} style={{ color: 'var(--accent)' }} />
            <h2 className="font-serif font-bold" style={{ color: 'var(--primary)' }}>Теория</h2>
          </div>
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
          {topicQuestions.length > 0 ? (
            <div className="mt-6">
              <Button onClick={() => setPhase('practice')}>Перейти к вопросам ({topicQuestions.length})</Button>
            </div>
          ) : (
            <div className="mt-6">
              <Button onClick={nextTopic}>Следующая тема</Button>
            </div>
          )}
        </div>
      ) : (
        <div className="border rounded-lg p-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Вопрос {questionIndex + 1} из {topicQuestions.length}
            </p>
          </div>

          {currentQuestion && (
            <>
              <p className="font-medium mb-4" style={{ color: 'var(--text)' }}>{currentQuestion.text}</p>

              {currentQuestion.type === 'choice' && currentQuestion.options && (
                <div className="flex flex-col gap-2 mb-4">
                  {currentQuestion.options.map((opt) => {
                    const isCorrect = norm(opt) === norm(currentQuestion.correctAnswer);
                    const showCorrect = showAnswer && isCorrect;
                    return (
                      <button
                        key={opt}
                        disabled={showAnswer}
                        onClick={() => setShowAnswer(true)}
                        className="text-left px-4 py-2 rounded-md border text-sm transition-colors"
                        style={{
                          background: showCorrect ? 'var(--color-success)' : 'transparent',
                          color: showCorrect ? '#fff' : 'var(--text)',
                          borderColor: showCorrect ? 'var(--color-success)' : 'var(--border)',
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'input' && !showAnswer && (
                <Button onClick={() => setShowAnswer(true)} className="mb-4">Показать ответ</Button>
              )}

              {showAnswer && (
                <div className="mt-3 p-3 rounded-md text-sm" style={{ background: 'var(--border)' }}>
                  <p className="font-medium mb-1" style={{ color: 'var(--color-success)' }}>
                    Правильный ответ: {Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.join(', ') : currentQuestion.correctAnswer}
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>{currentQuestion.explanation}</p>
                </div>
              )}

              {showAnswer && (
                <div className="mt-4">
                  <Button onClick={nextQuestion}>
                    {questionIndex < topicQuestions.length - 1 ? 'Следующий вопрос' : 'Следующая тема'}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
