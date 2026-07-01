import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const DIR = path.dirname(__filename);

// ============================================
// QUESTION TEMPLATES PER SUBJECT
// ============================================

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============================================
// MATH — ~800 questions
// ============================================

function genMathQuestions() {
  const qs = [];
  // Параметры (50)
  for (let i = 0; i < 50; i++) {
    const a = randInt(-5, 5);
    const b = randInt(-10, 10);
    const c = randInt(-10, 10);
    qs.push({
      text: `Найдите все значения a, при которых уравнение x² + ${a}x + ${c} = 0 имеет хотя бы один корень.`,
      type: 'choice',
      options: ['a² ≥ 4c', 'a² > 4c', 'a² < 4c', 'a > 0'],
      correctAnswer: 'a² ≥ 4c',
      explanation: `D = a² - 4·1·${c} = a² - ${4*c} ≥ 0, следовательно a² ≥ ${4*c}.`,
      points: 1,
    });
  }
  // Текстовые задачи (80)
  const speeds = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60];
  for (let i = 0; i < 80; i++) {
    const v1 = pick(speeds);
    const v2 = pick(speeds);
    const dist = randInt(30, 300);
    const time = dist / (v1 + v2);
    const timeStr = Number.isInteger(time) ? String(time) : time.toFixed(2);
    qs.push({
      text: `Два автомобиля едут навстречу друг другу со скоростями ${v1} км/ч и ${v2} км/ч. Расстояние между ними ${dist} км. Через сколько часов они встретятся?`,
      type: 'input',
      correctAnswer: timeStr,
      explanation: `Суммарная скорость ${v1}+${v2}=${v1+v2} км/ч. Время = ${dist}/${v1+v2} = ${timeStr} ч.`,
      points: 1,
    });
  }
  // Планиметрия (60)
  for (let i = 0; i < 60; i++) {
    const a = randInt(3, 20);
    const b = randInt(3, 20);
    const area = (a * b) / 2;
    qs.push({
      text: `Площадь прямоугольного треугольника с катетами ${a} и ${b} равна:`,
      type: 'input',
      correctAnswer: String(area),
      explanation: `S = ${a}·${b}/2 = ${area}.`,
      points: 1,
    });
  }
  // Тригонометрия (60)
  const trigVals = [
    { angle: '0°', sin: '0', cos: '1', tan: '0' },
    { angle: '30°', sin: '0.5', cos: '√3/2', tan: '√3/3' },
    { angle: '45°', sin: '√2/2', cos: '√2/2', tan: '1' },
    { angle: '60°', sin: '√3/2', cos: '0.5', tan: '√3' },
    { angle: '90°', sin: '1', cos: '0', tan: '—' },
  ];
  for (let i = 0; i < 60; i++) {
    const t = pick(trigVals);
    const fn = pick(['sin', 'cos', 'tan']);
    const ans = fn === 'sin' ? t.sin : fn === 'cos' ? t.cos : t.tan;
    qs.push({
      text: `Чему равен ${fn}(${t.angle})?`,
      type: 'input',
      correctAnswer: ans,
      explanation: `${fn}(${t.angle}) = ${ans} (табличное значение).`,
      points: 1,
    });
  }
  // Логарифмы (50)
  for (let i = 0; i < 50; i++) {
    const base = pick([2, 3, 5, 10]);
    const exp = randInt(1, 5);
    const val = Math.pow(base, exp);
    qs.push({
      text: `Вычислите log_${base}(${val}).`,
      type: 'input',
      correctAnswer: String(exp),
      explanation: `${base}^${exp} = ${val}, следовательно log_${base}(${val}) = ${exp}.`,
      points: 1,
    });
  }
  // Производная (60)
  for (let i = 0; i < 60; i++) {
    const n = randInt(2, 6);
    const a = randInt(2, 10);
    qs.push({
      text: `Найдите производную f(x) = ${a}x^${n}.`,
      type: 'input',
      correctAnswer: `${a * n}x^${n - 1}`,
      explanation: `(x^${n})' = ${n}x^${n-1}. ${a}·${n}x^${n-1} = ${a*n}x^${n-1}.`,
      points: 1,
    });
  }
  // Вероятность (50)
  for (let i = 0; i < 50; i++) {
    const total = pick([6, 8, 10, 12, 20]);
    const favorable = randInt(1, total - 1);
    qs.push({
      text: `В коробке ${total} шаров, из них ${favorable} красных. Какова вероятность достать красный шар?`,
      type: 'input',
      correctAnswer: `${favorable}/${total}`,
      explanation: `P = ${favorable}/${total}.`,
      points: 1,
    });
  }
  // Статистика (40)
  for (let i = 0; i < 40; i++) {
    const nums = Array.from({ length: 5 }, () => randInt(1, 20));
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    qs.push({
      text: `Найдите среднее арифметическое чисел: ${nums.join(', ')}.`,
      type: 'input',
      correctAnswer: String(avg),
      explanation: `(${nums.join(' + ')}) / ${nums.length} = ${avg}.`,
      points: 1,
    });
  }
  // Комбинаторика (40)
  for (let i = 0; i < 40; i++) {
    const n = randInt(3, 10);
    const fact = [1,1,2,6,24,120,720,5040,40320,362880,3628800];
    qs.push({
      text: `Сколькими способами можно расставить ${n} разных книг на полке?`,
      type: 'input',
      correctAnswer: String(fact[n]),
      explanation: `P_${n} = ${n}! = ${fact[n]}.`,
      points: 1,
    });
  }
  // Неравенства (50)
  for (let i = 0; i < 50; i++) {
    const a = randInt(1, 10);
    const b = randInt(-10, 10);
    const c = randInt(-5, 5) * a;
    qs.push({
      text: `Решите: ${a}x + ${b} > ${c}.`,
      type: 'input',
      correctAnswer: `x > ${(c - b) / a}`,
      explanation: `${a}x > ${c - b}, x > ${(c - b) / a}.`,
      points: 1,
    });
  }
  // Модуль (40)
  for (let i = 0; i < 40; i++) {
    const a = randInt(-5, 5);
    const b = randInt(1, 10);
    qs.push({
      text: `Решите: |x - ${a}| = ${b}.`,
      type: 'choice',
      options: [`x = ${a + b} или x = ${a - b}`, `x = ${a + b}`, `x = ${a - b}`, `Нет решений`],
      correctAnswer: `x = ${a + b} или x = ${a - b}`,
      explanation: `x-${a} = ${b} → x = ${a+b}; x-${a} = -${b} → x = ${a-b}.`,
      points: 1,
    });
  }
  // Прогрессии (40)
  for (let i = 0; i < 40; i++) {
    const a1 = randInt(1, 10);
    const d = randInt(1, 5);
    const n = randInt(2, 10);
    const an = a1 + (n - 1) * d;
    qs.push({
      text: `${n}-й член арифметической прогрессии с первым членом ${a1} и разностью ${d} равен:`,
      type: 'input',
      correctAnswer: String(an),
      explanation: `a_${n} = ${a1} + (${n}-1)·${d} = ${an}.`,
      points: 1,
    });
  }
  // Функции (40)
  for (let i = 0; i < 40; i++) {
    const a = randInt(-5, 5);
    const b = randInt(-10, 10);
    const x = randInt(-5, 5);
    const y = a * x + b;
    qs.push({
      text: `Найдите f(${x}) для f(x) = ${a}x + ${b}.`,
      type: 'input',
      correctAnswer: String(y),
      explanation: `f(${x}) = ${a}·${x} + ${b} = ${y}.`,
      points: 1,
    });
  }
  // Показательные уравнения (30)
  for (let i = 0; i < 30; i++) {
    const base = pick([2, 3, 5]);
    const exp = randInt(1, 6);
    const val = Math.pow(base, exp);
    qs.push({
      text: `Решите: ${base}^x = ${val}.`,
      type: 'input',
      correctAnswer: String(exp),
      explanation: `${base}^${exp} = ${val}, следовательно x = ${exp}.`,
      points: 1,
    });
  }
  // Площади фигур (30)
  for (let i = 0; i < 30; i++) {
    const side = randInt(2, 15);
    const area = side * side;
    qs.push({
      text: `Площадь квадрата со стороной ${side} равна:`,
      type: 'input',
      correctAnswer: String(area),
      explanation: `S = ${side}² = ${area}.`,
      points: 1,
    });
  }
  return qs;
}

