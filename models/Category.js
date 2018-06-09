const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Category", Schema, "categories")