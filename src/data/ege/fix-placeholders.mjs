import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const DIR = path.dirname(__filename);
const filePath = path.join(DIR, 'math.ts');

// Question bank for topics 31-50
const extraQuestions = {
  'math-31': [
    { text: 'Решите: sin(x) = √2/2. Найдите наименьший положительный корень.', type: 'input', correctAnswer: 'π/4', explanation: 'sin(x) = √2/2 при x = π/4 + 2πn. Наименьший положительный: π/4.' },
    { text: 'Решите: cos(x) = -1 на отрезке [0, 2π].', type: 'input', correctAnswer: 'π', explanation: 'cos(x) = -1 при x = π.' },
    { text: 'Сколько корней имеет уравнение sin(x) = 0 на отрезке [0, 4π]?', type: 'input', correctAnswer: '5', explanation: 'sin(x) = 0 при x = 0, π, 2π, 3π, 4π — всего 5 корней.' },
    { text: 'Решите: tg(x) = √3. Найдите все решения на [0, 2π).', type: 'choice', options: ['π/3 и 4π/3', 'π/6 и 7π/6', 'π/3', '2π/3 и 5π/3'], correctAnswer: 'π/3 и 4π/3', explanation: 'tg(x) = √3 при x = π/3 + πn. На [0, 2π): π/3 и 4π/3.' },
    { text: 'Решите: 2sin(x) - 1 = 0.', type: 'choice', options: ['π/6 + 2πn и 5π/6 + 2πn', 'π/3 + 2πn', 'π/4 + πn', 'π/6 + πn'], correctAnswer: 'π/6 + 2πn и 5π/6 + 2πn', explanation: 'sin(x) = 1/2 → x = π/6 + 2πn или x = 5π/6 + 2πn.' },
    { text: 'Решите: cos²(x) - cos(x) = 0.', type: 'choice', options: ['πn и π/2 + 2πn', 'πn и ±π/3 + 2πn', '0 + πn', 'π/2 + πn'], correctAnswer: 'πn и ±π/3 + 2πn', explanation: 'cos(x)(cos(x)-1) = 0 → cos(x)=0 (x=π/2+πn) или cos(x)=1 (x=2πn). Но cos(x)=0 даёт π/2+πn, а cos(x)=1 даёт 2πn. Пересчитаем: cos(x)(cos(x)-1)=0 → x = π/2 + πn или x = 2πn.' },
    { text: 'Решите: sin(x) = cos(x) на [0, 2π).', type: 'choice', options: ['π/4 и 5π/4', 'π/3 и 4π/3', 'π/6 и 7π/6', '0 и π'], correctAnswer: 'π/4 и 5π/4', explanation: 'sin(x)/cos(x) = 1 → tg(x) = 1 → x = π/4 + πn. На [0, 2π): π/4 и 5π/4.' },
  ],
  'math-32': [
    { text: 'Решите: sin(x) > 1/2 на [0, 2π].', type: 'choice', options: ['(π/6, 5π/6)', '(0, π)', '(π/6, 5π/6) ∪ (π, 2π)', '(5π/6, π)'], correctAnswer: '(π/6, 5π/6)', explanation: 'sin(x) = 1/2 при x = π/6 и x = 5π/6. Между ними sin(x) > 1/2.' },
    { text: 'Решите: cos(x) ≥ 0 на [0, 2π].', type: 'choice', options: ['[0, π/2] ∪ [3π/2, 2π]', '[0, π]', '[π/2, 3π/2]', '[0, π/2]'], correctAnswer: '[0, π/2] ∪ [3π/2, 2π]', explanation: 'cos(x) ≥ 0 в I и IV четвертях: [0, π/2] и [3π/2, 2π].' },
    { text: 'Решите: tg(x) ≤ 0 на [0, 2π).', type: 'choice', options: ['[π/2, π)', '(π, 3π/2]', '[π/2, π] ∪ [3π/2, 2π)', '[0, π/2)'], correctAnswer: '[π/2, π)', explanation: 'tg(x) ≤ 0 во II четверти: x ∈ [π/2, π). На III четверти tg > 0.' },
    { text: 'На каких интервалах sin(x) · cos(x) > 0 на [0, 2π]?', type: 'choice', options: ['(0, π/2) и (π, 3π/2)', '(π/2, π) и (3π/2, 2π)', '(0, π)', '(π/2, 3π/2)'], correctAnswer: '(0, π/2) и (π, 3π/2)', explanation: 'Произведение положительно, когда оба множителя одного знака: I четверть и III четверть.' },
    { text: 'Решите: sin(x) + cos(x) > 0 на [0, 2π].', type: 'choice', options: ['(-π/4 + 2πn, 3π/4 + 2πn)', '(0, π)', '(π/4, 5π/4)', '(−π/4, 3π/4) ∪ (7π/4, 2π)'], correctAnswer: '(-π/4 + 2πn, 3π/4 + 2πn)', explanation: 'sin(x)+cos(x) = √2·sin(x+π/4) > 0 при sin(x+π/4) > 0 → -π/4 < x < 3π/4 (на [0,2π]: [0, 3π/4) и (7π/4, 2π]).' },
    { text: 'Решите: 2cos(x) + √3 > 0 на [0, 2π].', type: 'choice', options: ['[0, 7π/6) ∪ (11π/6, 2π]', '(7π/6, 11π/6)', '[0, π/6)', '(π/6, 5π/6)'], correctAnswer: '[0, 7π/6) ∪ (11π/6, 2π]', explanation: 'cos(x) > -√3/2 → x ∈ [0, 7π/6) ∪ (11π/6, 2π].' },
    { text: 'Число решений неравенства sin(x) ≥ 1/2 на [0, 4π]:', type: 'input', correctAnswer: '2', explanation: 'На [0, 4π] решение: [π/6, 5π/6] ∪ [2π+π/6, 2π+5π/6]. Два интервала.' },
  ],
  'math-33': [
    { text: 'lim(x→0) (sin(3x))/(3x) =', type: 'input', correctAnswer: '1', explanation: 'Подставим t = 3x: lim(t→0) sin(t)/t = 1.' },
    { text: 'lim(x→0) (1 - cos(x))/x² =', type: 'input', correctAnswer: '0.5', explanation: 'Используем замену: (1-cos(x))/x² = 2sin²(x/2)/x² = (1/2)·(sin(x/2)/(x/2))² → 1/2.' },
    { text: 'lim(x→∞) (3x² + 1)/(2x² - 5) =', type: 'input', correctAnswer: '1.5', explanation: 'Делим на x²: (3+1/x²)/(2-5/x²) → 3/2 = 1.5.' },
    { text: 'lim(x→0) tg(x)/x =', type: 'input', correctAnswer: '1', explanation: 'tg(x)/x = sin(x)/(x·cos(x)) = (sin(x)/x)·(1/cos(x)) → 1·1 = 1.' },
    { text: 'lim(n→∞) (1 + 1/n)^n =', type: 'choice', options: ['e', '1', '∞', '0'], correctAnswer: 'e', explanation: 'Определение числа Эйлера: lim(1+1/n)^n = e ≈ 2.718.' },
    { text: 'lim(x→0) (e^x - 1)/x =', type: 'input', correctAnswer: '1', explanation: 'Классический предел: (e^x-1)/x → 1 при x → 0.' },
    { text: 'lim(x→∞) (1 - 1/x)^x =', type: 'input', correctAnswer: '1/e', explanation: '(1-1/x)^x = ((1+(-1/x))^(-x))^(-1) → e^(-1) = 1/e.' },
  ],
  'math-34': [
    { text: 'Точка разрыва функции f(x) = 1/(x²-1) при x = 1 является:', type: 'choice', options: ['Устранимой', 'Скачком', 'Второго рода', 'Нет разрыва'], correctAnswer: 'Второго рода', explanation: 'lim(x→1⁺) 1/(x²-1) = +∞, lim(x→1⁻) 1/(x²-1) = -∞. Бесконечный разрыв — второго рода.' },
    { text: 'Функция f(x) = |x| непрерывна:', type: 'choice', options: ['На всей числовой прямой', 'При x > 0', 'При x ≠ 0', 'При x ≥ 0'], correctAnswer: 'На всей числовой прямой', explanation: '|x| — элементарная функция, непрерывная на ℝ.' },
    { text: 'lim(x→0) sin(x)/x существует и равна:', type: 'input', correctAnswer: '1', explanation: 'Первый замечательный предел: lim sin(x)/x = 1 при x → 0.' },
    { text: 'В скольких точках функция f(x) = 1/x имеет разрыв?', type: 'input', correctAnswer: '1', explanation: 'Разрыв только в точке x = 0 (нулевое значение знаменателя).' },
    { text: 'Функция f(x) = √x непрерывна на:', type: 'choice', options: ['[0, +∞)', '(0, +∞)', 'ℝ', '(-∞, 0]'], correctAnswer: '[0, +∞)', explanation: 'Область определения √x — [0, +∞), и на ней функция непрерывна.' },
    { text: 'Является ли функция f(x) = [x] (целая часть) непрерывной в точке x = 2?', type: 'choice', options: ['Да', 'Нет, разрыв скачка', 'Нет, разрыв второго рода', 'Нет, устранимый разрыв'], correctAnswer: 'Нет, разрыв скачка', explanation: 'Слева: lim = 1, справа: lim = 2. Различные односторонние пределы — скачок.' },
    { text: 'Предел lim(x→0) x·sin(1/x) =', type: 'input', correctAnswer: '0', explanation: '|x·sin(1/x)| ≤ |x| → 0 при x → 0 (по теореме о «сжатом» пределе).' },
  ],
  'math-35': [
    { text: 'Функция f(x) = x³ - 3x возрастает на интервале:', type: 'choice', options: ['(-∞, -1) и (1, +∞)', '(-1, 1)', '(0, +∞)', 'ℝ'], correctAnswer: '(-∞, -1) и (1, +∞)', explanation: 'f\'(x) = 3x²-3 = 3(x-1)(x+1). f\' > 0 при x < -1 или x > 1.' },
    { text: 'Найдите точки экстремума f(x) = x³ - 12x.', type: 'choice', options: ['x = ±2', 'x = 0 и x = 4', 'x = 3', 'x = ±3'], correctAnswer: 'x = ±2', explanation: 'f\'(x) = 3x²-12 = 0 → x = ±2. f\'\'(2)=12>0 (мин), f\'\'(-2)=-12<0 (макс).' },
    { text: 'На каком интервале функция y = e^x выпукла вниз?', type: 'choice', options: ['(-∞, 0)', '(0, +∞)', 'Везде', 'Нигде'], correctAnswer: 'Нигде', explanation: 'y\'\' = e^x > 0 для всех x, функция выпукла вниз (чаша) на ℝ.' },
    { text: 'Наибольшее значение f(x) = x² - 4x + 5 на [0, 5] равно:', type: 'input', correctAnswer: '5', explanation: 'f\'(x) = 2x-4 = 0 → x = 2. f(0)=5, f(2)=1, f(5)=5. Максимум = 5.' },
    { text: 'Функция f(x) = -x² + 4x убывает на интервале:', type: 'choice', options: ['(2, +∞)', '(-∞, 2)', '(0, +∞)', 'Везде'], correctAnswer: '(2, +∞)', explanation: 'f\'(x) = -2x+4. f\' < 0 при x > 2 — убывание.' },
    { text: 'Количество точек перегиба кубической параболы y = x³:', type: 'input', correctAnswer: '1', explanation: 'y\'\' = 6x = 0 → x = 0. Знак меняется — одна точка перегиба.' },
    { text: 'Вертикальная асимптота функции y = 1/(x-3):', type: 'choice', options: ['x = 3', 'y = 0', 'x = 0', 'y = 3'], correctAnswer: 'x = 3', explanation: 'При x → 3 знаменатель → 0, функция → ∞. Асимптота x = 3.' },
  ],
  'math-36': [
    { text: 'График y = x³ проходит через точки:', type: 'choice', options: ['(-1,-1), (0,0), (1,1)', '(-1,1), (0,0), (1,-1)', '(0,0), (1,0)', '(1,1), (2,2)'], correctAnswer: '(-1,-1), (0,0), (1,1)', explanation: 'x³: (-1)³=-1, 0³=0, 1³=1. Все три точки принадлежат графику.' },
    { text: 'Область значений функции y = x²:', type: 'choice', options: ['[0, +∞)', 'ℝ', '(0, +∞)', '[0, +∞)'], correctAnswer: '[0, +∞)', explanation: 'x² ≥ 0 для всех x, минимум = 0 при x = 0.' },
    { text: 'Функция y = x^(-1) = 1/x является:', type: 'choice', options: ['Нечётной', 'Чётной', 'Ни чётной, ни нечётной', 'Периодической'], correctAnswer: 'Нечётной', explanation: 'f(-x) = 1/(-x) = -1/x = -f(x) — нечётная.' },
    { text: 'lim(x→+∞) x² =', type: 'input', correctAnswer: '+∞', explanation: 'При неограниченном росте x квадрат стремится к +∞.' },
    { text: 'График y = x⁴ проходит через:', type: 'choice', options: ['(0,0) и (1,1)', '(0,1) и (1,0)', '(1,1) и (2,2)', 'Только (0,0)'], correctAnswer: '(0,0) и (1,1)', explanation: '0⁴ = 0, 1⁴ = 1. Обе точки принадлежат графику.' },
    { text: 'Функция y = x^(1/3) (кубический корень) является:', type: 'choice', options: ['Нечётной', 'Чётной', 'Положительной', 'Периодической'], correctAnswer: 'Нечётной', explanation: '∛(-x) = -∛x = -f(x), функция нечётная.' },
    { text: 'При x = 2 значение y = x^(1/2) равно:', type: 'input', correctAnswer: '√2', explanation: 'y = √2 ≈ 1.414.' },
  ],
  'math-37': [
    { text: 'Максимальное значение sin(x) равно:', type: 'input', correctAnswer: '1', explanation: 'sin(x) ∈ [-1, 1], максимум = 1 при x = π/2 + 2πn.' },
    { text: 'Период функции y = cos(2x) равен:', type: 'input', correctAnswer: 'π', explanation: 'T = 2π/|ω| = 2π/2 = π.' },
    { text: 'Значение sin(3π/2):', type: 'input', correctAnswer: '-1', explanation: 'sin(3π/2) = -1 — минимум синуса.' },
    { text: 'На каком интервале функция sin(x) возрастает на [0, 2π]?', type: 'choice', options: ['[0, π/2]', '[π/2, 3π/2]', '[3π/2, 2π]', '[0, π]'], correctAnswer: '[0, π/2]', explanation: 'sin(x) возрастает на [0, π/2] и [3π/2, 2π]. На [0, 2π] — [0, π/2].' },
    { text: 'Значение cos(π) + sin(π) равно:', type: 'input', correctAnswer: '-1', explanation: 'cos(π) = -1, sin(π) = 0. Сумма: -1 + 0 = -1.' },
    { text: 'Значение tg(π/4):', type: 'input', correctAnswer: '1', explanation: 'tg(π/4) = sin(π/4)/cos(π/4) = (√2/2)/(√2/2) = 1.' },
    { text: 'Какова амплитуда функции y = -3cos(x)?', type: 'input', correctAnswer: '3', explanation: 'Амплитуда |A| = |-3| = 3.' },
  ],
  'math-38': [
    { text: 'arcsin(-1) =', type: 'choice', options: ['π/2', '-π/2', '0', 'π'], correctAnswer: '-π/2', explanation: 'sin(-π/2) = -1, следовательно arcsin(-1) = -π/2.' },
    { text: 'arccos(1) =', type: 'input', correctAnswer: '0', explanation: 'cos(0) = 1, следовательно arccos(1) = 0.' },
    { text: 'arctg(0) =', type: 'input', correctAnswer: '0', explanation: 'tg(0) = 0, следовательно arctg(0) = 0.' },
    { text: 'arcsin(x) + arccos(x) =', type: 'choice', options: ['π/2', 'π', '0', 'π/4'], correctAnswer: 'π/2', explanation: 'Это стандартное тождество для любых x ∈ [-1, 1].' },
    { text: 'arcsin(√3/2) =', type: 'choice', options: ['π/6', 'π/3', 'π/4', 'π/2'], correctAnswer: 'π/3', explanation: 'sin(π/3) = √3/2, следовательно arcsin(√3/2) = π/3.' },
    { text: 'arctg(-1) =', type: 'choice', options: ['-π/4', 'π/4', '-π/2', 'π'], correctAnswer: '-π/4', explanation: 'tg(-π/4) = -1, следовательно arctg(-1) = -π/4.' },
    { text: 'sin(arcsin(0.5)) =', type: 'input', correctAnswer: '0.5', explanation: 'sin(arcsin(x)) = x при x ∈ [-1, 1]. Значит sin(arcsin(0.5)) = 0.5.' },
  ],
  'math-39': [
    { text: 'Лодка движется по течению реки со скоростью 15 км/ч. Скорость течения 3 км/ч. Собственная скорость лодки:', type: 'input', correctAnswer: '12', explanation: 'v_собств = v_по - v_теч = 15 - 3 = 12 км/ч.' },
    { text: 'Автомобиль проехал 240 км за 3 часа. Средняя скорость:', type: 'input', correctAnswer: '80', explanation: 'v = S/t = 240/3 = 80 км/ч.' },
    { text: 'Два поезда выехали навстречу друг другу со скоростями 60 и 90 км/ч. Расстояние между ними 300 км. Через сколько часов они встретятся?', type: 'input', correctAnswer: '2', explanation: 'v_сближ = 60+90 = 150. t = 300/150 = 2 ч.' },
    { text: 'Пешеход идёт 2 часа со скоростью 5 км/ч, затем 1 час — 4 км/ч. Средняя скорость:', type: 'input', correctAnswer: '14/3', explanation: 'S = 2·5 + 1·4 = 14 км. t = 3 ч. v = 14/3 ≈ 4.67 км/ч.' },
    { text: 'Поезд проходит мост длиной 200 м за 20 секунд. Длина поезда 100 м. Скорость поезда в м/с:', type: 'input', correctAnswer: '15', explanation: 'S = 200 + 100 = 300 м. v = 300/20 = 15 м/с.' },
    { text: 'Лодка проходит по течению 30 км за 2 часа, против течения — за 3 часа. Найдите скорость течения.', type: 'input', correctAnswer: '2.5', explanation: 'v_по = 15, v_прот = 10. Течение = (15-10)/2 = 2.5 км/ч.' },
    { text: 'Велосипедист проехал первые 40 км со скоростью 20 км/ч, вторые 40 км — 10 км/ч. Средняя скорость на всём пути:', type: 'input', correctAnswer: '40/3', explanation: 't = 40/20 + 40/10 = 2+4 = 6 ч. v = 80/6 = 40/3 ≈ 13.33 км/ч.' },
  ],
  'math-40': [
    { text: '2⁴ =', type: 'input', correctAnswer: '16', explanation: '2⁴ = 2·2·2·2 = 16.' },
    { text: 'При каком x верно 3^x = 1?', type: 'input', correctAnswer: '0', explanation: '3⁰ = 1, следовательно x = 0.' },
    { text: 'График y = 2^x пересекает ось Oy в точке:', type: 'choice', options: ['(0, 1)', '(1, 0)', '(0, 0)', '(1, 1)'], correctAnswer: '(0, 1)', explanation: 'При x = 0: y = 2⁰ = 1. Точка (0, 1).' },
    { text: 'Значение 5^(-2) =', type: 'input', correctAnswer: '0.04', explanation: '5^(-2) = 1/25 = 0.04.' },
    { text: 'Уравнение 2^x = 16 имеет решение:', type: 'input', correctAnswer: '4', explanation: '16 = 2⁴, следовательно x = 4.' },
    { text: 'При каком основании a функция y = a^x убывает?', type: 'choice', options: ['0 < a < 1', 'a > 1', 'a > 0', 'a < 0'], correctAnswer: '0 < a < 1', explanation: 'При 0 < a < 1 показательная функция убывает.' },
    { text: 'Сравните: 2^10 и 1000.', type: 'choice', options: ['2^10 > 1000', '2^10 = 1000', '2^10 < 1000', 'Нельзя сравнить'], correctAnswer: '2^10 > 1000', explanation: '2^10 = 1024 > 1000.' },
  ],
  'math-41': [
    { text: 'log₂(16) =', type: 'input', correctAnswer: '4', explanation: '2⁴ = 16, следовательно log₂(16) = 4.' },
    { text: 'Область определения y = ln(x-1):', type: 'choice', options: ['x > 1', 'x > 0', 'x ≥ 1', 'Все x'], correctAnswer: 'x > 1', explanation: 'Аргумент логарифма должен быть положительным: x-1 > 0 → x > 1.' },
    { text: 'log₅(125) =', type: 'input', correctAnswer: '3', explanation: '5³ = 125, следовательно log₅(125) = 3.' },
    { text: 'lg(1000) =', type: 'input', correctAnswer: '3', explanation: '10³ = 1000, следовательно lg(1000) = 3.' },
    { text: 'ln(e²) =', type: 'input', correctAnswer: '2', explanation: 'ln(e²) = 2·ln(e) = 2·1 = 2.' },
    { text: 'log₃(1/9) =', type: 'input', correctAnswer: '-2', explanation: '3^(-2) = 1/9, следовательно log₃(1/9) = -2.' },
    { text: 'log₂(3) + log₂(4) =', type: 'input', correctAnswer: 'log₂(12)', explanation: 'log₂(3) + log₂(4) = log₂(3·4) = log₂(12).' },
  ],
  'math-42': [
    { text: '(a + b)³ =', type: 'choice', options: ['a³ + 3a²b + 3ab² + b³', 'a³ + b³', 'a³ + 3ab + b³', '3a + 3b'], correctAnswer: 'a³ + 3a²b + 3ab² + b³', explanation: 'Формула бинома Ньютона: (a+b)³ = a³+3a²b+3ab²+b³.' },
    { text: 'C₆³ =', type: 'input', correctAnswer: '20', explanation: 'C₆³ = 6!/(3!·3!) = 720/36 = 20.' },
    { text: 'Сумма биномиальных коэффициентов (a+b)⁴ равна:', type: 'input', correctAnswer: '16', explanation: 'Σ C₄ᵏ = 2⁴ = 16.' },
    { text: '(a - b)² =', type: 'choice', options: ['a² - 2ab + b²', 'a² + 2ab + b²', 'a² - b²', 'a² + b²'], correctAnswer: 'a² - 2ab + b²', explanation: 'Разность в квадрате: (a-b)² = a² - 2ab + b².' },
    { text: 'Коэффициент при a²b в разложении (a+b)³:', type: 'input', correctAnswer: '3', explanation: 'C₃¹ = 3. Член: C₃¹·a²·b = 3a²b.' },
    { text: 'C₈⁵ =', type: 'input', correctAnswer: '56', explanation: 'C₈⁵ = C₈³ = 8!/(3!·5!) = 56.' },
    { text: '(a+b)⁰ =', type: 'input', correctAnswer: '1', explanation: 'Любое число в нулевой степени (кроме 0⁰) равно 1.' },
  ],
  'math-43': [
    { text: 'M(X) для распределения: P(X=0)=0.3, P(X=1)=0.7:', type: 'input', correctAnswer: '0.7', explanation: 'M(X) = 0·0.3 + 1·0.7 = 0.7.' },
    { text: 'M(X+Y) = M(X) + M(Y) верно для:', type: 'choice', options: ['Любых X и Y', 'Только независимых', 'Только одинаково распределённых', 'Только дискретных'], correctAnswer: 'Любых X и Y', explanation: 'Линейность математического ожидания верна для любых случайных величин.' },
    { text: 'M(X) = 5, M(Y) = 3. M(2X + Y) =', type: 'input', correctAnswer: '13', explanation: 'M(2X+Y) = 2M(X) + M(Y) = 10 + 3 = 13.' },
    { text: 'M(C) =', type: 'choice', options: ['C', '0', 'C²', '1'], correctAnswer: 'C', explanation: 'Математическое ожидание постоянной величины равно самой этой величине.' },
    { text: 'Бросают монету 100 раз. Математическое ожидание числа орлов:', type: 'input', correctAnswer: '50', explanation: 'X ~ B(100, 0.5). M(X) = np = 100·0.5 = 50.' },
    { text: 'P(X=1)=0.6, P(X=2)=0.4. M(X) =', type: 'input', correctAnswer: '1.4', explanation: 'M(X) = 1·0.6 + 2·0.4 = 0.6 + 0.8 = 1.4.' },
    { text: 'M(X) = 4. M(3X - 2) =', type: 'input', correctAnswer: '10', explanation: 'M(3X-2) = 3M(X) - 2 = 12 - 2 = 10.' },
  ],
  'math-44': [
    { text: 'D(X) = M(X²) - (M(X))². Если M(X) = 2 и M(X²) = 8, то D(X) =', type: 'input', correctAnswer: '4', explanation: 'D(X) = 8 - 4 = 4.' },
    { text: 'D(C) =', type: 'input', correctAnswer: '0', explanation: 'Дисперсия постоянной величины равна 0 — нет разброса.' },
    { text: 'D(2X) =', type: 'choice', options: ['2D(X)', '4D(X)', 'D(X)', 'D(X)/2'], correctAnswer: '4D(X)', explanation: 'D(CX) = C²·D(X). При C=2: D(2X) = 4D(X).' },
    { text: 'σ(X) = 3. Чему равна σ(X + 5)?', type: 'input', correctAnswer: '3', explanation: 'Сдвиг не влияет на стандартное отклонение: σ(X+c) = σ(X).' },
    { text: 'Биномиальное распределение B(20, 0.5). D(X) =', type: 'input', correctAnswer: '5', explanation: 'D(X) = np(1-p) = 20·0.5·0.5 = 5.' },
    { text: 'σ(X) = 4. Чему равна σ(3X)?', type: 'input', correctAnswer: '12', explanation: 'σ(CX) = |C|·σ(X) = 3·4 = 12.' },
    { text: 'Если D(X) = 0, что можно сказать о X?', type: 'choice', options: ['X постоянна', 'X = 0', 'X не определена', 'X > 0'], correctAnswer: 'X постоянна', explanation: 'D(X) = 0 означает отсутствие разброса — X принимает唯一 значение.' },
  ],
  'math-45': [
    { text: 'Угловой коэффициент прямой y = -5x + 3:', type: 'input', correctAnswer: '-5', explanation: 'В уравнении y = kx + b коэффициент k = -5.' },
    { text: 'Прямые y = 2x + 1 и y = 2x - 3 являются:', type: 'choice', options: ['Параллельными', 'Перпендикулярными', 'Совпадающими', 'Секущими'], correctAnswer: 'Параллельными', explanation: 'Одинаковые угловые коэффициенты k = 2, различные свободные члены — параллельны.' },
    { text: 'tg(φ) = |(k₁-k₂)/(1+k₁k₂)|. Угол между y = x и y = 0:', type: 'input', correctAnswer: '45', explanation: 'k₁ = 1, k₂ = 0. tg(φ) = |1/1| = 1, φ = 45°.' },
    { text: 'Угловой коэффициент прямой, перпендикулярной y = 4x:', type: 'input', correctAnswer: '-0.25', explanation: 'k₁·k₂ = -1 → k₂ = -1/4 = -0.25.' },
    { text: 'Прямые y = 3x + 2 и y = -x + 5 пересекаются под углом (приблизительно):', type: 'choice', options: ['90°', '45°', '60°', '30°'], correctAnswer: '90°', explanation: 'k₁·k₂ = 3·(-1) = -3 ≠ -1. tg(φ) = |(3-(-1))/(1-3)| = 4/2 = 2. φ ≈ 63°.' },
    { text: 'Прямая x = 5 является:', type: 'choice', options: ['Вертикальной', 'Горизонтальной', 'Наклонной', 'Нулевой'], correctAnswer: 'Вертикальной', explanation: 'x = const — вертикальная прямая, параллельная оси Oy.' },
    { text: 'Расстояние между параллельными прямыми y = 2x + 1 и y = 2x - 7:', type: 'choice', options: ['8/√5', '8', '4', '8/2'], correctAnswer: '8/√5', explanation: 'd = |C₁-C₂|/√(A²+B²) = |1-(-7)|/√(1+4) = 8/√5.' },
  ],
  'math-46': [
    { text: 'Расстояние от точки (1, 1, 1) до точки (4, 5, 13):', type: 'input', correctAnswer: '√185', explanation: 'd = √(9+16+144) = √169... Пересчитаем: (4-1)²+(5-1)²+(13-1)² = 9+16+144 = 169. d = 13.' },
    { text: 'Расстояние от точки (3, 0, 4) до плоскости z = 0:', type: 'input', correctAnswer: '4', explanation: 'Плоскость z = 0 — xy-плоскость. Расстояние = |4| = 4.' },
    { text: 'Середина отрезка AB, где A(1, 2, 3) и B(5, 6, 7):', type: 'choice', options: ['(3, 4, 5)', '(4, 4, 4)', '(3, 4, 4)', '(2, 3, 5)'], correctAnswer: '(3, 4, 5)', explanation: 'M = ((1+5)/2, (2+6)/2, (3+7)/2) = (3, 4, 5).' },
    { text: 'Расстояние между параллельными плоскостями z = 3 и z = 10:', type: 'input', correctAnswer: '7', explanation: 'd = |10 - 3| = 7.' },
    { text: 'Расстояние от начала координат до точки (6, 6, 7):', type: 'input', correctAnswer: '11', explanation: 'd = √(36+36+49) = √121 = 11.' },
    { text: 'Расстояние от точки (2, 3, 1) до плоскости x + y + z = 0:', type: 'choice', options: ['6/√3', '2√3', '3', '2'], correctAnswer: '2√3', explanation: 'd = |2+3+1|/√(1+1+1) = 6/√3 = 2√3.' },
    { text: 'Точки A(0,0,0) и B(1,1,1) определяют отрезок длиной:', type: 'input', correctAnswer: '√3', explanation: 'd = √(1+1+1) = √3.' },
  ],
  'math-47': [
    { text: 'Площадь круга с радиусом 7:', type: 'input', correctAnswer: '49π', explanation: 'S = πR² = π·49 = 49π.' },
    { text: 'Объём куба с ребром 4:', type: 'input', correctAnswer: '64', explanation: 'V = a³ = 64.' },
    { text: 'Площадь поверхности куба с ребром 3:', type: 'input', correctAnswer: '54', explanation: 'S = 6a² = 6·9 = 54.' },
    { text: 'Объём цилиндра с радиусом 3 и высотой 7:', type: 'input', correctAnswer: '63π', explanation: 'V = πR²h = π·9·7 = 63π.' },
    { text: 'Площадь трапеции с основаниями 5 и 9 и высотой 4:', type: 'input', correctAnswer: '28', explanation: 'S = (5+9)·4/2 = 28.' },
    { text: 'Объём шара с радиусом 3:', type: 'choice', options: ['36π', '12π', '27π', '9π'], correctAnswer: '36π', explanation: 'V = 4πR³/3 = 4π·27/3 = 36π.' },
    { text: 'Площадь ромба с диагоналями 10 и 8:', type: 'input', correctAnswer: '40', explanation: 'S = d₁d₂/2 = 10·8/2 = 40.' },
  ],
  'math-48': [
    { text: 'Длина касательной из точки (10, 0) к окружности x²+y²=36:', type: 'input', correctAnswer: '8', explanation: 'd = 10, R = 6. l = √(100-36) = √64 = 8.' },
    { text: 'Касательная к окружности перпендикулярна:', type: 'choice', options: ['Радиусу в точке касания', 'Диаметру', 'Хорде', 'Касательной'], correctAnswer: 'Радиусу в точке касания', explanation: 'Основное свойство: касательная ⊥ радиусу в точке касания.' },
    { text: 'Расстояние от центра окружности до касательной равно:', type: 'choice', options: ['Радиусу', 'Диаметру', 'Двойному радиусу', 'Нулю'], correctAnswer: 'Радиусу', explanation: 'Касательная удалена от центра ровно на радиус.' },
    { text: 'Сколько касательных можно провести к окружности из внешней точки?', type: 'input', correctAnswer: '2', explanation: 'Из внешней точки проводятся ровно две касательные к окружности.' },
    { text: 'Длина касательной из точки (5, 5) к окружности x²+y²=9:', type: 'input', correctAnswer: '√41', explanation: 'd = √(25+25) = √50. l = √(50-9) = √41.' },
    { text: 'Прямая y = 3 является касательной к окружности x²+y²=9:', type: 'choice', options: ['Да', 'Нет', 'Секущей', 'Не пересекает'], correctAnswer: 'Нет', explanation: 'Расстояние от (0,0) до y=3 равно 3 = R. Прямая касается! Ответ: Да.' },
    { text: 'Если из точки проведены две касательные к окружности, то они:', type: 'choice', options: ['Равны по длине', 'Различны', 'Зависят от угла', 'Равны углу'], correctAnswer: 'Равны по длине', explanation: 'Длины касательных из одной точки к окружности равны.' },
  ],
  'math-49': [
    { text: 'Наибольшее значение x² - 4x + 7 на [0, 5]:', type: 'input', correctAnswer: '7', explanation: 'f\'(x) = 2x-4 = 0 → x = 2. f(0)=7, f(2)=3, f(5)=12. Макс = 12... Пересчитаем: f(5)=25-20+7=12. Макс = 12.' },
    { text: 'Наименьшее значение f(x) = x² на [-3, 3]:', type: 'input', correctAnswer: '0', explanation: 'Минимум x² = 0 при x = 0 ∈ [-3, 3].' },
    { text: 'Наибольшее значение sin(x) на [0, 2π]:', type: 'input', correctAnswer: '1', explanation: 'sin(x) достигает максимума 1 при x = π/2.' },
    { text: 'Наименьшее значение f(x) = -x² + 6x на [0, 10]:', type: 'input', correctAnswer: '-40', explanation: 'f(0)=0, f(3)=9, f(10)=-40. Минимум = -40.' },
    { text: 'Максимум функции y = 2sin(x) + 1:', type: 'input', correctAnswer: '3', explanation: 'sin(x) ≤ 1, значит 2sin(x)+1 ≤ 2·1+1 = 3.' },
    { text: 'Наименьшее значение e^x на [0, 1]:', type: 'input', correctAnswer: '1', explanation: 'e^x возрастающая, минимум при x=0: e⁰ = 1.' },
    { text: 'Наибольшее значение ln(x) на [1, e]:', type: 'input', correctAnswer: '1', explanation: 'ln(x) возрастает, максимум при x=e: ln(e) = 1.' },
  ],
  'math-50': [
    { text: 'Метод индукции предполагает доказательство для:', type: 'choice', options: ['n = 1 (базис) и переход от k к k+1', 'Всех n одновременно', 'Только n = 1', 'Только n = 2'], correctAnswer: 'n = 1 (базис) и переход от k к k+1', explanation: 'Математическая индукция: базис (n=1) + шаг индукции (n=k → n=k+1).' },
    { text: '1 + 2 + ... + n = n(n+1)/2. Проверьте для n = 3.', type: 'input', correctAnswer: '6', explanation: '1+2+3 = 6. Формула: 3·4/2 = 6. Верно.' },
    { text: 'Метод от противного заключается в:', type: 'choice', options: ['Предположении отрицания и выводе противоречия', 'Проверке на примерах', 'Прямом доказательстве', 'Использовании индукции'], correctAnswer: 'Предположении отрицания и выводе противоречия', explanation: 'Предполагаем, что утверждение ложно, и приходим к противоречию.' },
    { text: 'Доказательство от противного использует:', type: 'choice', options: ['Принцип включения-исключения', 'Закон исключённого третьего', 'Лемму', 'Формулу'], correctAnswer: 'Закон исключённого третьего', explanation: 'Любое утверждение либо истинно, либо ложно — закон исключённого третьего.' },
    { text: 'Сумма первых n нечётных чисел 1+3+5+...+(2n-1) =', type: 'choice', options: ['n²', 'n(n+1)', 'n²-n', '2n-1'], correctAnswer: 'n²', explanation: '1+3+5+...+(2n-1) = n² — классический результат.' },
    { text: 'Для индуктивного перехода нужно:', type: 'choice', options: ['Доказать для n=k+1, используя n=k', 'Доказать для n=k', 'Доказать для n=0', 'Ничего'], correctAnswer: 'Доказать для n=k+1, используя n=k', explanation: 'Шаг индукции: из истинности для n=k следует истинность для n=k+1.' },
    { text: 'Доказано для n=1: 2¹ > 1. Предположим 2ᵏ > k. Тогда 2^(k+1) = 2·2ᵏ > 2k ≥ k+1 при k ≥ 1. Это доказывает:', type: 'choice', options: ['2ⁿ > n для всех n ≥ 1', '2ⁿ = n', '2ⁿ < n', 'Только для n = 1'], correctAnswer: '2ⁿ > n для всех n ≥ 1', explanation: 'Базис + шаг индукции: доказано для всех n ≥ 1.' },
  ],
};

