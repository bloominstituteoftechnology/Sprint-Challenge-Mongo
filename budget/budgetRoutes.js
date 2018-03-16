const express = require('express');
const Budget = require('./budgetModel');
const Expense = require('../expense/expenseModel');
const mongoose = require('mongoose');
const budgetRouter = express.Router();
const db = mongoose.connect('mongodb://localhost/Budget_Tracker');

budgetRouter.post('/', function(req, res){
	const budget = new Budget(req.body);
	budget.save().then(budget => {
		res.json(budget);
	});
});

budgetRouter.get('/:id/summary', function(req, res){

	Expense.aggregate([{$group : {_id : "$budget", total : {$sum : "$amount"}}}])
	.then(data => {
		Budget.findById(data[0]._id).then(budget => {
			res.json({
				total_budget: budget.budgetAmount,
				total_expenses: data[0].total,
				current_balance: budget.budgetAmount - data[0].total
			});
		});
	})
})

module.exports = budgetRouter;