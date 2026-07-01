import { Link, useParams } from 'react-router-dom';
import { subjects } from '../../data/subjects';
import { useProgressStore } from '../../store/useProgressStore';

export default function Sidebar() {
  const { id } = useParams();
  const getSubjectProgress = useProgressStore((s) => s.getSubjectProgress);

  return (
    <aside
      className="w-64 shrink-0 border-r hidden lg:block p-4"
      style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
    >
      <h3 className="font-serif font-bold text-sm mb-4" style={{ color: 'var(--primary)' }}>
        Предметы
      </h3>
      <nav className="flex flex-col gap-1">
        {subjects.map((s) => {
          const progress = getSubjectProgress(s.id);
          return (
            <Link
              key={s.id}
              to={`/subject/${s.id}`}
              className="flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors hover:opacity-80"
              style={{
                background: id === s.id ? 'var(--accent)' : 'transparent',
                color: id === s.id ? '#fff' : 'var(--text)',
              }}
            >
              <span>{s.name}</span>
              {progress > 0 && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: id === s.id ? 'rgba(255,255,255,0.2)' : 'var(--border)', color: id === s.id ? '#fff' : 'var(--text-secondary)' }}
                >
                  {progress}%
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
