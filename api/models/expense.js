const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    amount: {
        type: Number
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});