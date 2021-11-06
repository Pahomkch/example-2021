/* eslint-disable max-lines */
import {NextApiRequest, NextApiResponse} from 'next'

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const mockCourses = [
    {
      '_id': {
        'secondCategory': 'Аналитика',
      },
      'pages': [
        {
          'alias'   : 'financial-analytics',
          'title'   : 'Курсы по финансовой аналитике',
          '_id'     : '6068cc76d084b85d3f1abf56',
          'category': 'Финансовая аналитика',
        },
        {
          'alias'   : 'big-data',
          'title'   : 'Курсы по Big Data',
          '_id'     : '606e9acae35aa0914a4ea834',
          'category': 'Big Data',
        },
        {
          'alias'   : 'data-science',
          'title'   : 'Курсы по Data Science',
          '_id'     : '606e9b4ce35aa002e74ea835',
          'category': 'Data Science',
        },
        {
          'alias'   : 'machine-learning',
          'title'   : 'Курсы по машинному обучению',
          '_id'     : '606e9bc1e35aa0ed184ea836',
          'category': 'Машинное обучение',
        },
        {
          'alias'   : 'excel',
          'title'   : 'Курсы Excel',
          '_id'     : '61055589468b5529b92acf77',
          'category': 'Excel',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Бизнес',
      },
      'pages': [
        {
          'alias'   : 'finansovaya-gramotnost',
          'title'   : 'Курсы финансовой грамотности',
          '_id'     : '6072eadce35aa07a784ea9b3',
          'category': 'Финансовая грамотность',
        },
        {
          'alias'   : 'entrepreneurs',
          'title'   : 'Курсы предпринимательства',
          '_id'     : '6073095ae35aa03b954ea9b7',
          'category': 'Предпринимательство',
        },
        {
          'alias'   : 'oratorskoe-masterstvo',
          'title'   : 'Курсы ораторского мастерства',
          '_id'     : '60f097a883c99b09179717ca',
          'category': 'Ораторское мастерство',
        },
        {
          'alias'   : 'director',
          'title'   : 'Курсы для руководителей',
          '_id'     : '60f1b83083c99b5787971d99',
          'category': 'Курсы для руководителей',
        },
        {
          'alias'   : 'upravlenie-personalom',
          'title'   : 'Курсы управления персоналом',
          '_id'     : '60f1bf1d83c99b646b971e13',
          'category': 'Управление персоналом',
        },
        {
          'alias'   : 'mba',
          'title'   : 'Курсы MBA',
          '_id'     : '60f1cee583c99b0387971e49',
          'category': 'MBA',
        },
        {
          'alias'   : 'buhgalter',
          'title'   : 'Курсы бухгалтеров',
          '_id'     : '61277c0c468b556da42ef30c',
          'category': 'Курсы бухгалтеров',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Дизайн',
      },
      'pages': [
        {
          'alias'   : 'graphic-design',
          'title'   : 'Курсы графического дизайна',
          '_id'     : '605a404a9ccee1beca51a7c6',
          'category': 'Графический дизайн',
        },
        {
          'alias'   : 'dizayn-interera',
          'title'   : 'Курсы дизайна интерьера',
          '_id'     : '606088b09ccee18c9951a7d0',
          'category': 'Дизайн интерьера',
        },
        {
          'alias'   : 'web-design',
          'title'   : 'Курсы веб-дизайна',
          '_id'     : '60608bba9ccee12e2b51a7d3',
          'category': 'Веб дизайн',
        },
        {
          'alias'   : 'photoshop',
          'title'   : 'Курсы Photoshop',
          '_id'     : '6060c3769ccee144eb51a7ed',
          'category': 'Photoshop',
        },
        {
          'alias'   : 'ArchiCAD',
          'title'   : 'Курсы ArchiCAD',
          '_id'     : '6069d0fbd084b81dca1abfa2',
          'category': 'ArchiCAD',
        },
        {
          'alias'   : 'landscape-design',
          'title'   : 'Курсы ландшафтного дизайна',
          '_id'     : '6069d283d084b8d0091abfa4',
          'category': 'Ландшафтный дизайн',
        },
        {
          'alias'   : 'sketching',
          'title'   : 'Курсы скетчинга',
          '_id'     : '6072f7b9e35aa072b34ea9b5',
          'category': 'Скетчинг',
        },
        {
          'alias'   : 'Illustration',
          'title'   : 'Курсы иллюстрации',
          '_id'     : '6072fc3fe35aa0826c4ea9b6',
          'category': 'Иллюстрация',
        },
        {
          'alias'   : '3d',
          'title'   : 'Курсы 3D-моделирования',
          '_id'     : '611d6335468b55193b2dc44b',
          'category': '3d',
        },
        {
          'alias'   : 'figma',
          'title'   : 'Курсы Figma',
          '_id'     : '618562b8d0b45d823609894f',
          'category': 'Figma',
        },
        {
          'alias'   : 'video',
          'title'   : 'Курсы по видеомонтажу',
          '_id'     : '61856486d0b45dbf02098ad2',
          'category': 'Видеомонтаж',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Игры',
      },
      'pages': [
        {
          'alias'   : 'gamedesign',
          'title'   : 'Курсы геймдизайна',
          '_id'     : '60e1c96c83c99b15669695bf',
          'category': 'Геймдизайн',
        },
        {
          'alias'   : 'chess',
          'title'   : 'Курсы шахмат',
          '_id'     : '60e5feba83c99b80c896b402',
          'category': 'Шахматы',
        },
        {
          'alias'   : 'unity',
          'title'   : 'Курсы Unity',
          '_id'     : '61031097468b556a3b2a8c9a',
          'category': 'Unity',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Маркетинг',
      },
      'pages': [
        {
          'alias'   : 'seo',
          'title'   : 'Курсы SEO',
          '_id'     : '60662f5a28780843dda47ada',
          'category': 'SEO',
        },
        {
          'alias'   : 'smm',
          'title'   : 'Курсы SMM',
          '_id'     : '6072e9d8e35aa0bf474ea9b2',
          'category': 'SMM',
        },
        {
          'alias'   : 'copywriting',
          'title'   : 'Курсы копирайтинга',
          '_id'     : '6072f73be35aa002464ea9b4',
          'category': 'Копирайтинг',
        },
        {
          'alias'   : 'targeting',
          'title'   : 'Курсы таргетированной рекламы',
          '_id'     : '6073f5cce35aa01ad74eaa5f',
          'category': 'Таргетированная реклама',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Программирование',
      },
      'pages': [
        {
          'alias'   : 'python',
          'title'   : 'Курсы Python',
          '_id'     : '6066183d2878082716a47ac1',
          'category': 'Python',
        },
        {
          'alias'   : '1C',
          'title'   : 'Курсы 1С программирования',
          '_id'     : '606e11d0e35aa030b14ea808',
          'category': '1C',
        },
        {
          'alias'   : 'react-js',
          'title'   : 'Курсы React.js',
          '_id'     : '609e98e77b822860385b08bc',
          'category': 'React.js',
        },
        {
          'alias'   : 'qa',
          'title'   : 'Курсы тестировщика',
          '_id'     : '60f0936b83c99b3f4a9717bb',
          'category': 'QA-тестирование',
        },
        {
          'alias'   : 'webdev',
          'title'   : 'Курсы по созданию сайтов',
          '_id'     : '611d6e84468b5559632dc591',
          'category': 'Создание сайтов',
        },
        {
          'alias'   : 'php',
          'title'   : 'Курсы PHP',
          '_id'     : '61276aa8468b55bad02ef050',
          'category': 'PHP',
        },
        {
          'alias'   : 'sql',
          'title'   : 'Курсы по SQL',
          '_id'     : '61277ceb468b55ebc12ef3b1',
          'category': 'SQL',
        },
        {
          'alias'   : 'js',
          'title'   : 'Курсы JavaScript',
          '_id'     : '61278184468b551f792ef400',
          'category': 'JavaScript',
        },
        {
          'alias'   : 'nodejs',
          'title'   : 'Курсы Node JS',
          '_id'     : '61279fa2468b551f4a2f0099',
          'category': 'Node.js',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Прочее',
      },
      'pages': [
        {
          'alias'   : 'cutting-sewing',
          'title'   : 'Курсы кройки и шитья',
          '_id'     : '6072e3c1e35aa0ce954ea9af',
          'category': 'Кройка и шитье',
        },
        {
          'alias'   : 'photography',
          'title'   : 'Курсы фотографии',
          '_id'     : '6072e5bfe35aa07cc34ea9b0',
          'category': 'Курсы фотографии',
        },
        {
          'alias'   : 'floristics',
          'title'   : 'Курсы флористики',
          '_id'     : '6072e5e9e35aa0101f4ea9b1',
          'category': 'Флористика',
        },
      ],
    },
    {
      '_id': {
        'secondCategory': 'Управление',
      },
      'pages': [
        {
          'alias'   : 'product-manager',
          'title'   : 'Курсы Product Manager',
          '_id'     : '614d63b9468b556dbe349d26',
          'category': 'Product Manager',
        },
      ],
    },
  ]

  response.status(200).json(mockCourses)
}
