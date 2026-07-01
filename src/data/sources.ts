import type { Source } from '../types';

export const sources: Source[] = [
  {
    id: 'fipi',
    name: 'ФИПИ',
    url: 'https://fipi.ru',
    description: 'Федеральный институт педагогических измерений. Официальные КИМы, демоверсии, спецификации и кодификаторы ЕГЭ и ОГЭ.',
    status: 'verified',
  },
  {
    id: 'obrnadzor',
    name: 'Рособрнадзор',
    url: 'https://obrnadzor.gov.ru',
    description: 'Федеральная служба по надзору в сфере образования и науки. Нормативные документы, расписание экзаменов.',
    status: 'verified',
  },
  {
    id: 'bank-ege',
    name: 'Открытый банк заданий ЕГЭ',
    url: 'https://ege.fipi.ru/bank',
    description: 'База заданий из экзаменационных работ прошлых лет с ответами и решениями.',
    status: 'verified',
  },
  {
    id: 'bank-oge',
    name: 'Открытый банк заданий ОГЭ',
    url: 'https://oge.fipi.ru/bank',
    description: 'База заданий из экзаменационных работ ОГЭ прошлых лет.',
    status: 'verified',
  },
  {
    id: 'minpros',
    name: 'Минпросвещения России',
    url: 'https://edu.gov.ru',
    description: 'Министерство просвещения. Перечни учебников, образовательные стандарты.',
    status: 'verified',
  },
  {
    id: 'reshuege',
    name: 'Решу ЕГЭ',
    url: 'https://ege.sdamgia.ru',
    description: 'Независимый тренажёр для подготовки к ЕГЭ. Большой банк заданий с решениями.',
    status: 'recommended',
  },
];
