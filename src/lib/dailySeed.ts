export function getDailySeed(date?: string): number {
  const d = date ?? new Date().toISOString().split('T')[0];
  const [y, m, day] = d.split('-').map(Number);
  return y * 10000 + m * 100 + day;
}

export function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function pickDailyQuestions<T>(allItems: T[], count: number, date?: string): T[] {
  const seed = getDailySeed(date);
  const rng = seededRandom(seed);
  const shuffled = [...allItems];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
