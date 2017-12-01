const budgetControllerMethods = require('../controllers/budgetControllers');
const categoryControllerMethods = require('../controllers/categoryControllers');
const expenseControllerMethods = require('../controllers/expenseControllers');

module.exports = app => {
  app.route('/create-budget').post(budgetControllerMethods.createBudget);
  app.route('/create-category').post(categoryControllerMethods.createCategory);
  app.route('/categories').get(categoryControllerMethods.getCategories);
  app.route('/create-expense').post(expenseControllerMethods.createExpense);
  app.route('/expenses').get(expenseControllerMethods.getExpenses)
  
};
