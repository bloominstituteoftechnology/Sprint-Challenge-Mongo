const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false,
    },
    budgetAmount: {
        type: Number,
        require:true,
        unique: false,
    },
});

const budgetModel = mongoose.model('Budget', budgetSchema);

module.exports = budgetModel;