const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    title: String,
    budget_amount: Number,
});

module.exports = mongoose.model('Budget', Budget);