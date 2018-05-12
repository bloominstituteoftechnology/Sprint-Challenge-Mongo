const mongoose = require('mongoose');

const definition = {
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    },
};

const budgetSchema = new mongoose.Schema(definition);

const budgetModel = mongoose.model('Budget', budgetSchema, 'budgets'); 

module.exports = budgetModel;