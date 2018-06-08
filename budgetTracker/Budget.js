const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    title: {
        type: String
    },
    budgetAmount:{
        type: Number
    } 
});


const budgetModel = mongoose.model('Budget', BudgetSchema);

module.exports = budgetModel;