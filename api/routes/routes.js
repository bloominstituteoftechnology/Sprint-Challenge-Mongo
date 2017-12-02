const categoryControllerMethods = require('../controllers/categoryControllers');
const budgetControllerMethods = require('../controllers/budgetControllers');
const expenseControllerMethods = require('../controllers/expenseControllers');

module.exports = (app) => {
  app
    .route('/budget')
    .post(budgetControllerMethods.createBudget);
  app
    .route('/budget/:id/summary')
    .get(expenseControllerMethods.budgetSummary);
  app
    .route('/category')
    .get(categoryControllerMethods.getAllCategories)
    .post(categoryControllerMethods.createCategory);
  app
    .route('/categories')
    .get(categoryControllerMethods.getAllCategories);
  app
    .route('/expense')
    .get(expenseControllerMethods.listExpenses);
  app
  .route('/expense/:id')
  .get(expenseControllerMethods.findExpense);

  app
    .route('/expense/:budget/:category')
    .get(expenseControllerMethods.createExpense);
  app
    .route('/expenses')
    .get(expenseControllerMethods.expenseGroupBy);
};
