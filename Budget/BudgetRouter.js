const express = require('express');

const Budget = require('./BudgetModel.js');
const BudgetRouter = express.Router();

BudgetRouter.post('/', (req, res) => {
		const BudgetInfo = req.body;
		const budget = new Budget(BudgetInfo);

		budget
		 .save()
		 .then(savedBudget) => {
		    res.status(200).json(savedBudget);
			})
      .catch(err => {
					res.status(500).json({
					  error: "There was an error while saving the Budget to the Database"
					});
				});
     });

module.exports = BudgetRouter;
