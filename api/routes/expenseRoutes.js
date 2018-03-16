const express = require('express');
const expenseController = require('../controllers/expenseController');
let expenseRouter = express.Router();

// EndPoint: /api/expense/

expenseRouter.route('/').get(expenseController.getExpenses);

expenseRouter.route('/').post(expenseController.insertExpense);

module.exports = expenseRouter;