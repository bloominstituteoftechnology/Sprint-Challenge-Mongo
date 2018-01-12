const Expense = require('../models/expense.js');

const createExpense = (req, res) => {
	const { amount, description, budget, category } = req.body;

	const expense = new Expense();
	expense.save({ amount, description, budget: budgetId, category: categoryId })
	  .then((result) => {
  		res.status(200).json(result);
  		console.log('category has been created!')
  	})
  	.catch((error) => {
  		res.status(500)json(error)
  		console.log('category has not been created!')
  	});
}

const expenseList = (req, res) => {
  const category = new Expense();
  category.find()
    .then((result) => {
  		res.status(200).json(result);
  		console.log('expense has been created!')
  	})
    .catch((error) => {
  		res.status(500)json(error)
  		console.log('expense has not been created!')
  	})
}

module.exports = { createExpense, expenseList};