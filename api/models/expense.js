const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ExpenseSchema = new Schema(
    {
        amount: Number,
        description: String,
        budget: {
            type: ObjectId,
            ref:'Budget'
        },
        category: {
            type: ObjectId,
            ref: 'Category'
        }
    }
);
module.exports = mongoose.model('Expense', ExpenseSchema);