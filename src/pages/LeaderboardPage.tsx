import { Link } from 'react-router-dom';
import RatingTable from '../components/Leaderboard/RatingTable';
import { ArrowLeft } from 'lucide-react';

export default function LeaderboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Рейтинг</h1>
      <RatingTable />
    </div>
  );
}
