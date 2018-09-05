const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    budgetAmount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Budget', Budget);