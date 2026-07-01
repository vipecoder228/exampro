import type { Topic, Question } from '../../types';
import { useProgressStore } from '../../store/useProgressStore';
import { computeTopicProgress } from '../../lib/topicProgress';
import { Link } from 'react-router-dom';

interface Props {
  topics: Topic[];
  questions: Question[];
  subjectId: string;
  examType?: string;
}

export default function TopicHeatMap({ topics, questions, subjectId, examType = 'ege' }: Props) {
  const results = useProgressStore((s) => s.results);
  const progress = computeTopicProgress(topics, questions, results, subjectId);

  if (topics.length === 0) return null;

  const getColor = (percent: number, total: number) => {
    if (total === 0) return 'var(--border)';
    if (percent >= 80) return '#16A34A';
    if (percent >= 60) return '#F59E0B';
    if (percent >= 40) return '#F97316';
    return '#DC2626';
  };

  const getTextColor = (_percent: number, total: number) => {
    if (total === 0) return 'var(--text-secondary)';
    return '#fff';
  };

  return (
    <div className="mb-6">
      <h3 className="font-serif text-sm font-bold mb-3" style={{ color: 'var(--text-secondary)' }}>
        Прогресс по темам
      </h3>
      <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ WebkitOverflowScrolling: 'touch' }}>
        {topics.map((topic) => {
          const stats = progress.get(topic.id);
          const percent = stats?.percent ?? 0;
          const total = stats?.total ?? 0;
          return (
            <Link
              key={topic.id}
              to={`/subject/${subjectId}/topic/${topic.id}?type=${examType}`}
              className="group relative"
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-110"
                style={{ background: getColor(percent, total), color: getTextColor(percent, total) }}
                title={`${topic.title}: ${total > 0 ? `${percent}% (${stats!.correct}/${total})` : 'нет данных'}`}
              >
                {total > 0 ? percent : '—'}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: '#16A34A' }} /> 80%+</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: '#F59E0B' }} /> 60-79%</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: '#F97316' }} /> 40-59%</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: '#DC2626' }} /> &lt;40%</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded" style={{ background: 'var(--border)' }} /> —</span>
      </div>
    </div>
  );
}
