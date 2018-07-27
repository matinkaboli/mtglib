const isObject = require('./is-object');

module.exports = object => {
  for (const v of Object.keys(object)) {
    if (isObject(object[v])) {
      return true;
    }
  }

  return false;
};
