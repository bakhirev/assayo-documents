function getTranslationsFromText(text) {
  const translations = new Map();
  text.split('§ ').slice(1).forEach((part) => {
    const index = part.indexOf(':');
    const key = part.slice(0, index);
    const value = part.slice(index + 1).trim();
    translations.set(key, value);
  });
  return translations;
}

module.exports = getTranslationsFromText;
