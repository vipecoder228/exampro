import { Link } from 'react-router-dom';
import type { Topic } from '../../types';
import Card from '../ui/Card';

export default function TopicList({ topics, subjectId }: { topics: Topic[]; subjectId: string }) {
  return (
    <div className="flex flex-col gap-3">
      {topics.map((topic, i) => (
        <Link key={topic.id} to={`/subject/${subjectId}/topic/${topic.id}`} className="block">
          <Card hover>
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {i + 1}
              </span>
              <div>
                <h4 className="font-medium" style={{ color: 'var(--text)' }}>{topic.title}</h4>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{topic.description}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
