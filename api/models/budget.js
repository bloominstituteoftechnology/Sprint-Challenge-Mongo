const mongoose = require('mongoose');

const BudegtSchema= new mongoose.Schmea({
   
        title: { 
            type: String,
            required: true
        },
        budgetAmount: {
            type: Number,
            required: true
        }
      
});

module.exports = mongoose.model('Budget', BudgetSchema);