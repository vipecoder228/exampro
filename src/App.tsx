import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';
import TestPage from './pages/TestPage';
import ExamModePage from './pages/ExamModePage';
import ProgressPage from './pages/ProgressPage';
import SourcesPage from './pages/SourcesPage';
import ScoreCalculator from './pages/ScoreCalculator';
import CustomTestPage from './pages/CustomTestPage';
import DailyPage from './pages/DailyPage';

export default function App() {
  const dark = useThemeStore((s) => s.dark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subject/:id" element={<SubjectPage />} />
            <Route path="/subject/:id/topic/:topicId" element={<TopicPage />} />
            <Route path="/test/:id" element={<TestPage />} />
            <Route path="/exam/:id" element={<ExamModePage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="/calculator" element={<ScoreCalculator />} />
            <Route path="/custom" element={<CustomTestPage />} />
            <Route path="/daily" element={<DailyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
