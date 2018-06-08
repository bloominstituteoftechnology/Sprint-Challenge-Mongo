const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = {
    title: {
        type: String,
        required: true
    },

    budget: {
        type: Number,
        required: true
    }

};

const BudgetSchema = new mongoose.Schema(Budget);

module.exports = mongoose.model('Budget', BudgetSchema)