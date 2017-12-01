const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetCreate = Schema ({
    title: String,
    budgetAmount: Number
});

module.exports = mongoose.model('Budget', budgetCreate);