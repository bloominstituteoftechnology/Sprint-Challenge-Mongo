const mongoose = require('mongoose');

// Budget Schema for post 
const BudgetSchema = new mongoose.Schema({
    budget: {
        type: String,
        required: true,
        trim: true
    },
    budgetAmount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})



const budgetModel = mongoose.model('Budget', BudgetSchema);
module.exports = budgetModel;