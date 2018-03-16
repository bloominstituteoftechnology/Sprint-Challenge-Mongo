const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = require('../category/CategoryModel.js');
const Budget = require('../budget/BudgetModel.js');

const ExpenseSchema = new mongoose.Schema({
    amount: {
      type: Number,
			required: true,
    },
	  description: {
		  type: String,
			required: true,

		},
     budget: {
		   type: ObjectId,
			 ref: 'Budget',
			 required: true,
		 },
     category: {
		    type: ObjectId,
				ref: 'Category',
				required: true,
			}
	});

const ExpenseModel = mongoose.model("Expense", ExpenseSchema);

module.exports = ExpenseModel;
			 
