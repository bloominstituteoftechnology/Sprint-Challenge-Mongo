module.exports = app => {
  const budgetControllers = require('../controllers/budgetControllers');
  const categoryControllers = require('../controllers/categoryControllers');
  const expenseControllers = require('../controllers/expenseControllers');

  app.route('/budget')
    .post(budgetControllers.createBudget);

  app.route('/category')
    .post(categoryControllers.createCategory)
    .get(categoryControllers.getCategories);

  app.route('expense')
    .post(expenseControllers.createExpense)
    .get(expenseControllers.getExpenses);
};
