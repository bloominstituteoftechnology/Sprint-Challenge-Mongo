const mongoose = require('mongoose');

module.exports = {
  connectTo: function(database = 'budgettracker', host = 'localhost') {
    return mongoose.connect(`mongodb://${host}/${database}`);
  },
};
