const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    //add
});

const expenseModel = mongoose.model('Expense', Expense);

module.exports = expenseModel;