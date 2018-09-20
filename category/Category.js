const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schema({
    title: String,
    expense: [{
        type: ObjectId,
        ref: 'Expense',
    }]
})

module.exports = mongoose.model('Category', Category);