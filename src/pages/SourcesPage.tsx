import { Link } from 'react-router-dom';
import { sources } from '../data/sources';
import { ArrowLeft, ExternalLink, Shield, Star } from 'lucide-react';

export default function SourcesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Доверенные источники</h1>
      <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
        Все материалы на ExamPro основаны на официальных и проверенных источниках
      </p>

      <div className="flex flex-col gap-4">
        {sources.map((source) => (
          <div key={source.id} className="border rounded-lg p-5" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif font-bold" style={{ color: 'var(--primary)' }}>{source.name}</h3>
                  {source.status === 'verified' ? (
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--color-success)', color: '#fff' }}>
                      <Shield size={10} />
                      Проверено
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ background: '#F59E0B', color: '#fff' }}>
                      <Star size={10} />
                      Рекомендовано
                    </span>
                  )}
                </div>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{source.description}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  {source.url}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
