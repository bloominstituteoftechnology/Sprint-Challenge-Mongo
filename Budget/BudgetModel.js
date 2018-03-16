const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
   title: {
        type: String
		},
   budgetAmount: {
       type: Number
		}
});

const BudgetModel = mongoose.model("Budget", BudgetSchema);

module.exports = BudgetModel;
