const mongoose = require('mongoose');

const definition = {
    _id: {
        title: {
            type: String,
            required: true,
            index: true,
        }, 
        budgetAmount: {
            type: Number,
            required: true,
        }
    }
    // BUDGET shape
// {
//   _id: ObjectId('507f1f77bcf86cd799439011'),
//   title: 'Budget',
//   budgetAmount: 3000,
// }
}

const options = {
    timestamps: true,
}

const budgetSchema = new mongoose.Schema(definition, options);

const budgetModel = mongoose.model('Budget', budgetSchema, 'budgets');

module.exports = budgetModel; 