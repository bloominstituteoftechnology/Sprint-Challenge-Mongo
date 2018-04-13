const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    budgetAmount: {
        type: Number,
        require:true,
    },
});

const budgetModel = mongoose.model('Budget', budgetSchema);

module.exports = budgetModel;