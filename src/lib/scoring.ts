export function calculatePercent(score: number, maxScore: number): number {
  if (maxScore === 0) return 0;
  return Math.round((score / maxScore) * 100);
}

export function getGrade(percent: number): string {
  if (percent >= 80) return 'Отлично';
  if (percent >= 60) return 'Хорошо';
  if (percent >= 40) return 'Удовлетворительно';
  return 'Неудовлетворительно';
}
