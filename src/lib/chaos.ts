import type { Question } from '../types';

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffleQuestionOptions(q: Question): Question {
  if (q.type !== 'choice' || !q.options || q.options.length < 2) return q;
  const correctText = typeof q.correctAnswer === 'string' ? q.correctAnswer : String(q.correctAnswer);
  const shuffled = shuffleArray(q.options);
  return { ...q, options: shuffled, correctAnswer: correctText };
}

export function pickRandomQuestions(pool: Question[], count: number): Question[] {
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

function randomTime(): number {
  return 15 + Math.floor(Math.random() * 76);
}

export function generateRandomTimes(count: number): number[] {
  return Array.from({ length: count }, () => randomTime());
}

function addTrapOptions(questions: Question[], pool: Question[]): Question[] {
  return questions.map((q) => {
    if (q.type !== 'choice' || !q.options) return q;
    const existingOptions = new Set(q.options);
    const wrongAnswers = pool
      .filter((pq) => pq.id !== q.id && pq.type === 'choice' && pq.options)
      .flatMap((pq) => (pq.options || []).filter((o) => !existingOptions.has(o)));
    if (wrongAnswers.length === 0) return q;
    const shuffledWrongs = shuffleArray(wrongAnswers);
    const traps = shuffledWrongs.slice(0, 2);
    const newOptions = shuffleArray([...q.options, ...traps]).slice(0, q.options.length + 1);
    const correctText = typeof q.correctAnswer === 'string' ? q.correctAnswer : String(q.correctAnswer);
    if (!newOptions.includes(correctText)) {
      newOptions[newOptions.length - 1] = correctText;
    }
    return { ...q, options: shuffleArray(newOptions), correctAnswer: correctText };
  });
}

function addBonusQuestions(questions: Question[], pool: Question[], count: number): Question[] {
  const topicIds = new Set(questions.map((q) => q.topicId));
  const bonusCandidates = pool.filter((q) => topicIds.has(q.topicId) && !questions.some((eq) => eq.id === q.id));
  const selected = shuffleArray(bonusCandidates).slice(0, count);
  const bonus = selected.map((q) => ({ ...q, points: (q.points || 1) * 2 }));
  const result = [...questions, ...bonus];
  return shuffleArray(result);
}

export interface ChaosConfig {
  questionCount: number;
}

export function applyChaos(_questions: Question[], allPool: Question[], config: ChaosConfig): { questions: Question[]; randomTimes: number[] } {
  let selected = pickRandomQuestions(allPool, config.questionCount);
  selected = selected.map(shuffleQuestionOptions);
  selected = addTrapOptions(selected, allPool);
  const bonusCount = Math.floor(selected.length * 0.1);
  if (bonusCount > 0) {
    selected = addBonusQuestions(selected, allPool, bonusCount);
  }
  selected = shuffleArray(selected);
  const randomTimes = generateRandomTimes(selected.length);
  return { questions: selected, randomTimes };
}
