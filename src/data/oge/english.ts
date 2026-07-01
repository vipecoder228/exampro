import type { Topic, Question } from '../../types';

export const englishTopics: Topic[] = [
  // ==================== 1. Грамматика. Артикли ====================
  {
    id: 'oge-english-1',
    subjectId: 'english',
    title: 'Грамматика. Артикли',
    description: 'Артикли a, an, the, нулевой артикль',
    content: `## Грамматика. Артикли

### Неопределённый артикль

- a — перед согласным звуком: a book, a cat
- an — перед гласным звуком: an apple, an hour

Используется:
- При первом упоминании: I saw a cat.
- Для обозначения любого: A doctor should be patient.
- В выражениях: a lot of, a few, a little

### Определённый артикль

the — используется:
- При повторном упоминании: I saw a cat. The cat was black.
- Когда объект единственный: the sun, the moon
- С превосходными степенями: the best student
- С указательными местоимениями: this, that, those, these

### Нулевой артикль

Без артикля:
- С неисчисляемыми существительными в общем: Water is important.
- С именами собственными: London, Russia
- С множественным числом в общем: Dogs are loyal.

### Правила

- a university (не an, т.к. [ju:])
- an hour (h не произносится)
- the USA (артикль определённый)`,
    formulas: ['a + согласный', 'an + гласный', 'the = определённый'],
  },

  // ==================== 2. Грамматика. Существительные ====================
  {
    id: 'oge-english-2',
    subjectId: 'english',
    title: 'Грамматика. Существительные',
    description: 'Число существительных, исчисляемые и неисчисляемые',
    content: `## Грамматика. Существительные

### Исчисляемые

- Книга → книги (book → books)
- Ребёнок → дети (child → children)
- Нож → ножи (knife → knives)

### Неисчисляемые

- Вода, молоко, информация, совет

### Множественное число

- Обычное: +s (cats, dogs)
- После шипящих и свистящих: +es (boxes, dishes)
- Концовка -f → -ves (knife → knives, wife → wives)
- Неправильные: child → children, man → men, woman → women

### Исключения

- mouse → mice
- goose → geese
- foot → feet
- tooth → teeth

### Неисчисляемые существительные

- Much water, little time
- A piece of advice
- A glass of water`,
    formulas: ['book → books', 'child → children', 'knife → knives'],
  },

  // ==================== 3. Грамматика. Местоимения ====================
  {
    id: 'oge-english-3',
    subjectId: 'english',
    title: 'Грамматика. Местоимения',
    description: 'Личные, притяжательные, указательные, вопросительные',
    content: `## Грамматика. Местоимения

### Личные местоимения

I, you, he, she, it, we, they
Местоимение → Объектное: me, you, him, her, it, us, them

### Притяжательные

- Мой: my (your, his, her, its, our, their)
- Принадлежность: mine (yours, his, hers, its, ours, theirs)

### Указательные

- this (эта), that (та)
- these (эти), those (те)

### Вопросительные

- who (кто), what (что), which (какой)
- whose (чей), whom (кому)

### Неопределённые

- some (некоторые)
- any (любые, в вопр.)
- no (никакие)
- every (каждый)

### Взаимные

each other, one another

### Возвратные

myself, yourself, himself, herself, itself, ourselves, themselves`,
    formulas: ['I → me → my → mine', 'who (кто) → whom (кому)'],
  },

  // ==================== 4. Грамматика. Глаголы ====================
  {
    id: 'oge-english-4',
    subjectId: 'english',
    title: 'Грамматика. Глаголы',
    description: 'Времена глагола, модальные глаголы, залоги',
    content: `## Грамматика. Глаголы

### Простые времена

- Present Simple: I work (regular actions)
- Past Simple: I worked (completed past action)
- Future Simple: I will work (future action)

### Continuous

- Present Continuous: I am working (now)
- Past Continuous: I was working (at that moment)
- Future Continuous: I will be working

### Perfect

- Present Perfect: I have worked (experience/result)
- Past Perfect: I had worked (before another action)
- Future Perfect: I will have worked

### Модальные глаголы

- Can (уметь, мочь)
- Must (должен)
- Should (следует)
- May (мочь, разрешение)
- Have to (быть должен)

### Залоги

- Active: I write a letter.
- Passive: A letter is written (by me).

### Неправильные глаголы

- go → went → gone
- see → saw → seen
- take → took → taken
- write → wrote → written`,
    formulas: ['V+s (3 лицо)', 'V+ed (прошлый)', 'will + V (будущий)'],
  },

  // ==================== 5. Грамматика. Прилагательные и наречия ====================
  {
    id: 'oge-english-5',
    subjectId: 'english',
    title: 'Грамматика. Прилагательные и наречия',
    description: 'Степени сравнения, порядок слов',
    content: `## Грамматика. Прилагательные и наречия

### Степени сравнения

- положительная: big
- сравнительная: bigger (than)
- превосходная: the biggest

### Правила образования

- 1 слог: +er/est (tall → taller → tallest)
- 2 слога на -y:变y为i+er/est (happy → happier)
- 2+ слога: more/most (beautiful → more beautiful)

### Неправильные

- good → better → best
- bad → worse → worst
- little → less → least
- many → more → most
- far → farther/further → farthest/furthest

### Порядок слов

Opinion Size Age Shape Color Origin Material Purpose
(a beautiful small old round red Italian wooden dining table)

### Наречия

- Образ действия: quickly, slowly
- Время: always, often, sometimes
- Место: here, there`,
    formulas: ['big → bigger → biggest', 'good → better → best'],
  },

  // ==================== 6. Чтение ====================
  {
    id: 'oge-english-6',
    subjectId: 'english',
    title: 'Чтение',
    description: 'Стратегии чтения, понимание текста',
    content: `## Чтение

### Стратегии

- Skimming (быстрое чтение для общего понимания)
- Scanning (поиск конкретной информации)
- Close reading (внимательное чтение)

### Типы текстов

- Повествование (narrative)
- Описание (description)
- Рассуждение (argumentative)
- Информационный (informative)

### Чтение на понимание

- Main idea (основная мысль)
- Specific details (детали)
- Inference (вывод из текста)

### Советы

1. Читайте заголовок
2. Посмотрите на圖片
3. Прочитайте первый и последний абзацы
4. Ищите ключевые слова

### Время чтения

На ОГЭ: 40-50 минут на все задания чтения.`,
    formulas: [],
  },

  // ==================== 7. Письмо ====================
  {
    id: 'oge-english-7',
    subjectId: 'english',
    title: 'Письмо',
    description: 'Личное письмо, эссе, заполнение анкеты',
    content: `## Письмо

### Личное письмо

Формат:
1. Адрес
2. Дата
3. Обращение: Dear...
4. Текст (3-4 абзаца)
5. Завершение: Best wishes, Yours sincerely
6. Подпись

### Структура

- Introduction: purpose of writing
- Main body: details
- Conclusion: hopes/wishes

### Эссе

- Introduction + Thesis
- Body paragraphs (2-3 аргумента)
- Conclusion

### Заполнение анкеты

- Name, age, country
- Interests, family
- Plans

### Полезные фразы

- I am writing to tell you about...
- I would like to know...
- I am looking forward to hearing from you.

### Объём

- Письмо: 80-120 слов
- Эссе: 80-100 слов`,
    formulas: ['Dear..., Best wishes, Yours sincerely'],
  },

  // ==================== 8. Говорение ====================
  {
    id: 'oge-english-8',
    subjectId: 'english',
    title: 'Говорение',
    description: 'Устная речь, диалог, описание, монолог',
    content: `## Говорение

### Диалог

- Приветствие
- Знакомство
- Задачи по теме
- Завершение разговора

### Монолог

- Описание картинки
- Рассказ о себе
- Повествование

### Полезные фразы

- Hello! How are you?
- My name is...
- I'd like to tell you about...
- In my opinion...
- Thank you. Goodbye!

### Описание картинки

- What can you see?
- There is/are...
- In the foreground/background...
- The weather is...

### Время

На ОГЭ: 5-7 минут на каждый раздел.

### Советы

- Не молчите дольше 5 секунд
- Используйте разнообразную лексику
- Слушайте внимательно вопросы`,
    formulas: [],
  },

  // ==================== 9. Лексика. Тема «Семья» ====================
  {
    id: 'oge-english-9',
    subjectId: 'english',
    title: 'Лексика. Тема «Семья»',
    description: 'Члены семьи, домашние обязанности, отношения',
    content: `## Лексика. Тема «Семья»

### Члены семьи

- Mother, father
- Brother, sister
- Grandmother, grandfather
- Uncle, aunt
- Cousin
- Son, daughter
- Husband, wife

### Домашние обязанности

- To do the washing up (мыть посуду)
- To do the laundry (стирать)
- To do the shopping (покупать)
- To cook meals (готовить)
- To clean the house (убирать)

### Отношения

- We get along well.
- We have a lot in common.
- We help each other.

### Описание внешности

- Tall/short
- Thin/stout
- Blond/dark hair
- Blue/green eyes

### Характер

- Kind, friendly, helpful
- Strict, funny, clever`,
    formulas: [],
  },

  // ==================== 10. Лексика. Тема «Школа» ====================
  {
    id: 'oge-english-10',
    subjectId: 'english',
    title: 'Лексика. Тема «Школа»',
    description: 'Предметы, расписание, школьная жизнь',
    content: `## Лексика. Тема «Школа»

### Предметы

- Mathematics
- English, Russian
- Physics, Chemistry
- Biology
- History
- Geography
- Physical Education (PE)
- Art, Music

### Школьные принадлежности

- Pen, pencil
- Notebook
- Ruler
- Eraser
- Textbook
- Schoolbag

### Расписание

- Lesson (урок)
- Break (перемена)
- Homework (домашнее задание)
- Exam (экзамен)

### Школьная жизнь

- To attend lessons
- To do homework
- To get good marks
- To study hard

### Учителя

- Teacher
- Headteacher (директор)
- Form teacher (классный руководитель)`,
    formulas: [],
  },

  // ==================== 11. Лексика. Тема «Хобби» ====================
  {
    id: 'oge-english-11',
    subjectId: 'english',
    title: 'Лексика. Тема «Хобби»',
    description: 'Виды хобби, свободное время, спорт',
    content: `## Лексика. Тема «Хобби»

### Виды хобби

- Reading, drawing, singing
- Dancing, cooking
- Playing computer games
- Collecting things (marbles, stamps)
- Sports (football, basketball, swimming)

### Спорт

- To go in for sports
- To play football/basketball
- To go swimming/running
- To watch football matches

### Свободное время

- To spend free time
- To enjoy hobbies
- To be interested in

### Описание хобби

- I am keen on reading.
- I am fond of music.
- In my spare time I...

### Виды спорта

- Team sports: football, basketball
- Individual sports: tennis, swimming
- Extreme sports: skiing, climbing`,
    formulas: [],
  },

  // ==================== 12. Лексика. Тема «Путешествия» ====================
  {
    id: 'oge-english-12',
    subjectId: 'english',
    title: 'Лексика. Тема «Путешествия»',
    description: 'Транспорт, гостиницы, достопримечательности',
    content: `## Лексика. Тема «Путешествия»

### Транспорт

- By plane, by train, by car
- By bus, by underground
- On foot

### В аэропорту

- Flight, ticket, gate
- Passport, luggage
- Boarding pass

### В гостинице

- Reception, room
- Check in/out
- Breakfast included

### Достопримечательности

- Museum, gallery
- Cathedral, castle
- Park, zoo
- Monument, square

### Путешествие

- To go on a trip
- To visit places
- To take photos
- To buy souvenirs

### Погода

- Sunny, rainy, cloudy
- Hot, cold, warm
- Windy, snowy`,
    formulas: ['by plane', 'on foot'],
  },

  // ==================== 13. Лексика. Тема «Здоровье» ====================
  {
    id: 'oge-english-13',
    subjectId: 'english',
    title: 'Лексика. Тема «Здоровье»',
    description: 'Болезни, врачи, лекарства',
    content: `## Лексика. Тема «Здоровье»

### Болезни

- Headache, toothache
- Temperature, cold, cough
- Flu, sore throat

### Врачи

- Doctor, dentist
- Nurse
- Surgeon

### Лекарства

- Medicine, pills
- Tablets
- Prescription

### Симптомы

- I have a headache.
- I feel sick.
- I have a high temperature.

### Визит к врачу

- I'd like to make an appointment.
- What's the matter?
- I have a pain in...

### Советы

- Take medicine
- Drink a lot of water
- Get some rest
- See a doctor`,
    formulas: ['I have a headache.', "What's the matter?"],
  },

  // ==================== 14. Лексика. Тема «Покупки» ====================
  {
    id: 'oge-english-14',
    subjectId: 'english',
    title: 'Лексика. Тема «Покупки»',
    description: 'Магазины, одежда, цены',
    content: `## Лексика. Тема «Покупки»

### Магазины

- Shop, store, supermarket
- Department store
- Market, bazaar

### Одежда

- T-shirt, jeans, shirt
- Dress, skirt, blouse
- Jacket, coat, sweater
- Trousers, shorts
- Shoes, boots, trainers

### Цены

- How much is it?
- It costs...
- It's on sale.
- Discount, sale

### В магазине

- Can I help you?
- I'm looking for...
- Have you got...?
- What size?
- I'll take it.

### Цвета

- Red, blue, green
- Yellow, orange, pink
- Black, white, grey
- Brown, purple`,
    formulas: ['How much is it?', "I'll take it."],
  },

  // ==================== 15. Лексика. Тема «Природа» ====================
  {
    id: 'oge-english-15',
    subjectId: 'english',
    title: 'Лексика. Тема «Природа»',
    description: 'Природа, пейзажи, животные',
    content: `## Лексика. Тема «Природа»

### Пейзажи

- Forest, wood
- River, lake, sea
- Mountain, hill
- Field, meadow
- Desert, beach

### Животные

- Domestic: cat, dog, horse, cow
- Wild: lion, elephant, bear
- Birds: eagle, owl, penguin

### Погода

- Sunny, rainy, windy
- Cloudy, snowy
- Hot, warm, cold

### Сезоны

- Spring, summer
- Autumn (fall), winter

### Растения

- Tree, bush, flower
- Grass, leaf

### Природные явления

- Rain, snow, wind
- Storm, thunder
- Rainbow`,
    formulas: [],
  },

  // ==================== 16. Лексика. Тема «Работа» ====================
  {
    id: 'oge-english-16',
    subjectId: 'english',
    title: 'Лексика. Тема «Работа»',
    description: 'Профессии, рабочий день, карьера',
    content: `## Лексика. Тема «Работа»

### Профессии

- Teacher, doctor, nurse
- Engineer, programmer
- Driver, pilot
- Artist, musician
- Cook, waiter

### Рабочий день

- Office, factory
- Working hours
- Break, lunch time
- Overtime

### Собеседование

- CV (resume)
- Qualifications
- Experience
- Salary, wage

### Рабочие обязанности

- To work hard
- To meet deadlines
- To work in a team

### Карьера

- Promotion
- Training
- Career growth

### Коллеги

- Colleague, boss
- Manager, director
- Team, department`,
    formulas: [],
  },

  // ==================== 17. Лексика. Тема «Интернет» ====================
  {
    id: 'oge-english-17',
    subjectId: 'english',
    title: 'Лексика. Тема «Интернет»',
    description: 'Социальные сети, сайты, технологии',
    content: `## Лексика. Тема «Интернет»

### Социальные сети

- Facebook, Instagram
- Twitter, VK
- To post, to share
- To follow, to like

### Сайты

- Website, blog
- Search engine (Google)
- To download, to upload

### Технологии

- Computer, laptop
- Smartphone, tablet
- Wi-Fi, Bluetooth

### Безопасность

- Password, login
- To protect, to hack
- Virus, spam

### Интернет-жаргон

- LOL (laugh out loud)
- OMG (oh my god)
- ASAP (as soon as possible)

### Онлайн

- Online shopping
- Online games
- Video call`,
    formulas: [],
  },

  // ==================== 18. Лексика. Тема «Экология» ====================
  {
    id: 'oge-english-18',
    subjectId: 'english',
    title: 'Лексика. Тема «Экология»',
    description: 'Экологические проблемы, переработка',
    content: `## Лексика. Тема «Экология»

### Проблемы

- Pollution (air, water, soil)
- Global warming
- Deforestation
- Endangered species

### Переработка

- To recycle (бутылки, бумага)
- Plastic, glass, paper
- Rubbish, waste

### Экология

- Environment, nature
- To protect, to save
- Green energy

### Решения

- Reusable bags
- Solar panels
- Public transport

### Животные

- Endangered species
- Extinct
- Conservation

### Действия

- Reduce, reuse, recycle
- Plant trees
- Save water and electricity`,
    formulas: ['Reduce, Reuse, Recycle'],
  },

  // ==================== 19. Лексика. Тема «Культура» ====================
  {
    id: 'oge-english-19',
    subjectId: 'english',
    title: 'Лексика. Тема «Культура»',
    description: 'Музеи, театр, фильмы, книги',
    content: `## Лексика. Тема «Культура»

### Музеи

- Art gallery, museum
- Exhibition, collection
- Painting, sculpture

### Театр

- Opera, ballet
- Drama, comedy
- Performance, actor

### Фильмы

- Comedy, drama
- Action, thriller
- Documentary
- To watch, to enjoy

### Книги

- Fiction, non-fiction
- Novel, short story
- Author, publisher

### Музыка

- Pop, rock, classical
- Jazz, hip-hop
- Singer, band

### Искусство

- Painting, drawing
- Photography
- Design`,
    formulas: [],
  },

  // ==================== 20. Лексика. Тема «Будущее» ====================
  {
    id: 'oge-english-20',
    subjectId: 'english',
    title: 'Лексика. Тема «Будущее»',
    description: 'Планы, мечты, карьерные цели',
    content: `## Лексика. Тема «Будущее»

### Планы

- I am going to...
- I plan to...
- I hope to...
- I want to become...

### Мечты

- I dream of becoming...
- My ambition is to...
- In the future I would like to...

### Карьера

- To study at university
- To get a degree
- To find a job
- To start a business

### Путешествия

- To visit different countries
- To learn new languages
- To live abroad

### Работа

- To help people
- To earn money
- To be successful

### Советы

- Set goals
- Work hard
- Never give up`,
    formulas: ['I am going to...', 'I hope to...'],
  },
];

