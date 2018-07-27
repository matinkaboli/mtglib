const args = process.argv;
const { existsSync } = require('fs');

const convert = require('./convert');

(() => {
  if (!args[2]) {
    return console.log('No entry point.');
  }

  if (!existsSync(args[2])) {
    return console.log('Entry point not found.');
  }

  const arr = args[2].split('.');

  if (arr[arr.length - 1] !== 'js') {
    return console.log('Not a JavaScript file.');
  }

  convert(args[2], args[3]);

  return console.log('Done');
})();
