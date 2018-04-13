const mongoose = require('mongoose');

module.exports = {
  connectTo: function(database = 'budget', host = 'localhost') {
    return mongoose.connect('mongodb://${host}/${database}');
  },
};
