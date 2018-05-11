const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Category Title is required"]
  }
});

module.exports = mongoose.model("Category", categorySchema);
