const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    budgetAmount: {
        type: Number,
        required: [true, "Amount is required."]
    }
})

const Budget = mongoose.model('Budget', BudgetSchema)

module.exports = Budget;