const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Type.ObjectId;


const Budget = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Budget', Budget);