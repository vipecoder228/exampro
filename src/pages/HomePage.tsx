import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import SubjectCard from '../components/Exam/SubjectCard';
import DailyChallenge from '../components/Daily/DailyChallenge';
import StreakBadge from '../components/Daily/StreakBadge';
import { useProgressStore } from '../store/useProgressStore';
import { Skull, Zap, Flame } from 'lucide-react';

export default function HomePage() {
  const streak = useProgressStore((s) => s.streak);

  return (
    <div className="max-w-6xl mx-auto px-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
            Подготовка к ЕГЭ и ОГЭ
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Все предметы. Доверенные источники. ИИ-помощник.
          </p>
        </div>
        {streak > 0 && <StreakBadge streak={streak} />}
      </div>

      <div className="mb-6">
        <DailyChallenge />
      </div>

      <Link to="/chaos/math?type=ege" className="block mb-6">
        <div
          className="border-2 rounded-lg p-5 transition-all hover:scale-[1.01]"
          style={{ background: 'linear-gradient(135deg, #1F1F1F, #2D1B1B)', borderColor: '#EF4444' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#EF4444' }}>
              <Skull size={22} color="#fff" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg" style={{ color: '#EF4444' }}>Режим Армагеддон</h3>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Рандом · Хаос · Ловушки</p>
            </div>
          </div>
          <div className="flex gap-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
            <div className="flex items-center gap-1">
              <Zap size={12} style={{ color: '#F59E0B' }} />
              <span>Рандомное время</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame size={12} style={{ color: '#EF4444' }} />
              <span>Бонусы x2</span>
            </div>
            <div className="flex items-center gap-1">
              <Skull size={12} style={{ color: '#7C3AED' }} />
              <span>Ловушки</span>
            </div>
          </div>
        </div>
      </Link>

      <h2 className="font-serif text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Предметы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
