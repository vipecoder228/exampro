import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { subjects } from '../data/subjects';
import { mathTopics as egeMathT } from '../data/ege/math';
import { russianTopics as egeRussianT } from '../data/ege/russian';
import { physicsTopics as egePhysicsT } from '../data/ege/physics';
import { chemistryTopics as egeChemistryT } from '../data/ege/chemistry';
import { biologyTopics as egeBiologyT } from '../data/ege/biology';
import { informaticsTopics as egeInformaticsT } from '../data/ege/informatics';
import { historyTopics as egeHistoryT } from '../data/ege/history';
import { socialTopics as egeSocialT } from '../data/ege/social';
import { literatureTopics as egeLiteratureT } from '../data/ege/literature';
import { geographyTopics as egeGeographyT } from '../data/ege/geography';
import { englishTopics as egeEnglishT } from '../data/ege/english';
import { mathTopics as ogeMathT } from '../data/oge/math';
import { russianTopics as ogeRussianT } from '../data/oge/russian';
import { physicsTopics as ogePhysicsT } from '../data/oge/physics';
import { chemistryTopics as ogeChemistryT } from '../data/oge/chemistry';
import { biologyTopics as ogeBiologyT } from '../data/oge/biology';
import { historyTopics as ogeHistoryT } from '../data/oge/history';
import { socialTopics as ogeSocialT } from '../data/oge/social';
import { geographyTopics as ogeGeographyT } from '../data/oge/geography';
import { englishTopics as ogeEnglishT } from '../data/oge/english';
import { ArrowLeft, Search } from 'lucide-react';
import type { ExamType } from '../types';

const egeMap: Record<string, typeof egeMathT> = {
  math: egeMathT, russian: egeRussianT, physics: egePhysicsT, chemistry: egeChemistryT,
  biology: egeBiologyT, informatics: egeInformaticsT, history: egeHistoryT,
  social: egeSocialT, literature: egeLiteratureT, geography: egeGeographyT, english: egeEnglishT,
};

const ogeMap: Record<string, typeof ogeMathT> = {
  math: ogeMathT, russian: ogeRussianT, physics: ogePhysicsT, chemistry: ogeChemistryT,
  biology: ogeBiologyT, history: ogeHistoryT, social: ogeSocialT,
  geography: ogeGeographyT, english: ogeEnglishT,
};

export default function FormulasPage() {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const examType: ExamType = (searchParams.get('type') as ExamType) || 'ege';
  const subject = subjects.find((s) => s.id === id);
  const topics = examType === 'oge' ? (ogeMap[id ?? ''] ?? []) : (egeMap[id ?? ''] ?? []);
  const [search, setSearch] = useState('');

  const filtered = topics.filter((t) => {
    if (!t.formulas || t.formulas.length === 0) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return t.title.toLowerCase().includes(q) ||
      t.formulas.some((f) => f.toLowerCase().includes(q));
  });

  if (!subject) {
    return (
      <div className="text-center py-20">
        <h2 className="font-serif text-xl font-bold" style={{ color: 'var(--primary)' }}>Предмет не найден</h2>
        <Link to="/" className="text-sm mt-2 inline-block" style={{ color: 'var(--accent)' }}>На главную</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to={`/subject/${id}?type=${examType}`} className="flex items-center gap-1 text-sm mb-4 hover:underline" style={{ color: 'var(--accent)' }}>
        <ArrowLeft size={16} />
        {subject.name}
      </Link>

      <h1 className="font-serif text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Формулы</h1>
      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Справочник по темам</p>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-secondary)' }} />
        <input
          type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по формулам..."
          className="w-full pl-9 pr-3 py-2 rounded-lg border text-sm outline-none"
          style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text)' }}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 border rounded-lg" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--text-secondary)' }}>
            {topics.some((t) => t.formulas && t.formulas.length > 0)
              ? 'Ничего не найдено'
              : 'У этого предмета пока нет формул'}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((topic) => (
            <div key={topic.id} className="border rounded-lg p-4" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
              <h3 className="font-serif font-bold text-sm mb-3" style={{ color: 'var(--primary)' }}>{topic.title}</h3>
              <div className="flex flex-wrap gap-2">
                {topic.formulas!.map((f, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-md text-sm font-mono" style={{ background: 'var(--border)', color: 'var(--accent)' }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
