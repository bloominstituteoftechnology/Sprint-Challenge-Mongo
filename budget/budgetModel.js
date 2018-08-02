const mongoose = require('mongoose');

const Budget = mongoose.Schema({
    // Insert Data Here
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    }
});

// Module Export
module.exports = mongoose.model('budgetModel', Budget);