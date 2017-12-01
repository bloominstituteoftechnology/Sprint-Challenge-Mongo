const { budgetCreate } = require('../controllers/budgetControllers');
const { categoryCreate, categoryGet } = require('../controllers/categoryControllers');
const { expenseCreate, expensesGet } = require('../controllers/expenseControllers');

module.exports = (app) => {
  app.post('/budget', budgetCreate);

  app
    .route('/category')
    .post(categoryCreate)
    .get(categoryGet);

  app
    .route('/expense')
    .post(expenseCreate)
    .get(expensesGet);
};
