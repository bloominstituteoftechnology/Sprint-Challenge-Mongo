const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseModel = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: ObjectId,
        ref: 'budgetModel'
    },
    category: {
        type: ObjectId,
        ref: 'categoryModel'
    }

})


module.exports = mongoose.model('expenseModel', expenseModel)