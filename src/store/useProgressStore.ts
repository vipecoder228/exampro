import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TestResult, Bookmark } from '../types';

interface WrongAnswer {
  questionId: string;
  subjectId: string;
  userAnswer: string | string[];
  date: string;
}

interface ProgressState {
  results: TestResult[];
  bookmarks: Bookmark[];
  streak: number;
  lastActiveDate: string;
  weeklyGoal: number;
  weeklyDone: number;
  weekStart: string;
  addResult: (result: TestResult) => void;
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (questionId: string) => void;
  updateStreak: () => void;
  getSubjectProgress: (subjectId: string) => number;
  getWrongAnswers: () => WrongAnswer[];
  setWeeklyGoal: (goal: number) => void;
  getWeeklyDone: () => number;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      results: [],
      bookmarks: [],
      streak: 0,
      lastActiveDate: '',
      weeklyGoal: 5,
      weeklyDone: 0,
      weekStart: '',

      addResult: (result) =>
        set((state) => {
          const now = new Date();
          const weekStart = getWeekStart(now);
          const isNewWeek = state.weekStart !== weekStart;
          return {
            results: [...state.results, result],
            weeklyDone: isNewWeek ? 1 : state.weeklyDone + 1,
            weekStart: isNewWeek ? weekStart : state.weekStart,
          };
        }),

      addBookmark: (bookmark) =>
        set((state) => ({ bookmarks: [...state.bookmarks, bookmark] })),

      removeBookmark: (questionId) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.questionId !== questionId),
        })),

      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const { lastActiveDate, streak } = get();
        if (lastActiveDate === today) return;
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        set({
          streak: lastActiveDate === yesterday ? streak + 1 : 1,
          lastActiveDate: today,
        });
      },

      getSubjectProgress: (subjectId) => {
        const subjectResults = get().results.filter((r) => r.subjectId === subjectId);
        if (subjectResults.length === 0) return 0;
        const avg = subjectResults.reduce((sum, r) => sum + r.score / r.maxScore, 0) / subjectResults.length;
        return Math.round(avg * 100);
      },

      getWrongAnswers: () => {
        const { results } = get();
        const wrongByQuestion = new Map<string, WrongAnswer>();

        for (const result of results) {
          for (const [questionId, userAnswer] of Object.entries(result.answers)) {
            if (!wrongByQuestion.has(questionId)) {
              wrongByQuestion.set(questionId, {
                questionId,
                subjectId: result.subjectId,
                userAnswer,
                date: result.date,
              });
            }
          }
        }

        return Array.from(wrongByQuestion.values());
      },

      setWeeklyGoal: (goal) => set({ weeklyGoal: goal }),

      getWeeklyDone: () => {
        const { weeklyDone, weekStart } = get();
        const currentWeekStart = getWeekStart(new Date());
        if (weekStart !== currentWeekStart) return 0;
        return weeklyDone;
      },
    }),
    { name: 'exampro-progress' }
  )
);

function getWeekStart(date: Date): string {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().split('T')[0];
}
