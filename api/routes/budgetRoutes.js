const express = require('express');
const budgetController = require('../controllers/budgetController');
let budgetRouter = express.Router();

// EndPoint: /api/budget/

// get all the budgets saved.
budgetRouter.route('/').get(budgetController.getBudget);

// Insert an amount on budget collection.
budgetRouter.route('/').post(budgetController.insertBudget);

module.exports = budgetRouter;