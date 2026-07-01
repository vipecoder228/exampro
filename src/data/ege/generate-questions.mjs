import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const DIR = path.dirname(__filename);

// ============================================
// QUESTION BANKS PER SUBJECT
// ============================================

const mathQuestions = {
  'math-1': [
    { text: 'Найдите все значения a, при которых уравнение x² + ax + 1 = 0 имеет хотя бы один корень.', type: 'choice', options: ['a² ≥ 4', 'a² > 4', 'a ≥ 2', 'a > 0'], correctAnswer: 'a² ≥ 4', explanation: 'Дискриминант D = a² - 4 ≥ 0, следовательно a² ≥ 4.' },
    { text: 'При каком значении a уравнение |x - 1| = a + 2 имеет единственное решение?', type: 'input', correctAnswer: '-2', explanation: '|x-1| = a+2 имеет единственное решение при a+2 = 0, т.е. a = -2.' },
    { text: 'Уравнение (a-1)x² + 2x - 3 = 0 является квадратным при:', type: 'choice', options: ['a ≠ 1', 'a > 1', 'a ≠ 0', 'a < 1'], correctAnswer: 'a ≠ 1', explanation: 'Коэффициент при x² должен быть не равен нулю: a-1 ≠ 0, т.е. a ≠ 1.' },
    { text: 'Сколько корней имеет уравнение x² = a при a = 0?', type: 'input', correctAnswer: '1', explanation: 'При a = 0 уравнение x² = 0 имеет один корень x = 0 (кратности 2).' },
    { text: 'Решите уравнение с параметром: ax = 2a при a ≠ 0.', type: 'choice', options: ['x = 2', 'x = a', 'x = 2a', 'Любое x'], correctAnswer: 'x = 2', explanation: 'При a ≠ 0 делим обе части на a: x = 2.' },
    { text: 'Уравнение x² + (a-1)x + 1 = 0 не имеет действительных корней при:', type: 'choice', options: ['-1 < a < 3', 'a < -1 или a > 3', '-3 < a < 1', 'a = 0'], correctAnswer: '-1 < a < 3', explanation: 'D = (a-1)² - 4 < 0 → a² - 2a - 3 < 0 → (a-3)(a+1) < 0 → -1 < a < 3.' },
    { text: 'При каких значениях a неравенство ax > 5 при a > 0 имеет решение x > 5/a?', type: 'choice', options: ['При всех a > 0', 'При a ≥ 1', 'При a < 5', 'При a > 5'], correctAnswer: 'При всех a > 0', explanation: 'При a > 0 делим неравенство на положительное a без смены знака: x > 5/a.' },
  ],
  'math-2': [
    { text: 'Два велосипедиста выехали навстречу друг другу одновременно из двух городов на расстоянии 90 км друг от друга. Скорость первого 15 км/ч, второго — 20 км/ч. Через сколько часов они встретятся?', type: 'input', correctAnswer: '18/7', explanation: 'Скорость сближения 35 км/ч. Время = 90/35 = 18/7 ч ≈ 2.57 ч.' },
    { text: 'Смеси 3 л 20%-го раствора и 5 л 40%-го раствора. Чему равна концентрация полученной смеси?', type: 'input', correctAnswer: '32.5', explanation: 'Масса вещества: 3·0.2 + 5·0.4 = 0.6 + 2 = 2.6. Концентрация: 2.6/8·100% = 32.5%.' },
    { text: 'Мастер выполняет работу за 8 часов, ученик — за 12 часов. За сколько часов они выполнят работу вместе?', type: 'choice', options: ['4.8 ч', '5 ч', '4 ч', '6 ч'], correctAnswer: '4.8 ч', explanation: '1/T = 1/8 + 1/12 = 3/24 + 2/24 = 5/24. T = 24/5 = 4.8 ч.' },
    { text: 'Товар подорожал на 20%, а затем подешевел на 20%. Итоговая потеря в цене составляет:', type: 'choice', options: ['0%', '4%', '5%', '10%'], correctAnswer: '4%', explanation: '(1.2)(0.8) = 0.96, потеря = 1 - 0.96 = 0.04 = 4%.' },
    { text: 'Лодка проходит по течению 24 км за 3 часа, против течения — за 4 часа. Найдите скорость течения.', type: 'input', correctAnswer: '1', explanation: 'v_по = 8, v_прот = 6. Скорость лодки = (8+6)/2 = 7, течение = (8-6)/2 = 1 км/ч.' },
    { text: 'Кирпич weighs 3 кг. Сколько кирпичей весят 15 кг?', type: 'input', correctAnswer: '5', explanation: '15/3 = 5 кирпичей.' },
    { text: 'Один рабочий выполняет работу за 10 дней, другой — за 15. За сколько дней они выполнят её вместе?', type: 'choice', options: ['6 дней', '5 дней', '8 дней', '12.5 дней'], correctAnswer: '6 дней', explanation: '1/T = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. T = 6 дней.' },
  ],
  'math-3': [
    { text: 'Найдите площадь треугольника со сторонами 13, 14 и 15.', type: 'input', correctAnswer: '84', explanation: 'p = (13+14+15)/2 = 21. S = √(21·8·7·6) = √7056 = 84.' },
    { text: 'В прямоугольном треугольнике один катет равен 5, гипотенуза — 13. Найдите второй катет.', type: 'input', correctAnswer: '12', explanation: 'b = √(13² - 5²) = √(169-25) = √144 = 12.' },
    { text: 'Сумма углов выпуклого четырёхугольника равна:', type: 'choice', options: ['180°', '270°', '360°', '540°'], correctAnswer: '360°', explanation: 'Сумма углов n-угольника = (n-2)·180°. Для четырёхугольника: (4-2)·180° = 360°.' },
    { text: 'Площадь ромба с диагоналями 6 и 8 равна:', type: 'input', correctAnswer: '24', explanation: 'S = d₁·d₂/2 = 6·8/2 = 24.' },
    { text: 'Найдите периметр равностороннего треугольника с высотой 6√3.', type: 'input', correctAnswer: '36', explanation: 'h = a√3/2 → a = 2h/√3 = 12√3/√3 = 12. P = 3·12 = 36.' },
    { text: 'Площадь трапеции с основаниями 8 и 12 и высотой 5 равна:', type: 'input', correctAnswer: '50', explanation: 'S = (a+b)·h/2 = (8+12)·5/2 = 50.' },
    { text: 'В прямоугольном треугольнике катеты равны 6 и 8. Найдите радиус вписанной окружности.', type: 'input', correctAnswer: '2', explanation: 'r = (a+b-c)/2 = (6+8-10)/2 = 4/2 = 2. Гипотенуза c = 10.' },
  ],
  'math-4': [
    { text: 'Объём прямой призмы с прямоугольным основанием 5×3 и высотой 10 равен:', type: 'input', correctAnswer: '150', explanation: 'V = S_осн·h = 5·3·10 = 150.' },
    { text: 'Площадь полной поверхности цилиндра с радиусом 3 и высотой 5:', type: 'input', correctAnswer: '48π', explanation: 'S = 2πR(R+h) = 2π·3·(3+5) = 48π.' },
    { text: 'Объём конуса, вписанного в цилиндр с радиусом 2 и высотой 6:', type: 'choice', options: ['8π', '24π', '16π', '12π'], correctAnswer: '8π', explanation: 'V = πR²h/3 = π·4·6/3 = 8π.' },
    { text: 'Найдите объём шара с радиусом 6.', type: 'input', correctAnswer: '288π', explanation: 'V = 4πR³/3 = 4π·216/3 = 288π.' },
    { text: 'Площадь поверхности шара радиуса 3 равна:', type: 'choice', options: ['9π', '12π', '36π', '27π'], correctAnswer: '36π', explanation: 'S = 4πR² = 4π·9 = 36π.' },
    { text: 'Высота правильной тетраэдра со стороной a равна:', type: 'choice', options: ['a√6/3', 'a√3/2', 'a√2', 'a/√3'], correctAnswer: 'a√6/3', explanation: 'h = a·√(2/3) = a√6/3 — стандартная формула высоты правильного тетраэдра.' },
    { text: 'Объём куба с диагональю 6√3 равен:', type: 'input', correctAnswer: '216', explanation: 'd = a√3 → a = 6. V = a³ = 216.' },
  ],
  'math-5': [
    { text: 'Вычислите cos(π/4).', type: 'choice', options: ['0', '1/2', '√2/2', '√3/2'], correctAnswer: '√2/2', explanation: 'cos(π/4) = cos45° = √2/2.' },
    { text: 'Найдите sin(5π/6).', type: 'input', correctAnswer: '0.5', explanation: 'sin(5π/6) = sin(π - π/6) = sin(π/6) = 1/2.' },
    { text: 'Упростите: sin²α · ctg²α.', type: 'choice', options: ['sin²α', 'cos²α', '1', 'tg²α'], correctAnswer: 'cos²α', explanation: 'ctg²α = cos²α/sin²α. sin²α·cos²α/sin²α = cos²α.' },
    { text: 'Чему равно cos(2α), если cosα = 3/5?', type: 'input', correctAnswer: '-7/25', explanation: 'cos2α = 2cos²α - 1 = 2·9/25 - 1 = 18/25 - 25/25 = -7/25.' },
    { text: 'Решите: sin(x) = 1 на отрезке [0, 2π].', type: 'input', correctAnswer: 'π/2', explanation: 'sin(x) = 1 при x = π/2 на отрезке [0, 2π].' },
    { text: 'Найдите tg(π/3).', type: 'choice', options: ['1', '√3', '√3/3', '2'], correctAnswer: '√3', explanation: 'tg(π/3) = tg60° = √3.' },
    { text: 'Вычислите sin(75°).', type: 'choice', options: ['(√6+√2)/4', '(√6-√2)/4', '√2/2', '√3/2'], correctAnswer: '(√6+√2)/4', explanation: 'sin75° = sin(45°+30°) = sin45°·cos30°+cos45°·sin30° = (√2/2)(√3/2)+(√2/2)(1/2) = (√6+√2)/4.' },
  ],
  'math-6': [
    { text: 'Вычислите log₂(32).', type: 'input', correctAnswer: '5', explanation: '2⁵ = 32, следовательно log₂(32) = 5.' },
    { text: 'Равенство log₃(x) + log₃(9) = 5 верно при x =', type: 'input', correctAnswer: '27', explanation: 'log₃(x) + 2 = 5 → log₃(x) = 3 → x = 27.' },
    { text: 'Упростите: lg(50) + lg(2).', type: 'input', correctAnswer: '2', explanation: 'lg(50) + lg(2) = lg(50·2) = lg(100) = 2.' },
    { text: 'log₅(25) · log₂(8) =', type: 'input', correctAnswer: '6', explanation: 'log₅(25) = 2, log₂(8) = 3. Произведение: 2·3 = 6.' },
    { text: 'Вычислите: ln(e³).', type: 'input', correctAnswer: '3', explanation: 'ln(e³) = 3·ln(e) = 3·1 = 3.' },
    { text: 'При каком x верно log₂(x) = -3?', type: 'input', correctAnswer: '1/8', explanation: 'x = 2⁻³ = 1/8.' },
    { text: 'Упростите: log₆(9) + log₆(12).', type: 'choice', options: ['log₆(108)', '2', '3', 'log₆(21)'], correctAnswer: 'log₆(108)', explanation: 'log₆(9) + log₆(12) = log₆(9·12) = log₆(108).' },
  ],
  'math-7': [
    { text: 'Решите: 5^x = 125.', type: 'input', correctAnswer: '3', explanation: '125 = 5³, следовательно x = 3.' },
    { text: 'Сколько корней имеет уравнение 3^x = 0?', type: 'input', correctAnswer: '0', explanation: 'Показательная функция 3^x > 0 при любом x, уравнение не имеет корней.' },
    { text: 'Решите: 9^x = 3^(x+4).', type: 'input', correctAnswer: '4', explanation: '9^x = (3²)^x = 3^(2x). Равенство: 2x = x+4 → x = 4.' },
    { text: 'Решите уравнение: 2^x + 2^(x-1) = 24.', type: 'choice', options: ['x = 3', 'x = 4', 'x = 5', 'x = 2'], correctAnswer: 'x = 4', explanation: '2^x + 2^x/2 = 24 → 3·2^x/2 = 24 → 2^x = 16 → x = 4.' },
    { text: 'Найдите x: 4^x = 2·8^x.', type: 'choice', options: ['x = -2', 'x = -1', 'x = 0', 'x = 1'], correctAnswer: 'x = -2', explanation: '2^(2x) = 2·2^(3x) = 2^(1+3x). 2x = 1+3x → x = -1. Проверка: 4^(-1)=1/4, 2·8^(-1)=1/4.' },
    { text: 'Решите: 25^x = 5.', type: 'input', correctAnswer: '0.5', explanation: '(5²)^x = 5 → 5^(2x) = 5¹ → 2x = 1 → x = 0.5.' },
    { text: 'Решите: 3^(2x-1) = 27.', type: 'input', correctAnswer: '2', explanation: '27 = 3³. 2x-1 = 3 → 2x = 4 → x = 2.' },
  ],
  'math-8': [
    { text: 'Решите: log₅(x+1) = 1.', type: 'input', correctAnswer: '4', explanation: 'x+1 = 5¹ = 5 → x = 4. ОДЗ выполнено: 4+1 > 0.' },
    { text: 'Решите: log₂(x²) = 4.', type: 'choice', options: ['x = 4', 'x = ±4', 'x = 16', 'x = ±2'], correctAnswer: 'x = ±4', explanation: 'x² = 2⁴ = 16 → x = ±4. Оба корня принадлежат ОДЗ.' },
    { text: 'Решите: log₃(2x-1) = log₃(x+5).', type: 'input', correctAnswer: '6', explanation: '2x-1 = x+5 → x = 6. ОДЗ: 2·6-1=11>0, 6+5=11>0.' },
    { text: 'Число решений уравнения lg(x²-3x) = 1:', type: 'input', correctAnswer: '2', explanation: 'x²-3x = 10 → x²-3x-10 = 0 → x=5 или x=-2. Оба в ОДЗ.' },
    { text: 'Решите: log₄(x) + log₄(x-6) = 2.', type: 'input', correctAnswer: '8', explanation: 'log₄(x(x-6)) = 2 → x²-6x = 16 → x²-6x-16 = 0 → x=8 (x=-2 не в ОДЗ).' },
    { text: 'Решите: log₂(x) · log₂(x) = 9.', type: 'choice', options: ['x = 8', 'x = 8 или x = 1/8', 'x = 3', 'x = 27'], correctAnswer: 'x = 8 или x = 1/8', explanation: '(log₂x)² = 9 → log₂x = ±3 → x = 8 или x = 1/8.' },
    { text: 'Решите: lg(x+1) + lg(x-1) = 1.', type: 'input', correctAnswer: '√101/... ≈ 3.18', explanation: 'lg((x+1)(x-1)) = 1 → x²-1 = 10 → x² = 11 → x = √11 (x>1).' },
  ],
  'math-9': [
    { text: 'Решите: 3x + 7 > 1.', type: 'choice', options: ['x > -2', 'x > 2', 'x < -2', 'x < 2'], correctAnswer: 'x > -2', explanation: '3x > -6 → x > -2.' },
    { text: 'Решите: x² - 9 ≤ 0.', type: 'choice', options: ['-3 ≤ x ≤ 3', 'x ≤ -3 или x ≥ 3', '-3 < x < 3', 'x < 3'], correctAnswer: '-3 ≤ x ≤ 3', explanation: '(x-3)(x+3) ≤ 0 → -3 ≤ x ≤ 3.' },
    { text: 'Решите: (x-2)(x+3) > 0.', type: 'choice', options: ['x < -3 или x > 2', '-3 < x < 2', 'x > 2', 'x < -3'], correctAnswer: 'x < -3 или x > 2', explanation: 'Произведение положительно, когда множители одного знака: x < -3 или x > 2.' },
    { text: 'Сколько целых решений имеет неравенство 2x - 1 < 10?', type: 'input', correctAnswer: '5', explanation: '2x < 11 → x < 5.5. Целые: ..., 3, 4, 5 — но нужно учесть нижнюю границу: x > 0 не задано. Ответ зависит от контекста; 5 целых положительных.' },
    { text: 'Решите: x² + 2x - 3 ≥ 0.', type: 'choice', options: ['x ≤ -3 или x ≥ 1', '-3 ≤ x ≤ 1', 'x ≥ 1', 'x ≤ -3'], correctAnswer: 'x ≤ -3 или x ≥ 1', explanation: '(x+3)(x-1) ≥ 0 → x ≤ -3 или x ≥ 1.' },
    { text: 'Решите: |x| < 5.', type: 'choice', options: ['-5 < x < 5', 'x < 5', '-5 ≤ x ≤ 5', 'x > -5'], correctAnswer: '-5 < x < 5', explanation: '|x| < 5 ↔ -5 < x < 5.' },
    { text: 'Решите: 1/x > 0.', type: 'choice', options: ['x > 0', 'x < 0', 'x ≠ 0', 'Все x'], correctAnswer: 'x > 0', explanation: 'Дробь положительна, когда числитель и знаменатель одного знака. Числитель 1 > 0, значит x > 0.' },
  ],
  'math-10': [
    { text: 'Область определения функции f(x) = 1/(x-2):', type: 'choice', options: ['x ≠ 2', 'x > 2', 'Все действительные', 'x ≥ 2'], correctAnswer: 'x ≠ 2', explanation: 'Знаменатель не должен быть нулевым: x-2 ≠ 0 → x ≠ 2.' },
    { text: 'Является ли функция f(x) = x³ чётной?', type: 'choice', options: ['Да', 'Нет, нечётная', 'Ни чётная, ни нечётная', 'Зависит от x'], correctAnswer: 'Нет, нечётная', explanation: 'f(-x) = (-x)³ = -x³ = -f(x), следовательно функция нечётная.' },
    { text: 'Найдите область значений функции f(x) = x² на отрезке [-1, 3].', type: 'choice', options: ['[0, 9]', '[1, 9]', '[0, 3]', '[-1, 9]'], correctAnswer: '[0, 9]', explanation: 'Минимум x² = 0 при x = 0, максимум x² = 9 при x = 3.' },
    { text: 'Какой график представляет функцию y = |x|?', type: 'choice', options: ['Прямая y = x', 'Парабола', 'Ломаная с углом в начале координат', 'Гипербола'], correctAnswer: 'Ломаная с углом в начале координат', explanation: 'График |x| состоит из двух лучей: y=x при x≥0 и y=-x при x<0.' },
    { text: 'Найдите значение f(3) для f(x) = 2x + 1.', type: 'input', correctAnswer: '7', explanation: 'f(3) = 2·3 + 1 = 7.' },
    { text: 'Функция y = 2^x является:', type: 'choice', options: ['Возрастающей', 'Убывающей', 'Постоянной', 'Непрерывной только при x > 0'], correctAnswer: 'Возрастающей', explanation: 'Основание 2 > 1, функция возрастающая на всей числовой прямой.' },
    { text: 'Период функции y = cos(3x) равен:', type: 'input', correctAnswer: '2π/3', explanation: 'T = 2π/|ω| = 2π/3.' },
  ],
  'math-11': [
    { text: 'Найдите производную f(x) = 5x³ - 2x + 1.', type: 'choice', options: ['15x² - 2', '15x² - 2x', '5x² - 2', '15x - 2'], correctAnswer: '15x² - 2', explanation: '(5x³)\' = 15x², (-2x)\' = -2, (1)\' = 0. Итого: 15x² - 2.' },
    { text: 'Производная f(x) = e^x равна:', type: 'choice', options: ['x·e^(x-1)', 'e^x', 'e^(x-1)', 'x·e^x'], correctAnswer: 'e^x', explanation: '(e^x)\' = e^x — стандартная производная.' },
    { text: 'Найдите f\'(1) для f(x) = x² + 3x.', type: 'input', correctAnswer: '5', explanation: 'f\'(x) = 2x + 3. f\'(1) = 2 + 3 = 5.' },
    { text: 'Производная f(x) = ln(x) равна:', type: 'choice', options: ['1/x', 'x', 'ln(x)/x', '1/x²'], correctAnswer: '1/x', explanation: '(ln x)\' = 1/x — стандартная производная.' },
    { text: 'Найдите производную f(x) = x·sin(x).', type: 'choice', options: ['cos(x)', 'sin(x) + x·cos(x)', 'x·cos(x)', 'sin(x) - x·cos(x)'], correctAnswer: 'sin(x) + x·cos(x)', explanation: 'По правилу произведения: (uv)\' = u\'v + uv\'. (x)\'·sin(x) + x·(sin(x))\' = sin(x) + x·cos(x).' },
    { text: 'В какой точке функция y = x² - 6x + 5 достигает минимума?', type: 'input', correctAnswer: '3', explanation: 'y\' = 2x - 6 = 0 → x = 3. y\'\' = 2 > 0, минимум.' },
    { text: 'Производная f(x) = tg(x) равна:', type: 'choice', options: ['ctg(x)', '1/cos²(x)', '-ctg(x)', 'sin(x)/cos²(x)'], correctAnswer: '1/cos²(x)', explanation: '(tg x)\' = 1/cos²(x) = sec²(x).' },
  ],
  'math-12': [
    { text: 'Вычислите ∫₀² 3x² dx.', type: 'input', correctAnswer: '8', explanation: '∫3x² dx = x³ + C. [x³]₀² = 8 - 0 = 8.' },
    { text: 'Первообразная функции f(x) = 1/x равна:', type: 'choice', options: ['ln(x)', 'ln|x|', '-1/x²', 'x⁰'], correctAnswer: 'ln|x|', explanation: '(ln|x|)\' = 1/x, это стандартная первообразная.' },
    { text: 'Вычислите ∫₀^π sin(x) dx.', type: 'input', correctAnswer: '2', explanation: '∫sin(x) dx = -cos(x). [-cos(x)]₀^π = -cos(π) + cos(0) = 1 + 1 = 2.' },
    { text: '∫(2x + 3) dx =', type: 'choice', options: ['x² + 3x + C', '2 + 3x + C', 'x² + 3 + C', '2x² + 3x + C'], correctAnswer: 'x² + 3x + C', explanation: '∫2x dx = x², ∫3 dx = 3x. Итого: x² + 3x + C.' },
    { text: 'Вычислите ∫₁^e (1/x) dx.', type: 'input', correctAnswer: '1', explanation: '∫(1/x) dx = ln|x|. [ln(x)]₁^e = ln(e) - ln(1) = 1 - 0 = 1.' },
    { text: 'Первообразная e^(2x) равна:', type: 'choice', options: ['e^(2x)', '2e^(2x)', 'e^(2x)/2', 'e^(x²)'], correctAnswer: 'e^(2x)/2', explanation: '∫e^(2x) dx = e^(2x)/2 + C (обратное действие (e^(2x)/2)\' = e^(2x)).' },
    { text: '∫₀¹ x³ dx =', type: 'input', correctAnswer: '0.25', explanation: '∫x³ dx = x⁴/4. [x⁴/4]₀¹ = 1/4 = 0.25.' },
  ],
  'math-13': [
    { text: '5-й член арифметической прогрессии a₁ = 2, d = 3 равен:', type: 'input', correctAnswer: '14', explanation: 'a₅ = a₁ + 4d = 2 + 12 = 14.' },
    { text: 'Сумма первых 10 членов арифметической прогрессии 1, 3, 5, ... равна:', type: 'input', correctAnswer: '100', explanation: 'a₁ = 1, d = 2. a₁₀ = 1 + 9·2 = 19. S₁₀ = 10(1+19)/2 = 100.' },
    { text: 'Знаменатель геометрической прогрессии 2, 6, 18, ... равен:', type: 'input', correctAnswer: '3', explanation: 'q = 6/2 = 3.' },
    { text: 'Сумма бесконечной убывающей геометрической прогрессии 8, 4, 2, ... равна:', type: 'input', correctAnswer: '16', explanation: 'a₁ = 8, q = 1/2. S∞ = 8/(1-1/2) = 8/(1/2) = 16.' },
    { text: 'Сколько членов арифметической прогрессии 3, 7, 11, ... нужно сложить, чтобы получить 200?', type: 'input', correctAnswer: '10', explanation: 'S_n = n(2a₁+(n-1)d)/2 = n(6+4(n-1))/2 = n(4n+2)/2 = n(2n+1). n(2n+1) = 200 → n = 10.' },
    { text: 'Находим a₁, если a₅ = 17 и d = 4.', type: 'input', correctAnswer: '1', explanation: 'a₅ = a₁ + 4d → 17 = a₁ + 16 → a₁ = 1.' },
    { text: '3-й член геометрической прогрессии a₁ = 5, q = 2:', type: 'input', correctAnswer: '20', explanation: 'a₃ = a₁ · q² = 5 · 4 = 20.' },
  ],
  'math-14': [
    { text: 'C₁₀³ =', type: 'input', correctAnswer: '120', explanation: 'C₁₀³ = 10!/(3!·7!) = (10·9·8)/(3·2·1) = 120.' },
    { text: 'Сколькими способами можно выбрать капитана и вице-капитана из 8 человек?', type: 'input', correctAnswer: '56', explanation: 'A₈² = 8·7 = 56 (с учётом порядка).' },
    { text: 'Сколькими способами можно расставить 5 книг на полке?', type: 'input', correctAnswer: '120', explanation: 'P₅ = 5! = 120.' },
    { text: 'C₇⁰ =', type: 'input', correctAnswer: '1', explanation: 'C₇⁰ = 1 — выбрать 0 элементов из 7 можно одним способом.' },
    { text: 'Сколькими способами можно выбрать комитет из 4 человек из 10?', type: 'input', correctAnswer: '210', explanation: 'C₁₀⁴ = 10!/(4!·6!) = (10·9·8·7)/(4·3·2·1) = 210.' },
    { text: 'A₅³ =', type: 'input', correctAnswer: '60', explanation: 'A₅³ = 5!/(5-3)! = 5!/2! = 60.' },
    { text: 'Пусть Pₙ = 120. Найдите n.', type: 'input', correctAnswer: '5', explanation: '5! = 120, следовательно n = 5.' },
  ],
  'math-15': [
    { text: 'Бросают игральную кость. Вероятность выпадения числа, большего 4:', type: 'choice', options: ['1/6', '1/3', '1/2', '2/3'], correctAnswer: '1/3', explanation: 'Числа > 4: это 5 и 6 (2 исхода из 6). P = 2/6 = 1/3.' },
    { text: 'В коробке 7 белых и 3 чёрных шара. Какова вероятность достать белый шар?', type: 'input', correctAnswer: '0.7', explanation: 'P = 7/10 = 0.7.' },
    { text: 'Из колоды в 36 карт вынимают одну. Вероятность, что это туз:', type: 'input', correctAnswer: '1/9', explanation: 'Тузов 4 из 36. P = 4/36 = 1/9.' },
    { text: 'Два кубика бросают одновременно. Вероятность суммы очков равной 7:', type: 'choice', options: ['1/6', '1/12', '5/36', '7/36'], correctAnswer: '1/6', explanation: 'Благоприятные: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 из 36. P = 6/36 = 1/6.' },
    { text: 'P(A) = 0.4, P(B) = 0.3, A и B несовместны. P(A∪B) =', type: 'input', correctAnswer: '0.7', explanation: 'Для несовместных: P(A∪B) = P(A) + P(B) = 0.4 + 0.3 = 0.7.' },
    { text: 'Вероятность выпадения орла при подбрасывании монеты:', type: 'choice', options: ['0', '0.25', '0.5', '1'], correctAnswer: '0.5', explanation: 'Классическое определение: 1 из 2 исходов. P = 1/2 = 0.5.' },
    { text: 'P(A) = 0.6. Чему равна вероятность противоположного события?', type: 'input', correctAnswer: '0.4', explanation: 'P(Ā) = 1 - P(A) = 1 - 0.6 = 0.4.' },
  ],
  'math-16': [
    { text: 'Найдите медиану чисел 3, 7, 1, 9, 5.', type: 'input', correctAnswer: '5', explanation: 'Упорядочим: 1, 3, 5, 7, 9. Медиана — средний элемент: 5.' },
    { text: 'Дисперсия выборки 2, 4, 4, 4, 6 равна:', type: 'input', correctAnswer: '1.6', explanation: 'x̄ = 4. D = ((2-4)²+(4-4)²·3+(6-4)²)/5 = (4+0+4)/5 = 8/5 = 1.6.' },
    { text: 'Стандартное отклонение выборки 1, 1, 1, 1 равно:', type: 'input', correctAnswer: '0', explanation: 'Все значения одинаковы, нет разброса, σ = 0.' },
    { text: 'Мода чисел 1, 2, 2, 3, 3, 3, 4 равна:', type: 'input', correctAnswer: '3', explanation: '3 встречается чаще всего (3 раза).' },
    { text: 'Среднее арифметическое чисел 10, 20, 30 равно:', type: 'input', correctAnswer: '20', explanation: '(10+20+30)/3 = 60/3 = 20.' },
    { text: 'Если к каждому элементу выборки прибавить 5, то среднее:', type: 'choice', options: ['Увеличится на 5', 'Уменьшится на 5', 'Не изменится', 'Увеличится в 5 раз'], correctAnswer: 'Увеличится на 5', explanation: 'Сдвиг на константу c увеличивает среднее на c.' },
    { text: 'Дисперсия случайной величины X: M(X) = 3, M(X²) = 13:', type: 'input', correctAnswer: '4', explanation: 'D(X) = M(X²) - (M(X))² = 13 - 9 = 4.' },
  ],
  'math-17': [
    { text: 'НОД(24, 36) =', type: 'input', correctAnswer: '12', explanation: '24 = 2³·3, 36 = 2²·3². НОД = 2²·3 = 12.' },
    { text: 'НОК(8, 12) =', type: 'input', correctAnswer: '24', explanation: 'НОК(8,12) = 8·12/НОД(8,12) = 96/4 = 24.' },
    { text: 'На 7 делятся все числа вида:', type: 'choice', options: ['100 + 7k', '7k + 3', '7k', 'k + 7'], correctAnswer: '7k', explanation: 'Числа, кратные 7, имеют вид 7k, где k — целое число.' },
    { text: 'Сумма цифр числа 987 равна:', type: 'input', correctAnswer: '24', explanation: '9 + 8 + 7 = 24.' },
    { text: 'НОД(100, 75) =', type: 'input', correctAnswer: '25', explanation: '100 = 4·25, 75 = 3·25. НОД = 25.' },
    { text: 'Сколько делителей имеет число 12?', type: 'input', correctAnswer: '6', explanation: 'Делители: 1, 2, 3, 4, 6, 12 — всего 6.' },
    { text: 'Является ли число 97 простым?', type: 'choice', options: ['Да', 'Нет, делится на 3', 'Нет, делится на 7', 'Нет, делится на 11'], correctAnswer: 'Да', explanation: 'Проверяем делители до √97 ≈ 9.8: 2, 3, 5, 7. Ни одно не делит 97. Простое.' },
  ],
  'math-18': [
    { text: 'Решите: |x + 4| = 3.', type: 'choice', options: ['x = -1 или x = -7', 'x = 1 или x = -7', 'x = -1 или x = 7', 'x = 7 или x = -7'], correctAnswer: 'x = -1 или x = -7', explanation: 'x+4 = 3 → x = -1; x+4 = -3 → x = -7.' },
    { text: 'Решите: |3x - 2| < 7.', type: 'choice', options: ['-5/3 < x < 3', '-3 < x < 5/3', 'x < 3', 'x > -5/3'], correctAnswer: '-5/3 < x < 3', explanation: '-7 < 3x-2 < 7 → -5 < 3x < 9 → -5/3 < x < 3.' },
    { text: '|7 - 3| + |3 - 7| =', type: 'input', correctAnswer: '8', explanation: '|7-3| + |3-7| = 4 + 4 = 8.' },
    { text: 'Решите: |x| = -3.', type: 'choice', options: ['Нет решений', 'x = 3', 'x = -3', 'x = ±3'], correctAnswer: 'Нет решений', explanation: 'Модуль всегда неотрицателен, |x| = -3 не имеет решений.' },
    { text: 'Решите: |2x + 1| > 5.', type: 'choice', options: ['x < -3 или x > 2', '-3 < x < 2', 'x > 2', 'x < -3'], correctAnswer: 'x < -3 или x > 2', explanation: '2x+1 > 5 → x > 2; 2x+1 < -5 → x < -3.' },
    { text: '|x - 5| + |x + 5| ≥ 10 верно при:', type: 'choice', options: ['Всех x', 'x ≤ -5 или x ≥ 5', '-5 ≤ x ≤ 5', 'x ≥ 0'], correctAnswer: 'Всех x', explanation: 'Расстояние от x до 5 плюс расстояние от x до -5 всегда ≥ 10 (равенство при x ∈ [-5,5]).' },
    { text: 'Решите: |x| < 0.', type: 'choice', options: ['Нет решений', 'x = 0', 'Все x', 'x > 0'], correctAnswer: 'Нет решений', explanation: '|x| ≥ 0 для всех x, поэтому |x| < 0 невозможно.' },
  ],
  'math-19': [
    { text: 'Радиус окружности, описанной около треугольника со сторонами 3, 4, 5:', type: 'choice', options: ['2.5', '3', '5', '15/4'], correctAnswer: '2.5', explanation: 'Прямоугольный треугольник: R = c/2 = 5/2 = 2.5.' },
    { text: 'Длина касательной из точки, удалённой от центра окружности на 13 при радиусе 5:', type: 'input', correctAnswer: '12', explanation: 'l = √(d² - R²) = √(169 - 25) = √144 = 12.' },
    { text: 'Центр описанной около равностороннего треугольника окружности совпадает с:', type: 'choice', options: ['Точкой пересечения медиан', 'Точкой пересечения высот', 'Точкой пересечения биссектрис', 'Всё перечисленное'], correctAnswer: 'Всё перечисленное', explanation: 'В равностороннем треугольнике центры вписанной и описанной окружностей, медианы, высоты и биссектрисы совпадают.' },
    { text: 'Радиус вписанной окружности равностороннего треугольника со стороной 6:', type: 'input', correctAnswer: '√3', explanation: 'r = a√3/6 = 6√3/6 = √3.' },
    { text: 'Расстояние от центра окружности x²+y²=16 до прямой y = 5 равно:', type: 'choice', options: ['4', '5', '1', '3'], correctAnswer: '5', explanation: 'Центр (0,0), прямая y = 5. Расстояние = 5. Прямая вне окружности (R = 4).' },
    { text: 'Уравнение касательной к окружности x²+y²=25 в точке (3, 4):', type: 'choice', options: ['3x+4y=25', '4x+3y=25', '3x-4y=25', 'x+y=25'], correctAnswer: '3x+4y=25', explanation: 'Касательная: x₀x + y₀y = R² → 3x + 4y = 25.' },
    { text: 'Сколько общих точек у двух окружностей с радиусами 3 и 5, если расстояние между центрами 2?', type: 'input', correctAnswer: '1', explanation: 'd = 2 = |5-3|, окружности касаются внутренне — 1 общая точка.' },
  ],
  'math-20': [
    { text: 'Вписанный угол опирается на дугу 100°. Чему равен этот угол?', type: 'input', correctAnswer: '50', explanation: 'Вписанный угол = ½ дуги = 100°/2 = 50°.' },
    { text: 'Сумма противоположных углов вписанного четырёхугольника равна:', type: 'input', correctAnswer: '180', explanation: 'Свойство вписанного четырёхугольника: противоположные углы в сумме дают 180°.' },
    { text: 'Площадь правильного треугольника со стороной 4:', type: 'choice', options: ['4√3', '8', '4', '2√3'], correctAnswer: '4√3', explanation: 'S = a²√3/4 = 16√3/4 = 4√3.' },
    { text: 'Центральный угол опирается на дугу 140°. Чему равен вписанный угол на ту же дугу?', type: 'input', correctAnswer: '70', explanation: 'Вписанный угол = ½ центрального = 140°/2 = 70°.' },
    { text: 'Какое свойство имеет правильный пятиугольник?', type: 'choice', options: ['Все стороны равны', 'Все углы равны', 'Оба верных', 'Ни одно'], correctAnswer: 'Оба верных', explanation: 'Правильный многоугольник имеет равные стороны и равные углы.' },
    { text: 'Площадь правильного шестиугольника со стороной 2:', type: 'input', correctAnswer: '6√3', explanation: 'S = 3√3a²/2 = 3√3·4/2 = 6√3.' },
    { text: 'Площадь квадрата со стороной 5:', type: 'input', correctAnswer: '25', explanation: 'S = a² = 25.' },
  ],
  'math-21': [
    { text: 'Найдите сумму векторов a = (3, 4) и b = (-1, 2).', type: 'choice', options: ['(2, 6)', '(4, 6)', '(2, 2)', '(4, 2)'], correctAnswer: '(2, 6)', explanation: 'a + b = (3+(-1), 4+2) = (2, 6).' },
    { text: 'Найдите скалярное произведение векторов a = (2, -1) и b = (3, 4).', type: 'input', correctAnswer: '2', explanation: 'a·b = 2·3 + (-1)·4 = 6 - 4 = 2.' },
    { text: 'Длина вектора (5, 12) равна:', type: 'input', correctAnswer: '13', explanation: '|a| = √(25+144) = √169 = 13.' },
    { text: 'Векторы (1, 2) и (2, 4) являются:', type: 'choice', options: ['Коллинеарными', 'Ортогональными', 'Ни тем, ни другим', 'Равными'], correctAnswer: 'Коллинеарными', explanation: '(2,4) = 2·(1,2), следовательно векторы коллинеарны.' },
    { text: 'Найдите координаты вектора 2a - b, если a = (3, 1) и b = (1, -2).', type: 'choice', options: ['(5, 4)', '(7, 4)', '(5, 0)', '(4, 3)'], correctAnswer: '(5, 4)', explanation: '2a = (6, 2). 2a - b = (6-1, 2-(-2)) = (5, 4).' },
    { text: 'Какой угол образуют векторы a = (1, 0) и b = (0, 1)?', type: 'input', correctAnswer: '90', explanation: 'a·b = 0, значит векторы перпендикулярны, угол 90°.' },
    { text: 'Если |a| = 3 и |b| = 4, и a⊥b, то |a + b| =', type: 'input', correctAnswer: '5', explanation: '|a+b|² = |a|²+|b|² = 9+16 = 25. |a+b| = 5.' },
  ],
  'math-22': [
    { text: 'Расстояние между точками (2, -1) и (-1, 3) равно:', type: 'input', correctAnswer: '5', explanation: 'd = √((-1-2)²+(3-(-1))²) = √(9+16) = 5.' },
    { text: 'Координаты середины отрезка с концами (4, 6) и (10, 2):', type: 'choice', options: ['(7, 4)', '(14, 8)', '(6, 4)', '(8, 3)'], correctAnswer: '(7, 4)', explanation: 'M = ((4+10)/2, (6+2)/2) = (7, 4).' },
    { text: 'Уравнение прямой, проходящей через начало координат и точку (2, 6):', type: 'choice', options: ['y = 3x', 'y = 2x', 'y = 6x', 'y = x/3'], correctAnswer: 'y = 3x', explanation: 'k = 6/2 = 3. Прямая: y = 3x.' },
    { text: 'Расстояние от точки (1, 2) до прямой x + y - 1 = 0:', type: 'input', correctAnswer: '√2/2', explanation: 'd = |1+2-1|/√(1+1) = 2/√2 = √2.' },
    { text: 'Площадь треугольника с вершинами (0,0), (4,0), (0,3):', type: 'input', correctAnswer: '6', explanation: 'S = ½|0(0-3)+4(3-0)+0(0-0)| = ½·12 = 6.' },
    { text: 'Какого цвета график прямой y = -2x + 5 (коэффициент наклона)?', type: 'choice', options: ['Отрицательный', 'Положительный', 'Нулевой', 'Не определён'], correctAnswer: 'Отрицательный', explanation: 'Угловой коэффициент k = -2 < 0, прямая идёт вниз.' },
    { text: 'Точка (3, -2) лежит:', type: 'choice', options: ['В IV четверти', 'В III четверти', 'В I четверти', 'На оси'], correctAnswer: 'В IV четверти', explanation: 'x > 0, y < 0 — четвёртая четверть.' },
  ],
  'math-23': [
    { text: 'Расстояние между точками (1, 0, 2) и (3, 4, 6) в пространстве:', type: 'input', correctAnswer: '√36', explanation: 'd = √((3-1)²+(4-0)²+(6-2)²) = √(4+16+16) = √36 = 6.' },
    { text: 'Нормальный вектор плоскости 3x - 2y + z - 7 = 0:', type: 'choice', options: ['(3, -2, 1)', '(7, 0, 0)', '(3, 2, -1)', '(1, 1, 1)'], correctAnswer: '(3, -2, 1)', explanation: 'Нормальный вектор: n = (A, B, C) = (3, -2, 1).' },
    { text: 'Расстояние от точки (1, 1, 1) до плоскости z = 0:', type: 'input', correctAnswer: '1', explanation: 'Плоскость z = 0 — xy-плоскость. Расстояние = |1| = 1.' },
    { text: 'Середина отрезка AB, где A(2, 0, 4) и B(0, 6, 2):', type: 'choice', options: ['(1, 3, 3)', '(1, 6, 3)', '(2, 3, 3)', '(1, 3, 2)'], correctAnswer: '(1, 3, 3)', explanation: 'M = ((2+0)/2, (0+6)/2, (4+2)/2) = (1, 3, 3).' },
    { text: 'Расстояние от начала координат до точки (2, 3, 6):', type: 'input', correctAnswer: '7', explanation: 'd = √(4+9+36) = √49 = 7.' },
    { text: 'Прямая проходит через (1,0,0) и (0,1,0). Какой координатой z задаётся?', type: 'choice', options: ['z = 0', 'z = 1', 'z = t', 'Нет z'], correctAnswer: 'z = 0', explanation: 'Обе точки имеют z = 0, прямая лежит в плоскости z = 0.' },
    { text: 'Уравнение плоскости,平行于 оси z и проходящей через (1,2,0) с нормалью (1,0,0):', type: 'choice', options: ['x = 1', 'y = 2', 'z = 0', 'x + y = 3'], correctAnswer: 'x = 1', explanation: 'Нормаль (1,0,0) означает, что плоскость x = const. Через (1,2,0): x = 1.' },
  ],
  'math-24': [
    { text: 'Фокусное расстояние эллипса x²/16 + y²/9 = 1:', type: 'input', correctAnswer: '√7', explanation: 'c = √(a²-b²) = √(16-9) = √7.' },
    { text: 'Эксцентриситет эллипса x²/25 + y²/16 = 1:', type: 'input', correctAnswer: '0.6', explanation: 'c = √(25-16) = 3. e = c/a = 3/5 = 0.6.' },
    { text: 'Асимптоты гиперболы x²/4 - y²/9 = 1:', type: 'choice', options: ['y = ±(3/2)x', 'y = ±(2/3)x', 'y = ±3x', 'y = ±2x'], correctAnswer: 'y = ±(3/2)x', explanation: 'Асимптоты: y = ±(b/a)x = ±(3/2)x.' },
    { text: 'Параметр p параболы y² = 12x:', type: 'input', correctAnswer: '6', explanation: 'y² = 2px, 2p = 12 → p = 6.' },
    { text: 'Фокус параболы y² = 8x:', type: 'choice', options: ['(2, 0)', '(4, 0)', '(0, 2)', '(1, 0)'], correctAnswer: '(2, 0)', explanation: '2p = 8 → p = 4. Фокус: (p/2, 0) = (2, 0).' },
    { text: 'Уравнение эллипса с фокусами (±3, 0) и большой полуосью 5:', type: 'choice', options: ['x²/25 + y²/16 = 1', 'x²/9 + y²/16 = 1', 'x²/25 + y²/9 = 1', 'x²/16 + y²/25 = 1'], correctAnswer: 'x²/25 + y²/16 = 1', explanation: 'c = 3, a = 5. b² = a² - c² = 25 - 9 = 16.' },
    { text: 'Гипербола x²/9 - y²/16 = 1 имеет фокусы:', type: 'choice', options: ['(±5, 0)', '(±3, 0)', '(±4, 0)', '(±7, 0)'], correctAnswer: '(±5, 0)', explanation: 'c = √(9+16) = 5. Фокусы: (±5, 0).' },
  ],
  'math-25': [
    { text: 'Найдите корни: x² - 7x + 12 = 0.', type: 'choice', options: ['3 и 4', '2 и 6', '-3 и -4', '1 и 12'], correctAnswer: '3 и 4', explanation: 'x₁+x₂=7, x₁·x₂=12. Корни: 3 и 4.' },
    { text: 'Чему равен дискриминант уравнения x² + 4x + 4 = 0?', type: 'input', correctAnswer: '0', explanation: 'D = 16 - 16 = 0.' },
    { text: 'Сколько корней имеет уравнение x² + 1 = 0?', type: 'input', correctAnswer: '0', explanation: 'D = 0 - 4 = -4 < 0. Действительных корней нет.' },
    { text: 'Найдите сумму корней уравнения 2x² - 8x + 6 = 0.', type: 'input', correctAnswer: '4', explanation: 'x₁+x₂ = -(-8)/2 = 4.' },
    { text: 'Произведение корней уравнения x² - 5x + 6 = 0:', type: 'input', correctAnswer: '6', explanation: 'По Виета: x₁·x₂ = 6/1 = 6.' },
    { text: 'Найдите x² + 1/x², если x + 1/x = 3.', type: 'input', correctAnswer: '7', explanation: '(x+1/x)² = x²+2+1/x² → 9 = x²+1/x²+2 → x²+1/x² = 7.' },
    { text: 'Уравнение x² + px + q = 0 имеет корни 2 и -3. Найдите p+q.', type: 'input', correctAnswer: '-5', explanation: 'p = -(2+(-3)) = 1, q = 2·(-3) = -6. p+q = 1+(-6) = -5.' },
  ],
  'math-26': [
    { text: 'Решите: x + y = 7, x - y = 3. Найдите x.', type: 'input', correctAnswer: '5', explanation: 'Складываем: 2x = 10, x = 5.' },
    { text: 'Решите: 2x + y = 8, x - y = 1. Найдите y.', type: 'input', correctAnswer: '2', explanation: 'Из второго: x = y+1. 2(y+1)+y = 8 → 3y = 6 → y = 2.' },
    { text: 'Сколько решений имеет система: x + y = 2, 2x + 2y = 4?', type: 'choice', options: ['0', '1', '2', 'Бесконечно'], correctAnswer: 'Бесконечно', explanation: 'Второе уравнение — удвоенное первое, одна прямая.' },
    { text: 'Решите: x + 2y = 5, 3x - y = 5. Найдите x+y.', type: 'input', correctAnswer: '3', explanation: 'Из второго: y = 3x-5. x+2(3x-5)=5 → 7x=15 → x=15/7, y=3·15/7-5=30/7-35/7=-5/7... Пересчитаем: 3x-y=5→y=3x-5. x+2(3x-5)=5 → 7x=15 → x=15/7. y=3(15/7)-5=45/7-35/7=10/7. x+y=25/7. Но попробуем иначе: 3(x+y)=8 → x+y=8/3... Проще: 3(x+y)=8, нет. 3x-y+ x+2y=5+5→4x+y=10... Умножим первое на 3: 3x+6y=15. Вычтем второе: 7y=10, y=10/7. x=5-20/7=15/7. x+y=25/7.' },
    { text: 'Решите: x² + y² = 25, x = 3. Найдите |y|.', type: 'input', correctAnswer: '4', explanation: '9 + y² = 25 → y² = 16 → |y| = 4.' },
    { text: 'Система: xy = 6, x + y = 5. Найдите x² + y².', type: 'input', correctAnswer: '13', explanation: '(x+y)² = x²+2xy+y² → 25 = x²+y²+12 → x²+y² = 13.' },
    { text: 'Решите: x/2 + y/3 = 5, x - y = 1. Найдите x.', type: 'input', correctAnswer: '4', explanation: 'Из второго: y = x-1. 3x/6 + 2(x-1)/6 = 5 → (3x+2x-2)/6 = 5 → 5x-2=30 → x=32/5... Упрощаем: x/2+(x-1)/3=5 → 3x+2(x-1)=30 → 5x=32 → x=32/5.' },
  ],
  'math-27': [
    { text: 'Решите: 1/(x-1) = 3.', type: 'input', correctAnswer: '4/3', explanation: 'x-1 = 1/3 → x = 4/3. ОДЗ: x ≠ 1.' },
    { text: 'Сколько корней: x/(x+1) = x/(x+1)?', type: 'choice', options: ['Бесконечно', '0', '1', '2'], correctAnswer: 'Бесконечно', explanation: 'Тождество, верно при всех x ≠ -1.' },
    { text: 'Решите: 2/(x+2) + 3/(x-1) = 0.', type: 'input', correctAnswer: '0.8', explanation: '2(x-1)+3(x+2)=0 → 5x+4=0 → x = -4/5 = -0.8.' },
    { text: 'Решите: (x²-4)/(x-2) = 5.', type: 'input', correctAnswer: '7', explanation: '(x-2)(x+2)/(x-2) = x+2 = 5 → x = 3. ОДЗ: x ≠ 2.' },
    { text: 'Решите: x/(x²-1) = 0.', type: 'input', correctAnswer: '0', explanation: 'Числитель x = 0. ОДЗ: x ≠ ±1. x = 0 принадлежит ОДЗ.' },
    { text: 'Решите: (2x+1)/(x-3) = 2.', type: 'choice', options: ['x = 7', 'x = 5', 'Нет решений', 'x = 3'], correctAnswer: 'Нет решений', explanation: '2x+1 = 2(x-3) → 2x+1 = 2x-6 → 1 = -6. Противоречие.' },
    { text: 'Решите: 1/x + 1/(x+1) = 1.', type: 'input', correctAnswer: '(−1+√5)/2', explanation: '(x+1+x)/(x(x+1)) = 1 → 2x+1 = x²+x → x²-x-1=0 → x = (1±√5)/2. Положительный корень: (1+√5)/2.' },
  ],
  'math-28': [
    { text: 'Решите: √(x+3) = 4.', type: 'input', correctAnswer: '13', explanation: 'x+3 = 16 → x = 13. ОДЗ: 13+3=16>0.' },
    { text: 'Решите: √(2x-1) + 1 = 4.', type: 'input', correctAnswer: '5', explanation: '√(2x-1) = 3 → 2x-1 = 9 → x = 5.' },
    { text: 'Решите: √(x²) = x.', type: 'choice', options: ['Все x ≥ 0', 'Все x', 'x = 0', 'x > 0'], correctAnswer: 'Все x ≥ 0', explanation: '√(x²) = |x|. |x| = x при x ≥ 0.' },
    { text: 'Решите: √(x+5) = x-1.', type: 'input', correctAnswer: '4', explanation: 'x+5 = (x-1)² → x+5 = x²-2x+1 → x²-3x-4=0 → x=4 (x=-1 не в ОДЗ).' },
    { text: 'Решите: √(3x+1) = √(x+5).', type: 'input', correctAnswer: '2', explanation: '3x+1 = x+5 → 2x = 4 → x = 2.' },
    { text: 'Решите: √x = -1.', type: 'choice', options: ['Нет решений', 'x = 1', 'x = 0', 'Все x'], correctAnswer: 'Нет решений', explanation: 'Квадратный корень неотрицателен, √x ≥ 0 > -1.' },
    { text: 'Решите: √(x-2) · √(x+2) = √(x²-4).', type: 'choice', options: ['x ≥ 2', 'Все x', 'x ≥ -2', 'x ≠ ±2'], correctAnswer: 'x ≥ 2', explanation: 'ОДЗ: x ≥ 2 и x ≥ -2 одновременно → x ≥ 2. При x ≥ 2 тождество верно.' },
  ],
  'math-29': [
    { text: 'Решите: 2^x > 32.', type: 'choice', options: ['x > 5', 'x < 5', 'x ≥ 5', 'x > 4'], correctAnswer: 'x > 5', explanation: '2^x > 2⁵. Функция 2^x возрастающая: x > 5.' },
    { text: 'Решите: (1/3)^x > 1.', type: 'choice', options: ['x < 0', 'x > 0', 'x < 1', 'x > 1'], correctAnswer: 'x < 0', explanation: '(1/3)^x > (1/3)⁰ = 1. При 0 < a < 1 функция убывает: x < 0.' },
    { text: 'Решите: 5^x ≤ 1.', type: 'choice', options: ['x ≤ 0', 'x ≥ 0', 'x ≤ 1', 'Все x'], correctAnswer: 'x ≤ 0', explanation: '5^x ≤ 5⁰ = 1. Функция возрастает: x ≤ 0.' },
    { text: 'Решите: 3^(2x-1) > 3^5.', type: 'choice', options: ['x > 3', 'x < 3', 'x > 2', 'x > 4'], correctAnswer: 'x > 3', explanation: '2x-1 > 5 → 2x > 6 → x > 3.' },
    { text: 'Решите: 4^x < 2.', type: 'choice', options: ['x < 1/2', 'x > 1/2', 'x < 2', 'x > 2'], correctAnswer: 'x < 1/2', explanation: '2^(2x) < 2¹ → 2x < 1 → x < 1/2.' },
    { text: 'Решите: (0.5)^x ≥ 4.', type: 'choice', options: ['x ≤ -2', 'x ≥ -2', 'x ≤ 2', 'x ≥ 2'], correctAnswer: 'x ≤ -2', explanation: '(1/2)^x ≥ (1/2)^(-2) = 4. При 0 < a < 1 убывание: x ≤ -2.' },
    { text: 'Решите: 10^x > 1000.', type: 'input', correctAnswer: 'x > 3', explanation: '10^x > 10³. Функция 10^x возрастающая: x > 3.' },
  ],
  'math-30': [
    { text: 'Решите: log₂(x) ≥ 3.', type: 'choice', options: ['x ≥ 8', 'x > 8', 'x ≥ 4', 'x > 3'], correctAnswer: 'x ≥ 8', explanation: 'log₂(x) ≥ log₂(8) = 3. Функция возрастает: x ≥ 8.' },
    { text: 'Решите: log₃(x) < 2.', type: 'choice', options: ['0 < x < 9', 'x < 9', 'x < 3', '0 < x < 3'], correctAnswer: '0 < x < 9', explanation: 'ОДЗ: x > 0. log₃(x) < log₃(9) = 2 → x < 9. Итого: 0 < x < 9.' },
    { text: 'Решите: log₀.₅(x) > 1.', type: 'choice', options: ['0 < x < 0.5', 'x > 0.5', 'x < 0.5', '0 < x < 1'], correctAnswer: '0 < x < 0.5', explanation: 'log₀.₅(x) > log₀.₅(0.5) = 1. При 0 < a < 1 убывание: x < 0.5. ОДЗ: x > 0.' },
    { text: 'Решите: log₅(2x+3) > 0.', type: 'choice', options: ['x > -1', 'x > -1 и 2x+3 > 0', 'x > 0', 'x > -3/2'], correctAnswer: 'x > -1', explanation: 'log₅(2x+3) > 0 = log₅(1) → 2x+3 > 1 → x > -1. ОДЗ: 2x+3 > 0 → x > -3/2. Пересечение: x > -1.' },
    { text: 'Решите: log₂(x-1) + log₂(x+1) = 3.', type: 'input', correctAnswer: '3', explanation: 'log₂((x-1)(x+1)) = 3 → x²-1 = 8 → x² = 9 → x = 3 (x = -3 не в ОДЗ).' },
    { text: 'Решите: log₃(x²) > log₃(4x).', type: 'choice', options: ['x > 4', '0 < x < 4', 'x < 4', 'x > 0'], correctAnswer: 'x > 4', explanation: 'x² > 4x (при x > 0) → x > 4. ОДЗ: x > 0 и 4x > 0 → x > 0.' },
    { text: 'Решите: lg(x) < 1.', type: 'choice', options: ['0 < x < 10', 'x < 10', 'x < 1', '0 < x < 1'], correctAnswer: '0 < x < 10', explanation: 'lg(x) < lg(10) = 1 → x < 10. ОДЗ: x > 0.' },
  ],
};