// ============================================
// RUSSIAN — ~500 questions
// ============================================

function genRussianQuestions() {
  const qs = [];
  const words = [
    ['красота', 'красотá'], ['молоко', 'молокó'], ['начать', 'начáть'],
    ['звонит', 'звóнит'], ['торты', 'тóрты'], ['щавель', 'щавéль'],
    ['каталог', 'катáлог'], ['красивее', 'красíвее'], ['свёкла', 'свёкла'],
    ['звонишь', 'звóнишь'], ['баловать', 'баловáть'], ['красивый', 'красíвый'],
  ];
  // Орфография — ударения (100)
  for (let i = 0; i < 100; i++) {
    const [wrong, correct] = pick(words);
    qs.push({
      text: `Какой вариант с правильным ударением? ${correct}`,
      type: 'choice',
      options: [correct, wrong, 'Оба верных', 'Оба неверных'],
      correctAnswer: correct,
      explanation: `Правильное ударение: ${correct}.`,
      points: 1,
    });
  }
  // Пунктуация (100)
  const punctTemplates = [
    { text: 'Поставьте запятые: Она пришла домой и сразу начала готовить ужин.', answer: 'Она пришла домой, и сразу начала готовить ужин.' },
    { text: 'Поставьте запятые: Хотя был поздний вечер мы продолжали работать.', answer: 'Хотя был поздний вечер, мы продолжали работать.' },
    { text: 'Поставьте запятые: Брат который живёт в Москве приехал к нам в гости.', answer: 'Брат, который живёт в Москве, приехал к нам в гости.' },
    { text: 'Поставьте запятые: Мы пошли в парк а потом зашли в кафе.', answer: 'Мы пошли в парк, а потом зашли в кафе.' },
    { text: 'Поставьте запятые: Если будет хорошая пойдём гулять.', answer: 'Если будет хорошая, пойдём гулять.' },
    { text: 'Поставьте запятые: Учитель сказал что завтра будет контрольная.', answer: 'Учитель сказал, что завтра будет контрольная.' },
  ];
  for (let i = 0; i < 100; i++) {
    const t = pick(punctTemplates);
    qs.push({
      text: t.text,
      type: 'input',
      correctAnswer: t.answer,
      explanation: `Правильно: ${t.answer}`,
      points: 1,
    });
  }
  // Лексика (100)
  const lexPairs = [
    ['ненависть', 'приязнь'], ['щедрость', 'жадность'],
    ['красноречие', 'немота'], ['старательность', 'лень'],
    ['благодарность', 'неблагодарность'], ['смелость', 'трусость'],
    ['правдивость', 'лживость'], ['справедливость', 'несправедливость'],
  ];
  for (let i = 0; i < 100; i++) {
    const [word, antonym] = pick(lexPairs);
    qs.push({
      text: `Какое слово является антонимом к слову «${word}»?`,
      type: 'choice',
      options: shuffle([antonym, pick(lexPairs.filter(p => p[0] !== word))[1], pick(lexPairs.filter(p => p[0] !== word))[0], word]),
      correctAnswer: antonym,
      explanation: `Антоним к «${word}» — «${antonym}».`,
      points: 1,
    });
  }
  // Синтаксис (100)
  const syntaxTemplates = [
    { text: 'Определите тип предложения: «Как хорошо вawning зимний день!»', answer: 'Восклицательное' },
    { text: 'Какой член предложения является главным: «Дети играли во дворе»?', answer: 'Сказуемое' },
    { text: 'Определите тип односоставного предложения: «Зимой рано темнеет».', answer: 'Безличное' },
    { text: 'Какое слово является подлежащим: «За окном шумел ветер»?', answer: 'ветер' },
    { text: 'Определите тип сложного предложения: «Когда я вернулся, все уже спали».', answer: 'Сложноподчинённое' },
  ];
  for (let i = 0; i < 100; i++) {
    const t = pick(syntaxTemplates);
    qs.push({
      text: t.text,
      type: 'input',
      correctAnswer: t.answer,
      explanation: `Ответ: ${t.answer}`,
      points: 1,
    });
  }
  // Словообразование (100)
  const derivPairs = [
    ['прекрасный', 'прекрасно'], ['быстрый', 'быстро'],
    ['храбрый', 'храбро'], ['тихий', 'тихо'],
    ['весёлый', 'весело'], ['грустный', 'грустно'],
    ['сильный', 'сильно'], ['слабый', 'слабо'],
  ];
  for (let i = 0; i < 100; i++) {
    const [adj, adv] = pick(derivPairs);
    qs.push({
      text: `Как образовано наречие от прилагательного «${adj}»?`,
      type: 'input',
      correctAnswer: adv,
      explanation: `От «${adj}» образуется наречие «${adv}».`,
      points: 1,
    });
  }
  return qs;
}

