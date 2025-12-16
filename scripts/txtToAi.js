const { removeFile, getFileList, setTextFromFile, getTextFromFile } = require('./lib/file');

const WORKSPACE = '../src/txtToAI';

function getTextWithoutKeys(text) {
  return text
    .replace(/(§\s[A-Z0-9._]+)(:\s){0,}/gim, '')
    .replace(/(export\sdefault\s`)|(`;)/gim, '');
}

function getTextWithKeys(origin, transactions) {
  const keys = origin.match(/(§\s[A-Z0-9._]+)(:\s){0,}/gim);
  const lines = origin.split('\n');
  const target = transactions.split('\n');

  lines.forEach((row, index) => {
    if (!target[index]) {
      target[index] = lines[index];
    } else if (row[0] === '§') {
      target[index] = keys.shift() + target[index];
    }
  });
  return target.join('\n');
}

function getTxtFileName(path, suffix) {
  const fileName = path.split('.').slice(0, -1).join('.');
  return `${fileName}${suffix || ''}.txt`;
}

function getParts(text) {
  const limit = 35;
  const lines = text.split('\n');
  const size = Math.ceil(lines.length / limit);
  const parts = [];
  for (let i = 0; i < size; i++) {
    const from = i * limit;
    const to = from + limit;
    const content = lines.slice(from, to).join('\n');
    parts.push(content);
  }
  return parts;
}

// Clear old removedKeys
getFileList(`${WORKSPACE}/2_removeKeys`).forEach((name) => {
  removeFile(`${WORKSPACE}/2_removeKeys/${name}`);
});
getFileList(`${WORKSPACE}/2_removeKeysSplit`).forEach((name) => {
  removeFile(`${WORKSPACE}/2_removeKeysSplit/${name}`);
});

// Clear old output
getFileList(`${WORKSPACE}/4_returnKeys`).forEach((name) => {
  removeFile(`${WORKSPACE}/4_returnKeys/${name}`);
});

// Save new removedKeys and output
getFileList(`${WORKSPACE}/1_origin`).forEach((name) => {
  const origin = getTextFromFile(`${WORKSPACE}/1_origin/${name}`);
  const originWithoutKeys = getTextWithoutKeys(origin);
  const originFileName = getTxtFileName(`${WORKSPACE}/2_removeKeys/${name}`);
  setTextFromFile(originFileName, originWithoutKeys);

  getParts(originWithoutKeys).forEach((text, i) => {
    const partFileName = getTxtFileName(`${WORKSPACE}/2_removeKeysSplit/${name}`, `_${i + 1}`);
    setTextFromFile(partFileName, text);
  });

  const transactionFileName = getTxtFileName(`${WORKSPACE}/3_transactions/${name}`);
  const transactions = getTextFromFile(transactionFileName);
  const transactionsWithKeys = getTextWithKeys(origin, transactions);
  setTextFromFile(`${WORKSPACE}/4_returnKeys/${name}`, transactionsWithKeys);
});
