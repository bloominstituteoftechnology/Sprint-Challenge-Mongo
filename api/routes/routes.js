const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  app.post('/budget', budgetControllers.createBudget);

  app.get('/category', categoryControllers.getCategories);
  app.post('/category', categoryControllers.createCategory);

  app.get('/expense', expenseControllers.getExpenses);
  app.post('/expense', expenseControllers.createExpense);
};
