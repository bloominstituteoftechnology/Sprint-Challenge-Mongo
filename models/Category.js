const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema({
  tiltle: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Category", Category);
