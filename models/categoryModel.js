const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new Schema({
  title: String
});

module.exports = mongoose.model('Expense', expenseSchema);