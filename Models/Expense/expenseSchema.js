const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const expenseSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        budget: ObjectId('507f1f77bcf86cd799439011'),
        category: ObjectId('543d2c72gsb23cd657438921')
    })

const expenseModel = mongoose.model('expense', expenseSchema, 'expenses');
module.exports = expenseModel;