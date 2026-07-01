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
import TopicList from '../components/Exam/TopicList';
import TopicHeatMap from '../components/Stats/TopicHeatMap';
import Sidebar from '../components/Layout/Sidebar';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { useProgressStore } from '../store/useProgressStore';
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

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const examType: ExamType = (searchParams.get('type') as ExamType) || 'ege';
  const subject = subjects.find((s) => s.id === id);
  const topics = examType === 'oge' ? (ogeTopicMap[id ?? ''] ?? []) : (egeTopicMap[id ?? ''] ?? []);
  const questions = examType === 'oge' ? (ogeQuestionMap[id ?? ''] ?? []) : (egeQuestionMap[id ?? ''] ?? []);
  const progress = useProgressStore((s) => s.getSubjectProgress(id ?? ''));

  const toggleExamType = (type: ExamType) => {
    setSearchParams({ type });
  };

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Предмет не найден</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  return (
    <div className="flex gap-6 max-w-6xl mx-auto">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="font-serif text-2xl font-bold" style={{ color: 'var(--primary)' }}>{subject.name}</h1>
              {subject.examTypes.length > 1 ? (
                <div className="flex gap-1">
                  {subject.examTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleExamType(t)}
                      className="px-2 py-0.5 rounded-full text-xs font-bold transition-all"
                      style={{
                        background: examType === t ? 'var(--accent)' : 'var(--border)',
                        color: examType === t ? '#fff' : 'var(--text-secondary)',
                      }}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                </div>
              ) : (
                subject.examTypes.map((t) => <Badge key={t} type={t} />)
              )}
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{subject.description}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Link to={`/test/${subject.id}?type=${examType}`}>
              <Button>Пробный вариант</Button>
            </Link>
            <Link to={`/subject/${subject.id}/practice?type=${examType}`}>
              <Button variant="secondary">Тренировка</Button>
            </Link>
            <Link to={`/blitz/${subject.id}?type=${examType}`}>
              <Button variant="secondary">Блitz</Button>
            </Link>
            <Link to={`/formulas/${subject.id}?type=${examType}`}>
              <Button variant="secondary">Формулы</Button>
            </Link>
          </div>
        </div>

        <div className="mb-6 p-4 rounded-lg border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Прогресс</span>
            <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>

        <TopicHeatMap topics={topics} questions={questions} subjectId={subject.id} examType={examType} />

        {topics.length > 0 ? (
          <TopicList topics={topics} subjectId={subject.id} examType={examType} />
        ) : (
          <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>
              {examType === 'oge' ? 'ОГЭ-данные для этого предмета скоро будут добавлены' : 'Темы скоро будут добавлены'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
