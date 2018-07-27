const { Schema } = require('mongoose');

module.exports = value => {
  if (Schema.Types.ObjectId === value) {
    return 'GraphQLID';
  }

  const str = value.toString();

  if (str.includes('String')) {
    return 'GraphQLString';
  }

  if (str.includes('Number')) {
    return 'GraphQLFloat';
  }

  if (str.includes('Date')) {
    return 'GraphQLString';
  }

  return 'GraphQLString';
};
