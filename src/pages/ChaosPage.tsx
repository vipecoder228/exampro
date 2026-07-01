import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { subjects } from '../data/subjects';
import { mathQuestions as egeMath } from '../data/ege/math';
import { russianQuestions as egeRussian } from '../data/ege/russian';
import { physicsQuestions as egePhysics } from '../data/ege/physics';
import { chemistryQuestions as egeChemistry } from '../data/ege/chemistry';
import { biologyQuestions as egeBiology } from '../data/ege/biology';
import { informaticsQuestions as egeInformatics } from '../data/ege/informatics';
import { historyQuestions as egeHistory } from '../data/ege/history';
import { socialQuestions as egeSocial } from '../data/ege/social';
import { literatureQuestions as egeLiterature } from '../data/ege/literature';
import { geographyQuestions as egeGeography } from '../data/ege/geography';
import { englishQuestions as egeEnglish } from '../data/ege/english';
import { mathQuestions as ogeMath } from '../data/oge/math';
import { russianQuestions as ogeRussian } from '../data/oge/russian';
import { physicsQuestions as ogePhysics } from '../data/oge/physics';
import { chemistryQuestions as ogeChemistry } from '../data/oge/chemistry';
import { biologyQuestions as ogeBiology } from '../data/oge/biology';
import { historyQuestions as ogeHistory } from '../data/oge/history';
import { socialQuestions as ogeSocial } from '../data/oge/social';
import { geographyQuestions as ogeGeography } from '../data/oge/geography';
import { englishQuestions as ogeEnglish } from '../data/oge/english';
import TestRunner from '../components/Exam/TestRunner';
import { ArrowLeft, Zap, Flame, Skull } from 'lucide-react';
import { applyChaos } from '../lib/chaos';
import type { ExamType } from '../types';

const egeMap: Record<string, typeof egeMath> = {
  math: egeMath, russian: egeRussian, physics: egePhysics, chemistry: egeChemistry,
  biology: egeBiology, informatics: egeInformatics, history: egeHistory,
  social: egeSocial, literature: egeLiterature, geography: egeGeography, english: egeEnglish,
};

const ogeMap: Record<string, typeof ogeMath> = {
  math: ogeMath, russian: ogeRussian, physics: ogePhysics, chemistry: ogeChemistry,
  biology: ogeBiology, history: ogeHistory, social: ogeSocial,
  geography: ogeGeography, english: ogeEnglish,
};

const COUNT_OPTIONS = [10, 25, 50, 100, 0] as const;

export default function ChaosPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const examType: ExamType = (searchParams.get('type') as ExamType) || 'ege';
  const subject = subjects.find((s) => s.id === id);
  const allQuestions = examType === 'oge' ? (ogeMap[id ?? ''] ?? []) : (egeMap[id ?? ''] ?? []);
  const [count, setCount] = useState<number>(25);
  const [started, setStarted] = useState(false);

  const chaosQuestions = useMemo(() => {
    if (!started || allQuestions.length === 0) return [];
    const realCount = count === 0 ? allQuestions.length : count;
    const { questions } = applyChaos([], allQuestions, { questionCount: realCount });
    return questions;
  }, [started, count, allQuestions]);

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Предмет не найден</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  if (allQuestions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />
          {subject.name}
        </Link>
        <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Нет вопросов для хаос-режима</p>
        </div>
      </div>
    );
  }

  if (started) {
    return (
      <div className="max-w-3xl mx-auto">
        <Link to={`/chaos/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
          <ArrowLeft size={16} />
          Назад
        </Link>
        <TestRunner
          questions={chaosQuestions}
          subjectId={subject.id}
          examKey={`${examType}-${subject.id}`}
          title={`Хаос — ${subject.name}`}
          chaosMode
          timeMinutes={60}
        />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        {subject.name}
      </Link>

      <div className="border rounded-lg p-8 text-center mb-6" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        <Skull size={48} className="mx-auto mb-4" style={{ color: '#EF4444' }} />
        <h1 className="font-serif text-3xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
          Армагеддон
        </h1>
        <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          Рандомный порядок · Перемешанные варианты · Рандомное время · Бонусы x2 · Ловушки
        </p>

        <div className="mb-6">
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--text)' }}>Количество вопросов</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {COUNT_OPTIONS.map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                className="px-5 py-3 rounded-lg text-sm font-bold border-2 transition-all min-h-[48px]"
                style={{
                  background: count === c ? '#EF4444' : 'transparent',
                  color: count === c ? '#fff' : 'var(--text)',
                  borderColor: count === c ? '#EF4444' : 'var(--border)',
                }}
              >
                {c === 0 ? `Все (${allQuestions.length})` : c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6 text-xs" style={{ color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-1">
            <Zap size={14} style={{ color: '#F59E0B' }} />
            <span>Рандом время</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={14} style={{ color: '#EF4444' }} />
            <span>Бонусы x2</span>
          </div>
          <div className="flex items-center gap-1">
            <Skull size={14} style={{ color: '#7C3AED' }} />
            <span>Ловушки</span>
          </div>
        </div>

        <button
          onClick={() => setStarted(true)}
          className="w-full px-6 py-4 rounded-lg text-lg font-bold transition-all hover:scale-[1.02]"
          style={{ background: '#EF4444', color: '#fff' }}
        >
          Запустить Армагеддон
        </button>
      </div>
    </div>
  );
}
