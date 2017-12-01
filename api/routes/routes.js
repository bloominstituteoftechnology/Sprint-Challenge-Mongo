const { budgetCreate, budgetSummary } = require('../controllers/budgetControllers');
const { categoryCreate, categoryGet } = require('../controllers/categoryControllers');
const { expenseCreate, expensesGet, expensesAggregatedBy } = require('../controllers/expenseControllers');

module.exports = (app) => {
  app.post('/budget', budgetCreate);

  app.get('/budget/:id/summary', budgetSummary);

  app
    .route('/category')
    .post(categoryCreate)
    .get(categoryGet);

  app
    .route('/expense')
    .post(expenseCreate)
    .get(expensesGet);

  app.get('/expenses', expensesAggregatedBy);
};
