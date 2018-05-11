const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: String,
    budgetTotal: Number,
});

module.exports = mongoose.model('Budget', Budget);