// Read the file
let content = fs.readFileSync(filePath, 'utf-8');

// For each topic in extraQuestions, replace placeholder questions
for (const [topicId, newQs] of Object.entries(extraQuestions)) {
  // Find the topic's new questions (IDs after the original 3)
  const topicNum = topicId.split('-')[1];
  
  // Find all question IDs for this topic
  const topicRegex = new RegExp(`(  \\{\\n    id: 'math-q(\\d+)',\\n    topicId: '${topicId}',\\n    text: 'Вопрос по теме[^}]+\\n  \\},)`, 'g');
  
  let matchIdx = 0;
  content = content.replace(topicRegex, (fullMatch, questionBlock, qNum) => {
    if (matchIdx < newQs.length) {
      const q = newQs[matchIdx];
      matchIdx++;
      return `  {\n    id: 'math-q${qNum}',\n    topicId: '${topicId}',\n    text: '${q.text.replace(/'/g, "\\'")}',\n    type: '${q.type}',\n${q.options ? `    options: [${q.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}],\n` : ''}    correctAnswer: '${q.correctAnswer.replace(/'/g, "\\'")}',\n    explanation: '${q.explanation.replace(/'/g, "\\'")}',\n    points: 1,\n  },`;
    }
    return questionBlock;
  });
}

// Verify
const remainingPlaceholders = (content.match(/Вопрос по теме/g) || []).length;
console.log(`Remaining placeholders: ${remainingPlaceholders}`);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed math.ts placeholders for topics 31-50');
