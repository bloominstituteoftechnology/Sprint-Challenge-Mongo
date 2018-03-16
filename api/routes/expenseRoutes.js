const express = require('express');
const expenseController = require('../controllers/expenseController');
let expenseRouter = express.Router();

// EndPoint: /api/expense/

expenseRouter.route('/').get(expenseController.getExpenses);

expenseRouter.route('/').post(expenseController.insertExpense);

// This is the same than the above code.
// expenseRouter.route('/')
//     .get(expenseController.getExpenses)
//     .post(expenseController.insertExpense);

module.exports = expenseRouter;