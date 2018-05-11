const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: { type: String },
    budgetAmount: { type: Number },
})

module.exports = mongoose.model('Budget', Budget);