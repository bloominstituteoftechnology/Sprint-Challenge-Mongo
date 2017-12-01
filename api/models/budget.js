const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = Schema ({
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Budget', BudgetSchema);