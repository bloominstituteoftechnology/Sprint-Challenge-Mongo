const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: { type: String, required: true },
    budgetAmount: { type: Number, required: true },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Budget', Budget);
