const express = require('express');
const Budget = require('./budgetModel');
const budgetRouter = express.Router();

budgetRouter.post('/', function(req, res){
	const budget = new Budget(req.body);
	budget.save(req.body).then(budget => {
		res.json(budget);
	});
});

module.exports = budgetRouter;