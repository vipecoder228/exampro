import type { Topic, Question } from '../../types';

export const englishTopics: Topic[] = [
  {
    id: 'english-1',
    subjectId: 'english',
    title: 'Present Simple',
    description: 'Настоящее простое время — используется для описания регулярных действий, фактов и привычек.',
    content: `## Present Simple

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/You/We/They **work** | I/You/We/They **do not (don't) work** | **Do** I/you/we/they **work**? |
| He/She/It **works** | He/She/It **does not (doesn't) work** | **Does** he/she/it **work**? |

### Когда используется
- **Регулярные действия и привычки:** *I **drink** coffee every morning.*
- **Факты и общие истины:** *The sun **rises** in the east.*
- **Расписания:** *The train **leaves** at 9 a.m.*
- **Постоянные состояния:** *She **speaks** three languages.*

### Сигнальные слова
always, usually, often, sometimes, never, every day/week/month, on Mondays, twice a week

### Правило -s/-es для 3-го лица ед. числа
- Большинство глаголов: +**s** (works, reads)
- После -s, -sh, -ch, -x, -o: +**es** (watches, goes, fixes)
- Согласная + -y → **-ies** (study → studies, try → tries)
- Гласная + -y → +**s** (play → plays)

### Типичные ошибки на ЕГЭ
- ~~He go~~ → He **goes** (не забываем окончание)
- ~~She don't like~~ → She **doesn't like** (для he/she/it используется does)
- ~~I am work~~ → I **work** (не нужна связка be)

### Совет для ЕГЭ
Если в предложении есть слова every day, always, usually, often — используйте Present Simple.`,
    formulas: ['S + V(s/es) — утверждение', 'S + do/does + not + V — отрицание', 'Do/Does + S + V? — вопрос']
  },
  {
    id: 'english-2',
    subjectId: 'english',
    title: 'Present Continuous',
    description: 'Настоящее длительное время — действие происходит прямо сейчас или в текущий период времени.',
    content: `## Present Continuous

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I **am working** | I **am not working** | **Am** I **working**? |
| He/She/It **is working** | He/She/It **isn't working** | **Is** he/she/it **working**? |
| You/We/They **are working** | You/We/They **aren't working** | **Are** you/we/they **working**? |

### Когда используется
- **Действие происходит прямо сейчас:** *She **is reading** a book at the moment.*
- **Временные ситуации:** *He **is living** in Moscow this year.*
- **Запланированные действия (ближайшее будущее):** *We **are meeting** them tomorrow.*
- **Раздражающие привычки (с always):** *He **is always losing** his keys!*

### Сигнальные слова
now, at the moment, currently, right now, today, this week, look!, listen!

### Правило написания -ing
- Обычно: +ing (play → playing)
- Немая -e: убираем e (make → making, write → writing)
- Краткая гласная + согласная: удваиваем согласную (run → running, sit → sitting)
- -ie → -ying (lie → lying, die → dying)

### Глаголы, НЕ использующиеся в Continuous (stative verbs)
- Чувства: see, hear, smell, taste, feel
- Умственная деятельность: know, understand, believe, remember, forget
- Эмоции: love, hate, want, need, prefer
- Владение: have, own, belong

### Типичные ошибки на ЕГЭ
- ~~I am know~~ → I **know** (know — stative verb)
- ~~She is wanting~~ → She **wants** (want — stative verb)`,
    formulas: ['S + am/is/is + V-ing — утверждение', 'S + am/is/are + not + V-ing — отрицание', 'Am/Is/Are + S + V-ing? — вопрос']
  },
  {
    id: 'english-3',
    subjectId: 'english',
    title: 'Present Perfect',
    description: 'Настоящее совершённое время — связь прошлого с настоящим результатом.',
    content: `## Present Perfect

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/You/We/They **have worked** | I/You/We/They **haven't worked** | **Have** I/you/we/they **worked**? |
| He/She/It **has worked** | He/She/It **hasn't worked** | **Has** he/she/it **worked**? |

### Когда используется
- **Результат в настоящем:** *I **have lost** my keys.* (сейчас их нет)
- **Опыт (ever/never):** *She **has visited** Paris twice.*
- **Действие началось в прошлом и продолжается:** *We **have lived** here for 10 years.*
- **Недавнее действие (just, already, yet):** *He **has just arrived**.*

### Сигнальные слова
already, just, yet, ever, never, since, for, recently, so far, how many times

### Таблица неправильных глаголов (частые на ЕГЭ)
| Инфинитив | Прошедшее | Причастие II |
|----------|-----------|-------------|
| go | went | **gone** |
| see | saw | **seen** |
| take | took | **taken** |
| write | wrote | **written** |
| break | broke | **broken** |

### Present Perfect vs Past Simple
- **Present Perfect:** результат важен сейчас. *I **have broken** my leg.* (сейчас сломана)
- **Past Simple:** важно когда. *I **broke** my leg last year.* (указание времени)

### Типичные ошибки на ЕГЭ
- ~~I have went~~ → I **have gone** (нужна 3-я форма)
- ~~I have been to Paris last year~~ → I **went** to Paris last year (с указанием времени — Past Simple)`,
    formulas: ['S + have/has + V3 — утверждение', 'S + have/has + not + V3 — отрицание', 'Have/Has + S + V3? — вопрос']
  },
  {
    id: 'english-4',
    subjectId: 'english',
    title: 'Present Perfect Continuous',
    description: 'Настоящее совершённо-длительное время — действие длилось до момента речи и может продолжаться.',
    content: `## Present Perfect Continuous

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/You/We/They **have been working** | I/You/We/They **haven't been working** | **Have** I/you/we/they **been working**? |
| He/She/It **has been working** | He/She/It **hasn't been working** | **Has** he/she/it **been working**? |

### Когда используется
- **Действие началось в прошлом и продолжается:** *I **have been studying** English for 5 years.*
- **Длительное действие с видимым результатом:** *It **has been raining**.* (улицы мокрые)
- **Недавняя активность:** *You **have been crying**.* (глаза красные)

### Сигнальные слова
for, since, all day/morning/week, how long, lately, recently

### Present Perfect vs Present Perfect Continuous
| Present Perfect | Present Perfect Continuous |
|----------------|---------------------------|
| Результат | Процесс |
| *I **have read** the book.* (прочитал) | *I **have been reading** the book.* (читаю какое-то время) |
| Краткие или завершённые действия | Длительные действия |

### Сокращения
- I have been → I**'ve been**
- She has been → She**'s been**
- have not been → **haven't** been
- has not been → **hasn't** been

### Типичная ошибка на ЕГЭ
- ~~I have been knowing him~~ → I **have known** him (stative verbs не используются в Continuous)
- ~~I have been finishing my homework~~ → I **have finished** my homework (завершённое действие → Present Perfect)`,
    formulas: ['S + have/has + been + V-ing — утверждение', 'S + have/has + not + been + V-ing — отрицание', 'Have/Has + S + been + V-ing? — вопрос']
  },
  {
    id: 'english-5',
    subjectId: 'english',
    title: 'Past Simple',
    description: 'Прошедшее простое время — завершённое действие в прошлом.',
    content: `## Past Simple

### Образование
| Тип глагола | Утверждение | Отрицание | Вопрос |
|------------|------------|-----------|--------|
| Правильный | I **worked** | I **didn't work** | **Did** I **work**? |
| Неправильный | I **went** | I **didn't go** | **Did** I **go**? |
| To be | I **was** | I **wasn't** | **Was** I? |

### Правильные глаголы: правило -ed
- Обычно: +ed (walk → walked)
- -e: +d (live → lived)
- Согласная + y → -ied (study → studied, carry → carried)
- Краткая гласная + согласная: удвоение (stop → stopped, plan → planned)

### Когда используется
- **Завершённое действие в прошлом:** *She **passed** the exam yesterday.*
- **Последовательность действий:** *He **woke up**, **got dressed**, and **left**.*
- **Привычки в прошлом (used to):** *We **played** football every day as children.*

### Сигнальные слова
yesterday, last week/month/year, ago, in 2020, when I was young, the other day

### Таблица неправильных глаголов (частые)
| V1 | V2 | V3 |
|----|----|-----|
| do | did | done |
| come | came | come |
| give | gave | given |
| think | thought | thought |
| buy | bought | bought |

### Типичные ошибки на ЕГЭ
- ~~I didn't went~~ → I **didn't go** (после did — инфинитив)
- ~~She goed~~ → She **went** (неправильный глагол)
- ~~Did you went?~~ → **Did** you **go**?`,
    formulas: ['S + V2 (V-ed) — утверждение', 'S + did + not + V — отрицание', 'Did + S + V? — вопрос']
  },
  {
    id: 'english-6',
    subjectId: 'english',
    title: 'Past Continuous',
    description: 'Прошедшее длительное время — действие в процессе в определённый момент в прошлом.',
    content: `## Past Continuous

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/He/She/It **was working** | I/He/She/It **wasn't working** | **Was** I/he/she/it **working**? |
| You/We/They **were working** | You/We/They **weren't working** | **Were** you/we/they **working**? |

### Когда используется
- **Действие в процессе в определённый момент:** *At 5 p.m. yesterday, I **was studying**.*
- **Фоновое действие (когда произошло другое):** *I **was walking** home when it **started** raining.*
- **Два параллельных длительных действия:** *While she **was cooking**, he **was reading**.*

### Сигнальные слова
while, when, at that moment, at 5 o'clock yesterday, all day long

### Past Simple vs Past Continuous
| Past Simple | Past Continuous |
|-------------|-----------------|
| Короткое, завершённое действие | Длительное действие в процессе |
| *The phone **rang**.* | *I **was having** a bath.* |
| Прерывающее действие | Фоновое действие |

### Конструкции с when и while
- **When** + Past Simple, Past Continuous: *When he **arrived**, I **was cooking**.*
- **While** + Past Continuous, Past Simple: *While I **was sleeping**, the phone **rang**.*
- **While** + Past Continuous, Past Continuous: *While she **was singing**, he **was playing** guitar.*

### Типичная ошибка на ЕГЭ
- ~~When I arrived, he cooked~~ → When I arrived, he **was cooking** (длительное фоновое действие)`,
    formulas: ['S + was/were + V-ing — утверждение', 'S + was/were + not + V-ing — отрицание', 'Was/Were + S + V-ing? — вопрос']
  },
  {
    id: 'english-7',
    subjectId: 'english',
    title: 'Past Perfect',
    description: 'Прошедшее совершённое время — действие, произошедшее раньше другого действия в прошлом.',
    content: `## Past Perfect

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/He/She/It **had worked** | I/He/She/It **hadn't worked** | **Had** I/he/she/it **worked**? |

### Когда используется
- **Действие до другого действия в прошлом:** *By the time I **arrived**, she **had left**.*
- **Причина в прошлом:** *He **was** tired because he **hadn't slept** well.*
- **Опыт до определённого момента:** *She **had never seen** snow before that day.*
- **В Conditional (Third):** *If I **had known**, I would have helped.*

### Сигнальные слова
by the time, before, after, already, just, never, for, since, by 2019

### Past Perfect vs Past Simple
| Past Perfect | Past Simple |
|-------------|-------------|
| *The train **had left** when we **arrived**.* | *We **arrived** at the station.* |
| Первое действие (более раннее) | Второе действие (более позднее) |
| Had + V3 | V2 |

### Порядок действий
1. She **had finished** her homework. (первое — Past Perfect)
2. Then she **went** to bed. (второе — Past Simple)

### Типичные ошибки на ЕГЭ
- ~~When I arrived, she already went~~ → When I arrived, she **had already gone** (более раннее действие → Past Perfect)
- ~~I had went~~ → I **had gone** (нужна 3-я форма неправильного глагола)`,
    formulas: ['S + had + V3 — утверждение', 'S + had + not + V3 — отрицание', 'Had + S + V3? — вопрос']
  },
  {
    id: 'english-8',
    subjectId: 'english',
    title: 'Past Perfect Continuous',
    description: 'Прошедшее совершённо-длительное время — длительное действие до другого момента в прошлом.',
    content: `## Past Perfect Continuous

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/He/She/It **had been working** | I/He/She/It **hadn't been working** | **Had** I/he/she/it **been working**? |

### Когда используется
- **Длительное действие до другого действия:** *She **had been waiting** for an hour when the bus finally **came**.*
- **Причина видимого результата:** *Her eyes were red. She **had been crying**.*
- **Длительность до момента в прошлом:** *They **had been living** in London for 10 years before they moved.*

### Сигнальные слова
for, since, all day, how long, before, by the time

### Past Perfect vs Past Perfect Continuous
| Past Perfect | Past Perfect Continuous |
|-------------|------------------------|
| Результат | Процесс / длительность |
| *I **had read** the book.* | *I **had been reading** for 2 hours.* |
| Завершённое действие | Незавершённое / длящееся |

### Типичные ошибка на ЕГЭ
- ~~I had been knowing him~~ → I **had known** him (stative verbs не используются в Continuous)
- Контекст важен: если указан результат → Past Perfect; если длительность → Past Perfect Continuous`,
    formulas: ['S + had + been + V-ing — утверждение', 'S + had + not + been + V-ing — отрицание', 'Had + S + been + V-ing? — вопрос']
  },
  {
    id: 'english-9',
    subjectId: 'english',
    title: 'Future Simple',
    description: 'Будущее простое время — спонтанные решения, предсказания, обещания.',
    content: `## Future Simple

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/You/He **will work** | I/You/He **won't work** | **Will** I/you/he **work**? |

### Когда используется
- **Спонтанные решения:** *I'm hungry. I **will order** a pizza.*
- **Предсказания (думаю, уверен):** *I think it **will rain** tomorrow.*
- **Обещания и угрозы:** *I **will help** you with your homework.*
- **Факты о будущем:** *The sun **will rise** at 6 a.m.*

### Сигнальные слова
tomorrow, next week/month/year, in the future, I think, probably, soon

### will vs going to
| will | going to |
|------|----------|
| Спонтанное решение | Запланированное решение |
| *I'll have the salad.* | *I'm going to visit Paris next summer.* |
| Предсказание (мнение) | Предсказание (доказательства) |
| *I think he'll pass.* | *Look at the clouds! It's going to rain.* |

### Сокращения
- I will → I**'ll**
- will not → **won't**

### Типичные ошибки на ЕГЭ
- ~~I will going~~ → I **will go** (после will — инфинитив без to)
- ~~I will to help~~ → I **will help** (без to)`,
    formulas: ['S + will + V — утверждение', 'S + will + not + V — отрицание', 'Will + S + V? — вопрос']
  },
  {
    id: 'english-10',
    subjectId: 'english',
    title: 'Future Continuous',
    description: 'Будущее длительное время — действие будет в процессе в определённый момент в будущем.',
    content: `## Future Continuous

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/He **will be working** | I/He **won't be working** | **Will** I/he **be working**? |

### Когда используется
- **Действие в процессе в будущем:** *At 8 p.m. tomorrow, I **will be watching** a film.*
- **Запланированное действие:** *She **will be meeting** the manager at 3 p.m.*
- **Вежливый вопрос о планах:** ***Will** you **be using** the car tonight?*

### Сигнальные слова
at this time tomorrow, at 5 p.m. next Monday, all day tomorrow

### Future Continuous vs Future Simple
| Future Continuous | Future Simple |
|------------------|---------------|
| Процесс в определённый момент | Одно завершённое действие |
| *I'll be working at 9.* | *I'll call you at 9.* |
| Длительное действие | Короткое действие |

### Пример на ЕГЭ
*This time next week, she **will be lying** on a beach in Spain.* — К этому времени на следующей неделе она будет лежать на пляже.`,
    formulas: ['S + will + be + V-ing — утверждение', 'S + will + not + be + V-ing — отрицание', 'Will + S + be + V-ing? — вопрос']
  },
  {
    id: 'english-11',
    subjectId: 'english',
    title: 'Future Perfect',
    description: 'Будущее совершённое время — действие завершится до определённого момента в будущем.',
    content: `## Future Perfect

### Образование
| Утверждение | Отрицание | Вопрос |
|------------|-----------|--------|
| I/He **will have worked** | I/He **won't have worked** | **Will** I/he **have worked**? |

### Когда используется
- **Действие завершится до момента в будущем:** *By 2026, I **will have graduated** from university.*
- **Предположение о прошлом:** *He **will have arrived** by now.* (вероятно, уже приехал)

### Сигнальные слова
by, by then, by the time, before, by next year, by 2030

### Future Perfect vs Future Simple
| Future Perfect | Future Simple |
|---------------|---------------|
| Завершённость до срока | Простое действие в будущем |
| *I'll have finished by 5.* | *I'll finish at 5.* |
| By + момент в будущем | Просто указание на будущее |

### Пример
*By the time you arrive, I **will have cooked** dinner.* — К тому времени, как ты придёшь, я уже приготовлю ужин.`,
    formulas: ['S + will + have + V3 — утверждение', 'S + will + not + have + V3 — отрицание', 'Will + S + have + V3? — вопрос']
  },
  {
    id: 'english-12',
    subjectId: 'english',
    title: 'Passive Voice',
    description: 'Страдательный залог — когда важен не деятельитель, а само действие или объект.',
    content: `## Passive Voice (Страдательный залог)

### Образование: be + V3 (Participle II)

| Время | Формула | Пример |
|-------|---------|--------|
| Present Simple | am/is/are + V3 | *The book **is read** by millions.* |
| Past Simple | was/were + V3 | *The letter **was sent** yesterday.* |
| Future Simple | will be + V3 | *The project **will be finished** soon.* |
| Present Perfect | have/has been + V3 | *The house **has been sold**.* |
| Present Continuous | am/is/are being + V3 | *The road **is being repaired**.* |
| Past Continuous | was/were being + V3 | *The car **was being washed**.* |
| Modal | can/must/should be + V3 | *This **must be done** today.* |

### Когда используется
- **Деятель неважен:** *My bike **was stolen**.*
- **Деятель неизвестен:** *The window **was broken**.*
- **Научный/официальный стиль:** *The experiment **was conducted** in 2020.*

### Актив → Пассив
- Active: *They **built** this house in 1990.*
- Passive: *This house **was built** in 1990.*

### Типичные ошибки на ЕГЭ
- ~~The book was wrote~~ → The book was **written** (нужна 3-я форма)
- ~~The house is build~~ → The house is **being built** (если строится сейчас — Continuous Passive)`,
    formulas: ['S + be + V3', 'by + agent (когда деятель важен)']
  },
  {
    id: 'english-13',
    subjectId: 'english',
    title: 'Conditionals (Zero & First)',
    description: 'Условные предложения нулевого и первого типа — реальные условия.',
    content: `## Conditionals: Zero & First

### Zero Conditional (научные факты, общие истины)
**Формула:** If + Present Simple, Present Simple

- *If you **heat** water to 100°C, it **boils**.*
- *If it **rains**, the ground **gets** wet.*
- *If people **don't eat**, they **get** hungry.*

### First Conditional (реальное условие в будущем)
**Формула:** If + Present Simple, will + V

- *If it **rains** tomorrow, I **will stay** home.*
- *If she **studies** hard, she **will pass** the exam.*
- *If you **don't hurry**, you **will miss** the bus.*

### Варианты первого типа
| Главное предложение | Пример |
|-------------------|--------|
| will + V | *If I see him, I **will tell** him.* |
| can + V | *If you finish early, you **can leave**.* |
| must + V | *If you feel sick, you **must see** a doctor.* |
| may/might + V | *If it rains, we **might cancel** the trip.* |

### Типичные ошибки на ЕГЭ
- ~~If it will rain~~ → If it **rains** (в if-части НЕ используем will в 1-м типе)
- ~~If I would have time~~ → If I **have** time (в Zero и 1-м типе — Present Simple)`,
    formulas: ['Zero: If + Present Simple, Present Simple', 'First: If + Present Simple, will + V']
  },
  {
    id: 'english-14',
    subjectId: 'english',
    title: 'Conditionals (Second & Third)',
    description: 'Условные предложения второго и третьего типа — нереальные/гипотетические условия.',
    content: `## Conditionals: Second & Third

### Second Conditional (нереальное настоящее/будущее)
**Формула:** If + Past Simple, would + V

- *If I **had** a million dollars, I **would travel** the world.*
- *If she **lived** in London, she **would visit** Big Ben.*
- *If I **were** you, I **would accept** the offer.*

> Примечание: **were** используется для всех лиц (I were, he were) — формальный вариант.

### Third Conditional (нереальное прошлое)
**Формула:** If + Past Perfect, would have + V3

- *If I **had studied** harder, I **would have passed** the exam.*
- *If she **had left** earlier, she **wouldn't have missed** the train.*
- *If they **had known**, they **would have helped**.*

### Сравнительная таблица
| Тип | If-часть | Главное | Пример |
|-----|----------|---------|--------|
| 1st | Present Simple | will + V | If it rains, I'll stay home. |
| 2nd | Past Simple | would + V | If it rained, I would stay home. |
| 3rd | Past Perfect | would have V3 | If it had rained, I would have stayed. |

### Типичные ошибки на ЕГЭ
- ~~If I would have studied~~ → If I **had studied** (в if-части 3-го типа — Past Perfect)
- ~~If I had had time, I will go~~ → ...I **would have gone** (would have + V3)`,
    formulas: ['Second: If + Past Simple, would + V', 'Third: If + Past Perfect, would have + V3']
  },
  {
    id: 'english-15',
    subjectId: 'english',
    title: 'Modal verbs — can, could, may, might',
    description: 'Модальные глаголы can, could, may, might — возможность, разрешение, способность.',
    content: `## Modal verbs: can, could, may, might

### Can — настоящее
- **Способность:** *She **can speak** three languages.*
- **Разрешение (неформальное):** ***Can** I **use** your phone?*
- **Возможность (теоретическая):* *It **can be** very cold in winter.*

### Could — прошедшее / вежливая форма
- **Способность в прошлом:** *I **could swim** when I was five.*
- **Вежливая просьба:** ***Could** you **help** me, please?*
- **Возможность/предположение:** *It **could rain** later.*

### May — настоящее (более формально)
- **Разрешение (формальное):** ***May** I **come** in?*
- **Возможость:** *She **may come** to the party.*

### Might — слабая возможность
- **Маловероятное предположение:** *He **might be** at home.* (не уверен)

### Сравнительная таблица
| Глагол | Уверенность | Пример |
|--------|-------------|--------|
| must | ~95% | *He must be at home.* (почти уверен) |
| may | ~50% | *She may come.* (возможно) |
| might/could | ~30% | *It might rain.* (маловероятно) |
| can't | ~95% отриц. | *He can't be 50!* (невозможно) |

### После модальных глаголов — инфинитив БЕЗ to
- *She can **swim**.* (не ~~to swim~~)
- *Could you **help** me?* (не ~~to help~~)`,
    formulas: ['can/could/may/might + V (без to)', 'В отрицании: can\'t, couldn\'t, may not, might not']
  },
  {
    id: 'english-16',
    subjectId: 'english',
    title: 'Modal verbs — must, have to, should',
    description: 'Модальные глаголы must, have to, should — необходимость, совет, обязательство.',
    content: `## Modal verbs: must, have to, should

### Must — внутренняя необходимость / запрет
- **Обязательство (от говорящего):** *You **must wear** a seatbelt.*
- **Запрет (отрицание):** *You **mustn't park** here.* (запрещено)
- **Вывод/уверенность:** *She's not here. She **must be** at work.*

### Have to — внешняя необходимость
- **Обязательство (правила, законы):** *I **have to** get up early for work.*
- **Отрицание:** *You **don't have to** come.* (не обязательно, но можно)

### Should — совет
- **Рекомендация:** *You **should see** a doctor.*
- **Отрицание:** *You **shouldn't eat** so much sugar.*

### Must vs have to
| must | have to |
|------|---------|
| От говорящего (личное) | От обстоятельств (внешнее) |
| *I must study more.* (я решил) | *I have to wear a uniform.* (правило) |
| Отрицание: запрет | Отрицание: не обязательно |

### Сравнительная таблица отрицаний
| Выражение | Значение | Пример |
|-----------|----------|--------|
| mustn't | запрещено | You **mustn't smoke** here. |
| don't have to | не обязательно | You **don't have to** come early. |
| shouldn't | не рекомендуется | You **shouldn't skip** breakfast. |

### Типичные ошибка на ЕГЭ
- ~~You must to go~~ → You **must go** (без to)
- ~~You don't must~~ → You **mustn't** / You **don't have to**`,
    formulas: ['must + V', 'have to + V (do/does/did have to)', 'should + V']
  },
  {
    id: 'english-17',
    subjectId: 'english',
    title: 'Articles',
    description: 'Артикли a/an, the и нулевой артикль — одна из самых сложных тем ЕГЭ.',
    content: `## Articles (Aртикли)

### Неопределённый артикль a/an
- **Первое упоминание:** *I saw **a** cat in the garden.*
- **Один из многих:** *She is **a** student.*
- **a** — перед согласным звуком: **a** book, **a** university
- **an** — перед гласным звуком: **an** apple, **an** hour

### Определённый артикль the
- **Конкретный предмет:** *Give me **the** book on the table.*
- **Единственный в своём роде:** ***the** sun, **the** moon, **the** Earth*
- **Повторное упоминание:** *I saw a cat. **The** cat was black.*
- **С превосходной степенью:** ***the** best, **the** tallest*

### Нулевой артикль (без артикля)
- **Исчисляемые во мн. числе (вообще):** *Cats are independent.*
- **Неисчисляемые (вообще):** *Water is essential for life.*
- **Имена собственные:** *London, Maria*
- **Приёмы пищи, языки, спорт:** *breakfast, English, football*

### Частые исключения для ЕГЭ
| Без артикля | С the |
|-------------|-------|
| go to **school** (учиться) | go to **the school** (посетить здание) |
| go to **bed** (спать) | go to **the bed** (подойти к кровати) |
| go to **church** (молиться) | go to **the church** (посетить здание) |
| **at home** | **the** Hague, **the** USA, **the** UK |

### Типичные ошибки на ЕГЭ
- ~~a information~~ → information (неисчисляемое)
- ~~the music is great~~ → **Music** is great (музыка вообще — без артикля)`,
    formulas: ['a/an + исчисляемое ед. число (первое упоминание)', 'the + конкретный/уникальный предмет', '∅ (нулевой) + неисчисляемые, мн. число (вообще)']
  },
  {
    id: 'english-18',
    subjectId: 'english',
    title: 'Prepositions of time',
    description: 'Предлоги времени in, on, at и другие — обязательная тема для ЕГЭ.',
    content: `## Prepositions of Time

### Основные предлоги: in, on, at

| Предлог | Использование | Примеры |
|---------|--------------|---------|
| **at** | Точное время, праздники | at 5 o'clock, at noon, at night, at Christmas |
| **on** | Дни и даты | on Monday, on July 1st, on my birthday |
| **in** | Периоды времени | in the morning, in July, in 2025, in summer |

### Другие важные предлоги времени
- **for** — продолжительность: *for 3 hours, for a long time*
- **since** — начиная с: *since Monday, since 2010*
- **by** — к (какому-то сроку): *by 5 p.m., by tomorrow*
- **during** — в течение: *during the summer, during the meeting*
- **until/till** — до: *until tomorrow, till the end*
- **from...to** — от...до: *from Monday to Friday*

### Частые исключения
| Выражение | Исключение |
|-----------|-----------|
| **at** the weekend (BrE) | **on** the weekend (AmE) |
| **at** night | **in** the morning/afternoon/evening |
| **on** time (точно) | **in** time (вовремя) |

### Типичные ошибки на ЕГЭ
- ~~in the night~~ → **at** night
- ~~on 2020~~ → **in** 2020
- ~~at Monday~~ → **on** Monday
- ~~for 2010~~ → **since** 2010`,
    formulas: ['at + точное время', 'on + день/дата', 'in + период (месяц, год, время суток)']
  },
  {
    id: 'english-19',
    subjectId: 'english',
    title: 'Prepositions of place',
    description: 'Предлоги места in, on, at, under, between и другие.',
    content: `## Prepositions of Place

### Основные предлоги
| Предлог | Значение | Пример |
|---------|----------|--------|
| **in** | Внутри, в | *The keys are **in** the bag.* |
| **on** | На поверхности | *The book is **on** the table.* |
| **at** | Точка, местоположение | *She is **at** the door.* |
| **under** | Под | *The cat is **under** the bed.* |
| **between** | Между (двумя) | *The park is **between** the bank and the shop.* |
| **behind** | Позади | *The garden is **behind** the house.* |
| **in front of** | Перед | *The car is **in front of** the building.* |
| **next to / beside** | Рядом с | *He lives **next to** the school.* |
| **above / over** | Над | *The lamp is **above** the table.* |
| **below / under** | Под | *The temperature is **below** zero.* |

### at vs in vs on для мест
| at | in | on |
|----|----|-----|
| at the bus stop | in London | on the wall |
| at school | in the room | on the floor |
| at home | in the box | on the page |

### Движение: to vs at
- **to** — направление: *go **to** school, come **to** me*
- **at** — статичное положение: *be **at** school, sit **at** the desk*

### Типичные ошибки на ЕГЭ
- ~~in the bus~~ → **on** the bus (транспорт — on)
- ~~on the cinema~~ → **at** the cinema (место деятельности — at)`,
    formulas: ['in + замкнутое пространство', 'on + поверхность', 'at + точка/место']
  },
  {
    id: 'english-20',
    subjectId: 'english',
    title: 'Word formation — nouns',
    description: 'Существительные — способы образования от глаголов и прилагательных.',
    content: `## Word Formation: Nouns

### Суффиксы существительных

| Суффикс | Значение | Примеры |
|---------|----------|---------|
| **-tion/-sion** | действие/процесс | education, decision, information |
| **-ment** | результат/состояние | development, agreement, movement |
| **-ness** | качество/состояние | happiness, kindness, darkness |
| **-ity** | качество | ability, reality, diversity |
| **-er/-or** | деятель | teacher, actor, writer |
| **-ist** | профессия/убеждение | artist, scientist, tourist |
| **-ance/-ence** | действие/качество | importance, difference, confidence |
| **-dom** | область/состояние | freedom, kingdom, wisdom |
| **-ship** | состояние/отношения | friendship, leadership, membership |
| **-al** | действие | arrival, removal, approval |

### Глагол → Существительное
| Глагол | Существительное |
|--------|----------------|
| decide | decision |
| develop | development |
| educate | education |
| act | action |
| create | creation |

### Прилагательное → Существительное
| Прилагательное | Существительное |
|---------------|----------------|
| happy | happiness |
| able | ability |
| kind | kindness |
| free | freedom |
| dark | darkness |

### Совет для ЕГЭ
Определите часть речи, которая нужна в предложении:
- После артикля (a/an/the) → существительное
- После прилагательного → существительное
- После глагола (прямое дополнение) → существительное`,
    formulas: ['V + -tion/-ment/-ance → N', 'Adj + -ness/-ity/-dom → N', 'V + -er/-or → деятель']
  },
  {
    id: 'english-21',
    subjectId: 'english',
    title: 'Word formation — adjectives',
    description: 'Прилагательные — способы образования от существительных и глаголов.',
    content: `## Word Formation: Adjectives

### Суффиксы прилагательных

| Суффикс | Значение | Примеры |
|---------|----------|---------|
| **-ful** | полный чего-л. | helpful, beautiful, careful |
| **-less** | без чего-л. | careless, homeless, useless |
| **-ous/-ious** | обладающий | dangerous, famous, serious |
| **-able/-ible** | возможный | comfortable, possible, flexible |
| **-al** | относящийся к | natural, national, personal |
| **-ive** | имеющий свойство | creative, active, expensive |
| **-y** | похожий/свойство | cloudy, rainy, sunny |
| **-ern** | направление | eastern, western, northern |
| **-ic** | относящийся к | historic, scientific, economic |
| **-ent/-ant** | качество | different, important, confident |

### Существительное → Прилагательное
| Существительное | Прилагательное |
|----------------|---------------|
| beauty | beautiful |
| care | careful / careless |
| danger | dangerous |
| nature | natural |
| hope | hopeful / hopeless |

### Популярные пары antonym-прилагательных
| С суффиксом -ful | С суффиксом -less |
|-----------------|-----------------|
| helpful | helpless |
| useful | useless |
| hopeful | hopeless |
| careful | careless |
| meaningful | meaningless |

### Совет для ЕГЭ
Ищите подсказки в предложении:
- Перед существительным → нужно прилагательное
- После глаголов be/seem/look/feel → прилагательное
- Частица un-/in-/im-/dis- = отрицание: unhappy, impossible, disagree`,
    formulas: ['N + -ful/-ous/-able/-al → Adj', 'N + -less → Adj (отрицание)', 'un-/in-/im-/dis- + Adj → отрицательное Adj']
  },
  {
    id: 'english-22',
    subjectId: 'english',
    title: 'Word formation — verbs',
    description: 'Глаголы — способы образования от существительных и прилагательных.',
    content: `## Word Formation: Verbs

### Суффиксы глаголов

| Суффикс | Значение | Примеры |
|---------|----------|---------|
| **-ize/-ise** | делать, превращать | organize, realize, apologize |
| **-ify** | делать, превращать | identify, classify, simplify |
| **-en** | становиться | widen, strengthen, darken |
| **-ate** | совершать действие | create, communicate, motivate |

### Существительное → Глагол
| Существительное | Глагол |
|----------------|--------|
| beauty | beautify |
| class | classify |
| strength | strengthen |
| modern | modernize |
| communication | communicate |
| creation | create |

### Прилагательное → Глагол
| Прилагательное | Глагол |
|---------------|--------|
| simple | simplify |
| modern | modernize |
| wide | widen |
| dark | darken |
| popular | popularize |

### Префиксы глаголов
| Префикс | Значение | Примеры |
|---------|----------|---------|
| **re-** | снова | rewrite, rebuild, reconsider |
| **un-** | обратное действие | undo, unlock, unpack |
| **over-** | чрезмерно | overeat, overestimate, overload |
| **mis-** | неправильно | misunderstand, mislead, misplace |

### Типичные ошибки на ЕГЭ
- Чтение подсказок в предложении: если после подлежащего нет глагола → нужен глагол
- Если предложение содержит объект (дополнение) → вероятно, нужен переходный глагол`,
    formulas: ['N/Adj + -ize/-ify/-en/-ate → V', 're-/un-/over-/mis- + V → новое значение']
  },
  {
    id: 'english-23',
    subjectId: 'english',
    title: 'Phrasal verbs',
    description: 'Фразовые глаголы — глаголы с предлогами/наречиями, меняющие значение.',
    content: `## Phrasal Verbs (Фразовые глаголы)

### Самые частые фразовые глаголы для ЕГЭ

| Фразовый глагол | Значение | Пример |
|----------------|----------|--------|
| **look after** | присматривать | She looks after her younger brother. |
| **look for** | искать | I'm looking for my keys. |
| **look forward to** | с нетерпением ждать | I look forward to meeting you. |
| **give up** | сдаваться, бросать | Don't give up! |
| **put off** | откладывать | He always puts off doing homework. |
| **find out** | узнать | I found out the truth. |
| **get on/off** | сесть/выйти (транспорт) | Get on the bus at the next stop. |
| **get up** | вставать | I get up at 7 a.m. |
| **take off** | снимать; взлетать | The plane takes off at 9. |
| **turn on/off** | включать/выключать | Turn off the light, please. |
| **turn down** | отклонить; убавить | He turned down the offer. |
| **carry on** | продолжать | Carry on with your work. |
| **come across** | случайно найти | I came across an old photo. |
| **run out of** | закончиться | We've run out of milk. |
| **bring up** | воспитывать; поднять тему | She was brought up in London. |

### Отделяемые и неотделяемые фразовые глаголы
- **Отделяемые:** *Turn **off** the light / Turn the light **off**.* (дополнение можно поставить между)
- **Неотделяемые:** *Look **after** the children.* (нельзя: ~~look the children after~~)

### Если дополнение — местоимение, глагол ВСЕГДА разделяется
- *Turn **it** off.* (не ~~turn off it~~)
- *Pick **them** up.* (не ~~pick up them~~)

### Совет для ЕГЭ
Учите фразовые глаголы в контексте предложений, а не изолированно.`,
    formulas: ['V + particle = новое значение', 'Местоимение всегда разделяет: pick it up']
  },
  {
    id: 'english-24',
    subjectId: 'english',
    title: 'Collocations',
    description: 'Словосочетания — устойчивые комбинации слов, которые часто встречаются в ЕГЭ.',
    content: `## Collocations (Словосочетания)

### Типы коллокаций

| Тип | Примеры |
|-----|---------|
| **Глагол + существительное** | make a mistake, do homework, take a photo |
| **Прилагательное + существительное** | heavy rain, strong wind, fast food |
| **Глагол + наречие** | speak loudly, work hard, drive carefully |
| **Наречие + прилагательное** | highly recommended, deeply concerned |

### Частые глагольные коллокации
| **make** | **do** | **take** |
|----------|--------|---------|
| make a decision | do homework | take a break |
| make a mistake | do your best | take notes |
| make progress | do exercise | take part |
| make an effort | do the shopping | take place |
| make money | do harm | take advantage |

### Частые прилагательные + существительные
| Прилагательное | Частые搭配 |
|---------------|-----------|
| **heavy** | rain, traffic, snow |
| **strong** | wind, opinion, coffee |
| **deep** | sleep, breath, thought |
| **wide** | range, variety, awake |
| **high** | quality, speed, risk |

### Частые ошибки на ЕГЭ
| Неправильно | Правильно |
|-------------|-----------|
| ~~do a mistake~~ | **make** a mistake |
| ~~do a photo~~ | **take** a photo |
| ~~make homework~~ | **do** homework |
| ~~big rain~~ | **heavy** rain |
| ~~strong rain~~ | **heavy** rain |

### Совет для ЕГЭ
Коллокации нужно запоминать как единое целое. Перевод отдельных слов не поможет.`,
    formulas: ['make + mistake/progress/effort', 'do + homework/exercise/shopping', 'take + photo/notes/part']
  },
  {
    id: 'english-25',
    subjectId: 'english',
    title: 'Gerund and Infinitive',
    description: 'Герундий и инфинитив — когда после глагола использовать -ing, а когда to.',
    content: `## Gerund and Infinitive

### Герундий (-ing)
Глаголы, после которых используется **только герундий**:
- enjoy, avoid, finish, mind, suggest, keep, consider, imagine, practice, deny
- *I **enjoy reading** books.*
- *She **avoided talking** to him.*

### Инфинитив (to + V)
Глаголы, после которых используется **только инфинитив**:
- want, decide, hope, plan, agree, refuse, promise, manage, afford, offer
- *He **decided to leave** early.*
- *They **agreed to help**.*

### Герундий ИЛИ инфинитив (без изменения значения)
- start, begin, continue, like, love, hate, prefer
- *She **started reading** / **started to read**.*

### Герундий ИЛИ инфинитив (С изменением значения)
| Глагол | + Gerund (-ing) | + Infinitive (to) |
|--------|----------------|-------------------|
| **remember** | помнить (делал) | не забыть (сделать) |
| **forget** | забыть (делал) | забыть (сделать) |
| **stop** | перестать делать | остановиться, чтобы сделать |
| **try** | попробовать (эксперимент) | попытаться (цель) |

- *I **remember locking** the door.* (помню, что закрыл)
- *Remember **to lock** the door.* (не забудь закрыть)

### После предлогов — ВСЕГДА герундий
- *I'm interested **in learning** French.*
- *She's good **at singing**.*
- *Thank you **for helping** me.*

### После to — герундий или инфинитив?
- look forward **to** + V**ing**: *I look forward to **seeing** you.*
- used **to** + V: *I used to **play** tennis.* (инфинитив)`,
    formulas: ['V + -ing (enjoy, avoid, finish...)', 'V + to + V (want, decide, hope...)', 'Предлог + -ing']
  },
  {
    id: 'english-26',
    subjectId: 'english',
    title: 'Reported Speech',
    description: 'Косвенная речь — передача чужих слов с изменением времён и местоимений.',
    content: `## Reported Speech (Косвенная речь)

### Правило сдвига времён (Backshift)

| Прямая речь | Косвенная речь |
|------------|---------------|
| Present Simple | Past Simple |
| Present Continuous | Past Continuous |
| Past Simple | Past Perfect |
| Present Perfect | Past Perfect |
| will | would |
| can | could |
| may | might |
| am/is/are | was/were |

### Примеры
- *He said, "I **work** here."* → *He said (that) he **worked** there.*
- *She said, "I **am reading**."* → *She said (that) she **was reading**.*
- *They said, "We **have finished**."* → *They said (that) they **had finished**.*

### Изменения слов
| Прямая речь | Косвенная речь |
|------------|---------------|
| this | that |
| these | those |
| here | there |
| now | then |
| today | that day |
| tomorrow | the next day / the following day |
| yesterday | the day before / the previous day |
| ago | before |

### Вопросы в косвенной речи
- *He asked, "**Where do** you **live**?"* → *He asked where I **lived**.*
- Порядок слов: **подлежащее + глагол** (не вопросительный)
- Вопросительные слова: who, what, where, when, why, how, if/whether

### Приказы и просьбы
- *She said, "**Open** the door."* → *She **told** me **to open** the door.*
- *He said, "**Don't go**."* → *He **told** me **not to go**.*

### Типичные ошибки на ЕГЭ
- ~~He asked where did I live~~ → He asked where **I lived**
- ~~She told me that don't go~~ → She told me **not to go**`,
    formulas: ['say (that) + S + V (со сдвигом)', 'ask + if/wh- + S + V', 'tell/order + S + to V']
  },
  {
    id: 'english-27',
    subjectId: 'english',
    title: 'Relative Clauses',
    description: 'Определительные придаточные предложения — who, which, that, whose, where, when.',
    content: `## Relative Clauses

### Относительные местоимения

| Местоимение | Используется для | Пример |
|------------|-----------------|--------|
| **who** | лица | The man **who lives** next door is friendly. |
| **which** | предметов/животных | The book **which I read** was amazing. |
| **that** | лиц и предметов | The car **that he bought** is red. |
| **whose** | принадлежности | The girl **whose bag** was lost is crying. |
| **where** | места | The city **where I was born** is small. |
| **when** | времени | The day **when we met** was sunny. |

### Определительные (Defining) vs Неопределительные (Non-Defining)

| Defining | Non-Defining |
|----------|-------------|
| Без запятых | С запятами |
| *The students **who passed** got prizes.* | *My brother, **who lives in London**, is a doctor.* |
| Без этой информации предложение непонятно | Дополнительная информация |
| Можно использовать **that** | Нельзя использовать **that** |

### Когда НЕЛЬЗЯ использовать that
- В неопределительных придаточных (с запятыми): *My mother, **who** is 50, ...* (не ~~that~~)
- После предлога: *The house **in which** we lived...* (не ~~in that~~)

### Когда можно опустить местоимение
Когда относительное местоимение — **дополнение**:
- *The book **(that/which)** I read was great.* → *The book I read was great.*
- Нельзя опустить, если местоимение — **подлежащее**:
- *The man **who** called you is here.* (нельзя опустить who)

### Типичные ошибки на ЕГЭ
- ~~The man which called~~ → The man **who** called (лицо — who)
- ~~My brother that lives in London~~ → My brother, **who** lives in London, ... (Non-defining, запятые)`,
    formulas: ['who/which/that + S + V (Defining)', ', who/which + S + V, (Non-defining)', 'whose + N, where + S + V, when + S + V']
  },
  {
    id: 'english-28',
    subjectId: 'english',
    title: 'Comparative and Superlative',
    description: 'Сравнительная и превосходная степени прилагательных и наречий.',
    content: `## Comparative and Superlative

### Образование

| Тип прилагательного | Сравнительная | Превосходная |
|-------------------|--------------|-------------|
| Короткие (1 слог) | -er | -est |
| Короткие на -y | -ier | -iest |
| Длинные (2+ слога) | more + Adj | most + Adj |
| Неправильные | better/worse/further | best/worst/furthest |

### Примеры
| Положит. | Сравнит. | Превосх. |
|----------|----------|----------|
| tall | tall**er** | **the** tall**est** |
| happy | happ**ier** | **the** happ**iest** |
| beautiful | **more** beautiful | **the most** beautiful |
| good | **better** | **the best** |
| bad | **worse** | **the worst** |

### Конструкции сравнения
- **as...as** — так же, как: *She is **as tall as** her mother.*
- **not as...as** — не так, как: *He is **not as old as** me.*
- **the + superlative** — самый: *She is **the smartest** student.*
- **much / far / a lot + comparative** — намного: *This is **much better**.*

### Сравнение с than
- *She is **taller than** her brother.*
- *This book is **more interesting than** that one.*

### Типичные ошибки на ЕГЭ
- ~~more better~~ → **better** (нельзя удваивать сравнение)
- ~~the most tallest~~ → **the tallest**
- ~~more easy~~ → **easier** (короткое на -y → -ier)
- ~~bader~~ → **worse** (неправильное)`,
    formulas: ['Adj-er + than', 'the Adj-est', 'more/most + Adj (длинные)', 'as + Adj + as']
  },
  {
    id: 'english-29',
    subjectId: 'english',
    title: 'Countable and Uncountable nouns',
    description: 'Исчисляемые и неисчисляемые существительные — важная тема для ЕГЭ.',
    content: `## Countable and Uncountable Nouns

### Исчисляемые (Countable)
Можно посчитать: *one book, two books*
- a/an + исчисляемое: *a cat, an apple*
- Множественное число: *cats, apples, children*

### Неисчисляемые (Uncountable)
Нельзя посчитать: *water, information, music*
- Без a/an: ~~a water~~ → **some water**
- Без множественного числа: ~~informations~~ → **information**

### Типичные неисчисляемые существительные
| Категория | Примеры |
|-----------|---------|
| Жидкости | water, milk, coffee, tea |
| Материалы | wood, glass, paper, gold |
| Абстракции | information, advice, knowledge, news |
| Еда (общая) | bread, rice, sugar, salt, meat |
| Другие | furniture, luggage, equipment, homework |

### Исчисляемые vs Неисчисляемые (одинаковые слова)
| Исчисляемое | Неисчисляемое |
|-------------|---------------|
| a paper (газета) | paper (бумага) |
| a glass (стакан) | glass (стекло) |
| a room (комната) | room (пространство) |
| a chicken (цыплёнок) | chicken (мясо) |

### Модификаторы неисчисляемых
- **some / any / a lot of / much / little** + неисчисляемое
- *There isn't **much** milk left.*
- *I have **some** news for you.*

### Модификаторы исчисляемых
- **some / any / many / few / a few / several** + исчисляемое мн.ч.
- *There are **many** students in the class.*
- *I have **a few** friends here.*

### Типичные ошибки на ЕГЭ
- ~~many informations~~ → **much information**
- ~~a few advices~~ → **a little advice**
- ~~an equipment~~ → **some equipment**`,
    formulas: ['a/an + C (ед.ч.)', 'some/any/much/little + U', 'some/any/many/few/a few + C (мн.ч.)']
  },
  {
    id: 'english-30',
    subjectId: 'english',
    title: 'Quantifiers',
    description: 'Квантификаторы — слова, указывающие на количество: some, any, much, many, few, little.',
    content: `## Quantifiers (Квантификаторы)

### Таблица квантификаторов

| Квантификатор | Исчисляемые | Неисчисляемые |
|--------------|-------------|---------------|
| **some** | some books | some water |
| **any** | any questions? | any sugar? |
| **a lot of** | a lot of people | a lot of time |
| **many** | many students | — |
| **much** | — | much money |
| **a few** | a few friends (несколько) | — |
| **few** | few friends (мало, отриц.) | — |
| **a little** | — | a little time (немного) |
| **little** | — | little time (мало, отриц.) |
| **no** | no students | no water |

### few vs a few, little vs a little
| Выражение | Значение | Пример |
|-----------|----------|--------|
| **a few** | несколько (достаточно) | *I have **a few** friends.* (у меня есть несколько) |
| **few** | мало (недостаточно) | *I have **few** friends.* (мало, грустно) |
| **a little** | немного (достаточно) | *There is **a little** milk.* (хватит) |
| **little** | мало (недостаточно) | *There is **little** hope.* (мало надежды) |

### some vs any
| some | any |
|------|-----|
| Утверждения | Вопросы и отрицания |
| *I have **some** questions.* | *Do you have **any** questions?* |
| Предложения/просьбы: ***Would** you like **some** tea?* | *I don't have **any** money.* |

### much vs many
- **much** + неисчисляемое: *much time, much water*
- **many** + исчисляемое мн.ч.: *many students, many books*
- В утверждениях чаще: **a lot of** / **lots of**

### Типичные ошибки на ЕГЭ
- ~~much books~~ → **many books**
- ~~many money~~ → **much money**
- ~~a few water~~ → **a little water**`,
    formulas: ['some/any + C (мн.ч.) / U', 'many + C (мн.ч.)', 'much + U', 'a few + C, a little + U']
  },
  {
    id: 'english-31',
    subjectId: 'english',
    title: 'Pronouns',
    description: 'Местоимения — личные, притяжательные, возвратные, указательные.',
    content: `## Pronouns (Местоимения)

### Личные местоимения
| Подлежащие | Объектные |
|-----------|----------|
| I | me |
| you | you |
| he | him |
| she | her |
| it | it |
| we | us |
| they | them |

### Притяжательные местоимения
| Прилагательное (перед сущ.) | Существительное (самостоятельно) |
|---------------------------|-------------------------------|
| my | mine |
| your | yours |
| his | his |
| her | hers |
| its | its |
| our | ours |
| their | theirs |

- *This is **my** book.* → *This book is **mine**.*

### Возвратные местоимения
| Единственное | Множественное |
|-------------|---------------|
| myself | ourselves |
| yourself | yourselves |
| himself | themselves |
| herself | themselves |
| itself | themselves |

- *I did it **myself**.* (сам)
- *She hurt **herself**.* (себя)

### Указательные местоимения
| Близко | Далеко |
|--------|--------|
| **this** (ед.ч.) | **that** (ед.ч.) |
| **these** (мн.ч.) | **those** (мн.ч.) |

### it vs one
- **it** — конкретный предмет: *Where is my pen? — **It's** on the table.*
- **one** — один из: *I need a pen. Do you have **one**?*

### Типичные ошибки на ЕГЭ
- ~~Me and Tom went~~ → **Tom and I** went (подлежащее)
- ~~Myself did it~~ → I did it **myself** (myself не может быть подлежащим)
- ~~its'~~ → **its** (притяжательное без апострофа)`,
    formulas: ['I/me/my/mine/myself', 'S + V + myself/yourselves... (возвратное)', 'this/these (близко), that/those (далеко)']
  },
  {
    id: 'english-32',
    subjectId: 'english',
    title: 'Conjunctions',
    description: 'Союзы — слова, связывающие части предложения.',
    content: `## Conjunctions (Союзы)

### Координирующие союзы (Coordinating)
| Союз | Значение | Пример |
|------|----------|--------|
| **and** | и | *I like tea **and** coffee.* |
| **but** | но | *She is smart **but** lazy.* |
| **or** | или | *Tea **or** coffee?* |
| **so** | поэтому | *It was late, **so** we left.* |
| **yet** | однако | *He is rich **yet** unhappy.* |

### Подчинительные союзы (Subordinating)
| Союз | Значение | Пример |
|------|----------|--------|
| **because** | потому что | *I stayed home **because** it rained.* |
| **although/though** | хотя | **Although** it was cold, we went out.* |
| **while/whereas** | тогда как | *He likes sports, **while** she likes music.* |
| **if** | если | **If** it rains, we'll stay home.* |
| **when** | когда | *I'll call you **when** I arrive.* |
| **until** | до тех пор | *Wait **until** I come back.* |
| **since** | с тех пор / так как | *I've lived here **since** 2010.* |
| **unless** | если не | *Don't go **unless** you want to.* |
| **as soon as** | как только | *Call me **as soon as** you arrive.* |
| **in order to** | чтобы | *She studies hard **in order to** pass.* |

### Союзы-пары (Correlative)
- **both...and**: *Both Tom **and** Jerry came.*
- **either...or**: *Either tea **or** coffee.*
- **neither...nor**: *Neither he **nor** she knew.*
- **not only...but also**: *Not only smart **but also** kind.*

### Типичные ошибки на ЕГЭ
- ~~Despite of the rain~~ → **Despite** the rain (без of) / **In spite of** the rain
- ~~Although it rained, but we went out~~ → **Although** it rained, we went out (без but)`,
    formulas: ['and, but, or, so, yet (координирующие)', 'because, although, if, when, unless (подчинительные)', 'both...and, either...or, neither...nor']
  },
  {
    id: 'english-33',
    subjectId: 'english',
    title: 'Question tags',
    description: 'Разделительные вопросы — короткие вопросы в конце предложения.',
    content: `## Question Tags (Разделительные вопросы)

### Правило образования
- Утверждение → отрицательный tag
- Отрицание → утвердительный tag

| Предложение | Tag |
|-------------|-----|
| She **is** a student, | **isn't she?** |
| They **can** swim, | **can't they?** |
| He **doesn't** like coffee, | **does he?** |
| You **have** finished, | **haven't you?** |

### Таблица основных tags

| Глагол в предложении | Tag |
|---------------------|-----|
| am | aren't I? |
| is/are | isn't/aren't? |
| was/were | wasn't/weren't? |
| have/has (Present Perfect) | haven't/hasn't? |
| do/does (Present Simple) | don't/doesn't? |
| did (Past Simple) | didn't? |
| will | won't? |
| can | can't? |
| should | shouldn't? |
| must | mustn't? / needn't? |

### Особые случаи
- **Let's go**, **shall we?**
- **Nobody** came, **did they?** (Nobody → отрицание → did)
- **Nothing** happened, **did it?**
- **Everybody** is here, **aren't they?**

### Интонация
- **Восходящая ↗** (повышение) — настоящий вопрос: *You like coffee, don't you? ↗*
- **Нисходящая ↘** (понижение) — подтверждение: *It's a nice day, isn't it? ↘*

### Типичные ошибки на ЕГЭ
- ~~She is a student, is she?~~ → ...**isn't she?** (утверждение → отрицательный tag)
- ~~He doesn't go, doesn't he?~~ → ...**does he?** (отрицание → утвердительный tag)`,
    formulas: ['Утверждение, + отрицательный tag?', 'Отрицание, + утвердительный tag?']
  },
  {
    id: 'english-34',
    subjectId: 'english',
    title: 'Indirect questions',
    description: 'Косвенные вопросы — вежливая форма вопросов без инверсии.',
    content: `## Indirect Questions (Косвенные вопросы)

### Прямые vs Косвенные вопросы
| Прямой вопрос | Косвенный вопрос |
|--------------|-----------------|
| *Where **does** he live?* | *Could you tell me where he **lives**?* |
| *What **is** her name?* | *Do you know what her name **is**?* |
| ***Is** she coming?* | *I wonder **if/whether** she is coming.* |

### Правила
1. **Нет инверсии** — порядок слов как в утверждении (S + V)
2. **Без do/does/did** — убираем вспомогательный глагол
3. **Wh-вопросы** — используем то же вопросительное слово
4. **Yes/No вопросы** — добавляем **if** или **whether**

### Вводные фразы для косвенных вопросов
- *Could you tell me...*
- *Do you know...*
- *I'd like to know...*
- *I wonder...*
- *Can you explain...*
- *Do you remember...*

### Примеры
| Прямой | Косвенный |
|--------|-----------|
| *Where is the station?* | *Could you tell me where **the station is**?* |
| *When does the train leave?* | *Do you know when **the train leaves**?* |
| *Who is that man?* | *I wonder who **that man is**.* |
| *Is she at home?* | *Do you know **if/whether** she is at home?* |

### Типичные ошибки на ЕГЭ
- ~~Could you tell me where does he live?~~ → ...where **he lives** (нет инверсии!)
- ~~I wonder that she is coming~~ → I wonder **if/whether** she is coming (не that)
- ~~Do you know what is it?~~ → ...what **it is**`,
    formulas: ['Wh-: S + V (без инверсии)', 'Yes/No: if/whether + S + V']
  },
  {
    id: 'english-35',
    subjectId: 'english',
    title: 'Used to / Would',
    description: 'Used to и would — выражение привычек в прошлом.',
    content: `## Used to / Would

### Used to — привычки и состояния в прошлом
**Формула:** used to + V (инфинитив)

- **Привычки:** *I **used to play** football every day.* (раньше играл, сейчас нет)
- **Состояния:** *She **used to live** in Moscow.* (раньше жила)
- **Отрицание:** *He **didn't use to** like vegetables.*
- **Вопрос:** ***Did** you **use to** smoke?*

### Would — повторяющиеся действия в прошлом
**Формула:** would + V

- *Every summer, we **would go** to the beach.*
- *He **would always sit** by the window.*

### Would vs Used to
| Used to | Would |
|---------|-------|
| Привычки И состояния | Только привычки (действия) |
| *I **used to live** in Paris.* ✓ | *~~I would live in Paris.~~* ✗ |
| *I **used to smoke**.* ✓ | *I **would smoke**.* ✓ |
| Подчёркивает контраст с настоящим | Просто повторяющееся действие |

### Оборот to be used to
- **be used to + V-ing** — быть привыкшим: *I **am used to getting** up early.*
- **get used to + V-ing** — привыкать: *She **is getting used to** the new school.*

### Типичные ошибки на ЕГЭ
- ~~I used to live~~ → I **used to live** (не ~~use to~~ в утверждении)
- ~~He would live in London~~ → He **used to live** in London (would нельзя для состояний)
- ~~I am used to wake up~~ → I am used to **waking** up (после to — герундий)`,
    formulas: ['used to + V (привычки/состояния в прошлом)', 'would + V (только привычки)', 'be used to + V-ing (привык к чему-то)']
  },
  {
    id: 'english-36',
    subjectId: 'english',
    title: 'Wish clauses',
    description: 'Предложения с wish — выражение сожаления и желания.',
    content: `## Wish Clauses

### Wish + Past Simple — о настоящем (желание изменить настоящее)
- *I **wish** I **had** more free time.* (Хочу, чтобы у меня было больше времени — сейчас нет)
- *She **wishes** she **lived** in London.* (Хочет жить в Лондоне — сейчас не живёт)
- *I **wish** I **didn't have** to work today.*

### Wish + Past Perfect — о прошлом (сожаление)
- *I **wish** I **had studied** harder.* (Жаль, что не учился лучше — уже поздно)
- *He **wishes** he **hadn't said** that.* (Жаль, что сказал)
- *We **wish** we **had come** earlier.*

### Wish + would — о действиях других людей
- *I **wish** you **would stop** smoking.* (Хочу, чтобы ты перестал)
- *She **wishes** it **would stop** raining.* (Хочет, чтобы дождь прекратился)
- Нельзя использовать о себе: ~~I wish I would be~~ → I wish I **were**

### Wish + could
- *I **wish** I **could** swim.* (Хел бы, но не могу)
- *She **wishes** she **could** speak French.*

### Таблица
| Сожаление о | Конструкция | Пример |
|-------------|------------|--------|
| Настоящем | wish + Past Simple | I wish I **knew**. |
| Прошлом | wish + Past Perfect | I wish I **had known**. |
| Действиях других | wish + would | I wish he **would come**. |

### Типичные ошибки на ЕГЭ
- ~~I wish I can~~ → I wish I **could**
- ~~I wish I didn't go~~ (о прошлом) → I wish I **hadn't gone**
- ~~I wish I would be rich~~ → I wish I **were** rich (о себе — не would)`,
    formulas: ['wish + Past Simple (о настоящем)', 'wish + Past Perfect (о прошлом)', 'wish + would (о других людях)']
  },
  {
    id: 'english-37',
    subjectId: 'english',
    title: 'So / Such / Enough / Too',
    description: 'Выражения интенсивности: so, such, enough, too.',
    content: `## So / Such / Enough / Too

### So + прилагательное/наречие
- *The exam was **so difficult**.*
- *She speaks **so quickly**.*
- *It was **so cold** that we stayed home.*

### Such + (прилагательное) + существительное
- *It was **such a difficult exam**.*
- *She is **such a kind person**.*
- *They are **such nice people**.* (множественное — без a)

### So vs Such
| So | Such |
|----|------|
| so + Adj/Adv | such + (Adj) + N |
| *so beautiful* | *such a beautiful day* |
| *so quickly* | *such good news* |

### Too + прилагательное — слишком
- *It's **too hot** to go outside.*
- *The box is **too heavy** to carry.*
- *He is **too young** to drive.*

### Достаточно: enough
- **Adj/Adv + enough**: *She is **old enough** to vote.*
- **enough + N**: *We have **enough time**.*
- **not enough**: *I don't have **enough money**.*

### Структура too/enough + to-infinitive
- *He is **too young to** drive.* (слишком молод, чтобы водить)
- *She is **old enough to** vote.* (достаточно взрослая, чтобы голосовать)

### Типичные ошибки на ЕГЭ
- ~~so a good book~~ → **such a good book** (перед существительным — such)
- ~~such beautiful~~ → **so beautiful** (без существительного — so)
- ~~enough old~~ → **old enough** (enough после прилагательного!)
- ~~too much hot~~ → **too hot** (too + Adj, не too much)`,
    formulas: ['so + Adj/Adv', 'such + (a/an) + Adj + N', 'Adj/Adv + enough', 'too + Adj/Adv']
  },
  {
    id: 'english-38',
    subjectId: 'english',
    title: 'Essay writing — structure',
    description: 'Структура эссе для ЕГЭ — введение, основная часть, заключение.',
    content: `## Essay Writing: Structure (Структура эссе)

### Формат эссе на ЕГЭ
- **Объём:** 200–250 слов
- **Части:** 5 абзацев
- **Время:** ~40 минут

### Структура

| Абзац | Содержание | Примерные фразы |
|-------|-----------|-----------------|
| **1. Введение** | Переформулировка темы | *The problem of ... is widely discussed nowadays.* |
| **2. Мнение 1** | Первое мнение + аргументы | *Some people believe that...* |
| **3. Мнение 2** | Второе мнение + аргументы | *Others argue that...* |
| **4. Ваше мнение** | Личная позиция | *In my opinion... / I believe that...* |
| **5. Заключение** | Краткий итог | *In conclusion... / To sum up...* |

### Полезные фразы

**Введение:**
- *Nowadays, the issue of ... is of great importance.*
- *People have always been interested in...*
- *It is common knowledge that...*

**Выражение мнений:**
- *Some people think/believe/consider that...*
- *It is often argued that...*
- *From my point of view...*

**Заключение:**
- *Taking everything into consideration...*
- *All things considered...*

### Объём по абзацам
1. Введение: ~30–40 слов
2. Мнение 1: ~50–60 слов
3. Мнение 2: ~50–60 слов
4. Ваше мнение: ~40–50 слов
5. Заключение: ~20–30 слов

### Совет для ЕГЭ
Не забывайте: введение и заключение должны быть **переформулировкой**, а не копированием темы.`,
    formulas: ['Введение (30-40 слов)', 'Мнение 1 (50-60)', 'Мнение 2 (50-60)', 'Ваше мнение (40-50)', 'Заключение (20-30)']
  },
  {
    id: 'english-39',
    subjectId: 'english',
    title: 'Essay writing — arguments',
    description: 'Как строить аргументы в эссе для ЕГЭ.',
    content: `## Essay Writing: Arguments (Аргументы)

### Структура аргумента
Каждый аргумент состоит из 3 частей:
1. **Утверждение** (topic sentence)
2. **Объяснение** (explanation)
3. **Пример** (example)

### Пример аргумента
> *Some people believe that education is the key to success. **For example**, graduates with a university degree are more likely to find a well-paid job. **Furthermore**, education helps people develop critical thinking skills, which are essential in modern life.*

### Фразы для аргументации

| Функция | Фразы |
|---------|-------|
| Первый аргумент | Firstly, / To begin with, / First of all, |
| Дополнение | Moreover, / Furthermore, / In addition, / Besides, |
| Пример | For example, / For instance, / such as |
| Контраст | However, / On the other hand, / Nevertheless, |
| Причина | because / since / as / due to |
| Следствие | therefore, / as a result, / consequently |

### Сильные vs слабые аргументы
| Слабый | Сильный |
|--------|---------|
| *I think sport is good.* | *Regular physical exercise improves both mental and physical health, which leads to a better quality of life.* |
| *Books are important.* | *Reading books broadens one's horizons and develops imagination, which is especially important for young people.* |

### Типичные ошибки на ЕГЭ
- Нет примеров — аргумент без примера слабый
- Слишком общие фразы без конкретики
- Использование I think в каждом абзаце (чередуйте с In my opinion, I believe, I am convinced)`,
    formulas: ['Утверждение + Объяснение + Пример', 'Firstly... Moreover... For example...']
  },
  {
    id: 'english-40',
    subjectId: 'english',
    title: 'Letter writing — personal',
    description: 'Личное письмо — формат, структура и полезные фразы.',
    content: `## Personal Letter (Личное письмо)

### Формат
- **Объём:** 100–120 слов
- **Адрес:** правый верхний угол (необязательно на ЕГЭ)
- **Дата:** под адресом

### Структура

| Часть | Содержание |
|-------|-----------|
| **Обращение** | Dear Tom, / Hi Tom! |
| **1. Благодарность / ответ** | Thanks for your letter! / Sorry I haven't written for a long time. |
| **2. Основная часть** | Ответы на 3 вопроса из письма друга |
| **3. Вопросы другу** | 3 вопроса другу |
| **Концовка** | Write back soon! / Looking forward to hearing from you. |
| **Подпись** | Best wishes, / Love, / Take care, [Имя] |

### Полезные фразы

**Начало:**
- *Thanks for your letter. It was great to hear from you.*
- *I was so happy to get your letter.*
- *Sorry I haven't written for so long. I've been really busy.*

**Ответы на вопросы:**
- *You asked me about... / As for your question about...*
- *In your letter you wanted to know about...*

**Задание вопросов:**
- *By the way, have you ever been to...?*
- *What do you think about...?*
- *Could you tell me more about...?*

**Концовка:**
- *Well, I have to go now.*
- *Write back and tell me about...*
- *Looking forward to your reply.*

### Совет для ЕГЭ
- Отвечайте на ВСЕ 3 вопроса из письма
- Задайте ВСЕ 3 вопроса другу
- Неформальный стиль: сокращения допустимы (I'm, don't, it's)`,
    formulas: ['Обращение → Благодарность → Ответы (3) → Вопросы (3) → Концовка → Подпись']
  },
  {
    id: 'english-41',
    subjectId: 'english',
    title: 'Letter writing — formal',
    description: 'Формальное письмо — жалоба, запрос, заявление.',
    content: `## Formal Letter (Формальное письмо)

### Формат
- **Объём:** 100–120 слов
- **Стиль:** формальный, без сокращений, без разговорных выражений

### Структура

| Часть | Содержание |
|-------|-----------|
| **Обращение** | Dear Sir/Madam, (если не знаем имя) / Dear Mr. Smith, |
| **1. Цель письма** | I am writing to... |
| **2. Основная часть** | Подробности, аргументы |
| **3. Заключение** | Ожидаемый ответ / действие |
| **Концовка** | Yours faithfully, (Dear Sir/Madam) / Yours sincerely, (Dear Mr. Smith) |

### Полезные фразы

**Цель письма:**
- *I am writing to inquire about...*
- *I am writing to complain about...*
- *I am writing to apply for the position of...*
- *I am writing to express my dissatisfaction with...*

**Основная часть:**
- *I would like to point out that...*
- *I would be grateful if you could...*
- *I feel I must draw your attention to...*
- *The reason for my complaint is...*

**Заключение:**
- *I look forward to hearing from you at your earliest convenience.*
- *I would appreciate a prompt response.*
- *Thank you for your time and consideration.*

### Формальный vs Неформальный
| Формальный | Неформальный |
|-----------|-------------|
| I am writing to... | I wanted to tell you... |
| I would be grateful... | Could you...? |
| I would like to know... | I want to know... |
| Yours faithfully/sincerely | Best wishes / Love |

### Типичные ошибки на ЕГЭ
- ~~I'm writing to complain~~ → I **am** writing (без сокращений)
- ~~Dear Friend~~ → Dear Sir/Madam (в формальном письме)
- ~~Love,~~ → Yours faithfully/sincerely`,
    formulas: ['Dear Sir/Madam → Yours faithfully', 'Dear Mr. X → Yours sincerely']
  },
  {
    id: 'english-42',
    subjectId: 'english',
    title: 'Listening strategies',
    description: 'Стратегии выполнения заданий на аудирование в ЕГЭ.',
    content: `## Listening Strategies (Аудирование)

### Формат аудирования на ЕГЭ
| Задание | Описание | Тип |
|---------|----------|-----|
| Задание 1 | Соотнесение (6 высказываний → 7 утверждений) | Matching |
| Задание 2 | Определение истинности (7 утверждений) | True/False |
| Задание 3 | Выбор из 3 вариантов (7 вопросов) | Multiple choice |

### Стратегии

**Перед прослушиванием:**
1. Внимательно прочитайте задание и варианты
2. Подчеркните ключевые слова
3. Попробуйте предсказать, о чём будет речь

**Во время прослушивания:**
1. Слушайте **общий смысл**, не каждое слово
2. Отмечайте ответы сразу — второй раз может не быть
3. Обращайте внимание на **синонимы** (слова в тексте ≠ слова в задании)
4. Слушайте **отрицания**: not, never, hardly, rarely

**После прослушивания:**
1. Проверьте, что все ответы заполнены
2. Если не уверены — угадывайте (нет штрафа за ошибки)

### Типичные ловушки
- **Синонимы:** *He said it was "cheap"* → задание: *"inexpensive"* (это одно и то же)
- **Отрицания:** *He said he **wouldn't** go* → не "he would go"
- **Порядок информации:** информация может идти **не по порядку** вопросов
- **Подмена:** один вариант может совпадать с услышанным, но быть **неправильным**

### Задание 1 (Matching) — советы
- Прослушайте **всё высказывание**, а не отдельные слова
- У каждого говорящего — **одно** соответствие
- Используйте метод исключения`,
    formulas: ['Читайте задание до прослушивания', 'Ищите синонимы, а не точные совпадения', 'Отмечайте ответы сразу']
  },
  {
    id: 'english-43',
    subjectId: 'english',
    title: 'Reading strategies',
    description: 'Стратегии выполнения заданий на чтение в ЕГЭ.',
    content: `## Reading Strategies (Чтение)

### Формат чтения на ЕГЭ
| Задание | Описание | Баллы |
|---------|----------|-------|
| Задание 4 | Заполнение пропусков в тексте (7 пропусков) | 7 |
| Задание 5 | Чтение текста + ответы (7 вопросов) | 7 |
| Задание 6 | Соотнесение заголовков (7 абзацев → 8 заголовков) | 7 |

### Стратегии

**Задание 4 (Вставка предложений):**
1. Прочитайте **весь текст** сначала
2. Обратите внимание на **связующие слова** (however, therefore, moreover)
3. Проверьте **логику** — предложение должно связываться с предыдущим и следующим
4. Используйте грамматические подсказки (местоимения, время глагола)

**Задание 5 (Ответы на вопросы):**
1. Прочитайте **вопросы** перед текстом
2. Найдите **ключевое слово** вопроса в тексте
3. Прочитайте **предложение до и после** найденного места
4. Отвечайте по тексту, а не по общим знаниям

**Задание 6 (Заголовки):**
1. Прочитайте **все заголовки** сначала
2. Найдите **тему** каждого абзаца (обычно в первом/последнем предложении)
3. Ищите **переформулировку** — заголовок обычно другими словами
4. Используйте метод исключения

### Общие советы
- Не тратьте время на незнакомые слова — догадывайтесь из контекста
- Управляйте временем: ~30 минут на 3 задания
- Начинайте с задания, которое даётся легче`,
    formulas: ['Читайте вопросы ПЕРЕД текстом', 'Ищите ключевые слова в тексте', 'Отвечайте по тексту, не по знаниям']
  },
  {
    id: 'english-44',
    subjectId: 'english',
    title: 'Synonyms and antonyms',
    description: 'Синонимы и антонимы — расширение словарного запаса для ЕГЭ.',
    content: `## Synonyms and Antonyms (Синонимы и Антонимы)

### Синонимы (похожие по значению)
| Слово | Синонимы |
|-------|---------|
| happy | glad, pleased, delighted, joyful |
| sad | unhappy, miserable, sorrowful |
| big | large, huge, enormous, vast |
| small | little, tiny, minor, slight |
| important | significant, essential, crucial, vital |
| beautiful | attractive, gorgeous, stunning, lovely |
| difficult | hard, challenging, tough, complicated |
| begin | start, commence, initiate |
| end | finish, conclude, terminate |
| help | assist, support, aid |

### Антонимы (противоположные по значению)
| Слово | Антоним |
|-------|---------|
| happy | sad, unhappy |
| big | small, little |
| fast | slow |
| hot | cold |
| easy | difficult, hard |
| rich | poor |
| young | old |
| tall | short |
| appear | disappear |
| possible | impossible |

### Префиксы для образования антонимов
| Префикс | Примеры |
|---------|---------|
| **un-** | unhappy, unusual, unfair |
| **in-** | incorrect, incomplete, independent |
| **im-** | impossible, impatient, impolite |
| **il-** | illegal, illiterate |
| **ir-** | irregular, irresponsible |
| **dis-** | disagree, disappear, dislike |
| **mis-** | misunderstand, mislead |
| **over-** | overestimate, overload |
| **under-** | underestimate, underpaid |

### Типичные ошибки на ЕГЭ
- Запоминайте синонимы в контексте, а не изолированно
- Антонимы с разными префиксами: un-/in-/im-/dis- часто взаимозаменяемы`,
    formulas: ['un-/in-/im-/il-/ir- + Adj = антоним', 'dis- + V = обратное действие']
  },
  {
    id: 'english-45',
    subjectId: 'english',
    title: 'Idioms',
    description: 'Идиомы — устойчивые выражения, которые встречаются в ЕГЭ.',
    content: `## Idioms (Идиомы)

### Частые идиомы для ЕГЭ

| Идиома | Значение | Пример |
|--------|----------|--------|
| **break the ice** | разрядить обстановку | He told a joke to break the ice. |
| **a piece of cake** | очень легко | The test was a piece of cake. |
| **hit the books** | усиленно учиться | I need to hit the books before the exam. |
| **once in a blue moon** | очень редко | He visits us once in a blue moon. |
| **cost an arm and a leg** | очень дорого | That car costs an arm and a leg. |
| **under the weather** | нездоровиться | I'm feeling under the weather today. |
| **the ball is in your court** | твой ход | I've done my part; the ball is in your court. |
| **bite the bullet** | собраться с духом | She bit the bullet and told the truth. |
| **burn the midnight oil** | работать допоздна | Students often burn the midnight oil before exams. |
| **a blessing in disguise** | скрытое благо | Losing that job was a blessing in disguise. |
| **cut corners** | экономить (на качестве) | Don't cut corners on safety. |
| **get out of hand** | выйти из-под контроля | The situation got out of hand. |
| **go the extra mile** | сделать больше, чем ожидалось | She always goes the extra mile. |
| **keep an eye on** | присматривать | Keep an eye on the children. |
| **spill the beans** | выдать секрет | Don't spill the beans about the surprise! |

### Животные в идиомах
| Идиома | Значение |
|--------|----------|
| **let the cat out of the bag** | выдать секрет |
| **raining cats and dogs** | лить как из ведра |
| **the elephant in the room** | очевидная проблема |
| **hold your horses** | подожди |
| **kill two birds with one stone** | убить двух зайцев |

### Совет для ЕГЭ
Идиомы часто встречаются в задании на чтение. Если вы видите незнакомую идиому — попробуйте догадаться из контекста.`,
    formulas: ['Идиомы нельзя перевести дословно', 'Ищите контекстные подсказки']
  },
  {
    id: 'english-46',
    subjectId: 'english',
    title: 'Homophones and homonyms',
    description: 'Омофоны и омонимы — слова, которые звучат или пишутся одинаково, но имеют разное значение.',
    content: `## Homophones and Homonyms

### Омофоны (одинаковое звучание, разное написание)

| Омофон 1 | Омофон 2 | Примеры |
|----------|----------|---------|
| **their** (их) | **there** (там) / **they're** (they are) | *Their house is there.* |
| **your** (твой) | **you're** (you are) | *You're losing your keys.* |
| **its** (его) | **it's** (it is / it has) | *It's a dog. Its tail is long.* |
| **to** (к) | **too** (тоже/слишком) / **two** (два) | *I went to the shop too.* |
| **hear** (слышать) | **here** (здесь) | *I can hear you from here.* |
| **write** (писать) | **right** (правый/правильно) | *Write your name on the right.* |
| **know** (знать) | **no** (нет) | *I know the answer — no!* |
| **buy** (покупать) | **by** (у) / **bye** (пока) | *Buy it by the door. Bye!* |
| **weather** (погода) | **whether** (whether) | *I wonder whether the weather will change.* |
| **where** (где) | **wear** (носить) | *Where do you wear a hat?* |

### Омонимы (одинаковое написание, разное значение)

| Слово | Значение 1 | Значение 2 |
|-------|-----------|-----------|
| **bank** | берег реки | банк |
| **bat** | летучая мышь | бита |
| **light** | свет | лёгкий |
| **match** | спичка | матч |
| **mean** | означать | подлой |
| **right** | правый | правильно |
| **run** | бежать | управлять |
| **set** | набор | устанавливать |
| **train** | поезд | тренировать |
| **watch** | часы | смотреть |

### Типичные ошибки на ЕГЭ
- **your/you're** — самая частая ошибка
- **its/it's** — its = притяжательное, it's = it is
- **there/their/they're** — три разных слова!
- **than/then** — than = чем, then = потом`,
    formulas: ['their = их, there = там, they\'re = they are', 'its = его, it\'s = it is', 'your = твой, you\'re = you are']
  },
  {
    id: 'english-47',
    subjectId: 'english',
    title: 'Spelling rules',
    description: 'Правила написания слов — типичные ошибки в правописании.',
    content: `## Spelling Rules (Правила написания)

### Удвоенные согласные
| Правило | Примеры |
|---------|---------|
| После краткой гласной + удвоенная согласная | running, swimming, beginning |
| После приставки + корень (без изменения) | disappear, impossible, illegal |
| Частые слова с удвоением | accommodation, recommend, necessary, disappear, suggest |

### Слова, которые часто путают
| Правильно | Частая ошибка |
|-----------|--------------|
| **necessary** | ~~neccessary~~ (одна c, две s) |
| **accommodation** | ~~accomodation~~ (два c, два m) |
| **recommend** | ~~recomend~~ (два m) |
| **beginning** | ~~begining~~ (два n) |
| **occurred** | ~~occured~~ (два c, два r) |
| **referred** | ~~refered~~ (два r) |
| **embarrassing** | ~~embarasing~~ (два r, два s) |
| **independent** | ~~independant~~ (-ent, не -ant) |
| **government** | ~~goverment~~ (n между r и m) |
| **beautiful** | ~~beatiful~~ (eau → beau) |
| **definitely** | ~~definately~~ (-ite-, не -ate-) |
| **separate** | ~~seperate~~ (-par-, не -per-) |
| **until** | ~~untill~~ (одна l) |
| **which** | ~~wich~~ (h после w) |
| **believe** | ~~beleive~~ (i before e except after c) |

### Правило "i before e, except after c"
- believe, receive, achieve, ceiling
- Исключения: weird, seize, their, foreign

### Суффиксы -ful и -ness
- **-ful** (одна l): beautiful, helpful, careful
- **-ness** (через n): happiness, darkness, kindness

### Совет для ЕГЭ
Составьте список слов, которые вы часто пишете с ошибками, и повторяйте их перед экзаменом.`,
    formulas: ['necessary = 1 c, 2 s', 'accommodation = 2 c, 2 m', 'recommend = 2 m']
  },
  {
    id: 'english-48',
    subjectId: 'english',
    title: 'Punctuation',
    description: 'Знаки препинания в английском языке — правила для ЕГЭ.',
    content: `## Punctuation (Знаки препинания)

### Точка (.)
- В конце повествовательного предложения: *I like coffee.*
- В сокращениях: *Mr., Dr., etc., e.g.*

### Запятая (,)
| Случай | Пример |
|--------|--------|
| Перечисление | *I bought apples, bananas, and oranges.* |
| Вводные слова | *However, I disagree.* |
| Придаточные предложения | *When I arrived, she was sleeping.* |
| Обособление | *My brother, who lives in London, is a doctor.* |
| Деепричастные обороты | *Walking home, I met a friend.* |

### Запятая НЕ ставится
- Между подлежащим и сказуемым: ~~The students, passed the exam.~~
- Перед that в Defining clauses: *The book **that** I read...*
- Перед because: *I stayed **because** it rained.*

### Апостроф (')
| Случай | Пример |
|--------|--------|
| Сокращения | don't, can't, it's (= it is) |
| Притяжательный падеж | Tom's book, the children's toys |
| Множественное числа буквы | Mind your p's and q's. |

### Апостроф НЕ ставится
- Притяжательные местоимения: **its** (не ~~it's~~), **yours**, **hers**
- Множественное число: **dogs** (не ~~dog's~~), **cats**

### Кавычки (" " / ' ')
- Прямая речь: *She said, "I'm tired."*
- Названия: *Have you read "Harry Potter"?*
- Кавычки внутри кавычек: одинарные в британском, двойные в американском

### Тире (—) vs дефис (-)
- **Тире** — вводные конструкции: *My friend — a doctor — helped me.*
- **Дефис** — сложные слова: *well-known, twenty-one, mother-in-law*

### Типичные ошибки на ЕГЭ
- ~~Lets~~ → **Let's** (сокращение от let us)
- ~~Childrens~~ → **Children's** (притяжательный падеж)
- ~~Its a nice day~~ → **It's** a nice day (it is)`,
    formulas: ['Запятая: перечисление, вводные слова, придаточные', 'Апостроф: сокращения и притяжательный падеж', 'its = притяжательное, it\'s = it is']
  },
  {
    id: 'english-49',
    subjectId: 'english',
    title: 'Common mistakes',
    description: 'Частые ошибки на ЕГЭ по английскому языку — как их избежать.',
    content: `## Common Mistakes (Частые ошибки)

### Грамматические ошибки

| Ошибка | Правильно |
|--------|----------|
| ~~He go to school~~ | He **goes** to school (3-е лицо -s) |
| ~~I didn't went~~ | I **didn't go** (после did — инфинитив) |
| ~~She can to swim~~ | She **can swim** (без to) |
| ~~I am agree~~ | I **agree** (agree — не прилагательное) |
| ~~I am very like~~ | I **like** very much / I **really like** |
| ~~More better~~ | **better** (без more) |
| ~~The most biggest~~ | **the biggest** (без most) |
| ~~I have 20 years~~ | I **am** 20 years old |
| ~~I am going to home~~ | I am going **home** (без to) |
| ~~Despite of~~ | **Despite** / **In spite of** |

### Лексические ошибки

| Ошибка | Правильно |
|--------|----------|
| ~~Make a photo~~ | **Take** a photo |
| ~~Do a mistake~~ | **Make** a mistake |
| ~~Do a party~~ | **Have/throw** a party |
| ~~Big rain~~ | **Heavy** rain |
| ~~Strong rain~~ | **Heavy** rain |
| ~~Learn a language~~ | **Study/learn** a language (оба допустимы, но learn чаще) |

### Ошибки с предлогами

| Ошибка | Правильно |
|--------|----------|
| ~~Arrive to~~ | **Arrive at/in** |
| ~~Discuss about~~ | **Discuss** (без предлога) |
| ~~Enter to~~ | **Enter** (без предлога) |
| ~~Listen~~ | **Listen to** |
| ~~Depend of~~ | **Depend on** |
| ~~Interested for~~ | **Interested in** |

### Ошибки в словообразовании
- ~~He is a very success man~~ → a very **successful** man
- ~~The develop of the country~~ → The **development** of the country
- ~~It was a beauty day~~ → It was a **beautiful** day

### Совет для ЕГЭ
Перечитайте свои эссе и письма перед сдачей. Проверьте типичные ошибки из этого списка.`,
    formulas: ['Проверяйте: 3-е лицо, did + V, модальные без to', 'Проверяйте: make/do, предлоги, словообразование']
  },
  {
    id: 'english-50',
    subjectId: 'english',
    title: 'Exam strategies',
    description: 'Стратегии сдачи ЕГЭ по английскому — тайм-менеджмент и советы.',
    content: `## Exam Strategies (Стратегии экзамена)

### Структура ЕГЭ по английскому
| Часть | Задания | Время | Макс. баллы |
|-------|---------|-------|------------|
| **Аудирование** | 1–3 | ~30 мин | 20 |
| **Чтение** | 4–6 | ~30 мин | 20 |
| **Грамматика и лексика** | 7–9 | ~40 мин | 20 |
| **Письмо** | 10–11 | ~60 мин | 20 |
| **Устная часть** | 12–15 | ~15 мин | 20 |
| **Итого** | | ~180 мин | **100** |

### Тайм-менеджмент
1. **Не засиживайтесь** на одном задании — максимум 2 минуты на вопрос
2. **Начинайте с сильных частей** — наберите баллы быстрее
3. **Оставьте время на проверку** — минимум 5 минут в конце
4. **Заполняйте бланк сразу** — не оставляйте на потом

### Задания 7–9 (Грамматика и лексика)
- **Задание 7** — грамматические формы (времена, залог, модальные)
- **Задание 8** — словообразование (самое сложное)
- **Задание 9** — лексика (предлоги, коллокации, фразовые глаголы)

**Стратегия:**
1. Определите **часть речи** (глагол? существительное? прилагательное?)
2. Посмотрите на **контекст** (артикль перед пропуском → существительное)
3. Проверьте **время глагола** (по контексту предложения)

### Задания 10–11 (Письмо)
- **Задание 10** — личное письмо (100–120 слов)
- **Задание 11** — эссе (200–250 слов)

**Стратегия:**
1. Потратьте 5 минут на **планирование**
2. Пишите **по структуре** (введение → основная часть → заключение)
3. Пересчитайте слова — **не менее** минимума
4. Проверьте **грамматику и орфографию**

### Общие советы
- Высыпайтесь перед экзаменом
- Приходите заранее
- Читайте задания **дважды**
- Если не уверены — угадывайте (нет штрафа)
- Сохраняйте спокойствие — стресс снижает результат`,
    formulas: ['Аудирование: 20 баллов → 30 мин', 'Чтение: 20 баллов → 30 мин', 'Грамматика/лексика: 20 баллов → 40 мин', 'Письмо: 20 баллов → 60 мин']
  }
];

