import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeState {
  dark: boolean;
  soundEnabled: boolean;
  themeMode: ThemeMode;
  toggle: () => void;
  toggleSound: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

function isDarkHour(): boolean {
  const h = new Date().getHours();
  return h >= 21 || h < 7;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      dark: false,
      soundEnabled: true,
      themeMode: 'light' as ThemeMode,
      toggle: () => set((state) => {
        const next = !state.dark;
        document.documentElement.classList.toggle('dark', next);
        return { dark: next, themeMode: next ? 'dark' : 'light' };
      }),
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      setThemeMode: (mode) => {
        const dark = mode === 'auto' ? isDarkHour() : mode === 'dark';
        document.documentElement.classList.toggle('dark', dark);
        set({ themeMode: mode, dark });
      },
    }),
    { name: 'exampro-theme' }
  )
);
