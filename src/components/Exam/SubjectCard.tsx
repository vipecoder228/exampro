import { Calculator, BookOpen, Atom, FlaskConical, Leaf, Code, Landmark, Users, PenTool, Globe, Languages } from 'lucide-react';
import type { Subject } from '../../types';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';
import Card from '../ui/Card';
import { useProgressStore } from '../../store/useProgressStore';
import { useNavigate } from 'react-router-dom';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Calculator, BookOpen, Atom, FlaskConical, Leaf, Code, Landmark, Users, PenTool, Globe, Languages,
};

export default function SubjectCard({ subject }: { subject: Subject }) {
  const navigate = useNavigate();
  const progress = useProgressStore((s) => s.getSubjectProgress(subject.id));
  const Icon = iconMap[subject.icon] ?? BookOpen;

  return (
    <Card hover onClick={() => navigate(`/subject/${subject.id}`)}>
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-lg" style={{ background: 'var(--accent)', color: '#fff' }}>
          <Icon size={20} />
        </div>
        <div className="flex gap-1">
          {subject.examTypes.map((t) => (
            <Badge key={t} type={t} />
          ))}
        </div>
      </div>
      <h3 className="font-serif font-bold mb-1" style={{ color: 'var(--primary)' }}>{subject.name}</h3>
      <p className="text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>{subject.description}</p>
      <div className="flex items-center gap-2">
        <ProgressBar value={progress} className="flex-1" />
        <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{progress}%</span>
      </div>
    </Card>
  );
}
