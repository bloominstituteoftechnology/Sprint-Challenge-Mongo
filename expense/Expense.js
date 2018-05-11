const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({
    // Insert Data Here
});

// Module Export
module.exports = mongoose.model('Expense', Expense);