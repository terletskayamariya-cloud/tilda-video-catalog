/* Универсальный рендерер видеокаталога для Tilda. */
(function () {
  'use strict';

  const root = document.getElementById('video-catalog-root');
  if (!root) {
    console.error('[video-catalog] Не найден #video-catalog-root');
    return;
  }

  const CATEGORY_LABELS = {
    numerology: 'Нумерология',
    runes: 'Руны',
    horizon: 'Горизонт мира',
    transformation: 'Трансформация и развитие',
    efir: 'Прямые эфиры',
    family: 'Отношения',
    esoterica: 'Эзотерика',
    meditation: 'Медитации и практики'
  };

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function normalizeCard(raw, forcedLayout) {
    const categories = Array.isArray(raw.categories)
      ? raw.categories
      : String(raw.category || raw.categories || '').trim().split(/\s+/).filter(Boolean);

    return {
      url: raw.url || '',
      title: raw.title || '',
      time: raw.time || raw.duration || '',
      categories,
      layout: forcedLayout || raw.layout || 'full',
      tags: Array.isArray(raw.tags) && raw.tags.length
        ? raw.tags
        : categories.map(category => ({
            category,
            label: CATEGORY_LABELS[category] || category
          }))
    };
  }

  function renderCard(raw, forcedLayout) {
    const card = normalizeCard(raw, forcedLayout);
    const tags = card.tags.map(tag =>
      '<button class="video-tag" type="button" data-filter="' +
      escapeHtml(tag.category) + '">' + escapeHtml(tag.label) + '</button>'
    ).join('');

    const tagsHtml = card.tags.length > 1
      ? '<div class="video-tags">' + tags + '</div>'
      : tags;

    return '<article class="video-card video-card--' + escapeHtml(card.layout) +
      '" data-category="' + escapeHtml(card.categories.join(' ')) + '">' +
      '<div class="video-cover">' +
      '<iframe data-src="' + escapeHtml(card.url) + '" title="' + escapeHtml(card.title) +
      '" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' +
      '</div><div class="video-content"><h3 class="video-title">' + escapeHtml(card.title) +
      '</h3><div class="video-bottom"><span class="video-time">' + escapeHtml(card.time) +
      '</span>' + tagsHtml + '</div></div></article>';
  }

  function renderSlider(block) {
    const isHorizontal = block.variant === 'horizontal';
    const sliderClass = isHorizontal ? ' video-slider--horizontal' : '';
    const cardLayout = isHorizontal ? 'half' : 'third';
    const cards = (block.items || []).map(card => renderCard(card, cardLayout)).join('');

    return '<div class="video-slider' + sliderClass + '" data-video-slider>' +
      '<button class="video-slider-arrow video-slider-arrow--prev is-hidden" type="button" aria-label="Назад"></button>' +
      '<div class="video-slider-viewport"><div class="video-slider-track">' + cards + '</div></div>' +
      '<button class="video-slider-arrow video-slider-arrow--next" type="button" aria-label="Вперёд"></button>' +
      '</div>';
  }

  function buildNewBlocks(videos) {
    const result = [];

    (videos || []).forEach(raw => {
      const layout = raw.layout || 'full';
      const isSlider = layout === 'slider' || layout === 'slider-horizontal';

      if (!isSlider) {
        result.push({ type: 'card', card: normalizeCard(raw) });
        return;
      }

      const variant = layout === 'slider-horizontal' ? 'horizontal' : 'vertical';
      const previous = result[result.length - 1];
      const card = normalizeCard(raw, variant === 'horizontal' ? 'half' : 'third');

      if (previous?.type === 'slider' && previous.variant === variant) {
        previous.items.push(card);
      } else {
        result.push({ type: 'slider', variant, items: [card] });
      }
    });

    return result;
  }

  const newBlocks = buildNewBlocks(window.VIDEO_CATALOG_NEW_VIDEOS || []);
  const blocks = [...newBlocks, ...(window.VIDEO_CATALOG_BLOCKS || [])];
  const catalogHtml = blocks.map(block =>
    block.type === 'slider' ? renderSlider(block) : renderCard(block.card)
  ).join('');

  root.innerHTML =
    '<section class="video-section"><div class="video-container">' +
    '<div class="video-grid" id="videoGrid">' + catalogHtml +
    '<div class="video-load-more-wrap"><button class="video-load-more-button" type="button" aria-controls="videoGrid">' +
    'Загрузить ещё</button></div></div></div></section>' +
    '<div class="video-modal" id="videoModal" role="dialog" aria-modal="true" aria-label="Видео">' +
    '<button class="video-modal__close" type="button" aria-label="Закрыть">×</button>' +
    '<div class="video-modal__inner" id="videoModalInner"></div></div>';

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
