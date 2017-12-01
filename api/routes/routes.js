module.exports = app => {
  const budgetContollers = require('../controllers/budgetContollers');
  const categoryControllers = require('../controllers/categoryControllers');
  const expenseControllers = require('../controllers/expenseControllers');

  app.route('/budget')
  .post(budgetContollers.budgetCreate)
  
  app.route('/categories')
  .post(categoryControllers.categoryCreate)
  .get(categoryControllers.allCategoriesGet);

  app.route('/expenses')
  .post(expenseControllers.expenseCreate)
  .get(expenseControllers.allExpensesGet);
};