export const englishQuestions: Question[] = [
  // Topic 1: Present Simple
  { id: 'english-q1', topicId: 'english-1', text: 'She ___ (go) to school every day.', type: 'choice', options: ['go', 'goes', 'going', 'is go'], correctAnswer: 'goes', explanation: 'Для 3-го лица ед. числа (she) добавляем -es к глаголу go → goes.', points: 1 },
  { id: 'english-q2', topicId: 'english-1', text: 'They ___ (not/like) coffee.', type: 'choice', options: ['doesn\'t like', 'don\'t like', 'not like', 'aren\'t like'], correctAnswer: 'don\'t like', explanation: 'Для They используем вспомогательный глагол do → don\'t like.', points: 1 },
  { id: 'english-q3', topicId: 'english-1', text: '___ your mother work in a hospital?', type: 'choice', options: ['Do', 'Does', 'Is', 'Are'], correctAnswer: 'Does', explanation: 'Для 3-го лица ед. числа (your mother = she) используем Does.', points: 1 },
  { id: 'english-q4', topicId: 'english-1', text: 'The sun ___ (rise) in the east.', type: 'choice', options: ['rise', 'rises', 'rising', 'is rise'], correctAnswer: 'rises', explanation: 'Общая истина — Present Simple, 3-е лицо → rises.', points: 1 },

  // Topic 2: Present Continuous
  { id: 'english-q5', topicId: 'english-2', text: 'Look! The children ___ (play) in the garden.', type: 'choice', options: ['play', 'plays', 'are playing', 'is playing'], correctAnswer: 'are playing', explanation: 'Signal word "Look!" указывает на действие прямо сейчас → Present Continuous. Children — мн.ч. → are playing.', points: 1 },
  { id: 'english-q6', topicId: 'english-2', text: 'She ___ (not/watch) TV at the moment.', type: 'choice', options: ['doesn\'t watch', 'isn\'t watching', 'don\'t watching', 'not watching'], correctAnswer: 'isn\'t watching', explanation: 'Present Continuous отрицание: is + not + V-ing → isn\'t watching.', points: 1 },
  { id: 'english-q7', topicId: 'english-2', text: 'I ___ (read) an interesting book these days.', type: 'choice', options: ['read', 'am reading', 'is reading', 'reads'], correctAnswer: 'am reading', explanation: '"These days" — временная ситуация → Present Continuous. I → am reading.', points: 1 },
  { id: 'english-q8', topicId: 'english-2', text: 'Which sentence uses a stative verb correctly?', type: 'choice', options: ['I am knowing the answer.', 'She is wanting a new phone.', 'He knows the answer.', 'They are believing in magic.'], correctAnswer: 'He knows the answer.', explanation: 'Know — stative verb, не используется в Continuous. Правильно: He knows.', points: 1 },

  // Topic 3: Present Perfect
  { id: 'english-q9', topicId: 'english-3', text: 'I ___ (already/finish) my homework.', type: 'choice', options: ['already finished', 'have already finished', 'has already finished', 'am already finishing'], correctAnswer: 'have already finished', explanation: 'Already — сигнал Present Perfect. I → have + V3 → have already finished.', points: 1 },
  { id: 'english-q10', topicId: 'english-3', text: 'She ___ (visit) Paris three times.', type: 'choice', options: ['visited', 'has visited', 'have visited', 'visits'], correctAnswer: 'has visited', explanation: 'Three times — опыт в жизни → Present Perfect. She → has + V3.', points: 1 },
  { id: 'english-q11', topicId: 'english-3', text: '___ you ever ___ (be) to London?', type: 'choice', options: ['Did ... been', 'Have ... been', 'Has ... been', 'Did ... be'], correctAnswer: 'Have ... been', explanation: 'Ever — сигнал Present Perfect. You → have ... been.', points: 1 },
  { id: 'english-q12', topicId: 'english-3', text: 'He ___ (not/see) that film yet.', type: 'choice', options: ['didn\'t see', 'hasn\'t seen', 'haven\'t seen', 'doesn\'t see'], correctAnswer: 'hasn\'t seen', explanation: 'Yet — сигнал Present Perfect. He → hasn\'t + V3.', points: 1 },

  // Topic 4: Present Perfect Continuous
  { id: 'english-q13', topicId: 'english-4', text: 'I ___ (study) English for 5 years.', type: 'choice', options: ['study', 'am studying', 'have been studying', 'has been studying'], correctAnswer: 'have been studying', explanation: 'For 5 years — длительное действие до настоящего → Present Perfect Continuous. I → have been studying.', points: 1 },
  { id: 'english-q14', topicId: 'english-4', text: 'She ___ (wait) for the bus since 8 o\'clock.', type: 'choice', options: ['waits', 'is waiting', 'has been waiting', 'have been waiting'], correctAnswer: 'has been waiting', explanation: 'Since 8 o\'clock — начало действия в прошлом, продолжается → Present Perfect Continuous. She → has been waiting.', points: 1 },
  { id: 'english-q15', topicId: 'english-4', text: 'It ___ (rain) all morning. The streets are wet.', type: 'choice', options: ['rains', 'has rained', 'has been raining', 'is raining'], correctAnswer: 'has been raining', explanation: 'Видимый результат (мокрые улицы) + длительность (all morning) → Present Perfect Continuous.', points: 1 },
  { id: 'english-q16', topicId: 'english-4', text: 'Which is correct with a stative verb?', type: 'choice', options: ['I have been knowing him for years.', 'I have known him for years.', 'I am knowing him for years.', 'I have been known him for years.'], correctAnswer: 'I have known him for years.', explanation: 'Know — stative verb, не используется в Continuous. Правильно: have known.', points: 1 },

  // Topic 5: Past Simple
  { id: 'english-q17', topicId: 'english-5', text: 'She ___ (go) to the cinema yesterday.', type: 'choice', options: ['goed', 'went', 'goes', 'was going'], correctAnswer: 'went', explanation: 'Go — неправильный глагол, V2 = went. Yesterday — сигнал Past Simple.', points: 1 },
  { id: 'english-q18', topicId: 'english-5', text: 'They ___ (not/see) the film last week.', type: 'choice', options: ['didn\'t saw', 'don\'t see', 'didn\'t see', 'not saw'], correctAnswer: 'didn\'t see', explanation: 'После didn\'t — инфинитив без to → didn\'t see.', points: 1 },
  { id: 'english-q19', topicId: 'english-5', text: '___ she ___ (pass) the exam in June?', type: 'choice', options: ['Did ... passed', 'Does ... pass', 'Did ... pass', 'Was ... passing'], correctAnswer: 'Did ... pass', explanation: 'Вопрос в Past Simple: Did + S + инфинитив → Did she pass.', points: 1 },
  { id: 'english-q20', topicId: 'english-5', text: 'I ___ (study) French when I was at school.', type: 'choice', options: ['studyed', 'studied', 'was study', 'studied'], correctAnswer: 'studied', explanation: 'Study → studied (согласная + y → -ied). "When I was at school" — Past Simple.', points: 1 },

  // Topic 6: Past Continuous
  { id: 'english-q21', topicId: 'english-6', text: 'At 6 p.m. yesterday, I ___ (have) dinner.', type: 'choice', options: ['had', 'was having', 'have', 'have been having'], correctAnswer: 'was having', explanation: 'Конкретный момент в прошлом (at 6 p.m. yesterday) — действие в процессе → Past Continuous.', points: 1 },
  { id: 'english-q22', topicId: 'english-6', text: 'While she ___ (read), the phone rang.', type: 'choice', options: ['read', 'was reading', 'is reading', 'reads'], correctAnswer: 'was reading', explanation: 'While + длительное действие (фон) → Past Continuous. Короткое действие (rang) — Past Simple.', points: 1 },
  { id: 'english-q23', topicId: 'english-6', text: 'I ___ (walk) home when I saw my friend.', type: 'choice', options: ['walked', 'was walking', 'walk', 'am walking'], correctAnswer: 'was walking', explanation: 'Фоновое действие (шёл) прервано другим (увидел) → Past Continuous + Past Simple.', points: 1 },
  { id: 'english-q24', topicId: 'english-6', text: 'Which sentence shows two parallel actions in the past?', type: 'choice', options: ['I cooked and he cleaned.', 'While I was cooking, he was cleaning.', 'I was cook while he cleaned.', 'I cooked while he was clean.'], correctAnswer: 'While I was cooking, he was cleaning.', explanation: 'Два параллельных длительных действия → оба в Past Continuous с while.', points: 1 },

  // Topic 7: Past Perfect
  { id: 'english-q25', topicId: 'english-7', text: 'By the time I arrived, she ___ (leave).', type: 'choice', options: ['left', 'has left', 'had left', 'was leaving'], correctAnswer: 'had left', explanation: 'Действие произошло раньше другого в прошлом → Past Perfect. She had left.', points: 1 },
  { id: 'english-q26', topicId: 'english-7', text: 'He was tired because he ___ (not/sleep) well.', type: 'choice', options: ['didn\'t sleep', 'hasn\'t slept', 'hadn\'t slept', 'wasn\'t sleeping'], correctAnswer: 'hadn\'t slept', explanation: 'Причина (не спал) произошла раньше состояния (устал) → Past Perfect.', points: 1 },
  { id: 'english-q27', topicId: 'english-7', text: 'She ___ (never/see) snow before that day.', type: 'choice', options: ['never saw', 'has never seen', 'had never seen', 'was never seeing'], correctAnswer: 'had never seen', explanation: 'Опыт до определённого момента в прошлом (before that day) → Past Perfect.', points: 1 },
  { id: 'english-q28', topicId: 'english-7', text: 'When I ___ (arrive), the train already ___ (go).', type: 'choice', options: ['arrived / went', 'arrived / had gone', 'had arrived / went', 'arrived / has gone'], correctAnswer: 'arrived / had gone', explanation: 'Поезд уехал (первое действие) → Past Perfect. Я приехал (второе) → Past Simple.', points: 1 },

  // Topic 8: Past Perfect Continuous
  { id: 'english-q29', topicId: 'english-8', text: 'She ___ (wait) for an hour when the bus finally came.', type: 'choice', options: ['waited', 'was waiting', 'had been waiting', 'has been waiting'], correctAnswer: 'had been waiting', explanation: 'Длительное действие до другого в прошлом (for an hour + when...came) → Past Perfect Continuous.', points: 1 },
  { id: 'english-q30', topicId: 'english-8', text: 'His eyes were red. He ___.', type: 'choice', options: ['cried', 'has been crying', 'had been crying', 'was crying'], correctAnswer: 'had been crying', explanation: 'Видимый результат (красные глаза) от длительного действия до момента в прошлом → Past Perfect Continuous.', points: 1 },
  { id: 'english-q31', topicId: 'english-8', text: 'They ___ (live) in London for 10 years before they moved to Paris.', type: 'choice', options: ['lived', 'have lived', 'had been living', 'were living'], correctAnswer: 'had been living', explanation: 'Длительное действие до другого в прошлом (for 10 years + before they moved) → Past Perfect Continuous.', points: 1 },
  { id: 'english-q32', topicId: 'english-8', text: 'Which is correct with a stative verb in Past Perfect?', type: 'choice', options: ['I had been knowing the answer.', 'I had known the answer.', 'I had been known the answer.', 'I have been knowing the answer.'], correctAnswer: 'I had known the answer.', explanation: 'Know — stative verb, не используется в Continuous. Правильно: had known.', points: 1 },

  // Topic 9: Future Simple
  { id: 'english-q33', topicId: 'english-9', text: 'I\'m hungry. I ___ (order) a pizza.', type: 'choice', options: ['order', 'am going to order', 'will order', 'am ordering'], correctAnswer: 'will order', explanation: 'Спонтанное решение (только что решил) → Future Simple: will order.', points: 1 },
  { id: 'english-q34', topicId: 'english-9', text: 'I think she ___ (pass) the exam.', type: 'choice', options: ['passes', 'is passing', 'will pass', 'is going to pass'], correctAnswer: 'will pass', explanation: 'Предсказание на основе мнения (I think) → will pass.', points: 1 },
  { id: 'english-q35', topicId: 'english-9', text: 'Look at the clouds! It ___ (rain).', type: 'choice', options: ['will rain', 'rains', 'is going to rain', 'is raining'], correctAnswer: 'is going to rain', explanation: 'Предсказание на основе доказательств (тучи) → going to rain.', points: 1 },
  { id: 'english-q36', topicId: 'english-9', text: 'I promise I ___ (help) you.', type: 'choice', options: ['help', 'will help', 'am helping', 'am going to help'], correctAnswer: 'will help', explanation: 'Обещание → Future Simple: will help.', points: 1 },

  // Topic 10: Future Continuous
  { id: 'english-q37', topicId: 'english-10', text: 'At 8 p.m. tomorrow, I ___ (watch) a film.', type: 'choice', options: ['watch', 'will watch', 'will be watching', 'am watching'], correctAnswer: 'will be watching', explanation: 'Действие в процессе в конкретный момент в будущем → Future Continuous.', points: 1 },
  { id: 'english-q38', topicId: 'english-10', text: 'This time next week, she ___ (lie) on a beach.', type: 'choice', options: ['lies', 'will lie', 'will be lying', 'is lying'], correctAnswer: 'will be lying', explanation: '"This time next week" — конкретный момент в будущем → Future Continuous. Lie → lying.', points: 1 },
  { id: 'english-q39', topicId: 'english-10', text: '___ you ___ (use) the car tonight?', type: 'choice', options: ['Will ... use', 'Are ... going to use', 'Will ... be using', 'Do ... use'], correctAnswer: 'Will ... be using', explanation: 'Вежливый вопрос о планах → Future Continuous: Will you be using.', points: 1 },
  { id: 'english-q40', topicId: 'english-10', text: 'Don\'t call at 9. I ___ (work).', type: 'choice', options: ['work', 'will work', 'will be working', 'am working'], correctAnswer: 'will be working', explanation: 'Действие будет в процессе в определённый момент → Future Continuous.', points: 1 },

  // Topic 11: Future Perfect
  { id: 'english-q41', topicId: 'english-11', text: 'By 2026, I ___ (graduate) from university.', type: 'choice', options: ['graduate', 'will graduate', 'will have graduated', 'am graduating'], correctAnswer: 'will have graduated', explanation: 'By 2026 — действие завершится до этого момента → Future Perfect.', points: 1 },
  { id: 'english-q42', topicId: 'english-11', text: 'By the time you arrive, I ___ (cook) dinner.', type: 'choice', options: ['cook', 'will cook', 'will have cooked', 'am cooking'], correctAnswer: 'will have cooked', explanation: 'Действие завершится до другого в будущем → Future Perfect.', points: 1 },
  { id: 'english-q43', topicId: 'english-11', text: 'She ___ (finish) the report by Friday.', type: 'choice', options: ['finishes', 'will finish', 'will have finished', 'is finishing'], correctAnswer: 'will have finished', explanation: 'By Friday — к определённому сроку → Future Perfect.', points: 1 },
  { id: 'english-q44', topicId: 'english-11', text: 'By next month, they ___ (live) here for 5 years.', type: 'choice', options: ['live', 'will live', 'will have lived', 'have lived'], correctAnswer: 'will have lived', explanation: 'К моменту в будущем (by next month) действие будет длиться 5 лет → Future Perfect.', points: 1 },

  // Topic 12: Passive Voice
  { id: 'english-q45', topicId: 'english-12', text: 'The letter ___ (send) yesterday.', type: 'choice', options: ['sent', 'was sent', 'has sent', 'is sent'], correctAnswer: 'was sent', explanation: 'Past Simple Passive: was/were + V3. Yesterday → Past Simple.', points: 1 },
  { id: 'english-q46', topicId: 'english-12', text: 'This house ___ (build) in 1990.', type: 'choice', options: ['was built', 'has built', 'is built', 'built'], correctAnswer: 'was built', explanation: 'Past Simple Passive: was + V3 (built). In 1990 → Past Simple.', points: 1 },
  { id: 'english-q47', topicId: 'english-12', text: 'The road ___ (repair) at the moment.', type: 'choice', options: ['is repaired', 'is being repaired', 'has been repaired', 'was being repaired'], correctAnswer: 'is being repaired', explanation: 'Present Continuous Passive: am/is/are being + V3. "At the moment" → Continuous.', points: 1 },
  { id: 'english-q48', topicId: 'english-12', text: 'The project ___ (finish) by next week.', type: 'choice', options: ['is finished', 'will finish', 'will be finished', 'has been finished'], correctAnswer: 'will be finished', explanation: 'Future Simple Passive: will be + V3. "By next week" → будущее.', points: 1 },

  // Topic 13: Conditionals (Zero & First)
  { id: 'english-q49', topicId: 'english-13', text: 'If you ___ (heat) water to 100°C, it boils.', type: 'choice', options: ['will heat', 'heats', 'heat', 'heated'], correctAnswer: 'heat', explanation: 'Zero Conditional: if + Present Simple, Present Simple. You → heat.', points: 1 },
  { id: 'english-q50', topicId: 'english-13', text: 'If it ___ (rain) tomorrow, I will stay home.', type: 'choice', options: ['rains', 'will rain', 'rained', 'is raining'], correctAnswer: 'rains', explanation: 'First Conditional: if + Present Simple (не will!).', points: 1 },
  { id: 'english-q51', topicId: 'english-13', text: 'If she ___ (study) hard, she will pass the exam.', type: 'choice', options: ['studies', 'will study', 'studied', 'is studying'], correctAnswer: 'studies', explanation: 'First Conditional: if + Present Simple. She → studies (-es).', points: 1 },
  { id: 'english-q52', topicId: 'english-13', text: 'If you don\'t hurry, you ___ the bus.', type: 'choice', options: ['miss', 'missed', 'will miss', 'are missing'], correctAnswer: 'will miss', explanation: 'First Conditional: if + Present Simple, will + V.', points: 1 },

  // Topic 14: Conditionals (Second & Third)
  { id: 'english-q53', topicId: 'english-14', text: 'If I ___ (have) a million dollars, I would travel the world.', type: 'choice', options: ['have', 'had', 'would have', 'will have'], correctAnswer: 'had', explanation: 'Second Conditional: if + Past Simple. Have → had.', points: 1 },
  { id: 'english-q54', topicId: 'english-14', text: 'If she ___ (leave) earlier, she wouldn\'t have missed the train.', type: 'choice', options: ['left', 'has left', 'had left', 'leaves'], correctAnswer: 'had left', explanation: 'Third Conditional: if + Past Perfect (had + V3).', points: 1 },
  { id: 'english-q55', topicId: 'english-14', text: 'If I ___ (be) you, I would accept the offer.', type: 'choice', options: ['am', 'was', 'were', 'will be'], correctAnswer: 'were', explanation: 'Second Conditional: формальный вариант — were для всех лиц.', points: 1 },
  { id: 'english-q56', topicId: 'english-14', text: 'If they ___ (know), they would have helped.', type: 'choice', options: ['knew', 'know', 'had known', 'have known'], correctAnswer: 'had known', explanation: 'Third Conditional: if + Past Perfect (had + V3).', points: 1 },

  // Topic 15: Modal verbs — can, could, may, might
  { id: 'english-q57', topicId: 'english-15', text: 'She ___ speak three languages fluently.', type: 'choice', options: ['can', 'could', 'may', 'might'], correctAnswer: 'can', explanation: 'Способность в настоящем → can.', points: 1 },
  { id: 'english-q58', topicId: 'english-15', text: '___ you help me, please?', type: 'choice', options: ['Can', 'Could', 'May', 'Must'], correctAnswer: 'Could', explanation: 'Вежливая просьба → Could.', points: 1 },
  { id: 'english-q59', topicId: 'english-15', text: 'He ___ be at home. I\'m not sure.', type: 'choice', options: ['must', 'can\'t', 'may', 'should'], correctAnswer: 'may', explanation: 'Возможность ~50% → may.', points: 1 },
  { id: 'english-q60', topicId: 'english-15', text: 'She ___ swim when she was five.', type: 'choice', options: ['can', 'could', 'may', 'might'], correctAnswer: 'could', explanation: 'Способность в прошлом → could.', points: 1 },

  // Topic 16: Modal verbs — must, have to, should
  { id: 'english-q61', topicId: 'english-16', text: 'You ___ wear a seatbelt when driving.', type: 'choice', options: ['must', 'should', 'can', 'may'], correctAnswer: 'must', explanation: 'Обязательство (закон) → must.', points: 1 },
  { id: 'english-q62', topicId: 'english-16', text: 'You ___ smoke in the hospital. It\'s forbidden.', type: 'choice', options: ['don\'t have to', 'mustn\'t', 'shouldn\'t', 'can\'t'], correctAnswer: 'mustn\'t', explanation: 'Запрет (forbidden) → mustn\'t.', points: 1 },
  { id: 'english-q63', topicId: 'english-16', text: 'You ___ come to the meeting. It\'s optional.', type: 'choice', options: ['mustn\'t', 'shouldn\'t', 'don\'t have to', 'can\'t'], correctAnswer: 'don\'t have to', explanation: 'Не обязательно (optional) → don\'t have to.', points: 1 },
  { id: 'english-q64', topicId: 'english-16', text: 'She\'s not here. She ___ be at work.', type: 'choice', options: ['should', 'must', 'may', 'can\'t'], correctAnswer: 'must', explanation: 'Уверенный вывод (~95%) → must.', points: 1 },

  // Topic 17: Articles
  { id: 'english-q65', topicId: 'english-17', text: 'I saw ___ interesting film yesterday.', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: 'an', explanation: 'Первое упоминание + гласный звук (interesting) → an.', points: 1 },
  { id: 'english-q66', topicId: 'english-17', text: '___ sun rises in the east.', type: 'choice', options: ['A', 'An', 'The', '—'], correctAnswer: 'The', explanation: 'Единственный в своём роде → the sun.', points: 1 },
  { id: 'english-q67', topicId: 'english-17', text: 'She is ___ honest person.', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: 'an', explanation: 'Honest — нёмая h, звук начинается с гласного → an.', points: 1 },
  { id: 'english-q68', topicId: 'english-17', text: 'I go to ___ school every day.', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: '—', explanation: 'Go to school (учиться) — без артикля.', points: 1 },

  // Topic 18: Prepositions of time
  { id: 'english-q69', topicId: 'english-18', text: 'I wake up ___ 7 o\'clock every morning.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', explanation: 'Точное время → at.', points: 1 },
  { id: 'english-q70', topicId: 'english-18', text: 'She was born ___ July.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'in', explanation: 'Месяц → in.', points: 1 },
  { id: 'english-q71', topicId: 'english-18', text: 'The meeting is ___ Monday.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', explanation: 'День недели → on.', points: 1 },
  { id: 'english-q72', topicId: 'english-18', text: 'I have lived here ___ 2010.', type: 'choice', options: ['for', 'since', 'from', 'by'], correctAnswer: 'since', explanation: 'Начальная точка (2010) → since.', points: 1 },

  // Topic 19: Prepositions of place
  { id: 'english-q73', topicId: 'english-19', text: 'The keys are ___ the bag.', type: 'choice', options: ['on', 'in', 'at', 'by'], correctAnswer: 'in', explanation: 'Внутри замкнутого пространства → in.', points: 1 },
  { id: 'english-q74', topicId: 'english-19', text: 'The book is ___ the table.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', explanation: 'На поверхности → on.', points: 1 },
  { id: 'english-q75', topicId: 'english-19', text: 'The cat is ___ the bed.', type: 'choice', options: ['under', 'in', 'on', 'at'], correctAnswer: 'under', explanation: 'Под предметом → under.', points: 1 },
  { id: 'english-q76', topicId: 'english-19', text: 'She lives ___ London.', type: 'choice', options: ['on', 'at', 'in', 'by'], correctAnswer: 'in', explanation: 'Город → in.', points: 1 },

  // Topic 20: Word formation — nouns
  { id: 'english-q77', topicId: 'english-20', text: 'The ___ (educate) system needs reform.', type: 'choice', options: ['educate', 'education', 'educational', 'educating'], correctAnswer: 'education', explanation: 'После артикля the перед существительным system → существительное education.', points: 1 },
  { id: 'english-q78', topicId: 'english-20', text: 'His ___ (decide) surprised everyone.', type: 'choice', options: ['decide', 'decision', 'decisive', 'deciding'], correctAnswer: 'decision', explanation: 'После притяжательного местоимения his → существительное decision.', points: 1 },
  { id: 'english-q79', topicId: 'english-20', text: 'The ___ (develop) of the city is impressive.', type: 'choice', options: ['develop', 'development', 'developer', 'developing'], correctAnswer: 'development', explanation: 'После артикля the → существительное development.', points: 1 },
  { id: 'english-q80', topicId: 'english-20', text: 'She felt great ___ (happy) when she heard the news.', type: 'choice', options: ['happy', 'happiness', 'happily', 'unhappy'], correctAnswer: 'happiness', explanation: 'После прилагательного great → существительное happiness.', points: 1 },

  // Topic 21: Word formation — adjectives
  { id: 'english-q81', topicId: 'english-21', text: 'The view from the mountain was ___ (beauty).', type: 'choice', options: ['beauty', 'beautiful', 'beautifully', 'beautify'], correctAnswer: 'beautiful', explanation: 'После глагола was (be) → прилагательное beautiful.', points: 1 },
  { id: 'english-q82', topicId: 'english-21', text: 'He made a ___ (care) mistake.', type: 'choice', options: ['care', 'careful', 'careless', 'carefully'], correctAnswer: 'careless', explanation: 'Перед существительным mistake → прилагательное. Ошибка → carelessness → careless (беспечная).', points: 1 },
  { id: 'english-q83', topicId: 'english-21', text: 'It was a ___ (danger) situation.', type: 'choice', options: ['danger', 'dangerous', 'dangerously', 'endanger'], correctAnswer: 'dangerous', explanation: 'Перед существительным situation → прилагательное dangerous.', points: 1 },
  { id: 'english-q84', topicId: 'english-21', text: 'The weather is very ___ (cloud) today.', type: 'choice', options: ['cloud', 'clouds', 'cloudy', 'clouding'], correctAnswer: 'cloudy', explanation: 'После is + very → прилагательное cloudy.', points: 1 },

  // Topic 22: Word formation — verbs
  { id: 'english-q85', topicId: 'english-22', text: 'They want to ___ (modern) the school system.', type: 'choice', options: ['modern', 'modernize', 'modernization', 'modernly'], correctAnswer: 'modernize', explanation: 'После to (инфинитив) → глагол modernize.', points: 1 },
  { id: 'english-q86', topicId: 'english-22', text: 'The teacher tried to ___ (simple) the explanation.', type: 'choice', options: ['simple', 'simplify', 'simplification', 'simply'], correctAnswer: 'simplify', explanation: 'После to (инфинитив) → глагол simplify.', points: 1 },
  { id: 'english-q87', topicId: 'english-22', text: 'Please ___ (write) the essay using a pen.', type: 'choice', options: ['write', 'rewrite', 'rewriting', 'rewritten'], correctAnswer: 'rewrite', explanation: 'Префикс re- (снова) + write → rewrite.', points: 1 },
  { id: 'english-q88', topicId: 'english-22', text: 'Don\'t ___ (understand) me. I\'m being clear.', type: 'choice', options: ['understand', 'misunderstand', 'misunderstanding', 'understood'], correctAnswer: 'misunderstand', explanation: 'Префикс mis- (неправильно) + understand → misunderstand.', points: 1 },

  // Topic 23: Phrasal verbs
  { id: 'english-q89', topicId: 'english-23', text: 'Can you ___ the children while I\'m away?', type: 'choice', options: ['look for', 'look after', 'look at', 'look forward to'], correctAnswer: 'look after', explanation: 'Look after = присматривать за кем-то.', points: 1 },
  { id: 'english-q90', topicId: 'english-23', text: 'I\'m ___ meeting you next week!', type: 'choice', options: ['looking for', 'looking after', 'looking at', 'looking forward to'], correctAnswer: 'looking forward to', explanation: 'Look forward to = с нетерпением ждать.', points: 1 },
  { id: 'english-q91', topicId: 'english-23', text: 'He ___ the lights before leaving the room.', type: 'choice', options: ['turned on', 'turned off', 'turned up', 'turned down'], correctAnswer: 'turned off', explanation: 'Turn off = выключить. Перед выходом — выключает свет.', points: 1 },
  { id: 'english-q92', topicId: 'english-23', text: 'We\'ve ___ of milk. Can you buy some?', type: 'choice', options: ['run out', 'run away', 'run into', 'run over'], correctAnswer: 'run out', explanation: 'Run out of = закончиться. Milk ran out = молоко закончилось.', points: 1 },

  // Topic 24: Collocations
  { id: 'english-q93', topicId: 'english-24', text: 'I always ___ a mistake in my essays.', type: 'choice', options: ['do', 'make', 'take', 'have'], correctAnswer: 'make', explanation: 'Make a mistake — устойчивое словосочетание.', points: 1 },
  { id: 'english-q94', topicId: 'english-24', text: 'She ___ a lot of progress in English.', type: 'choice', options: ['did', 'made', 'took', 'had'], correctAnswer: 'made', explanation: 'Make progress — устойчивое словосочетание.', points: 1 },
  { id: 'english-q95', topicId: 'english-24', text: 'There was a ___ rain last night.', type: 'choice', options: ['strong', 'big', 'heavy', 'hard'], correctAnswer: 'heavy', explanation: 'Heavy rain — устойчивое словосочетание (сильный дождь).', points: 1 },
  { id: 'english-q96', topicId: 'english-24', text: 'Let\'s ___ a photo together!', type: 'choice', options: ['do', 'make', 'take', 'have'], correctAnswer: 'take', explanation: 'Take a photo — устойчивое словосочетание.', points: 1 },

  // Topic 25: Gerund and Infinitive
  { id: 'english-q97', topicId: 'english-25', text: 'I enjoy ___ books in the evening.', type: 'choice', options: ['read', 'to read', 'reading', 'reads'], correctAnswer: 'reading', explanation: 'Enjoy + герундий (-ing).', points: 1 },
  { id: 'english-q98', topicId: 'english-25', text: 'She decided ___ to the party.', type: 'choice', options: ['go', 'to go', 'going', 'goes'], correctAnswer: 'to go', explanation: 'Decide + инфинитив (to + V).', points: 1 },
  { id: 'english-q99', topicId: 'english-25', text: 'I\'m interested ___ learning French.', type: 'choice', options: ['on', 'to', 'in', 'at'], correctAnswer: 'in', explanation: 'Interested in + герундий (после предлога — всегда -ing).', points: 1 },
  { id: 'english-q100', topicId: 'english-25', text: 'He avoided ___ to her.', type: 'choice', options: ['talk', 'to talk', 'talking', 'talked'], correctAnswer: 'talking', explanation: 'Avoid + герундий (-ing).', points: 1 },

  // Topic 26: Reported Speech
  { id: 'english-q101', topicId: 'english-26', text: 'He said, "I work here." → He said that he ___ there.', type: 'choice', options: ['works', 'worked', 'has worked', 'had worked'], correctAnswer: 'worked', explanation: 'Present Simple → Past Simple при сдвиге времён.', points: 1 },
  { id: 'english-q102', topicId: 'english-26', text: 'She said, "I am reading." → She said that she ___.', type: 'choice', options: ['is reading', 'was reading', 'has been reading', 'reads'], correctAnswer: 'was reading', explanation: 'Present Continuous → Past Continuous при сдвиге.', points: 1 },
  { id: 'english-q103', topicId: 'english-26', text: 'He asked, "Where ___ you live?" → He asked where I lived.', type: 'choice', options: ['do', 'did', 'are', 'is'], correctAnswer: 'do', explanation: 'В прямой речи вопросительная форма: Where do you live?', points: 1 },
  { id: 'english-q104', topicId: 'english-26', text: 'She said, "Don\'t go!" → She told me ___.', type: 'choice', options: ['don\'t go', 'not to go', 'not go', 'to not go'], correctAnswer: 'not to go', explanation: 'Приказ/запрет: tell + S + not to + V.', points: 1 },

  // Topic 27: Relative Clauses
  { id: 'english-q105', topicId: 'english-27', text: 'The man ___ lives next door is a doctor.', type: 'choice', options: ['which', 'who', 'whose', 'where'], correctAnswer: 'who', explanation: 'Для лица (man) → who.', points: 1 },
  { id: 'english-q106', topicId: 'english-27', text: 'The book ___ I read was amazing.', type: 'choice', options: ['who', 'which', 'whose', 'where'], correctAnswer: 'which', explanation: 'Для предмета (book) → which. Также допустимо that.', points: 1 },
  { id: 'english-q107', topicId: 'english-27', text: 'My sister, ___ lives in London, is a teacher.', type: 'choice', options: ['that', 'which', 'who', 'whose'], correctAnswer: 'who', explanation: 'Non-defining clause (с запятыми) для лица → who. That нельзя.', points: 1 },
  { id: 'english-q108', topicId: 'english-27', text: 'This is the town ___ I was born.', type: 'choice', options: ['which', 'who', 'where', 'when'], correctAnswer: 'where', explanation: 'Для места (town) → where.', points: 1 },

  // Topic 28: Comparative and Superlative
  { id: 'english-q109', topicId: 'english-28', text: 'She is ___ than her sister.', type: 'choice', options: ['tall', 'taller', 'tallest', 'more tall'], correctAnswer: 'taller', explanation: 'Короткое прилагательное (tall) → сравнительная степень с -er.', points: 1 },
  { id: 'english-q110', topicId: 'english-28', text: 'This is ___ book I\'ve ever read.', type: 'choice', options: ['good', 'better', 'the best', 'the most good'], correctAnswer: 'the best', explanation: 'Good — неправильное: превосходная степень → the best.', points: 1 },
  { id: 'english-q111', topicId: 'english-28', text: 'She is ___ student in the class.', type: 'choice', options: ['the most smart', 'the smarter', 'the smartest', 'smartest'], correctAnswer: 'the smartest', explanation: 'Превосходная степень: the + Adj-est. Smart → smartest.', points: 1 },
  { id: 'english-q112', topicId: 'english-28', text: 'This film is ___ interesting than that one.', type: 'choice', options: ['more', 'most', 'much', 'very'], correctAnswer: 'more', explanation: 'Длинное прилагательное (interesting) → more + Adj.', points: 1 },

  // Topic 29: Countable and Uncountable nouns
  { id: 'english-q113', topicId: 'english-29', text: 'There isn\'t ___ milk in the fridge.', type: 'choice', options: ['many', 'much', 'a few', 'few'], correctAnswer: 'much', explanation: 'Milk — неисчисляемое → much.', points: 1 },
  { id: 'english-q114', topicId: 'english-29', text: 'I have ___ friends in this city.', type: 'choice', options: ['much', 'little', 'a few', 'a little'], correctAnswer: 'a few', explanation: 'Friends — исчисляемое мн.ч. → a few (несколько).', points: 1 },
  { id: 'english-q115', topicId: 'english-29', text: 'Can you give me some ___?', type: 'choice', options: ['advices', 'advice', 'an advice', 'advices'], correctAnswer: 'advice', explanation: 'Advice — неисчисляемое, без a/an, без мн. числа.', points: 1 },
  { id: 'english-q116', topicId: 'english-29', text: 'How ___ furniture do you have in your room?', type: 'choice', options: ['many', 'much', 'a few', 'few'], correctAnswer: 'much', explanation: 'Furniture — неисчисляемое → much.', points: 1 },

  // Topic 30: Quantifiers
  { id: 'english-q117', topicId: 'english-30', text: 'I have ___ time. Let\'s go for a walk.', type: 'choice', options: ['a few', 'few', 'a little', 'little'], correctAnswer: 'a little', explanation: 'Time — неисчисляемое. "Let\'s go" — есть время (положительно) → a little.', points: 1 },
  { id: 'english-q118', topicId: 'english-30', text: 'There are ___ students in the classroom today.', type: 'choice', options: ['much', 'little', 'many', 'a little'], correctAnswer: 'many', explanation: 'Students — исчисляемое мн.ч. → many.', points: 1 },
  { id: 'english-q119', topicId: 'english-30', text: 'Do you have ___ questions?', type: 'choice', options: ['some', 'any', 'much', 'little'], correctAnswer: 'any', explanation: 'В вопросах → any.', points: 1 },
  { id: 'english-q120', topicId: 'english-30', text: 'She has ___ money. She can buy anything.', type: 'choice', options: ['a lot of', 'many', 'few', 'a few'], correctAnswer: 'a lot of', explanation: 'Money — неисчисляемое. Много → a lot of.', points: 1 },

  // Topic 31: Pronouns
  { id: 'english-q121', topicId: 'english-31', text: 'Tom and ___ went to the cinema.', type: 'choice', options: ['me', 'I', 'my', 'mine'], correctAnswer: 'I', explanation: 'Подлежащее → I. Tom and I went...', points: 1 },
  { id: 'english-q122', topicId: 'english-31', text: 'This book is ___.', type: 'choice', options: ['my', 'mine', 'me', 'I'], correctAnswer: 'mine', explanation: 'Притяжательное местоимение (самостоятельное) → mine.', points: 1 },
  { id: 'english-q123', topicId: 'english-31', text: 'She hurt ___ while cooking.', type: 'choice', options: ['she', 'her', 'herself', 'hers'], correctAnswer: 'herself', explanation: 'Возвратное местоимение: she → herself.', points: 1 },
  { id: 'english-q124', topicId: 'english-31', text: 'Give the book to ___.', type: 'choice', options: ['I', 'my', 'mine', 'me'], correctAnswer: 'me', explanation: 'После предлога to → объектная форма me.', points: 1 },

  // Topic 32: Conjunctions
  { id: 'english-q125', topicId: 'english-32', text: 'I stayed home ___ it was raining.', type: 'choice', options: ['although', 'because', 'but', 'so'], correctAnswer: 'because', explanation: 'Причина → because.', points: 1 },
  { id: 'english-q126', topicId: 'english-32', text: '___ it was cold, we went outside.', type: 'choice', options: ['Because', 'Although', 'So', 'But'], correctAnswer: 'Although', explanation: 'Уступка → although (хотя).', points: 1 },
  { id: 'english-q127', topicId: 'english-32', text: 'You can have ___ tea ___ coffee.', type: 'choice', options: ['both ... or', 'either ... or', 'neither ... and', 'not only ... but'], correctAnswer: 'either ... or', explanation: 'Выбор из двух → either ... or.', points: 1 },
  { id: 'english-q128', topicId: 'english-32', text: 'Don\'t go ___ you want to.', type: 'choice', options: ['if', 'unless', 'although', 'because'], correctAnswer: 'unless', explanation: 'Unless = если не.', points: 1 },

  // Topic 33: Question tags
  { id: 'english-q129', topicId: 'english-33', text: 'She is a student, ___?', type: 'choice', options: ['is she', 'isn\'t she', 'doesn\'t she', 'does she'], correctAnswer: 'isn\'t she', explanation: 'Утверждение (is) → отрицательный тег (isn\'t she).', points: 1 },
  { id: 'english-q130', topicId: 'english-33', text: 'He doesn\'t like coffee, ___?', type: 'choice', options: ['doesn\'t he', 'does he', 'isn\'t he', 'is he'], correctAnswer: 'does he', explanation: 'Отрицание (doesn\'t) → утвердительный тег (does he).', points: 1 },
  { id: 'english-q131', topicId: 'english-33', text: 'Let\'s go, ___?', type: 'choice', options: ['don\'t we', 'do we', 'shall we', 'will we'], correctAnswer: 'shall we', explanation: 'Let\'s → shall we?', points: 1 },
  { id: 'english-q132', topicId: 'english-33', text: 'Nobody came, ___?', type: 'choice', options: ['didn\'t they', 'did they', 'wasn\'t it', 'was it'], correctAnswer: 'did they', explanation: 'Nobody — отрицание → утвердительный тег. Местоимение для nobody → they.', points: 1 },

  // Topic 34: Indirect questions
  { id: 'english-q133', topicId: 'english-34', text: 'Could you tell me where ___?', type: 'choice', options: ['does he live', 'he lives', 'he does live', 'is he living'], correctAnswer: 'he lives', explanation: 'В косвенном вопросе — порядок слов как в утверждении (S + V).', points: 1 },
  { id: 'english-q134', topicId: 'english-34', text: 'Do you know what her name ___?', type: 'choice', options: ['is', 'does', 'does be', 'is it'], correctAnswer: 'is', explanation: 'В косвенном вопросе — S + V без инверсии.', points: 1 },
  { id: 'english-q135', topicId: 'english-34', text: 'I wonder ___ she is coming to the party.', type: 'choice', options: ['that', 'if', 'what', 'how'], correctAnswer: 'if', explanation: 'Yes/No вопрос в косвенной форме → if/whether.', points: 1 },
  { id: 'english-q136', topicId: 'english-34', text: 'Can you explain ___ this word means?', type: 'choice', options: ['what does', 'what', 'how does', 'that'], correctAnswer: 'what', explanation: 'Косвенный вопрос: Can you explain what this word means (S + V).', points: 1 },

  // Topic 35: Used to / Would
  { id: 'english-q137', topicId: 'english-35', text: 'I ___ play football every day when I was young.', type: 'choice', options: ['used to', 'am used to', 'use to', 'was used to'], correctAnswer: 'used to', explanation: 'Привычка в прошлом → used to + V.', points: 1 },
  { id: 'english-q138', topicId: 'english-35', text: 'She ___ live in Paris, but now she lives in London.', type: 'choice', options: ['was used to', 'used to', 'would', 'is used to'], correctAnswer: 'used to', explanation: 'Состояние в прошлом (жить в Париже) → used to. Нельзя would для состояний.', points: 1 },
  { id: 'english-q139', topicId: 'english-35', text: 'He is ___ getting up early. He does it every day.', type: 'choice', options: ['used to', 'use to', 'using to', 'used'], correctAnswer: 'used to', explanation: 'Be used to + V-ing = быть привыкшим к чему-то.', points: 1 },
  { id: 'english-q140', topicId: 'english-35', text: 'Every summer, we ___ go to the seaside.', type: 'choice', options: ['used to', 'were used to', 'would', 'are used to'], correctAnswer: 'would', explanation: 'Would для повторяющихся действий в прошлом (every summer).', points: 1 },

  // Topic 36: Wish clauses
  { id: 'english-q141', topicId: 'english-36', text: 'I wish I ___ more free time.', type: 'choice', options: ['have', 'had', 'would have', 'having'], correctAnswer: 'had', explanation: 'Wish + Past Simple — о настоящем (хочу, но нет).', points: 1 },
  { id: 'english-q142', topicId: 'english-36', text: 'She wishes she ___ harder for the exam.', type: 'choice', options: ['studied', 'has studied', 'had studied', 'would study'], correctAnswer: 'had studied', explanation: 'Wish + Past Perfect — сожаление о прошлом.', points: 1 },
  { id: 'english-q143', topicId: 'english-36', text: 'I wish you ___ making that noise.', type: 'choice', options: ['stop', 'stopped', 'would stop', 'had stopped'], correctAnswer: 'would stop', explanation: 'Wish + would — желание, чтобы другой человек изменил поведение.', points: 1 },
  { id: 'english-q144', topicId: 'english-36', text: 'I wish I ___ swim.', type: 'choice', options: ['can', 'could', 'may', 'will'], correctAnswer: 'could', explanation: 'Wish + could — желание иметь способность.', points: 1 },

  // Topic 37: So / Such / Enough / Too
  { id: 'english-q145', topicId: 'english-37', text: 'It was ___ a beautiful day!', type: 'choice', options: ['so', 'such', 'too', 'enough'], correctAnswer: 'such', explanation: 'Such + (a/an) + Adj + N → such a beautiful day.', points: 1 },
  { id: 'english-q146', topicId: 'english-37', text: 'The exam was ___ difficult that many students failed.', type: 'choice', options: ['such', 'too', 'enough', 'so'], correctAnswer: 'so', explanation: 'So + Adj/Adv → so difficult.', points: 1 },
  { id: 'english-q147', topicId: 'english-37', text: 'He is not old ___ to drive.', type: 'choice', options: ['too', 'so', 'enough', 'such'], correctAnswer: 'enough', explanation: 'Adj + enough → old enough.', points: 1 },
  { id: 'english-q148', topicId: 'english-37', text: 'It\'s ___ cold to go outside.', type: 'choice', options: ['so', 'such', 'too', 'enough'], correctAnswer: 'too', explanation: 'Too + Adj — слишком холодно.', points: 1 },

  // Topic 38: Essay writing — structure
  { id: 'english-q149', topicId: 'english-38', text: 'How many paragraphs should an EGE essay have?', type: 'choice', options: ['3', '4', '5', '6'], correctAnswer: '5', explanation: 'Стандартная структура эссе на ЕГЭ: 5 абзацев.', points: 1 },
  { id: 'english-q150', topicId: 'english-38', text: 'What should the first paragraph of an essay contain?', type: 'choice', options: ['Your opinion', 'Restatement of the topic', 'Arguments', 'Conclusion'], correctAnswer: 'Restatement of the topic', explanation: 'Введение — переформулировка темы (paraphrasing).', points: 1 },
  { id: 'english-q151', topicId: 'english-38', text: 'What is the recommended word count for an EGE essay?', type: 'choice', options: ['100-150 words', '150-200 words', '200-250 words', '250-300 words'], correctAnswer: '200-250 words', explanation: 'Рекомендуемый объём эссе на ЕГЭ: 200–250 слов.', points: 1 },
  { id: 'english-q152', topicId: 'english-38', text: 'Which phrase is best for an essay conclusion?', type: 'choice', options: ['In my opinion...', 'For example...', 'In conclusion...', 'Some people think...'], correctAnswer: 'In conclusion...', explanation: 'In conclusion — фраза для заключения.', points: 1 },

  // Topic 39: Essay writing — arguments
  { id: 'english-q153', topicId: 'english-39', text: 'A strong argument consists of:', type: 'choice', options: ['Opinion only', 'Statement + example', 'Statement + explanation + example', 'Question + answer'], correctAnswer: 'Statement + explanation + example', explanation: 'Сильный аргумент: утверждение + объяснение + пример.', points: 1 },
  { id: 'english-q154', topicId: 'english-39', text: 'Which phrase introduces an additional argument?', type: 'choice', options: ['However,', 'For example,', 'Furthermore,', 'In conclusion,'], correctAnswer: 'Furthermore,', explanation: 'Furthermore = более того, к тому же — дополнительный аргумент.', points: 1 },
  { id: 'english-q155', topicId: 'english-39', text: 'Which phrase introduces a contrast?', type: 'choice', options: ['Moreover,', 'For instance,', 'However,', 'Therefore,'], correctAnswer: 'However,', explanation: 'However = однако — вводит контрастный аргумент.', points: 1 },
  { id: 'english-q156', topicId: 'english-39', text: 'Which is a weak argument?', type: 'choice', options: ['Regular exercise improves health and reduces stress.', 'Sport is good.', 'Physical activity strengthens the immune system.', 'Studies show that exercise boosts mental health.'], correctAnswer: 'Sport is good.', explanation: 'Слишком общее, без объяснения и примера — слабый аргумент.', points: 1 },

  // Topic 40: Letter writing — personal
  { id: 'english-q157', topicId: 'english-40', text: 'How many questions should you ask in a personal letter?', type: 'choice', options: ['1', '2', '3', '4'], correctAnswer: '3', explanation: 'В личном письме на ЕГЭ нужно задать 3 вопроса другу.', points: 1 },
  { id: 'english-q158', topicId: 'english-40', text: 'Which greeting is appropriate for a personal letter?', type: 'choice', options: ['Dear Sir/Madam,', 'Dear Tom,', 'To whom it may concern,', 'Dear Mr. Smith,'], correctAnswer: 'Dear Tom,', explanation: 'В личном письме — неформальное обращение: Dear Tom,', points: 1 },
  { id: 'english-q159', topicId: 'english-40', text: 'Which sign-off is appropriate for a personal letter?', type: 'choice', options: ['Yours faithfully,', 'Best wishes,', 'Yours sincerely,', 'Respectfully,'], correctAnswer: 'Best wishes,', explanation: 'Best wishes — неформальная концовка для личного письма.', points: 1 },
  { id: 'english-q160', topicId: 'english-40', text: 'What should be the FIRST part of a personal letter after the greeting?', type: 'choice', options: ['Questions to your friend', 'Thanks for the letter / apology', 'Your main news', 'A joke'], correctAnswer: 'Thanks for the letter / apology', explanation: 'Сначала благодарность за письмо или извинение за задержку.', points: 1 },

  // Topic 41: Letter writing — formal
  { id: 'english-q161', topicId: 'english-41', text: 'Which greeting is appropriate for a formal letter when you don\'t know the name?', type: 'choice', options: ['Dear Tom,', 'Hi!', 'Dear Sir/Madam,', 'Hello,'], correctAnswer: 'Dear Sir/Madam,', explanation: 'Dear Sir/Madam — формальное обращение, если не знаем имя.', points: 1 },
  { id: 'english-q162', topicId: 'english-41', text: 'Which phrase is appropriate in a formal letter?', type: 'choice', options: ['I\'m writing to complain...', 'I am writing to complain...', 'I wanna complain...', 'Hey, I have a problem...'], correctAnswer: 'I am writing to complain...', explanation: 'В формальном письме — без сокращений: I am, не I\'m.', points: 1 },
  { id: 'english-q163', topicId: 'english-41', text: 'After "Dear Sir/Madam," the correct sign-off is:', type: 'choice', options: ['Yours sincerely,', 'Yours faithfully,', 'Best wishes,', 'Love,'], correctAnswer: 'Yours faithfully,', explanation: 'Dear Sir/Madam → Yours faithfully.', points: 1 },
  { id: 'english-q164', topicId: 'english-41', text: 'Which phrase is NOT suitable for a formal letter?', type: 'choice', options: ['I would be grateful if...', 'I look forward to hearing from you.', 'I would like to point out that...', 'I reckon that...'], correctAnswer: 'I reckon that...', explanation: '"I reckon" — разговорное выражение, не подходит для формального письма.', points: 1 },

  // Topic 42: Listening strategies
  { id: 'english-q165', topicId: 'english-42', text: 'What should you do BEFORE listening to the audio?', type: 'choice', options: ['Close your eyes', 'Read the questions and options', 'Start writing answers', 'Speak loudly'], correctAnswer: 'Read the questions and options', explanation: 'Перед прослушиванием — читайте задание и варианты ответов.', points: 1 },
  { id: 'english-q166', topicId: 'english-42', text: 'In listening tasks, answers in the text are usually:', type: 'choice', options: ['The exact same words as in the options', 'Synonyms of the words in the options', 'In the same order as the questions', 'Always at the beginning of the audio'], correctAnswer: 'Synonyms of the words in the options', explanation: 'Часто используются синонимы — не точные совпадения слов.', points: 1 },
  { id: 'english-q167', topicId: 'english-42', text: 'What should you pay special attention to in listening?', type: 'choice', options: ['Every single word', 'Negations (not, never, hardly)', 'Background music', 'Speaker\'s accent'], correctAnswer: 'Negations (not, never, hardly)', explanation: 'Отрицания (not, never, hardly) меняют смысл — на них легко попасться.', points: 1 },
  { id: 'english-q168', topicId: 'english-42', text: 'How many times is the audio usually played in the EGE?', type: 'choice', options: ['Once', 'Twice', 'Three times', 'As many as you need'], correctAnswer: 'Twice', explanation: 'На ЕГЭ аудирование проигрывается дважды.', points: 1 },

  // Topic 43: Reading strategies
  { id: 'english-q169', topicId: 'english-43', text: 'In task 5 (reading), what should you do first?', type: 'choice', options: ['Read the whole text', 'Read the questions', 'Read the title only', 'Start answering immediately'], correctAnswer: 'Read the questions', explanation: 'Сначала читайте вопросы, потом ищите ответы в тексте.', points: 1 },
  { id: 'english-q170', topicId: 'english-43', text: 'In task 6 (matching headings), the main idea of a paragraph is usually in:', type: 'choice', options: ['The middle', 'The last sentence', 'The first or last sentence', 'Random sentences'], correctAnswer: 'The first or last sentence', explanation: 'Тема абзаца обычно в первом или последнем предложении.', points: 1 },
  { id: 'english-q171', topicId: 'english-43', text: 'When you encounter an unknown word in a reading text, you should:', type: 'choice', options: ['Stop and look it up', 'Skip the whole paragraph', 'Guess the meaning from context', 'Ask the teacher'], correctAnswer: 'Guess the meaning from context', explanation: 'Догадывайтесь из контекста — не тратьте время на словарь.', points: 1 },
  { id: 'english-q172', topicId: 'english-43', text: 'In task 4 (gap filling), what helps you choose the right sentence?', type: 'choice', options: ['The length of the sentence', 'Linking words and logic', 'The first letter of the word', 'Random guessing'], correctAnswer: 'Linking words and logic', explanation: 'Связующие слова (however, therefore) и логика текста помогают выбрать верное предложение.', points: 1 },

  // Topic 44: Synonyms and antonyms
  { id: 'english-q173', topicId: 'english-44', text: 'What is a synonym for "important"?', type: 'choice', options: ['trivial', 'significant', 'minor', 'insignificant'], correctAnswer: 'significant', explanation: 'Significant = important (важный).', points: 1 },
  { id: 'english-q174', topicId: 'english-44', text: 'What is an antonym for "generous"?', type: 'choice', options: ['kind', 'selfish', 'wealthy', 'happy'], correctAnswer: 'selfish', explanation: 'Selfish — противоположность generous (щедрый).', points: 1 },
  { id: 'english-q175', topicId: 'english-44', text: 'Which prefix makes "possible" an antonym?', type: 'choice', options: ['un-', 'dis-', 'im-', 're-'], correctAnswer: 'im-', explanation: 'Impossible = не возможный. Перед p → im-.', points: 1 },
  { id: 'english-q176', topicId: 'english-44', text: 'Which word is a synonym for "begin"?', type: 'choice', options: ['finish', 'commence', 'end', 'conclude'], correctAnswer: 'commence', explanation: 'Commence = begin (начать).', points: 1 },

  // Topic 45: Idioms
  { id: 'english-q177', topicId: 'english-45', text: 'What does "a piece of cake" mean?', type: 'choice', options: ['A delicious dessert', 'Something very easy', 'Something expensive', 'A birthday tradition'], correctAnswer: 'Something very easy', explanation: 'A piece of cake = что-то очень лёгкое.', points: 1 },
  { id: 'english-q178', topicId: 'english-45', text: 'What does "once in a blue moon" mean?', type: 'choice', options: ['Every night', 'Very often', 'Very rarely', 'During a full moon'], correctAnswer: 'Very rarely', explanation: 'Once in a blue moon = очень редко.', points: 1 },
  { id: 'english-q179', topicId: 'english-45', text: 'What does "under the weather" mean?', type: 'choice', options: ['Outside in the rain', 'Feeling sick', 'Feeling cold', 'Looking at the sky'], correctAnswer: 'Feeling sick', explanation: 'Under the weather = нездоровиться, чувствовать себя плохо.', points: 1 },
  { id: 'english-q180', topicId: 'english-45', text: 'What does "hit the books" mean?', type: 'choice', options: ['To throw books', 'To study hard', 'To go to the library', 'To destroy books'], correctAnswer: 'To study hard', explanation: 'Hit the books = усиленно учиться.', points: 1 },

  // Topic 46: Homophones and homonyms
  { id: 'english-q181', topicId: 'english-46', text: 'Choose the correct word: "___ going to the party tonight."', type: 'choice', options: ['Their', 'There', 'They\'re', 'Theire'], correctAnswer: 'They\'re', explanation: 'They\'re = they are. They are going to the party.', points: 1 },
  { id: 'english-q182', topicId: 'english-46', text: 'Choose the correct word: "The dog wagged ___ tail."', type: 'choice', options: ['it\'s', 'its', 'its\'', 'it is'], correctAnswer: 'its', explanation: 'Its = притяжательное (без апострофа). It\'s = it is.', points: 1 },
  { id: 'english-q183', topicId: 'english-46', text: 'Choose the correct word: "I need to ___ my name."', type: 'choice', options: ['right', 'write', 'wright', 'rite'], correctAnswer: 'write', explanation: 'Write = писать.', points: 1 },
  { id: 'english-q184', topicId: 'english-46', text: 'Choose the correct word: "___ you coming with us?"', type: 'choice', options: ['Your', 'You\'re', 'Yore', 'Youre'], correctAnswer: 'You\'re', explanation: 'You\'re = you are. Are you coming with us?', points: 1 },

  // Topic 47: Spelling rules
  { id: 'english-q185', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['neccessary', 'necessary', 'necesary', 'neccesary'], correctAnswer: 'necessary', explanation: 'necessary: одна c, две s.', points: 1 },
  { id: 'english-q186', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['accomodation', 'accommodation', 'acommodation', 'accomadation'], correctAnswer: 'accommodation', explanation: 'accommodation: два c, два m.', points: 1 },
  { id: 'english-q187', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['recomend', 'recommend', 'recomend', 'recommened'], correctAnswer: 'recommend', explanation: 'recommend: два m.', points: 1 },
  { id: 'english-q188', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['definately', 'definatly', 'definitely', 'defenetly'], correctAnswer: 'definitely', explanation: 'definitely: -ite-, не -ate-.', points: 1 },

  // Topic 48: Punctuation
  { id: 'english-q189', topicId: 'english-48', text: 'Which sentence uses an apostrophe correctly?', type: 'choice', options: ['Its a beautiful day.', 'It\'s a beautiful day.', 'Its\' a beautiful day.', 'It is\' a beautiful day.'], correctAnswer: 'It\'s a beautiful day.', explanation: 'It\'s = it is (сокращение с апострофом).', points: 1 },
  { id: 'english-q190', topicId: 'english-48', text: 'Which sentence is punctuated correctly?', type: 'choice', options: ['My brother, who lives in London is a doctor.', 'My brother who lives in London, is a doctor.', 'My brother, who lives in London, is a doctor.', 'My brother who lives in London is a doctor.'], correctAnswer: 'My brother, who lives in London, is a doctor.', explanation: 'Non-defining clause — обособляется запятыми с двух сторон.', points: 1 },
  { id: 'english-q191', topicId: 'english-48', text: 'Which uses a comma correctly with a list?', type: 'choice', options: ['I bought apples bananas and oranges.', 'I bought apples, bananas, and oranges.', 'I bought apples, bananas and, oranges.', 'I bought, apples bananas and oranges.'], correctAnswer: 'I bought apples, bananas, and oranges.', explanation: 'Запятые при перечислении: apples, bananas, and oranges.', points: 1 },
  { id: 'english-q192', topicId: 'english-48', text: 'Which is the correct possessive form?', type: 'choice', options: ['The childrens\' toys', 'The children\'s toys', 'The childrens toy\'s', 'The children toys'], correctAnswer: 'The children\'s toys', explanation: 'Children (мн.ч. неправильное) → children\'s (апостроф + s).', points: 1 },

  // Topic 49: Common mistakes
  { id: 'english-q193', topicId: 'english-49', text: 'Which sentence is grammatically correct?', type: 'choice', options: ['I have 20 years.', 'I am 20 years old.', 'I have 20 years old.', 'I am 20 years.'], correctAnswer: 'I am 20 years old.', explanation: 'В английском: I am ... years old (не I have).', points: 1 },
  { id: 'english-q194', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['I am agree with you.', 'I agree with you.', 'I am agreeing with you.', 'I\'m agree with you.'], correctAnswer: 'I agree with you.', explanation: 'Agree — глагол, не прилагательное. Не нужна связка am.', points: 1 },
  { id: 'english-q195', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['She can to swim.', 'She can swimming.', 'She can swim.', 'She can swims.'], correctAnswer: 'She can swim.', explanation: 'После модального глагола — инфинитив без to.', points: 1 },
  { id: 'english-q196', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['Despite of the rain, we went out.', 'Despite the rain, we went out.', 'Despite the rain, but we went out.', 'Despite it rained, we went out.'], correctAnswer: 'Despite the rain, we went out.', explanation: 'Despite + noun (без of, без but).', points: 1 },

  // Topic 50: Exam strategies
  { id: 'english-q197', topicId: 'english-50', text: 'What is the maximum score for the written part of the EGE in English?', type: 'choice', options: ['60', '80', '100', '120'], correctAnswer: '100', explanation: 'Максимальный балл за письменную часть ЕГЭ — 100.', points: 1 },
  { id: 'english-q198', topicId: 'english-50', text: 'How much time is recommended for the essay (task 11)?', type: 'choice', options: ['20 minutes', '40 minutes', '60 minutes', '80 minutes'], correctAnswer: '40 minutes', explanation: 'На эссе рекомендуется ~40 минут (из 60 на письмо).', points: 1 },
  { id: 'english-q199', topicId: 'english-50', text: 'Is there a penalty for wrong answers on the EGE?', type: 'choice', options: ['Yes, -1 for each wrong answer', 'Yes, -0.5 for each wrong answer', 'No, there is no penalty', 'Only for some tasks'], correctAnswer: 'No, there is no penalty', explanation: 'На ЕГЭ нет штрафа за неправильные ответы — всегда угадывайте.', points: 1 },
  { id: 'english-q200', topicId: 'english-50', text: 'Which is the best strategy for task 7 (grammar)?', type: 'choice', options: ['Guess randomly', 'Determine the part of speech needed', 'Write a long answer', 'Skip the task'], correctAnswer: 'Determine the part of speech needed', explanation: 'Определите, какая часть речи нужна (глагол? существительное? прилагательное?), затем подберите правильную форму.', points: 1 },

  // ===== NEW QUESTIONS (5-7 per topic) =====

  // Topic 1: Present Simple (additional)
  { id: 'english-q201', topicId: 'english-1', text: 'We ___ (not/eat) meat.', type: 'choice', options: ['doesn\'t eat', 'don\'t eat', 'aren\'t eating', 'not eat'], correctAnswer: 'don\'t eat', explanation: 'We → вспомогательный do → don\'t eat. Present Simple отрицание.', points: 1 },
  { id: 'english-q202', topicId: 'english-1', text: 'He always ___ (get) up at 7 a.m.', type: 'choice', options: ['get', 'gets', 'is getting', 'got'], correctAnswer: 'gets', explanation: 'Always — сигнал Present Simple. He → gets (-s).', points: 1 },
  { id: 'english-q203', topicId: 'english-1', text: '___ the children play in the park after school?', type: 'choice', options: ['Does', 'Do', 'Are', 'Is'], correctAnswer: 'Do', explanation: 'Children — мн. число → Do. Present Simple вопрос.', points: 1 },
  { id: 'english-q204', topicId: 'english-1', text: 'She ___ (watch) TV every evening.', type: 'input', correctAnswer: 'watches', explanation: 'She — 3-е лицо ед. числа → watch + es = watches.', points: 1 },
  { id: 'english-q205', topicId: 'english-1', text: 'Translate to English: "Он не любит кофе."', type: 'input', correctAnswer: "He doesn't like coffee.", explanation: 'He → doesn\'t + V (инфинитив). Не забываем точку в конце.', points: 1 },
  { id: 'english-q206', topicId: 'english-1', text: 'My parents ___ (work) in the same company.', type: 'choice', options: ['works', 'work', 'is working', 'are work'], correctAnswer: 'work', explanation: 'My parents — мн. число → work без окончания -s.', points: 1 },

  // Topic 2: Present Continuous (additional)
  { id: 'english-q207', topicId: 'english-2', text: 'What ___ you ___ (do) right now?', type: 'choice', options: ['do ... do', 'are ... doing', 'is ... doing', 'does ... do'], correctAnswer: 'are ... doing', explanation: 'Right now — Present Continuous. You → are doing.', points: 1 },
  { id: 'english-q208', topicId: 'english-2', text: 'The baby ___ (sleep) in the other room.', type: 'choice', options: ['sleeps', 'is sleeping', 'sleep', 'are sleeping'], correctAnswer: 'is sleeping', explanation: 'Действие происходит сейчас → Present Continuous. Baby — it → is sleeping.', points: 1 },
  { id: 'english-q209', topicId: 'english-2', text: 'Don\'t make so much noise! I ___ (try) to concentrate.', type: 'choice', options: ['try', 'am trying', 'tries', 'was trying'], correctAnswer: 'am trying', explanation: 'Действие происходит прямо сейчас → Present Continuous.', points: 1 },
  { id: 'english-q210', topicId: 'english-2', text: 'She ___ (write) a letter at the moment.', type: 'input', correctAnswer: 'is writing', explanation: 'At the moment — Present Continuous. Write → writing (немая -e убираем).', points: 1 },
  { id: 'english-q211', topicId: 'english-2', text: 'Translate to English: "Дети играют во дворе."', type: 'input', correctAnswer: 'The children are playing in the yard.', explanation: 'The children — мн. число → are playing. In the yard = во дворе.', points: 1 },
  { id: 'english-q212', topicId: 'english-2', text: 'He ___ (not/listen) to music now. He is reading.', type: 'choice', options: ['doesn\'t listen', 'isn\'t listening', 'isn\'t listen', 'don\'t listen'], correctAnswer: 'isn\'t listening', explanation: 'Now — Present Continuous отрицание: isn\'t listening.', points: 1 },

  // Topic 3: Present Perfect (additional)
  { id: 'english-q213', topicId: 'english-3', text: 'We ___ (just/arrive) at the hotel.', type: 'choice', options: ['just arrived', 'have just arrived', 'has just arrived', 'are just arriving'], correctAnswer: 'have just arrived', explanation: 'Just — сигнал Present Perfect. We → have + V3.', points: 1 },
  { id: 'english-q214', topicId: 'english-3', text: 'She ___ (never/be) to Japan.', type: 'choice', options: ['never was', 'has never been', 'have never been', 'is never'], correctAnswer: 'has never been', explanation: 'Never + опыт → Present Perfect. She → has never been.', points: 1 },
  { id: 'english-q215', topicId: 'english-3', text: 'How long ___ you ___ (know) each other?', type: 'choice', options: ['do ... know', 'have ... known', 'did ... know', 'are ... knowing'], correctAnswer: 'have ... known', explanation: 'How long — длительность до настоящего → Present Perfect.', points: 1 },
  { id: 'english-q216', topicId: 'english-3', text: 'I ___ (read) this book before.', type: 'input', correctAnswer: 'have read', explanation: 'Before — опыт → Present Perfect. I → have + V3 (read).', points: 1 },
  { id: 'english-q217', topicId: 'english-3', text: 'Translate to English: "Она уже закончила проект."', type: 'input', correctAnswer: 'She has already finished the project.', explanation: 'Already — Present Perfect. She → has + V3 (finished).', points: 1 },
  { id: 'english-q218', topicId: 'english-3', text: 'They ___ (live) in this house since 2015.', type: 'choice', options: ['live', 'are living', 'have lived', 'had lived'], correctAnswer: 'have lived', explanation: 'Since 2015 — действие началось в прошлом и продолжается → Present Perfect.', points: 1 },

  // Topic 4: Present Perfect Continuous (additional)
  { id: 'english-q219', topicId: 'english-4', text: 'How long ___ you ___ (wait)?', type: 'choice', options: ['do ... wait', 'are ... waiting', 'have ... been waiting', 'did ... wait'], correctAnswer: 'have ... been waiting', explanation: 'How long — длительность → Present Perfect Continuous.', points: 1 },
  { id: 'english-q220', topicId: 'english-4', text: 'He ___ (work) here since January.', type: 'choice', options: ['works', 'has been working', 'is working', 'had been working'], correctAnswer: 'has been working', explanation: 'Since January — длительное действие → Present Perfect Continuous.', points: 1 },
  { id: 'english-q221', topicId: 'english-4', text: 'Your eyes are red. ___ you ___ (cry)?', type: 'choice', options: ['Have ... cried', 'Have ... been crying', 'Did ... cry', 'Are ... crying'], correctAnswer: 'Have ... been crying', explanation: 'Видимый результат (красные глаза) + длительное действие → Present Perfect Continuous.', points: 1 },
  { id: 'english-q222', topicId: 'english-4', text: 'I ___ (cook) for two hours. I\'m tired.', type: 'input', correctAnswer: 'have been cooking', explanation: 'For two hours — длительность → Present Perfect Continuous.', points: 1 },
  { id: 'english-q223', topicId: 'english-4', text: 'Translate to English: "Они ищут ключи уже полчаса."', type: 'input', correctAnswer: 'They have been looking for the keys for half an hour.', explanation: 'Длительное действие (уже полчаса) → Present Perfect Continuous.', points: 1 },
  { id: 'english-q224', topicId: 'english-4', text: 'It ___ (snow) since morning. Look at the streets!', type: 'choice', options: ['snows', 'is snowing', 'has been snowing', 'has snowed'], correctAnswer: 'has been snowing', explanation: 'Since morning + видимый результат → Present Perfect Continuous.', points: 1 },

  // Topic 5: Past Simple (additional)
  { id: 'english-q225', topicId: 'english-5', text: 'I ___ (buy) a new phone last Friday.', type: 'choice', options: ['buyed', 'bought', 'have bought', 'was buying'], correctAnswer: 'bought', explanation: 'Buy — неправильный глагол, V2 = bought. Last Friday — Past Simple.', points: 1 },
  { id: 'english-q226', topicId: 'english-5', text: 'We ___ (not/go) to school yesterday.', type: 'choice', options: ['didn\'t went', 'didn\'t go', 'doesn\'t go', 'weren\'t go'], correctAnswer: 'didn\'t go', explanation: 'После didn\'t — инфинитив: didn\'t go.', points: 1 },
  { id: 'english-q227', topicId: 'english-5', text: 'Where ___ you ___ (spend) your holidays last summer?', type: 'choice', options: ['do ... spend', 'did ... spend', 'are ... spending', 'did ... spent'], correctAnswer: 'did ... spend', explanation: 'Last summer — Past Simple. Did + инфинитив: did ... spend.', points: 1 },
  { id: 'english-q228', topicId: 'english-5', text: 'She ___ (write) three letters yesterday.', type: 'input', correctAnswer: 'wrote', explanation: 'Write — неправильный глагол, V2 = wrote. Yesterday — Past Simple.', points: 1 },
  { id: 'english-q229', topicId: 'english-5', text: 'Translate to English: "Мы видели этот фильм два дня назад."', type: 'input', correctAnswer: 'We saw this/the film two days ago.', explanation: 'See — неправильный глагол, V2 = saw. Two days ago — Past Simple.', points: 1 },
  { id: 'english-q230', topicId: 'english-5', text: 'He ___ (teach) English for ten years before he retired.', type: 'choice', options: ['taught', 'has taught', 'had taught', 'was teaching'], correctAnswer: 'taught', explanation: 'Before he retired — законченное действие → Past Simple.', points: 1 },

  // Topic 6: Past Continuous (additional)
  { id: 'english-q231', topicId: 'english-6', text: 'While the teacher ___ (explain), the students were taking notes.', type: 'choice', options: ['explained', 'was explaining', 'has explained', 'explains'], correctAnswer: 'was explaining', explanation: 'While + Past Continuous — фоновое действие.', points: 1 },
  { id: 'english-q232', topicId: 'english-6', text: 'What ___ you ___ (do) at 3 p.m. yesterday?', type: 'choice', options: ['did ... do', 'were ... doing', 'was ... doing', 'are ... doing'], correctAnswer: 'were ... doing', explanation: 'Конкретный момент в прошлом → Past Continuous. You → were doing.', points: 1 },
  { id: 'english-q233', topicId: 'english-6', text: 'The sun ___ (shine) when we left the house.', type: 'choice', options: ['shone', 'was shining', 'is shining', 'has shone'], correctAnswer: 'was shining', explanation: 'Фоновое действие (светило, когда мы вышли) → Past Continuous.', points: 1 },
  { id: 'english-q234', topicId: 'english-6', text: 'She ___ (drive) home when the accident happened.', type: 'input', correctAnswer: 'was driving', explanation: 'Действие в процессе, прерванное другим → Past Continuous.', points: 1 },
  { id: 'english-q235', topicId: 'english-6', text: 'Translate to English: "Когда я звонил, он спал."', type: 'input', correctAnswer: 'When I called, he was sleeping.', explanation: 'When + Past Simple (короткое), Past Continuous (длительное фоновое).', points: 1 },
  { id: 'english-q236', topicId: 'english-6', text: 'I ___ (read) a book while she ___ (cook) dinner.', type: 'choice', options: ['read / cooked', 'was reading / was cooking', 'was reading / cooked', 'read / was cooking'], correctAnswer: 'was reading / was cooking', explanation: 'While + два параллельных длительных действия → оба Past Continuous.', points: 1 },

  // Topic 7: Past Perfect (additional)
  { id: 'english-q237', topicId: 'english-7', text: 'She ___ (finish) the work before I ___ (arrive).', type: 'choice', options: ['finished / arrived', 'had finished / arrived', 'has finished / arrive', 'was finishing / arrived'], correctAnswer: 'had finished / arrived', explanation: 'Первое действие (закончила) раньше второго (приехал) → Past Perfect + Past Simple.', points: 1 },
  { id: 'english-q238', topicId: 'english-7', text: 'I ___ (never/try) sushi before last night.', type: 'choice', options: ['never tried', 'have never tried', 'had never tried', 'was never trying'], correctAnswer: 'had never tried', explanation: 'До определённого момента в прошлом (before last night) → Past Perfect.', points: 1 },
  { id: 'english-q239', topicId: 'english-7', text: 'They ___ (already/leave) when we ___ (get) there.', type: 'choice', options: ['already left / got', 'had already left / got', 'have already left / get', 'were already leaving / got'], correctAnswer: 'had already left / got', explanation: 'Они уехали (раньше) → Past Perfect. Мы приехали (позже) → Past Simple.', points: 1 },
  { id: 'english-q240', topicId: 'english-7', text: 'She ___ (write) the letter before she ___ (go) out.', type: 'input', correctAnswer: 'had written', explanation: 'Действие завершилось до другого → Past Perfect (had + V3).', points: 1 },
  { id: 'english-q241', topicId: 'english-7', text: 'Translate to English: "Когда я пришёл, они уже ушли."', type: 'input', correctAnswer: 'When I arrived, they had already left.', explanation: 'Они ушли раньше (Past Perfect), я пришёл позже (Past Simple).', points: 1 },
  { id: 'english-q242', topicId: 'english-7', text: 'He said he ___ (see) that film the day before.', type: 'choice', options: ['saw', 'has seen', 'had seen', 'was seeing'], correctAnswer: 'had seen', explanation: 'В косвенной речи: Past Simple → Past Perfect. He had seen.', points: 1 },

  // Topic 8: Past Perfect Continuous (additional)
  { id: 'english-q243', topicId: 'english-8', text: 'She was tired because she ___ (work) all day.', type: 'choice', options: ['worked', 'had been working', 'was working', 'has been working'], correctAnswer: 'had been working', explanation: 'Причина (устала) от длительного действия до момента в прошлом → Past Perfect Continuous.', points: 1 },
  { id: 'english-q244', topicId: 'english-8', text: 'By the time the ambulance ___ (arrive), the patient ___ (wait) for two hours.', type: 'choice', options: ['arrived / waited', 'arrived / had been waiting', 'had arrived / was waiting', 'arrived / was waiting'], correctAnswer: 'arrived / had been waiting', explanation: 'Длительное действие до другого момента в прошлом → Past Perfect Continuous + Past Simple.', points: 1 },
  { id: 'english-q245', topicId: 'english-8', text: 'I ___ (study) for three hours when my friend called.', type: 'choice', options: ['studied', 'was studying', 'had been studying', 'have been studying'], correctAnswer: 'had been studying', explanation: 'For three hours + when...called → Past Perfect Continuous.', points: 1 },
  { id: 'english-q246', topicId: 'english-8', text: 'The ground was wet. It ___ (rain) all night.', type: 'input', correctAnswer: 'had been raining', explanation: 'Видимый результат (мокрая земля) + длительность (всю ночь) → Past Perfect Continuous.', points: 1 },
  { id: 'english-q247', topicId: 'english-8', text: 'Translate to English: "Он ждал автобус 40 минут, когда он наконец приехал."', type: 'input', correctAnswer: 'He had been waiting for the bus for 40 minutes when it finally came.', explanation: 'Длительное действие (40 минут) до другого момента → Past Perfect Continuous.', points: 1 },
  { id: 'english-q248', topicId: 'english-8', text: 'They ___ (argue) for an hour before they ___ (reach) a decision.', type: 'choice', options: ['argued / reached', 'had been arguing / reached', 'were arguing / reached', 'have been arguing / reach'], correctAnswer: 'had been arguing / reached', explanation: 'Длительное действие (спорили) до результата → Past Perfect Continuous + Past Simple.', points: 1 },

  // Topic 9: Future Simple (additional)
  { id: 'english-q249', topicId: 'english-9', text: 'I ___ (call) you when I ___ (arrive).', type: 'choice', options: ['will call / arrive', 'will call / will arrive', 'call / arrive', 'am calling / arrive'], correctAnswer: 'will call / arrive', explanation: 'First Conditional: if/when + Present Simple, will + V.', points: 1 },
  { id: 'english-q250', topicId: 'english-9', text: 'She ___ not ___ (come) to the party tomorrow.', type: 'choice', options: ['is / coming', 'will / come', 'does / come', 'did / come'], correctAnswer: 'will / come', explanation: 'Future Simple отрицание: will not + V (won\'t come).', points: 1 },
  { id: 'english-q251', topicId: 'english-9', text: 'It ___ (probably/rain) later.', type: 'choice', options: ['probably rains', 'is probably raining', 'will probably rain', 'probably rained'], correctAnswer: 'will probably rain', explanation: 'Probably + будущее → Future Simple.', points: 1 },
  { id: 'english-q252', topicId: 'english-9', text: 'Don\'t worry. I ___ (help) you.', type: 'input', correctAnswer: 'will help', explanation: 'Успокаивающее обещание → Future Simple: will help.', points: 1 },
  { id: 'english-q253', topicId: 'english-9', text: 'Translate to English: "Я думаю, она приедет завтра."', type: 'input', correctAnswer: 'I think she will come tomorrow.', explanation: 'Предсказание на основе мнения (I think) → Future Simple.', points: 1 },
  { id: 'english-q254', topicId: 'english-9', text: 'If you ___ (see) Tom, ___ (tell) him I called.', type: 'choice', options: ['will see / will tell', 'see / tell', 'see / will tell', 'will see / tell'], correctAnswer: 'see / tell', explanation: 'First Conditional: if + Present Simple, Imperative (повелительное наклонение).', points: 1 },

  // Topic 10: Future Continuous (additional)
  { id: 'english-q255', topicId: 'english-10', text: 'This time tomorrow, I ___ (fly) to London.', type: 'choice', options: ['fly', 'will fly', 'will be flying', 'am flying'], correctAnswer: 'will be flying', explanation: 'This time tomorrow — конкретный момент в будущем → Future Continuous.', points: 1 },
  { id: 'english-q256', topicId: 'english-10', text: 'Don\'t phone between 5 and 6. I ___ (have) dinner.', type: 'choice', options: ['have', 'will have', 'will be having', 'am having'], correctAnswer: 'will be having', explanation: 'Действие будет в процессе в определённый период → Future Continuous.', points: 1 },
  { id: 'english-q257', topicId: 'english-10', text: 'She ___ (have) a meeting at 10 a.m. next Monday.', type: 'choice', options: ['has', 'will have', 'will be having', 'is having'], correctAnswer: 'will be having', explanation: 'Запланированное действие в определённый момент → Future Continuous.', points: 1 },
  { id: 'english-q258', topicId: 'english-10', text: 'At 9 p.m. tonight, I ___ (study) for the exam.', type: 'input', correctAnswer: 'will be studying', explanation: 'Конкретный момент в будущем → Future Continuous.', points: 1 },
  { id: 'english-q259', topicId: 'english-10', text: 'Translate to English: "В это время завтра она будет работать."', type: 'input', correctAnswer: 'She will be working at this time tomorrow.', explanation: 'This time tomorrow + действие в процессе → Future Continuous.', points: 1 },
  { id: 'english-q260', topicId: 'english-10', text: 'They ___ (travel) to Spain this time next week.', type: 'choice', options: ['travel', 'will travel', 'will be travelling', 'are travelling'], correctAnswer: 'will be travelling', explanation: 'This time next week → Future Continuous.', points: 1 },

  // Topic 11: Future Perfect (additional)
  { id: 'english-q261', topicId: 'english-11', text: 'By the end of this month, I ___ (read) five books.', type: 'choice', options: ['read', 'will read', 'will have read', 'have read'], correctAnswer: 'will have read', explanation: 'By the end of this month — к сроку в будущем → Future Perfect.', points: 1 },
  { id: 'english-q262', topicId: 'english-11', text: 'Before you come back, I ___ (tidy) the house.', type: 'choice', options: ['tidy', 'will tidy', 'will have tidied', 'am tidying'], correctAnswer: 'will have tidied', explanation: 'Before + момент в будущем → Future Perfect.', points: 1 },
  { id: 'english-q263', topicId: 'english-11', text: 'She ___ (finish) her degree by next June.', type: 'choice', options: ['finishes', 'will finish', 'will have finished', 'has finished'], correctAnswer: 'will have finished', explanation: 'By next June — к определённому сроку → Future Perfect.', points: 1 },
  { id: 'english-q264', topicId: 'english-11', text: 'By 2030, scientists ___ (find) a cure for many diseases.', type: 'input', correctAnswer: 'will have found', explanation: 'By 2030 — к моменту в будущем → Future Perfect.', points: 1 },
  { id: 'english-q265', topicId: 'english-11', text: 'Translate to English: "К тому времени, как ты придёшь, я уже приготовлю ужин."', type: 'input', correctAnswer: 'By the time you arrive, I will have cooked dinner.', explanation: 'By the time + Present Simple, will have + V3 → Future Perfect.', points: 1 },
  { id: 'english-q266', topicId: 'english-11', text: 'He ___ (work) here for 20 years by next March.', type: 'choice', options: ['works', 'will work', 'will have worked', 'has worked'], correctAnswer: 'will have worked', explanation: 'For 20 years + by next March → Future Perfect.', points: 1 },

  // Topic 12: Passive Voice (additional)
  { id: 'english-q267', topicId: 'english-12', text: 'English ___ (speak) in many countries.', type: 'choice', options: ['speaks', 'is spoken', 'is speaking', 'was spoken'], correctAnswer: 'is spoken', explanation: 'Present Simple Passive: is + V3. Общий факт.', points: 1 },
  { id: 'english-q268', topicId: 'english-12', text: 'The window ___ (break) by the children.', type: 'choice', options: ['broke', 'was broken', 'is broken', 'has broken'], correctAnswer: 'was broken', explanation: 'Past Simple Passive: was + V3. Действие в прошлом.', points: 1 },
  { id: 'english-q269', topicId: 'english-12', text: 'The letter ___ (send) tomorrow.', type: 'choice', options: ['sends', 'is sent', 'will be sent', 'has been sent'], correctAnswer: 'will be sent', explanation: 'Tomorrow → Future Simple Passive: will be + V3.', points: 1 },
  { id: 'english-q270', topicId: 'english-12', text: 'The bridge ___ (build) since last year.', type: 'input', correctAnswer: 'has been built', explanation: 'Since last year → Present Perfect Passive: has been + V3.', points: 1 },
  { id: 'english-q271', topicId: 'english-12', text: 'Translate to English: "Этот дом построили в 1990 году."', type: 'input', correctAnswer: 'This house was built in 1990.', explanation: 'Past Simple Passive: was + V3 (built).', points: 1 },
  { id: 'english-q272', topicId: 'english-12', text: 'A new shopping centre ___ (build) in our town at the moment.', type: 'choice', options: ['is built', 'is being built', 'has been built', 'was built'], correctAnswer: 'is being built', explanation: 'At the moment → Present Continuous Passive: is being + V3.', points: 1 },

  // Topic 13: Conditionals (Zero & First) (additional)
  { id: 'english-q273', topicId: 'english-13', text: 'If you ___ (mix) red and blue, you get purple.', type: 'choice', options: ['will mix', 'mix', 'mixed', 'are mixing'], correctAnswer: 'mix', explanation: 'Zero Conditional (факт): if + Present Simple, Present Simple.', points: 1 },
  { id: 'english-q274', topicId: 'english-13', text: 'If I ___ (be) late, please start without me.', type: 'choice', options: ['will be', 'am', 'was', 'would be'], correctAnswer: 'am', explanation: 'First Conditional: if + Present Simple. I → am.', points: 1 },
  { id: 'english-q275', topicId: 'english-13', text: 'If the phone ___ (ring), I ___ (answer) it.', type: 'choice', options: ['will ring / will answer', 'rings / will answer', 'rings / answer', 'will ring / answer'], correctAnswer: 'rings / will answer', explanation: 'First Conditional: if + Present Simple, will + V.', points: 1 },
  { id: 'english-q276', topicId: 'english-13', text: 'Translate to English: "Если пойдёт дождь, мы останемся дома."', type: 'input', correctAnswer: "If it rains, we will stay home.", explanation: 'First Conditional: if + Present Simple (rains), will + V (stay).', points: 1 },
  { id: 'english-q277', topicId: 'english-13', text: 'If you press this button, the machine ___ (start).', type: 'input', correctAnswer: 'starts', explanation: 'Zero Conditional (инструкция): if + Present Simple, Present Simple.', points: 1 },
  { id: 'english-q278', topicId: 'english-13', text: 'If you don\'t study, you ___ (not/pass) the exam.', type: 'choice', options: ['don\'t pass', 'won\'t pass', 'didn\'t pass', 'aren\'t passing'], correctAnswer: 'won\'t pass', explanation: 'First Conditional: if + Present Simple, will + V (won\'t pass).', points: 1 },

  // Topic 14: Conditionals (Second & Third) (additional)
  { id: 'english-q279', topicId: 'english-14', text: 'If I ___ (speak) English fluently, I would apply for that job.', type: 'choice', options: ['speak', 'spoke', 'would speak', 'had spoken'], correctAnswer: 'spoke', explanation: 'Second Conditional: if + Past Simple. Speak → spoke.', points: 1 },
  { id: 'english-q280', topicId: 'english-14', text: 'If they ___ (not/miss) the flight, they would have been on time.', type: 'choice', options: ['didn\'t miss', 'hadn\'t missed', 'haven\'t missed', 'wouldn\'t miss'], correctAnswer: 'hadn\'t missed', explanation: 'Third Conditional: if + Past Perfect.', points: 1 },
  { id: 'english-q281', topicId: 'english-14', text: 'What would you do if you ___ (win) the lottery?', type: 'choice', options: ['win', 'will win', 'won', 'would win'], correctAnswer: 'won', explanation: 'Second Conditional: if + Past Simple.', points: 1 },
  { id: 'english-q282', topicId: 'english-14', text: 'Translate to English: "Е бы я знал ответ, я бы тебе помог."', type: 'input', correctAnswer: 'If I knew the answer, I would help you.', explanation: 'Second Conditional: if + Past Simple (knew), would + V (help).', points: 1 },
  { id: 'english-q283', topicId: 'english-14', text: 'If we ___ (leave) earlier, we would have caught the train.', type: 'input', correctAnswer: 'had left', explanation: 'Third Conditional: if + Past Perfect (had + V3).', points: 1 },
  { id: 'english-q284', topicId: 'english-14', text: 'If she ___ (not/be) so tired, she would have gone to the party.', type: 'choice', options: ['isn\'t', 'wasn\'t', 'hadn\'t been', 'wouldn\'t be'], correctAnswer: 'hadn\'t been', explanation: 'Third Conditional: if + Past Perfect.', points: 1 },

  // Topic 15: Modal verbs — can, could, may, might (additional)
  { id: 'english-q285', topicId: 'english-15', text: '___ I borrow your pen?', type: 'choice', options: ['Will', 'May', 'Must', 'Shall'], correctAnswer: 'May', explanation: 'May — формальная просьба о разрешении.', points: 1 },
  { id: 'english-q286', topicId: 'english-15', text: 'It ___ be true. I don\'t believe it.', type: 'choice', options: ['must', 'may', 'can\'t', 'should'], correctAnswer: 'can\'t', explanation: 'Невозможность (не верю) → can\'t.', points: 1 },
  { id: 'english-q287', topicId: 'english-15', text: 'He ___ play the piano when he was a child.', type: 'choice', options: ['can', 'could', 'may', 'must'], correctAnswer: 'could', explanation: 'Способность в прошлом → could.', points: 1 },
  { id: 'english-q288', topicId: 'english-15', text: 'Translate to English: "Она не может быть дома. Её машины нет."', type: 'input', correctAnswer: "She can't be at home. Her car isn't here.", explanation: 'Невозможный вывод → can\'t + V.', points: 1 },
  { id: 'english-q289', topicId: 'english-15', text: 'She ___ be a doctor. She is too young.', type: 'input', correctAnswer: "can't", explanation: 'Невозможность → can\'t.', points: 1 },
  { id: 'english-q290', topicId: 'english-15', text: '___ you wait a moment? I\'ll be right back.', type: 'choice', options: ['Will', 'Could', 'Must', 'Shall'], correctAnswer: 'Could', explanation: 'Вежливая просьба → Could.', points: 1 },

  // Topic 16: Modal verbs — must, have to, should (additional)
  { id: 'english-q291', topicId: 'english-16', text: 'I ___ go to the dentist. I have a toothache.', type: 'choice', options: ['should', 'mustn\'t', 'don\'t have to', 'can\'t'], correctAnswer: 'should', explanation: 'Рекомендация (болит зуб → надо к врачу) → should.', points: 1 },
  { id: 'english-q292', topicId: 'english-16', text: 'You ___ eat so much junk food.', type: 'choice', options: ['must', 'shouldn\'t', 'don\'t have to', 'may not'], correctAnswer: 'shouldn\'t', explanation: 'Не рекомендуется → shouldn\'t.', points: 1 },
  { id: 'english-q293', topicId: 'english-16', text: 'She ___ be at home. Her light is on.', type: 'choice', options: ['should', 'must', 'can', 'may'], correctAnswer: 'must', explanation: 'Уверенный вывод (~95%) → must.', points: 1 },
  { id: 'english-q294', topicId: 'english-16', text: 'Translate to English: "Ты не должен курить здесь. Это запрещено."', type: 'input', correctAnswer: "You mustn't smoke here.", explanation: 'Запрет → mustn\'t + V.', points: 1 },
  { id: 'english-q295', topicId: 'english-16', text: 'Do I ___ bring my own lunch? — No, lunch is provided.', type: 'input', correctAnswer: 'have to', explanation: 'Внешнее обязательство → do ... have to? Ответ: нет → не обязательно.', points: 1 },
  { id: 'english-q296', topicId: 'english-16', text: 'You ___ be more careful with your money.', type: 'choice', options: ['mustn\'t', 'should', 'can\'t', 'don\'t have to'], correctAnswer: 'should', explanation: 'Совет → should.', points: 1 },

  // Topic 17: Articles (additional)
  { id: 'english-q297', topicId: 'english-17', text: 'I need ___ umbrella. It\'s raining.', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: 'an', explanation: 'Umbrella — гласный звук → an.', points: 1 },
  { id: 'english-q298', topicId: 'english-17', text: 'Can you pass me ___ salt, please?', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: 'the', explanation: 'Конкретный предмет (на столе) → the.', points: 1 },
  { id: 'english-q299', topicId: 'english-17', text: 'She is ___ best student in our class.', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: 'the', explanation: 'Превосходная степень → the best.', points: 1 },
  { id: 'english-q300', topicId: 'english-17', text: 'I usually have ___ for breakfast.', type: 'input', correctAnswer: 'cereal', explanation: 'Приём пищи + неисчисляемое → без артикля.', points: 1 },
  { id: 'english-q301', topicId: 'english-17', text: 'Translate to English: "Музыка играет на фоне."', type: 'input', correctAnswer: 'Music is playing in the background.', explanation: 'Музыка вообще (неисчисляемое) → без артикля.', points: 1 },
  { id: 'english-q302', topicId: 'english-17', text: 'I went to ___ bed early last night.', type: 'choice', options: ['a', 'an', 'the', '—'], correctAnswer: '—', explanation: 'Go to bed (спать) — без артикля.', points: 1 },

  // Topic 18: Prepositions of time (additional)
  { id: 'english-q303', topicId: 'english-18', text: 'The show starts ___ 8 p.m.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'at', explanation: 'Точное время → at 8 p.m.', points: 1 },
  { id: 'english-q304', topicId: 'english-18', text: 'I have an appointment ___ Tuesday morning.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'on', explanation: 'День + время суток → on Tuesday morning.', points: 1 },
  { id: 'english-q305', topicId: 'english-18', text: 'The deadline is ___ Friday.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'by', explanation: 'К какому-то сроку (не позже) → by.', points: 1 },
  { id: 'english-q306', topicId: 'english-18', text: 'She was born ___ 1995.', type: 'input', correctAnswer: 'in', explanation: 'Год → in.', points: 1 },
  { id: 'english-q307', topicId: 'english-18', text: 'Translate to English: "Я работаю с понедельника по пятницу."', type: 'input', correctAnswer: 'I work from Monday to Friday.', explanation: 'From ... to — от...до (дни недели).', points: 1 },
  { id: 'english-q308', topicId: 'english-18', text: 'He arrived ___ the morning.', type: 'choice', options: ['at', 'on', 'in', 'by'], correctAnswer: 'in', explanation: 'Время суток → in the morning.', points: 1 },

  // Topic 19: Prepositions of place (additional)
  { id: 'english-q309', topicId: 'english-19', text: 'The picture is ___ the wall.', type: 'choice', options: ['in', 'on', 'at', 'under'], correctAnswer: 'on', explanation: 'На поверхности стены → on.', points: 1 },
  { id: 'english-q310', topicId: 'english-19', text: 'The bank is ___ the school and the park.', type: 'choice', options: ['between', 'among', 'beside', 'behind'], correctAnswer: 'between', explanation: 'Между двумя предметами → between.', points: 1 },
  { id: 'english-q311', topicId: 'english-19', text: 'We had a picnic ___ the river.', type: 'choice', options: ['in', 'on', 'at', 'by'], correctAnswer: 'by', explanation: 'By the river = у реки, рядом.', points: 1 },
  { id: 'english-q312', topicId: 'english-19', text: 'The school is ___ the corner.', type: 'input', correctAnswer: 'on', explanation: 'On the corner — на углу.', points: 1 },
  { id: 'english-q313', topicId: 'english-19', text: 'Translate to English: "Магазин находится напротив библиотеки."', type: 'input', correctAnswer: 'The shop is opposite the library.', explanation: 'Opposite — напротив.', points: 1 },
  { id: 'english-q314', topicId: 'english-19', text: 'She got ___ the bus at the next stop.', type: 'choice', options: ['in', 'on', 'at', 'into'], correctAnswer: 'on', explanation: 'Get on the bus — сесть в автобус.', points: 1 },

  // Topic 20: Word formation — nouns (additional)
  { id: 'english-q315', topicId: 'english-20', text: 'The ___ (important) of education cannot be overstated.', type: 'choice', options: ['important', 'importance', 'importantly', 'import'], correctAnswer: 'importance', explanation: 'После артикля the → существительное importance.', points: 1 },
  { id: 'english-q316', topicId: 'english-20', text: 'She has great ___ (confident) in her abilities.', type: 'choice', options: ['confident', 'confidence', 'confidential', 'confidently'], correctAnswer: 'confidence', explanation: 'После прилагательного great → существительное confidence.', points: 1 },
  { id: 'english-q317', topicId: 'english-20', text: 'The ___ (arrive) of the train was delayed.', type: 'choice', options: ['arrive', 'arrival', 'arriving', 'arrived'], correctAnswer: 'arrival', explanation: 'После артикля the → существительное arrival.', points: 1 },
  { id: 'english-q318', topicId: 'english-20', text: 'His ___ (kind) helped me a lot.', type: 'input', correctAnswer: 'kindness', explanation: 'После притяжательного his → существительное kindness.', points: 1 },
  { id: 'english-q319', topicId: 'english-20', text: 'Translate to English: "Свобода — это важное право."', type: 'input', correctAnswer: 'Freedom is an important right.', explanation: 'Freedom = свобода (существительное от free).', points: 1 },
  { id: 'english-q320', topicId: 'english-20', text: 'The ___ (differ) between the two paintings is obvious.', type: 'choice', options: ['different', 'difference', 'differently', 'differing'], correctAnswer: 'difference', explanation: 'The difference — существительное от different.', points: 1 },

  // Topic 21: Word formation — adjectives (additional)
  { id: 'english-q321', topicId: 'english-21', text: 'The film was very ___ (excite).', type: 'choice', options: ['excite', 'exciting', 'excited', 'excitement'], correctAnswer: 'exciting', explanation: 'О фильме (предмет) → -ing: exciting.', points: 1 },
  { id: 'english-q322', topicId: 'english-21', text: 'I am ___ (interest) in science.', type: 'choice', options: ['interest', 'interesting', 'interested', 'interestingly'], correctAnswer: 'interested', explanation: 'О человеке (я) → -ed: interested.', points: 1 },
  { id: 'english-q323', topicId: 'english-21', text: 'She found the test ___ (challenge).', type: 'choice', options: ['challenge', 'challenging', 'challenged', 'challengeable'], correctAnswer: 'challenging', explanation: 'После глагола found → прилагательное challenging (о тесте).', points: 1 },
  { id: 'english-q324', topicId: 'english-21', text: 'The result was completely ___ (expect).', type: 'input', correctAnswer: 'unexpected', explanation: 'Expect → un + expected (неожиданный).', points: 1 },
  { id: 'english-q325', topicId: 'english-21', text: 'Translate to English: "Это было очень полезное упражнение."', type: 'input', correctAnswer: 'It was a very useful exercise.', explanation: 'Useful = полезный (прилагательное от use).', points: 1 },
  { id: 'english-q326', topicId: 'english-21', text: 'The children felt ___ (hope) after hearing the news.', type: 'choice', options: ['hope', 'hopeful', 'hopeless', 'hopefully'], correctAnswer: 'hopeful', explanation: 'Чувствовали себя → прилагательное hopeful (надеющиеся).', points: 1 },

  // Topic 22: Word formation — verbs (additional)
  { id: 'english-q327', topicId: 'english-22', text: 'We need to ___ (strength) our economy.', type: 'choice', options: ['strength', 'strengthen', 'strong', 'strongly'], correctAnswer: 'strengthen', explanation: 'Strength → strengthen (усилить).', points: 1 },
  { id: 'english-q328', topicId: 'english-22', text: 'Please ___ (identification) the suspect in the photo.', type: 'choice', options: ['identification', 'identify', 'identical', 'identity'], correctAnswer: 'identify', explanation: 'Identification → identify (опознать).', points: 1 },
  { id: 'english-q329', topicId: 'english-22', text: 'She ___ (realization) she had made a mistake.', type: 'choice', options: ['realization', 'realized', 'realizing', 'real'], correctAnswer: 'realized', explanation: 'Realization → realized (осознала).', points: 1 },
  { id: 'english-q330', topicId: 'english-22', text: 'We need to ___ (classification) these documents.', type: 'input', correctAnswer: 'classify', explanation: 'Classification → classify (классифицировать).', points: 1 },
  { id: 'english-q331', topicId: 'english-22', text: 'Translate to English: "Они хотели модернизировать систему образования."', type: 'input', correctAnswer: 'They wanted to modernize the education system.', explanation: 'Modern + -ize → modernize.', points: 1 },
  { id: 'english-q332', topicId: 'english-22', text: 'Can you ___ (simple) explain this rule?', type: 'choice', options: ['simple', 'simplify', 'simplification', 'simply'], correctAnswer: 'simplify', explanation: 'Simple → simplify (упростить).', points: 1 },

  // Topic 23: Phrasal verbs (additional)
  { id: 'english-q333', topicId: 'english-23', text: 'I need to ___ my coat. It\'s cold outside.', type: 'choice', options: ['put off', 'put on', 'put up', 'put down'], correctAnswer: 'put on', explanation: 'Put on = надеть (одежду).', points: 1 },
  { id: 'english-q334', topicId: 'english-23', text: 'Can you ___ the TV? I can\'t hear it.', type: 'choice', options: ['turn on', 'turn off', 'turn up', 'turn down'], correctAnswer: 'turn up', explanation: 'Turn up = усилить (звук).', points: 1 },
  { id: 'english-q335', topicId: 'english-23', text: 'Don\'t ___ the opportunity to study abroad.', type: 'choice', options: ['give up', 'give away', 'give in', 'give out'], correctAnswer: 'give up', explanation: 'Give up = отказаться от чего-то.', points: 1 },
  { id: 'english-q336', topicId: 'english-23', text: 'I\'ll ___ you ___ at the airport at 3 p.m.', type: 'input', correctAnswer: 'pick up', explanation: 'Pick up = забрать (кого-то).', points: 1 },
  { id: 'english-q337', topicId: 'english-23', text: 'Translate to English: "Он отложил.assignment на завтра."', type: 'input', correctAnswer: 'He put off the assignment until tomorrow.', explanation: 'Put off = отложить.', points: 1 },
  { id: 'english-q338', topicId: 'english-23', text: 'She ___ her old clothes and bought new ones.', type: 'choice', options: ['threw away', 'threw up', 'threw out', 'threw in'], correctAnswer: 'threw away', explanation: 'Throw away = выбросить.', points: 1 },

  // Topic 24: Collocations (additional)
  { id: 'english-q339', topicId: 'english-24', text: 'He ___ a loud noise when he opened the door.', type: 'choice', options: ['did', 'made', 'took', 'had'], correctAnswer: 'made', explanation: 'Make a noise — устойчивое словосочетание.', points: 1 },
  { id: 'english-q340', topicId: 'english-24', text: 'She ___ an effort to arrive on time.', type: 'choice', options: ['did', 'made', 'took', 'gave'], correctAnswer: 'made', explanation: 'Make an effort — устойчивое словосочетание.', points: 1 },
  { id: 'english-q341', topicId: 'english-24', text: 'There was a ___ wind yesterday.', type: 'choice', options: ['heavy', 'strong', 'big', 'hard'], correctAnswer: 'strong', explanation: 'Strong wind — устойчивое словосочетание.', points: 1 },
  { id: 'english-q342', topicId: 'english-24', text: 'I have a ___ sleep every night.', type: 'input', correctAnswer: 'good', explanation: 'Good sleep — устойчивое словосочетание.', points: 1 },
  { id: 'english-q343', topicId: 'english-24', text: 'Translate to English: "Не делай ошибок в этом задании."', type: 'input', correctAnswer: "Don't make mistakes in this assignment.", explanation: 'Make mistakes — устойчивое словосочетание.', points: 1 },
  { id: 'english-q344', topicId: 'english-24', text: 'She ___ progress in her studies this semester.', type: 'choice', options: ['did', 'made', 'took', 'had'], correctAnswer: 'made', explanation: 'Make progress — устойчивое словосочетание.', points: 1 },

  // Topic 25: Gerund and Infinitive (additional)
  { id: 'english-q345', topicId: 'english-25', text: 'I can\'t help ___ when I see a cute dog.', type: 'choice', options: ['smile', 'to smile', 'smiling', 'smiles'], correctAnswer: 'smiling', explanation: 'Can\'t help + герундий (-ing).', points: 1 },
  { id: 'english-q346', topicId: 'english-25', text: 'She suggested ___ to the cinema.', type: 'choice', options: ['go', 'to go', 'going', 'went'], correctAnswer: 'going', explanation: 'Suggest + герундий (-ing).', points: 1 },
  { id: 'english-q347', topicId: 'english-25', text: 'I forgot ___ my homework at home.', type: 'choice', options: ['taking', 'to take', 'take', 'taken'], correctAnswer: 'to take', explanation: 'Forget + infinitive = забыть сделать (ещё не сделал).', points: 1 },
  { id: 'english-q348', topicId: 'english-25', text: 'She enjoys ___ to classical music.', type: 'input', correctAnswer: 'listening', explanation: 'Enjoy + герундий: enjoys listening.', points: 1 },
  { id: 'english-q349', topicId: 'english-25', text: 'Translate to English: "Он отказался помогать мне."', type: 'input', correctAnswer: 'He refused to help me.', explanation: 'Refuse + инфинитив (to + V).', points: 1 },
  { id: 'english-q350', topicId: 'english-25', text: 'He stopped ___ a cigarette. He wanted to be healthy.', type: 'choice', options: ['smoking', 'to smoke', 'smoke', 'smoked'], correctAnswer: 'smoking', explanation: 'Stop + gerund = перестал (бросил курить).', points: 1 },

  // Topic 26: Reported Speech (additional)
  { id: 'english-q351', topicId: 'english-26', text: 'They said, "We have finished." → They said that they ___.', type: 'choice', options: ['have finished', 'had finished', 'finished', 'were finishing'], correctAnswer: 'had finished', explanation: 'Present Perfect → Past Perfect при сдвиге времён.', points: 1 },
  { id: 'english-q352', topicId: 'english-26', text: 'He said, "I can help you." → He said that he ___ help me.', type: 'choice', options: ['can', 'could', 'may', 'would'], correctAnswer: 'could', explanation: 'Can → could при сдвиге времён.', points: 1 },
  { id: 'english-q353', topicId: 'english-26', text: 'She said, "Where is the station?" → She asked where ___.', type: 'choice', options: ['was the station', 'the station was', 'is the station', 'the station is'], correctAnswer: 'the station was', explanation: 'Косвенный вопрос: S + V (без инверсии).', points: 1 },
  { id: 'english-q354', topicId: 'english-26', text: 'He said, "I will call you later." → He said that he ___ me later.', type: 'input', correctAnswer: 'would call', explanation: 'Will → would при сдвиге времён.', points: 1 },
  { id: 'english-q355', topicId: 'english-26', text: 'Translate to English: "Она сказала, что работает в больнице."', type: 'input', correctAnswer: 'She said (that) she worked in a hospital.', explanation: 'Present Simple → Past Simple в косвенной речи.', points: 1 },
  { id: 'english-q356', topicId: 'english-26', text: 'She told me ___ the window.', type: 'choice', options: ['closing', 'to close', 'close', 'closed'], correctAnswer: 'to close', explanation: 'Tell + S + to + V (приказ/просьба).', points: 1 },

  // Topic 27: Relative Clauses (additional)
  { id: 'english-q357', topicId: 'english-27', text: 'The girl ___ bag was stolen is crying.', type: 'choice', options: ['who', 'which', 'whose', 'where'], correctAnswer: 'whose', explanation: 'Принадлежность (сумка девочки) → whose.', points: 1 },
  { id: 'english-q358', topicId: 'english-27', text: 'The day ___ we met was sunny.', type: 'choice', options: ['which', 'who', 'where', 'when'], correctAnswer: 'when', explanation: 'Для времени (the day) → when.', points: 1 },
  { id: 'english-q359', topicId: 'english-27', text: 'The movie, ___ was released last year, became very popular.', type: 'choice', options: ['that', 'which', 'who', 'whose'], correctAnswer: 'which', explanation: 'Non-defining clause (с запятыми) для предмета → which. That нельзя.', points: 1 },
  { id: 'english-q360', topicId: 'english-27', text: 'The woman ___ I spoke to was very helpful.', type: 'input', correctAnswer: 'who', explanation: 'Для лица → who. Можно также использовать that или опустить.', points: 1 },
  { id: 'english-q361', topicId: 'english-27', text: 'Translate to English: "Дом, в котором мы живём, очень старый."', type: 'input', correctAnswer: 'The house (that/which) we live in is very old.', explanation: 'Определительное придаточное → which/that (или опускаем).', points: 1 },
  { id: 'english-q362', topicId: 'english-27', text: 'This is the restaurant ___ we had dinner last week.', type: 'choice', options: ['which', 'who', 'where', 'when'], correctAnswer: 'where', explanation: 'Для места (restaurant) → where.', points: 1 },

  // Topic 28: Comparative and Superlative (additional)
  { id: 'english-q363', topicId: 'english-28', text: 'This question is ___ (easy) than the last one.', type: 'choice', options: ['easy', 'easier', 'the easiest', 'more easy'], correctAnswer: 'easier', explanation: 'Easy → easier (сравнительная степень).', points: 1 },
  { id: 'english-q364', topicId: 'english-28', text: 'Of all my friends, Tom is ___ (tall).', type: 'choice', options: ['tall', 'taller', 'the tallest', 'more tall'], correctAnswer: 'the tallest', explanation: 'Of all — превосходная степень: the tallest.', points: 1 },
  { id: 'english-q365', topicId: 'english-28', text: 'Her English is much ___ (good) than mine.', type: 'choice', options: ['good', 'better', 'best', 'more good'], correctAnswer: 'better', explanation: 'Good — неправильное: сравнительная → better.', points: 1 },
  { id: 'english-q366', topicId: 'english-28', text: 'This is ___ (bad) film I\'ve ever seen.', type: 'input', correctAnswer: 'the worst', explanation: 'Bad — неправильное: превосходная → the worst.', points: 1 },
  { id: 'english-q367', topicId: 'english-28', text: 'Translate to English: "Этот город намного красивее того."', type: 'input', correctAnswer: 'This city is much more beautiful than that one.', explanation: 'Длинное прилагательное → more beautiful. Much + comparative.', points: 1 },
  { id: 'english-q368', topicId: 'english-28', text: 'She is ___ intelligent ___ her sister.', type: 'choice', options: ['so ... as', 'as ... as', 'more ... as', 'as ... than'], correctAnswer: 'as ... as', explanation: 'As ... as — так же...как.', points: 1 },

  // Topic 29: Countable and Uncountable nouns (additional)
  { id: 'english-q369', topicId: 'english-29', text: 'How ___ water do you drink every day?', type: 'choice', options: ['many', 'much', 'a few', 'few'], correctAnswer: 'much', explanation: 'Water — неисчисляемое → much.', points: 1 },
  { id: 'english-q370', topicId: 'english-29', text: 'There are ___ chairs in the room.', type: 'choice', options: ['much', 'little', 'a lot of', 'a little'], correctAnswer: 'a lot of', explanation: 'Chairs — исчисляемое мн.ч. → a lot of.', points: 1 },
  { id: 'english-q371', topicId: 'english-29', text: 'I need ___ information about the course.', type: 'choice', options: ['a', 'an', 'some', 'many'], correctAnswer: 'some', explanation: 'Information — неисчисляемое → some (не a/an, не many).', points: 1 },
  { id: 'english-q372', topicId: 'english-29', text: 'She bought ___ new furniture for her apartment.', type: 'input', correctAnswer: 'some', explanation: 'Furniture — неисчисляемое → some.', points: 1 },
  { id: 'english-q373', topicId: 'english-29', text: 'Translate to English: "У меня мало времени на подготовку."', type: 'input', correctAnswer: 'I have little time to prepare.', explanation: 'Time — неисчисляемое. Little = мало (отрицательный оттенок).', points: 1 },
  { id: 'english-q374', topicId: 'english-29', text: 'How ___ apples do we need?', type: 'choice', options: ['much', 'many', 'a little', 'little'], correctAnswer: 'many', explanation: 'Apples — исчисляемое мн.ч. → many.', points: 1 },

  // Topic 30: Quantifiers (additional)
  { id: 'english-q375', topicId: 'english-30', text: 'There is ___ hope. Don\'t give up!', type: 'choice', options: ['a few', 'few', 'a little', 'little'], correctAnswer: 'a little', explanation: 'Hope — неисчисляемое. "Don\'t give up" — есть надежда → a little.', points: 1 },
  { id: 'english-q376', topicId: 'english-30', text: 'We don\'t have ___ sugar.', type: 'choice', options: ['many', 'a few', 'much', 'few'], correctAnswer: 'much', explanation: 'Sugar — неисчисляемое → much.', points: 1 },
  { id: 'english-q377', topicId: 'english-30', text: 'I\'ve read ___ books this year.', type: 'choice', options: ['much', 'little', 'several', 'a little'], correctAnswer: 'several', explanation: 'Books — исчисляемое мн.ч. → several (несколько).', points: 1 },
  { id: 'english-q378', topicId: 'english-30', text: 'She has ___ friends. She is very lonely.', type: 'input', correctAnswer: 'few', explanation: 'Friends — исчисляемое. She is lonely → мало, отрицательно → few.', points: 1 },
  { id: 'english-q379', topicId: 'english-30', text: 'Translate to English: "У меня есть несколько идей."', type: 'input', correctAnswer: 'I have a few ideas.', explanation: 'Ideas — исчисляемое мн.ч. A few = несколько (положительно).', points: 1 },
  { id: 'english-q380', topicId: 'english-30', text: 'Would you like ___ tea?', type: 'choice', options: ['any', 'some', 'much', 'many'], correctAnswer: 'some', explanation: 'Предложение (Would you like) → some.', points: 1 },

  // Topic 31: Pronouns (additional)
  { id: 'english-q381', topicId: 'english-31', text: 'The cat is hungry. Give ___ some food.', type: 'choice', options: ['it', 'its', 'it\'s', 'itself'], correctAnswer: 'it', explanation: 'Объектное местоимение для it → it.', points: 1 },
  { id: 'english-q382', topicId: 'english-31', text: '___ is a beautiful day today.', type: 'choice', options: ['It', 'Its', 'It\'s', 'This'], correctAnswer: 'It', explanation: 'It — подлежащее для описания погоды.', points: 1 },
  { id: 'english-q383', topicId: 'english-31', text: '___ car is faster than ___.', type: 'choice', options: ['My / your', 'Mine / yours', 'I / you', 'Me / you'], correctAnswer: 'My / your', explanation: 'Перед существительным → притяжательное прилагательное: my, your.', points: 1 },
  { id: 'english-q384', topicId: 'english-31', text: 'She taught ___ French.', type: 'input', correctAnswer: 'herself', explanation: 'Возвратное местоимение: she → herself.', points: 1 },
  { id: 'english-q385', topicId: 'english-31', text: 'Translate to English: "Этот телефон — мой."', type: 'input', correctAnswer: 'This phone is mine.', explanation: 'Притяжательное местоимение (самостоятельное) → mine.', points: 1 },
  { id: 'english-q386', topicId: 'english-31', text: 'Everyone should do ___ best.', type: 'choice', options: ['his', 'their', 'her', 'its'], correctAnswer: 'their', explanation: 'Everyone — неопределённое местоимение → their (современный вариант).', points: 1 },

  // Topic 32: Conjunctions (additional)
  { id: 'english-q387', topicId: 'english-32', text: 'She was tired, ___ she kept working.', type: 'choice', options: ['so', 'but', 'because', 'although'], correctAnswer: 'but', explanation: 'Контраст (устала, но продолжала) → but.', points: 1 },
  { id: 'english-q388', topicId: 'english-32', text: 'I\'ll wait ___ you come back.', type: 'choice', options: ['until', 'because', 'although', 'so'], correctAnswer: 'until', explanation: 'Until = до тех пор пока.', points: 1 },
  { id: 'english-q389', topicId: 'english-32', text: '___ she is very busy, she always finds time for her family.', type: 'choice', options: ['Because', 'Although', 'So', 'But'], correctAnswer: 'Although', explanation: 'Уступка → although.', points: 1 },
  { id: 'english-q390', topicId: 'english-32', text: 'I stayed at home ___ I was feeling ill.', type: 'input', correctAnswer: 'because', explanation: 'Причина → because.', points: 1 },
  { id: 'english-q391', topicId: 'english-32', text: 'Translate to English: "Мы не пойдём на прогулку, если не прекратится дождь."', type: 'input', correctAnswer: "We won't go for a walk unless the rain stops.", explanation: 'Unless = если не.', points: 1 },
  { id: 'english-q392', topicId: 'english-32', text: 'Not only ___ she smart, but she is also very kind.', type: 'choice', options: ['is', 'does', 'was', 'has'], correctAnswer: 'is', explanation: 'Not only ... but also — инверсия после not only: is she.', points: 1 },

  // Topic 33: Question tags (additional)
  { id: 'english-q393', topicId: 'english-33', text: 'They won\'t be late, ___?', type: 'choice', options: ['won\'t they', 'will they', 'aren\'t they', 'are they'], correctAnswer: 'will they', explanation: 'Отрицание (won\'t) → утвердительный тег: will they?', points: 1 },
  { id: 'english-q394', topicId: 'english-33', text: 'You can swim, ___?', type: 'choice', options: ['can\'t you', 'don\'t you', 'aren\'t you', 'won\'t you'], correctAnswer: 'can\'t you', explanation: 'Утверждение (can) → отрицательный тег: can\'t you?', points: 1 },
  { id: 'english-q395', topicId: 'english-33', text: 'There is a problem, ___?', type: 'choice', options: ['isn\'t it', 'is there', 'isn\'t there', 'are there'], correctAnswer: 'isn\'t there', explanation: 'There is → отрицательный тег: isn\'t there?', points: 1 },
  { id: 'english-q396', topicId: 'english-33', text: 'She has finished her work, ___?', type: 'input', correctAnswer: "hasn't she", explanation: 'Утверждение (has) → отрицательный тег: hasn\'t she?', points: 1 },
  { id: 'english-q397', topicId: 'english-33', text: 'Translate to English: "Он студент, не так ли?"', type: 'input', correctAnswer: "He is a student, isn't he?", explanation: 'Утверждение → отрицательный тег.', points: 1 },
  { id: 'english-q398', topicId: 'english-33', text: 'Nobody told you, ___?', type: 'choice', options: ['didn\'t they', 'did they', 'wasn\'t it', 'was it'], correctAnswer: 'did they', explanation: 'Nobody — отрицание → утвердительный тег: did they?', points: 1 },

  // Topic 34: Indirect questions (additional)
  { id: 'english-q399', topicId: 'english-34', text: 'Could you tell me what time ___?', type: 'choice', options: ['does the train leave', 'the train leaves', 'the train does leave', 'is the train leaving'], correctAnswer: 'the train leaves', explanation: 'Косвенный вопрос: S + V (без инверсии).', points: 1 },
  { id: 'english-q400', topicId: 'english-34', text: 'Do you know ___ she lives?', type: 'choice', options: ['where does', 'where', 'that', 'what'], correctAnswer: 'where', explanation: 'Wh-вопрос в косвенной форме: where she lives (S + V).', points: 1 },
  { id: 'english-q401', topicId: 'english-34', text: 'I\'d like to know ___ he is coming.', type: 'choice', options: ['that', 'if', 'what', 'how'], correctAnswer: 'if', explanation: 'Yes/No вопрос → if/whether.', points: 1 },
  { id: 'english-q402', topicId: 'english-34', text: 'Can you tell me how much ___?', type: 'input', correctAnswer: 'it costs', explanation: 'Косвенный вопрос: how much + S + V (без инверсии).', points: 1 },
  { id: 'english-q403', topicId: 'english-34', text: 'Translate to English: "Не могли бы вы сказать мне, где находится библиотека?"', type: 'input', correctAnswer: 'Could you tell me where the library is?', explanation: 'Косвенный вопрос: where + S + V (без инверсии).', points: 1 },
  { id: 'english-q404', topicId: 'english-34', text: 'I wonder ___ is the best choice.', type: 'choice', options: ['what', 'that', 'whether', 'how does'], correctAnswer: 'what', explanation: 'Косвенный вопрос: what + S + V (без инверсии).', points: 1 },

  // Topic 35: Used to / Would (additional)
  { id: 'english-q405', topicId: 'english-35', text: 'She ___ live in the countryside, but now she lives in the city.', type: 'choice', options: ['would', 'used to', 'is used to', 'was used to'], correctAnswer: 'used to', explanation: 'Состояние (жить) в прошлом → used to. Would нельзя для состояний.', points: 1 },
  { id: 'english-q406', topicId: 'english-35', text: 'He ___ smoke when he was young. Now he doesn\'t.', type: 'choice', options: ['used to', 'is used to', 'would', 'was using'], correctAnswer: 'used to', explanation: 'Привычка в прошлом → used to.', points: 1 },
  { id: 'english-q407', topicId: 'english-35', text: 'When I was a child, I ___ read bedtime stories every night.', type: 'choice', options: ['used to', 'would', 'was used to', 'am used to'], correctAnswer: 'would', explanation: 'Повторяющееся действие в прошлом (каждую ночь) → would.', points: 1 },
  { id: 'english-q408', topicId: 'english-35', text: 'I am not ___ waking up early. It\'s so hard!', type: 'input', correctAnswer: 'used to', explanation: 'Be used to + V-ing = привыкнуть к чему-то. Am not used to = не привыкла.', points: 1 },
  { id: 'english-q409', topicId: 'english-35', text: 'Translate to English: "Раньше я бегал каждое утро, но сейчас нет."', type: 'input', correctAnswer: 'I used to run every morning, but now I don\'t.', explanation: 'Привычка в прошлом → used to + V.', points: 1 },
  { id: 'english-q410', topicId: 'english-35', text: 'Did you ___ play computer games?', type: 'choice', options: ['use to', 'used to', 'are used to', 'were used to'], correctAnswer: 'use to', explanation: 'В вопросе с did → use to (без -d).', points: 1 },

  // Topic 36: Wish clauses (additional)
  { id: 'english-q411', topicId: 'english-36', text: 'I wish it ___ (not/rain) tomorrow.', type: 'choice', options: ['doesn\'t rain', 'didn\'t rain', 'won\'t rain', 'wouldn\'t rain'], correctAnswer: 'didn\'t rain', explanation: 'Wish + Past Simple — о настоящем/будущем.', points: 1 },
  { id: 'english-q412', topicId: 'english-36', text: 'I wish I ___ (be) taller.', type: 'choice', options: ['am', 'was', 'were', 'would be'], correctAnswer: 'were', explanation: 'Wish + Past Simple. Формальный вариант: were.', points: 1 },
  { id: 'english-q413', topicId: 'english-36', text: 'She wishes she ___ (come) to the party last night.', type: 'choice', options: ['came', 'had come', 'has come', 'would come'], correctAnswer: 'had come', explanation: 'Wish + Past Perfect — сожаление о прошлом.', points: 1 },
  { id: 'english-q414', topicId: 'english-36', text: 'I wish you ___ (stop) being so lazy.', type: 'input', correctAnswer: 'would stop', explanation: 'Wish + would — желание изменить поведение другого человека.', points: 1 },
  { id: 'english-q415', topicId: 'english-36', text: 'Translate to English: "Жаль, что я не купил тот билет."', type: 'input', correctAnswer: "I wish I had bought that ticket.", explanation: 'Сожаление о прошлом → wish + Past Perfect.', points: 1 },
  { id: 'english-q416', topicId: 'english-36', text: 'I wish I ___ speak French.', type: 'choice', options: ['can', 'could', 'may', 'might'], correctAnswer: 'could', explanation: 'Wish + could — желание иметь способность.', points: 1 },

  // Topic 37: So / Such / Enough / Too (additional)
  { id: 'english-q417', topicId: 'english-37', text: 'She is ___ talented musician.', type: 'choice', options: ['so', 'such', 'too', 'very'], correctAnswer: 'such', explanation: 'Such + a/an + Adj + N → such a talented musician.', points: 1 },
  { id: 'english-q418', topicId: 'english-37', text: 'The coffee is ___ hot to drink.', type: 'choice', options: ['so', 'such', 'too', 'enough'], correctAnswer: 'too', explanation: 'Too + Adj — слишком горячий.', points: 1 },
  { id: 'english-q419', topicId: 'english-37', text: 'He is ___ young to vote.', type: 'choice', options: ['so', 'such', 'too', 'enough'], correctAnswer: 'too', explanation: 'Too + Adj — слишком молод.', points: 1 },
  { id: 'english-q420', topicId: 'english-37', text: 'She is experienced ___ to do the job.', type: 'input', correctAnswer: 'enough', explanation: 'Adj + enough — достаточно опытная.', points: 1 },
  { id: 'english-q421', topicId: 'english-37', text: 'Translate to English: "Он такой умный парень!"', type: 'input', correctAnswer: 'He is such a smart guy!', explanation: 'Such + a/an + Adj + N.', points: 1 },
  { id: 'english-q422', topicId: 'english-37', text: 'She spoke ___ quickly ___ nobody could understand.', type: 'choice', options: ['such ... that', 'so ... that', 'too ... to', 'enough ... to'], correctAnswer: 'so ... that', explanation: 'So + Adj/Adv + that — настолько...что.', points: 1 },

  // Topic 38: Essay writing — structure (additional)
  { id: 'english-q423', topicId: 'english-38', text: 'Which phrase is best for expressing your own opinion in an essay?', type: 'choice', options: ['Some people think...', 'For example...', 'In my opinion...', 'On the other hand...'], correctAnswer: 'In my opinion...', explanation: 'In my opinion — выражение личного мнения.', points: 1 },
  { id: 'english-q424', topicId: 'english-38', text: 'What should you include in the conclusion of an essay?', type: 'choice', options: ['New arguments', 'A summary of your main points', 'Personal information', 'A question to the reader'], correctAnswer: 'A summary of your main points', explanation: 'Заключение — краткий итог основных моментов.', points: 1 },
  { id: 'english-q425', topicId: 'english-38', text: 'Which phrase introduces the second opinion in an essay?', type: 'choice', options: ['Firstly,', 'In my opinion,', 'On the other hand,', 'In conclusion,'], correctAnswer: 'On the other hand,', explanation: 'On the other hand — вводит противоположное мнение.', points: 1 },
  { id: 'english-q426', topicId: 'english-38', text: 'What is the best way to start an essay introduction?', type: 'input', correctAnswer: 'Nowadays, the issue of ... is widely discussed.', explanation: 'Введение — переформулировка темы.', points: 1 },
  { id: 'english-q427', topicId: 'english-38', text: 'Translate to English: "Подводя итог, я считаю, что образование очень важно."', type: 'input', correctAnswer: 'In conclusion, I believe that education is very important.', explanation: 'Заключение: In conclusion + личное мнение.', points: 1 },
  { id: 'english-q428', topicId: 'english-38', text: 'How many words should each body paragraph in an essay contain?', type: 'choice', options: ['20-30', '50-60', '80-100', '100-120'], correctAnswer: '50-60', explanation: 'Основные абзацы — ~50-60 слов каждый.', points: 1 },

  // Topic 39: Essay writing — arguments (additional)
  { id: 'english-q429', topicId: 'english-39', text: 'Which phrase gives an example in an essay?', type: 'choice', options: ['Therefore,', 'However,', 'For instance,', 'In addition,'], correctAnswer: 'For instance,', explanation: 'For instance = например.', points: 1 },
  { id: 'english-q430', topicId: 'english-39', text: 'Which phrase shows a result or consequence?', type: 'choice', options: ['On the other hand,', 'Moreover,', 'As a result,', 'Firstly,'], correctAnswer: 'As a result,', explanation: 'As a result = в результате.', points: 1 },
  { id: 'english-q431', topicId: 'english-39', text: 'A strong argument should include:', type: 'choice', options: ['Only your opinion', 'A statement, explanation, and example', 'Just a question', 'A famous quote only'], correctAnswer: 'A statement, explanation, and example', explanation: 'Сильный аргумент: утверждение + объяснение + пример.', points: 1 },
  { id: 'english-q432', topicId: 'english-39', text: 'Which sentence is a strong argument?', type: 'input', correctAnswer: 'Studies show that regular exercise improves mental health.', explanation: 'Конкретное утверждение с примером — сильный аргумент.', points: 1 },
  { id: 'english-q433', topicId: 'english-39', text: 'Translate to English: "Более того, чтение развивает воображение."', type: 'input', correctAnswer: 'Moreover, reading develops imagination.', explanation: 'Moreover = более того (дополнительный аргумент).', points: 1 },
  { id: 'english-q434', topicId: 'english-39', text: 'Which phrase introduces a contrasting argument?', type: 'choice', options: ['Furthermore,', 'However,', 'For example,', 'In conclusion,'], correctAnswer: 'However,', explanation: 'However = однако (контраст).', points: 1 },

  // Topic 40: Letter writing — personal (additional)
  { id: 'english-q435', topicId: 'english-40', text: 'Which opening line is appropriate for a personal letter?', type: 'choice', options: ['I am writing to inform you...', 'Thanks for your letter!', 'Dear Sir/Madam,', 'I would like to apply...'], correctAnswer: 'Thanks for your letter!', explanation: 'Личное письмо → благодарность за письмо друга.', points: 1 },
  { id: 'english-q436', topicId: 'english-40', text: 'In a personal letter, you should answer:', type: 'choice', options: ['2 questions', '3 questions', '4 questions', '5 questions'], correctAnswer: '3 questions', explanation: 'На ЕГЭ нужно ответить на все 3 вопроса из письма.', points: 1 },
  { id: 'english-q437', topicId: 'english-40', text: 'Which closing line is appropriate for a personal letter?', type: 'choice', options: ['Yours faithfully,', 'I look forward to hearing from you.', 'Write back soon!', 'To whom it may concern,'], correctAnswer: 'Write back soon!', explanation: 'Неформальная концовка для личного письма.', points: 1 },
  { id: 'english-q438', topicId: 'english-40', text: 'What should follow after the greeting in a personal letter?', type: 'input', correctAnswer: 'Thanks for your letter', explanation: 'После приветствия — благодарность за письмо.', points: 1 },
  { id: 'english-q439', topicId: 'english-40', text: 'Translate to English: "Спасибо за письмо! Мне было приятно его получить."', type: 'input', correctAnswer: 'Thanks for your letter! It was great to hear from you.', explanation: 'Начало личного письма.', points: 1 },
  { id: 'english-q440', topicId: 'english-40', text: 'Which phrase introduces questions to your friend?', type: 'choice', options: ['You asked me about...', 'By the way, have you ever been to...?', 'Sorry I haven\'t written...', 'Thanks for your letter!'], correctAnswer: 'By the way, have you ever been to...?', explanation: 'By the way — переход к вопросам другу.', points: 1 },

  // Topic 41: Letter writing — formal (additional)
  { id: 'english-q441', topicId: 'english-41', text: 'Which phrase states the purpose of a formal letter?', type: 'choice', options: ['I wanted to tell you...', 'I am writing to inquire about...', 'Hey, I have a problem...', 'Can you help me?'], correctAnswer: 'I am writing to inquire about...', explanation: 'Формальная фраза для указания цели письма.', points: 1 },
  { id: 'english-q442', topicId: 'english-41', text: 'After "Dear Mr. Smith," the correct sign-off is:', type: 'choice', options: ['Yours faithfully,', 'Yours sincerely,', 'Best wishes,', 'Love,'], correctAnswer: 'Yours sincerely,', explanation: 'Dear Mr. X → Yours sincerely.', points: 1 },
  { id: 'english-q443', topicId: 'english-41', text: 'Which contraction is NOT suitable for a formal letter?', type: 'choice', options: ['I am', 'I will', 'I\'m', 'I would'], correctAnswer: 'I\'m', explanation: 'В формальном письме без сокращений: I am, не I\'m.', points: 1 },
  { id: 'english-q444', topicId: 'english-41', text: 'What is the correct opening for a formal complaint?', type: 'input', correctAnswer: 'I am writing to complain about', explanation: 'Формальная фраза для жалобы.', points: 1 },
  { id: 'english-q445', topicId: 'english-41', text: 'Translate to English: "Я был бы признателен, если бы вы могли ответить в ближайшее время."', type: 'input', correctAnswer: 'I would be grateful if you could respond at your earliest convenience.', explanation: 'Формальная просьба.', points: 1 },
  { id: 'english-q446', topicId: 'english-41', text: 'Which phrase is appropriate for a formal request?', type: 'choice', options: ['Can you send me...?', 'I would be grateful if you could...', 'Send me... now!', 'I need you to...'], correctAnswer: 'I would be grateful if you could...', explanation: 'Формальная просьба → I would be grateful if you could.', points: 1 },

  // Topic 42: Listening strategies (additional)
  { id: 'english-q447', topicId: 'english-42', text: 'What is the best approach when you miss a word while listening?', type: 'choice', options: ['Stop the tape', 'Guess from context and move on', 'Write down every word', 'Close your eyes'], correctAnswer: 'Guess from context and move on', explanation: 'Догадывайтесь из контекста и продолжайте — не засиживайтесь.', points: 1 },
  { id: 'english-q448', topicId: 'english-42', text: 'In listening task 1, each speaker has:', type: 'choice', options: ['Two statements', 'One matching statement', 'Three statements', 'No statements'], correctAnswer: 'One matching statement', explanation: 'В задании 1 у каждого говорящего — одно соответствие.', points: 1 },
  { id: 'english-q449', topicId: 'english-42', text: 'What should you do if you\'re not sure about an answer?', type: 'choice', options: ['Leave it blank', 'Guess — no penalty for wrong answers', 'Ask the examiner', 'Change it later'], correctAnswer: 'Guess — no penalty for wrong answers', explanation: 'На ЕГЭ нет штрафа за ошибки — всегда угадывайте.', points: 1 },
  { id: 'english-q450', topicId: 'english-42', text: 'Key word in a listening question is usually:', type: 'input', correctAnswer: 'synonym', explanation: 'Ответы в тексте часто — синонимы слов из задания.', points: 1 },
  { id: 'english-q451', topicId: 'english-42', text: 'Translate to English: "Обращайте внимание на отрицания."', type: 'input', correctAnswer: 'Pay attention to negations.', explanation: 'Negations (not, never) меняют смысл.', points: 1 },
  { id: 'english-q452', topicId: 'english-42', text: 'How many tasks are in the listening section of the EGE?', type: 'choice', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: 'Аудирование: задания 1, 2 и 3.', points: 1 },

  // Topic 43: Reading strategies (additional)
  { id: 'english-q453', topicId: 'english-43', text: 'In task 4 (gap filling), you should look for:', type: 'choice', options: ['The shortest sentence', 'Linking words (however, therefore)', 'The longest sentence', 'Words you know'], correctAnswer: 'Linking words (however, therefore)', explanation: 'Связующие слова помогают найти правильное предложение.', points: 1 },
  { id: 'english-q454', topicId: 'english-43', text: 'How many extra headings are there in task 6?', type: 'choice', options: ['None', 'One', 'Two', 'Three'], correctAnswer: 'One', explanation: '8 заголовков на 7 абзацев — один лишний.', points: 1 },
  { id: 'english-q455', topicId: 'english-43', text: 'When reading, you should:', type: 'choice', options: ['Translate every word', 'Read the questions first, then the text', 'Skip the title', 'Read very slowly'], correctAnswer: 'Read the questions first, then the text', explanation: 'Сначала вопросы, потом текст — эффективная стратегия.', points: 1 },
  { id: 'english-q456', topicId: 'english-43', text: 'In task 5, answers to questions usually follow:', type: 'input', correctAnswer: 'the order of the text', explanation: 'Ответы идут в порядке следования информации в тексте.', points: 1 },
  { id: 'english-q457', topicId: 'english-43', text: 'Translate to English: "Не тратьте время на незнакомые слова."', type: 'input', correctAnswer: "Don't waste time on unknown words.", explanation: 'Стратегия: догадывайтесь из контекста.', points: 1 },
  { id: 'english-q458', topicId: 'english-43', text: 'Time management for reading section is approximately:', type: 'choice', options: ['10 minutes', '20 minutes', '30 minutes', '40 minutes'], correctAnswer: '30 minutes', explanation: 'На чтение — ~30 минут (3 задания по ~10 минут).', points: 1 },

  // Topic 44: Synonyms and antonyms (additional)
  { id: 'english-q459', topicId: 'english-44', text: 'What is a synonym for "difficult"?', type: 'choice', options: ['easy', 'simple', 'challenging', 'clear'], correctAnswer: 'challenging', explanation: 'Challenging = difficult (сложный).', points: 1 },
  { id: 'english-q460', topicId: 'english-44', text: 'What is an antonym for "brave"?', type: 'choice', options: ['strong', 'cowardly', 'courageous', 'bold'], correctAnswer: 'cowardly', explanation: 'Cowardly — противоположность brave (храбрый).', points: 1 },
  { id: 'english-q461', topicId: 'english-44', text: 'Which prefix makes "agree" an antonym?', type: 'choice', options: ['un-', 'dis-', 'mis-', 're-'], correctAnswer: 'dis-', explanation: 'Disagree = не соглашаться.', points: 1 },
  { id: 'english-q462', topicId: 'english-44', text: 'What is a synonym for "famous"?', type: 'input', correctAnswer: 'well-known', explanation: 'Well-known = famous (известный).', points: 1 },
  { id: 'english-q463', topicId: 'english-44', text: 'Translate to English: "Синоним слова \'small\' — \'little\'."', type: 'input', correctAnswer: "The synonym of 'small' is 'little'.", explanation: 'Small = little (маленький).', points: 1 },
  { id: 'english-q464', topicId: 'english-44', text: 'What is an antonym for "ancient"?', type: 'choice', options: ['old', 'modern', 'historical', 'classic'], correctAnswer: 'modern', explanation: 'Modern — противоположность ancient (древний).', points: 1 },

  // Topic 45: Idioms (additional)
  { id: 'english-q465', topicId: 'english-45', text: 'What does "break the ice" mean?', type: 'choice', options: ['To destroy ice', 'To start a conversation in a social situation', 'To cool down', 'To be cold'], correctAnswer: 'To start a conversation in a social situation', explanation: 'Break the ice = разрядить обстановку, начать разговор.', points: 1 },
  { id: 'english-q466', topicId: 'english-45', text: 'What does "bite the bullet" mean?', type: 'choice', options: ['To eat something hard', 'To face something difficult bravely', 'To be angry', 'To speak loudly'], correctAnswer: 'To face something difficult bravely', explanation: 'Bite the bullet = собраться с духом, мужественно справиться.', points: 1 },
  { id: 'english-q467', topicId: 'english-45', text: 'What does "spill the beans" mean?', type: 'choice', options: ['To drop beans', 'To reveal a secret', 'To cook', 'To be clumsy'], correctAnswer: 'To reveal a secret', explanation: 'Spill the beans = выдать секрет.', points: 1 },
  { id: 'english-q468', topicId: 'english-45', text: 'What does "go the extra mile" mean?', type: 'input', correctAnswer: 'to do more than expected', explanation: 'Go the extra mile = сделать больше, чем ожидалось.', points: 1 },
  { id: 'english-q469', topicId: 'english-45', text: 'Translate to English: "Это было очень легко — прямая задача."', type: 'input', correctAnswer: "It was a piece of cake.", explanation: 'A piece of cake = что-то очень лёгкое.', points: 1 },
  { id: 'english-q470', topicId: 'english-45', text: 'What does "the ball is in your court" mean?', type: 'choice', options: ['You are playing tennis', 'It is your decision or turn to act', 'You are in a gym', 'You lost the game'], correctAnswer: 'It is your decision or turn to act', explanation: 'The ball is in your court = твой ход, твоё решение.', points: 1 },

  // Topic 46: Homophones and homonyms (additional)
  { id: 'english-q471', topicId: 'english-46', text: 'Choose: "___ is a nice restaurant." / "___ going to rain."', type: 'choice', options: ['There / Its', 'Their / It\'s', 'They\'re / It\'s', 'There / It\'s'], correctAnswer: 'There / It\'s', explanation: 'There = там. It\'s = it is.', points: 1 },
  { id: 'english-q472', topicId: 'english-46', text: 'Choose: "I need to ___ some money." / "The ___ was very kind."', type: 'choice', options: ['hear / here', 'buy / by', 'know / no', 'write / right'], correctAnswer: 'know / no', explanation: 'Know = знать. No = нет.', points: 1 },
  { id: 'english-q473', topicId: 'english-46', text: 'Choose the correct form: "___ coming to the party?"', type: 'choice', options: ['Your', 'You\'re', 'Yours', 'Youre'], correctAnswer: 'You\'re', explanation: 'You\'re = you are.', points: 1 },
  { id: 'english-q474', topicId: 'english-46', text: 'The cat licked ___ paw.', type: 'input', correctAnswer: 'its', explanation: 'Its = притяжательное (без апострофа).', points: 1 },
  { id: 'english-q475', topicId: 'english-46', text: 'Translate to English: "Их дом там, где мы видели огоньки."', type: 'input', correctAnswer: 'Their house is there where we saw the lights.', explanation: 'Their = их. There = там.', points: 1 },
  { id: 'english-q476', topicId: 'english-46', text: 'Choose: "___ should be here by now." / "I ___ think so."', type: 'choice', options: ['Their / don\'t', 'There / don\'t', 'They\'re / doesn\'t', 'There / doesn\'t'], correctAnswer: 'There / don\'t', explanation: 'There (там) should be... / I don\'t think so.', points: 1 },

  // Topic 47: Spelling rules (additional)
  { id: 'english-q477', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['seperate', 'separate', 'separat', 'sepirate'], correctAnswer: 'separate', explanation: 'Separate: -par-, не -per-.', points: 1 },
  { id: 'english-q478', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['beleive', 'believe', 'beleve', 'believ'], correctAnswer: 'believe', explanation: 'Believe: i before e except after c.', points: 1 },
  { id: 'english-q479', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['goverment', 'government', 'govermant', 'govurnment'], correctAnswer: 'government', explanation: 'Government: n между r и m.', points: 1 },
  { id: 'english-q480', topicId: 'english-47', text: 'Which spelling is correct?', type: 'input', correctAnswer: 'independent', explanation: 'Independent: -ent, не -ant.', points: 1 },
  { id: 'english-q481', topicId: 'english-47', text: 'Translate to English: "Необходимость — правильное написание."', type: 'input', correctAnswer: "Necessary is the correct spelling.", explanation: 'Necessary: одна c, две s.', points: 1 },
  { id: 'english-q482', topicId: 'english-47', text: 'Which spelling is correct?', type: 'choice', options: ['untill', 'until', 'untilll', 'untile'], correctAnswer: 'until', explanation: 'Until: одна l.', points: 1 },

  // Topic 48: Punctuation (additional)
  { id: 'english-q483', topicId: 'english-48', text: 'Which sentence is punctuated correctly?', type: 'choice', options: ['She said "hello"', 'She said, "Hello."', 'She said "Hello."', 'She, said "Hello."'], correctAnswer: 'She said, "Hello."', explanation: 'Прямая речь: запятая перед кавычками.', points: 1 },
  { id: 'english-q484', topicId: 'english-48', text: 'Which uses an apostrophe correctly?', type: 'choice', options: ['The dogs toy', 'The dog\'s toy', 'The dogs\' toy', 'The dog toy\'s'], correctAnswer: 'The dog\'s toy', explanation: 'Притяжательный падеж: dog\'s (одна собака).', points: 1 },
  { id: 'english-q485', topicId: 'english-48', text: 'Choose the correct punctuation: "___ of course ___ she agreed."', type: 'choice', options: ['Of course, she agreed.', 'Of course she agreed.', 'Of, course she agreed.', 'Of course; she agreed.'], correctAnswer: 'Of course, she agreed.', explanation: 'Вводная фраза → запятая после неё.', points: 1 },
  { id: 'english-q486', topicId: 'english-48', text: 'I went to the shop ___ bought some milk.', type: 'input', correctAnswer: 'and', explanation: 'Союз and между двумя действиями.', points: 1 },
  { id: 'english-q487', topicId: 'english-48', text: 'Translate to English: "Детские игрушки стоят дорого."', type: 'input', correctAnswer: "The children's toys are expensive.", explanation: 'Children\'s = притяжательный падеж (мн.ч.).', points: 1 },
  { id: 'english-q488', topicId: 'english-48', text: 'Which sentence correctly uses a semicolon?', type: 'choice', options: ['I like tea; and coffee.', 'I like tea; however, she prefers coffee.', 'I; like tea and coffee.', 'I like; tea and coffee.'], correctAnswer: 'I like tea; however, she prefers coffee.', explanation: 'Точка с запятой перед however.', points: 1 },

  // Topic 49: Common mistakes (additional)
  { id: 'english-q489', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['He don\'t like coffee.', 'He doesn\'t likes coffee.', 'He doesn\'t like coffee.', 'He not like coffee.'], correctAnswer: 'He doesn\'t like coffee.', explanation: 'He → doesn\'t + V (без -s).', points: 1 },
  { id: 'english-q490', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['I am very agree.', 'I very agree.', 'I agree very much.', 'I am agreeing very.'], correctAnswer: 'I agree very much.', explanation: 'Agree — глагол, не прилагательное. Нужен наречие much.', points: 1 },
  { id: 'english-q491', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['She made a homework.', 'She did a homework.', 'She did her homework.', 'She made her homework.'], correctAnswer: 'She did her homework.', explanation: 'Do homework — устойчивое словосочетание.', points: 1 },
  { id: 'english-q492', topicId: 'english-49', text: 'Which sentence is correct?', type: 'input', correctAnswer: 'I am going home.', explanation: 'Home без предлога to: go home, not go to home.', points: 1 },
  { id: 'english-q493', topicId: 'english-49', text: 'Translate to English: "Он не прав."', type: 'input', correctAnswer: 'He is not right.', explanation: 'He is not right (не He is wrong, если хотим сказать "не прав").', points: 1 },
  { id: 'english-q494', topicId: 'english-49', text: 'Which sentence is correct?', type: 'choice', options: ['I have 25 years.', 'I have 25 years old.', 'I am 25 years old.', 'I am 25 years.'], correctAnswer: 'I am 25 years old.', explanation: 'В английском: I am ... years old (не I have).', points: 1 },

  // Topic 50: Exam strategies (additional)
  { id: 'english-q495', topicId: 'english-50', text: 'How many parts does the written section of the EGE have?', type: 'choice', options: ['2', '3', '4', '5'], correctAnswer: '3', explanation: 'Письменная часть: грамматика и лексика + личное письмо + эссе.', points: 1 },
  { id: 'english-q496', topicId: 'english-50', text: 'What is the recommended time for task 4-6 (reading)?', type: 'choice', options: ['10 minutes', '20 minutes', '30 minutes', '40 minutes'], correctAnswer: '30 minutes', explanation: 'На чтение (задания 4-6) — ~30 минут.', points: 1 },
  { id: 'english-q497', topicId: 'english-50', text: 'Which task type is the hardest according to most students?', type: 'choice', options: ['Listening', 'Reading', 'Word formation (task 8)', 'Essay writing'], correctAnswer: 'Word formation (task 8)', explanation: 'Задание 8 (словообразование) считается самым сложным.', points: 1 },
  { id: 'english-q498', topicId: 'english-50', text: 'What should you do first in task 7?', type: 'input', correctAnswer: 'determine the part of speech', explanation: 'Сначала определите, какая часть речи нужна.', points: 1 },
  { id: 'english-q499', topicId: 'english-50', text: 'Translate to English: "Высыпайтесь перед экзаменом."', type: 'input', correctAnswer: 'Get enough sleep before the exam.', explanation: 'Совет для экзамена.', points: 1 },
  { id: 'english-q500', topicId: 'english-50', text: 'How many total questions are in tasks 7-9 combined?', type: 'choice', options: ['14', '21', '28', '35'], correctAnswer: '21', explanation: 'Задания 7, 8, 9 — по 7 вопросов = 21 вопрос.', points: 1 }
];
