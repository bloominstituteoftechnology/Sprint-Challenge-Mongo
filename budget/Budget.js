const mongoose = require('mongoose');

const budgetDefinition = {
    title: {
        type: String,
        required: true,
    },
    budgetAmount: {
        type: Number,
        required: true,
    },
};

const budgetSchema = new mongoose.Schema(budgetDefinition);

module.exports = mongoose.model('Budget', budgetSchema)