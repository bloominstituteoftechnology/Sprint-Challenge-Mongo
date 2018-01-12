const budgetControllerMethods = require('../controllers/budgetControllers');
const categoryControllerMethods = require('../controllers/categoryControllers');
const expenseControllerMethods = require('../controllers/expenseControllers');
const aggregationControllerMethods = require('../controllers/aggregationControllers')

module.exports = app => {
  // Todo: Fill in your routes here
  app.route('/budget').post(budgetControllerMethods.budgetCreate);
  app.route('/budget').get(budgetControllerMethods.listBudgets);
  app.route('/category').post(categoryControllerMethods.categoryCreate);
  app.route('/category').get(categoryControllerMethods.listCategories);
  app.route('/expense').post(expenseControllerMethods.expenseCreate);
  app.route('/expense').get(expenseControllerMethods.listExpenses);
  app.route('/budget/:id/summary').get(aggregationControllerMethods.sumaryByID);
};
