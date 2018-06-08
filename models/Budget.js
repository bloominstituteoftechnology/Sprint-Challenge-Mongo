const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
    title: {type: String, require: true},
    budgetAmount: {type: Number, require:true}
});

module.exports = mongoose.model('Budget', Budget);