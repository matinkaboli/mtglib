const isObject = require('./is-object');
const recognizeType = require('./recognize-type');

module.exports = file => {
  const model = require(file).schema.obj;

  const imports = ['GraphQLObjectType'];

  const fields = {};

  for (const i of Object.keys(model)) {
    fields[i] = {
      type: isObject(model[i])
        ? recognizeType(model[i].type)
        : recognizeType(model[i]),
    };
  }

  console.log(fields);

  let output = `import { ${imports.join(', ')} } from 'graphql';`;

  // console.log(output);
};
