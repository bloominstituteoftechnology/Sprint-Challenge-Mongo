const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
   
    title: {
        type: String,
    },
    budgetAmount: {
        type: Number,
    }
});
module.exports = mongoose.model('Budget', BudgetSchema);

