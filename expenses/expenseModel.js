const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema ({

})

const expenseModel = mongoose.model('Expense', expenseSchema);

module.exports = expenseModel;