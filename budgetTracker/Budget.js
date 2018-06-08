const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    title: {
        type: String
    },
    budgetAmount:{
        type: Number
    },
    createOn: {
        type: Date,
        default: Date.now()
    }
});


const budgetModel = mongoose.model('Budget', BudgetSchema);

module.exports = budgetModel;