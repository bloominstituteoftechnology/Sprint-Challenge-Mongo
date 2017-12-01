const bControl = require('../controllers/budgetControllers');
const cControl = require('../controllers/categoryControllers');
const eControl = require('../controllers/expenseControllers');

module.exports = app => {
  app.route('/budget').post(bControl.makeBudget);
  app
    .route('/category')
    .post(cControl.makeCategory)
    .get(cControl.returnCategories);
  app
    .route('/expense')
    .post(eControl.makeExpense)
    .get(eControl.returnExpenses);
};
