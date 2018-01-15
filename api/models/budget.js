const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema(
    { 
       
       // id: mongoose.Schema.Types.ObjectId,
        title: String,
        budgetAmount: Number
    }
);
module.exports = mongoose.model('Budget', BudgetSchema);

