/*
  ==========================================================
  ДОБАВЛЕНИЕ НОВЫХ ВИДЕО
  ==========================================================

  Добавляйте новые записи ТОЛЬКО в массив VIDEO_CATALOG_NEW_VIDEOS.
  Новые видео автоматически появляются в начале каталога.

  layout:
    "full"              — одно видео в ряд
    "half"              — два видео в ряд
    "third"             — три вертикальных видео в ряд
    "slider"            — вертикальный слайдер
    "slider-horizontal" — горизонтальный слайдер

  Категории:
    numerology     — Нумерология
    runes          — Руны
    horizon        — Горизонт мира
    transformation — Трансформация и развитие
    efir           — Прямые эфиры
    family         — Отношения
    esoterica      — Эзотерика
    meditation     — Медитации и практики

  Пример (уберите // в начале строк):

  // {
  //   url: "https://kinescope.io/ССЫЛКА",
  //   title: "Название видео",
  //   time: "02:35",
  //   categories: ["runes"],
  //   layout: "half"
  // },
*/
window.VIDEO_CATALOG_NEW_VIDEOS = [
  {
    url: "https://kinescope.io/ab3Er8YFavF939GSx4iKVE",
    title: "Интервью с психологом Ольгой Вильдяевой",
    time: "01:10:35",
    categories: ["intervyu"],
    layout: "full"
  },
  {
    url: "https://kinescope.io/8FQQL6yKEN1VaBfc4Nmh5U",
    title: "Интервью для каналов «Время Открыть», «Время Любить»",
    time: "01:23:54",
    categories: ["intervyu"],
    layout: "half"
  },
    {
    url: "https://kinescope.io/rAhFo74XBA4crSENpcp9Tj",
    title: "Интервью для каналов «Время Открыть», «Время Любить»",
    time: "01:01:45",
    categories: ["intervyu"],
    layout: "half"
  }
  ];
  



