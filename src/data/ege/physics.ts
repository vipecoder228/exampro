import type { Topic, Question } from '../../types';

export const physicsTopics: Topic[] = [
  {
    id: 'physics-1',
    subjectId: 'physics',
    title: 'Кинематика',
    description: 'Движение тел, скорости, ускорения',
    content: `## Кинематика

### Основные формулы

**Равномерное движение:**
$$S = v \\cdot t$$

**Равноускоренное движение:**
$$v = v_0 + a \\cdot t$$
$$S = v_0 \\cdot t + \\frac{a \\cdot t^2}{2}$$

### Свободное падение

$$v = g \\cdot t$$
$$h = \\frac{g \\cdot t^2}{2}$$

где $g \\approx 9.8$ м/с²`,
    formulas: ['S = v·t', 'v = v₀ + at', 'S = v₀t + at²/2', 'h = gt²/2'],
  },
  {
    id: 'physics-2',
    subjectId: 'physics',
    title: 'Динамика',
    description: 'Законы Ньютона, силы',
    content: `## Динамика

### Законы Ньютона

1. **Первый закон** (закон инерции): тело сохраняет состояние покоя или равномерного прямолинейного движения, если на него не действуют силы.

2. **Второй закон:** $F = m \\cdot a$

3. **Третий закон:** $F_{12} = -F_{21}$

### Сила тяжести

$$F = m \\cdot g$$

### Сила трения

$$F_{тр} = \\mu \\cdot N$$`,
    formulas: ['F = ma', 'F = mg', 'Fтр = μN'],
  },
  {
    id: 'physics-3',
    subjectId: 'physics',
    title: 'Электростатика',
    description: 'Закон Кулона, электрическое поле',
    content: `## Электростатика

### Закон Кулона

$$F = k \\cdot \\frac{q_1 \\cdot q_2}{r^2}$$

где $k = 9 \\times 10^9$ Н·м²/Кл²

### Напряжённость электрического поля

$$E = \\frac{F}{q}$$

### Потенциальная энергия

$$W = k \\cdot \\frac{q_1 \\cdot q_2}{r}$$`,
    formulas: ['F = k·q₁q₂/r²', 'E = F/q', 'W = k·q₁q₂/r'],
  },
];

export const physicsQuestions: Question[] = [
  {
    id: 'physics-q1',
    topicId: 'physics-1',
    text: 'Тело движется равномерно со скоростью 20 м/с. Какой путь оно пройдёт за 5 секунд?',
    type: 'input',
    correctAnswer: '100',
    explanation: 'S = v · t = 20 · 5 = 100 м.',
    points: 1,
  },
  {
    id: 'physics-q2',
    topicId: 'physics-2',
    text: 'С какой силой притягивается тело массой 5 кг к Земле? (g = 10 м/с²)',
    type: 'input',
    correctAnswer: '50',
    explanation: 'F = m · g = 5 · 10 = 50 Н.',
    points: 1,
  },
  {
    id: 'physics-q3',
    topicId: 'physics-3',
    text: 'По какой формуле определяется сила взаимодействия двух точечных зарядов?',
    type: 'choice',
    options: ['F = ma', 'F = k·q₁q₂/r²', 'F = mg', 'F = mv²/r'],
    correctAnswer: 'F = k·q₁q₂/r²',
    explanation: 'Это закон Кулона — сила взаимодействия двух точечных зарядов обратно пропорциональна квадрату расстояния между ними.',
    points: 1,
  },
  {
    id: 'physics-q4',
    topicId: 'physics-1',
    text: 'Тело бросили вертикально вверх со скоростью 30 м/с. На какой высоте скорость станет равной 10 м/с? (g = 10 м/с²)',
    type: 'input',
    correctAnswer: '40',
    explanation: 'Используем формулу: h = (v₀² - v²) / (2g) = (900 - 100) / 20 = 40 м.',
    points: 1,
  },
  {
    id: 'physics-q5',
    topicId: 'physics-2',
    text: 'Какой закон Ньютона описывает формулу F = ma?',
    type: 'choice',
    options: ['Первый', 'Второй', 'Третий', 'Закон всемирного тяготения'],
    correctAnswer: 'Второй',
    explanation: 'Второй закон Ньютона: ускорение тела прямо пропорционально равнодействующей сил и обратно пропорционально его массе (F = ma).',
    points: 1,
  },
];
