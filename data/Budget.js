const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Budget', Budget);