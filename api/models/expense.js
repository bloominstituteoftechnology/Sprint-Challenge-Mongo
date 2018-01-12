const Mongoose = require('mongoose');

const Schema = ({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Budget',
        required: true,
    },
    category: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,        
    }
});

module.exports = Mongoose.model('Expense', Schema);