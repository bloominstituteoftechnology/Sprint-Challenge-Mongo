const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  app.route('/budget').post(budgetControllers.budgetCreate); // Post method on /budget to create new budget

  app
    .route('/category')
    .post(categoryControllers.categoryCreate)
    .get(categoryControllers.categoryListAll);

  app
    .route('/expense')
    .post(expenseControllers.expenseCreate)
    .get(expenseControllers.expenseListAll);
};
