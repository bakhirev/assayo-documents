const { getFileList, setTextFromFile, getTextFromFile } = require('./lib/file');
const getReadMe = require('./lib/getReadMe');

function TxtToMd() {
  getFileList(`../src/txtToMd/`).forEach(fileName => {
    const text = getTextFromFile(`../src/txtToMd/${fileName}`);
    const lang = fileName.split('.').shift().toLowerCase();
    const content = getReadMe(lang, text);
    setTextFromFile(`../build/${lang.toUpperCase()}.md`, content);
  });
}

TxtToMd();

