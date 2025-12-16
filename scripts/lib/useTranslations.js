const getTranslationsFromText = require('./getTranslationsFromText');

function useTranslations(text) {
  const translations = getTranslationsFromText(text);

  function l(links) {
    return Object.entries(links).map(([title, url]) => `[${title}](${url})`).join(', ');
  }

  function t(key, params) {
    let message = translations.get(key) || key;
    if (!params) return message;
    Object.entries(params).map(([name, value]) => {
      const search = new RegExp(`\{${name}\}`, 'gim');
      message = message.replace(search, value);
    });
    return message;
  }

  return { l, t };
}

module.exports = useTranslations;
