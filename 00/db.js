const mongoose = require("mongoose");

module.exports = {
  connecTo: function(database = "sandbox", host = "localhost") {
    return mongoose.connect(`mongodb://${host}/${database}`);
  }
};
