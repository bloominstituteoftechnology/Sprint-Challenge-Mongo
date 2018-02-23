module.exports = app => {
  // Todo: Fill in your routes here
  const createBudget = require('../controllers/budgetControllers');
  const category = require('../controllers/categoryControllers');
  const expense = require('../controllers/expenseControllers');

  app.post('/budget', createBudget);
  app.post('/category', category.createCategory);
  app.get('/category', category.categories);
  app.post('/expense', expense.createExpense);
  app.get('/expense', expense.expenses);

};
