/**
 * Google Sheets -> Tilda video catalog.
 * 1) Open the Google Sheet -> Extensions -> Apps Script.
 * 2) Paste this code and deploy as a Web App:
 *    Execute as: Me; Who has access: Anyone.
 * 3) Insert the deployed /exec script URL between video-data.js and video-catalog.js.
 *
 * Public response contains only published video metadata.
 * The spreadsheet itself remains private and editable by invited users only.
 */
const VIDEO_SPREADSHEET_ID = '19kMArx3zurEL-5rOWqPnBpB3jeBfcg2LhvDrAySaNrQ';
const VIDEO_SHEET_NAME = 'Видео';
const VIDEO_TIME_ZONE = 'Europe/Minsk';

const CATEGORY_CODES = Object.freeze({
  'Нумерология': 'numerology',
  'Руны': 'runes',
  'Горизонт мира': 'horizon',
  'Трансформация и развитие': 'transformation',
  'Прямые эфиры': 'efir',
  'Отношения': 'family',
  'Эзотерика': 'esoterica',
  'Медитации и практики': 'meditation',
  'Интервью': 'intervyu'
});

const LAYOUT_CODES = Object.freeze({
  'Широкая': 'full',
  'Половина': 'half',
  'Вертикальная': 'third',
  'Слайдер — вертикальный': 'slider',
  'Слайдер — горизонтальный': 'slider-horizontal'
});

function doGet() {
  try {
    const published = readPublishedVideos_();
    // JS (rather than fetch/JSON) avoids browser cross-origin restrictions
    // when embedded as a regular <script src="..."> in Tilda.
    const json = JSON.stringify(published)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
    return ContentService.createTextOutput(
      'window.VIDEO_CATALOG_NEW_VIDEOS = ' + json + ';\n'
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);
  } catch (error) {
    // Do not publish internal errors, sheet contents or identifiers.
    // Leave the existing static array from video-data.js intact.
    console.error('[video-admin] Failed to read published videos', error);
    return ContentService.createTextOutput(
      "console.warn('[video-catalog] Не удалось обновить новые видео из таблицы');"
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}

function readPublishedVideos_() {
  const sheet = SpreadsheetApp.openById(VIDEO_SPREADSHEET_ID)
    .getSheetByName(VIDEO_SHEET_NAME);

  if (!sheet) throw new Error('Video tab not found');

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  // A-H: status, title, Kinescope URL, duration, category,
  // extra category, card layout, optional publish datetime.
  const rows = sheet.getRange(2, 1, lastRow - 1, 8).getDisplayValues();
  const nowMinsk = Utilities.formatDate(
    new Date(), VIDEO_TIME_ZONE, 'yyyy-MM-dd HH:mm'
  );
  const videos = [];

  // New rows go to the bottom of Google Sheets and appear first on the site.
  for (let i = rows.length - 1; i >= 0; i--) {
    const row = rows[i];
    const status = clean_(row[0]).toLowerCase();
    if (status !== 'опубликовано') continue;

    const title = clean_(row[1]);
    const url = clean_(row[2]);
    const duration = clean_(row[3]);
    const category = CATEGORY_CODES[clean_(row[4])];
    const extraCategory = CATEGORY_CODES[clean_(row[5])];
    const layout = LAYOUT_CODES[clean_(row[6])] || 'half';
    const publishAt = clean_(row[7]).replace('T', ' ');

    if (!title || !category) continue;
    if (!/^https:\/\/kinescope\.io\/(?:embed\/)?[A-Za-z0-9_-]+(?:\?[^\s#]*)?$/i.test(url)) {
      continue;
    }

    if (publishAt) {
      if (!/^\d{4}-\d{2}-\d{2} (?:[01]\d|2[0-3]):[0-5]\d$/.test(publishAt)) {
        continue;
      }
      if (publishAt > nowMinsk) continue;
    }

    const categories = extraCategory && extraCategory !== category
      ? [category, extraCategory]
      : [category];

    videos.push({
      url: url,
      title: title,
      time: duration,
      categories: categories,
      layout: layout
    });
  }

  return videos;
}

function clean_(value) {
  return String(value == null ? '' : value).trim();
}
