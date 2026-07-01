# ExamPro — Подготовка к ЕГЭ и ОГЭ

Платформа для подготовки к экзаменам с 11 предметами, адаптивными тестами, AI-помощником и статистикой прогресса.

**Сайт:** [exampro-gules.vercel.app](https://exampro-gules.vercel.app)
**APK:** [Скачать из Releases](https://github.com/vipecoder228/exampro/releases)

## Возможности

### Тесты и тренировки
- **Пробный вариант** — timed тест по предмету (45/60 минут)
- **Тренировка** — без таймера, с мгновенной обратной связью
- **Режим ЕГЭ/ОГЭ** — полный экзамен (2.5–3 часа), конвертация баллов
- **Блitz** — 10 вопросов, 30 секунд на каждый
- **Таймер на вопросы** — 30/60/90 сек на вопрос в тестах и тренировке
- **Адаптивный подбор** — приоритет слабых тем на основе истории
- **Свой тест** — создай тест из своих вопросов

### Режим обучения
- Теория с формулами перед каждым блоком вопросов
- Подсказки перед ответом
- Без таймера и оценки — просто изучай

### Статистика и прогресс
- Heatmap прогресса по предметам и темам
- График динамики баллов
- Прогноз балла на экзамене
- Рейтинг по предметам
- Недельная цель с трекером
- Серия дней (streak)
- Сравнение с другом (через код)

### AI-помощник
- Чат-бот на базе GPT-4o-mini
- Контекстные ответы по предмету и теме
- Кнопка "Объяснить с ИИ" при неправильном ответе
- Нужен свой OpenAI API ключ

### Контент
- **11 предметов**: Математика, Русский язык, Физика, Химия, Биология, Информатика, История, Обществознание, Литература, География, Английский язык
- ЕГЭ и ОГЭ варианты
- Темы с теорией и формулами
- Повторение ошибок
- Задание дня (ежедневные 5 вопросов)
- Калькулятор баллов ЕГЭ

## Технологии

- **Frontend:** React 19, TypeScript, Tailwind CSS v4
- **State:** Zustand (localStorage persistence)
- **Сборка:** Vite 8
- **Анимации:** Framer Motion
- **Графики:** Recharts
- **Иконки:** Lucide React
- **APK:** Capacitor 7 (Android)
- **Деплой:** Vercel (frontend), GitHub Actions (APK build)
- **PWA:** Service Worker через vite-plugin-pwa

## Запуск

```bash
npm install
npm run dev
```

Открой http://localhost:5173

## Сборка APK

```bash
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
```

APK: `android/app/build/outputs/apk/debug/app-debug.apk`

## CI/CD

При пуше в `master` автоматически:
1. Деплой на Vercel (frontend)
2. Сборка APK через GitHub Actions (в Releases)

## Структура проекта

```
src/
├── components/       # UI-компоненты
│   ├── Exam/         # QuestionCard, TestRunner, TopicList
│   ├── Stats/        # HeatMap, ProgressChart, ScorePredict
│   ├── AI/           # ChatBot, ChatMessage, ChatInput
│   ├── Daily/        # DailyChallenge, StreakBadge
│   ├── Layout/       # Header, Sidebar, Footer
│   └── ui/           # Button, Card, Modal, Badge
├── pages/            # Страницы (роуты)
├── store/            # Zustand stores (progress, theme)
├── lib/              # Утилиты (scoring, sounds, AI)
├── data/             # Данные вопросов и тем
│   ├── ege/          # ЕГЭ по предметам
│   └── oge/          # ОГЭ по предметам
├── hooks/            # React hooks
└── types/            # TypeScript типы
```

## Лицензия

MIT
