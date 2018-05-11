const mongoose = require('mongoose');

const Budget = new mongoose.Schema({ // new schema 
    title: String,
    budgetTotal: Number,
});

module.exports = mongoose.model('Budget', Budget);