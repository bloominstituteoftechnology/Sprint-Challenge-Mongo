const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: { type: String, required: true },
    budgetAmount: Number
});

module.exports = mongoose.model('Budget', Budget);
