const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const budgetSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        budgetAmount: {
            type: Number,
            min: 0,
            required: true
        }
    })

const budgetModel = mongoose.model('budget', budgetSchema, 'budgets');
module.exports = budgetModel;