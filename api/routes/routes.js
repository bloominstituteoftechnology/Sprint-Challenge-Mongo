const budgetControllerMethods = require('../controllers/budgetControllers');
const categoryControllerMethods = require('../controllers/categoryControllers');
const expenseControllerMethods = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app.route('/budget').post(budgetControllerMethods.budgetCreate);
  app.route('/category').post(categoryControllerMethods.categoryCreate);
  // app.route('/category/:id').get(categoryControllerMethods.getCategory);
  // app.route('/expense').post(expenseControllerMethods.postExpense);
  // app.route('/expense/:id').get(expenseControllerMethods.getExpense);
};
