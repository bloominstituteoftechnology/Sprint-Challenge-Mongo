const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;


const Budget = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    title: String,
    budgetAmount: Number
})

module.exports = mongoose.model('Budget', Budget);
