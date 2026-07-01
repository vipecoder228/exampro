const scoreTables: Record<string, Record<number, number>> = {
  'ege-math': {
    0: 0, 1: 5, 2: 9, 3: 14, 4: 18, 5: 23, 6: 27, 7: 32, 8: 36,
    9: 41, 10: 45, 11: 50, 12: 54, 13: 59, 14: 63, 15: 68, 16: 72,
    17: 77, 18: 81, 19: 86, 20: 90, 21: 95, 22: 100,
  },
  'ege-russian': {
    0: 0, 1: 3, 2: 5, 3: 8, 4: 10, 5: 13, 6: 15, 7: 18, 8: 20,
    9: 23, 10: 25, 11: 28, 12: 30, 13: 33, 14: 35, 15: 38, 16: 40,
    17: 43, 18: 45, 19: 48, 20: 50, 21: 53, 22: 55, 23: 58, 24: 60,
    25: 63, 26: 65, 27: 68, 28: 70, 29: 73, 30: 75, 31: 78, 32: 80,
    33: 83, 34: 85, 35: 88, 36: 90, 37: 93, 38: 95, 39: 98, 40: 100,
  },
  'ege-physics': {
    0: 0, 1: 4, 2: 8, 3: 11, 4: 15, 5: 19, 6: 23, 7: 27, 8: 31,
    9: 34, 10: 38, 11: 42, 12: 46, 13: 50, 14: 54, 15: 57, 16: 61,
    17: 65, 18: 69, 19: 73, 20: 77, 21: 81, 22: 85, 23: 88, 24: 92,
    25: 96, 26: 100,
  },
};

export function primaryToTestScore(examKey: string, primary: number): number {
  const table = scoreTables[examKey];
  if (!table) return primary;
  const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
  let result = 0;
  for (const k of keys) {
    if (primary >= k) result = table[k];
  }
  return result;
}

export function getScoreTable(examKey: string): Record<number, number> {
  return scoreTables[examKey] ?? {};
}
