const mongoose = require("mongoose");

module.exports = {
  connectTo: function(database = "expdb", host = "localhost") {
    return mongoose.connect(`mongodb://${host}/${database}`);
  }
};
