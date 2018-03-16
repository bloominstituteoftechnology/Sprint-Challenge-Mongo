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
	const { aggregatedBy } = req.query;
	if(aggregatedBy){
		Expense.aggregate([{$group : {_id : "$category", total : {$sum : "$amount"}}}])
		.then(data => {
		res.json(data);
		})
	}
	else {				
		Expense.find()
		.populate('budget category')
		.then(expenses => {
		res.json(expenses);
		});
	}

});

module.exports = expenseRouter;