import { useParams, Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { mathTopics } from '../data/ege/math';
import { russianTopics } from '../data/ege/russian';
import { physicsTopics } from '../data/ege/physics';
import TopicList from '../components/Exam/TopicList';
import Sidebar from '../components/Layout/Sidebar';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { useProgressStore } from '../store/useProgressStore';
import Button from '../components/ui/Button';

const topicMap: Record<string, typeof mathTopics> = {
  math: mathTopics,
  russian: russianTopics,
  physics: physicsTopics,
};

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>();
  const subject = subjects.find((s) => s.id === id);
  const topics = topicMap[id ?? ''] ?? [];
  const progress = useProgressStore((s) => s.getSubjectProgress(id ?? ''));

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
              {subject.examTypes.map((t) => <Badge key={t} type={t} />)}
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{subject.description}</p>
          </div>
          <Link to={`/test/${subject.id}`}>
            <Button>Пробный вариант</Button>
          </Link>
        </div>

        <div className="mb-6 p-4 rounded-lg border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Прогресс</span>
            <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>

        {topics.length > 0 ? (
          <TopicList topics={topics} subjectId={subject.id} />
        ) : (
          <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>Темы скоро будут добавлены</p>
          </div>
        )}
      </main>
    </div>
  );
}