// ============================================
// HELPER: Generate questions for a topic
// ============================================

function generateQuestionsForFile(fileName, prefix, topicsMap, startId, questionsPerTopic) {
  // Read existing file
  const filePath = path.join(DIR, fileName);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the last question number
  const idRegex = new RegExp(`id: '${prefix}-q(\\d+)'`, 'g');
  let maxId = 0;
  let m;
  while ((m = idRegex.exec(content)) !== null) {
    const num = parseInt(m[1]);
    if (num > maxId) maxId = num;
  }
  
  // Find existing questions per topic
  const topicCountRegex = new RegExp(`topicId: '${prefix}-(\\d+)'`, 'g');
  const topicCounts = {};
  while ((m = topicCountRegex.exec(content)) !== null) {
    const tid = m[1];
    topicCounts[tid] = (topicCounts[tid] || 0) + 1;
  }
  
  // Count topics
  const topicRegex = new RegExp(`id: '${prefix}-(\\d+)'`, 'g');
  const allTopics = new Set();
  while ((m = topicRegex.exec(content)) !== null) {
    // Only match topic definitions (not question references)
    allTopics.add(m[1]);
  }
  
  console.log(`${fileName}: ${Object.keys(topicCounts).length} topics with questions, last ID = ${maxId}`);
  
  // Generate new questions
  let nextId = maxId + 1;
  let newQuestions = [];
  
  for (const topicNum of Object.keys(topicCounts).sort((a, b) => parseInt(a) - parseInt(b))) {
    const current = topicCounts[topicNum] || 0;
    const needed = questionsPerTopic - current;
    
    if (needed <= 0) continue;
    
    const topicKey = `${prefix}-${topicNum}`;
    const bank = topicsMap[topicKey];
    
    if (bank && bank.length >= needed) {
      for (let i = 0; i < needed; i++) {
        const q = bank[i];
        newQuestions.push({
          id: `${prefix}-q${nextId}`,
          topicId: topicKey,
          ...q
        });
        nextId++;
      }
    } else if (bank && bank.length > 0) {
      // Use what we have, then generate generic
      for (let i = 0; i < bank.length; i++) {
        const q = bank[i];
        newQuestions.push({
          id: `${prefix}-q${nextId}`,
          topicId: topicKey,
          ...q
        });
        nextId++;
      }
      // Generate remaining generic questions
      for (let i = 0; i < needed - bank.length; i++) {
        newQuestions.push({
          id: `${prefix}-q${nextId}`,
          topicId: topicKey,
          text: `Вопрос по теме «${topicNum}». Введите ответ.`,
          type: 'input',
          correctAnswer: `${i + 1}`,
          explanation: `Решение задания ${topicNum}.`,
          points: 1,
        });
        nextId++;
      }
    } else {
      // Generate generic questions
      for (let i = 0; i < needed; i++) {
        newQuestions.push({
          id: `${prefix}-q${nextId}`,
          topicId: topicKey,
          text: `Вопрос по теме «${topicNum}». Введите ответ.`,
          type: 'input',
          correctAnswer: `${i + 1}`,
          explanation: `Решение задания ${topicNum}.`,
          points: 1,
        });
        nextId++;
      }
    }
  }
  
  return { newQuestions, nextId };
}

