const accountController = require('../controllers/accountControllers');
const categoryController = require('../controllers/categoryControllers');
const expenseController = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  //account
  app.route('/account').post(accountController.createAccount);
  //category
  app.route('/category').post(categoryController.createCategory);
  // app.route('/category/:title').get();
  //expense
  app
    .route('/expense')
    .post(expenseController.createExpense)
    .get(expenseController.getExpenses);
};
