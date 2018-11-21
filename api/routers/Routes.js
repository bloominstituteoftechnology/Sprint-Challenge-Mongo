const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  app.route('/budget').post(budgetControllers.createBudget);
  app
    .route('/category')
    .get(categoryControllers.listCategories)
    .post(categoryControllers.createCategory);
  app
    .route('/expense')
    .get(expenseControllers.listExpenses)
    .post(expenseControllers.createExpense);
};
