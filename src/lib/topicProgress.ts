import type { Topic, Question, TestResult } from '../types';

const norm = (v: string | string[]) =>
  Array.isArray(v) ? v.map(s => s.trim().toLowerCase()).sort().join('|') : String(v).trim().toLowerCase();

export function computeTopicProgress(
  topics: Topic[],
  questions: Question[],
  results: TestResult[],
  subjectId: string
): Map<string, { total: number; correct: number; percent: number }> {
  const subjectResults = results
    .filter((r) => r.subjectId === subjectId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Track the most recent answer for each question
  const latestAnswers = new Map<string, string | string[]>();
  for (const result of subjectResults) {
    for (const [qId, ans] of Object.entries(result.answers)) {
      if (!latestAnswers.has(qId)) {
        latestAnswers.set(qId, ans);
      }
    }
  }

  const topicStats = new Map<string, { total: number; correct: number }>();
  for (const topic of topics) {
    topicStats.set(topic.id, { total: 0, correct: 0 });
  }

  for (const q of questions) {
    const userAns = latestAnswers.get(q.id);
    if (!userAns) continue;
    const stats = topicStats.get(q.topicId);
    if (!stats) continue;
    stats.total++;
    if (norm(userAns) === norm(q.correctAnswer)) {
      stats.correct++;
    }
  }

  const progress = new Map<string, { total: number; correct: number; percent: number }>();
  for (const topic of topics) {
    const stats = topicStats.get(topic.id)!;
    progress.set(topic.id, {
      total: stats.total,
      correct: stats.correct,
      percent: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
    });
  }

  return progress;
}
