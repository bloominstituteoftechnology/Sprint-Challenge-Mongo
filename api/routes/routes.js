const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app
    .route('/budget')
    .post(budgetControllers.createBudget);

  app
    .route('/category')
    .get(categoryControllers.getAllCategories)
    .post(categoryControllers.createCategory);

  app
    .route('/expense')
    .post(expenseControllers.expenseCreate)
    .get(expenseControllers.getExpense);
};
