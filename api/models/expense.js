const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./budget.js')
require('./category.js')
const expenseModel = new mongoose.Schema(
    {
        amount : {
            type : Number,
            required: true
        },
        description: String,
        budget: {
            type: Schema.Types.ObjectId,
            ref: 'budget',
        },
        category:{
            type: Schema.Types.ObjectId,
            ref: 'category',
        }
    }
)
module.exports = mongoose.model('Expense', expenseModel);