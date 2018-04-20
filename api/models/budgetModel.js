const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title.'],
        unique: true,
    },
    budgetAmount: {
        type: Number,
        default: 0,
    },
    createdOn: {
        type: String,
        required: true,
        default: new Date(),
    }
});

module.exports = mongoose.model('budgets', BudgetSchema);
