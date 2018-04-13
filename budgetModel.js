const mongoose = require('mogoose');

const budgetSchema = new mongoose.schema ({

    // _id: ObjectId('507f1f77bcf86cd799439011'),
    // title: 'Budget',
    // budgetAmount: 3000,

    title: {
        type: String,
        required: true,
    },

    budgetAMount: {
        type: Number,
        required: true,
    },

});


module.exports = mongoose.model('Budget', BudgetModel)