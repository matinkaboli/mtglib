module.exports = property => property !== null
  && typeof property === 'object'
  && !Array.isArray(property);
