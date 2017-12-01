import mongoose from 'mongoose';

const ExpenseSchema = new Schema({
    amount:{
        required: true,
        type: Number
    },
    description:{
        required: true,
        type: String
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema);