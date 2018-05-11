const mongoose = require('mongoose');

const Budget = mongoose.Schema({
    // Insert Data Here
    title: String,
    budgetAmount: Number
});

// Module Export
module.exports = mongoose.model('Budget', Budget);