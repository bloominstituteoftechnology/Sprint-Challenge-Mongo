const express = require('express');
const Expense = require('./expenseModel');
const expenseRouter = express.Router();

expenseRouter.post('/', function(req, res){
	const expense = new Expense(req.body);
	expense.save().then(savedExpense => {
		res.json(savedExpense);
	});
});

expenseRouter.get('/', function(req, res){
	Expense.find()
	.populate('budget category')
	.then(expenses => {
		res.json(expenses);
	});
});

module.exports = expenseRouter;