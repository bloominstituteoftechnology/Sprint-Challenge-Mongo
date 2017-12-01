const mongoose = require("mongoose"),
  Schema = mongoose.Schema


const AccountSchema = new Schema({
  title: {
    type: String
  },
  amount: {
    type: Number
  }
});

module.exports = mongoose.model("Account", AccountSchema);
