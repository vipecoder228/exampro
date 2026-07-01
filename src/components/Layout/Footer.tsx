import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t mt-auto" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-serif font-bold" style={{ color: 'var(--primary)' }}>
          <BookOpen size={20} />
          ExamPro
        </div>

        <div className="flex gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <Link to="/sources" className="hover:underline">Источники</Link>
          <Link to="/calculator" className="hover:underline">Калькулятор баллов</Link>
          <a href="https://fipi.ru" target="_blank" rel="noopener noreferrer" className="hover:underline">ФИПИ</a>
        </div>

        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          © 2026 ExamPro. Не является официальным ресурсом.
        </p>
      </div>
    </footer>
  );
}