/* Существующий каталог. Этот массив вручную редактировать не нужно. */
window.VIDEO_CATALOG_BLOCKS = [
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/jH4dVnZbY2EYWssNp9MPXr",
      "title": "Вектор развития личности",
      "time": "02:35",
      "categories": [
        "numerology"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/ftNmAb38wYrXN1QDVKpGcm",
      "title": "Мотивация и жизненные сценарии людей с разными векторами развития",
      "time": "03:19",
      "categories": [
        "numerology"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/wcuTFuP6Ye4QXG7CMZ5CEX",
      "title": "Влияет ли на судьбу смена даты рождения",
      "time": "00:24",
      "categories": [
        "numerology"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/fX1YGSvLTxFeYNT7k1TYrW",
      "title": "Повторяющиеся цифры: 666",
      "time": "00:34",
      "categories": [
        "numerology"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/sxiKVwP4FLPiuwp6ALrjZh",
      "title": "Как дата рождения влияет на судьбу",
      "time": "01:25",
      "categories": [
        "numerology"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/vFWeb46Zi87xUSvYgSuNs1",
      "title": "Руны как язык программирования",
      "time": "02:35",
      "categories": [
        "runes"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "vertical",
    "items": [
      {
        "url": "https://kinescope.io/wcuTFuP6Ye4QXG7CMZ5CEX",
        "title": "Влияет ли на судьбу смена даты рождения?",
        "time": "02:35",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/fX1YGSvLTxFeYNT7k1TYrW",
        "title": "Повторяющиеся цифры: 666",
        "time": "02:35",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/sxiKVwP4FLPiuwp6ALrjZh",
        "title": "Как дата рождения влияет на судьбу",
        "time": "02:35",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/w6UQCWYjaq6tzFzqyyfJTo",
        "title": "Как посчитать код одиночества",
        "time": "01:34",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/x86KRmX6JVsCGfk5SLGEAe",
        "title": "Как просчитать важные события в этом воплощении",
        "time": "00:42",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/rBXJJvE9ff6LU82f64NesG",
        "title": "Можно ли пойти против своей кармической миссии",
        "time": "00:50",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/xtjXrA4aR76M3LqjaWSg6k",
      "title": "Сопоставление линий в психоматрице: цели, ресурсы и деньги",
      "time": "02:29",
      "categories": [
        "numerology"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/ujT7dsH9Mrt9jVr7DTUJY3",
      "title": "Что матрица человека говорит о его мировосприятии?",
      "time": "02:04",
      "categories": [
        "numerology"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "numerology",
          "label": "Нумерология"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/bbKE4n9tmCdJ5DWKckXXzP",
      "title": "Что значит «помогать себе рунами»",
      "time": "02:04",
      "categories": [
        "runes"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/8vDKKGJedJemw4eV4F45n2",
      "title": "Какая руна самая сложная для проживания",
      "time": "01:32",
      "categories": [
        "runes"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/52F9djpKTFgfFASGcYdZZ9",
      "title": "С чего начать изучение рун",
      "time": "01:27",
      "categories": [
        "runes"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/tRUcpkfgfEhSN7egxjq8nw",
      "title": "Руны как инструмент прогнозирования этапов жизни",
      "time": "05:01",
      "categories": [
        "runes"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "vertical",
    "items": [
      {
        "url": "https://kinescope.io/dzBq7bdWid1wEiXEucjxhW",
        "title": "В чем главная ошибка начинающего нумеролога",
        "time": "02:55",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/fKK54b7fXjkG6wzLK8upcw",
        "title": "Что будет, если не выполнить кармическую задачу",
        "time": "01:22",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/3yG7LvwdHqaDRLhcv4puc9",
        "title": "В психоматрице нет 2 и 3: что это значит для рождения детей",
        "time": "01:10",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/eBKKrN3JXC6CGX2niJJcFT",
        "title": "Нумерология vs психоанализ",
        "time": "00:50",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/ud46YgNCmVTDC2nR8LiuTh",
        "title": "Нумерология как инструмент самопознания",
        "time": "02:37",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/kxAEuzWEnY2BSscbmA7of2",
        "title": "Один и тот же сценарий: зачем он повторяется в роду",
        "time": "02:04",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/7vVbroxoCS6B34z1y29uqb",
      "title": "Как отличаются матрицы идеалиста и реалиста",
      "time": "01:07",
      "categories": [
        "runes"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/dMQu7RaiD1RD9EYrpnYf7W",
      "title": "Совместимы ли руны и религия",
      "time": "01:18",
      "categories": [
        "runes"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/4bT35r56cxRboW48zhjrgK",
      "title": "Зачем нужен оговор при руническом ставе",
      "time": "00:55",
      "categories": [
        "runes"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/da4j98Nh2AyCbULXBjU9Ra",
      "title": "Руны как инструмент перезапуска",
      "time": "01:13",
      "categories": [
        "runes"
      ],
      "layout": "third",
      "tags": [
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/txzsqdfjwizvei3jY9bH7y",
      "title": "Горизонт мира. Узбекистан",
      "time": "01:05:23",
      "categories": [
        "horizon"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "horizon",
          "label": "Горизонт мира"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/0vFyxQUtfe3HmbVrym7mQ5",
      "title": "Горизонт мира. Казахстан",
      "time": "45:52",
      "categories": [
        "horizon"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "horizon",
          "label": "Горизонт мира"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/rMsdA8D18eX6KkXU2DstNN",
      "title": "Горизонт мира. Непал",
      "time": "42:17",
      "categories": [
        "horizon"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "horizon",
          "label": "Горизонт мира"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/rmq4qNUQZyWrXzdjWFjQf7",
      "title": "Горизонт мира. Азербайджан (часть 1)",
      "time": "38:37",
      "categories": [
        "horizon"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "horizon",
          "label": "Горизонт мира"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/4712krTvddbCLDBRQCwsK5",
      "title": "Горизонт мира. Азербайджан (часть 2)",
      "time": "37:06",
      "categories": [
        "horizon"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "horizon",
          "label": "Горизонт мира"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/v8L7fbGH7MWziygTXtnCQn",
      "title": "Горизонт мира. Тунис",
      "time": "40:40",
      "categories": [
        "horizon"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "horizon",
          "label": "Горизонт мира"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "vertical",
    "items": [
      {
        "url": "https://kinescope.io/8MtcLF15qaUqqq5ESuuk15",
        "title": "Что такое матрица, в которой мы живем",
        "time": "02:32",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/dAAKAQrdaRu1EXdy4CJ4Es",
        "title": "777 в нумерологии: идеалист в материальном мире",
        "time": "02:20",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/xj6kY5gSeFYwT1YrRdmM1a",
        "title": "Нюансы развития близнецов",
        "time": "01:34",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/hEQ2Z6t2jQYdLAAR6DcnGM",
        "title": "Люди-антагонисты в нашей жизни: кто они и как на нас действуют",
        "time": "00:26",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/iNGtehTmqFiUTxXLV6akwN",
        "title": "Нумерология как инструмент самопознания",
        "time": "01:06",
        "categories": [
          "numerology"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/ud9fgHKj28eXfG1HBdcnKL",
        "title": "Как руны читают прогноз дня",
        "time": "01:26",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/jg4HD1qin9LdNDCupGF5hW",
        "title": "Можно ли наносить руны на тело в виде тату",
        "time": "01:25",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/6s65uJPPngxeUqwpTenupG",
      "title": "Андрей Пильгун «Вселенная средневековья»",
      "time": "03:16",
      "categories": [
        "transformation"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "transformation",
          "label": "Трансформация и развитие"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "horizontal",
    "items": [
      {
        "url": "https://kinescope.io/sGVNt85uegsxjum4FLDrs3",
        "title": "Георг Ломер \"Семь посланий. Обретение силы: тайный путь души\"",
        "time": "03:46",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/99Gsm8KzPjLJr3W3nDFT9u",
        "title": "Конкордия Антарова \"Две жизни\"",
        "time": "03:03",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/rs6etg9ot4BqVvsSF56PMX",
        "title": "Евгений Черешнев \"Форма жизни №4\"",
        "time": "02:24",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/hSbMvzsCePK4iFDYbSVTzc",
        "title": "Жан-Марк Эссале \"Эмоции и страсти на стыке земли и неба\" и \"Шэнь или Момент творения\"",
        "time": "04:21",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/n3AAZqegv9wwHd1xcJKdJZ",
        "title": "Кейтлин Даути \"Уйти красиво\"",
        "time": "03:30",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/eQcwPrEoTjoTbEJbx23Ak6",
        "title": "Шэрон Гэннон \"Магия йоги\"",
        "time": "02:23",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/7WhVCCfFzteXQVPKVVcFQG",
        "title": "Архимандрит Тихон \"Несвятые святые и другие рассказы\"",
        "time": "02:04",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/3xLmZujPw37PZLasDAQz6N",
        "title": "Антон Платов \"Практический курс рунического искусства\"",
        "time": "05:15",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      },
      {
        "url": "https://kinescope.io/e59oVSX3Ch139SnFxZznM3",
        "title": "Элизабет Хейч \"Йога и секс\"",
        "time": "05:44",
        "categories": [
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/fYcsakAW3wA1b55jFChvpW",
      "title": "Прямой эфир \"Квантовый скачок. Период полураспада\"",
      "time": "01:08:40",
      "categories": [
        "efir",
        "transformation"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "efir",
          "label": "Прямые эфиры"
        },
        {
          "category": "transformation",
          "label": "Трансформация и развитие"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/sAEu1eHMCx3X95Qru9iMiV",
      "title": "Прямой эфир \"Руны - энергия мироздания. Теория и практика\" (2024)",
      "time": "02:00:13",
      "categories": [
        "efir",
        "runes"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "efir",
          "label": "Прямые эфиры"
        },
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/mTr7gX4ietYQ8ktskjMGNJ",
      "title": "Прямой эфир \"Руны - энергия мироздания. Теория и практика\" (2025)",
      "time": "01:16:06",
      "categories": [
        "efir",
        "runes"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "efir",
          "label": "Прямые эфиры"
        },
        {
          "category": "runes",
          "label": "Руны"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "vertical",
    "items": [
      {
        "url": "https://kinescope.io/p6CS2feLhcs2iit1tpqxnH",
        "title": "Как определить время действия рунических ставов",
        "time": "01:29",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/vhCZ5yvdy5bCJtGybcUHbP",
        "title": "777 в нумерологии: идеалист в материальном мире",
        "time": "00:50",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/3ng8doHKFwYQw9hh8yy1De",
        "title": "Какие руны можно использовать для защиты",
        "time": "01:29",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/3AiESEhJD83Cn7XDMY6NvM",
        "title": "Работа с рунами: можно ли ее прекращать",
        "time": "01:23",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/21TfcqutzcKorbXUm9Kjfs",
        "title": "Когда меня просят сказать коротко: что такое руны",
        "time": "01:09",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/qF6dD8VYt1rt2hdcuaHb7y",
        "title": "Проживание рун",
        "time": "01:28",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/ubiXmiwLJt4YyTykGqyQSu",
        "title": "Рунические ставы: как не навредить",
        "time": "01:29",
        "categories": [
          "runes"
        ],
        "layout": "third",
        "tags": [
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/i3hPFFk47no2EeXf1rb6hK",
      "title": "Прямой эфир \"Кармические отношения\"",
      "time": "59:30",
      "categories": [
        "efir",
        "family"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "efir",
          "label": "Прямые эфиры"
        },
        {
          "category": "family",
          "label": "Отношения"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "horizontal",
    "items": [
      {
        "url": "https://kinescope.io/cA5UxrnNt2SGvPMJDi3Vi4",
        "title": "Онлайн-интенсив \"Коды судьбы. Нумерология самопознания\"",
        "time": "02:17:31",
        "categories": [
          "efir",
          "numerology"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/vUKb93nGkgHBnySevcjoFX",
        "title": "Вебинар \"Как по дате рождения узнать все о себе и других\"",
        "time": "01:43:14",
        "categories": [
          "efir",
          "numerology"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/eewnzFCpM24TZpQKKru4Dd",
        "title": "Прямой эфир \"Как расшифровать магию цифр. Разбор дат подписчиков в прямом эфире\"",
        "time": "01:56:28",
        "categories": [
          "efir",
          "numerology"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/4rBcGtWkAZkmB6Gfy7ngef",
        "title": "Прямой эфир \"Нумерология на каждый день\" (2026)",
        "time": "02:14:30",
        "categories": [
          "efir",
          "numerology"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/vKgsp1R8jzckmDB44DZXaf",
        "title": "Прямой эфир \"Нумерология на каждый день\" (2025)",
        "time": "02:15:09",
        "categories": [
          "efir",
          "numerology"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "numerology",
            "label": "Нумерология"
          }
        ]
      },
      {
        "url": "https://kinescope.io/cDYUhh8Yvdfdw2JoG54QSc",
        "title": "Прямой эфир \"Нумерология отношений. Эзотерика любви\" (14 февраля 2026)",
        "time": "02:08:13",
        "categories": [
          "numerology",
          "family"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "numerology",
            "label": "Нумерология"
          },
          {
            "category": "family",
            "label": "Отношения"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/8tYSQExM7PeRLtGaYA8rmF",
      "title": "Прямой эфир \"Куда мы идем?\"",
      "time": "01:30:26",
      "categories": [
        "efir",
        "transformation"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "efir",
          "label": "Прямые эфиры"
        },
        {
          "category": "transformation",
          "label": "Трансформация и развитие"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "horizontal",
    "items": [
      {
        "url": "https://kinescope.io/nWDCBqd2nGHzveuoMYoz7k",
        "title": "Бесплатный вебинар \"Руническое искусство – инструмент программирования реальности\"",
        "time": "01:33:23",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/72FPrVZPFfNG3yXsH6fVy8",
        "title": "Бесплатный мастер-класс \"Руны - энергия мироздания. Теория и практика\"",
        "time": "02:16:24",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/eMGsT3YbBT4K8HZq9GjCEv",
        "title": "Вебинар по рунам и рунической магии",
        "time": "01:23:17",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/aNDhnevEfzg2VJwnWH5sQD",
        "title": "Бесплатный онлайн-вебинар \"Руны - инструмент самопознания и терапии, диагностики и корректировки реальности\"",
        "time": "01:19:38",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/i1N6hjJw9XUXMJPcHTMHUN/plvph1Vs",
        "title": "Прямой эфир \"Энергия года и что она несет. Ответы на вопросы подписчиков\" (январь 2025)",
        "time": "02:37:21",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/hM7PMyzorry4efrwaxRLgB",
        "title": "Прямой эфир \"Ответы на вопросы подписчиков\" (февраль 2025)",
        "time": "01:49:09",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      },
      {
        "url": "https://kinescope.io/pdUS72AGcQKmQRRL7gJPfN",
        "title": "Прямой эфир \"Ответы на вопросы подписчиков\" (апрель 2025)",
        "time": "01:44:17",
        "categories": [
          "efir",
          "runes"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "runes",
            "label": "Руны"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/jAUKmuHZz9UCQhiNXg22cz",
      "title": "Прямой эфир \"Как изменилась энергия планеты и пространства\"",
      "time": "01:17:38",
      "categories": [
        "efir",
        "transformation"
      ],
      "layout": "full",
      "tags": [
        {
          "category": "efir",
          "label": "Прямые эфиры"
        },
        {
          "category": "transformation",
          "label": "Трансформация и развитие"
        }
      ]
    }
  },
  {
    "type": "slider",
    "variant": "horizontal",
    "items": [
      {
        "url": "https://kinescope.io/uqFha7oejKVQNiGdBknz1L",
        "title": "Прямой эфир \"Связь медицины, психологии и магии\"",
        "time": "01:12:15",
        "categories": [
          "efir",
          "esoterica"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "esoterica",
            "label": "Эзотерика"
          }
        ]
      },
      {
        "url": "https://kinescope.io/jPCXj8TurY6ngrhV21mEpp",
        "title": "Прямой эфир \"Сила рода\"",
        "time": "01:20:00",
        "categories": [
          "efir",
          "family"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "family",
            "label": "Семья, отношения, дети, род"
          }
        ]
      },
      {
        "url": "https://kinescope.io/njxGxBLNpFKRc1saJJ19q4",
        "title": "Прямой эфир \"Страстная неделя\"",
        "time": "01:08:13",
        "categories": [
          "efir",
          "esoterica"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "esoterica",
            "label": "Эзотерика"
          }
        ]
      },
      {
        "url": "https://kinescope.io/tQjJbxTGsWFLKfxaG5GDiv",
        "title": "Прямой эфир \"Ченнелинг: правда или ложь\"",
        "time": "01:39:55",
        "categories": [
          "efir",
          "esoterica"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "esoterica",
            "label": "Эзотерика"
          }
        ]
      },
      {
        "url": "https://kinescope.io/puNswRjxMf8aWUbEdhTZiP",
        "title": "Прямой эфир \"Чистый четверг\"",
        "time": "01:50:17",
        "categories": [
          "efir",
          "esoterica"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "esoterica",
            "label": "Эзотерика"
          }
        ]
      },
      {
        "url": "https://kinescope.io/sKug4QYPdDQGTaoddj3Akn",
        "title": "Прямой эфир \"Социальный\"",
        "time": "01:59:11",
        "categories": [
          "efir",
          "transformation"
        ],
        "layout": "half",
        "tags": [
          {
            "category": "efir",
            "label": "Прямые эфиры"
          },
          {
            "category": "transformation",
            "label": "Трансформация и развитие"
          }
        ]
      }
    ]
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/xd2AX9raFFzz6y4BQEnCFj",
      "title": "Ретрит \"Очищение, самопознание, единение с природой\"",
      "time": "08:21",
      "categories": [
        "meditation"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "meditation",
          "label": "Медитации и практики"
        }
      ]
    }
  },
  {
    "type": "card",
    "card": {
      "url": "https://kinescope.io/53SoFVcLW6XkBiGjAeo3fe",
      "title": "Ретрит \"Погружение в себя\"",
      "time": "01:16:06",
      "categories": [
        "meditation"
      ],
      "layout": "half",
      "tags": [
        {
          "category": "meditation",
          "label": "Медитации и практики"
        }
      ]
    }
  }
];
