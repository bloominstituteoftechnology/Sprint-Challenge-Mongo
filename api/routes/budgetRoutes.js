const express = require('express');
const budgetController = require('../controllers/budgetController');
let budgetRouter = express.Router();

// EndPoint: /api/budget/

budgetRouter.route('/').get(budgetController.getBudget);

budgetRouter.route('/').post(budgetController.insertBudget);

module.exports = budgetRouter;