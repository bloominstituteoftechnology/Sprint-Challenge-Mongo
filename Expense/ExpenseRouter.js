const express = require('express');
const Expense = require('./ExpenseModel.js');

const Category = require('../Category/CategoryModel.js');
const Budget = require('../Budget/BudgetModel.js');

const expenseRouter = express.Router();

ExpenseRouter.post('/', (req, res) => {
	const ExpenseInfo = req.body;
	const expense = new Expense(ExpenseInfo);

	expense
	.save()
	.then(savedExpense) => {
	   res.status(201).json(savedExpense);
		})
    .catch(err => {
				res.status(500).json({
           error: "There was an error while saving the Expense to the Database"
					});
				});
     });

 ExpenseRouter.get('/:id', (req, res) => {
		 const { id } = request.params; 
		 Expense.findById(id)
		   .populate('category')
			 .populate('budget')
			 .then(populatedExpense => {
					 res.status(200).json(populatedExpense);
				})
			 .catch(err => {
					 res.status(500).json({
             error: "The Expense information could not be retrieved"
					 });
			 });
	 });

module.exports = ExpenseRouter;
