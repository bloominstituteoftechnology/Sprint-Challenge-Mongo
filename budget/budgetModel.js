const mongoose = require('mongoose'); 

const BudgetSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    budget: { 
        type: Number, 
        required: true
    }

})




const budgetModel = mongoose.model('Budget', BudgetSchema);

module.exports = budgetModel;