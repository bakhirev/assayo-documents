const fs = require('node:fs');
const path = require('node:path');

function getPath(fileName) {
  return path.join(__dirname, '../', fileName);
}

function getFileList(fileName) {
  console.log(getPath(fileName));
  return fs
    .readdirSync(getPath(fileName), { withFileTypes: true })
    .map(file => file.name);
}

function removeFile(fileName) {
  try {
    fs.unlinkSync(getPath(fileName));
  } catch (e) {
    console.error(`Failed to remove file: ${fileName}`);
  }
}

function getTextFromFile(fileName) {
  try {
    return fs.readFileSync(getPath(fileName), 'utf8');
  } catch (e) {
    console.error(`Failed to read file: ${fileName}`);
  }
  return '';
}

function setTextFromFile(fileName, text) {
  try {
    fs.writeFileSync(getPath(fileName), text || '');
  } catch (e) {
    console.error(`Failed to write in file: ${fileName}`);
  }
}

module.exports = {
  removeFile,
  getFileList,
  getTextFromFile,
  setTextFromFile,
};
