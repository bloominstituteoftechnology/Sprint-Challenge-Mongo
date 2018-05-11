const mongooose = require('mongoose');

const Budget = mongoose.Schema({
  title: String,
  budgetAmount: Number,
});

module.exports = mongoose.model('Budget', Budget);