const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: {
        type: Number,
    },

    budget: { type: ObjectId, ref:'Budget' },
    category: { type: ObjectId, ref:'Budget' }
});

module.exports = mongoose.model('Expense', Expense);