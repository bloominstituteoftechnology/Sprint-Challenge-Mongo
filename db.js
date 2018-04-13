const mongoose = require('mongoose');

module.exports = {
  connectTo: function(database = 'budgetTracket', host = 'localhost') {
    return mongoose.connet(`mongodb://${host}/${database}`);
  },
};
