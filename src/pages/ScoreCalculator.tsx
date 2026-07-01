import { Link } from 'react-router-dom';
import Calculator from '../components/ScoreCalc/Calculator';
import { ArrowLeft } from 'lucide-react';

export default function ScoreCalculator() {
  return (
    <div className="max-w-xl mx-auto">
      <Link to="/" className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        На главную
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Калькулятор баллов</h1>
      <Calculator />
    </div>
  );
}