export const englishQuestions: Question[] = [
  // ==================== Артикли (oge-english-1) ====================
  {
    id: 'oge-english-q1',
    topicId: 'oge-english-1',
    text: 'I saw ___ cat in the garden.',
    type: 'choice',
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 'a',
    explanation: 'Первое упоминание, перед согласным звуком → a.',
    points: 1,
  },
  {
    id: 'oge-english-q2',
    topicId: 'oge-english-1',
    text: '___ sun rises in the east.',
    type: 'choice',
    options: ['A', 'An', 'The', '-'],
    correctAnswer: 'The',
    explanation: 'The sun — единственный объект, определённый артикль.',
    points: 1,
  },
  {
    id: 'oge-english-q3',
    topicId: 'oge-english-1',
    text: 'She is ___ honest woman.',
    type: 'choice',
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 'an',
    explanation: 'Перед гласным звуком [honest] → an.',
    points: 1,
  },

  // ==================== Существительные (oge-english-2) ====================
  {
    id: 'oge-english-q4',
    topicId: 'oge-english-2',
    text: 'Many ___ (children) play in the park.',
    type: 'choice',
    options: ['children', 'childs', 'child', 'childrens'],
    correctAnswer: 'children',
    explanation: 'child → children (неправильное множественное число).',
    points: 1,
  },
  {
    id: 'oge-english-q5',
    topicId: 'oge-english-2',
    text: 'I need ___ (some advice).',
    type: 'choice',
    options: ['some advice', 'some advices', 'an advice', 'advices'],
    correctAnswer: 'some advice',
    explanation: 'Advice — неисчисляемое существительное.',
    points: 1,
  },
  {
    id: 'oge-english-q6',
    topicId: 'oge-english-2',
    text: 'There are five ___ (knife) on the table.',
    type: 'choice',
    options: ['knifes', 'knives', 'knife', 'knifess'],
    correctAnswer: 'knives',
    explanation: 'knife → knives (f → ves).',
    points: 1,
  },

  // ==================== Местоимения (oge-english-3) ====================
  {
    id: 'oge-english-q7',
    topicId: 'oge-english-3',
    text: '___ is she? — She is my sister.',
    type: 'choice',
    options: ['Who', 'What', 'Where', 'Whose'],
    correctAnswer: 'Who',
    explanation: 'Who — о ком? (кто).',
    points: 1,
  },
  {
    id: 'oge-english-q8',
    topicId: 'oge-english-3',
    text: 'This book is ___.',
    type: 'choice',
    options: ['mine', 'my', 'me', 'I'],
    correctAnswer: 'mine',
    explanation: 'Mine — притяжательное местоимение (принадлежит мне).',
    points: 1,
  },
  {
    id: 'oge-english-q9',
    topicId: 'oge-english-3',
    text: '___ going to the cinema tomorrow.',
    type: 'choice',
    options: ['I am', 'I is', 'I are', 'I be'],
    correctAnswer: 'I am',
    explanation: 'I am going to — конструкция для будущего.',
    points: 1,
  },

  // ==================== Глаголы (oge-english-4) ====================
  {
    id: 'oge-english-q10',
    topicId: 'oge-english-4',
    text: 'She ___ (work) in a bank since 2010.',
    type: 'choice',
    options: ['has worked', 'works', 'worked', 'is working'],
    correctAnswer: 'has worked',
    explanation: 'Present Perfect: с 2010 года до настоящего.',
    points: 1,
  },
  {
    id: 'oge-english-q11',
    topicId: 'oge-english-4',
    text: 'They ___ (play) football when it started to rain.',
    type: 'choice',
    options: ['were playing', 'played', 'have played', 'play'],
    correctAnswer: 'were playing',
    explanation: 'Past Continuous: действие в процессе в прошлом.',
    points: 1,
  },
  {
    id: 'oge-english-q12',
    topicId: 'oge-english-4',
    text: 'You ___ (must/should) see a doctor.',
    type: 'choice',
    options: ['should', 'must', 'can', 'may'],
    correctAnswer: 'should',
    explanation: 'Should — следует (совет).',
    points: 1,
  },

  // ==================== Прилагательные (oge-english-5) ====================
  {
    id: 'oge-english-q13',
    topicId: 'oge-english-5',
    text: 'She is ___ (tall) than her sister.',
    type: 'choice',
    options: ['taller', 'tallest', 'more tall', 'the tallest'],
    correctAnswer: 'taller',
    explanation: 'Tall → taller (односложное + er).',
    points: 1,
  },
  {
    id: 'oge-english-q14',
    topicId: 'oge-english-5',
    text: 'This is the ___ (good) film I have ever seen.',
    type: 'choice',
    options: ['best', 'better', 'good', 'more good'],
    correctAnswer: 'best',
    explanation: 'Good → best (неправильное превосходное).',
    points: 1,
  },
  {
    id: 'oge-english-q15',
    topicId: 'oge-english-5',
    text: 'He drives ___ (careful).',
    type: 'choice',
    options: ['carefully', 'careful', 'more careful', 'careless'],
    correctAnswer: 'carefully',
    explanation: 'Наречие: careful → carefully (прилагательное + ly).',
    points: 1,
  },

  // ==================== Чтение (oge-english-6) ====================
  {
    id: 'oge-english-q16',
    topicId: 'oge-english-6',
    text: 'Что такое skimming?',
    type: 'choice',
    options: ['Быстрое чтение для общего понимания', 'Медленное чтение', 'Чтение вслух', 'Перечитывание'],
    correctAnswer: 'Быстрое чтение для общего понимания',
    explanation: 'Skimming — беглое чтение для улавливания основной мысли.',
    points: 1,
  },
  {
    id: 'oge-english-q17',
    topicId: 'oge-english-6',
    text: 'Main idea — это:',
    type: 'choice',
    options: ['Основная мысль текста', 'Детали текста', 'Заключение автора', 'Название текста'],
    correctAnswer: 'Основная мысль текста',
    explanation: 'Main idea — главная мысль, о чём текст.',
    points: 1,
  },
  {
    id: 'oge-english-q18',
    topicId: 'oge-english-6',
    text: 'Inference — это:',
    type: 'choice',
    options: ['Вывод из текста', 'Прямое утверждение', 'Цитата', 'Название'],
    correctAnswer: 'Вывод из текста',
    explanation: 'Inference — вывод, который читатель делает, опираясь на текст.',
    points: 1,
  },

  // ==================== Письмо (oge-english-7) ====================
  {
    id: 'oge-english-q19',
    topicId: 'oge-english-7',
    text: 'Начало личного письма:',
    type: 'choice',
    options: ['Dear John,', 'Hello!', 'Good morning!', 'Hi!'],
    correctAnswer: 'Dear John,',
    explanation: 'Dear + имя — стандартное начало личного письма.',
    points: 1,
  },
  {
    id: 'oge-english-q20',
    topicId: 'oge-english-7',
    text: 'Завершение письма другу:',
    type: 'choice',
    options: ['Best wishes', 'Sincerely yours', 'Yours faithfully', 'Regards'],
    correctAnswer: 'Best wishes',
    explanation: 'Best wishes — informal завершение.',
    points: 1,
  },
  {
    id: 'oge-english-q21',
    topicId: 'oge-english-7',
    text: 'I am writing to tell you about...',
    type: 'choice',
    options: ['Цель письма', 'Приветствие', 'Завершение', 'Подпись'],
    correctAnswer: 'Цель письма',
    explanation: 'Фраза для указания цели письма.',
    points: 1,
  },

  // ==================== Говорение (oge-english-8) ====================
  {
    id: 'oge-english-q22',
    topicId: 'oge-english-8',
    text: 'How are you? —',
    type: 'choice',
    options: ["I'm fine, thank you.", 'Yes, I am.', 'I am 12.', 'My name is...'],
    correctAnswer: "I'm fine, thank you.",
    explanation: 'Стандартный ответ на приветствие.',
    points: 1,
  },
  {
    id: 'oge-english-q23',
    topicId: 'oge-english-8',
    text: 'What can you see in the picture?',
    type: 'choice',
    options: ['There is a house.', 'I like it.', 'It is big.', 'Yes, I can.'],
    correctAnswer: 'There is a house.',
    explanation: 'Описание: There is/are + существительное.',
    points: 1,
  },
  {
    id: 'oge-english-q24',
    topicId: 'oge-english-8',
    text: 'In my opinion...',
    type: 'choice',
    options: ['Выражение мнения', 'Приветствие', 'Вопрос', 'Отрицание'],
    correctAnswer: 'Выражение мнения',
    explanation: 'In my opinion — по моему мнению.',
    points: 1,
  },

  // ==================== Семья (oge-english-9) ====================
  {
    id: 'oge-english-q25',
    topicId: 'oge-english-9',
    text: 'Mother\'s mother is:',
    type: 'choice',
    options: ['grandmother', 'aunt', 'sister', 'cousin'],
    correctAnswer: 'grandmother',
    explanation: "Mother's mother = grandmother (бабушка).",
    points: 1,
  },
  {
    id: 'oge-english-q26',
    topicId: 'oge-english-9',
    text: 'To do the washing up:',
    type: 'choice',
    options: ['Мыть посуду', 'Стирать', 'Убирать', 'Готовить'],
    correctAnswer: 'Мыть посуду',
    explanation: 'To do the washing up — мыть посуду.',
    points: 1,
  },
  {
    id: 'oge-english-q27',
    topicId: 'oge-english-9',
    text: 'We get along well:',
    type: 'choice',
    options: ['Мы ладим друг с другом', 'Мы вместе живём', 'Мы работаем вместе', 'Мы учимся вместе'],
    correctAnswer: 'Мы ладим друг с другом',
    explanation: 'Get along well — ладить, хорошо уживаться.',
    points: 1,
  },

  // ==================== Школа (oge-english-10) ====================
  {
    id: 'oge-english-q28',
    topicId: 'oge-english-10',
    text: 'Physical Education:',
    type: 'choice',
    options: ['Физкультура', 'Математика', 'Литература', 'История'],
    correctAnswer: 'Физкультура',
    explanation: 'Physical Education (PE) — физическая культура.',
    points: 1,
  },
  {
    id: 'oge-english-q29',
    topicId: 'oge-english-10',
    text: 'To do homework:',
    type: 'choice',
    options: ['Делать домашнее задание', 'Ходить в школу', 'Писать в тетради', 'Читать книгу'],
    correctAnswer: 'Делать домашнее задание',
    explanation: 'To do homework — выполнять домашнее задание.',
    points: 1,
  },
  {
    id: 'oge-english-q30',
    topicId: 'oge-english-10',
    text: 'Headteacher:',
    type: 'choice',
    options: ['Директор школы', 'Учитель', 'Ученик', 'Родитель'],
    correctAnswer: 'Директор школы',
    explanation: 'Headteacher — директор школы.',
    points: 1,
  },

  // ==================== Хобби (oge-english-11) ====================
  {
    id: 'oge-english-q31',
    topicId: 'oge-english-11',
    text: 'I am keen on...',
    type: 'choice',
    options: ['Мне нравится', 'Я ненавижу', 'Я устаю', 'Я боюсь'],
    correctAnswer: 'Мне нравится',
    explanation: 'Keen on — увлечён, очень нравится.',
    points: 1,
  },
  {
    id: 'oge-english-q32',
    topicId: 'oge-english-11',
    text: 'To go in for sports:',
    type: 'choice',
    options: ['Заниматься спортом', 'Смотреть спорт', 'Читать о спорте', 'Говорить о спорте'],
    correctAnswer: 'Заниматься спортом',
    explanation: 'Go in for sports — заниматься спортом.',
    points: 1,
  },
  {
    id: 'oge-english-q33',
    topicId: 'oge-english-11',
    text: 'Team sports:',
    type: 'choice',
    options: ['Командные виды спорта', 'Индивидуальные', 'Экстремальные', 'Зимние'],
    correctAnswer: 'Командные виды спорта',
    explanation: 'Team sports: football, basketball, volleyball.',
    points: 1,
  },

  // ==================== Путешествия (oge-english-12) ====================
  {
    id: 'oge-english-q34',
    topicId: 'oge-english-12',
    text: 'By plane:',
    type: 'choice',
    options: ['На самолёте', 'На поезде', 'На машине', 'Пешком'],
    correctAnswer: 'На самолёте',
    explanation: 'By plane — на самолёте.',
    points: 1,
  },
  {
    id: 'oge-english-q35',
    topicId: 'oge-english-12',
    text: 'On foot:',
    type: 'choice',
    options: ['Пешком', 'На велосипеде', 'На автобусе', 'На лодке'],
    correctAnswer: 'Пешком',
    explanation: 'On foot — пешком.',
    points: 1,
  },
  {
    id: 'oge-english-q36',
    topicId: 'oge-english-12',
    text: 'To check in:',
    type: 'choice',
    options: ['Зарегистрироваться', 'Выйти', 'Поесть', 'Отдохнуть'],
    correctAnswer: 'Зарегистрироваться',
    explanation: 'To check in — зарегистрироваться (в гостинице/аэропорту).',
    points: 1,
  },

  // ==================== Здоровье (oge-english-13) ====================
  {
    id: 'oge-english-q37',
    topicId: 'oge-english-13',
    text: 'I have a headache:',
    type: 'choice',
    options: ['У меня болит голова', 'У меня болит живот', 'У меня температура', 'У меня кашель'],
    correctAnswer: 'У меня болит голова',
    explanation: 'Headache — головная боль.',
    points: 1,
  },
  {
    id: 'oge-english-q38',
    topicId: 'oge-english-13',
    text: "What's the matter?",
    type: 'choice',
    options: ['Что случилось?', 'Как дела?', 'Где вы?', 'Кто это?'],
    correctAnswer: 'Что случилось?',
    explanation: "What's the matter? — Что случилось? (врач спрашивает).",
    points: 1,
  },
  {
    id: 'oge-english-q39',
    topicId: 'oge-english-13',
    text: 'To take medicine:',
    type: 'choice',
    options: ['Принимать лекарство', 'Давать лекарство', 'Покупать лекарство', 'Продавать лекарство'],
    correctAnswer: 'Принимать лекарство',
    explanation: 'To take medicine — принимать (пить) лекарство.',
    points: 1,
  },

  // ==================== Покупки (oge-english-14) ====================
  {
    id: 'oge-english-q40',
    topicId: 'oge-english-14',
    text: 'How much is it?',
    type: 'choice',
    options: ['Сколько это стоит?', 'Где это?', 'Что это?', 'Кто это?'],
    correctAnswer: 'Сколько это стоит?',
    explanation: 'How much is it? — Сколько стоит?',
    points: 1,
  },
  {
    id: 'oge-english-q41',
    topicId: 'oge-english-14',
    text: "I'll take it.",
    type: 'choice',
    options: ['Я его возьму', 'Я его оставлю', 'Я его верну', 'Я его спрячу'],
    correctAnswer: 'Я его возьму',
    explanation: "I'll take it — Я возьму это (покупка).",
    points: 1,
  },
  {
    id: 'oge-english-q42',
    topicId: 'oge-english-14',
    text: 'Trainers:',
    type: 'choice',
    options: ['Кроссовки', 'Ботинки', 'Туфли', 'Сапоги'],
    correctAnswer: 'Кроссовки',
    explanation: 'Trainers — кроссовки, спортивная обувь.',
    points: 1,
  },

  // ==================== Природа (oge-english-15) ====================
  {
    id: 'oge-english-q43',
    topicId: 'oge-english-15',
    text: 'Tundra:',
    type: 'choice',
    options: ['Тундра', 'Степь', 'Пустыня', 'Лес'],
    correctAnswer: 'Тундра',
    explanation: 'Tundra — тундра.',
    points: 1,
  },
  {
    id: 'oge-english-q44',
    topicId: 'oge-english-15',
    text: 'An elephant is a:',
    type: 'choice',
    options: ['Wild animal', 'Domestic animal', 'Bird', 'Fish'],
    correctAnswer: 'Wild animal',
    explanation: 'Elephant — дикое животное (wild animal).',
    points: 1,
  },
  {
    id: 'oge-english-q45',
    topicId: 'oge-english-15',
    text: 'It is snowy:',
    type: 'choice',
    options: ['Идёт снег', 'Солнечно', 'Дождь', 'Ветрено'],
    correctAnswer: 'Идёт снег',
    explanation: 'Snowy — со снегом, snowy weather.',
    points: 1,
  },

  // ==================== Работа (oge-english-16) ====================
  {
    id: 'oge-english-q46',
    topicId: 'oge-english-16',
    text: 'A programmer:',
    type: 'choice',
    options: ['Программист', 'Учитель', 'Врач', 'Водитель'],
    correctAnswer: 'Программист',
    explanation: 'Programmer — программист.',
    points: 1,
  },
  {
    id: 'oge-english-q47',
    topicId: 'oge-english-16',
    text: 'To work hard:',
    type: 'choice',
    options: ['Много работать', 'Легко работать', 'Мало работать', 'Не работать'],
    correctAnswer: 'Много работать',
    explanation: 'To work hard — усердно работать.',
    points: 1,
  },
  {
    id: 'oge-english-q48',
    topicId: 'oge-english-16',
    text: 'Salary:',
    type: 'choice',
    options: ['Зарплата', 'Цена', 'Стоимость', 'Расходы'],
    correctAnswer: 'Зарплата',
    explanation: 'Salary — зарплата, жалование.',
    points: 1,
  },

  // ==================== Интернет (oge-english-17) ====================
  {
    id: 'oge-english-q49',
    topicId: 'oge-english-17',
    text: 'To post:',
    type: 'choice',
    options: ['Публиковать', 'Читать', 'Удалять', 'Создавать'],
    correctAnswer: 'Публиковать',
    explanation: 'To post — опубликовать (в соцсети).',
    points: 1,
  },
  {
    id: 'oge-english-q50',
    topicId: 'oge-english-17',
    text: 'Search engine:',
    type: 'choice',
    options: ['Поисковая система', 'Браузер', 'Почта', 'Чат'],
    correctAnswer: 'Поисковая система',
    explanation: 'Search engine — поисковая система (Google).',
    points: 1,
  },
  {
    id: 'oge-english-q51',
    topicId: 'oge-english-17',
    text: 'ASAP:',
    type: 'choice',
    options: ['As soon as possible', 'Always say a prayer', 'All students are present', 'A strong and powerful'],
    correctAnswer: 'As soon as possible',
    explanation: 'ASAP — As soon as possible (как можно скорее).',
    points: 1,
  },

  // ==================== Экология (oge-english-18) ====================
  {
    id: 'oge-english-q52',
    topicId: 'oge-english-18',
    text: 'To recycle:',
    type: 'choice',
    options: ['Перерабатывать', 'Выбрасывать', 'Сжигать', 'Закапывать'],
    correctAnswer: 'Перерабатывать',
    explanation: 'To recycle — перерабатывать (бумагу, пластик).',
    points: 1,
  },
  {
    id: 'oge-english-q53',
    topicId: 'oge-english-18',
    text: 'Global warming:',
    type: 'choice',
    options: ['Глобальное потепление', 'Глобальное похолодание', 'Наводнение', 'Засуха'],
    correctAnswer: 'Глобальное потепление',
    explanation: 'Global warming — глобальное потепление.',
    points: 1,
  },
  {
    id: 'oge-english-q54',
    topicId: 'oge-english-18',
    text: 'Endangered species:',
    type: 'choice',
    options: ['Вымирающие виды', 'Все виды', 'Новые виды', 'Известные виды'],
    correctAnswer: 'Вымирающие виды',
    explanation: 'Endangered species — виды, находящиеся под угрозой исчезновения.',
    points: 1,
  },

  // ==================== Культура (oge-english-19) ====================
  {
    id: 'oge-english-q55',
    topicId: 'oge-english-19',
    text: 'Art gallery:',
    type: 'choice',
    options: ['Художественная галерея', 'Музей', 'Театр', 'Кинотеатр'],
    correctAnswer: 'Художественная галерея',
    explanation: 'Art gallery — художественная галерея.',
    points: 1,
  },
  {
    id: 'oge-english-q56',
    topicId: 'oge-english-19',
    text: 'Documentary:',
    type: 'choice',
    options: ['Документальный фильм', 'Художественный фильм', 'Мультфильм', 'Сериал'],
    correctAnswer: 'Документальный фильм',
    explanation: 'Documentary — документальный фильм.',
    points: 1,
  },
  {
    id: 'oge-english-q57',
    topicId: 'oge-english-19',
    text: 'Fiction:',
    type: 'choice',
    options: ['Художественная литература', 'Научная литература', 'Учебник', 'Журнал'],
    correctAnswer: 'Художественная литература',
    explanation: 'Fiction — художественная литература.',
    points: 1,
  },

  // ==================== Будущее (oge-english-20) ====================
  {
    id: 'oge-english-q58',
    topicId: 'oge-english-20',
    text: 'I am going to travel:',
    type: 'choice',
    options: ['Я собираюсь путешествовать', 'Я люблю путешествовать', 'Я путешествовал', 'Я путешествую'],
    correctAnswer: 'Я собираюсь путешествовать',
    explanation: 'I am going to — планы на будущее.',
    points: 1,
  },
  {
    id: 'oge-english-q59',
    topicId: 'oge-english-20',
    text: 'My ambition is to...',
    type: 'choice',
    options: ['Моя цель —', 'Мой страх —', 'Мой вопрос —', 'Мой ответ —'],
    correctAnswer: 'Моя цель —',
    explanation: 'My ambition is to — моя цель/амбиция —.',
    points: 1,
  },
  {
    id: 'oge-english-q60',
    topicId: 'oge-english-20',
    text: 'To get a degree:',
    type: 'choice',
    options: ['Получить степень', 'Получить работу', 'Получить деньги', 'Получить машину'],
    correctAnswer: 'Получить степень',
    explanation: 'To get a degree — получить учёную степень (окончить вуз).',
    points: 1,
  },
];
