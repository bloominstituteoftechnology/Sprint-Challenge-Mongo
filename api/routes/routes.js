const budgetController = require('../controllers/budgetControllers');
const categoryController = require('../controllers/categoryControllers');
const expenseController = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app
    .route('/budget')
    .post(budgetController.budgetCreate)
  app
    .route('/new-category')
    .post(categoryController.categoryCreate)
  app
    .route('/category-list')
    .get(categoryController.categoryList)
  app
    .route('/new-expense')
    .post(expenseController.expenseCreate)
  app
    .route('/expense/:id')
    .get(expenseController.getExpense)
    .put(expenseController.budgetAdd)
    .put(expenseController.categoryAdd)
  app
    .route('/budget/:id/summary')
  app
    .route('/expense?aggregatedBy=category')
};