// ============================================
// PHYSICS — ~600 questions
// ============================================

function genPhysicsQuestions() {
  const qs = [];
  // Кинематика (100)
  for (let i = 0; i < 100; i++) {
    const v = randInt(5, 50);
    const t = randInt(2, 20);
    const s = v * t;
    qs.push({
      text: `Тело движется равномерно со скоростью ${v} м/ч в течение ${t} ч. Какой путь оно пройдёт?`,
      type: 'input',
      correctAnswer: String(s),
      explanation: `S = v·t = ${v}·${t} = ${s} м.`,
      points: 1,
    });
  }
  // Динамика (100)
  for (let i = 0; i < 100; i++) {
    const m = randInt(1, 50);
    const a = randInt(1, 10);
    const F = m * a;
    qs.push({
      text: `Тело массой ${m} кг движется с ускорением ${a} м/с². Чему равна действующая на него сила?`,
      type: 'input',
      correctAnswer: String(F),
      explanation: `F = m·a = ${m}·${a} = ${F} Н.`,
      points: 1,
    });
  }
  // Энергия (100)
  for (let i = 0; i < 100; i++) {
    const m = randInt(1, 20);
    const h = randInt(2, 30);
    const Ep = m * 9.8 * h;
    qs.push({
      text: `Тело массой ${m} кг находится на высоте ${h} м. Чему равна его потенциальная энергия? (g = 9.8 м/с²)`,
      type: 'input',
      correctAnswer: String(Ep),
      explanation: `Eп = mgh = ${m}·9.8·${h} = ${Ep} Дж.`,
      points: 1,
    });
  }
  // Электричество (100)
  for (let i = 0; i < 100; i++) {
    const U = pick([12, 24, 36, 48, 110, 220]);
    const R = pick([10, 20, 50, 100, 200]);
    const I = U / R;
    qs.push({
      text: `Напряжение ${U} В, сопротивление ${R} Ом. Чему равен ток?`,
      type: 'input',
      correctAnswer: String(I),
      explanation: `I = U/R = ${U}/${R} = ${I} А.`,
      points: 1,
    });
  }
  // Оптика (50)
  const opticsQ = [
    { text: 'Скорость света в вакууме равна:', answer: '300000 км/с' },
    { text: 'Какой закон описывает преломление света?', answer: 'Закон Снеллиуса' },
    { text: 'Единица измерения силы тока:', answer: 'Ампер' },
    { text: 'Единица измерения напряжения:', answer: 'Вольт' },
    { text: 'Единица измерения сопротивления:', answer: 'Ом' },
  ];
  for (let i = 0; i < 50; i++) {
    const t = pick(opticsQ);
    qs.push({ text: t.text, type: 'input', correctAnswer: t.answer, explanation: `Ответ: ${t.answer}`, points: 1 });
  }
  // Термодинамика (50)
  for (let i = 0; i < 50; i++) {
    const m = randInt(1, 10);
    const dt = randInt(5, 50);
    const Q = m * 4200 * dt;
    qs.push({
      text: `Сколько тепла нужно для нагрева ${m} кг воды на ${dt}°C? (c = 4200 Дж/(кг·°C))`,
      type: 'input',
      correctAnswer: String(Q),
      explanation: `Q = cmΔt = 4200·${m}·${dt} = ${Q} Дж.`,
      points: 1,
    });
  }
  // Механика (100)
  for (let i = 0; i < 100; i++) {
    const m = randInt(1, 30);
    const g = 9.8;
    const F = m * g;
    qs.push({
      text: `Чему равна сила тяжести, действующая на тело массой ${m} кг? (g = 9,8 м/с²)`,
      type: 'input',
      correctAnswer: String(F),
      explanation: `F = mg = ${m}·9,8 = ${F} Н.`,
      points: 1,
    });
  }
  // Молекулярная физика (50)
  for (let i = 0; i < 50; i++) {
    const T = randInt(-20, 100);
    const t = T - 273;
    qs.push({
      text: `Температура ${T} K равна多少 градусам Цельсия?`,
      type: 'input',
      correctAnswer: String(t),
      explanation: `t = T - 273 = ${T} - 273 = ${t}°C.`,
      points: 1,
    });
  }
  // Колебания и волны (50)
  for (let i = 0; i < 50; i++) {
    const f = pick([50, 100, 200, 440, 1000]);
    const T = 1 / f;
    qs.push({
      text: `Период колебаний с частотой ${f} Гц равен:`,
      type: 'input',
      correctAnswer: T < 1 ? T.toFixed(4) : String(T),
      explanation: `T = 1/f = 1/${f} = ${T} с.`,
      points: 1,
    });
  }
  return qs;
}

