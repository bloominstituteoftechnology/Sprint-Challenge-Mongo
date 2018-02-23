const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Expense',
    },
    title: {
        type: String,
        required: true,
    },
    startingAmount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Budget', BudgetSchema);