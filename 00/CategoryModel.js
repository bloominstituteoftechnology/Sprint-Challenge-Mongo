const express = require("express");

const Category = mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Category", Category);
