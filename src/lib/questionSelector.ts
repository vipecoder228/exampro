import type { Question, TestResult } from '../types';

function getTopicAccuracy(topicId: string, results: TestResult[]): number {
  const relevant = results.filter((r) => {
    return Object.keys(r.answers).some((qId) => qId.startsWith(topicId.split('-').slice(0, -1).join('-')));
  });
  if (relevant.length === 0) return 0.5;
  const correct = relevant.reduce((sum, r) => {
    const topicAnswers = Object.entries(r.answers).filter(([qId]) =>
      qId.startsWith(topicId.split('-').slice(0, -1).join('-'))
    );
    return sum + topicAnswers.length;
  }, 0);
  const total = relevant.reduce((sum, r) => sum + Object.keys(r.answers).length, 0);
  return total > 0 ? correct / total : 0.5;
}

export function selectAdaptiveQuestions(
  allQuestions: Question[],
  count: number,
  results: TestResult[]
): Question[] {
  const topicAccuracy = new Map<string, number>();
  const topicIds = [...new Set(allQuestions.map((q) => q.topicId))];

  for (const tid of topicIds) {
    topicAccuracy.set(tid, getTopicAccuracy(tid, results));
  }

  const scored = allQuestions.map((q) => {
    const acc = topicAccuracy.get(q.topicId) ?? 0.5;
    let difficulty = 0.5;
    if (acc > 0.8) difficulty = 0.8;
    else if (acc < 0.4) difficulty = 0.2;
    const score = difficulty + Math.random() * 0.3;
    return { question: q, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.question);
}
