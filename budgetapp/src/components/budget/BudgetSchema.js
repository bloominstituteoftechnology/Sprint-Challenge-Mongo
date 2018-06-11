const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    title: { type: String, required: true },
    budgetAmount: Number,
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Budget', Budget);
