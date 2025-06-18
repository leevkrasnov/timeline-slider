export interface IData {
  id: number
  year: number
  description: string
}

export const data: IData[] = [
  {
    id: 1,
    year: 2015,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: 2,
    year: 2016,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor.',
  },
  {
    id: 3,
    year: 2017,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    year: 2015,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: 5,
    year: 2016,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor.',
  },
  {
    id: 6,
    year: 2017,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export interface IData {
  id: number
  year: number
  description: string
}

export interface IPeriod {
  from: number
  to: number
  label: string
  events: IData[]
}

export const periods: IPeriod[] = [
  {
    from: 2000,
    to: 2004,
    label: '2000–2004',
    events: [
      {
        id: 1,
        year: 2001,
        description:
          'Компания выпустила первый продукт, открыв новую эру развития.',
      },
      {
        id: 2,
        year: 2002,
        description:
          'Заключено стратегическое партнерство для выхода на новые рынки.',
      },
      {
        id: 3,
        year: 2004,
        description:
          'Произошла реструктуризация для повышения эффективности бизнеса.',
      },
    ],
  },
  {
    from: 2005,
    to: 2009,
    label: '2005–2009',
    events: [
      {
        id: 4,
        year: 2005,
        description:
          'Началось международное расширение с открытия офисов в Европе и Азии.',
      },
      {
        id: 5,
        year: 2007,
        description:
          'Обновления продуктов значительно улучшили качество обслуживания клиентов.',
      },
      {
        id: 6,
        year: 2009,
        description:
          'Команда выросла более чем на 50% с добавлением ключевых специалистов.',
      },
    ],
  },
  {
    from: 2010,
    to: 2014,
    label: '2010–2014',
    events: [
      {
        id: 7,
        year: 2010,
        description:
          'Компания достигла прибыльности благодаря устойчивому росту доходов.',
      },
      {
        id: 8,
        year: 2011,
        description:
          'Выпущена мобильная версия приложения, быстро набравшая популярность.',
      },
      {
        id: 9,
        year: 2013,
        description:
          'Награда «Лучшее место работы» за корпоративную культуру и условия.',
      },
      {
        id: 10,
        year: 2014,
        description:
          'Расширение на новые отрасли и диверсификация предложений компании.',
      },
    ],
  },
  {
    from: 2015,
    to: 2019,
    label: '2015–2019',
    events: [
      {
        id: 11,
        year: 2015,
        description:
          'Запущена масштабная ребрендинг-кампания с новым современным стилем.',
      },
      {
        id: 12,
        year: 2016,
        description: 'Внедрение машинного обучения улучшило точность сервиса.',
      },
      {
        id: 13,
        year: 2017,
        description:
          'Количество пользователей удвоилось благодаря эффективному маркетингу.',
      },
      {
        id: 14,
        year: 2018,
        description:
          'Открытие нового головного офиса для поддержки растущих команд.',
      },
      {
        id: 15,
        year: 2019,
        description:
          'Привлечение инвестиций серии C для масштабных инфраструктурных проектов.',
      },
    ],
  },
  {
    from: 2020,
    to: 2024,
    label: '2020–2024',
    events: [
      {
        id: 16,
        year: 2020,
        description:
          'Быстрая адаптация к удалённой работе позволила сохранить продуктивность.',
      },
      {
        id: 17,
        year: 2021,
        description:
          'Запуск инновационной облачной платформы для тысяч клиентов.',
      },
      {
        id: 18,
        year: 2022,
        description:
          'Цели по устойчивому развитию достигнуты на два года раньше срока.',
      },
      {
        id: 19,
        year: 2023,
        description:
          'Рекордные показатели по выручке и росту базы пользователей.',
      },
    ],
  },
  {
    from: 2025,
    to: 2029,
    label: '2025–2029',
    events: [
      {
        id: 20,
        year: 2025,
        description: 'Внедрение ИИ для персонализации всех сервисов платформы.',
      },
      {
        id: 21,
        year: 2026,
        description:
          'Продолжение глобального расширения с офисами в Южной Америке и Африке.',
      },
      {
        id: 22,
        year: 2027,
        description:
          'Открытые инициативы стимулируют вовлечение разработчиков по всему миру.',
      },
    ],
  },
]
