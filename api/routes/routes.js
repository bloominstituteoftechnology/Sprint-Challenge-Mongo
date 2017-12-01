module.exports = app => {
  const budgetControllers = require('../controllers/budgetControllers');
  const categoryControllers = require('../controllers/categoryControllers');
  // const expenseControllers = require('../controllers/expenseControllers');

  app.route('/budget')
  .post(budgetControllers.budgetCreate)
  
  app.route('/categories')
  .post(categoryControllers.categoryCreate)
  .get(categoryControllers.allCategoriesGet);

  // app.route('/expenses')
  // .post(expenseControllers.expenseCreate)
  // .get(expenseControllers.allExpensesGet);
};
