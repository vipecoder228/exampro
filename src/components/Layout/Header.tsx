import { Sun, Moon, BookOpen, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeStore } from '../../store/useThemeStore';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/progress', label: 'Прогресс' },
  { to: '/sources', label: 'Источники' },
  { to: '/calculator', label: 'Калькулятор' },
];

export default function Header() {
  const { dark, toggle } = useThemeStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif font-bold text-xl" style={{ color: 'var(--primary)' }}>
          <BookOpen size={24} />
          ExamPro
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                location.pathname === link.to ? 'underline underline-offset-4' : ''
              }`}
              style={{ color: location.pathname === link.to ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-lg hover:opacity-80 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            title={dark ? 'Светлая тема' : 'Тёмная тема'}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: 'var(--text-secondary)' }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-2"
                style={{ color: location.pathname === link.to ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
