const mongoose = require('mongoose');

const budgetDefinition = {
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
};

const budgetSchema = new mongoose.Schema(budgetDefinition);

const budgetModel = mongoose.model('Budget', budgetDefinition, 'Budgets');

module.exports = budgetModel;