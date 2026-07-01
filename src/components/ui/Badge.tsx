import type { ExamType } from '../../types';

const labels: Record<ExamType, string> = { ege: 'ЕГЭ', oge: 'ОГЭ' };
const colors: Record<ExamType, string> = {
  ege: 'bg-[var(--accent)] text-white',
  oge: 'bg-[var(--color-success)] text-white',
};

export default function Badge({ type }: { type: ExamType }) {
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors[type]}`}>
      {labels[type]}
    </span>
  );
}
