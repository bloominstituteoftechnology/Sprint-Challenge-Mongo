const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },
    description: { type: String, required: true },
    key: { type: Number, unique: true },
    amount: [Number],
    budget: [{
        type: ObjectId,
        ref: 'Budget',
    }],
    category: [{
        type: ObjectId,
        ref: 'Category',
    }]
});

