const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetMod = {
    title: {
        type: String,
        required: true
    },
    budgetAmount: Number
}
const BudgetSchema = new mongoose.Schema(budgetMod)
module.exports = mongoose.model('Budget', BudgetSchema);