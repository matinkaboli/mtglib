const { Schema } = require('mongoose');

const m = {
  user: {
    trim: true,
    ref: 'User',
    required: true,
    type: Schema.Types.ObjectId,
  },
  attempts: {
    trim: true,
    default: 0,
    type: Number,
    required: true,
  },
  createdAt: {
    trim: true,
    type: Date,
    required: true,
    expires: 60 * 30,
    default: Date.now,
  },
};

const goThrough = model => {
  const imports = {
    graphql: [],
  };
  const exportStart = 'export default new GraphQLObjectType({';
  const exportEnd = '});'

  const obj = {};

  for (let i of Object.keys(model)) {
    let type;

    if (model[i].type === Schema.Types.ObjectId) {
    } else if (model[i].type) {
      obj[i] = {
        type,
      };
    }
  }

  return obj;
};


console.log(goThrough(m));
