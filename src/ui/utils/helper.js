import _ from 'lodash';

export function Option(ifNotNull, ifNull) {
  if (!_.isEmpty(ifNotNull)) return ifNotNull;

  return ifNull;
}

export function getLangItems(appLocales, locale) {
  return Object.keys(appLocales).map((lang) => ({
    value: lang,
    title: appLocales[lang],
    marked: lang === locale,
  }));
}

export function platformKeySymbols(key, platform = window.navigator.platform) {
  const platformName = platform.toLowerCase();
  switch (key) {
    case 0: // ALT
      return platformName.includes('mac') ||
      platformName.includes('iphone') ||
      platformName.includes('ipad')
        ? '⌥'
        : 'Alt-';
    default:
      return key;
  }
}
