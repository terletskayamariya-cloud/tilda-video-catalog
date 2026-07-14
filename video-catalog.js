/* Каталог видео для Tilda. Сгенерировано из рабочего HTML-блока. */
(function () {
  'use strict';

  const root = document.getElementById('video-catalog-root');
  if (!root) {
    console.error('[video-catalog] Не найден #video-catalog-root');
    return;
  }

  root.innerHTML = "<!-- =====================================================\n     HTML-КАРТОЧКИ\n\n     data-category  — рубрика карточки (через пробел можно несколько)\n     video-card--full   — 1 в ряд\n     video-card--half   — 2 в ряд\n     video-card--third  — 3 в ряд / вертикальная\n===================================================== -->\n\n<section class=\"video-section\">\n  <div class=\"video-container\">\n    <div class=\"video-grid\" id=\"videoGrid\">\n\n      <!-- 2 карточки в ряд — Нумерология -->\n      <article class=\"video-card video-card--half\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/jH4dVnZbY2EYWssNp9MPXr\" title=\"Вектор развития личности\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Вектор развития личности</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">02:35</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--half\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/ftNmAb38wYrXN1QDVKpGcm\"\n            title=\"Мотивация и жизненные сценарии людей с разными векторами развития\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Мотивация и жизненные сценарии людей с разными векторами развития</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">03:19</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 3 карточки в ряд — Нумерология -->\n      <article class=\"video-card video-card--third\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/wcuTFuP6Ye4QXG7CMZ5CEX\" title=\"Влияет ли на судьбу смена даты рождения\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Влияет ли на судьбу смена даты рождения</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">00:24</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--third\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/fX1YGSvLTxFeYNT7k1TYrW\" title=\"Повторяющиеся цифры: 666\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Повторяющиеся цифры: 666</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">00:34</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--third\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/sxiKVwP4FLPiuwp6ALrjZh\" title=\"Как дата рождения влияет на судьбу\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Как дата рождения влияет на судьбу</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:25</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 1 карточка на ряд — Руны -->\n      <article class=\"video-card video-card--full\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/vFWeb46Zi87xUSvYgSuNs1\" title=\"Руны как язык программирования\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Руны как язык программирования</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">02:35</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- Слайдер 1 — Нумерология -->\n      <div class=\"video-slider\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/wcuTFuP6Ye4QXG7CMZ5CEX\" title=\"Влияет ли на судьбу смена даты рождения?\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Влияет ли на судьбу смена даты рождения?</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:35</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/fX1YGSvLTxFeYNT7k1TYrW\" title=\"Повторяющиеся цифры: 666\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Повторяющиеся цифры: 666</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:35</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/sxiKVwP4FLPiuwp6ALrjZh\" title=\"Как дата рождения влияет на судьбу\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Как дата рождения влияет на судьбу</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:35</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/w6UQCWYjaq6tzFzqyyfJTo\" title=\"Как посчитать код одиночества\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Как посчитать код одиночества</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:34</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/x86KRmX6JVsCGfk5SLGEAe\" title=\"Как просчитать важные события в этом воплощении\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Как просчитать важные события в этом воплощении</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">00:42</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/rBXJJvE9ff6LU82f64NesG\" title=\"Можно ли пойти против своей кармической миссии\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Можно ли пойти против своей кармической миссии</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">00:50</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n      <!-- 2 карточки в ряд — Нумерология -->\n      <article class=\"video-card video-card--half\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/xtjXrA4aR76M3LqjaWSg6k\"\n            title=\"Сопоставление линий в психоматрице: цели, ресурсы и деньги\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Сопоставление линий в психоматрице: цели, ресурсы и деньги</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">02:29</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--half\" data-category=\"numerology\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/ujT7dsH9Mrt9jVr7DTUJY3\"\n            title=\"Что матрица человека говорит о его мировосприятии?\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Что матрица человека говорит о его мировосприятии?</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">02:04</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 3 карточки в ряд — Руны -->\n      <article class=\"video-card video-card--third\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/bbKE4n9tmCdJ5DWKckXXzP\" title=\"Что значит помогать себе рунами\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Что значит «помогать себе рунами»</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">02:04</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--third\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/8vDKKGJedJemw4eV4F45n2\" title=\"Какая руна самая сложная для проживания\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Какая руна самая сложная для проживания</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:32</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--third\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/52F9djpKTFgfFASGcYdZZ9\" title=\"С чего начать изучение рун\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">С чего начать изучение рун</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:27</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 1 карточка в ряд — Руны -->\n      <article class=\"video-card video-card--full\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/tRUcpkfgfEhSN7egxjq8nw\"\n            title=\"Руны как инструмент прогнозирования этапов жизни\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Руны как инструмент прогнозирования этапов жизни</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">05:01</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- Слайдер 2 — Нумерология -->\n      <div class=\"video-slider\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/dzBq7bdWid1wEiXEucjxhW\" title=\"В чем главная ошибка начинающего нумеролога\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">В чем главная ошибка начинающего нумеролога</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:55</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/fKK54b7fXjkG6wzLK8upcw\" title=\"Что будет, если не выполнить кармическую задачу\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Что будет, если не выполнить кармическую задачу</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:22</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/3yG7LvwdHqaDRLhcv4puc9\"\n                  title=\"В психоматрице нет 2 и 3: что это значит для рождения детей\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">В психоматрице нет 2 и 3: что это значит для рождения детей</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:10</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/eBKKrN3JXC6CGX2niJJcFT\" title=\"Нумерология vs психоанализ\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Нумерология vs психоанализ</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">00:50</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/ud46YgNCmVTDC2nR8LiuTh\" title=\"Нумерология как инструмент самопознания\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Нумерология как инструмент самопознания</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:37</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/kxAEuzWEnY2BSscbmA7of2\"\n                  title=\"Один и тот же сценарий: зачем он повторяется в роду\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Один и тот же сценарий: зачем он повторяется в роду</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:04</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n      <!-- 1 карточка в ряд — Руны -->\n      <article class=\"video-card video-card--full\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/7vVbroxoCS6B34z1y29uqb\" title=\"Как отличаются матрицы идеалиста и реалиста\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Как отличаются матрицы идеалиста и реалиста</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:07</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 3 карточки в ряд — Руны -->\n      <article class=\"video-card video-card--third\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/dMQu7RaiD1RD9EYrpnYf7W\" title=\"Совместимы ли руны и религия\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Совместимы ли руны и религия</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:18</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--third\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/4bT35r56cxRboW48zhjrgK\" title=\"Зачем нужен оговор при руническом ставе\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Зачем нужен оговор при руническом ставе</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">00:55</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- Исправлено: заголовок был дублем предыдущей карточки -->\n      <article class=\"video-card video-card--third\" data-category=\"runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/da4j98Nh2AyCbULXBjU9Ra\" title=\"Руны как инструмент перезапуска\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Руны как инструмент перезапуска</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:13</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 2 карточки в ряд — Горизонт мира -->\n      <article class=\"video-card video-card--half\" data-category=\"horizon\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/txzsqdfjwizvei3jY9bH7y\" title=\"Горизонт мира. Узбекистан\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Горизонт мира. Узбекистан</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:05:23</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"horizon\">Горизонт мира</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--half\" data-category=\"horizon\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/0vFyxQUtfe3HmbVrym7mQ5\" title=\"Горизонт мира. Казахстан\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Горизонт мира. Казахстан</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">45:52</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"horizon\">Горизонт мира</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 1 карточка в ряд — Горизонт мира -->\n      <article class=\"video-card video-card--full\" data-category=\"horizon\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/rMsdA8D18eX6KkXU2DstNN\" title=\"Горизонт мира. Непал\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Горизонт мира. Непал</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">42:17</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"horizon\">Горизонт мира</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 2 карточки в ряд — Горизонт мира -->\n      <article class=\"video-card video-card--half\" data-category=\"horizon\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/rmq4qNUQZyWrXzdjWFjQf7\" title=\"Горизонт мира. Азербайджан (часть 1)\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Горизонт мира. Азербайджан (часть 1)</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">38:37</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"horizon\">Горизонт мира</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--half\" data-category=\"horizon\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/4712krTvddbCLDBRQCwsK5\" title=\"Горизонт мира. Азербайджан (часть 2)\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Горизонт мира. Азербайджан (часть 2)</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">37:06</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"horizon\">Горизонт мира</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- 1 карточка в ряд — Горизонт мира -->\n      <article class=\"video-card video-card--full\" data-category=\"horizon\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/v8L7fbGH7MWziygTXtnCQn\" title=\"Горизонт мира. Тунис\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Горизонт мира. Тунис</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">40:40</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"horizon\">Горизонт мира</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- Слайдер 2 — Нумерология -->\n      <div class=\"video-slider\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/8MtcLF15qaUqqq5ESuuk15\" title=\"Что такое матрица, в которой мы живем\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Что такое матрица, в которой мы живем</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:32</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/dAAKAQrdaRu1EXdy4CJ4Es\" title=\"777 в нумерологии: идеалист в материальном мире\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">777 в нумерологии: идеалист в материальном мире</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:20</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/xj6kY5gSeFYwT1YrRdmM1a\"\n                  title=\"Нюансы развития близнецов\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Нюансы развития близнецов</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:34</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/hEQ2Z6t2jQYdLAAR6DcnGM\" title=\"Люди-антагонисты в нашей жизни: кто они и как на нас действуют\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Люди-антагонисты в нашей жизни: кто они и как на нас действуют</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">00:26</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/iNGtehTmqFiUTxXLV6akwN\" title=\"Энергетические числа 11 и 22\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Нумерология как инструмент самопознания</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:06</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/ud9fgHKj28eXfG1HBdcnKL\"\n                  title=\"Как руны читают прогноз дня\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Как руны читают прогноз дня</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:26</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n            \n                        <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/jg4HD1qin9LdNDCupGF5hW\"\n                  title=\"Можно ли наносить руны на тело в виде тату\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Можно ли наносить руны на тело в виде тату</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:25</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n      <!-- 1 карточка в ряд -->\n      <article class=\"video-card video-card--full\" data-category=\"transformation\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/6s65uJPPngxeUqwpTenupG\" title=\"Андрей Пильгун Вселенная средневековья\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Андрей Пильгун «Вселенная средневековья»</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">03:16</span>\n            <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n          </div>\n        </div>\n      </article>\n\n      <!-- Дополнительный слайдер с горизонтальными видео -->\n      <div class=\"video-slider video-slider--horizontal\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/sGVNt85uegsxjum4FLDrs3\" title=\"Георг Ломер Семь посланий. Обретение силы: тайный путь души\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Георг Ломер \"Семь посланий. Обретение силы: тайный путь души\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">03:46</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/99Gsm8KzPjLJr3W3nDFT9u\" title=\"Конкордия Антарова Две жизни\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Конкордия Антарова \"Две жизни\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">03:03</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/rs6etg9ot4BqVvsSF56PMX\" title=\"Евгений Черешнев Форма жизни №4\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Евгений Черешнев \"Форма жизни №4\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:24</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/hSbMvzsCePK4iFDYbSVTzc\" title=\"Жан-Марк Эссале Эмоции и страсти на стыке земли и неба и Шэнь или Момент творения\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Жан-Марк Эссале \"Эмоции и страсти на стыке земли и неба\" и \"Шэнь или Момент творения\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">04:21</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/n3AAZqegv9wwHd1xcJKdJZ\" title=\"Кейтлин Даути Уйти красиво\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Кейтлин Даути \"Уйти красиво\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">03:30</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/eQcwPrEoTjoTbEJbx23Ak6\" title=\"Шэрон Гэннон Магия йоги\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Шэрон Гэннон \"Магия йоги\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:23</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n            \n                        <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/7WhVCCfFzteXQVPKVVcFQG\" title=\"Архимандрит Тихон Несвятые святые и другие рассказы\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Архимандрит Тихон \"Несвятые святые и другие рассказы\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:04</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n                        <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/3xLmZujPw37PZLasDAQz6N\" title=\"Антон Платов Практический курс рунического искусства\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Антон Платов \"Практический курс рунического искусства\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">05:15</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n            \n                                    <article class=\"video-card video-card--half\" data-category=\"transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/e59oVSX3Ch139SnFxZznM3\" title=\"Элизабет Хейч Йога и секс\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Элизабет Хейч \"Йога и секс\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">05:44</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n              </div>\n            </article>\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n\n\n      <!-- 1 карточка в ряд -->\n      <article class=\"video-card video-card--full\" data-category=\"efir transformation\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/fYcsakAW3wA1b55jFChvpW\" title=\"Прямой эфир Квантовый скачок. Период полураспада\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Квантовый скачок. Период полураспада\"</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:08:40</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n          </div>\n        </div>\n      </article>\n\n\n\n\n      <!-- 2 карточки в ряд -->\n      <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/sAEu1eHMCx3X95Qru9iMiV\" title=\"Прямой эфир Руны - энергия мироздания. Теория и практика 2024\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Руны - энергия мироздания. Теория и практика\" (2024)</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">02:00:13</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/mTr7gX4ietYQ8ktskjMGNJ\" title=\"Прямой эфир Руны - энергия мироздания. Теория и практика 2025\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Руны - энергия мироздания. Теория и практика\" (2025)</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:16:06</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n          </div>\n        </div>\n      </article>\n\n\n\n\n     <!-- Слайдер 2 — Нумерология -->\n      <div class=\"video-slider\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/p6CS2feLhcs2iit1tpqxnH\" title=\"Как определить время действия рунических ставов\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Как определить время действия рунических ставов</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:29</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/vhCZ5yvdy5bCJtGybcUHbP\" title=\"Как доставать руны\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">777 в нумерологии: идеалист в материальном мире</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">00:50</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/3ng8doHKFwYQw9hh8yy1De\"\n                  title=\"Какие руны можно использовать для защиты\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Какие руны можно использовать для защиты</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:29</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/3AiESEhJD83Cn7XDMY6NvM\" title=\"Работа с рунами: можно ли ее прекращать\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Работа с рунами: можно ли ее прекращать</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:23</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/21TfcqutzcKorbXUm9Kjfs\" title=\"Когда меня просят сказать коротко: что такое руны\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Когда меня просят сказать коротко: что такое руны</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:09</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/qF6dD8VYt1rt2hdcuaHb7y\"\n                  title=\"Проживание рун\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Проживание рун</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:28</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n            \n                        <article class=\"video-card video-card--third\" data-category=\"runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/ubiXmiwLJt4YyTykGqyQSu\"\n                  title=\"Рунические ставы: как не навредить\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Рунические ставы: как не навредить</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:29</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n              </div>\n            </article>\n\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n\n      <!-- 1 карточка в ряд -->\n      <article class=\"video-card video-card--full\" data-category=\"efir family\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/i3hPFFk47no2EeXf1rb6hK\" title=\"Прямой эфир Кармические отношения\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Кармические отношения\"</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">59:30</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"family\">Отношения</button>\n                </div>\n          </div>\n        </div>\n      </article>\n   \n\n     <!-- Дополнительный слайдер с горизонтальными видео -->\n      <div class=\"video-slider video-slider--horizontal\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--half\" data-category=\"efir numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/cA5UxrnNt2SGvPMJDi3Vi4\" title=\"Онлайн-интенсив Коды судьбы. Нумерология самопознания\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Онлайн-интенсив \"Коды судьбы. Нумерология самопознания\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:17:31</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/vUKb93nGkgHBnySevcjoFX\" title=\"Вебинар Как по дате рождения узнать все о себе и других\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Вебинар \"Как по дате рождения узнать все о себе и других\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:43:14</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/eewnzFCpM24TZpQKKru4Dd\" title=\"Прямой эфир Как расшифровать магию цифр. Разбор дат подписчиков в прямом эфире\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Как расшифровать магию цифр. Разбор дат подписчиков в прямом эфире\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:56:28</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/4rBcGtWkAZkmB6Gfy7ngef\" title=\"Прямой эфир Нумерология на каждый день 2026\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Нумерология на каждый день\" (2026)</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:14:30</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir numerology\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/vKgsp1R8jzckmDB44DZXaf\" title=\"Прямой эфир Нумерология на каждый день 2025\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Нумерология на каждый день\" (2025)</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:15:09</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"numerology family\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/cDYUhh8Yvdfdw2JoG54QSc\" title=\"Прямой эфир Нумерология отношений. Эзотерика любви 14 февраля 2026\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Нумерология отношений. Эзотерика любви\" (14 февраля 2026)</h3>\n               <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:08:13</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"numerology\">Нумерология</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"family\">Отношения</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n\n      <!-- 1 карточка в ряд -->\n      <article class=\"video-card video-card--full\" data-category=\"efir transformation\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/8tYSQExM7PeRLtGaYA8rmF\" title=\"Прямой эфир Куда мы идем?\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Куда мы идем?\"</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:30:26</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n          </div>\n        </div>\n      </article>\n\n     <!-- Дополнительный слайдер с горизонтальными видео -->\n      <div class=\"video-slider video-slider--horizontal\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/nWDCBqd2nGHzveuoMYoz7k\" title=\"Бесплатный вебинар Руническое искусство – инструмент программирования реальности\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Бесплатный вебинар \"Руническое искусство – инструмент программирования реальности\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:33:23</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/72FPrVZPFfNG3yXsH6fVy8\" title=\"Бесплатный мастер-класс Руны - энергия мироздания. Теория и практика\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Бесплатный мастер-класс \"Руны - энергия мироздания. Теория и практика\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:16:24</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/eMGsT3YbBT4K8HZq9GjCEv\" title=\"Вебинар по рунам и рунической магии\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Вебинар по рунам и рунической магии</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:23:17</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/aNDhnevEfzg2VJwnWH5sQD\" title=\"Бесплатный онлайн-вебинар Руны - инструмент самопознания и терапии, диагностики и корректировки реальности\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Бесплатный онлайн-вебинар \"Руны - инструмент самопознания и терапии, диагностики и корректировки реальности\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:19:38</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n            \n                        <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/i1N6hjJw9XUXMJPcHTMHUN/plvph1Vs\" title=\"Прямой эфир Энергия года и что она несет. Ответы на вопросы подписчиков (январь 2025)\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Энергия года и что она несет. Ответы на вопросы подписчиков\" (январь 2025)</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">02:37:21</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n            \n            <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/hM7PMyzorry4efrwaxRLgB\" title=\"Прямой эфир Ответы на вопросы подписчиков (февраль 2025)\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Ответы на вопросы подписчиков\" (февраль 2025)</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:49:09</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n            \n                        <article class=\"video-card video-card--half\" data-category=\"efir runes\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/pdUS72AGcQKmQRRL7gJPfN\" title=\"Прямой эфир Ответы на вопросы подписчиков (апрель 2025)\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Ответы на вопросы подписчиков\" (апрель 2025)</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:44:17</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"runes\">Руны</button>\n                </div>\n                </div>\n              </div>\n            </article>\n            \n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n      <!-- 1 карточка в ряд -->\n      <article class=\"video-card video-card--full\" data-category=\"efir transformation\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/jAUKmuHZz9UCQhiNXg22cz\" title=\"Прямой эфир Как изменилась энергия планеты и пространства\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Как изменилась энергия планеты и пространства\"</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:17:38</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n          </div>\n        </div>\n      </article>\n      \n      \n           <!-- Дополнительный слайдер с горизонтальными видео -->\n      <div class=\"video-slider video-slider--horizontal\" data-video-slider>\n        <button class=\"video-slider-arrow video-slider-arrow--prev is-hidden\" type=\"button\" aria-label=\"Назад\"></button>\n        <div class=\"video-slider-viewport\">\n          <div class=\"video-slider-track\">\n\n            <article class=\"video-card video-card--half\" data-category=\"efir esoterica\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/uqFha7oejKVQNiGdBknz1L\" title=\"Прямой эфир Связь медицины, психологии и магии\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Связь медицины, психологии и магии\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:12:15</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"esoterica\">Эзотерика</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir family\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/jPCXj8TurY6ngrhV21mEpp\" title=\"Прямой эфир Сила рода\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Сила рода\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:20:00</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"family\">Семья, отношения, дети, род</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir esoterica\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/njxGxBLNpFKRc1saJJ19q4\" title=\"Прямой эфир Страстная неделя\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Страстная неделя\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:08:13</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"esoterica\">Эзотерика</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir esoterica\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/tQjJbxTGsWFLKfxaG5GDiv\" title=\"Прямой эфир Ченнелинг: правда или ложь\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Ченнелинг: правда или ложь\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:39:55</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"esoterica\">Эзотерика</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n            <article class=\"video-card video-card--half\" data-category=\"efir esoterica\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/puNswRjxMf8aWUbEdhTZiP\" title=\"Прямой эфир Чистый четверг\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Чистый четверг\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:50:17</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"esoterica\">Эзотерика</button>\n                </div>\n                </div>\n              </div>\n            </article>\n            \n                        <article class=\"video-card video-card--half\" data-category=\"efir transformation\">\n              <div class=\"video-cover\">\n                <iframe data-src=\"https://kinescope.io/sKug4QYPdDQGTaoddj3Akn\" title=\"Прямой эфир Социальный\"\n                  loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n              <div class=\"video-content\">\n                <h3 class=\"video-title\">Прямой эфир \"Социальный\"</h3>\n                <div class=\"video-bottom\">\n                  <span class=\"video-time\">01:59:11</span>\n                  <div class=\"video-tags\">\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"efir\">Прямые эфиры</button>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"transformation\">Трансформация и развитие</button>\n                </div>\n                </div>\n              </div>\n            </article>\n\n          </div>\n        </div>\n        <button class=\"video-slider-arrow video-slider-arrow--next\" type=\"button\" aria-label=\"Вперёд\"></button>\n      </div>\n\n      <!-- 2 карточки в ряд -->\n      <article class=\"video-card video-card--half\" data-category=\"meditation\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/xd2AX9raFFzz6y4BQEnCFj\" title=\"Ретрит Очищение, самопознание, единение с природой\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Ретрит \"Очищение, самопознание, единение с природой\"</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">08:21</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"meditation\">Медитации и практики</button>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"video-card video-card--half\" data-category=\"meditation\">\n        <div class=\"video-cover\">\n          <iframe data-src=\"https://kinescope.io/53SoFVcLW6XkBiGjAeo3fe\" title=\"Ретрит Погружение в себя\"\n            loading=\"lazy\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n        <div class=\"video-content\">\n          <h3 class=\"video-title\">Прямой эфир \"Руны - энергия мироздания. Теория и практика\" (2025)</h3>\n          <div class=\"video-bottom\">\n            <span class=\"video-time\">01:16:06</span>\n                  <button class=\"video-tag\" type=\"button\" data-filter=\"meditation\">Медитации и практики</button>\n          </div>\n        </div>\n      </article>\n\n      <div class=\"video-load-more-wrap\">\n        <button class=\"video-load-more-button\" type=\"button\" aria-controls=\"videoGrid\">\n          Загрузить ещё\n        </button>\n      </div>\n\n\n\n\n\n\n    </div>\n  </div>\n</section>\n\n<!-- Попап для карточек-картинок с data-video -->\n<div class=\"video-modal\" id=\"videoModal\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Видео\">\n  <button class=\"video-modal__close\" type=\"button\" aria-label=\"Закрыть\">×</button>\n  <div class=\"video-modal__inner\" id=\"videoModalInner\"></div>\n</div>";

(function () {
  'use strict';

  /* =====================================================
     КОНСТАНТЫ
  ===================================================== */

  const VIDEO_MENU_REC_IDS  = ['#rec2223698001', '#rec2234092691'];
  const SCALE_SOURCE_REC    = '#rec2223698001';
  const AUTOSCALE_DELAYS    = [300, 1000]; // доп. задержки автомасштаба

  /* На десктопе порция считается визуальными рядами, на мобильном — блоками. */
  const DESKTOP_ROWS_PER_PAGE = 4;
  const MOBILE_ITEMS_PER_PAGE = 6;

  const MENU_ITEM_SELECTOR  = VIDEO_MENU_REC_IDS
    .map(id => `${id} .video-menu-filter`)
    .join(', ');

  /* =====================================================
     УТИЛИТЫ
  ===================================================== */

  /** Возвращает float из CSS-значения вида "700px" */
  function parsePx(value) {
    return parseFloat(value) || 0;
  }

  function isMobile() {
    return window.innerWidth < 640;
  }

  /** Считывает category из класса вида vf-go-<category> */
  function getCategoryFromEl(el) {
    for (const cls of el.classList) {
      if (cls.startsWith('vf-go-')) return cls.slice(6);
    }
    return '';
  }

  function isInsideFeed(event) {
    return Boolean(event.target.closest('.uc-feed'));
  }

  /* =====================================================
     АВТОМАСШТАБИРОВАНИЕ
  ===================================================== */

  let autoscaleTimer = null;
  let videoCardsInited = false;
  let autoscaleObserverStarted = false;
  let loadedPages = 1;

  function getGridBaseWidth() {
    const section = document.querySelector('.video-section');
    if (!section) return 700;
    return parsePx(getComputedStyle(section).getPropertyValue('--video-grid-width')) || 700;
  }

  function getTildaScale() {
    const artboard = document.querySelector(`${SCALE_SOURCE_REC} .t396__artboard`);
    if (!artboard) return 1;

    const transform = getComputedStyle(artboard).transform;
    if (transform && transform !== 'none') {
      try {
        const { a } = new DOMMatrixReadOnly(transform);
        if (a > 0) return a;
      } catch (_) {}
    }

    const rect = artboard.getBoundingClientRect();
    if (artboard.offsetWidth && rect.width) {
      const scale = rect.width / artboard.offsetWidth;
      if (scale > 0 && scale < 5) return scale;
    }

    return 1;
  }

  function updateVideoAutoscale() {
    const container = document.querySelector('.video-section .video-container');
    const grid      = document.querySelector('.video-section .video-grid');
    if (!container || !grid) return;

    const baseWidth = getGridBaseWidth();
    const scale     = getTildaScale();

    grid.style.width         = `${baseWidth}px`;
    grid.style.transform     = `scale(${scale})`;
    grid.style.transformOrigin = 'top left';

    container.style.width = `${baseWidth * scale}px`;

    requestAnimationFrame(() => {
      container.style.height = `${grid.scrollHeight * scale}px`;
    });
  }

  function scheduleAutoscale() {
    clearTimeout(autoscaleTimer);
    autoscaleTimer = setTimeout(() => {
      updateVideoAutoscale();
      window.updateVideoSliders?.();
    }, 50);
  }

  /* =====================================================
     ПОРЦИОННЫЙ ВЫВОД
  ===================================================== */

  function getPaginationItems() {
    const grid = document.querySelector('.video-section .video-grid');
    if (!grid) return [];

    return Array.from(grid.children).filter(item =>
      item.classList.contains('video-card') || item.hasAttribute('data-video-slider')
    );
  }

  function isPaginationItemVisible(item) {
    if (item.classList.contains('video-card')) {
      return !item.classList.contains('is-hidden');
    }

    return Boolean(item.querySelector('.video-card:not(.is-hidden)'));
  }

  function getDesktopItemUnits(item) {
    if (item.hasAttribute('data-video-slider') || item.classList.contains('video-card--full')) return 6;
    if (item.classList.contains('video-card--half')) return 3;
    if (item.classList.contains('video-card--third')) return 2;
    return 6;
  }

  function buildPaginationRows(items) {
    if (isMobile()) return items.map(item => [item]);

    const rows = [];
    let row = [];
    let usedUnits = 0;

    items.forEach(item => {
      const units = getDesktopItemUnits(item);

      if (row.length && usedUnits + units > 6) {
        rows.push(row);
        row = [];
        usedUnits = 0;
      }

      row.push(item);
      usedUnits += units;

      if (usedUnits >= 6) {
        rows.push(row);
        row = [];
        usedUnits = 0;
      }
    });

    if (row.length) rows.push(row);
    return rows;
  }

  function getRowsPerPage() {
    return isMobile() ? MOBILE_ITEMS_PER_PAGE : DESKTOP_ROWS_PER_PAGE;
  }

  function applyLoadMorePagination(reset = false) {
    if (reset) loadedPages = 1;

    const allItems = getPaginationItems();
    const matchingItems = allItems.filter(isPaginationItemVisible);
    const rows = buildPaginationRows(matchingItems);
    const visibleRowsCount = loadedPages * getRowsPerPage();

    allItems.forEach(item => item.classList.remove('is-load-more-hidden'));

    rows.forEach((row, rowIndex) => {
      const shouldHide = rowIndex >= visibleRowsCount;
      row.forEach(item => item.classList.toggle('is-load-more-hidden', shouldHide));
    });

    const wrap = document.querySelector('.video-section .video-load-more-wrap');
    const button = wrap?.querySelector('.video-load-more-button');
    const hasMore = rows.length > visibleRowsCount;

    if (wrap) wrap.hidden = !hasMore;
    if (button) button.setAttribute('aria-expanded', hasMore ? 'false' : 'true');

    requestAnimationFrame(() => {
      window.initLazyVideoIframes?.();
      window.updateVideoAutoscale?.();
      window.updateVideoSliders?.();
    });
  }

  function loadMoreVideos() {
    loadedPages += 1;
    applyLoadMorePagination();
    scheduleAutoscale();
  }

  /* Следим за изменениями сетки (фильтрация скрывает/показывает карточки) */
  function startAutoscaleObserver() {
    if (autoscaleObserverStarted) return;

    const grid = document.querySelector('.video-section .video-grid');
    if (!grid) return;

    autoscaleObserverStarted = true;

    new MutationObserver(scheduleAutoscale).observe(grid, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style'],
    });
  }

  /* =====================================================
     ФИЛЬТРАЦИЯ
  ===================================================== */

  function filterCards(category) {
    document.querySelectorAll('.video-section .video-card').forEach(card => {
      const cats = (card.dataset.category || '').trim().split(/\s+/);
      card.classList.toggle('is-hidden', category !== 'all' && !cats.includes(category));
    });

    document.querySelectorAll(MENU_ITEM_SELECTOR).forEach(item => {
      item.classList.toggle('is-active', getCategoryFromEl(item) === category);
    });

    applyLoadMorePagination(true);
    scheduleAutoscale();
    window.updateVideoSliders?.();
  }

  /* =====================================================
     МОДАЛЬНОЕ ОКНО
  ===================================================== */

  function openModal(videoUrl) {
    const modal      = document.getElementById('videoModal');
    const modalInner = document.getElementById('videoModalInner');
    if (!modal || !modalInner || !videoUrl) return;

    const isDirectVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl);

    if (isDirectVideo) {
      modalInner.innerHTML = `<video controls autoplay><source src="${videoUrl}"></video>`;
    } else {
      const sep = videoUrl.includes('?') ? '&' : '?';
      modalInner.innerHTML =
        `<iframe src="${videoUrl}${sep}autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }

    modal.classList.add('is-open');
  }

  function closeModal() {
    const modal      = document.getElementById('videoModal');
    const modalInner = document.getElementById('videoModalInner');
    if (!modal || !modalInner) return;
    modal.classList.remove('is-open');
    modalInner.innerHTML = '';
  }

  /* =====================================================
     ДЕЛЕГИРОВАННЫЕ ОБРАБОТЧИКИ КЛИКОВ
  ===================================================== */

  document.addEventListener('click', event => {
    if (isInsideFeed(event)) return;

    // Показ следующей порции без предварительной загрузки скрытых iframe
    const loadMoreButton = event.target.closest('.video-section .video-load-more-button');
    if (loadMoreButton) {
      event.preventDefault();
      loadMoreVideos();
      return;
    }

    // Клик по пункту меню
    const menuItem = event.target.closest(MENU_ITEM_SELECTOR);
    if (menuItem) {
      const category = getCategoryFromEl(menuItem);
      if (category) { event.preventDefault(); filterCards(category); }
      return;
    }

    // Клик по тегу внутри карточки
    const tag = event.target.closest('.video-section .video-tag');
    if (tag) {
      const category = tag.dataset.filter;
      if (category) {
        event.preventDefault();
        filterCards(category);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Клик по картинке-превью
    const cover = event.target.closest('.video-section .video-cover--clickable');
    if (cover) {
      event.preventDefault();
      const card = cover.closest('.video-card');
      if (card) openModal(card.dataset.video);
      return;
    }

    // Закрытие модального окна
    if (event.target.closest('.video-modal__close') || event.target.id === 'videoModal') {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  /* =====================================================
     ИНИЦИАЛИЗАЦИЯ
  ===================================================== */

  function initVideoCards() {
    if (videoCardsInited) {
      updateVideoAutoscale();
      window.updateVideoSliders?.();
      return;
    }

    videoCardsInited = true;

    startAutoscaleObserver();
    filterCards('all');
    updateVideoAutoscale();
    AUTOSCALE_DELAYS.forEach(delay => setTimeout(updateVideoAutoscale, delay));
  }

  window.addEventListener('resize', () => {
    applyLoadMorePagination();
    scheduleAutoscale();
  });
  window.addEventListener('orientationchange', () => {
    applyLoadMorePagination();
    scheduleAutoscale();
  });
  window.addEventListener('load', initVideoCards);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoCards);
  } else {
    initVideoCards();
  }

  window.t_onReady?.(initVideoCards);

  /* Экспорт для внешнего использования */
  window.updateVideoAutoscale = updateVideoAutoscale;
  window.filterVideoCards     = filterCards;
  window.updateVideoPagination = applyLoadMorePagination;
})();


(function () {
  'use strict';

  /* =====================================================
     СЛАЙДЕР
  ===================================================== */

  const slidersMap = new Map(); // slider → { portalPrev, portalNext }
  let rafId = null;
  let sliderObserverStarted = false;

  function isMobile() {
    return window.innerWidth < 640;
  }

  function getScrollStep(slider) {
    const viewport = slider.querySelector('.video-slider-viewport');
    const track    = slider.querySelector('.video-slider-track');
    const card     = slider.querySelector('.video-card:not(.is-hidden)');

    if (!viewport) return 200;

    const gap = track ? parseFloat(getComputedStyle(track).gap) || 10 : 10;
    return card ? card.offsetWidth + gap : viewport.clientWidth;
  }

  function makePortalArrow(type) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `video-portal-arrow video-portal-arrow--${type}`;
    btn.setAttribute('aria-label', type === 'prev' ? 'Назад' : 'Вперёд');
    document.body.appendChild(btn);
    return btn;
  }

  function ensureControls(slider) {
    const viewport = slider.querySelector('.video-slider-viewport');
    if (!viewport) return null;

    let prev = slider.querySelector('.video-slider-arrow--prev');
    let next = slider.querySelector('.video-slider-arrow--next');

    if (!prev) {
      prev = document.createElement('button');
      prev.type = 'button';
      prev.className = 'video-slider-arrow video-slider-arrow--prev is-hidden';
      prev.setAttribute('aria-label', 'Назад');
      slider.insertBefore(prev, slider.firstChild);
    }

    if (!next) {
      next = document.createElement('button');
      next.type = 'button';
      next.className = 'video-slider-arrow video-slider-arrow--next';
      next.setAttribute('aria-label', 'Вперёд');
      slider.appendChild(next);
    }

    if (!slidersMap.has(slider)) {
      slidersMap.set(slider, {
        portalPrev: makePortalArrow('prev'),
        portalNext: makePortalArrow('next'),
      });
    }

    const { portalPrev, portalNext } = slidersMap.get(slider);
    return { viewport, prev, next, portalPrev, portalNext };
  }

  function updateSlider(slider) {
    const controls = ensureControls(slider);
    if (!controls) return;

    const { viewport, prev, next, portalPrev, portalNext } = controls;

    const visibleCards = Array.from(slider.querySelectorAll('.video-card'))
      .filter(c => !c.classList.contains('is-hidden'));

    slider.classList.toggle('is-empty', visibleCards.length === 0);

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const cur       = viewport.scrollLeft;
    const canScroll = maxScroll > 2 && visibleCards.length > 0;

    const hidePrev = !canScroll || cur <= 2;
    const hideNext = !canScroll || cur >= maxScroll - 2;

    prev.classList.toggle('is-hidden', hidePrev);
    next.classList.toggle('is-hidden', hideNext);

    // Портальные стрелки только на десктопе
    if (isMobile()) {
      portalPrev.classList.add('is-hidden');
      portalNext.classList.add('is-hidden');
      return;
    }

    portalPrev.classList.toggle('is-hidden', hidePrev);
    portalNext.classList.toggle('is-hidden', hideNext);

    const rect     = viewport.getBoundingClientRect();
    const midY     = rect.top + rect.height / 2;
    const prevSize = portalPrev.getBoundingClientRect().width || 42;
    const nextSize = portalNext.getBoundingClientRect().width || 42;

    portalPrev.style.cssText = `top:${midY - prevSize / 2}px; left:${rect.left - prevSize / 2}px;`;
    portalNext.style.cssText = `top:${midY - nextSize / 2}px; left:${rect.right - nextSize / 2}px;`;
  }

  function updateAllSliders() {
    document.querySelectorAll('[data-video-slider]').forEach(updateSlider);
  }

  function scheduleUpdate() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => { rafId = null; updateAllSliders(); });
  }

  function initSlider(slider) {
    if (slider.dataset.sliderCleanInited === 'true') { updateSlider(slider); return; }
    slider.dataset.sliderCleanInited = 'true';

    const controls = ensureControls(slider);
    if (!controls) return;

    const { viewport, prev, next, portalPrev, portalNext } = controls;

    function scrollBy(delta) {
      viewport.scrollBy({ left: delta, behavior: 'smooth' });
      setTimeout(scheduleUpdate, 350);
    }

    const scrollPrev = e => { e.preventDefault(); e.stopPropagation(); scrollBy(-getScrollStep(slider)); };
    const scrollNext = e => { e.preventDefault(); e.stopPropagation(); scrollBy(+getScrollStep(slider)); };

    prev.addEventListener('click', scrollPrev, true);
    next.addEventListener('click', scrollNext, true);
    portalPrev.addEventListener('click', scrollPrev);
    portalNext.addEventListener('click', scrollNext);

    viewport.addEventListener('scroll', scheduleUpdate);

    /* Горизонтальная прокрутка колёсиком — только на десктопе */
    viewport.addEventListener('wheel', event => {
      if (isMobile()) return;

      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      if (maxScroll <= 2) return;

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      const cur   = viewport.scrollLeft;
      const atStart = cur <= 2;
      const atEnd   = cur >= maxScroll - 2;

      if ((delta < 0 && !atStart) || (delta > 0 && !atEnd)) {
        event.preventDefault();
        viewport.scrollLeft += delta * 0.5;
        scheduleUpdate();
      }
    }, { passive: false });

    /* Drag мышкой */
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    viewport.addEventListener('mousedown', event => {
      isDragging = true;
      dragStartX = event.pageX;
      dragStartScroll = viewport.scrollLeft;
      viewport.classList.add('is-dragging');
    });

    document.addEventListener('mousemove', event => {
      if (!isDragging) return;
      event.preventDefault();
      viewport.scrollLeft = dragStartScroll - (event.pageX - dragStartX);
    });

    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      viewport.classList.remove('is-dragging');
    });

    updateSlider(slider);
  }

  function initAllSliders() {
    document.querySelectorAll('[data-video-slider]').forEach(initSlider);
    [100, 300, 1000].forEach(delay => setTimeout(updateAllSliders, delay));
  }

  /* Следим за изменениями в сетке (фильтрация) */
  function startObserver() {
    if (sliderObserverStarted) return;

    const grid = document.querySelector('.video-grid');
    if (!grid) return;

    sliderObserverStarted = true;

    new MutationObserver(scheduleUpdate).observe(grid, {
      attributes: true, childList: true, subtree: true, attributeFilter: ['class', 'style'],
    });
  }

  window.addEventListener('scroll', scheduleUpdate, true);
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('orientationchange', scheduleUpdate);
  window.addEventListener('load', initAllSliders);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initAllSliders(); startObserver(); });
  } else {
    initAllSliders();
    startObserver();
  }

  window.t_onReady?.(() => { initAllSliders(); startObserver(); });

  window.updateVideoSliders = updateAllSliders;
})();


/* =====================================================
   КЛИК ПО ВИДЕО В СЛАЙДЕРЕ — активация iframe
===================================================== */
(function () {
  'use strict';

  const VIDEO_ACTIVE_RESET = 5000;
  let activeCovers = new WeakSet(); // отслеживаем активные обложки

  document.addEventListener('click', event => {
    const cover = event.target.closest('.video-slider .video-cover');
    if (!cover) return;

    cover.classList.add('is-video-active');

    // Сбрасываем класс при уходе мыши или через таймаут
    const reset = () => cover.classList.remove('is-video-active');

    setTimeout(reset, VIDEO_ACTIVE_RESET);
    cover.addEventListener('mouseleave', reset, { once: true });
  }, true);
})();

(function () {
  'use strict';

  /* =====================================================
     ОПТИМИЗИРОВАННАЯ ЛЕНИВАЯ ЗАГРУЗКА KINESCOPE IFRAME
     iframe получает src только рядом с экраном или при клике.
     preload=false добавляется сразу в рабочую функцию загрузки.
  ===================================================== */

  const ROOT_MARGIN = window.innerWidth < 640 ? '250px 0px' : '450px 0px';
  let lazyVideoObserver = null;
  let reinitRaf = null;

  function buildIframeUrl(rawUrl) {
    try {
      const url = new URL(rawUrl, location.href);
      if (!url.searchParams.has('preload')) {
        url.searchParams.set('preload', 'false');
      }
      return url.toString();
    } catch (_) {
      return rawUrl;
    }
  }

  function loadIframe(iframe) {
    if (!iframe || iframe.dataset.loaded === '1') return;
    if (!iframe.dataset.src) return;
    if (iframe.closest('.is-load-more-hidden, .video-card.is-hidden')) return;

    iframe.dataset.loaded = '1';
    iframe.src = buildIframeUrl(iframe.dataset.src);

    iframe.addEventListener('load', () => {
      iframe.classList.add('is-loaded');
      iframe.closest('.video-cover')?.classList.add('is-loaded');

      requestAnimationFrame(() => {
        window.updateVideoAutoscale?.();
        window.updateVideoSliders?.();
      });
    }, { once: true });
  }

  function initLazyVideoIframes() {
    const iframes = Array.from(
      document.querySelectorAll('.video-section iframe[data-src]:not([src])')
    );

    if (!iframes.length) return;

    if (!('IntersectionObserver' in window)) {
      iframes.forEach(loadIframe);
      return;
    }

    if (!lazyVideoObserver) {
      lazyVideoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          if (entry.target.closest('.is-load-more-hidden, .video-card.is-hidden')) return;

          loadIframe(entry.target);
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: ROOT_MARGIN,
        threshold: 0.01
      });
    }

    iframes.forEach(iframe => lazyVideoObserver.observe(iframe));
  }

  function forceReinit() {
    if (reinitRaf) return;

    reinitRaf = requestAnimationFrame(() => {
      reinitRaf = null;
      initLazyVideoIframes();
      window.updateVideoAutoscale?.();
      window.updateVideoSliders?.();
    });
  }

  // Если пользователь нажал на видео до срабатывания IntersectionObserver — загружаем сразу.
  document.addEventListener('click', event => {
    const cover = event.target.closest('.video-section .video-cover');
    if (!cover) return;

    const iframe = cover.querySelector('iframe[data-src]:not([src])');
    if (iframe) loadIframe(iframe);
  }, true);

  // Когда блок был скрыт во вкладке Тильды и потом появился — пересчитываем размеры.
  const section = document.querySelector('.video-section');
  if (section && 'ResizeObserver' in window) {
    let wasVisible = section.offsetWidth > 0;

    new ResizeObserver(() => {
      const isVisible = section.offsetWidth > 0;

      if (isVisible && !wasVisible) {
        forceReinit();
      }

      wasVisible = isVisible;
    }).observe(section);
  }

  // Подстраховка для вкладок/таба с видео.
  document.addEventListener('click', event => {
    const btn = event.target.closest('[data-tab], .t-tabs__title, .t-tabs__title-wrapper');
    if (btn) setTimeout(forceReinit, 50);
  }, true);

  window.addEventListener('load', initLazyVideoIframes, { once: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyVideoIframes, { once: true });
  } else {
    initLazyVideoIframes();
  }

  window.t_onReady?.(initLazyVideoIframes);
  window.initLazyVideoIframes = initLazyVideoIframes;
})();
})();
