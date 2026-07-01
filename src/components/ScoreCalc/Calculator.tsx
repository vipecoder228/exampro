import { useState } from 'react';
import { primaryToTestScore, getScoreTable } from '../../lib/scoreTable';

const examKeys = [
  { key: 'ege-math', label: 'ЕГЭ Математика (профиль)' },
  { key: 'ege-russian', label: 'ЕГЭ Русский язык' },
  { key: 'ege-physics', label: 'ЕГЭ Физика' },
];

export default function Calculator() {
  const [examKey, setExamKey] = useState('ege-math');
  const [primary, setPrimary] = useState('');

  const table = getScoreTable(examKey);
  const maxPrimary = Object.keys(table).map(Number).reduce((a, b) => Math.max(a, b), 0);
  const testScore = primary ? primaryToTestScore(examKey, Number(primary)) : 0;

  return (
    <div className="border rounded-lg p-4 sm:p-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="font-serif font-bold mb-4" style={{ color: 'var(--primary)' }}>Калькулятор баллов</h3>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block" style={{ color: 'var(--text)' }}>Экзамен</label>
          <select
            value={examKey}
            onChange={(e) => { setExamKey(e.target.value); setPrimary(''); }}
            className="w-full px-3 py-2.5 rounded-md border text-sm outline-none min-h-[44px]"
            style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
          >
            {examKeys.map((e) => (
              <option key={e.key} value={e.key}>{e.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block" style={{ color: 'var(--text)' }}>
            Первичные баллы (0–{maxPrimary})
          </label>
          <input
            type="number"
            min={0}
            max={maxPrimary}
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
            className="w-full px-3 py-2 rounded-md border text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]"
            style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
            placeholder="Введите балл"
          />
        </div>

        {primary && Number(primary) >= 0 && Number(primary) <= maxPrimary && (
          <div className="text-center p-4 rounded-lg" style={{ background: 'var(--border)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Тестовый балл</p>
            <p className="text-3xl sm:text-4xl font-bold" style={{ color: testScore >= 60 ? 'var(--color-success)' : testScore >= 40 ? '#F59E0B' : 'var(--color-error)' }}>
              {testScore}
            </p>
          </div>
        )}

        {Object.keys(table).length > 0 && (
          <details className="text-sm">
            <summary className="cursor-pointer font-medium" style={{ color: 'var(--accent)' }}>
              Таблица перевода
            </summary>
            <div className="mt-2 max-h-48 overflow-y-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th className="text-left py-1" style={{ color: 'var(--text-secondary)' }}>Первичный</th>
                    <th className="text-left py-1" style={{ color: 'var(--text-secondary)' }}>Тестовый</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(table).map(([p, t]) => (
                    <tr key={p} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-1" style={{ color: 'var(--text)' }}>{p}</td>
                      <td className="py-1" style={{ color: 'var(--text)' }}>{t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
