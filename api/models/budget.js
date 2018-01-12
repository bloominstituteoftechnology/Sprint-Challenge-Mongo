const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    budgetAmout: {
        type: Number,
        required: true,
    },
});

modules.export = mongoose.model('Budget', BudgetSchema);