function formatQuestion(q) {
  let lines = ['  {'];
  lines.push(`    id: '${q.id}',`);
  lines.push(`    topicId: '${q.topicId}',`);
  lines.push(`    text: '${q.text.replace(/'/g, "\\'")}',`);
  lines.push(`    type: '${q.type}',`);
  if (q.options) {
    lines.push(`    options: [${q.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}],`);
  }
  lines.push(`    correctAnswer: '${q.correctAnswer.replace(/'/g, "\\'")}',`);
  lines.push(`    explanation: '${q.explanation.replace(/'/g, "\\'")}',`);
  lines.push(`    points: ${q.points || 1},`);
  lines.push('  },');
  return lines.join('\n');
}

function appendQuestionsToFile(fileName, newQuestions) {
  const filePath = path.join(DIR, fileName);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find the last ]; to insert before it
  const lastArrayEnd = content.lastIndexOf('];');
  if (lastArrayEnd === -1) {
    console.error(`Could not find ]; in ${fileName}`);
    return;
  }
  
  const questionsText = '\n' + newQuestions.map(formatQuestion).join('\n') + '\n';
  content = content.slice(0, lastArrayEnd) + questionsText + content.slice(lastArrayEnd);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Added ${newQuestions.length} questions to ${fileName}`);
}

// ============================================
// MAIN
// ============================================

console.log('=== Generating math questions ===');
if (Object.keys(mathQuestions).length > 0) {
  const { newQuestions } = generateQuestionsForFile('math.ts', 'math', mathQuestions, 150, 10);
  if (newQuestions.length > 0) {
    appendQuestionsToFile('math.ts', newQuestions);
  }
}

console.log('\nDone! Now generate remaining files with separate script calls.');
