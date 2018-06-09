const mongoose = require('mongoose');

const definition = {
  title: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  }
}
const Schema = mongoose.Schema(definition);

module.exports = mongoose.model('Budget', Schema, 'budgets')