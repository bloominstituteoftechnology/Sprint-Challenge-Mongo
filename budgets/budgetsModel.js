const mongoose = require('mongoose'); //used to simplify syntax 

const Budget = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        require: true,
    },
    budgetAmount: {
        type: Number, 
        default: 0,
    }
});

const BudgetModel = mongoose.model('Budget', Budget);

module.exports = BudgetModel; 