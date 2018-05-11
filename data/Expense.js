const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId; 
const Budget = './Budget';

const Expense = new mongoose.Schema({
//data here
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: ObjectId,
        ref: 'Budget'
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
});

//module export
module.exports = mongoose.model('Expense', Expense);