const express = require('express');

const budgetControllers = require("../controllers/budgetControllers");
const categoryControllers = require("../controllers/categoryControllers");
const expenseControllers = require("../controllers/expenseControllers")

module.exports = app => {
  const router = express.Router();
  // Todo: Fill in your routes here

  // Budget GET and POST routes
  router.route('/budget').post(budgetControllers.createBudget);
  router.route("/budget/:id/summary").get(budgetControllers.getBudgetSummary);
  router.route('/budget').get(budgetControllers.getBudgets);

  // Category GET and POST routes
  router.route('/category').post(categoryControllers.createCategory);
  router.route('/category').get(categoryControllers.getCategories);

  // Expenses GET and POST routes
  router.route('/expense').post(expenseControllers.createExpense);
  router.route('/expense').get(expenseControllers.getExpenses);
  router.route('/expenses').get(expenseControllers.getCategoryExpenses);

  app.use('/api', router);
};
