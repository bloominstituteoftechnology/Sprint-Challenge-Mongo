const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const Expense = new Schema({});

module.exports = mongoose.model('Expense', Expense);
