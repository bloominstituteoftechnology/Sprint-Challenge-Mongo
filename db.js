const mongoose = require('mongoose');

module.exports = {
  connectTo: function(database = 'budgetTracker', host = 'localhost') {
    return mongoose.connet(`mongodb://${host}/${database}`);
  },
};
