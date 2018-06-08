const mongoose = require('mongoose');

const Budget = mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        required: true
    },
    budgetAmount: {
        type:Number,
        default: 0
    }
})

module.exports = mongoose.model('Budget', Budget);