// ============================================
// CHEMISTRY — ~500 questions
// ============================================

function genChemistryQuestions() {
  const qs = [];
  const elements = [
    { symbol: 'H', name: 'Водород', number: 1, mass: 1 },
    { symbol: 'He', name: 'Гелий', number: 2, mass: 4 },
    { symbol: 'Li', name: 'Литий', number: 3, mass: 7 },
    { symbol: 'C', name: 'Углерод', number: 6, mass: 12 },
    { symbol: 'N', name: 'Азот', number: 7, mass: 14 },
    { symbol: 'O', name: 'Кислород', number: 8, mass: 16 },
    { symbol: 'Na', name: 'Натрий', number: 11, mass: 23 },
    { symbol: 'Mg', name: 'Магний', number: 12, mass: 24 },
    { symbol: 'Al', name: 'Алюминий', number: 13, mass: 27 },
    { symbol: 'Si', name: 'Кремний', number: 14, mass: 28 },
    { symbol: 'P', name: 'Фосфор', number: 15, mass: 31 },
    { symbol: 'S', name: 'Сера', number: 16, mass: 32 },
    { symbol: 'Cl', name: 'Хлор', number: 17, mass: 35 },
    { symbol: 'K', name: 'Калий', number: 19, mass: 39 },
    { symbol: 'Ca', name: 'Кальций', number: 20, mass: 40 },
    { symbol: 'Fe', name: 'Железо', number: 26, mass: 56 },
    { symbol: 'Cu', name: 'Медь', number: 29, mass: 64 },
    { symbol: 'Zn', name: 'Цинк', number: 30, mass: 65 },
    { symbol: 'Ag', name: 'Серебро', number: 47, mass: 108 },
    { symbol: 'Au', name: 'Золото', number: 79, mass: 197 },
  ];
  // Периодическая система (100)
  for (let i = 0; i < 100; i++) {
    const el = pick(elements);
    const qType = pick(['number', 'mass', 'symbol']);
    if (qType === 'number') {
      qs.push({
        text: `Какой порядковый номер у элемента ${el.name} (${el.symbol})?`,
        type: 'input', correctAnswer: String(el.number),
        explanation: `${el.name} — элемент №${el.number}.`, points: 1,
      });
    } else if (qType === 'mass') {
      qs.push({
        text: `Какая атомная масса у элемента ${el.symbol}?`,
        type: 'input', correctAnswer: String(el.mass),
        explanation: `Атомная масса ${el.symbol} ≈ ${el.mass}.`, points: 1,
      });
    } else {
      qs.push({
        text: `Какой химический символ у элемента ${el.name}?`,
        type: 'input', correctAnswer: el.symbol,
        explanation: `${el.name} обозначается как ${el.symbol}.`, points: 1,
      });
    }
  }
  // Реакции (100)
  const reactions = [
    { text: '2H₂ + O₂ → ?', answer: '2H₂O' },
    { text: 'CH₄ + 2O₂ → ?', answer: 'CO₂ + 2H₂O' },
    { text: 'Fe + CuSO₄ → ?', answer: 'FeSO₄ + Cu' },
    { text: 'NaOH + HCl → ?', answer: 'NaCl + H₂O' },
    { text: 'CaCO₃ + HCl → ?', answer: 'CaCl₂ + H₂O + CO₂' },
    { text: 'Zn + HCl → ?', answer: 'ZnCl₂ + H₂' },
    { text: '2Na + Cl₂ → ?', answer: '2NaCl' },
    { text: 'CuO + H₂ → ?', answer: 'Cu + H₂O' },
    { text: 'Fe₂O₃ + 3CO → ?', answer: '2Fe + 3CO₂' },
    { text: 'Mg + O₂ → ?', answer: '2MgO' },
  ];
  for (let i = 0; i < 100; i++) {
    const r = pick(reactions);
    qs.push({ text: `Уравнение реакции: ${r.text}`, type: 'input', correctAnswer: r.answer, explanation: `Продукты: ${r.answer}`, points: 1 });
  }
  // Электрохимия (100)
  for (let i = 0; i < 100; i++) {
    const m = pick([2, 4, 6, 8, 10, 12]);
    const conc = pick([0.1, 0.2, 0.5, 1.0]);
    const moles = (m * conc / 1000).toFixed(4);
    qs.push({
      text: `Сколько моль растворённого вещества содержится в ${m} мл раствора концентрацией ${conc} моль/л?`,
      type: 'input', correctAnswer: moles,
      explanation: `n = c·V = ${conc}·${m/1000} = ${moles} моль.`, points: 1,
    });
  }
  // Органическая химия (100)
  const organic = [
    { text: 'Какой углеводород имеет формулу C₂H₆?', answer: 'Этан' },
    { text: 'Какой газ выделяется при реакции соли с кислотой?', answer: 'CO₂' },
    { text: 'Как называется процесс расщепления молекул воды электрическим током?', answer: 'Электролиз' },
    { text: 'Какой металл самый лёгкий?', answer: 'Литий' },
    { text: 'Какой неметалл является основой органической химии?', answer: 'Углерод' },
  ];
  for (let i = 0; i < 100; i++) {
    const o = pick(organic);
    qs.push({ text: o.text, type: 'input', correctAnswer: o.answer, explanation: `Ответ: ${o.answer}`, points: 1 });
  }
  // Неорганическая химия (100)
  const inorganic = [
    { text: 'Какой газ образуется при горении серы?', answer: 'SO₂' },
    { text: 'Какой оксид является основным для Na₂O?', answer: 'Na₂O — основной оксид' },
    { text: 'Как называется соль HCl?', answer: 'Хлороводородная кислота (соляная)' },
    { text: 'Какой металл токопроводит лучше всего?', answer: 'Серебро' },
    { text: 'Какой неметалл используется в лампочках?', answer: 'Вольфрам' },
  ];
  for (let i = 0; i < 100; i++) {
    const q = pick(inorganic);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// BIOLOGY — ~500 questions
// ============================================

function genBiologyQuestions() {
  const qs = [];
  const bioFacts = [
    { text: 'Какая органелла клетки отвечает за синтез белка?', answer: 'Рибосома' },
    { text: 'Какой процесс происходит в митохондриях?', answer: 'Клеточное дыхание' },
    { text: 'Сколько хромосом у человека?', answer: '46' },
    { text: 'Какой витамин вырабатывается на солнце?', answer: 'Витамин D' },
    { text: 'Какой газ выделяют растения при фотосинтезе?', answer: 'Кислород' },
    { text: 'Как называется процесс деления клетки?', answer: 'Митоз' },
    { text: 'Какой орган отвечает за фильтрацию крови?', answer: 'Почка' },
    { text: 'Сколько камер в сердце человека?', answer: '4' },
    { text: 'Какой пигмент придаёт растениям зелёный цвет?', answer: 'Хлорофилл' },
    { text: 'Какой тип ДНК кодирует белки?', answer: 'Кодирующий' },
    { text: 'Какой газ необходим для фотосинтеза?', answer: 'Углекислый газ' },
    { text: 'Какой отдел мозга отвечает за координацию движений?', answer: 'Мозжечок' },
    { text: 'Сколько пар хромосом у человека?', answer: '23' },
    { text: 'Какой процесс превращает углекислый газ в глюкозу?', answer: 'Фотосинтез' },
    { text: 'Какой белок переносит кислород в крови?', answer: 'Гемоглобин' },
    { text: 'Какой тип ткани покрывает поверхность органов?', answer: 'Эпителиальная' },
    { text: 'Какой витамин отвечает за свёртываемость крови?', answer: 'Витамин K' },
    { text: 'Какой процесс расщепляет пищу в кишечнике?', answer: 'Пищеварение' },
    { text: 'Какой газ является продуктом брожения?', answer: 'CO₂' },
    { text: 'Сколько костей в скелете взрослого человека?', answer: '206' },
  ];
  for (let i = 0; i < 250; i++) {
    const q = pick(bioFacts);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  // Генетика
  const genetics = [
    { text: 'Какой закон описывает независимое распределение хромосом?', answer: 'Закон Менделя' },
    { text: 'Какой тип наследования связан с хромосомой Y?', answer: 'Сцепленный с полом' },
    { text: 'Что такое аллель?', answer: 'Альтернативная форма гена' },
    { text: 'Как обозначается доминантный аллель?', answer: 'Заглавной буквой' },
    { text: 'Какой процесс создаёт генетическое разнообразие?', answer: 'Кроссинговер' },
  ];
  for (let i = 0; i < 100; i++) {
    const q = pick(genetics);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  // Экология
  const ecology = [
    { text: 'Что такое экосистема?', answer: 'Совокупность организмов и среды' },
    { text: 'Какой фактор определяет количество особей в экосистеме?', answer: 'Емкость среды' },
    { text: 'Как называется совокупность всех особей одного вида?', answer: 'Популяция' },
    { text: 'Что такое пищевая цепь?', answer: 'Цепь передачи энергии' },
    { text: 'Какой тип связи между организмами — это конкуренция?', answer: 'Межвидовая' },
  ];
  for (let i = 0; i < 100; i++) {
    const q = pick(ecology);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  // Анатомия
  const anatomy = [
    { text: 'Какой отдел кишечника всасывает питательные вещества?', answer: 'Тонкий кишечник' },
    { text: 'Какой отдел мозга отвечает за речь?', answer: 'Речевой центр (Брока)' },
    { text: 'Сколько пар рёбер у человека?', answer: '12' },
    { text: 'Какой орган вырабатывает инсулин?', answer: 'Поджелудочная железа' },
    { text: 'Какой отдел сердца перекачивает кровь в лёгкие?', answer: 'Правый желудочек' },
  ];
  for (let i = 0; i < 50; i++) {
    const q = pick(anatomy);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// HISTORY — ~500 questions
// ============================================

function genHistoryQuestions() {
  const qs = [];
  const events = [
    { text: 'В каком году произошёл крещение Руси?', answer: '988' },
    { text: 'В каком году была Куликовская битва?', answer: '1380' },
    { text: 'В каком году началась Смута?', answer: '1598' },
    { text: 'В каком году Пётр I основал Санкт-Петербург?', answer: '1703' },
    { text: 'В каком году отменено крепостное право?', answer: '1861' },
    { text: 'В каком году была Октябрьская революция?', answer: '1917' },
    { text: 'В каком году началась Великая Отечественная война?', answer: '1941' },
    { text: 'В каком году закончилась Великая Отечественная война?', answer: '1945' },
    { text: 'В каком году был запущен первый спутник?', answer: '1957' },
    { text: 'В каком году распался СССР?', answer: '1991' },
    { text: 'Кто был первым царём из династии Романовых?', answer: 'Михаил Фёдорович' },
    { text: 'Какое событие произошло в 1812 году?', answer: 'Отечественная война' },
    { text: 'В каком году была битва на Неве?', answer: '1240' },
    { text: 'Кто руководил обороной Севастополя в 1854-1855?', answer: 'Тотлебен' },
    { text: 'В каком году была отменена реформа Столыпина?', answer: '1911' },
    { text: 'Какой город был первым столицей Руси?', answer: 'Киев' },
    { text: 'В каком году Иван Грозный взял Казань?', answer: '1552' },
    { text: 'Кто был последним российским императором?', answer: 'Николай II' },
    { text: 'В каком году была ликвидация самодержавия?', answer: '1917' },
    { text: 'Какое событие произошло в 1945 году 9 мая?', answer: 'День Победы' },
  ];
  for (let i = 0; i < 500; i++) {
    const e = pick(events);
    qs.push({ text: e.text, type: 'input', correctAnswer: e.answer, explanation: `Ответ: ${e.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// SOCIAL — ~400 questions
// ============================================

function genSocialQuestions() {
  const qs = [];
  const socialFacts = [
    { text: 'Что такое демократия?', answer: 'Народовластие' },
    { text: 'Какой орган издаёт законы в РФ?', answer: 'Федеральное Собрание' },
    { text: 'Что такое ВВП?', answer: 'Валовой внутренний продукт' },
    { text: 'Сколько субъектов в РФ?', answer: '89' },
    { text: 'Кто является главой государства?', answer: 'Президент' },
    { text: 'Что такое правовое государство?', answer: 'Государство, где закон выше власти' },
    { text: 'Какой вид ответственности предусматривает штраф?', answer: 'Административная' },
    { text: 'Что такое общественный договор?', answer: 'Теория происхождения государства' },
    { text: 'Какой тип экономики характерен для рыночных отношений?', answer: 'Рыночная' },
    { text: 'Что такое инфляция?', answer: 'Рост общего уровня цен' },
    { text: 'Кто написал «Наказ»?', answer: 'Дидро' },
    { text: 'Что такое глобализация?', answer: 'Всемирная интеграция' },
    { text: 'Какой закон защищает права потребителей?', answer: 'О защите прав потребителей' },
    { text: 'Что такое социальная стратификация?', answer: 'Расслоение общества' },
    { text: 'Какой вид правых — трудовые?', answer: 'Конституционные' },
  ];
  for (let i = 0; i < 400; i++) {
    const q = pick(socialFacts);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// INFORMATICS — ~400 questions
// ============================================

function genInformaticsQuestions() {
  const qs = [];
  for (let i = 0; i < 100; i++) {
    const n = randInt(1, 255);
    qs.push({
      text: `Переведите число ${n} из десятичной системы в двоичную.`,
      type: 'input', correctAnswer: n.toString(2),
      explanation: `${n}₁₀ = ${n.toString(2)}₂.`, points: 1,
    });
  }
  for (let i = 0; i < 100; i++) {
    const a = randInt(1, 15);
    const b = randInt(1, 15);
    qs.push({
      text: `Сколько раз алгоритм выполнится: for i = 1 to ${a}: for j = 1 to ${b}: action?`,
      type: 'input', correctAnswer: String(a * b),
      explanation: `${a} × ${b} = ${a * b}.`, points: 1,
    });
  }
  for (let i = 0; i < 100; i++) {
    const n = randInt(2, 10);
    const fact = [1,1,2,6,24,120,720,5040,40320,362880];
    qs.push({
      text: `Чему равен ${n}! (факториал ${n})?`,
      type: 'input', correctAnswer: String(fact[n]),
      explanation: `${n}! = ${fact[n]}.`, points: 1,
    });
  }
  const logicFacts = [
    { text: 'Что такое переменная?', answer: 'Именованная область памяти' },
    { text: 'Что такое цикл?', answer: 'Повторение набора действий' },
    { text: 'Что такое массив?', answer: 'Упорядоченная структура данных' },
    { text: 'Что такое функция?', answer: 'Именованный блок кода' },
    { text: 'Что такое алгоритм?', answer: 'Последовательность действий' },
  ];
  for (let i = 0; i < 100; i++) {
    const q = pick(logicFacts);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// GEOGRAPHY — ~400 questions
// ============================================

function genGeographyQuestions() {
  const qs = [];
  const geoFacts = [
    { text: 'Какая самая длинная река в мире?', answer: 'Нил' },
    { text: 'Какая самая высокая гора в мире?', answer: 'Эверест' },
    { text: 'Какой самый большой океан?', answer: 'Тихий' },
    { text: 'Какая самая большая страна по площади?', answer: 'Россия' },
    { text: 'Какой город является столицей Франции?', answer: 'Париж' },
    { text: 'Какое море омывает берега Крыма?', answer: 'Чёрное' },
    { text: 'Какая самая большая пустыня в мире?', answer: 'Сахара' },
    { text: 'Какой материк самый большой?', answer: 'Евразия' },
    { text: 'Какая столица Японии?', answer: 'Токио' },
    { text: 'Какая самая глубокая точка Мирового океана?', answer: 'Марианская впадина' },
    { text: 'Какой город является столицей Австралии?', answer: 'Канберра' },
    { text: 'Какое озеро является самым глубоким в мире?', answer: 'Байкал' },
    { text: 'Какой город является столицей Канады?', answer: 'Оттава' },
    { text: 'Какая самая маленькая страна в мире?', answer: 'Ватикан' },
    { text: 'Какой материк расположен на Южном полюсе?', answer: 'Антарктида' },
  ];
  for (let i = 0; i < 400; i++) {
    const q = pick(geoFacts);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// LITERATURE — ~200 questions
// ============================================

function genLiteratureQuestions() {
  const qs = [];
  const litFacts = [
    { text: 'Кто написал «Войну и мир»?', answer: 'Толстой' },
    { text: 'Кто написал «Преступление и наказание»?', answer: 'Достоевский' },
    { text: 'Кто написал «Евгения Онегина»?', answer: 'Пушкин' },
    { text: 'Кто написал «Мёртвые души»?', answer: 'Гоголь' },
    { text: 'Кто написал «Отцы и дети»?', answer: 'Тургенев' },
    { text: 'Кто написал «Герой нашего времени»?', answer: 'Лермонтов' },
    { text: 'Кто написал «Анну Каренину»?', answer: 'Толстой' },
    { text: 'Кто написал «Братьев Карамазовых»?', answer: 'Достоевский' },
    { text: 'Кто написал «Двенадцать стульев»?', answer: 'Ильф и Петров' },
    { text: 'Кто написал «Мастера и Маргариту»?', answer: 'Булгаков' },
  ];
  for (let i = 0; i < 200; i++) {
    const q = pick(litFacts);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Ответ: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// ENGLISH — ~200 questions
// ============================================

function genEnglishQuestions() {
  const qs = [];
  const engFacts = [
    { text: 'What is the past tense of "go"?', answer: 'went' },
    { text: 'What is the plural of "child"?', answer: 'children' },
    { text: 'What is the opposite of "hot"?', answer: 'cold' },
    { text: 'What does "beautiful" mean in Russian?', answer: 'красивый' },
    { text: 'What is the comparative form of "good"?', answer: 'better' },
    { text: 'What is the superlative form of "big"?', answer: 'biggest' },
    { text: 'What is the past tense of "run"?', answer: 'ran' },
    { text: 'What is the plural of "mouse"?', answer: 'mice' },
    { text: 'What does "happy" mean in Russian?', answer: 'счастливый' },
    { text: 'What is the opposite of "big"?', answer: 'small' },
  ];
  for (let i = 0; i < 200; i++) {
    const q = pick(engFacts);
    qs.push({ text: q.text, type: 'input', correctAnswer: q.answer, explanation: `Answer: ${q.answer}`, points: 1 });
  }
  return qs;
}

// ============================================
// APPEND QUESTIONS TO FILES
// ============================================

function appendToFile(fileName, newQuestions) {
  const filePath = path.join(DIR, fileName);
  let content = fs.readFileSync(filePath, 'utf-8');
  const lastArrayEnd = content.lastIndexOf('];');
  if (lastArrayEnd === -1) {
    console.error(`Could not find ]; in ${fileName}`);
    return;
  }
  const lines = newQuestions.map((q) => {
    let s = '  {\n';
    s += `    id: '${q.id}',\n`;
    s += `    topicId: '${q.topicId}',\n`;
    s += `    text: '${q.text.replace(/'/g, "\\'")}',\n`;
    s += `    type: '${q.type}',\n`;
    if (q.options) {
      s += `    options: [${q.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}],\n`;
    }
    s += `    correctAnswer: '${String(q.correctAnswer).replace(/'/g, "\\'")}',\n`;
    s += `    explanation: '${q.explanation.replace(/'/g, "\\'")}',\n`;
    s += `    points: ${q.points || 1},\n`;
    s += '  },';
    return s;
  }).join('\n');
  content = content.slice(0, lastArrayEnd) + '\n' + lines + '\n' + content.slice(lastArrayEnd);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Added ${newQuestions.length} questions to ${fileName}`);
}

function getMaxId(prefix, content) {
  const re = new RegExp(`${prefix}-q(\\d+)`, 'g');
  let max = 0;
  let m;
  while ((m = re.exec(content)) !== null) {
    const n = parseInt(m[1]);
    if (n > max) max = n;
  }
  return max;
}

function getTopics(prefix, content) {
  const re = new RegExp(`id: '${prefix}-(\\d+)'`, 'g');
  const topics = new Set();
  let m;
  while ((m = re.exec(content)) !== null) {
    topics.add(m[1]);
  }
  return [...topics];
}

function distributeQuestions(questions, prefix, fileName) {
  const content = fs.readFileSync(path.join(DIR, fileName), 'utf-8');
  const topics = getTopics(prefix, content);
  if (topics.length === 0) {
    console.error(`No topics found in ${fileName}`);
    return [];
  }
  let maxId = getMaxId(prefix, content);
  const perTopic = Math.ceil(questions.length / topics.length);
  const result = [];
  let idx = 0;
  for (const topicId of topics) {
    const count = Math.min(perTopic, questions.length - idx);
    for (let i = 0; i < count; i++) {
      result.push({
        id: `${prefix}-q${++maxId}`,
        topicId: `${prefix}-${topicId}`,
        ...questions[idx],
      });
      idx++;
    }
  }
  return result;
}

// ============================================
// MAIN
// ============================================

console.log('=== Generating 5000 chaos questions ===\n');

const generators = [
  { gen: genMathQuestions, prefix: 'math', file: 'ege/math.ts', target: 800 },
  { gen: genRussianQuestions, prefix: 'russian', file: 'ege/russian.ts', target: 500 },
  { gen: genPhysicsQuestions, prefix: 'physics', file: 'ege/physics.ts', target: 600 },
  { gen: genChemistryQuestions, prefix: 'chemistry', file: 'ege/chemistry.ts', target: 500 },
  { gen: genBiologyQuestions, prefix: 'biology', file: 'ege/biology.ts', target: 500 },
  { gen: genHistoryQuestions, prefix: 'history', file: 'ege/history.ts', target: 500 },
  { gen: genSocialQuestions, prefix: 'social', file: 'ege/social.ts', target: 400 },
  { gen: genInformaticsQuestions, prefix: 'informatics', file: 'ege/informatics.ts', target: 400 },
  { gen: genGeographyQuestions, prefix: 'geography', file: 'ege/geography.ts', target: 400 },
  { gen: genLiteratureQuestions, prefix: 'literature', file: 'ege/literature.ts', target: 200 },
  { gen: genEnglishQuestions, prefix: 'english', file: 'ege/english.ts', target: 200 },
];

let total = 0;
for (const g of generators) {
  console.log(`--- ${g.prefix} (target: ${g.target}) ---`);
  const allQ = g.gen();
  const toAdd = allQ.slice(0, g.target);
  const distributed = distributeQuestions(toAdd, g.prefix, g.file);
  if (distributed.length > 0) {
    appendToFile(g.file, distributed);
    total += distributed.length;
  }
}

console.log(`\n=== Done! Total added: ${total} questions ===`);
