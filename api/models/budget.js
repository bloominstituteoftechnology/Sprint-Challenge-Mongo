const mongoose = require('mongoose');
const BudgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    budgetAmount: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model('Budget', BudgetSchema);

