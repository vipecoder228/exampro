import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TestResult, Bookmark } from '../types';

interface ProgressState {
  results: TestResult[];
  bookmarks: Bookmark[];
  streak: number;
  lastActiveDate: string;
  addResult: (result: TestResult) => void;
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (questionId: string) => void;
  updateStreak: () => void;
  getSubjectProgress: (subjectId: string) => number;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      results: [],
      bookmarks: [],
      streak: 0,
      lastActiveDate: '',

      addResult: (result) =>
        set((state) => ({ results: [...state.results, result] })),

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
    }),
    { name: 'exampro-progress' }
  )
);
