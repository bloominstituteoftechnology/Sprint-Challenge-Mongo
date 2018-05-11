const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schema({
  title: String,
  type: String,
  quality: String
});

module.exports = mongoose.model("Category", Category);
