const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const BudgetSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title.'],
    },
    budgetAmount: {
        type: Number,
    },
    createdOn: {
        type: String,
        required: true,
        default: new Date(),
    }
});

module.exports = mongoose.model('budgets', BudgetSchema);
