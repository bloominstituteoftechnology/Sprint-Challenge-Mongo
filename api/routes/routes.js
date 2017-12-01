const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  app
    .route('/budget')
    .post(budgetControllers.createBudget)

  app
    .route('/category')
    .post(categoryControllers.createCategory)
    .get(categoryControllers.listCategories)
    
  app
    .route('/expense')
    .post(expenseControllers.createExpense)
    .get(expenseControllers.listExpenses)
  
  app
    .route('/budget/:id/summary')
    .get(budgetControllers)

  app
    .route('/expenses?aggregatedBy=category')
    .get
};
