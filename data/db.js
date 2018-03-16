const mongoose = require('mongoose');

module.exports = {
  connectTo: (database = 'sandbox', host = 'localhost') => {
    return mongoose.connect(`mongodb://${host}/${database}`);
  },
};
