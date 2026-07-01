import { Home, BookOpen, BarChart3, MoreHorizontal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const tabs = [
  { to: '/', label: 'Главная', icon: Home },
  { to: '/daily', label: 'Задание', icon: BookOpen },
  { to: '/progress', label: 'Прогресс', icon: BarChart3 },
];

const moreLinks = [
  { to: '/daily', label: 'Задание дня' },
  { to: '/review', label: 'Повторение ошибок' },
  { to: '/leaderboard', label: 'Достижения' },
  { to: '/compare', label: 'Сравнение' },
  { to: '/calculator', label: 'Калькулятор' },
  { to: '/custom', label: 'Свой тест' },
  { to: '/sources', label: 'Источники' },
];

export default function BottomNav() {
  const location = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {moreOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {moreOpen && (
        <div
          className="fixed bottom-20 left-4 right-4 z-50 rounded-xl shadow-xl border p-3"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <p className="text-xs font-medium mb-2 px-2" style={{ color: 'var(--text-secondary)' }}>Ещё</p>
          <div className="grid grid-cols-2 gap-1">
            {moreLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMoreOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center"
                style={{
                  color: location.pathname === link.to ? 'var(--accent)' : 'var(--text)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab.to);
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className="flex flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[48px] py-1"
                style={{ color: active ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            );
          })}
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex flex-col items-center justify-center gap-0.5 min-w-[64px] min-h-[48px] py-1"
            style={{ color: moreOpen ? 'var(--accent)' : 'var(--text-secondary)' }}
          >
            <MoreHorizontal size={20} />
            <span className="text-[10px] font-medium">Ещё</span>
          </button>
        </div>
      </nav>
    </>
  );
}
