
const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');


module.exports = app => {
  app.route('/budget')
    .post(budgetControllers.budgetCreate);
  app.route('/category')
    .post(categoryControllers.categoryCreate)
    .get(categoryControllers.categoriesGetAll);
  app.route('/expense')
    .post(expenseControllers.expenseCreate)
    .get(expenseControllers.expensesGetAll);
};
