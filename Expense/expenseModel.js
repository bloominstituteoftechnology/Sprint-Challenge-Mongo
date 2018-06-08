
const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    amount: {type: Number, required: true }, 
    description: {type: String, required: true}
    // budget: 
    // category: 
}); 

module.exports = mongoose.model('Expense', ExpenseSchema); 