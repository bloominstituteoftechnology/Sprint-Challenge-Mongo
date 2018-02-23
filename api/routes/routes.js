const budget = require('../controllers/budgetControllers');
const category = require('../controllers/categoryControllers');
const expense = require('../controllers/expenseControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app.post('/budget', (req, res) => {
    budget.budgetCreate
  });
  app.post('/category', (req, res) => {
    category.categoryCreate
  });
  app.get('/category', (req, res) => {
    category.getCategories
  });
  app.post('/expense', (req, res) => {
    expense.expenseCreate
  });
  app.get('/expense', (req, res) => {
    expense.getExpenses
  });
};
