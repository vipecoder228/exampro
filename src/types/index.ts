export type ExamType = 'ege' | 'oge';

export interface Subject {
  id: string;
  name: string;
  icon: string;
  examTypes: ExamType[];
  description: string;
  topicCount: number;
}

export interface Topic {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  content: string;
  formulas?: string[];
}

export interface Question {
  id: string;
  topicId: string;
  text: string;
  type: 'choice' | 'input' | 'multiple';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

export interface TestVariant {
  id: string;
  subjectId: string;
  examType: ExamType;
  title: string;
  questions: Question[];
  timeMinutes: number;
}

export interface TestResult {
  id: string;
  testId: string;
  subjectId: string;
  date: string;
  answers: Record<string, string | string[]>;
  score: number;
  maxScore: number;
  primaryScore: number;
  testScore: number;
}

export interface Bookmark {
  questionId: string;
  addedAt: string;
  nextReview: string;
  reviewCount: number;
}

export interface DailyChallenge {
  date: string;
  questionIds: string[];
  completed: boolean;
  score: number;
}

export interface LeaderboardEntry {
  nickname: string;
  avgScore: number;
  testsCompleted: number;
  streak: number;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  description: string;
  status: 'verified' | 'recommended';
}
