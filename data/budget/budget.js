const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    title: String,
    budgetAmount: Number
});

const budgetModel = mongoose.model('Budget', Budget);

module.exports = budgetModel;