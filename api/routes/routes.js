const BudgetController = require('../controllers/budgetControllers');
const ExpenseController = require('../controllers/expenseControllers');
const CategoryController = require('../controllers/categoryControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app.route('/budget').post(BudgetController.create);
  app.route('/expense')
  .get(ExpenseController.get)
  .post(ExpenseController.create);
  app.route('/expenses').get(ExpenseController.getExpenses);
  app.route('/category')
  .get(CategoryController.get)
  .post(CategoryController.create);
  app.route('/budget/:id/summary')
  .get(BudgetController.getSummary);
};
