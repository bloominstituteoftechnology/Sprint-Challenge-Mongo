const mongoose = require('mongoose');

const definition = {
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        requierd: true
    }
}

const budgetSchema = new mongoose.Schema(definition);

const Budget = mongoose.model('Budget', budgetSchema, 'budgets');

module.exports = Budget;


