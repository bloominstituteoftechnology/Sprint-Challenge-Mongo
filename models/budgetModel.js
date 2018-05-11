const mongoose = require('mongoose');

/**
 * @param title is a required string that defines what budget it is
 * @param budgetAmount is a number that gives a total budget
 */
const Budget = new mongoose.Schema({
  title: String,
  budgetAmount: Number
});

module.exports = mongoose.model('Budget', Budget);
