const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const definition = {
    amount: Number,
    description: {
        type: String,
        required: true
    },
    budget: { type: ObjectId, ref: 'Budget' },
    category: { type: ObjectId, ref: 'Category' }
};

const expenseSchema = new mongoose.Schema(definition);

const expenseModel = mongoose.model('Expense', expenseSchema, 'expenses');

module.exports = expenseModel;