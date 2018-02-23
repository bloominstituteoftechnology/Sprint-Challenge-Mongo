const budgetCreate = require('../controllers/budgetControllers');
const { categoryCreate, getCategories } = require('../controllers/categoryControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app.post('/budget', budgetCreate);
  app.post('/category', categoryCreate);
  app.get('/category', getCategories);
  app.post('/expense', expenseCreate);
  app.get('/expense', getExpenses);
};
